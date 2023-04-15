import * as mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: String,
  slug: {type: String, unique: true},
  content: String,
  metaContent: String,
});
// export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema)
export default BlogSchema;
