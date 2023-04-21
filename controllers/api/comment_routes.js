const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");
// Creates a new comment 
router.post("/", withAuth, async (req, res) => {
    try {
        // Creates a new comment with provided data
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        // Send a response with the new comment data
        res.status(200).json(newComment);
    } catch (err) {
        // Send an error response if something went wrong or could use 500 instead of 400
        res.status(400).json(err);
    }
});
// Export the router
module.exports = router;