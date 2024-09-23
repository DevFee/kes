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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const start_1 = __importDefault(require("./commands/start"));
const showItems_1 = __importDefault(require("./callbacks/showItems"));
const account_1 = __importDefault(require("./callbacks/account"));
const help_1 = __importDefault(require("./callbacks/help"));
const products_1 = __importDefault(require("./commands/products"));
const recharge_1 = __importDefault(require("./commands/recharge"));
const app = new grammy_1.Bot("7489556597:AAHFME5T8ZuOe88QLIBsMpRQOpX6M4LEu7U");
app.command("start", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, start_1.default)(ctx);
}));
app.command("produtos", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, products_1.default)(ctx);
}));
app.command("recarga", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    (0, recharge_1.default)(ctx);
}));
app.callbackQuery("showItems", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    (0, showItems_1.default)(ctx);
}));
app.callbackQuery("mainMenu", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, start_1.default)(ctx);
}));
app.callbackQuery("account", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    (0, account_1.default)(ctx);
}));
app.callbackQuery("useManual", (ctx) => {
    (0, help_1.default)(ctx);
});
console.log("[+] Bot initialized...");
app.start();
