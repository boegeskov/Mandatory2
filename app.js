const express = require("express");
const app = express();

app.use(express.json()); //to check to see if library has been set right
app.use(express.urlencoded({ extended: true}))  

app.use(express.static("public"));

const projectsRouter = require("./routes/projects.js");
app.use(projectsRouter.router);

const contactsRouter = require("./routes/contacts.js");
app.use(contactsRouter.router);

const skillsRouter = require("./routes/skills.js");
app.use(skillsRouter.router);

const educationRouter = require("./routes/education.js");
app.use(educationRouter.router);

const refrencesRouter = require("./routes/refrences.js");
app.use(refrencesRouter.router);



//SSR = Server Side Rendering
const fs = require("fs");

const nav = fs.readFileSync(__dirname + "/public/nav/nav.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const projects = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");
const Contacts = fs.readFileSync(__dirname + "/public/Contacts/Contacts.html", "utf-8");
const Skills = fs.readFileSync(__dirname + "/public/Skills/Skills.html", "utf-8");
const Education = fs.readFileSync(__dirname + "/public/Education/Education.html", "utf-8");
const Refrences = fs.readFileSync(__dirname + "/public/Refrences/Refrences.html", "utf-8");


app.get("/", (req, res) => {
    res.send(nav + frontpage + footer);
});

app.get("/projects", (req, res) => {
    res.send(nav + projects + footer);
});

app.get("/Contacts", (req, res) => {
    res.send(nav + Contacts + footer);
});

app.get("/Skills", (req, res) => {
    res.send(nav + Skills + footer);
});

app.get("/Education", (req, res) => {
    res.send(nav + Education + footer);
});

app.get("/Refrences", (req, res) => {
    res.send(nav + Refrences + footer);
});



const PORT = process.env.PORT || 7050;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    // you are defining a variable and using it before finsishing the declaration
    console.log("Server is running", server.address().port);
});