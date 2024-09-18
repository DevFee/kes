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
const mainMenuTemplate_1 = require("../templates/mainMenuTemplate");
const prisma = new client_1.PrismaClient();
function start(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g;
        ctx.deleteMessage();
        ctx.reply(`Olá \`${(_a = ctx.from) === null || _a === void 0 ? void 0 : _a.first_name}\`, selecione uma opção!`, { reply_markup: mainMenuTemplate_1.mainMenuKeyboard, parse_mode: "Markdown" });
        const userId = (_c = (_b = ctx.from) === null || _b === void 0 ? void 0 : _b.id.toString()) !== null && _c !== void 0 ? _c : "";
        const user = yield prisma.user.findFirst({
            where: { userId }
        });
        if (!user) {
            console.log("User not found, registering...");
            yield prisma.user.create({
                data: {
                    name: (_e = (_d = ctx.from) === null || _d === void 0 ? void 0 : _d.first_name) !== null && _e !== void 0 ? _e : "",
                    userId,
                    credit: 0,
                    username: (_g = (_f = ctx.from) === null || _f === void 0 ? void 0 : _f.username) !== null && _g !== void 0 ? _g : ""
                }
            });
        }
        else {
            console.log("User already registered");
        }
    });
}
exports.default = start;
