import { ORM } from 'redux-orm'
import { Post } from './models'

const orm = new ORM()
orm.register(Post)


export default orm
