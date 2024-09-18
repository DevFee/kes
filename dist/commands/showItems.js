"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemskeyboards_1 = require("../templates/itemskeyboards");
function showItems(ctx) {
    ctx.deleteMessage();
    ctx.reply("Escolha um item para comprar!", { reply_markup: itemskeyboards_1.itemsKeyboard, parse_mode: "Markdown" });
}
exports.default = showItems;
