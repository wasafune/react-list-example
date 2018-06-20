import orm from '../orm'

// constants
import {
  FETCH_SUCCESS,
  FETCH_FAIL,
} from '../constants'

const emptyDBState = orm.getEmptyState()

// handle changes to the redux+orm store
const mainReducer = (state = emptyDBState, action) => {
  const session = orm.session(state)
  const { Post } = session
  const { type, payload } = action
  switch (type) {
    case FETCH_SUCCESS:
      payload.forEach(ele => Post.create(ele))
      break
    case FETCH_FAIL:
      console.error(payload)
      break
    default:
      break
  }
  return session.state
}

export default mainReducer
