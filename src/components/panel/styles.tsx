import styled from 'styled-components';

export const Wrapper = styled.section`
    padding: 20px;
    border: 1px solid var(--color-border);
    border-radius: 16px;
    background-color: var(--color-surface);
`;

export const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 18px;
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 16px;
`;
