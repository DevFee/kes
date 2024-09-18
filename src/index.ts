import { Bot } from "grammy";
import start from "./commands/start";
import showItems from "./commands/showItems";
import account from "./commands/account";

const app = new Bot("7489556597:AAHFME5T8ZuOe88QLIBsMpRQOpX6M4LEu7U");

app.command("start", async (ctx) => {
    await start(ctx);
});

app.callbackQuery("showItems", async (ctx) => {
    showItems(ctx)
})

app.callbackQuery("mainMenu", async (ctx) => {
    await start(ctx)
})

app.callbackQuery("account", async (ctx) => {
    account(ctx)
})

app.start().then(() => console.log("Bot initialized..."));
