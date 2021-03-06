const express = require("express");

const app = express();

require("./badges/npm")(app);
require("./badges/acryps-cloud")(app);
require("./badges/vlsuite/vlcluster")(app);
require("./badges/vlsuite/vlquery")(app);

app.get("*", (req, res) => {
    res.redirect("https://github.com/levvij/gitbadge");
})

const port = process.env.PORT || 7000;

app.listen(port, () => {
    console.log(`started on ${port}`);
});