const ejs = require("ejs");
const path = require("path");
const express = require("express");
const puppeteer = require("puppeteer");
const passengers = require("./util/const");

const app = express();

app.get("/pdf", async (req, res) => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/", {
    waitUntil: "networkidle0"
  });

  const pdf = await page.pdf({
    printBackground: true,
    format: "letter"
  });

  await browser.close();

  res.contentType("application/pdf");

  return res.send(pdf);

});

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "screen", "template.ejs");
  ejs.renderFile(filePath, { passengers }, (err, html) => {
    if (err) return res.send("Erro na leitura de arquivo!");
    return res.send(html);
  });
});

app.listen(3000, () => {
  console.log("Server Running!");
});