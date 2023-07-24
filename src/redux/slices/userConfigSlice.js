import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { EMAIL_KEY, getItem } from '../../localStorageConfig';
import { db } from '../../server/firebaseConfig';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';

export const getMyInfo = createAsyncThunk('/user/getmyinfo', async (_, thunkAPI) => {
    try {

        // thunkAPI.dispatch(setSpinner(true));
        const localEmail = getItem(EMAIL_KEY)
     
        const docRef = doc(db, "users", localEmail);
        const docSnap = await getDoc(docRef);

        const data = docSnap.data()
        // console.log(data);
        return data;


    } catch (e) {
        console.log(e);

    } finally {
        // thunkAPI.dispatch(setSpinner(false));
    }
})

export const getMyFeed = createAsyncThunk('/user/getmyfeed', async (_, thunkAPI) => {
    try {

        // thunkAPI.dispatch(setSpinner(true));
        const localEmail = getItem(EMAIL_KEY)
      
                const postCol = collection(db, "posts");
        const q = query(postCol, orderBy("createdAt","desc"))
        
        const snap = await getDocs(q);

        const posts = snap.docs.map(doc => doc.data());



        return posts;


    } catch (e) {
        return Promise.reject(e)

    } finally {
        // thunkAPI.dispatch(setSpinner(false));
    }
})

export const likePost= createAsyncThunk('post/like',async(body)=>{

    try {
       
        // const response = await axiosClient.post('/post/like',body);
        

        return body;
        
    } catch (e) {
        console.log(e);
        
    }
    
})



const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        myProfile: {},
        myFeed: []


    },

    extraReducers: (builder) => {
        builder
            .addCase(getMyInfo.fulfilled, (state, action) => {
                state.myProfile = action.payload;
            })
        builder
            .addCase(getMyFeed.fulfilled, (state, action) => {
                state.myFeed = action.payload;
            })
            .addCase(likePost.fulfilled, (state, action) => {
                const post = action.payload;
                // const index = state.feedData.posts.findIndex(item => item._id === post._id)
                // if (index !== -1) {
                //     state.feedData.posts[index] = post;

                // }

            })

            
        // .addCase(updateProfile.fulfilled, (state, action) => {
        //     state.myProfile = action.payload.user;
        // })

    }
})



export default userSlice.reducer;