import { useState } from 'react';
import type React from 'react';
import { observer } from 'mobx-react-lite';
import { Panel } from 'components/panel/panel';
import { gradientStore } from 'stores/gradientStore';

import * as Styled from './styles';

type AspectRatio = 'portrait' | 'square' | 'landscape' | 'custom';

const RATIOS: Record<Exclude<AspectRatio, 'custom'>, number> = {
    portrait: 2 / 3,
    square: 1,
    landscape: 16 / 9,
};

export const GradientPreview = observer(function GradientPreview(): React.JSX.Element {
    const { background } = gradientStore;

    const [aspectRatio, setAspectRatio] = useState<AspectRatio>('portrait');
    const [ratioWidth, setRatioWidth] = useState(4);
    const [ratioHeight, setRatioHeight] = useState(5);

    const customRatio = ratioWidth > 0 && ratioHeight > 0 ? ratioWidth / ratioHeight : 1;
    const ratio = aspectRatio === 'custom' ? customRatio : RATIOS[aspectRatio];

    return (
        <Panel
            title="Live preview"
            action={
                <Styled.AspectRatioSelect
                    aria-label="Preview aspect ratio"
                    value={aspectRatio}
                    onChange={(event) => setAspectRatio(event.target.value as AspectRatio)}
                >
                    <option value="portrait">Portrait · 2:3</option>
                    <option value="square">Square · 1:1</option>
                    <option value="landscape">Landscape · 16:9</option>
                    <option value="custom">Custom</option>
                </Styled.AspectRatioSelect>
            }
        >
            {aspectRatio === 'custom' && (
                <Styled.Dimensions>
                    <span>Aspect ratio</span>
                    <Styled.DimensionInput
                        type="number"
                        aria-label="Aspect ratio width"
                        min={0.01}
                        step="any"
                        value={ratioWidth}
                        onChange={(event) => setRatioWidth(Number(event.target.value))}
                    />
                    <span>:</span>
                    <Styled.DimensionInput
                        type="number"
                        aria-label="Aspect ratio height"
                        min={0.01}
                        step="any"
                        value={ratioHeight}
                        onChange={(event) => setRatioHeight(Number(event.target.value))}
                    />
                </Styled.Dimensions>
            )}

            <Styled.Stage>
                <Styled.Preview
                    style={{
                        aspectRatio: ratio,
                        width: ratio >= 1 ? 'min(100%, 400px)' : `min(100%, ${400 * ratio}px)`,
                        background: background || 'transparent',
                    }}
                />
            </Styled.Stage>

            <Styled.Hint>
                The topmost enabled layer is drawn first. Transparent stops reveal layers beneath.
            </Styled.Hint>
        </Panel>
    );
});
