import { createSlice, PayloadAction } from '@reduxjs/toolkit';

 export type ThemeType = 'light' | 'dark' | 'solarized';

interface ThemeState {
  current: ThemeType;
}

const initialState: ThemeState = {
  current: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.current = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
