import styled from 'styled-components';

export const Code = styled.pre`
    margin: 0;
    padding: 16px;
    border: 1px solid var(--color-border);
    border-radius: 10px;
    background-color: var(--color-background);
    color: #a8c1ff;
    font-family: 'Fira Code', monospace;
    font-size: 12px;
    line-height: 1.7;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`;

export const CopyButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 14px;
    border: 1px solid var(--color-primary);
    border-radius: 8px;
    background-color: var(--color-primary-dark);
    color: var(--color-text);
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;

    @media (hover: hover) {
        &:hover {
            background-color: var(--color-primary);
        }
    }

    &:focus-visible {
        outline: 2px solid var(--color-primary-hover);
        outline-offset: 2px;
    }
`;
