import { createSelector } from 'redux-orm'
import orm from '../orm'

// select odd ids from the store db and slice the first 10 items
export const oddSelector = createSelector(
  orm,
  session => {
    return session.Post
      .all()
      .toRefArray()
      .filter(obj => obj.id % 2)
      .slice(0, 10)
  }
)
