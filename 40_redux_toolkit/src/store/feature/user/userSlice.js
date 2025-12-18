import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const fetchUser = createAsyncThunk("user/fetchUser", async (payload, { rejectWithValue }) => {
    try {
        const response = await fetch("https://dummyjon.com/users");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        return rejectWithValue("Oops! something went wrong")
    }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.loading = false;
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      (state.loading = false), (state.users = action.payload);
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false,
        // state.error = action.error.message
        state.error = action.payload;
    });
  },
});

export { fetchUser };
export default userSlice.reducer;
