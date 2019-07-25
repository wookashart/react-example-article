import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from './global/GlobalStyles';
import { MaxWidthBox } from './global/MaxWidthBox';
import Header from './snippet/Header';
import ArticlesList from './views/ArticlesList';
import Article from './views/Article';

function App() {
  	return (
   		<BrowserRouter>
			<GlobalStyles />
			<MaxWidthBox>
				<Header />
				<Switch>
					<Route path="/" exact component={ArticlesList} />
					<Route path="/:id" exact component={Article} />
				</Switch>
			</MaxWidthBox>
		</BrowserRouter>
  	);
}

export default App;
