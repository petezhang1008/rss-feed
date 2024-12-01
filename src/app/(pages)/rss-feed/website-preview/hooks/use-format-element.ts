import { useMemo } from "react";
import useSelectedNodesStore from "../store/use-selected-nodes";

export interface MatchingData{
    title: string;
    link: string;
}

export default function useFormatElement() {
    const selectedNodes = useSelectedNodesStore(state => state.selectedNodes);
    const selectedList:MatchingData[] = useMemo(() => {
        return selectedNodes?.map(node => { 
            return {
                title: node.textContent||'',
                link: node.getAttribute('href') || ''
            }
        })
    }, [selectedNodes])

    return selectedList
}