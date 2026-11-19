import styled from 'styled-components';

export const PresetsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 10px;

    @media (max-width: 600px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`;

export const Preset = styled.button<{ $selected: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 0;
    padding: 5px;
    border: 1px solid var(--color-border);
    border-radius: 10px;
    background-color: var(--color-surface-elevated);
    color: var(--color-text-secondary);
    text-align: center;

    cursor: pointer;
    border-color: ${({ $selected }) => ($selected ? 'var(--color-primary)' : 'var(--color-border)')};

    &:hover {
        border-color: var(--color-primary-hover);
    }

    &:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }

    &:disabled {
        opacity: 1;
        cursor: default;
    }
`;

export const Sample = styled.div<{ $background: string }>`
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 6px;
    background: ${({ $background }) => $background};
`;

export const Name = styled.span`
    font-size: 10px;
    line-height: 1.3;
    overflow-wrap: anywhere;
`;
