import styled from 'styled-components';

export const Hr = styled.hr`
    border: none;

    &::after {
        content: '';
        height: 1px;
        width: 100%;
        background-color: lightgray;
        display: block;
        margin: 15px 0;
    }
`;
