import type React from 'react';
import { Header } from 'components/header/header';
import { Layout } from 'components/layout/layout';

export function App(): React.JSX.Element {
    return (
        <Layout>
            <Header />
        </Layout>
    );
}
