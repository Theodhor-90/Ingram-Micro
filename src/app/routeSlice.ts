import { createSlice } from '@reduxjs/toolkit'

const getIsScreenMobile = () => {
  return window.innerWidth < 992 ? true : false
}

const getWindowSize = () => {
  return window.innerWidth
}

export const routeSlice = createSlice({
  name: 'routes',
  initialState: {
    position: 'Explore Engagement Tools',
    activeNav: false,
    isScreenMobile: getIsScreenMobile(),
    windowSize: getWindowSize(),
    isChartInViewport: true,
    hasGrowthStageBeenClicked: false
  },
  reducers: {
    updateRoute: (state, action) => {
      state.position = action.payload
    },
    toggleNav: (state, action) => {
      state.activeNav = action.payload
    },
    updateIsScreenMobile: (state, action) => {
      state.isScreenMobile = action.payload
    },
    updateWindowSize: (state, action) => {
      state.windowSize = action.payload
    },
    setIsChartInViewport: (state, action) => {
      state.isChartInViewport = action.payload
    },
    clickGrowhtStage: (state) => {
      state.hasGrowthStageBeenClicked = true
    },
  },
})

export const {
  updateRoute,
  toggleNav,
  updateIsScreenMobile,
  updateWindowSize,
  setIsChartInViewport,
  clickGrowhtStage
} = routeSlice.actions

export default routeSlice.reducer
