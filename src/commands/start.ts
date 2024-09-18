import { Bot, Context, InlineKeyboard, CommandContext } from "grammy";
import { PrismaClient } from "@prisma/client";
import { mainMenuKeyboard } from "../templates/mainMenuTemplate";
import { itemsKeyboard } from "../templates/itemskeyboards";
import { backOption } from "../templates/backOptionTemplate";

const prisma = new PrismaClient();

export default async function start(ctx: Context) {
    ctx.deleteMessage()
    ctx.reply(`Olá \`${ctx.from?.first_name}\`, selecione uma opção!`, { reply_markup: mainMenuKeyboard, parse_mode: "Markdown" })
    const userId = ctx.from?.id.toString() ?? "";

    const user = await prisma.user.findFirst({
        where: { userId }
    });

    if (!user) {
        console.log("User not found, registering...")
        await prisma.user.create({
            data: {
                name: ctx.from?.first_name ?? "",
                userId,
                credit: 0,
                username: ctx.from?.username ?? ""
            }
        });
    } else {
        console.log("User already registered")
    }
}