import { create } from "zustand";

export interface SelectedNodesStore{
    selectedNodes: Element[]
    clearSelectedNodes: () => void
    setSelectedNodes: (nodes: Element[]) => void
}


const useSelectedNodesStore = create<SelectedNodesStore>((set) => ({
    selectedNodes: [],
    clearSelectedNodes: () => set({ selectedNodes: [] }),
    setSelectedNodes: (nodes: Element[]) => set({ selectedNodes: nodes }),
}))

export default useSelectedNodesStore;