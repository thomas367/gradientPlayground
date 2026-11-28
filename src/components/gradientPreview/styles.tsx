import styled from 'styled-components';

export const Stage = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    min-height: 416px;
    padding: 12px;
    overflow: hidden;
    border-radius: 10px;
    background-color: #0d1427;
    background-image:
        linear-gradient(45deg, #141d30 25%, transparent 25%), linear-gradient(-45deg, #141d30 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #141d30 75%), linear-gradient(-45deg, transparent 75%, #141d30 75%);
    background-size: 20px 20px;
    background-position:
        0 0,
        0 10px,
        10px -10px,
        -10px 0;
`;

export const Preview = styled.div`
    max-height: 400px;
    border: 1px solid #a5a4ed;
    border-radius: 20px;
`;

export const AspectRatioSelect = styled.select`
    padding: 6px 10px;
    border: 1px solid var(--color-secondary-border);
    border-radius: 7px;
    background-color: var(--color-surface-elevated);
    color: var(--color-text);
    font-size: 12px;
    cursor: pointer;

    &:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }
`;

export const Dimensions = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 14px;
    color: var(--color-text-secondary);
    font-size: 12px;
`;

export const DimensionInput = styled.input`
    width: 64px;
    padding: 6px 8px;
    border: 1px solid var(--color-border);
    border-radius: 6px;
    background: var(--color-surface-elevated);
    color: var(--color-text);

    &:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }
`;

export const Hint = styled.p`
    margin: 8px 0 0;
    color: var(--color-text-secondary);
    font-size: 11px;
    line-height: 1.5;
`;
