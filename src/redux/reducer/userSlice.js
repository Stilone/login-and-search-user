import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: {
        image: '',
        title: '',
        first: '',
        last: ''
    }
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getPeople: (state, action) => {
            state.user.image = action.payload.results[0].picture.large
            state.user.title = action.payload.results[0].name.title
            state.user.first = action.payload.results[0].name.first
            state.user.last = action.payload.results[0].name.last
        },
    },
});

export const {getPeople, getPeopleError} = userSlice.actions;

export default userSlice.reducer;

