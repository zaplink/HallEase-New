'use client'; // ✅ Now this is a Client Component

import { Provider } from 'react-redux';
import { store, persistor } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<PersistGate loading={<p>Loading...</p>} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
}
