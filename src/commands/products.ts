import { Context } from "grammy";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function showProducts(ctx: Context) {
    const webProducts = await prisma.sites.findMany({
        select: {
            name: true,
            price: true,
            desc: true,
            visualize: true
        }
    })
    webProducts.map((product) => {
        ctx.reply(`
${product.name} : Preço: ${product.price}

Descrição: ${product.desc}
Visualizar: ${product.visualize}
    `)
    })
}