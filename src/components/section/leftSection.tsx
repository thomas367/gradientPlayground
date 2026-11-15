import type React from 'react';
import { GradientPreview } from 'components/gradientPreview/gradientPreview';
import { CSSOutput } from 'components/cssOutput/cssOutput';
import { GradientPresets } from 'components/gradientPresets/gradientPresets';

import * as Styled from './styles';

export function LeftSection(): React.JSX.Element {
    return (
        <Styled.Wrapper>
            <GradientPreview />
            <CSSOutput />
            <GradientPresets />
        </Styled.Wrapper>
    );
}
