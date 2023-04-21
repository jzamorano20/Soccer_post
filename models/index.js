const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");
//relationships between the models
User.hasMany(Post, {
    foreignKey: "user_id", // Set up the foreign key relationship
});

Post.belongsTo(User, {
    foreignKey: "user_id",
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
});

Comment.belongsTo(Post, {
    foreignKey: "post_id",
});

Post.hasMany(Comment, {
    foreignKey: "post_id",
});

User.hasMany(Comment, {
    foreignKey: "user_id",
});

module.exports = { User, Post, Comment };