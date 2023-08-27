const {Schema, model} = require('mongoose');

const PostSchema = new Schema({
    title: {
        type: Schema.Types.String,
        required: true,
    },

    description: {
        type: Schema.Types.String,
        required: true,
    },
}, {
    timestamps: true,
});

const PostModel = model("post", PostSchema);


module.exports = {
    PostModel
}