import { generateBackground, generateCSS, generateGradient } from 'utils/gradient';
import type { GradientLayer } from 'types/gradient';
import { GradientType, Shape } from 'types/gradient';

const linear: GradientLayer = {
    id: 'linear-1',
    type: GradientType.LINEAR,
    enabled: true,
    opacity: 1,
    angle: 90,
    stops: [
        { id: '1', color: '#ff0000', position: 0 },
        { id: '2', color: '#0000ff', position: 100 },
    ],
};

describe('Gradient CSS generator', () => {
    test('generates a linear gradient', () => {
        expect(generateGradient(linear)).toBe('linear-gradient(90deg, #ff0000 0%, #0000ff 100%)');
    });

    test('generates a radial gradient', () => {
        const radial: GradientLayer = {
            ...linear,
            type: GradientType.RADIAL,
            shape: Shape.CIRCLE,
            position: { x: 30, y: 70 },
        };

        expect(generateGradient(radial)).toBe('radial-gradient(circle at 30% 70%, #ff0000 0%, #0000ff 100%)');
    });

    test('generates a conic gradient', () => {
        const conic: GradientLayer = {
            ...linear,
            type: GradientType.CONIC,
            angle: 45,
            position: { x: 50, y: 50 },
        };

        expect(generateGradient(conic)).toBe('conic-gradient(from 45deg at 50% 50%, #ff0000 0deg, #0000ff 360deg)');
    });

    test('applies layer opacity to color stops', () => {
        expect(generateGradient({ ...linear, opacity: 0.5 })).toBe(
            'linear-gradient(90deg, rgba(255, 0, 0, 0.5) 0%, rgba(0, 0, 255, 0.5) 100%)',
        );
    });

    test('excludes disabled layers', () => {
        expect(generateBackground([{ ...linear, enabled: false }])).toBe('');
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
