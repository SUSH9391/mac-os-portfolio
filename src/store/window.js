import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { create } from "zustand";
import { produce } from "immer";

const useWindowStore = create((set) => ({
  windows: WINDOW_CONFIG,
  nextZIndex: INITIAL_Z_INDEX + 1,

  openWindow: (windowKey, data = null) =>
    set((state) =>
      produce(state, (draft) => {
        const win = draft.windows?.[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.zIndex = draft.nextZIndex;
        win.data = data ?? win.data;
        draft.nextZIndex += 1;
      })
    ),

  closeWindow: (windowKey) =>
    set((state) =>
      produce(state, (draft) => {
        const win = draft.windows?.[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      })
    ),

  focusWindow: (windowKey) =>
    set((state) =>
      produce(state, (draft) => {
        const win = draft.windows?.[windowKey];
        if (!win) return;
        win.zIndex = draft.nextZIndex;
        draft.nextZIndex += 1;
      })
    ),
}));

export default useWindowStore;
