import { create } from 'zustand'


const useIframeDataStore = create<{
    title: string | null
    setTitle: (title: string) => void
    clearTitle: () => void
}>((set) => ({
    title: null,
    setTitle: (title: string) => set({ title: title }),
    clearTitle: () => set({ title: null }),
}))

export default useIframeDataStore