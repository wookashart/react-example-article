import React, { Component } from 'react';
import styled from 'styled-components';
import articles from '../../data/articles.json';
import ArticlesListItemFirst from '../layout/ArticlesListItemFirst';
import ArticlesListItem from '../layout/ArticlesListItem';
import media from '../../styles/media';

const Articles = styled.div`
    display: flex;
    flex-flow: column;

    ${media.desktop} {
        flex-flow: row;
    }

    > div {
        flex: 1;
        padding: 0 15px;
    }
`;

class ArticlesList extends Component {
    state = {
        firstArticle: {},
        articles: []
    }

    componentDidMount() {
        const articlesWithoutFirst = [];

        articles.articles.map((article, index) => {
            if (index !== 0) articlesWithoutFirst.push(article);
            return true;
        })

        this.setState({
            firstArticle: articles.articles[0],
            articles: articlesWithoutFirst
        });
    }

    render() {
        const { firstArticle, articles } = this.state;

        return (
            <Articles>
                <ArticlesListItemFirst article={firstArticle} />
                <div>
                    {articles.map(article => (
                        <ArticlesListItem article={article} key={article.id} />
                    ))}
                </div>
            </Articles>
        )
    }
}

export default ArticlesList;