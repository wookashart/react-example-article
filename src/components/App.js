import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from './global/GlobalStyles';
import { MaxWidthBox } from './global/MaxWidthBox';
import Header from './snippet/Header';
import ArticlesList from './views/ArticlesList';
import Article from './views/Article';

export const RoutingContext = React.createContext();

class App extends Component {
	state = {
		articleOpened: false
	}

	checkIfArticleOpen = isOpen => this.setState({ articleOpened: isOpen });

  	render () {
		return (
			<BrowserRouter>
				<RoutingContext.Provider value={this.checkIfArticleOpen}>
					<GlobalStyles />
					<MaxWidthBox>
						<Header articleOpened={this.state.articleOpened} />
						<Switch>
							<Route path="/" exact component={ArticlesList} />
							<Route path="/:id" exact component={Article} />
						</Switch>
					</MaxWidthBox>
				</RoutingContext.Provider>
		 </BrowserRouter>
	   );
	}
}

export default App;
