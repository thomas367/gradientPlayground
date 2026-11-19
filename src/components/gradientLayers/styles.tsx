import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
`;

export const AddButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 27px;
    padding: 0 10px;
    border: 1px solid #465273;
    border-radius: 7px;
    background: #202b47;
    color: #f4f5ff;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;

    cursor: pointer;

    &:hover {
        background: #2d3a5b;
        border-color: #9566ff;
    }

    &:focus-visible {
        outline: 2px solid #9566ff;
        outline-offset: 2px;
    }
`;

export const LayerList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const LayerItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px;
    border: 1px solid var(--color-border);
    border-radius: 10px;
    background: var(--color-surface-elevated);
`;

export const LayerSamplesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
`;

export const LayerSample = styled.div<{ $color: string }>`
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background: ${({ $color }) => $color};
`;

export const LayerInfo = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
`;

export const LayerName = styled.span`
    color: var(--color-text);
    font-size: 13px;
    font-weight: 600;
`;

export const LayerDetails = styled.span`
    color: var(--color-text-secondary);
    font-size: 11px;
`;
