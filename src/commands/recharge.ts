import { Context } from "grammy";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function recharge(ctx: Context) {
    const rechargeValue = ctx.message?.text?.split(" ");

    // Verifica se o valor de recarga foi especificado
    if (!rechargeValue || rechargeValue.length <= 1) {
        await ctx.reply("Por favor, especifique o valor a ser recarregado.\nUso: /recarga [valor_da_recarga]");
        return;
    }

    const amount = parseFloat(rechargeValue[1]);

    // Verifica se o valor é um número válido
    if (isNaN(amount) || amount <= 0) {
        await ctx.reply("Por favor, insira um valor válido para a recarga.");
        return;
    }

    // Busca o usuário no banco de dados
    const user = await prisma.user.findFirst({
        where: {
            userId: ctx.from?.id.toString() ?? "",
        }
    });

    if (!user) {
        await ctx.reply("Usuário não encontrado. Por favor, registre-se antes de tentar recarregar.");
        return;
    }

    // Atualiza o crédito do usuário
    user.credit += amount;

    // Salva as alterações no banco de dados
    await prisma.user.update({
        where: { userId: user.userId },
        data: { credit: user.credit },
    });

    await ctx.reply(`Você recarregou R$${amount.toFixed(2)}. Seu novo saldo é R$${user.credit.toFixed(2)}.`);
}
