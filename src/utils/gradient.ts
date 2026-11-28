import { GradientType, Shape } from 'types/gradient';
import type { ColorStop, GradientLayer } from 'types/gradient';

const formatStops = (stops: ColorStop[], type: GradientLayer['type']): string =>
    [...stops]
        .sort((a, b) => a.position - b.position)
        .map(({ color, position }) => {
            const unit = type === GradientType.CONIC ? 'deg' : '%';
            const value = type === GradientType.CONIC ? position * 3.6 : position;

            return `${color} ${Number(value.toFixed(3))}${unit}`;
        })
        .join(', ');

export const generateGradient = (layer: GradientLayer): string => {
    const stops = formatStops(layer.stops, layer.type);

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

export const createGradient = (type: GradientType): GradientLayer => {
    const newLayer: Pick<GradientLayer, 'id' | 'enabled' | 'stops'> = {
        id: crypto.randomUUID(),
        enabled: true,
        stops: [
            {
                id: crypto.randomUUID(),
                color: '#9566ff',
                position: 0,
                opacity: 1,
            },
            {
                id: crypto.randomUUID(),
                color: '#ec4899',
                position: 100,
                opacity: 1,
            },
        ],
    };

    switch (type) {
        case GradientType.LINEAR:
            return { ...newLayer, type, angle: 135 };

        case GradientType.RADIAL:
            return { ...newLayer, type, shape: Shape.CIRCLE, position: { x: 50, y: 50 } };
        case GradientType.CONIC:
            return { ...newLayer, type, angle: 0, position: { x: 50, y: 50 } };
    }
};

export const convertGradient = (layer: GradientLayer, type: GradientType): GradientLayer => {
    const baseLayerProperties = {
        id: layer.id,
        enabled: layer.enabled,
        stops: layer.stops,
    };

    switch (type) {
        case GradientType.LINEAR:
            return { ...baseLayerProperties, type, angle: 135 };

        case GradientType.RADIAL:
            return { ...baseLayerProperties, type, shape: Shape.CIRCLE, position: { x: 50, y: 50 } };
        case GradientType.CONIC:
            return { ...baseLayerProperties, type, angle: 0, position: { x: 50, y: 50 } };
    }
};
