import React, { Component } from 'react';
import articles from '../../data/articles.json';
import ArticlesListItemFirst from '../layout/ArticlesListItemFirst';
import ArticlesListItem from '../layout/ArticlesListItem';

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
            <div>
                <ArticlesListItemFirst article={firstArticle} />
                {articles.map(article => (
                    <ArticlesListItem article={article} key={article.id} />
                ))}
            </div>
        )
    }
}

export default ArticlesList;