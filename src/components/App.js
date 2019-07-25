import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from './global/GlobalStyles';
import Header from './snippet/Header';
import ArticlesList from './views/ArticlesList';
import Article from './views/Article';

function App() {
  	return (
   		<BrowserRouter>
			<GlobalStyles />
			<Header />
			
			<Switch>
				<Route path="/" exact component={ArticlesList} />
				<Route path="/:id" exact component={Article} />
			</Switch>
		</BrowserRouter>
  	);
}

export default App;
