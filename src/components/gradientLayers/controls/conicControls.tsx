import type React from 'react';
import { observer } from 'mobx-react-lite';
import { gradientStore } from 'stores/gradientStore';
import type { ConicGradient } from 'types/gradient';
import { RangeSlider } from 'components/common/rangeSlider/rangeSlider';

import * as Styled from './styles';

interface ConicControlsProps {
    layer: ConicGradient;
}

export const ConicControls = observer(function ConicControls({ layer }: ConicControlsProps): React.JSX.Element {
    const { updateLayer } = gradientStore;

    const handleAngleChange = (angle: number) => {
        updateLayer(layer.id, { angle });
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
            <RangeSlider
                label="Starting angle"
                value={layer.angle}
                min={0}
                max={360}
                unit="°"
                onChange={(value) => handleAngleChange(value)}
            />
            <Styled.ConicControlsWrapper>
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
            </Styled.ConicControlsWrapper>
        </Styled.ControlsWrapper>
    );
});
