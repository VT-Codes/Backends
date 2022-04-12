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
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MoviesService = class MoviesService {
    constructor(db) {
        this.db = db;
    }
    async getAll(groupId) {
        const movie = await this.db.movie.findMany({
            where: {
                group: {
                    id: groupId
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return movie;
    }
    async create(movie, groupId) {
        const { overview, backdrop_path, title, poster_path, release_date, movie_id, adult, ytKey } = movie;
        try {
            return await this.db.movie.create({
                data: {
                    title,
                    overview,
                    backdrop_path,
                    poster_path,
                    release_date,
                    movie_id,
                    adult,
                    ytKey,
                    group: {
                        connect: {
                            id: groupId
                        }
                    }
                }
            });
        }
        catch (e) {
            throw new common_1.HttpException({ error: 'MOVIE_EXISTS' }, 409);
        }
    }
    async getById(movieId) {
        const data = await this.db.movie.findUnique({
            where: {
                id: movieId
            }
        });
        return data;
    }
    async removeMovie(movieId) {
        const data = await this.db.movie.delete({
            where: {
                id: movieId
            }
        });
        return data;
    }
    async getBySearchTerm(searchTerm) {
        const data = await this.db.movie.findMany({
            where: {
                title: {
                    contains: searchTerm,
                    mode: 'insensitive'
                }
            },
            orderBy: {
                _relevance: {
                    fields: ['title'],
                    search: searchTerm,
                    sort: 'asc'
                }
            }
        });
        return data;
    }
};
MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MoviesService);
exports.MoviesService = MoviesService;
