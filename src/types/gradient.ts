export enum GradientType {
    LINEAR = 'linear',
    RADIAL = 'radial',
    CONIC = 'conic',
}

export enum Shape {
    CIRCLE = 'circle',
    ELLIPSE = 'ellipse',
}

export interface ColorStop {
    id: string;
    color: string;
    position: number;
    opacity: number;
}

export type ColorStops = ColorStop[];

export interface Position {
    x: number;
    y: number;
}

interface BaseGradient {
    id: string;
    enabled: boolean;
    stops: ColorStops;
}

export interface LinearGradient extends BaseGradient {
    type: GradientType.LINEAR;
    angle: number;
}

export interface RadialGradient extends BaseGradient {
    type: GradientType.RADIAL;
    shape: Shape;
    position: Position;
}

export interface ConicGradient extends BaseGradient {
    type: GradientType.CONIC;
    angle: number;
    position: Position;
}

export type GradientLayer = LinearGradient | RadialGradient | ConicGradient;

export interface GradientPreset {
    id: string;
    name: string;
    layers: GradientLayer[];
}
