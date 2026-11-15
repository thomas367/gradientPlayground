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

    updateLayer = (id: string, changes: Partial<GradientLayer>) => {
        const layer = this.layers.find((layer) => layer.id === id);

        if (!layer) return;

        Object.assign(layer, changes);
        this.selectedPresetId = null;
    };
}

export const gradientStore = new GradientStore();
