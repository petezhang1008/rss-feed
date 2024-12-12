import { useEffect, useRef } from 'react';
import useNodePathStore from '../store/use-node-path';
import useSelectedNodesStore from '../store/use-selected-nodes';
import useIframeDataStore from '../store/use-iframe-data';

function initStyle(iframeDocument: Document) {
    const style = iframeDocument.createElement('style');
    style.innerHTML = `
        [rss-aria-hovered='true'] {
            outline: 3px dashed #FF7C33;
            background-color: rgba(255, 124, 51, 0.3);
        }

        [rss-aria-selected='true'] {
            outline: 3px dashed #FF7C33;
            background-color: rgba(255, 124, 51, 0.3);
        }
    `;
    iframeDocument.head.appendChild(style);
}


function onStopLinkEvent(iframeDocument: Document) {
    iframeDocument.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            window.stop(); // 停止加载
        });
    });
}


type SelectNodeOptions = {
    setPath: (path: string) => void;
    clearPath: () => void;
    setSelectedNodes: (nodes: Element[]) => void;
    clearSelectedNodes: () => void;
}

function onSelectNode(iframeDocument: Document, {
    setPath,
    clearPath,
    setSelectedNodes,
    clearSelectedNodes
}: SelectNodeOptions) {

    iframeDocument.addEventListener('click', function (event) {

        iframeDocument.querySelectorAll('[rss-aria-selected]').forEach((element) => {
            element.removeAttribute('rss-aria-selected')
            clearPath();
            clearSelectedNodes();
        });
        const target = event.target as HTMLElement;
        const linkTarget = findLinkTarget(target, iframeDocument);
        if (!linkTarget) {
            return;
        }
        const path = getNodePath(linkTarget, iframeDocument);
        const selector = path
        const targets = iframeDocument.querySelectorAll(selector);
        if (targets.length > 1) {
            targets.forEach((element) => {
                element.setAttribute('rss-aria-selected', 'true');
            });
            setPath(path)
            setSelectedNodes(Array.from(targets));
        }
    })
}

function onHoverNode(iframeDocument: Document) {
    iframeDocument.addEventListener('mouseover', function (event) {
        iframeDocument.querySelectorAll('[rss-aria-hovered]').forEach((element) => {
            element.removeAttribute('rss-aria-hovered')
        });
        const target = event.target as HTMLElement;
        const linkTarget = findLinkTarget(target, iframeDocument);
        if (!linkTarget) {
            return;
        }
        const path = getNodePath(linkTarget, iframeDocument);
        const selector = path;
        const targets = iframeDocument.querySelectorAll(selector);
        if (targets.length > 1) {
            targets.forEach((element) => {
                element.setAttribute('rss-aria-hovered', 'true');
            });
        }

    })
}

const EXTRACT_NODES = ['html']
function getNodePath(node: Element | null, iframeDocument: Document): string {
    const path: string[] = [];

    while (node) {
        let selector = node.nodeName.toLowerCase();
        if (node.className) {
            selector += `.${Array.from(node.classList).join('.')}`;
        }

        path.unshift(selector); // 将节点名称添加到路径的开头
        const parentNode = node.parentNode;
        if (parentNode?.nodeType === Node.ELEMENT_NODE && !EXTRACT_NODES.includes(parentNode.nodeName.toLowerCase())) {
            node = parentNode as Element; // 移动到父节点
        } else {
            node = null
        }
    }
    let selector = path.join(' > ');
    let elementList = iframeDocument.querySelectorAll(selector)
    let index = path.length - 1
    while (elementList.length <= 1 && index > 0) {
        path[index] = removeClassNameAndId(path[index])
        selector = path.join(' > ');
        elementList = iframeDocument.querySelectorAll(selector)
        index--
    }

    return path.join(' > '); // 使用 " > " 连接路径
}

function removeClassNameAndId(selector: string) {
    return selector.replace(/\.[\w-]+|\#[\w-]+/g, '');
}

function findLinkTarget(node: Element, iframeDocument: Document) {
    if (node.tagName === 'A') {
        return node;
    }
    const parentNode = node.parentNode;
    if (parentNode?.nodeType === Node.ELEMENT_NODE) {
        return findLinkTarget(parentNode as Element, iframeDocument);
    }
    return null;
}

function getTitle(iframeDocument: Document) {
    const title = iframeDocument.title;
    return title;
}


const useIframeEvent = () => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const setPath = useNodePathStore((state) => state.setPath);
    const setTitle = useIframeDataStore((state) => state.setTitle);
    const clearPath = useNodePathStore((state) => state.clearPath);
    const setSelectedNodes = useSelectedNodesStore((state) => state.setSelectedNodes);
    const clearSelectedNodes = useSelectedNodesStore((state) => state.clearSelectedNodes);

    useEffect(() => {

        const handleLoad = () => {
            if (iframeRef.current) {
                const iframeDocument = iframeRef.current?.contentDocument || iframeRef.current?.contentWindow?.document;
                if (iframeDocument) {
                    initStyle(iframeDocument);
                    onStopLinkEvent(iframeDocument);
                    onHoverNode(iframeDocument);

                    onSelectNode(iframeDocument, {
                        setPath,
                        clearPath,
                        setSelectedNodes,
                        clearSelectedNodes
                    });
                    setTitle(getTitle(iframeDocument));
                }
            }
        };

        const currentIframe: Element | null = iframeRef.current;
        currentIframe?.addEventListener('load', handleLoad);

        return () => {
            currentIframe?.removeEventListener('load', handleLoad);
        };
    });
    return iframeRef;
};

export default useIframeEvent;