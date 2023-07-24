import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { EMAIL_KEY, getItem } from '../../localStorageConfig';
import { db } from '../../server/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';

export const getMyInfo = createAsyncThunk('/user/getmyinfo', async (_, thunkAPI) => {
    try {

        // thunkAPI.dispatch(setSpinner(true));
        const localEmail = getItem(EMAIL_KEY)
        console.log("hi");

        const userCol = collection(db, 'users');
        const snap = await getDocs(userCol);
        const user = snap.docs.filter(doc =>
            doc.id === localEmail
        );
        const data = user[0]._document.data.value.mapValue.fields
        console.log(data);
        return data;


    } catch (e) {
        return Promise.reject(e)

    } finally {
        // thunkAPI.dispatch(setSpinner(false));
    }
})



const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        myProfile: {},


    },

    extraReducers: (builder) => {
        builder
            .addCase(getMyInfo.fulfilled, (state, action) => {
                state.myProfile = action.payload;
            })
        // .addCase(updateProfile.fulfilled, (state, action) => {
        //     state.myProfile = action.payload.user;
        // })

    }
})



export default userSlice.reducer;