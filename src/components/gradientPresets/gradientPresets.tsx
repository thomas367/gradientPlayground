import type React from 'react';
import { observer } from 'mobx-react-lite';
import { Panel } from 'components/panel/panel';
import { presets } from 'data/presets';
import { gradientStore } from 'stores/gradientStore';
import { generateBackground } from 'utils/gradient';

import * as Styled from './styles';

export const GradientPresets = observer(function GradientPresets(): React.JSX.Element {
    const { selectedPresetId, selectPreset } = gradientStore;

    return (
        <Panel title="Presets">
            <Styled.PresetsWrapper>
                {presets.map((preset) => (
                    <Styled.Preset
                        key={preset.id}
                        type="button"
                        $selected={selectedPresetId === preset.id}
                        aria-pressed={selectedPresetId === preset.id}
                        onClick={() => selectPreset(preset)}
                    >
                        <Styled.Sample $background={generateBackground(preset.layers)} />
                        <Styled.Name>{preset.name}</Styled.Name>
                    </Styled.Preset>
                ))}
            </Styled.PresetsWrapper>
        </Panel>
    );
});
