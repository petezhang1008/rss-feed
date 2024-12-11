import { Bundle } from '@prisma/client'
import { create } from 'zustand'

const useBundleStore = create<{
    bundles: Bundle[]
    setBundles: (bundles: Bundle[]) => void
    addBundle: (bundle: Bundle) => void
}>((set) => ({
    bundles: [],
    setBundles: (bundles) => set({ bundles }),
    addBundle: (bundle) => set((state) => ({ bundles: [...state.bundles, bundle] }))
}))

export default useBundleStore