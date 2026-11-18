import { GradientType } from 'types/gradient';
import type { ColorStop, GradientLayer } from 'types/gradient';

const formatStops = (stops: ColorStop[], opacity: number, type: GradientLayer['type']): string =>
    [...stops]
        .sort((a, b) => a.position - b.position)
        .map(({ color, position }) => {
            const unit = type === GradientType.CONIC ? 'deg' : '%';
            const value = type === GradientType.CONIC ? position * 3.6 : position;

            return `${color} ${Number(value.toFixed(3))}${unit}`;
        })
        .join(', ');

export const generateGradient = (layer: GradientLayer): string => {
    const stops = formatStops(layer.stops, layer.opacity, layer.type);

    switch (layer.type) {
        case GradientType.LINEAR:
            return `linear-gradient(${layer.angle}deg, ${stops})`;

        case GradientType.RADIAL:
            return `radial-gradient(${layer.shape} at ${layer.position.x}% ${layer.position.y}%, ${stops})`;

        case GradientType.CONIC:
            return `conic-gradient(from ${layer.angle}deg at ${layer.position.x}% ${layer.position.y}%, ${stops})`;
    }
};

export const generateBackground = (layers: GradientLayer[]): string =>
    layers
        .filter((layer) => layer.enabled)
        .map(generateGradient)
        .join(', ');

export const generateCSS = (layers: GradientLayer[]): string => {
    const background = generateBackground(layers);

    return background ? `background: ${background};` : 'background: none;';
};
