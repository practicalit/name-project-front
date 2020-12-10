import {combinedReducers} from 'redux'
import reducer from './reducer'
//we use combined reducers when we have more than one reducers

export const rootReducer= combinedReducers({

    user: reducer
})