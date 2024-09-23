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
const backOptionTemplate_1 = require("../templates/backOptionTemplate");
const prisma = new client_1.PrismaClient();
function account(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        ctx.deleteMessage();
        const user = yield prisma.user.findFirst({
            where: { userId: (_b = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id.toString()) !== null && _b !== void 0 ? _b : "" },
            select: {
                name: true,
                credit: true,
                userId: true,
            }
        });
        ctx.reply(`👤 *Nome*: \`${user === null || user === void 0 ? void 0 : user.name}\`\n💵 *Saldo*: ${user === null || user === void 0 ? void 0 : user.credit}\n🪪 *Id*: ${user === null || user === void 0 ? void 0 : user.userId}`, {
            reply_markup: backOptionTemplate_1.backOption, parse_mode: "Markdown"
        });
    });
}
exports.default = account;
