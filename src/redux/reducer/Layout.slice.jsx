import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	activeBanner: Boolean
}

const layout = createSlice({
	name: "layout",
	initialState: initialState,
	reducers: {
		changeLayout: (state, action) => {
			state.activeBanner = action.payload
		}
	}
})

const layoutReducer = layout.reducer;
export const layoutAction = layout.actions
export default layoutReducer