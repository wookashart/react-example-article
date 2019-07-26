import React from 'react';
import styled from 'styled-components';
import ArticleImageModal from './ArticleImageModal';

const Detail = styled.div``;

const Category = styled.div`
    margin: 15px 0;

    span {
        text-transform: uppercase;
        display: inline-block;
        margin-right: 10px;
        font-weight: 700;
    }
`;

const Author = styled.div`
    display: flex;
    align-items: center;
    background-color: lightgray;
    padding: 20px;

    > div {
        margin-right: 30px;
    }

    img {
        border-radius: 50%;
    }

    p {
        font-size: 18px;

        span {
            font-size: 22px;
            margin: 0 20px;
        }
    }
`;

export default ({ article }) => (
    <Detail>
        <ArticleImageModal image={article.image} alt={article.title} />

        <Category>
            {article.category ? article.category.map((category, index) => <span key={index}>{category}</span>) : false}
        </Category>

        <h1>{article.title}</h1>
        <p>{article.description}</p>
        {article.author ? (
            <Author>
                <div>
                    <img src={article.author.image} alt={article.author.name} />
                </div>
                <p>by
                    <span>{article.author.name}</span>
                </p>
            </Author>
        ) : false}
    </Detail>
);
