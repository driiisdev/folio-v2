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
  location: string;
  updateTime: () => void;
  setLocation: (postalCode: string) => void;
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

export const useTime = create<TimeState>((set) => ({
  currentTime: new Date(),
  location: 'Ontario, CA',
  postalCode: PostalCode,
  updateTime: () => set({ currentTime: new Date() }),
  setLocation: (location: string) => set({ location }),
}));
