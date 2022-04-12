"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: ['http://localhost:3000', 'https://movie.v-thomas.xyz'],
            credentials: true
        }
    });
    app.use((0, cookie_parser_1.default)());
    app.setGlobalPrefix('/thunder');
    app.listen(3200);
}
bootstrap();
