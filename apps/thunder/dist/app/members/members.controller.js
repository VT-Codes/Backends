"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersController = void 0;
const common_1 = require("@nestjs/common");
const ROLES_1 = require("../constants/ROLES");
const guard_1 = require("../decorators/guard");
const invite_service_1 = require("../invite/invite.service");
const members_service_1 = require("./members.service");
let MembersController = class MembersController {
    constructor(members, invite) {
        this.members = members;
        this.invite = invite;
    }
    async getAllMembersByGroupId(groupId) {
        const data = await this.members.getAllMembersByGroupId(groupId);
        return data;
    }
    async addMemberToGroup(inviteId, role = 0, req) {
        const invite = await this.invite.getInviteById(inviteId);
        return this.invite.addMemberToGroup(req.user.id, invite.Group.id, role);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('group_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "getAllMembersByGroupId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Query)('invite_id')),
    __param(1, (0, common_1.Query)('role')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "addMemberToGroup", null);
MembersController = __decorate([
    (0, common_1.Controller)('members'),
    (0, guard_1.UseAuth)('jwt'),
    __metadata("design:paramtypes", [members_service_1.MembersService, invite_service_1.InviteService])
], MembersController);
exports.MembersController = MembersController;
