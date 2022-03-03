import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice(
    {
        name: 'user',
        initialState: {
            user: {username: ""},
            token: {access: null, refresh: null}
        },
        reducers: {
            setUserAndToken: (state, action) => {
                state.user = action.payload.usern
                state.token = action.payload.token
            },
            setToken: (state, action) => {
                state.token = action.payload.token
            },
            signOut: (state) => {
                state.user = {username: ""}
                state.token = {access: null, refresh: null}
            }
        }
    }
)

export const { setUserAndToken, setToken, signOut } = userSlice.actions
export default userSlice.reducer