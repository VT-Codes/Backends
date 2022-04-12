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
exports.InviteController = void 0;
const common_1 = require("@nestjs/common");
const MESSAGES_1 = require("../constants/MESSAGES");
const guard_1 = require("../decorators/guard");
const invite_service_1 = require("./invite.service");
let InviteController = class InviteController {
    constructor(invite) {
        this.invite = invite;
    }
    async createInvite(groupId, req) {
        return await this.invite.createLink(groupId, req.user.id).catch(e => {
            throw new common_1.ConflictException({ error: true, errorCode: common_1.HttpStatus.CONFLICT }, MESSAGES_1.Messages['Already a member in group']);
        });
    }
    async getInvite(inviteId, req) {
        try {
            const data = await this.invite.getInviteById(inviteId);
            if (data.inviteOwnerId === req.user.id) {
                throw new common_1.ConflictException({
                    message: MESSAGES_1.Messages['User owns this invite'],
                    statusCode: 409
                });
            }
            return data;
        }
        catch (e) {
            if (e.message === 'USER_OWNS_INVITE')
                throw e;
            throw new common_1.BadRequestException({ message: MESSAGES_1.Messages['Already exists'], statusCode: 400 });
        }
    }
    async getUserInvites(req, groupId) {
        const data = await this.invite.getUserInvitesInGroup(req.user.id, groupId);
        return data;
    }
    async removeInvites(inviteId) {
        const data = await this.invite.removeInvite(inviteId);
        return data;
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Query)('group_id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], InviteController.prototype, "createInvite", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('invite_id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], InviteController.prototype, "getInvite", null);
__decorate([
    (0, common_1.Get)('user_invites'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('group_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], InviteController.prototype, "getUserInvites", null);
__decorate([
    (0, common_1.Delete)('remove_invite'),
    __param(0, (0, common_1.Query)('invite_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InviteController.prototype, "removeInvites", null);
InviteController = __decorate([
    (0, common_1.Controller)('invite'),
    (0, guard_1.UseAuth)('jwt'),
    __metadata("design:paramtypes", [invite_service_1.InviteService])
], InviteController);
exports.InviteController = InviteController;
