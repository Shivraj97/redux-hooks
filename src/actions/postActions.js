import Axios from "axios"

// async thunk function
export const fetchPosts = () => async (dispatch, getState) => {
  dispatch({
    type: "FETCH_POSTS_REQUEST",
  })
  try {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    )
    dispatch({
      type: "FETCH_POSTS_SUCCESS",
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: "FETCH_POSTS_FAILURE",
      error,
    })
  }
}

// export const fetchPosts = () => {
//   const promise = Axios.get("https://jsonplaceholder.typicode.com/posts")
//   return {
//     type: "FETCH_POSTS",
//     payload: promise,
//   }
// }
