import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
// aliasing it but adding Type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
