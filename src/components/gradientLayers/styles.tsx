import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';

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

    @media (hover: hover) {
        &:hover {
            background: #2d3a5b;
            border-color: #9566ff;
        }
    }

    &:focus-visible {
        outline: 2px solid #9566ff;
        outline-offset: 2px;
    }
`;

export const NoLayers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 16px;
    border: 1px dashed var(--color-border);
    border-radius: 10px;
    gap: 8px;
    text-align: center;
`;

export const LayerList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const NoLayerTitle = styled.p`
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    color: var(--color-text);
    line-height: 20px;
`;

export const NoLayerDescription = styled.p`
    margin: 0;
    font-size: 12px;
    color: var(--color-text-secondary);
    line-height: 18px;
`;

export const LayerItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 14px;
    border: 1px solid var(--color-border);
    border-radius: 10px;
    background: var(--color-surface-elevated);
`;

export const LayerHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    margin-bottom: 12px;
`;

export const LayerTypeSelectWrapper = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 150px;
`;

export const LayerTypeSelect = styled.select`
    appearance: none;
    width: 100%;
    height: 28px;
    padding: 0 28px 0 10px;
    border: 1px solid var(--color-secondary-border);
    border-radius: 7px;
    background: #202b47;
    color: var(--color-text);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;

    @media (hover: hover) {
        &:hover {
            background: #2d3a5b;
        }
    }

    &:focus {
        outline: none;
        border-color: var(--color-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }
`;

export const LayerTypeChevron = styled(ChevronDown)`
    position: absolute;
    right: 8px;
    color: var(--color-text-secondary);
    pointer-events: none;
`;

export const LayerActions = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`;

export const IconButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    padding: 0;
    border: 1px solid var(--color-secondary-border);
    border-radius: 7px;
    background: #202b47;
    color: var(--color-text);

    cursor: pointer;

    &:hover {
        background: #2d3a5b;
        border-color: var(--color-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }

    &:disabled {
        opacity: 0.35;
        cursor: not-allowed;
    }
`;

export const EyeButton = styled(IconButton)<{ $enabled: boolean }>`
    background: ${(props): string => (props.$enabled ? '#202b47' : '#111827')};
    color: ${(props): string => (props.$enabled ? 'var(--color-text)' : '#76829c')};
`;

export const LayerSamplesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
`;

export const LayerSample = styled.div<{ $color: string; $enabled: boolean }>`
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background: ${({ $color }) => $color};
    opacity: ${(props): number => (props.$enabled ? 1 : 0.4)};
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
