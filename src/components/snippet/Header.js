import React from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import { Search } from 'styled-icons/material/Search';
import { Share } from 'styled-icons/material/Share';

const HeaderMenu = styled.nav`
    display: flex;
    align-items: center;
    padding: 0 15px;
`;

const H1 = styled.h1`
    font-size: 45px;
    font-family: 'Caveat Brush', cursive;
`;

const SearchBox = styled.div`
    flex: 1;
    text-align: right;

    svg {
        width: 40px;
    }
`;

const Header = ({ articleOpened }) => (
    <HeaderMenu>
        <Hamburger isOpen={articleOpened} />
        <H1>Page Logo</H1>
        <SearchBox>
            {!articleOpened ? <Search /> : <Share />}
        </SearchBox>
    </HeaderMenu>
);

export default Header;