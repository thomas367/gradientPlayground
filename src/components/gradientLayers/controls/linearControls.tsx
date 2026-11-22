import type React from 'react';
import { observer } from 'mobx-react-lite';
import { gradientStore } from 'stores/gradientStore';
import type { LinearGradient } from 'types/gradient';
import { RangeSlider } from 'components/common/rangeSlider/rangeSlider';

import * as Styled from './styles';

interface LinearControlsProps {
    layer: LinearGradient;
}

export const LinearControls = observer(function LinearControls({ layer }: LinearControlsProps): React.JSX.Element {
    const { updateLayer } = gradientStore;

    const handleAngleChange = (angle: number) => {
        updateLayer(layer.id, { angle });
    };

    return (
        <Styled.ControlsWrapper>
            <RangeSlider
                label="Angle"
                value={layer.angle}
                min={0}
                max={360}
                unit="°"
                onChange={(value) => handleAngleChange(value)}
            />
        </Styled.ControlsWrapper>
    );
});
