import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from './storage'; // ✅ Use safe storage for Next.js

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth'], // ✅ Persist only 'auth' slice
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}), // ✅ Don't manually add redux-thunk, it's included by default
	devTools: process.env.NODE_ENV !== 'production', // ✅ Enable Redux DevTools only in dev mode
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
