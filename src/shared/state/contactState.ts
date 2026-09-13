import { useSyncExternalStore } from "react";

/**
 * Quản lý trạng thái mở/đóng Contact Speed-Dial bằng React 18 useSyncExternalStore
 * Hoàn toàn tương thích native với Zalo Mini App, không phụ thuộc thư viện ngoài
 */
let isOpen = false;
const listeners = new Set<() => void>();

export const contactSpeedDialState = {
  get: () => isOpen,
  set: (next: boolean | ((prev: boolean) => boolean)) => {
    const updated = typeof next === "function" ? next(isOpen) : next;
    if (updated !== isOpen) {
      isOpen = updated;
      listeners.forEach((listener) => listener());
    }
  },
  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};

export const useContactSpeedDial = (): [boolean, (next: boolean | ((prev: boolean) => boolean)) => void] => {
  const open = useSyncExternalStore(
    contactSpeedDialState.subscribe,
    contactSpeedDialState.get,
    () => false
  );
  return [open, contactSpeedDialState.set];
};
