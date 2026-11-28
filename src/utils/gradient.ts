import { GradientType, Shape } from 'types/gradient';
import type { ColorStop, GradientLayer } from 'types/gradient';

export const applyOpacity = (hex: string, opacity: number): string => {
    if (!/^#(?:[\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i.test(hex)) {
        throw new Error(`Unsupported hex color: ${hex}`);
    }

    if (!Number.isFinite(opacity)) {
        throw new RangeError(`Opacity must be finite: ${opacity}`);
    }

    const digits = hex.slice(1);
    const normalized = digits.length <= 4 ? [...digits].map((digit) => digit + digit).join('') : digits;
    const colorAlpha = normalized.length === 8 ? Number.parseInt(normalized.slice(6, 8), 16) : 255;
    const alphaHex = Math.round(colorAlpha * Math.max(0, Math.min(1, opacity)))
        .toString(16)
        .padStart(2, '0');

    return `#${normalized.slice(0, 6)}${alphaHex}`;
};

const formatStops = (stops: ColorStop[], type: GradientLayer['type']): string =>
    (stops.length === 1 ? [stops[0], stops[0]] : [...stops])
        .sort((a, b) => a.position - b.position)
        .map(({ color, opacity, position }) => {
            const unit = type === GradientType.CONIC ? 'deg' : '%';
            const value = type === GradientType.CONIC ? position * 3.6 : position;

            return `${applyOpacity(color, opacity)} ${Number(value.toFixed(3))}${unit}`;
        })
        .join(', ');

export const generateGradient = (layer: GradientLayer): string => {
    if (layer.stops.length === 0) return '';

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
        .filter((gradient) => gradient.length > 0)
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

export const cloneGradient = (layer: GradientLayer): GradientLayer => {
    const stops = layer.stops.map((stop) => ({ ...stop }));

    if (layer.type === GradientType.LINEAR) return { ...layer, stops };
    return { ...layer, stops, position: { ...layer.position } };
};

export const createColorStop = (position = 50): ColorStop => ({
    id: crypto.randomUUID(),
    color: '#ffffff',
    position,
    opacity: 1,
});

export const getNewColorStopPosition = (stops: ColorStop[]): number => {
    if (!stops.length) return 0;

    const positions = stops.map(({ position }) => position).sort((a, b) => a - b);

    if (positions[0] > 0) return 0;
    if (positions[positions.length - 1] < 100) return 100;

    let maxGap = 0;
    let position = 50;

    for (let i = 1; i < positions.length; i++) {
        const gap = positions[i] - positions[i - 1];

        if (gap > maxGap) {
            maxGap = gap;
            position = positions[i - 1] + gap / 2;
        }
    }

    return position;
};
