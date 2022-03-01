import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice(
    {
        name: 'user',
        initialState: {
            username: "",
            token: {access: "", refresh: ""}
        },
        reducers: {
            setUser: (state, action) => {
                state.username = action.payload.username
                state.token = action.payload.token
            },
            setToken: (state, action) => {
                state.token = action.payload.token
            },
            logout: (state) => {
                state.username = ""
                state.token = ""
            }
        }
    }
)

export const { setUser, setToken, logOut } = userSlice.actions
export default userSlice.reducer