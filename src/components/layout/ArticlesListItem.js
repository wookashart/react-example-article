import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Hr } from '../global/Hr';

const Article = styled.div`
    display: flex;
    align-items: center;
`;

const ArticleImage = styled.div`
    max-width: 200px;
    flex: 1;
`;

const ArticleHeader = styled.div`
    flex: 2;

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
    <div>
        <Article>
            <ArticleHeader>
                <h3>
                    {article.category
                        ? article.category.map((cat, index) => (
                            <span key={index}>{cat}</span>
                        ))
                        : false
                    }
                </h3>
                <Link to={article.slug}>
                    <h2>{article.title}</h2>
                </Link>
            </ArticleHeader>
            <ArticleImage>
                <img src={article.image} alt={article.title} />
            </ArticleImage>
        </Article>
        <Hr />
    </div>
);
