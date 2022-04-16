import mongoose from 'mongoose';
const tuitsSchema = mongoose.Schema({
    tuit: String,
    likes: Number,
    dislikes: Number,
    postedBy: {
        username: String
    }
}, {collection: 'tuits'});
export default tuitsSchema;

