import { useId } from 'react';
import type React from 'react';

import * as Styled from './styles';

interface RangeInputProps {
    label?: string;
    ariaLabel?: string;
    value: number;
    min: number;
    max: number;
    step?: number;
    unit?: string;
    disabled?: boolean;
    showValue?: boolean;
    onChange: (value: number) => void;
}

export function RangeSlider({
    label,
    ariaLabel,
    value,
    min,
    max,
    step = 1,
    unit = '',
    disabled = false,
    showValue = true,
    onChange,
}: RangeInputProps): React.JSX.Element {
    const id = useId();
    const progress = max > min ? ((value - min) / (max - min)) * 100 : 0;
    const background = `linear-gradient(to right, #ac85ff 0%, #803bff ${progress}%, #f1f1f5 ${progress}%, #f1f1f5 100%)`;

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
                    style={{ background }}
                    aria-label={ariaLabel}
                    aria-valuetext={`${value}${unit}`}
                    onChange={(event) => onChange(event.target.valueAsNumber)}
                />
                {showValue && (
                    <Styled.Value htmlFor={id}>
                        {value}
                        {unit}
                    </Styled.Value>
                )}
            </Styled.SliderRow>
        </Styled.Wrapper>
    );
}
