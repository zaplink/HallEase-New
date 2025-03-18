import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/redux/store';

// ✅ Custom hook for correctly typed dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
