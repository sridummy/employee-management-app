import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { addTeamMember } from './actions/member';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => console.log(store.getState()));
export default store;

