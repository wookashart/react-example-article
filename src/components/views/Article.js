import React, { Component } from 'react';
import { RoutingContext } from '../App';
import articles from '../../data/articles.json';
import ArticleDetail from '../layout/ArticleDetail';

class ArticleFunctional extends Component {
    componentDidMount() {
        this.props.isOpen(true);
    }
    componentWillUnmount() {
        this.props.isOpen(false);
    }
    render () {
        return null;
    }
}

class Article extends Component {
    state = {
        article: {}
    }

    componentDidMount() {
        const thisArticle = articles.articles.find(art => art.slug === this.props.match.params.id);
        
        this.setState({ article: thisArticle});
    }

    render() {
        return (
            <RoutingContext.Consumer>
                {isOpen => (
                    <>
                        <ArticleFunctional isOpen={isOpen} />
                        <ArticleDetail article={this.state.article} />
                    </>
                )}
            </RoutingContext.Consumer>
        )
    }
}

export default Article;
