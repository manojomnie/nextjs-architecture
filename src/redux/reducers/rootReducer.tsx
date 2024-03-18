import { combineReducers } from 'redux';
import UserReducer from './user/UserReducer';


const rootReducer = combineReducers({
	user: UserReducer,
	//order: OrderReducer
})

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;