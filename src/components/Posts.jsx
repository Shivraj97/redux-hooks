import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./../actions/postActions"

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  console.log("posts", posts)

  if (posts.loading) {
    return "Loading..."
  }
  return (
    <div>
      User's posts:
      <ul>
        {posts.posts.map((item) => {
          return <li key={item.id}>{item.title}</li>
        })}
      </ul>
    </div>
  )
}

export default Posts
