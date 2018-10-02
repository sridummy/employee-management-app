import { createStore, applyMiddleware,compose } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { addTeamMember } from './actions/member';

const devtools = process.env.NODE_ENV === 'test'
? x => x /* eslint-disable no-underscore-dangle */
: window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable no-underscore-dangle */

const store = createStore(rootReducer,compose(applyMiddleware(thunk),devtools));
store.subscribe(() => console.log(store.getState()));
export default store;

