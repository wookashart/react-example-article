import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Hr } from '../global/Hr';
import media from '../../styles/media';

const FirsItem = styled.div`
    margin: 50px 0;

    ${media.desktop} {
        margin: 0;
    }

    > div {
        max-width: 600px;
        text-align: center;
        margin: auto;
    }

    h3 {
        margin: 10px 0;

        span {
            margin-right: 10px;
            text-transform: uppercase;
        }
    }

    h2 {
        margin: 0;
    }
`;

export default ({ article }) => (
    <FirsItem>
        <div>
            <img src={article.image} alt={article.title} />
        </div>
        <h3>
            {article.category
                ? article.category.map((cat, index) => (
                    <span key={index}>{cat}</span>
                ))
                : false
            }
        </h3>
        <Link to={article.slug ? article.slug : '#'}>
            <h2>{article.title}</h2>
        </Link>
        <Hr />
    </FirsItem>
);
