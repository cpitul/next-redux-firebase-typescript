import type { RootDispatch, RootState } from '@redux/store';
import { EffectCallback, useEffect, useRef } from 'react';
import { TypedUseSelectorHook, useDispatch as useDispatchRedux, useSelector as useBaseSelector } from 'react-redux';

export function useDispatch() {
	return useDispatchRedux<RootDispatch>();
}

export const useSelector: TypedUseSelectorHook<RootState> = useBaseSelector;

export function useEffectOnce(effect: EffectCallback) {
	const ranOnce = useRef(false);

	useEffect(() => {
		if (ranOnce.current) return;

		effect();
	}, [effect]);
}
