import { app, BrowserWindow } from "electron";

app.on("ready", () => {
  const window = new BrowserWindow();

  window.setFullScreen(true);
  window.loadFile("../public/team-vicito.github.io/index.html");
});

console.log("asd");
