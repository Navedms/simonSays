import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import gameReducer from "./reducers/game_reducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['gameresults']
};

const rootReducer = combineReducers({
    gameReducer: persistReducer(persistConfig, gameReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);