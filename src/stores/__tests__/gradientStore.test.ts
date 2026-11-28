import { gradientStore } from 'stores/gradientStore';
import type { ColorStop, GradientPreset } from 'types/gradient';
import { GradientType } from 'types/gradient';

const createStops = (count: number): ColorStop[] =>
    Array.from({ length: count }, (_, index) => ({
        id: `stop-${index}`,
        color: '#ffffff',
        position: index * 25,
        opacity: 1,
    }));

const selectPresetWithStops = (stops: ColorStop[]): void => {
    const preset: GradientPreset = {
        id: 'remove-color-stop-test',
        name: 'Remove color stop test',
        layers: [
            {
                id: 'layer-1',
                type: GradientType.LINEAR,
                enabled: true,
                angle: 90,
                stops,
            },
        ],
    };

    gradientStore.selectPreset(preset);
};

describe('GradientStore.removeColorStop', () => {
    test.each([
        [3, 2],
        [2, 1],
        [1, 0],
    ])('removes one stop from %i stops, leaving %i', (initialCount, remainingCount) => {
        const stops = createStops(initialCount);
        const stopId = initialCount === 1 ? 'stop-0' : 'stop-1';
        const remainingStops = stops.filter((stop) => stop.id !== stopId);
        selectPresetWithStops(stops);

        gradientStore.removeColorStop('layer-1', stopId);

        expect(gradientStore.layers[0].stops).toHaveLength(remainingCount);
        expect(gradientStore.layers).toHaveLength(1);
        expect(gradientStore.selectedPresetId).toBeNull();
        expect(gradientStore.layers[0].stops).toEqual(remainingStops);
    });

    test('does not mutate the layer or preset when the stop does not exist', () => {
        const stops = createStops(3);
        selectPresetWithStops(stops);
        const layersBefore = [...gradientStore.layers];
        const stopsBefore = stops.map((stop) => ({ ...stop }));

        gradientStore.removeColorStop('layer-1', 'missing-stop');

        expect(gradientStore.layers).toEqual(layersBefore);
        expect(gradientStore.layers[0].stops).toEqual(stopsBefore);
        expect(gradientStore.selectedPresetId).toBe('remove-color-stop-test');
    });

    test('does not mutate the store when the layer does not exist', () => {
        const stops = createStops(3);
        selectPresetWithStops(stops);
        const layersBefore = [...gradientStore.layers];
        const stopsBefore = stops.map((stop) => ({ ...stop }));

        gradientStore.removeColorStop('missing-layer', 'stop-1');

        expect(gradientStore.layers).toEqual(layersBefore);
        expect(gradientStore.layers[0].stops).toEqual(stopsBefore);
        expect(gradientStore.selectedPresetId).toBe('remove-color-stop-test');
    });

    test('keeps an empty stop list empty when removal is attempted', () => {
        selectPresetWithStops([]);

        gradientStore.removeColorStop('layer-1', 'missing-stop');

        expect(gradientStore.layers[0].stops).toEqual([]);
        expect(gradientStore.selectedPresetId).toBe('remove-color-stop-test');
    });
});
