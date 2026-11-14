import type React from 'react';
import { Header } from 'components/header/header';
import { Layout } from 'components/layout/layout';
import { LeftSection } from 'components/leftSection/leftSection';
import { RightSection } from 'components/rightSection/rightSection';

import * as Styled from './styles';

export function App(): React.JSX.Element {
    return (
        <Layout>
            <Header />
            <Styled.Workspace>
                <LeftSection />
                <RightSection />
            </Styled.Workspace>
        </Layout>
    );
}
