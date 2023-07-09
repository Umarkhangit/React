import { useState,useEffect } from 'react';
import './App.css';
import { useGetAllPostQuery,useGetPostByIdQuery,useGetPostByLimitQuery,useDeletePostMutation,useCreatePostMutation,useUpdatePostMutation } from './servies/post';

function App() {
  const [data,setData] = useState([])
  const response = useGetAllPostQuery()
  const resId = useGetPostByIdQuery(5)
  const resLimit = useGetPostByLimitQuery(5)
  const [deletePost,resDelete] = useDeletePostMutation()
  const [createPost,resCreate] = useCreatePostMutation()
  const [updatePost,resUpdate] = useUpdatePostMutation()
  console.log("res",resCreate)
  // console.log("data",response)

  const updated={
    id:1,
    title:"updated title",
    body:"updated body",
    userid:1
  }
  useEffect(()=>{
    setData(response.data)
  })
  if(response.isLoading) return<div>Loading...</div>
  if(response.isError) return<h2>{response.error.error}</h2>

  

  return (
    <div className="App">
      <h2>Redux Toolkit - RTK Query</h2>

      {/* {
        data?.map((val,index)=>{
          return(
            <p key={val.id}>{index+1}. {val.body}</p>
          )
        })
      } */}
      <button onClick={()=>deletePost(2)}>delete</button>
      <button onClick={()=>createPost()}>create</button>
      <button onClick={()=>updatePost(updated)}>update</button>
    </div>
  );
}

export default App;
