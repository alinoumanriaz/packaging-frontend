import { ISelectedUser } from "@/Types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



type ConversationSlice = {
    selectedConversation: null | ISelectedUser
}
const initialState: ConversationSlice = {
    selectedConversation: null 
}
const openConversationSlice = createSlice({
    name : 'openConversation',
    initialState,
    reducers: {
        setSelectedConversation: (state, action: PayloadAction<ISelectedUser>) =>{
            state.selectedConversation= action.payload
            console.log({stateCon:state.selectedConversation})
        },
        clearSelectedConversation: (state) =>{
            state.selectedConversation= null
            console.log({stateCon:state.selectedConversation})
        }
    }

})
export const { setSelectedConversation, clearSelectedConversation } = openConversationSlice.actions;
export default openConversationSlice.reducer;