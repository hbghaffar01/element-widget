import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ElementState {
  allElements: string[];
  selectedElements: string[];
}

const initialState: ElementState = {
  allElements: Array.from({ length: 300 }, (_, i) => `Element ${i + 1}`),
  selectedElements: [],
};

const elementSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    toggleElement: (state, action: PayloadAction<string>) => {
      const elementIndex = state.selectedElements.indexOf(action.payload);

      if (elementIndex > -1) {
        state.selectedElements = state.selectedElements.filter(
          el => el !== action.payload
        );
      } else if (state.selectedElements.length < 3) {
        state.selectedElements = [...state.selectedElements, action.payload];
      }
    },
    removeElement: (state, action: PayloadAction<string>) => {
      state.selectedElements = state.selectedElements.filter(
        el => el !== action.payload
      );
    },
  },
});

export const { toggleElement, removeElement } = elementSlice.actions;
export default elementSlice.reducer;