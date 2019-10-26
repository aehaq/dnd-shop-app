const express = require("express");
const routes = require("./routes/routes");
const db = require("./models")

const app= express();
const PORT = process.env.PORT || 3000;

require("./routes/routes.js")(app)

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log(`Listening on port ${PORT}`);
    });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("../view/public"));

app.use(routes);