const ejs = require("ejs");
const path = require("path");
const pdf = require("html-pdf");
const passengers = require("./util/const");

const options = { format: "letter" };

passengers.forEach((passengers) => {
  const filePath = path.join(__dirname, "screen", "template.ejs");
  const pdfPath = path.join(__dirname, "pdf", "/");

  ejs.renderFile(filePath, { passengers }, (err, html) => {
    if (err) return console.log(err);
    pdf.create(html, options)
      .toFile(pdfPath + passengers.name + ".pdf", function (err, res) {
        if (err) return console.log("Erro ao gerar o PDF!");
        console.log(res);
      });
  });
});