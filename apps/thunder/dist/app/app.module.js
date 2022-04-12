"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma/prisma.service");
const passport_1 = require("@nestjs/passport");
const groups_module_1 = require("./groups/groups.module");
const prisma_module_1 = require("./prisma/prisma.module");
const movies_module_1 = require("./movies/movies.module");
const invite_module_1 = require("./invite/invite.module");
const members_module_1 = require("./members/members.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            auth_module_1.AuthModule,
            groups_module_1.GroupsModule,
            prisma_module_1.PrismaModule,
            movies_module_1.MoviesModule,
            invite_module_1.InviteModule,
            members_module_1.MembersModule
        ],
        providers: [prisma_service_1.PrismaService]
    })
], AppModule);
exports.AppModule = AppModule;
