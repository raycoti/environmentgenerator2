import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/app';
import GridContainer from './containers/GridContainer';
import LevelsContainer from './containers/LevelsContainer';



/*const loadScenes = ()=> {
  store.dispatch(loadAll())
}*/

/*  component will mount
const onLevelEnter = function (nextRouterState) {
  const levelId = nextRouterState.params.id;
  store.dispatch(loadLevel(levelId, true));
};
const onGameEnter = function (nextRouterState) {
  const levelId = nextRouterState.params.id;
  store.dispatch(loadLevel(levelId, false));
};*/


export default () => {
  return (
    <Provider store = {store}>
      <Router>
        <div>
          <Route component={App} />
          <Switch>
            <Route exact path="/" component={GridContainer} />
            <Route path="/levels" component={LevelsContainer} />
            <Route path="level/:id" component={GridContainer}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

//might not need :id route at all
            //<Route path = "/level/:id" component={LoadContainer} />
/*<Router history={hashHistory}>
        <Route path ="/" component = {App}>
          <Route path="/grid" component={GridContainer} />
          <Route path ="/levels" component={LevelsContainer} onEnter={loadScenes} />
            <Route path = "/level/:id" component={GridContainer} onEnter={onLevelEnter} />
          <Route path="game/:id" component={GameContianer} onEnter={onGameEnter} />
          <IndexRedirect to="/grid" />
        </Route>
      </Router>*/