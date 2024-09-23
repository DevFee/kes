import { Bot } from "grammy";
import start from "./commands/start";
import showItems from "./callbacks/showItems";
import account from "./callbacks/account";
import help from "./callbacks/help";
import produtos from "./commands/products";
import recharge from "./commands/recharge";

const app = new Bot("7489556597:AAHFME5T8ZuOe88QLIBsMpRQOpX6M4LEu7U");

app.command("start", async (ctx) => {
    await start(ctx);
});

app.command("produtos", async (ctx) => {
    await produtos(ctx)
})

app.command("recarga", async (ctx) => {
    recharge(ctx)
})

app.callbackQuery("showItems", async (ctx) => {
    showItems(ctx)
})

app.callbackQuery("mainMenu", async (ctx) => {
    await start(ctx)
})

app.callbackQuery("account", async (ctx) => {
    account(ctx)
})

app.callbackQuery("useManual", (ctx) => {
    help(ctx)
})

console.log("[+] Bot initialized...")
app.start();
