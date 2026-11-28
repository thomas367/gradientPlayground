import { useEffect, useRef, useState } from 'react';
import type React from 'react';
import { ChromePicker } from 'react-color';

import * as Styled from './styles';

interface ColorPickerProps {
    color: string;
    disabled?: boolean;
    onChange: (color: string) => void;
}

export function ColorPicker({ color, disabled = false, onChange }: ColorPickerProps): React.JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const pickerRef = useRef<HTMLDivElement>(null);

    const triggerRef = useRef<HTMLButtonElement>(null);
    const isPickerOpen = isOpen && !disabled;

    if (disabled && isOpen) setIsOpen(false);

    useEffect(() => {
        if (!isPickerOpen) return;

        const handlePointerDown = (event: PointerEvent) => {
            if (event.target instanceof Node && !pickerRef.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key !== 'Escape') return;
            setIsOpen(false);
            triggerRef.current?.focus();
        };

        document.addEventListener('pointerdown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isPickerOpen]);

    return (
        <Styled.Wrapper ref={pickerRef}>
            <Styled.ColorSample
                ref={triggerRef}
                type="button"
                style={{ backgroundColor: color }}
                disabled={disabled}
                aria-label={`Choose color, current color ${color}`}
                aria-haspopup="dialog"
                aria-expanded={isPickerOpen}
                onClick={() => setIsOpen((open) => !open)}
            />
            {isPickerOpen && (
                <Styled.Popover role="dialog" aria-label="Color picker">
                    <ChromePicker color={color} disableAlpha onChange={({ hex }) => onChange(hex)} />
                </Styled.Popover>
            )}
        </Styled.Wrapper>
    );
}
