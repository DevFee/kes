import { Context } from "grammy";
import { PrismaClient } from "@prisma/client";
import { itemsKeyboard } from "../templates/itemskeyboards";

export default function showItems(ctx: Context) {
    ctx.deleteMessage()
    ctx.reply("Escolha um item para comprar!", { reply_markup: itemsKeyboard, parse_mode: "Markdown" });
}