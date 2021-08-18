import { MouseEvent as ReactMouseEvent } from 'react';
import { DraggableEvent } from 'react-draggable';
import { Dimensions, NodeExtent, XYPosition } from '../types';


export const isInputDOMNode = (e: ReactMouseEvent | DraggableEvent | KeyboardEvent) => {
  const target = e?.target as HTMLElement;

  return (
    ['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON'].includes(target?.nodeName) || target?.hasAttribute('contenteditable')
  );
};

export const getDimensions = (node: HTMLDivElement): Dimensions => {
  const rect = node.getBoundingClientRect();
  return {width: rect.width, height: rect.height}
}
// ({
//   width: node.offsetWidth,
//   height: node.offsetHeight,
// })
;

export const clamp = (val: number, min: number = 0, max: number = 1): number => Math.min(Math.max(val, min), max);

export const clampPosition = (position: XYPosition, extent: NodeExtent) => ({
  x: clamp(position.x, extent[0][0], extent[1][0]),
  y: clamp(position.y, extent[0][1], extent[1][1]),
});

export const getHostForElement = (element: HTMLElement): Document | ShadowRoot =>
  (element.getRootNode?.() as Document | ShadowRoot) || window?.document;
