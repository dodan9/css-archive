import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
  isGuide: boolean;
  isHelper: boolean;
  isControl: boolean;
}

interface Action {
  actions: {
    setIsGuide: () => void;
    setIsHelper: () => void;
    setIsControl: () => void;
  };
}

const useThreeStore = create<State & Action>()(
  immer((set) => ({
    isGuide: true,
    isHelper: true,
    isControl: true,

    actions: {
      setIsGuide: () => {
        set((state) => ({ isGuide: !state.isGuide }));
      },

      setIsHelper: () => {
        set((state) => ({ isHelper: !state.isHelper }));
      },

      setIsControl: () => {
        set((state) => ({ isControl: !state.isControl }));
      },
    },
  }))
);

export const useIsGuide = () => useThreeStore((state) => state.isGuide);
export const useIsHelper = () => useThreeStore((state) => state.isHelper);
export const useIsControl = () => useThreeStore((state) => state.isControl);

export const useSettingStates = () =>
  useThreeStore(({ isControl, isGuide, isHelper }) => {
    return { isControl, isGuide, isHelper };
  });
export const useSettingActions = () => useThreeStore((state) => state.actions);
