const { Comment } = require("../models");

const commentData = [
    {
        comment_text: "Ronaldo is the best",
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: "CR7 or R9?",
        user_id: 2,
        post_id: 1,
    },
    {
        comment_text: "CR7 of course",
        user_id: 3,
        post_id: 1,
    },
    {
        comment_text: "No!! R9 he has a world cup",
        user_id: 4,
        post_id: 1,
    },
    {
        comment_text: "CR7 Mr.Champions league himself",
        user_id: 5,
        post_id: 1,
    },
    {
        comment_text: "Soccer is the most watched sport",
        user_id: 1,
        post_id: 2,
    },
    {
        comment_text: "And not just when the world cup is on",
        user_id: 2,
        post_id: 2,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;