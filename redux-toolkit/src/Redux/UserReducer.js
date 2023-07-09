import { createSlice } from '@reduxjs/toolkit'
import { UserData } from "../Data";

const userSlice = createSlice({
    name:"users",
    initialState:UserData,
    reducers:{
        addUser:(state,action)=>{
            console.log("action",action)
            state.push(action.payload)
        },
        updateUser:(state,action)=>{
            // const uu=state.map(u =>{
            //     if(action.payload.id==u.id){
                    
            //         const name=action.payload.name
            //         const email=action.payload.email
                    
            //         return {...u,name:name,email:email}
            //     }
            //     return u
            // })
            // return state=uu

            const {id,name,email}=action.payload
            const uu=state.find(user=>user.id==id);
            if(uu){
                uu.name=name
                uu.email=email
            }
        },
        deleteUser:(state,action)=>{
            const filtered=state.filter(f =>f.id!=action.payload)
            return state=filtered
        }
    }
})

export const {addUser,updateUser,deleteUser} = userSlice.actions
export default userSlice.reducer