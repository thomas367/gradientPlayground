import { useId } from 'react';
import type React from 'react';

import * as Styled from './styles';

interface RangeInputProps {
    label?: string;
    value: number;
    min: number;
    max: number;
    step?: number;
    unit?: string;
    disabled?: boolean;
    onChange: (value: number) => void;
}

export function RangeSlider({
    label,
    value,
    min,
    max,
    step = 1,
    unit = '',
    disabled = false,
    onChange,
}: RangeInputProps): React.JSX.Element {
    const id = useId();
    const progress = max > min ? ((value - min) / (max - min)) * 100 : 0;

    return (
        <Styled.Wrapper>
            {label && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
            <Styled.SliderRow>
                <Styled.Slider
                    id={id}
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    disabled={disabled}
                    $progress={progress}
                    aria-valuetext={`${value}${unit}`}
                    onChange={(event) => onChange(event.target.valueAsNumber)}
                />
                <Styled.Value htmlFor={id}>
                    {value}
                    {unit}
                </Styled.Value>
            </Styled.SliderRow>
        </Styled.Wrapper>
    );
}
