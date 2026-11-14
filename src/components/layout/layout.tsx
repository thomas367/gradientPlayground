import type React from 'react';

import * as Styled from './styles';

type Props = {
    children: React.ReactNode;
};

export function Layout({ children }: Props): React.JSX.Element {
    return <Styled.Wrapper>{children}</Styled.Wrapper>;
}
