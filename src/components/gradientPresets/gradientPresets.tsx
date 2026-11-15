import type React from 'react';
import { Panel } from 'components/panel/panel';

import { presets } from './presets';
import * as Styled from './styles';

export function GradientPresets(): React.JSX.Element {
    return (
        <Panel title="Presets">
            <Styled.Presets>
                {presets.map(({ id, name, background }) => (
                    <Styled.Preset key={id} type="button" disabled>
                        <Styled.Sample $background={background} />
                        <Styled.Name>{name}</Styled.Name>
                    </Styled.Preset>
                ))}
            </Styled.Presets>
        </Panel>
    );
}
