import { InlineKeyboard } from "grammy";

export const mainMenuKeyboard = new InlineKeyboard()
    .text("🛒 Comprar", "showItems")
    .row()
    .text("🪪 Perfil", "account")
    .text("📜 Uso", "useManual")
    .row()
    .text("💵 Adicionar saldo", "addBalance")
    .row()
    .url("📲 Referencias", "t.me/refsnxtz");