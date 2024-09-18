import { InlineKeyboard } from "grammy"
export const itemsKeyboard = new InlineKeyboard()
    .text("Teamplate de sites", "showWebsites")
    .row()
    .text("Bots telegram", "showBots")
    .row()
    .text("Voltar", "mainMenu")