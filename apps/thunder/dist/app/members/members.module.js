"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersModule = void 0;
const common_1 = require("@nestjs/common");
const invite_module_1 = require("../invite/invite.module");
const prisma_module_1 = require("../prisma/prisma.module");
const members_controller_1 = require("./members.controller");
const members_service_1 = require("./members.service");
let MembersModule = class MembersModule {
};
MembersModule = __decorate([
    (0, common_1.Module)({
        controllers: [members_controller_1.MembersController],
        providers: [members_service_1.MembersService],
        imports: [prisma_module_1.PrismaModule, invite_module_1.InviteModule],
        exports: [members_service_1.MembersService]
    })
], MembersModule);
exports.MembersModule = MembersModule;
