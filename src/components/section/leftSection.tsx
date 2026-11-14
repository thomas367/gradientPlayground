import type React from 'react';
import { Panel } from 'components/panel/panel';
import { GradientPreview } from 'components/gradientPreview/gradientPreview';
import { CSSOutput } from 'components/cssOutput/cssOutput';

import * as Styled from './styles';

export function LeftSection(): React.JSX.Element {
    return (
        <Styled.Wrapper>
            <GradientPreview />
            <CSSOutput />

            <Panel title="Presets">
                <div>Presets placeholder</div>
            </Panel>
        </Styled.Wrapper>
    );
}
