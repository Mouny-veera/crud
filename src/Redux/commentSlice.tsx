import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 
interface comment { 
    name: string;
    email: string;
    body: string;
}
const initialState :any = {
 comments: []
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<comment>) => {
        console.log(action);     
      state.comments.push(action.payload)
    }
  }
});

export const commentResponse = (state : any) => state.commentSlice;
export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;
