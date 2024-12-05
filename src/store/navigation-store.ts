import { NavigationState } from "@/types/types";
import { create } from "zustand";

const useNavigationStore = create<NavigationState>((set) => ({
    isNavigating: false,
    startNavigation: () => set({ isNavigating: true }),
    endNavigation: () => set({ isNavigating: false }),
  }));
  
  export default useNavigationStore;