import { makeAutoObservable } from 'mobx';
import type { GradientLayer, GradientPreset } from 'types/gradient';
import { presets } from 'data/presets';
import { generateBackground, generateCSS } from 'utils/gradient';

class GradientStore {
    layers: GradientLayer[] = [];
    selectedPresetId: string | null = null;

    constructor() {
        makeAutoObservable(this);

        this.selectPreset(presets[0]);
    }

    get background() {
        return generateBackground(this.layers);
    }

    get css() {
        return generateCSS(this.layers);
    }

    selectPreset = (preset: GradientPreset) => {
        this.layers = preset.layers;
        this.selectedPresetId = preset.id;
    };

    toggleLayerVisibility = (id: string) => {
        const layer = this.layers.find((layer) => layer.id === id);

        if (!layer) return;

        this.updateLayer(id, { enabled: !layer.enabled });
    };

    removeLayer = (id: string) => {
        this.layers = this.layers.filter((layer) => layer.id !== id);
        this.selectedPresetId = null;
    };

    duplicateLayer = (id: string) => {
        const index = this.layers.findIndex((layer) => layer.id === id);

        if (index === -1) return;

        const layer = this.layers[index];
        const duplicatedLayer = {
            ...layer,
            id: crypto.randomUUID(),
            stops: layer.stops.map((stop) => ({
                ...stop,
                id: crypto.randomUUID(),
            })) as typeof layer.stops,
        };
        this.layers.splice(index + 1, 0, duplicatedLayer);
        this.selectedPresetId = null;
    };

    updateLayer = (id: string, changes: Partial<GradientLayer>) => {
        const layer = this.layers.find((layer) => layer.id === id);

        if (!layer) return;

        Object.assign(layer, changes);
        this.selectedPresetId = null;
    };
}

export const gradientStore = new GradientStore();
