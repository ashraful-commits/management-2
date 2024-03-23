import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { authReducer } from "@/redux/slices/auth/authSlice";
import { counterReducer } from "@/redux/slices/counter/counterSlice";
import storage from "./CustomStorage";
import logger from "redux-logger";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["isAuth", "jid"],
};

const counterPersistConfig = {
  key: "counter",
  storage: storage,
  whitelist: ["value"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  counter: persistReducer(counterPersistConfig, counterReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
