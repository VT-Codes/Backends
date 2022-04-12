"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("./auth.service");
const local_strategy_1 = require("./guards/strategies/local.strategy");
const jwt_strategy_1 = require("./guards/strategies/jwt.strategy");
const prisma_module_1 = require("../prisma/prisma.module");
const members_module_1 = require("../members/members.module");
const access_guard_1 = require("./guards/access.guard");
const axios_1 = require("@nestjs/axios");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        imports: [
            jwt_1.JwtModule.register({
                secret: 'jwt_secret',
                signOptions: { expiresIn: '15m' }
            }),
            prisma_module_1.PrismaModule,
            members_module_1.MembersModule,
            axios_1.HttpModule
        ],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, access_guard_1.AccessGuard, jwt_strategy_1.JwtStrategy],
        exports: [jwt_1.JwtModule, access_guard_1.AccessGuard, members_module_1.MembersModule, prisma_module_1.PrismaModule]
    })
], AuthModule);
exports.AuthModule = AuthModule;
