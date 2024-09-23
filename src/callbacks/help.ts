import { Context } from "grammy";
import { backOption } from "../templates/backOptionTemplate";
export default function help(ctx: Context) {
    ctx.deleteMessage()
    ctx.reply(`
Olá \`${ctx.from?.first_name}\`, aqui está um guia rápido de como utilizar o bot!

$ Como funciona: Este bot é uma loja de serviços web. Você compra nossos serviços e mandamos um breve tutorial de como utiliza-las além dos próprios serviços, por exemplo, você compra um site pronto e mandamos um arquivo de texto ensinando a modificar o site alem do próprio site, e assim vai para todos os nossos serviços.

$ Serviços web:
- Templates de sites
- Bots automatizados
- Serviços de redes sociais
- Pacotes secretos

$ Como comprar: Faça uma recarga no bot para receber \`Créditos\` no bot e navegue pelo nossos /produtos e compre o que deseja.

$ Suporte: @tr4ckdnv
$ Referencias: t.me/keseyfrefs/

`, { reply_markup: backOption, parse_mode: "Markdown" })
}