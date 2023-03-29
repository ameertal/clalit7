//This is TextFilterState.ts file
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Text1 } from '../Models/TextFilterModel';

//This is the Contract
interface TextState {
    text: Text1;
}

//This is the initialized Task Application State - initialize within empty array
const initialState: TextState = {
    text: 'light',
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
        updateText(state, action: PayloadAction<Text1>) {
            state.text = action.payload;
        },
    },
});

//This is the exported tasks
export const {
    updateText,
} = textSlice.actions;


//Export the reducer
export const textReducer = textSlice.reducer;