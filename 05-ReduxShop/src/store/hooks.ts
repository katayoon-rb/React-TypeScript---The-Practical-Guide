import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "./store.ts"


type DispatchFunc = () => AppDispatch

export const useCartDispatch:
    DispatchFunc = useDispatch
    
export const useCartSelector:
    TypedUseSelectorHook<RootState> = useSelector