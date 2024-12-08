import { create } from 'zustand'

export interface IframeDataStore {
    title: string | null
    setTitle: (title: string) => void
    clearTitle: () => void
}

const useIframeDataStore = create<IframeDataStore>((set) => ({
    title: null,
    setTitle: (title: string) => set({ title: title }),
    clearTitle: () => set({ title: null }),
}))

export default useIframeDataStore