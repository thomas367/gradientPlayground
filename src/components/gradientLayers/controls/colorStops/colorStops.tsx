import type React from 'react';
import { observer } from 'mobx-react-lite';
import type { GradientLayer } from 'types/gradient';
import { ColorStop } from 'components/gradientLayers/controls/colorStops/colorStop';

import * as Styled from './styles';

interface ColorStopsProps {
    layer: GradientLayer;
}

export const ColorStops = observer(function ColorStops({ layer }: ColorStopsProps): React.JSX.Element {
    return (
        <Styled.Wrapper>
            <Styled.ColorStopsHeader>
                <Styled.ColorStopsTitle>Color Stops</Styled.ColorStopsTitle>
                <Styled.ColorStopsCount>
                    {layer.stops.length} {layer.stops.length === 1 ? 'stop' : 'stops'}
                </Styled.ColorStopsCount>
            </Styled.ColorStopsHeader>
            {layer.stops.map((stop) => (
                <ColorStop key={stop.id} layerId={layer.id} gradientType={layer.type} stop={stop} enabled={layer.enabled} />
            ))}
        </Styled.Wrapper>
    );
});
