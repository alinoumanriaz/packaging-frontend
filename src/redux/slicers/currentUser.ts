// store/slices/currentUserSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  _id: string;
  username: string;
  email: string;
  role: string;
  isVerified: boolean;
  userImage?: string;
};

interface CurrentUserState {
  loading: boolean;
  user: User | null;
}

const initialState: CurrentUserState = {
  loading: true, // true initially because you're fetching on mount
  user: null,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.loading = false;
    },
    startLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setUser, clearUser, startLoading } = currentUserSlice.actions;
export default currentUserSlice.reducer;
