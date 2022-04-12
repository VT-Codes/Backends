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
exports.GroupsService = void 0;
const common_1 = require("@nestjs/common");
const ROLES_1 = require("../constants/ROLES");
const invite_service_1 = require("../invite/invite.service");
const prisma_service_1 = require("../prisma/prisma.service");
let GroupsService = class GroupsService {
    constructor(db, invite) {
        this.db = db;
        this.invite = invite;
    }
    async getAll(userId) {
        const user = await this.db.group.findMany({
            where: {
                OR: [
                    {
                        User: {
                            id: {
                                equals: userId
                            }
                        }
                    },
                    {
                        members: {
                            some: {
                                userId: {
                                    equals: userId
                                }
                            }
                        }
                    }
                ]
            }
        });
        console.log('USER', user);
        return user;
    }
    async getById(id) {
        return await this.db.group.findUnique({
            where: {
                id
            },
            include: {
                User: false,
                movie: true,
                invites: true,
                members: true
            }
        });
    }
    async createGroup(name, ownerId) {
        const data = await this.db.group.create({
            data: {
                name,
                ownerId
            }
        });
        await this.invite.addMemberToGroup(ownerId, data.id, ROLES_1.Roles.OWNER);
        return data;
    }
};
GroupsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, invite_service_1.InviteService])
], GroupsService);
exports.GroupsService = GroupsService;
