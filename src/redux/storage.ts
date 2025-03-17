import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => {
	return {
		getItem() {
			return Promise.resolve(null);
		},
		setItem() {
			return Promise.resolve();
		},
		removeItem() {
			return Promise.resolve();
		},
	};
};

const storage =
	typeof window !== 'undefined'
		? createWebStorage('local')
		: createNoopStorage(); // ✅ Prevents SSR issues

export default storage;
