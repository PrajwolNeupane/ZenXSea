import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode:false
}
const ModeSlice = createSlice({
    name:"Mode",
    initialState,
    reducers:{
        setMode:(state,action) => {
            state.mode = action.payload;
        }
    }
});

export default ModeSlice.reducer;
export const {setMode} = ModeSlice.actions; 