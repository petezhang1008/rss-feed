import { use, useEffect, useRef } from 'react';
import useNodePathStore from '../store/use-node-path';
import useSelectedNodesStore from '../store/use-selected-nodes';

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
        anchor.addEventListener('click', function(event) {
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
        const path = getNodePath(target);
        const selector = getNodeFromPath(path)
        const targets = iframeDocument.querySelectorAll(selector);
        if(targets.length > 1 && hasAnchorTag(target)){
            targets.forEach((element) => {
                element.setAttribute('rss-aria-selected', 'true');
            });
            setPath(path)
            setSelectedNodes(Array.from(targets));
        }
    })
}

function selectedNodes(iframeDocument: Document,
    path: string|null,
    {
    clearPath,
    clearSelectedNodes,
    setSelectedNodes
}: Partial<SelectNodeOptions>) { 
    iframeDocument.querySelectorAll('[rss-aria-selected]').forEach((element) => {
        element.removeAttribute('rss-aria-selected')
        clearPath!();
        clearSelectedNodes!();
    });
    if(!path) return;
    const selector = getNodeFromPath(path)
    const targets = iframeDocument.querySelectorAll(selector);
    if (targets.length > 0) {
        targets.forEach((element) => {
            element.setAttribute('rss-aria-selected', 'true');
            setSelectedNodes!(Array.from(targets));
        });
    }
}

function onHoverNode(iframeDocument: Document) {
    iframeDocument.addEventListener('mouseover', function (event) { 
        iframeDocument.querySelectorAll('[rss-aria-hovered]').forEach((element) => {
            element.removeAttribute('rss-aria-hovered')
        });
        const target = event.target as HTMLElement;
        const path = getNodePath(target);
        const selector = getNodeFromPath(path)
        const targets = iframeDocument.querySelectorAll(selector);
        if(targets.length > 1 && hasAnchorTag(target)){
            targets.forEach((element) => {
                element.setAttribute('rss-aria-hovered', 'true');
            });
        }

    })
}

// 获取对应的节点
function getNodeFromPath(path: string) {
    // 将路径中的 '#document' 替换为 'document'
    const cleanPath = path.replace('#document', '').split(' > ').map(name => name.trim()).join(' ');

    // 使用 eval 来动态执行获取节点的代码
    return cleanPath
}


const EXTRACT_NODES = ['html', 'body']
function getNodePath(node: Element|null): string {
    const path: string[] = [];

    while (node) {
        let name = node.nodeName.toLowerCase();
        
        // 如果是元素节点，添加 ID 或类名
        if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.id) {
                name += `#${node.id}`;
            } else if (node.className) {
                name += `.${Array.from(node.classList).join('.')}`;
            }
        }

        path.unshift(name); // 将节点名称添加到路径的开头
        const parentNode = node.parentNode;
        if (parentNode?.nodeType === Node.ELEMENT_NODE && !EXTRACT_NODES.includes(parentNode.nodeName.toLowerCase())) { 
            node = parentNode as Element; // 移动到父节点
        } else {
            node = null
        }
    }

    return path.join(' > '); // 使用 " > " 连接路径
}

function hasAnchorTag(node:Element) {
    if (node.nodeName === 'A') { 
        return true;
    }
    // 获取所有子节点
    const childNodes = node.children; // 只获取元素节点
    let containsAnchor = false;

    // 遍历所有子节点
    for (let i = 0; i < childNodes.length; i++) {
        const child = childNodes[i];

        // 检查当前子节点是否包含 <a> 标签
        if (child.querySelector('a')) {
            containsAnchor = true;
            break; // 找到后退出循环
        }
    }

    return containsAnchor;
}


const useIframeEvent = () => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const setPath = useNodePathStore((state) => state.setPath);
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
                }
            }
        };

        const currentIframe: Element|null = iframeRef.current;
        currentIframe?.addEventListener('load', handleLoad);

        return () => {
            currentIframe?.removeEventListener('load', handleLoad);
        };
    });
    return iframeRef;
};

export default useIframeEvent;