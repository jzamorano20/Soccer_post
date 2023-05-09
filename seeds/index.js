const sequelize = require("../config/connection");
const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");

// Importing sequelize connection


// Function to seed all data by calling the three seed functions in sequence
const seedAll = async () => {// tutor taught

    await sequelize.sync({ force: true });
    // Calling each of the seed data functions
    await seedUsers();
    await seedPosts();
    await seedComments();
    
    process.exit(0);
};
// Calling the seedAll function to seed the database
seedAll();