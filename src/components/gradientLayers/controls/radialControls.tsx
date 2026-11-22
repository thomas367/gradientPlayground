import type React from 'react';
import { observer } from 'mobx-react-lite';
import { gradientStore } from 'stores/gradientStore';
import type { RadialGradient } from 'types/gradient';
import { Shape } from 'types/gradient';
import { RangeSlider } from 'components/common/rangeSlider/rangeSlider';
import { useId } from 'react';

import * as Styled from './styles';

interface RadialControlsProps {
    layer: RadialGradient;
}

export const RadialControls = observer(function RadialControls({ layer }: RadialControlsProps): React.JSX.Element {
    const { updateLayer } = gradientStore;
    const shapeId = useId();

    const handleShapeChange = (shape: Shape) => {
        updateLayer(layer.id, { shape });
    };

    const handlePositionXChange = (x: number) => {
        updateLayer(layer.id, {
            position: { ...layer.position, x },
        });
    };

    const handlePositionYChange = (y: number) => {
        updateLayer(layer.id, {
            position: { ...layer.position, y },
        });
    };

    return (
        <Styled.ControlsWrapper>
            <Styled.RadialControlsWrapper>
                <Styled.SelectContainer>
                    <Styled.Label htmlFor={shapeId}>Shape</Styled.Label>
                    <Styled.SelectWrapper>
                        <Styled.ShapeSelect
                            id={shapeId}
                            value={layer.shape}
                            onChange={(event) => handleShapeChange(event.target.value as Shape)}
                        >
                            <option value={Shape.CIRCLE}>Circle</option>
                            <option value={Shape.ELLIPSE}>Ellipse</option>
                        </Styled.ShapeSelect>

                        <Styled.SelectChevron size={14} aria-hidden="true" />
                    </Styled.SelectWrapper>
                </Styled.SelectContainer>
                <RangeSlider
                    label="Center X"
                    value={layer.position.x}
                    min={0}
                    max={100}
                    unit="%"
                    onChange={(value) => handlePositionXChange(value)}
                />
                <RangeSlider
                    label="Center Y"
                    value={layer.position.y}
                    min={0}
                    max={100}
                    unit="%"
                    onChange={(value) => handlePositionYChange(value)}
                />
            </Styled.RadialControlsWrapper>
        </Styled.ControlsWrapper>
    );
});
