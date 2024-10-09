import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from './saga';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const middleware = createSagaMiddleware();

const store = createStore(reducer, composeEnhancers(applyMiddleware(middleware)));

middleware.run(rootSaga);

export default store;
