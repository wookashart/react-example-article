import React, { Component } from 'react';
import { RoutingContext } from '../App';

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
    render() {
        return (
            <RoutingContext.Consumer>
                {isOpen => (
                    <ArticleFunctional isOpen={isOpen} />
                )}
            </RoutingContext.Consumer>
        )
    }
}

export default Article;
