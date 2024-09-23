"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const backOptionTemplate_1 = require("../templates/backOptionTemplate");
function help(ctx) {
    var _a;
    ctx.deleteMessage();
    ctx.reply(`
Olá \`${(_a = ctx.from) === null || _a === void 0 ? void 0 : _a.first_name}\`, aqui está um guia rápido de como utilizar o bot!

$ Como funciona: Este bot é uma loja de serviços web. Você compra nossos serviços e mandamos um breve tutorial de como utiliza-las além dos próprios serviços, por exemplo, você compra um site pronto e mandamos um arquivo de texto ensinando a modificar o site alem do próprio site, e assim vai para todos os nossos serviços.

$ Serviços web:
- Templates de sites
- Bots automatizados
- Serviços de redes sociais
- Pacotes secretos

$ Como comprar: Faça uma recarga no bot para receber \`Créditos\` no bot e navegue pelo nossos /produtos e compre o que deseja.

$ Suporte: @tr4ckdnv
$ Referencias: t.me/keseyfrefs/

`, { reply_markup: backOptionTemplate_1.backOption, parse_mode: "Markdown" });
}
exports.default = help;
