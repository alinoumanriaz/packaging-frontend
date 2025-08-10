import { createSlice } from "@reduxjs/toolkit";

type UpdaterState = {
    updater: boolean;
};

const initialState: UpdaterState = {
    updater: false,
};

const updaterSlice = createSlice({
    name: 'updater',
    initialState,
    reducers: {
        toggleUpdater: (state) => {
            state.updater = !state.updater;
            console.log({stateUpdate:state.updater})
        },
    },
});

export const { toggleUpdater } = updaterSlice.actions;
export default updaterSlice.reducer;
