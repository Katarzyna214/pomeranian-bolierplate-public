import {configureStore,} from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice';
//!! Przykładowa konfiguracja store z wartością do wyswietlenia
// const initialTestState = {
//     value: 'store is working'
// }

// export const storeTest = createSlice({
//     name: 'store-test',
//     initialState: initialTestState,
//     reducers: {}
// })
// export const store =configureStore({
//     reducer: {
//         storeTest: storeTest.reducer //wszystkie reducery z wyzej przekaze do naszego store
//     }
// })
//!! 
export const store = configureStore({
    reducer: {
       counter: counterReducer,
    }
})