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
exports.GroupsController = void 0;
const common_1 = require("@nestjs/common");
const access_guard_1 = require("../auth/guards/access.guard");
const guard_1 = require("../decorators/guard");
const groups_service_1 = require("../groups/groups.service");
let GroupsController = class GroupsController {
    constructor(groups) {
        this.groups = groups;
    }
    async getAllGroups(req) {
        return await this.groups.getAll(req.user.id);
    }
    async getGroupById(id) {
        return await this.groups.getById(id);
    }
    async createGroup(name, req) {
        var _a;
        return await this.groups.createGroup(name, (_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "getAllGroups", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(access_guard_1.AccessGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "getGroupById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "createGroup", null);
GroupsController = __decorate([
    (0, common_1.Controller)('groups'),
    (0, guard_1.UseAuth)('jwt'),
    __metadata("design:paramtypes", [groups_service_1.GroupsService])
], GroupsController);
exports.GroupsController = GroupsController;
