export type ScrollPosition = { x: number; y: number };

export function getScrollPosition(): ScrollPosition {
  return { x: window.scrollX, y: window.scrollY };
}
