import { makeAutoObservable } from 'mobx';
import type { GradientLayer, GradientPreset, GradientType, ColorStop } from 'types/gradient';
import { presets } from 'data/presets';
import {
    generateBackground,
    generateCSS,
    createGradient,
    convertGradient,
    createColorStop,
    cloneGradient,
    getNewColorStopPosition,
} from 'utils/gradient';

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
        this.layers = preset.layers.map(cloneGradient);
        this.selectedPresetId = preset.id;
    };

    addLayer = (type: GradientType) => {
        const layer = createGradient(type);

        this.layers.push(layer);
        this.selectedPresetId = null;
    };

    toggleLayerVisibility = (id: string) => {
        const layer = this.layers.find((layer) => layer.id === id);
        if (!layer) return;

        this.updateLayer(id, { enabled: !layer.enabled });
    };

    removeLayer = (id: string) => {
        const index = this.layers.findIndex((layer) => layer.id === id);
        if (index === -1) return;

        this.layers.splice(index, 1);
        this.selectedPresetId = null;
    };

    duplicateLayer = (id: string) => {
        const index = this.layers.findIndex((layer) => layer.id === id);
        if (index === -1) return;

        const duplicatedLayer = cloneGradient(this.layers[index]);
        duplicatedLayer.id = crypto.randomUUID();
        duplicatedLayer.stops.forEach((stop) => {
            stop.id = crypto.randomUUID();
        });
        this.layers.splice(index + 1, 0, duplicatedLayer);
        this.selectedPresetId = null;
    };

    moveLayer = (id: string, direction: 'up' | 'down') => {
        const index = this.layers.findIndex((layer) => layer.id === id);
        if (index === -1) return;
        if (index === 0 && direction === 'up') return;
        if (index === this.layers.length - 1 && direction === 'down') return;

        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        const [layer] = this.layers.splice(index, 1);
        this.layers.splice(targetIndex, 0, layer);

        this.selectedPresetId = null;
    };

    changeLayerType = (id: string, type: GradientType) => {
        const index = this.layers.findIndex((layer) => layer.id === id);
        if (index === -1) return;

        const layer = this.layers[index];
        if (layer.type === type) return;

        const convertedLayer = convertGradient(layer, type);
        this.layers[index] = convertedLayer;
        this.selectedPresetId = null;
    };

    addColorStop = (layerId: string) => {
        const layer = this.layers.find((layer) => layer.id === layerId);
        if (!layer) return;

        const newColor = createColorStop(getNewColorStopPosition(layer.stops));
        layer.stops.push(newColor);

        this.selectedPresetId = null;
    };

    removeColorStop = (layerId: string, stopId: string) => {
        const layer = this.layers.find((layer) => layer.id === layerId);
        if (!layer) return;

        const stopIndex = layer.stops.findIndex((stop) => stop.id === stopId);
        if (stopIndex === -1) return;

        layer.stops.splice(stopIndex, 1);
        this.selectedPresetId = null;
    };

    updateColorStop = (layerId: string, stopId: string, properties: Partial<Omit<ColorStop, 'id'>>) => {
        const layer = this.layers.find((layer) => layer.id === layerId);
        if (!layer) return;

        const stop = layer.stops.find((stop) => stop.id === stopId);
        if (!stop) return;

        Object.assign(stop, properties);
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
