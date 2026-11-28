import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    min-width: 0;
`;

export const Label = styled.label`
    color: #d1daef;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
`;

export const SliderRow = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
`;

export const Slider = styled.input<{ $progress: number }>`
    appearance: none;
    flex: 1;
    width: 100%;
    min-width: 0;
    height: 5px;
    margin: 0;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    background: linear-gradient(
        to right,
        #ac85ff 0%,
        #803bff ${({ $progress }) => $progress}%,
        #f1f1f5 ${({ $progress }) => $progress}%,
        #f1f1f5 100%
    );

    &:focus-visible {
        outline: 2px solid var(--color-primary-hover);
        outline-offset: 6px;
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    &:disabled::-webkit-slider-thumb {
        cursor: not-allowed;
    }

    &:disabled::-moz-range-thumb {
        cursor: not-allowed;
    }
`;

export const Value = styled.output`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 42px;
    height: 24px;
    border: 1px solid #465273;
    border-radius: 5px;
    background: #192136;
    color: var(--color-text);
    font-size: 12px;
    font-weight: 500;
    font-variant-numeric: tabular-nums;
`;
