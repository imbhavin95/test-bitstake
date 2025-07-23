import { create } from 'zustand';

type UIState = {
  mobileMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  mobileMenuOpen: false,
  toggleMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
  closeMenu: () => set({ mobileMenuOpen: false }),
}));
