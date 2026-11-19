import { observer } from 'mobx-react-lite';
import { Plus, GripVertical, ArrowUp, ArrowDown, Eye, Copy, Trash2 } from 'lucide-react';
import { Panel } from 'components/panel/panel';
import { gradientStore } from 'stores/gradientStore';
import { GradientType } from 'types/gradient';

import * as Styled from './styles';

const gradientTypes: GradientType[] = [GradientType.LINEAR, GradientType.RADIAL, GradientType.CONIC];

export const GradientLayers = observer(function CSSOutput(): React.JSX.Element {
    const { layers } = gradientStore;

    return (
        <Panel
            title="Gradient layers"
            action={
                <Styled.ButtonsWrapper>
                    {gradientTypes.map((type) => (
                        <Styled.AddButton
                            key={type}
                            type="button"
                            // onClick={() => console.log('add layer)}
                        >
                            <Plus size={15} />
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </Styled.AddButton>
                    ))}
                </Styled.ButtonsWrapper>
            }
        >
            <Styled.LayerList>
                {layers.map((layer) => (
                    <Styled.LayerItem key={layer.id}>
                        <Styled.LayerHeader>
                            <GripVertical size={15} />
                            <input type="checkbox" checked={layer.enabled} readOnly />
                            <Styled.LayerType>{layer.type} gradient</Styled.LayerType>
                            <Styled.LayerActions>
                                <Styled.IconButton type="button" aria-label="Move layer up">
                                    <ArrowUp size={15} />
                                </Styled.IconButton>
                                <Styled.IconButton type="button" aria-label="Move layer down">
                                    <ArrowDown size={15} />
                                </Styled.IconButton>
                                <Styled.IconButton type="button" aria-label="Toggle visibility">
                                    <Eye size={15} />
                                </Styled.IconButton>
                                <Styled.IconButton type="button" aria-label="Duplicate layer">
                                    <Copy size={15} />
                                </Styled.IconButton>
                                <Styled.IconButton type="button" aria-label="Delete layer">
                                    <Trash2 size={15} />
                                </Styled.IconButton>
                            </Styled.LayerActions>
                        </Styled.LayerHeader>
                        <Styled.LayerInfo>
                            <Styled.LayerName>
                                {layer.type.charAt(0).toUpperCase() + layer.type.slice(1)} gradient
                            </Styled.LayerName>
                            <Styled.LayerSamplesWrapper>
                                {layer.stops.map((stop) => (
                                    <Styled.LayerSample
                                        key={stop.id}
                                        $color={stop.color}
                                        title={`${stop.color} — ${stop.position}%`}
                                    />
                                ))}
                            </Styled.LayerSamplesWrapper>
                        </Styled.LayerInfo>
                    </Styled.LayerItem>
                ))}
            </Styled.LayerList>
        </Panel>
    );
});
