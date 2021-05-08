const router = require("express").Router(); // den sidste parantes instansere linjen. // dummy route


// nodemon.cmd --ext "js,html" app.js // makes nodemon available to html also

// json schema
const projects = [
    {
        title: "Nodefolio",
        description: "Created a personal portfolio with node js",
        gitURL: "https://github.com/boegeskov/Eksamesprojekt-tech.git",
        images: [],
        technologiesInvolved: ["Java", "Html", "CSS"]
    }
];




router.get("/api/projects", (req, res) => {
    res.send({ projects });
});


// a variable you assaign something too
module.exports = {
    router
};