import type React from 'react';
import { Panel } from 'components/panel/panel';

import * as Styled from './styles';

export function LeftSection(): React.JSX.Element {
    return (
        <Styled.Wrapper>
            <Panel title="Live preview">
                <div>Preview placeholder</div>
            </Panel>

            <Panel title="CSS output">
                <div>CSS placeholder</div>
            </Panel>

            <Panel title="Presets">
                <div>Presets placeholder</div>
            </Panel>
        </Styled.Wrapper>
    );
}
