"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainMenuKeyboard = void 0;
const grammy_1 = require("grammy");
exports.mainMenuKeyboard = new grammy_1.InlineKeyboard()
    .text("🛒 Comprar", "showItems")
    .row()
    .text("🪪 Perfil", "account")
    .text("📜 Uso", "useManual")
    .row()
    .text("💵 Adicionar saldo", "addBalance")
    .row()
    .url("📲 Referencias", "t.me/refsnxtz");
