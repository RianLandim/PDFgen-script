const pdf = require("html-pdf");
const ejs = require("ejs");

let name = "Rian Landim";
let email = "rianlandim222@gmail.com";

ejs.renderFile("./src/screen/template.ejs", { name, email }, (err, html) => {
  if (err) console.log(err);
  pdf.create(html, {}).toFile("./pdf´s/template.pdf", function (err, res) {
    if (err) return console.log(err);
    console.log(res);
  });
});
