import { createStore } from 'redux'
import { rootReducer } from './reducers';

// take 2 argument rootereducer and middleware
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;




// redux concept 
// 1-> store 2->reducer 3->action 4->constant


// react-redux concept
// 1->Provider 2->useSelector() 3->useDispatch()