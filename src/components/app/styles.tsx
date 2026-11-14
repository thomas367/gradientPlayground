import styled from 'styled-components';

export const Workspace = styled.main`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    align-items: start;

    @media (max-width: 900px) {
        grid-template-columns: minmax(0, 1fr);
    }
`;
