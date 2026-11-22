import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';

export const ControlsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    min-width: 0;
    margin: 10px 0 12px;
`;

export const RadialControlsWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
    align-items: end;
    gap: 12px;
    width: 100%;

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
`;

export const Label = styled.label`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #d1daef;
`;

export const SelectWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const ShapeSelect = styled.select`
    appearance: none;
    width: 100%;
    height: 24px;
    padding: 0 26px 0 8px;
    border: 1px solid var(--color-secondary-border);
    border-radius: 5px;
    background: #192136;
    color: var(--color-text);
    font-family: inherit;
    font-size: 12px;
    cursor: pointer;
    transition:
        background 150ms,
        border-color 150ms;

    &:hover {
        background: #252f48;
    }

    &:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }

    option {
        background: var(--color-surface);
        color: var(--color-text);
    }
`;

export const SelectChevron = styled(ChevronDown)`
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    color: var(--color-text-secondary);
    pointer-events: none;
`;
