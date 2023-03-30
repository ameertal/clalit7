//This is TextFilterState.ts file
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Text1 } from '../Models/TextFilterModel';

//This is the Contract
// interface TextState {
//     text: '';
// }

//This is the initialized Task Application State - initialize within empty array
// const initialState: TextState = {
//     text: '',
// };

const initialState: Text1 = {
    textInput: '',
  };

//These are all possible actions
export enum ActionType {
    UPDATE_TEXT = "UPDATE_TEXT",
}

//This is tasksSlice
const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
        setTextInput: (state, action: PayloadAction<string>) => {
            state.textInput = action.payload;
          },
      
        // updateText(state, action: PayloadAction<Text1>) {
        //     state.textInput = action.payload;
        // },
    },
});

//This is the exported tasks
export const {
    setTextInput,
} = textSlice.actions;

//Export the reducer
export const textReducer = textSlice.reducer;

// export default configureStore({
//     reducer: {
//         text: textSlice.reducer,
//     },
//   });
  