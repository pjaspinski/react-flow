import { MouseEvent as ReactMouseEvent } from 'react';
import { DraggableEvent } from 'react-draggable';
import { Dimensions, XYPosition } from '../types';
export declare const isInputDOMNode: (e: ReactMouseEvent | DraggableEvent | KeyboardEvent) => boolean;
export declare const getDimensions: (node: HTMLDivElement) => Dimensions;
export declare const clamp: (val: number, min?: number, max?: number) => number;
export declare const clampPosition: (position: XYPosition, extent: import("../types").TranslateExtent) => {
    x: number;
    y: number;
};
export declare const getHostForElement: (element: HTMLElement) => Document | ShadowRoot;
