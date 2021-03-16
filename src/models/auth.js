import  mongoose from 'mongoose';
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    userName : {
        type: String,
        required: true
    },
    passWord: {
        type: String,
        required: true
    },
    
});
export default  mongoose.model('users', UserSchema);