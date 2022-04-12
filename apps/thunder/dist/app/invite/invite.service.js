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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteService = void 0;
const common_1 = require("@nestjs/common");
const MESSAGES_1 = require("../constants/MESSAGES");
const prisma_service_1 = require("../prisma/prisma.service");
let InviteService = class InviteService {
    constructor(db) {
        this.db = db;
    }
    async createLink(groupId, userId) {
        try {
            const data = await this.db.invite.create({
                data: {
                    groupId,
                    inviteOwnerId: userId
                }
            });
            data.id = Buffer.from(data.id).toString('base64');
            return data;
        }
        catch (e) {
            throw Error(e);
        }
    }
    async getInviteById(inviteId) {
        const invite = await this.db.invite.findFirst({
            where: {
                id: inviteId
            },
            include: {
                Group: true,
                InviteOwner: {
                    select: {
                        createdAt: true,
                        email: true,
                        id: true,
                        password: false
                    }
                }
            }
        });
        invite.id = inviteId;
        return invite;
    }
    async getInvites() {
        const data = await this.db.invite.findMany({
            include: {
                Group: true
            }
        });
        return data;
    }
    async addMemberToGroup(currentUserId, groupId, role) {
        try {
            const data = await this.db.groupMembers.create({
                data: {
                    userId: currentUserId,
                    groupId,
                    role
                }
            });
            return data;
        }
        catch (error) {
            throw new common_1.ConflictException({ statusCode: 409 }, MESSAGES_1.Messages['Already a member in group']);
        }
    }
    async getUserInvitesInGroup(userId, groupId) {
        const user = await this.db.invite.findMany({
            where: {
                groupId,
                inviteOwnerId: userId
            },
            include: {
                Group: {
                    select: {
                        name: true,
                        ownerId: true,
                        createdAt: true
                    }
                },
                InviteOwner: {
                    select: {
                        id: true,
                        _count: true,
                        createdAt: true,
                        email: true
                    }
                }
            }
        });
        console.log('USER invite', user);
        return user;
    }
    async removeInvite(inviteId) {
        return await this.db.invite.delete({
            where: {
                id: inviteId
            }
        });
    }
};
InviteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InviteService);
exports.InviteService = InviteService;
