import type React from 'react';
import { observer } from 'mobx-react-lite';
import { Plus, GripVertical, ArrowUp, ArrowDown, Eye, EyeOff, Copy, Layers, Trash2 } from 'lucide-react';
import { Panel } from 'components/panel/panel';
import { LinearControls } from 'components/gradientLayers/controls/linearControls';
import { RadialControls } from 'components/gradientLayers/controls/radialControls';
import { ConicControls } from 'components/gradientLayers/controls/conicControls';
import { ColorStops } from 'components/gradientLayers/controls/colorStops/colorStops';
import { gradientStore } from 'stores/gradientStore';
import { GradientType } from 'types/gradient';

import * as Styled from './styles';

const gradientTypes: GradientType[] = [GradientType.LINEAR, GradientType.RADIAL, GradientType.CONIC];

export const GradientLayers = observer(function GradientLayers(): React.JSX.Element {
    const { layers, toggleLayerVisibility, removeLayer, duplicateLayer, moveLayer, addLayer, changeLayerType } =
        gradientStore;

    return (
        <Panel
            title="Gradient layers"
            action={
                <Styled.ButtonsWrapper>
                    {gradientTypes.map((type) => (
                        <Styled.AddButton key={type} type="button" onClick={() => addLayer(type)}>
                            <Plus size={15} />
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </Styled.AddButton>
                    ))}
                </Styled.ButtonsWrapper>
            }
        >
            {layers.length > 0 ? (
                <Styled.LayerList>
                    {layers.map((layer, index) => (
                        <Styled.LayerItem key={layer.id}>
                            <Styled.LayerHeader>
                                <GripVertical size={15} />
                                <Styled.LayerTypeSelectWrapper>
                                    <Styled.LayerTypeSelect
                                        aria-label="Layer type"
                                        value={layer.type}
                                        onChange={(event) =>
                                            changeLayerType(layer.id, event.target.value as GradientType)
                                        }
                                    >
                                        <option value={GradientType.LINEAR}>Linear gradient</option>
                                        <option value={GradientType.RADIAL}>Radial gradient</option>
                                        <option value={GradientType.CONIC}>Conic gradient</option>
                                    </Styled.LayerTypeSelect>
                                    <Styled.LayerTypeChevron size={14} aria-hidden="true" />
                                </Styled.LayerTypeSelectWrapper>
                                <Styled.LayerActions>
                                    <Styled.IconButton
                                        type="button"
                                        aria-label="Move layer up"
                                        disabled={index === 0}
                                        onClick={() => moveLayer(layer.id, 'up')}
                                    >
                                        <ArrowUp size={15} />
                                    </Styled.IconButton>
                                    <Styled.IconButton
                                        type="button"
                                        aria-label="Move layer down"
                                        disabled={index === layers.length - 1}
                                        onClick={() => moveLayer(layer.id, 'down')}
                                    >
                                        <ArrowDown size={15} />
                                    </Styled.IconButton>
                                    <Styled.EyeButton
                                        type="button"
                                        aria-label={layer.enabled ? 'Hide layer' : 'Show layer'}
                                        $enabled={layer.enabled}
                                        onClick={() => toggleLayerVisibility(layer.id)}
                                    >
                                        {layer.enabled ? <Eye size={15} /> : <EyeOff size={15} />}
                                    </Styled.EyeButton>
                                    <Styled.IconButton
                                        type="button"
                                        aria-label="Duplicate layer"
                                        onClick={() => duplicateLayer(layer.id)}
                                    >
                                        <Copy size={15} />
                                    </Styled.IconButton>
                                    <Styled.IconButton
                                        type="button"
                                        aria-label="Delete layer"
                                        onClick={() => removeLayer(layer.id)}
                                    >
                                        <Trash2 size={15} />
                                    </Styled.IconButton>
                                </Styled.LayerActions>
                            </Styled.LayerHeader>
                            <Styled.LayerInfo>
                                {layer.type === GradientType.LINEAR && <LinearControls layer={layer} />}
                                {layer.type === GradientType.RADIAL && <RadialControls layer={layer} />}
                                {layer.type === GradientType.CONIC && <ConicControls layer={layer} />}
                                <ColorStops layer={layer} />
                            </Styled.LayerInfo>
                        </Styled.LayerItem>
                    ))}
                </Styled.LayerList>
            ) : (
                <Styled.NoLayers>
                    <Layers size={28} strokeWidth={1.5} color="#76829c" />
                    <Styled.NoLayerTitle>No gradient layers</Styled.NoLayerTitle>
                    <Styled.NoLayerDescription>Add a gradient layer to get started.</Styled.NoLayerDescription>
                </Styled.NoLayers>
            )}
        </Panel>
    );
});
