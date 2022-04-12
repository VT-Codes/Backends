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
exports.AuthService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const uuid_1 = require("uuid");
let AuthService = class AuthService {
    constructor(db, jwt, http) {
        this.db = db;
        this.jwt = jwt;
        this.http = http;
        this.generateToken = (user) => this.jwt.sign({ sub: user.id }, { secret: 'jwt_secret' });
    }
    async validateUser(userId) {
        const user = await this.db.user.findUnique({
            where: {
                id: userId
            }
        });
        if (!user)
            throw new common_1.UnauthorizedException();
        else
            return user;
    }
    async createUser(email, password) {
        try {
            const userId = (0, uuid_1.v4)();
            const user = await this.db.user.create({
                data: {
                    id: userId,
                    email,
                    avatar: `https://avatars.dicebear.com/api/human/${Buffer.from(userId, 'utf8').toString('base64')}.svg`,
                    password
                }
            });
            return user;
        }
        catch (e) {
            console.log(e);
            throw new common_1.BadRequestException({
                statusCode: 400,
                message: 'Bad Request',
                error: 'USER_EXISTS'
            });
        }
    }
    async getUserById(userId) {
        const user = await this.db.user.findUnique({
            where: {
                id: userId
            }
        });
        return user;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        axios_1.HttpService])
], AuthService);
exports.AuthService = AuthService;
