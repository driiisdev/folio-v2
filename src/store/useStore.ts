import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface contactModalState {
  isContactOpen: boolean;
  setIsContactOpen: (isOpen: boolean) => void;
}

interface navigationTabState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const useContactModal = create<contactModalState>()(
  devtools(
    (set) => ({
      isContactOpen: false,
      setIsContactOpen: (isOpen) => set({isContactOpen: isOpen}),
    })
  )
);

export const useNavigationTab = create<navigationTabState>()(
  devtools(
    (set) => ({
      activeTab: "experience",
      setActiveTab: (tab) => set({ activeTab: tab }),
  }))
);
