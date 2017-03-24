import store from './store.js';
import { VISIBILITY_FILTERS, addToDo, toggleToDo, setVisibilityFilter } from './actions';

function testStore (){
	console.log(store.getState());

	let unsubscribe = store.subscribe(()=>{
		console.log( store.getState() );
	})

	store.dispatch( addToDo("action 1") );
	store.dispatch( addToDo("action 2") );
	store.dispatch( addToDo("action 3") );
	store.dispatch( setVisibilityFilter( VISIBILITY_FILTERS.SHOW_COMPLETED ) );

	unsubscribe();
}

export default testStore;