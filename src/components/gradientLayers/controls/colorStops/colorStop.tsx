import type React from 'react';
import { observer } from 'mobx-react-lite';
import { gradientStore } from 'stores/gradientStore';
import type { ColorStop as ColorStopProp } from 'types/gradient';
import { GradientType } from 'types/gradient';
import { ColorPicker } from 'components/common/colorPicker/colorPicker';

import * as Styled from './styles';

interface ColorStopProps {
    layerId: string;
    enabled: boolean;
    gradientType: GradientType;
    stop: ColorStopProp;
}

export const ColorStop = observer(function ColorStop({
    layerId,
    gradientType,
    enabled,
    stop,
}: ColorStopProps): React.JSX.Element {
    const isConic = gradientType === GradientType.CONIC;
    const { updateColorStop } = gradientStore;

    const handlePositionChange = (value: number) => {
        const max = isConic ? 360 : 100;

        if (!Number.isFinite(value) || value < 0 || value > max) return;

        const position = isConic ? value / 3.6 : value;
        updateColorStop(layerId, stop.id, { position });
    };

    const handleColorChange = (color: string) => {
        updateColorStop(layerId, stop.id, { color });
    };

    return (
        <Styled.ColorStopRow>
            <ColorPicker color={stop.color} disabled={!enabled} onChange={handleColorChange} />
            <Styled.PositionWrapper>
                <Styled.PositionInput
                    aria-label="Color stop position"
                    type="number"
                    min={0}
                    max={isConic ? 360 : 100}
                    value={isConic ? Math.round(stop.position * 3.6) : stop.position}
                    step={1}
                    disabled={!enabled}
                    onChange={(event) => handlePositionChange(event.currentTarget.valueAsNumber)}
                />
                <Styled.PositionSuffix aria-hidden="true">{isConic ? '°' : '%'}</Styled.PositionSuffix>
            </Styled.PositionWrapper>
        </Styled.ColorStopRow>
    );
});
