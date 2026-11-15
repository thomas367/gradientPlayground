import { GradientType, type ColorStop, type GradientLayer } from 'types/gradient';

const HEX_PATTERN = /^#?([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
const FALLBACK_COLOR = 'transparent';

export const isValidHex = (hex: string): boolean => HEX_PATTERN.test(hex);

const hexToRgba = (hex: string, opacity: number): string => {
    const normalized = hex.replace('#', '');

    const expanded =
        normalized.length <= 4
            ? normalized
                  .split('')
                  .map((character) => character + character)
                  .join('')
            : normalized;

    const r = parseInt(expanded.slice(0, 2), 16);
    const g = parseInt(expanded.slice(2, 4), 16);
    const b = parseInt(expanded.slice(4, 6), 16);

    const alpha = expanded.length === 8 ? parseInt(expanded.slice(6, 8), 16) / 255 : 1;

    return `rgba(${r}, ${g}, ${b}, ${Number((alpha * opacity).toFixed(3))})`;
};

const formatColor = (color: string, opacity: number): string => {
    if (!isValidHex(color)) {
        return FALLBACK_COLOR;
    }

    return opacity === 1 ? color : hexToRgba(color, opacity);
};

const formatStops = (stops: ColorStop[], opacity: number, type: GradientLayer['type']): string =>
    [...stops]
        .sort((a, b) => a.position - b.position)
        .map(({ color, position }) => {
            const unit = type === GradientType.CONIC ? 'deg' : '%';
            const value = type === GradientType.CONIC ? position * 3.6 : position;

            return `${formatColor(color, opacity)} ${Number(value.toFixed(3))}${unit}`;
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
