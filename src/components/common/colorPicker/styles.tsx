import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    flex-shrink: 0;
`;

export const ColorSample = styled.button`
    display: block;
    width: 28px;
    height: 28px;
    padding: 0;
    border: 1px solid var(--color-secondary-border);
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }
`;

export const Popover = styled.div`
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    z-index: 1000;
`;
