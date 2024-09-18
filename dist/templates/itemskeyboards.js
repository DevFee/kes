"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsKeyboard = void 0;
const grammy_1 = require("grammy");
exports.itemsKeyboard = new grammy_1.InlineKeyboard()
    .text("Teamplate de sites", "showWebsites")
    .row()
    .text("Bots telegram", "showBots")
    .row()
    .text("Voltar", "mainMenu");
