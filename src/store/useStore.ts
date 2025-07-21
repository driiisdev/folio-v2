import { create } from "zustand";
import { devtools } from "zustand/middleware";

const PostalCode = import.meta.env.VITE_POSTAL_CODE

interface contactModalState {
  isContactOpen: boolean;
  setIsContactOpen: (isOpen: boolean) => void;
}

interface navigationTabState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface TimeState {
  currentTime: Date;
  postalCode: string;
  activeLocation: string;
  updateTime: () => void;
  setLocation: (postalCode: string) => void;
}

interface CubeIndexState {
  cubeIndex: number;
  setCubeIndex: (index: number | ((prev: number) => number)) => void;
}

export const useContactModal = create<contactModalState>()(
  devtools((set) => ({
      isContactOpen: false,
      setIsContactOpen: (isOpen) => set({isContactOpen: isOpen}),
    })
  )
);

export const useNavigationTab = create<navigationTabState>()(
  devtools((set) => ({
      activeTab: "Experience",
      setActiveTab: (tab) => set({ activeTab: tab }),
  }))
);

export const useTime = create<TimeState>()(
  devtools((set) => ({
      currentTime: new Date(),
      postalCode: PostalCode,
      activeLocation: "Ontario, CA",
      updateTime: () => set({ currentTime: new Date() }),
      setLocation: (location: string) => set({ activeLocation : location }),
    })
  )
);

export const useCubeIndex = create<CubeIndexState>()(
  devtools((set) => ({
    cubeIndex: 0,
    setCubeIndex: (index) =>
      set((state) => ({
        cubeIndex: typeof index === 'function' ? index(state.cubeIndex) : index,
      })),
  }))
);
