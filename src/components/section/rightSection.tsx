import type React from 'react';
import { Panel } from 'components/panel/panel';

import * as Styled from './styles';

export function RightSection(): React.JSX.Element {
    return (
        <Styled.Wrapper>
            <Panel title="Gradient layers">
                <div>Gradient editor placeholder</div>
            </Panel>
        </Styled.Wrapper>
    );
}
