import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './slicers/currentUser';
// import openConversationReducer from './slicers/openConversation'
// import updaterReducer from './slicers/updater'
export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    // openConversation: openConversationReducer,
    // updater: updaterReducer
    // add more reducers here if needed
  },
});

// Inferred types:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
