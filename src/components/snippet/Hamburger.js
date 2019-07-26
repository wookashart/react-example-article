import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HamburgerWrapper = styled.div`
    transform: ${props => props.isOpen ? 'rotate(-360deg)' : 'rotate(0deg)'};
    transform-origin: center;
    transition: 200ms linear transform;
    margin-right: 30px;
    cursor: pointer;
`;

const HamburgerInner = styled.div`
    span {
        display: block;
        width: 30px;
        height: 3px;
        margin: 5px 0;
        background-color: black;
        transition: 200ms linear transform;

        &:nth-of-type(1) {
            transform-origin: left top;
            transform: ${props => props.isOpen ? 'translateY(8px) scaleX(0.5) rotate(-20deg)' : 'translateY(0) scaleX(1) rotate(deg)'}
        }
        &:nth-of-type(3) {
            transform-origin: left bottom;
            transform: ${props => props.isOpen ? 'translateY(-8px) scaleX(0.5) rotate(20deg)' : 'translateY(0) scaleX(1) rotate(deg)'}
        }
    }
`;

export default ({ isOpen }) => (
    <Link to={isOpen ? '/' : '#'}>
        <HamburgerWrapper isOpen={isOpen}>
            <HamburgerInner isOpen={isOpen}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerInner>
        </HamburgerWrapper>
    </Link>
);
