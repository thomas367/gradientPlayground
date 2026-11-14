import type React from 'react';

import * as Styled from './styles';

export function Header(): React.JSX.Element {
    return (
        <Styled.Wrapper>
            <Styled.Title>Gradient Playground</Styled.Title>
            <Styled.Subtitle>
                Create layered linear, radial, and conic gradients. Shape the glow. Copy production-ready CSS.
            </Styled.Subtitle>
        </Styled.Wrapper>
    );
}
