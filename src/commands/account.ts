import { Context } from "grammy";
import { PrismaClient } from "@prisma/client";
import { backOption } from "../templates/backOptionTemplate";

const prisma = new PrismaClient();

export default async function account(ctx: Context) {
    ctx.deleteMessage()
    const user = await prisma.user.findFirst({
        where: { userId: ctx.from?.id.toString() ?? "" }
    });
    ctx.reply(`Nome: ${user?.name}\nSaldo: ${user?.credit}`, {
        reply_markup: backOption
    });
}