import styled from 'styled-components';

export const Wrapper = styled.header`
    text-align: center;
    padding: 12px 0 24px;
`;

export const Title = styled.h1`
    margin: 0 0 6px;
    font-family: var(--font-heading);
    font-size: clamp(30px, 4vw, 42px);
    letter-spacing: -0.04em;

    background: linear-gradient(90deg, var(--color-primary), #f28bbd);
    color: transparent;
    background-clip: text;
`;

export const Subtitle = styled.p`
    margin: 0;
    color: var(--color-text-secondary);
    font-size: 14px;
`;
