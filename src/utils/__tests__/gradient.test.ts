import { applyOpacity, createColorStop, generateBackground, generateCSS, generateGradient } from 'utils/gradient';
import type { GradientLayer } from 'types/gradient';
import { GradientType, Shape } from 'types/gradient';

const linear: GradientLayer = {
    id: 'linear-1',
    type: GradientType.LINEAR,
    enabled: true,
    angle: 90,
    stops: [
        { id: '1', color: '#ff0000', position: 0, opacity: 1 },
        { id: '2', color: '#0000ff', position: 100, opacity: 1 },
    ],
};

describe('Gradient CSS generator', () => {
    test('creates color stops using percentage positions', () => {
        expect(createColorStop().position).toBe(50);
    });

    test('applies stop opacity while preserving existing color alpha', () => {
        expect(applyOpacity('#ff0000', 0.5)).toBe('#ff000080');
        expect(applyOpacity('#ff000080', 0.5)).toBe('#ff000040');
        expect(applyOpacity('#ff0000', 1)).toBe('#ff0000ff');
    });

    test('includes stop opacity in generated CSS', () => {
        const partlyTransparent: GradientLayer = {
            ...linear,
            stops: [{ ...linear.stops[0], opacity: 0.5 }, linear.stops[1]],
        };

        expect(generateGradient(partlyTransparent)).toBe('linear-gradient(90deg, #ff000080 0%, #0000ffff 100%)');
    });

    test('generates a linear gradient', () => {
        expect(generateGradient(linear)).toBe('linear-gradient(90deg, #ff0000ff 0%, #0000ffff 100%)');
    });

    test('generates a radial gradient', () => {
        const radial: GradientLayer = {
            ...linear,
            type: GradientType.RADIAL,
            shape: Shape.CIRCLE,
            position: { x: 30, y: 70 },
        };

        expect(generateGradient(radial)).toBe('radial-gradient(circle at 30% 70%, #ff0000ff 0%, #0000ffff 100%)');
    });

    test('generates a conic gradient', () => {
        const conic: GradientLayer = {
            ...linear,
            type: GradientType.CONIC,
            angle: 45,
            position: { x: 50, y: 50 },
        };

        expect(generateGradient(conic)).toBe('conic-gradient(from 45deg at 50% 50%, #ff0000ff 0deg, #0000ffff 360deg)');
    });

    test('excludes disabled layers', () => {
        expect(generateBackground([{ ...linear, enabled: false }])).toBe('');
    });

    test('omits layers without color stops from generated CSS', () => {
        expect(generateGradient({ ...linear, stops: [] })).toBe('');
        expect(generateCSS([{ ...linear, stops: [] }])).toBe('background: none;');
    });

    test('generates a solid-color gradient from a single stop', () => {
        expect(generateGradient({ ...linear, stops: [linear.stops[0]] })).toBe(
            'linear-gradient(90deg, #ff0000ff 0%, #ff0000ff 0%)',
        );
    });

    test('preserves gradient layer order', () => {
        expect(generateBackground([linear, { ...linear, id: 'second' }])).toBe(
            `${generateGradient(linear)}, ${generateGradient(linear)}`,
        );
    });

    test('returns valid CSS when no layers are enabled', () => {
        expect(generateCSS([])).toBe('background: none;');
    });
});
