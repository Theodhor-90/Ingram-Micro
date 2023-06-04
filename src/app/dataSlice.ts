import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import painPoints, {
  experiences,
  businessFunctions,
  businessPillars,
  growthStages,
} from '../data/getStructuredPainPoints';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    painPoints,
    experiences,
    businessFunctions,
    businessPillars,
    growthStages,
    firstLevelSelection: '',
    secondLevelSelection: '',
    thirdLevelSelection: null,
    multipleLevelSelection: [],
    multipleLevelOptions: [] as any[],
    selectedGrowthStage: '',
    secondLevelOptions: {},
    filteredPainPoints: [] as any[],
    selectedPainpoint: 0,
  },
  reducers: {
    updateFirstLevelSelection: (state, action) => {
      state.firstLevelSelection = action.payload;
      const multipleLevelOptions: any[] = [];
      if (action.payload === 'experience') {
        state.secondLevelOptions = state.experiences;
        Object.values(state.businessFunctions).forEach((el) => {
          multipleLevelOptions.push({
            name: el,
            selected: false,
          });
        });
        state.multipleLevelOptions = multipleLevelOptions;
      }
      if (action.payload === 'functions') {
        state.secondLevelOptions = state.businessFunctions;
        Object.values(state.experiences).forEach((el) => {
          multipleLevelOptions.push({
            name: el,
            selected: false,
          });
        });
        state.multipleLevelOptions = multipleLevelOptions;
      }
      state.secondLevelSelection = '';
      state.thirdLevelSelection = null;
      dataSlice.caseReducers.updateFilteredData(state);
    },
    updateSecondLevelSelection: (state, action) => {
      state.secondLevelSelection = action.payload;
      state.thirdLevelSelection = null;
      dataSlice.caseReducers.updateFilteredData(state);
    },
    updateGrwothStageSelection: (state, action) => {
      state.selectedGrowthStage = action.payload;
      dataSlice.caseReducers.updateFilteredData(state);
    },

    updateMultipleLevelOptions: (state, action) => {
      const multipleLevelOptions = state.multipleLevelOptions;
      multipleLevelOptions.forEach((option, index) => {
        if (index !== action.payload) {
          option.selected = false;
        }
      });
      state.multipleLevelOptions = multipleLevelOptions;
      if (state.thirdLevelSelection !== action.payload) {
        state.thirdLevelSelection = action.payload;
      }
      dataSlice.caseReducers.updateFilteredData(state);
    },
    updateFilteredData: (state) => {
      const painPoints = [...state.painPoints];
      const primaryKey =
        state.firstLevelSelection === 'experience'
          ? 'experiences'
          : 'businessFunctions';
      const secondaryKey =
        state.firstLevelSelection === 'experience'
          ? 'businessFunctions'
          : 'experiences';
      const filteredPoints: any[] = painPoints.filter((point) => {
        let condition = true;
        let multipleSelectedOptions: string[] = [];

        if (
          state.selectedGrowthStage &&
          !point.growthStages.includes(state.selectedGrowthStage)
        ) {
          condition = false;
        }
        if (
          state.secondLevelSelection &&
          !point[primaryKey].includes(state.secondLevelSelection)
        ) {
          condition = false;
        }
        state.multipleLevelOptions.forEach((el) => {
          if (el.selected) {
            multipleSelectedOptions.push(el.name);
          }
        });
        if (
          state.thirdLevelSelection !== null &&
          !point[secondaryKey].includes(
            state.multipleLevelOptions[state.thirdLevelSelection].name
          )
        ) {
          condition = false;
        }

        return condition;
      });
      if (state.firstLevelSelection) {
        state.filteredPainPoints = filteredPoints;
        state.selectedPainpoint = 0;
      }
    },
    updateSelectedPainpoint: (state, action: PayloadAction<number>) => {
      state.selectedPainpoint = action.payload;
    },
  },
});

export const {
  updateFirstLevelSelection,
  updateSecondLevelSelection,
  updateMultipleLevelOptions,
  updateGrwothStageSelection,
  updateSelectedPainpoint,
} = dataSlice.actions;

export default dataSlice.reducer;
