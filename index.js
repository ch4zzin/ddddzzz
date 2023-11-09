  const express = require("express"),
  app = express(),
  ejs = require('ejs'),
  client = new (require("discord.js")).Client()
const Badge = require("./Badge");

client.on("ready", async () => {
  console.log('[BOT] Iniciado')
  await client.user.setStatus("idle");
});

app.set("view engine", "ejs");
app.use(express.static("public"))


app.use(function(req, res, next) {
  res.removeHeader("x-powered-by")
  next();
});

app.post("*", async (req, res) => {
  return res.send('nao')
});


app.get("/", async (req, res, next) => {
  const bryan = await client.users.fetch
  ("911134691103473694")
  const duda = await client.users.fetch
  ("956288470647730307")
  
 

  
  const server = await client.guilds.fetch("1171918833137750056")

  return res.render("index", {
    bryan,
    duda,
  });
});

app.get("/webhooksender", async (req, res, next) => {
  return res.render("webhook", {
  });
});

app.get("/kaue", async (req, res, next) => {
  return res.render("kaue", {
  });
});


app.use(function(req, res) {
  res.status(404).redirect('https://youtu.be/SnZBwzj8Zyw');
});

client.login(process.env.TOKEN);

app.listen(process.env.PORT, () => {
  console.log('[EXPRESS] Iniciado')
});

setTimeout(() => process.exit(), 600000)