import type React from 'react';
import { Copy } from 'lucide-react';
import { Panel } from 'components/panel/panel';

import * as Styled from './styles';

// TODO: dummy sample css
const SAMPLE_CSS = `background:
    radial-gradient(
        circle at 20% 18%,
        rgba(255, 255, 255, 0.65),
        transparent 35%
    ),
    conic-gradient(
        from 140deg at 70% 60%,
        #5266ef 0deg,
        #ec4899 120deg,
        #ff9a3c 240deg,
        #5266ef 360deg
    );`;

export function CSSOutput(): React.JSX.Element {
    const handleCopy = async () => {
        // TODO: toastr message for copy
        await navigator.clipboard.writeText(SAMPLE_CSS);
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
                <code>{SAMPLE_CSS}</code>
            </Styled.Code>
        </Panel>
    );
}
