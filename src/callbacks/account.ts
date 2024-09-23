import { Context } from "grammy";
import { PrismaClient } from "@prisma/client";
import { backOption } from "../templates/backOptionTemplate";

const prisma = new PrismaClient();

export default async function account(ctx: Context) {
    ctx.deleteMessage()
    const user = await prisma.user.findFirst({
        where: { userId: ctx.from?.id.toString() ?? "" },
        select: {
            name: true,
            credit: true,
            userId: true,
        }
    });
    ctx.reply(`👤 *Nome*: \`${user?.name}\`\n💵 *Saldo*: ${user?.credit}\n🪪 *Id*: ${user?.userId}`, {
        reply_markup: backOption, parse_mode: "Markdown"
    });
}