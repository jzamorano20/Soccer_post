const { Post } = require("../models");

const postData = [
    {
        title: "Ronaldo CR7",
        content: "The Goat of soccer .",
        user_id: 1,
    },
    // added exatra examples 
    {
        title: "Why is soccer great",
        content: "Most viewed sport.",
        user_id: 2,
    },
    {
        title: "Teams",
        content: "Manchester United and Real Madrid few of the best teams.",
        user_id: 3,
    },
    {
        title: "About soccer",
        content: "Google it lol .",
        user_id: 4,
    },
    {
        title: "Top scorer",
        content: "Ronaldo 700+ goals and counting.",
        user_id: 5,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;