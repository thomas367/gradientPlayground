import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    gap: 8px;
`;

export const ColorStopsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 20px;
`;

export const ColorStopsTitle = styled.span`
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: #d1daef;
`;

export const ColorStopsCount = styled.span`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: var(--color-text-secondary);
`;

export const ColorStopRow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 28px;
    width: 100%;
`;

export const PositionWrapper = styled.div`
    position: relative;
    width: 72px;
    height: 32px;
    flex-shrink: 0;
`;

export const PositionInput = styled.input`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 24px 0 10px;
    background: #202b47;
    border: 1px solid #374461;
    border-radius: 6px;
    color: var(--color-text);
    font-size: 12px;
    font-weight: 500;
    outline: none;
    transition: border-color 0.2s ease;
    appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        appearance: none;
        margin: 0;
    }

    &:focus {
        border-color: #9566ff;
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

export const PositionSuffix = styled.span`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: var(--color-text-secondary);
    font-size: 12px;
    pointer-events: none;
`;

export const OpacityControls = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 10px;
    min-width: 0;
`;

export const OpacityLabel = styled.span`
    flex-shrink: 0;
    min-width: 88px;
    color: var(--color-text-secondary);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
`;
