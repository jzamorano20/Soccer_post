const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

//Homepage
router.get("/", async (req, res) => {
    try {
        // Find all posts with associated usernames
        const postData = await Post.findAll({
            include: [{ model: User, attributes: ["username"] }],
        });
        // need to convert to js and not just data
        const posts = postData.map((post) => post.get({ plain: true }));
        // render homepage template with posts and login status
        res.render("homepage", {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        // bad gateway error
        res.status(502).json(err);
    }
});
// render individual post page
router.get("/post/:id", withAuth, async (req, res) => {
    try {
        // Find post by ID with associated username and comments with associated usernames
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ["username"] },
                {
                    model: Comment,
                    include: [{ model: User, attributes: ["username"] }],
                },
            ],
        });

        const post = postData.get({ plain: true });
        // renders template with post data and login status
        res.render("post", {
            ...post,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        //bad gateway error
        res.status(502).json(err);
    }
});
// Find all posts by current user with associated usernames
router.get("/dashboard", withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: { user_id: req.session.user_id },
            include: [{ model: User, attributes: ["username"] }],
        });
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render("dashboard", {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(404).json(err);
    }
});

router.get("/login", (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/dashboard");
        return;
    }
    res.render("login");
});

router.get("/signup", (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/dashboard");
        return;
    }
    res.render("signup");
});

//render the new post page
router.get("/newpost", (req, res) => {
    if (req.session.logged_in) {
        res.render("new_post");
        return;
    }
    res.redirect("/login");
});

//render the edit post 
router.get("/editpost/:id", async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ["username"] },
                {
                    model: Comment,
                    include: [{ model: User, attributes: ["username"] }],
                },
            ],
        });

        const post = postData.get({ plain: true });

        res.render("edit_post", {
            ...post,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(502).json(err);
    }
});

module.exports = router;