const pdf = require("html-pdf");
const ejs = require("ejs");

const name = "Rian Landim";
const email = "rianlandim222@gmail.com";

ejs.renderFile("./src/screen/template.ejs", { name, email }, (err, html) => {
  if (err) console.log(err);
  pdf.create(html, {}).toFile("./pdf´s/template.pdf", (err, res) => {
    if (err) return console.log(err);
    console.log(res);
  });
});
