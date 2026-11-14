import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 0;
`;

export const Placeholder = styled.div`
    min-height: 400px;
    padding: 20px;
    border: 1px solid var(--color-border);
    border-radius: 16px;
    background-color: var(--color-surface);
`;
