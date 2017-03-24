import {createStore} from 'redux';
import todoApp	from './reducers';
import { VISIBILITY_FILTERS } from './actions';

const initialState = {
	visibilityFilter: VISIBILITY_FILTERS.SHOW_ALL,
	todos: []
}

const store = createStore( todoApp, initialState );

export default store;