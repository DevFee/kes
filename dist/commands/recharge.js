"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function recharge(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const rechargeValue = (_b = (_a = ctx.message) === null || _a === void 0 ? void 0 : _a.text) === null || _b === void 0 ? void 0 : _b.split(" ");
        // Verifica se o valor de recarga foi especificado
        if (!rechargeValue || rechargeValue.length <= 1) {
            yield ctx.reply("Por favor, especifique o valor a ser recarregado.\nUso: /recarga [valor_da_recarga]");
            return;
        }
        const amount = parseFloat(rechargeValue[1]);
        // Verifica se o valor é um número válido
        if (isNaN(amount) || amount <= 0) {
            yield ctx.reply("Por favor, insira um valor válido para a recarga.");
            return;
        }
        // Busca o usuário no banco de dados
        const user = yield prisma.user.findFirst({
            where: {
                userId: (_d = (_c = ctx.from) === null || _c === void 0 ? void 0 : _c.id.toString()) !== null && _d !== void 0 ? _d : "",
            }
        });
        if (!user) {
            yield ctx.reply("Usuário não encontrado. Por favor, registre-se antes de tentar recarregar.");
            return;
        }
        // Atualiza o crédito do usuário
        user.credit += amount;
        // Salva as alterações no banco de dados
        yield prisma.user.update({
            where: { userId: user.userId },
            data: { credit: user.credit },
        });
        yield ctx.reply(`Você recarregou R$${amount.toFixed(2)}. Seu novo saldo é R$${user.credit.toFixed(2)}.`);
    });
}
exports.default = recharge;
