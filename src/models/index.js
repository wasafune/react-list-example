import { attr, Model } from 'redux-orm';

class Post extends Model {}

Post.modelName = 'Post'
Post.fields = {
  id: attr(),
  userId: attr(),
  title: attr(),
  body: attr(),
}


export { Post }
