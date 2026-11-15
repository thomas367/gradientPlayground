import type React from 'react';
import { Copy } from 'lucide-react';
import { observer } from 'mobx-react-lite';
import { Panel } from 'components/panel/panel';
import { gradientStore } from 'stores/gradientStore';

import * as Styled from './styles';

export const CSSOutput = observer(function CSSOutput(): React.JSX.Element {
    const { css } = gradientStore;

    const handleCopy = async () => {
        // TODO: toastr message for copy
        await navigator.clipboard.writeText(css);
    };

    return (
        <Panel
            title="CSS output"
            action={
                <Styled.CopyButton type="button" onClick={handleCopy}>
                    <Copy size={15} strokeWidth={1.8} aria-hidden="true" />
                    Copy CSS
                </Styled.CopyButton>
            }
        >
            <Styled.Code>
                <code>{css}</code>
            </Styled.Code>
        </Panel>
    );
});
