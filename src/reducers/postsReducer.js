const initialState = {
  posts: [],
  loading: false,
  error: null,
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST": {
      return {
        ...state,
        loading: true,
        error: null,
      }
    }
    case "FETCH_POSTS_SUCCESS": {
      return {
        ...state,
        loading: false,
        posts: action.payload,
      }
    }
    case "FETCH_POSTS_FAILURE": {
      return {
        ...state,
        loading: false,
        error: action.error,
        posts: [],
      }
    }
    default:
      return state
  }
}
