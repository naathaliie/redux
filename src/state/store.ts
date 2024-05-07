import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

// Skapar en global typ som representerar hela applikationens tillstånd.
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});

/* RootState representerar hela applikationens tillstånd.
ReturnType används för att extrahera typen från store.getState(), vilket ger oss
tillbaka en typ som representerar det faktiska tillståndet i applikationen. */
export type RootState = ReturnType<typeof store.getState>;

/*Skapar en typ, AppDispatch, som representerar typen av dispatch-funktionen från Redux-butiken (store). */
export type AppDispatch = typeof store.dispatch;