import { create } from 'zustand'

export interface NodePathStore {
  path: string | null
  clearPath: () => void
  setPath: (path: string) => void
}

const useNodePathStore = create<NodePathStore>((set) => ({
  path: null,
  clearPath: () => set({ path: null }),
  setPath: (path: string) => set({ path: path }),
}))

export default useNodePathStore