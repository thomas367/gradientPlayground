import type React from 'react';
import { GradientLayers } from 'components/gradientLayers/gradientLayers';

import * as Styled from './styles';

export function RightSection(): React.JSX.Element {
    return (
        <Styled.Wrapper>
            <GradientLayers />
        </Styled.Wrapper>
    );
}
