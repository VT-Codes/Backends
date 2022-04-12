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
exports.MoviesController = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const access_guard_1 = require("../auth/guards/access.guard");
const API_KEYS_1 = require("../constants/API_KEYS");
const MESSAGES_1 = require("../constants/MESSAGES");
const URLS_1 = require("../constants/URLS");
const guard_1 = require("../decorators/guard");
const movies_service_1 = require("./movies.service");
let MoviesController = class MoviesController {
    constructor(movies, http) {
        this.movies = movies;
        this.http = http;
    }
    async getAll(groupId, movieId) {
        if (groupId && !movieId) {
            const movies = await this.movies.getAll(groupId);
            return movies;
        }
        else if (movieId) {
            const movies = await this.movies.getById(movieId);
            return movies;
        }
    }
    async removeMovie(movieId) {
        return await this.movies.removeMovie(movieId);
    }
    async createMovie(groupId, body) {
        const KEY = API_KEYS_1.API_KEY.MOVIE_DB;
        return this.http.get(`${URLS_1.URLS.TMDB}/movie/${body.movie_id}/videos?api_key=${KEY}`).pipe((0, rxjs_1.map)(({ data }) => data.results), (0, rxjs_1.map)(data => data.filter(v => v.site === 'YouTube')), (0, rxjs_1.map)(data => {
            if (data.length)
                return data[0].key;
            throw new Error(MESSAGES_1.Messages['No previews available']);
        }), (0, rxjs_1.map)(async (data) => {
            const movie = Object.assign(Object.assign({}, body), { ytKey: data });
            return await this.movies.create(movie, groupId);
        }), (0, rxjs_1.catchError)(() => {
            return (0, rxjs_1.of)('');
        }));
    }
    async getPopularMovies(searchTerm) {
        const KEY = API_KEYS_1.API_KEY.MOVIE_DB;
        if (!searchTerm) {
            return this.http.get(`${URLS_1.URLS.TMDB}/movie/popular?api_key=${KEY}`).pipe((0, rxjs_1.map)(v => v.data));
        }
        else {
            return this.http.get(`${URLS_1.URLS.TMDB}/search/movie?api_key=${KEY}&query=${searchTerm}`).pipe((0, rxjs_1.map)(v => v.data), (0, rxjs_1.catchError)(() => {
                return (0, rxjs_1.of)('');
            }));
        }
    }
    async getYtVideo(movieId) {
        const KEY = API_KEYS_1.API_KEY.MOVIE_DB;
        return this.http.get(`${URLS_1.URLS.TMDB}/movie/${movieId}/videos?api_key=${KEY}`).pipe((0, rxjs_1.map)(v => v.data));
    }
    async searchExistingMovies(search) {
        const data = await this.movies.getBySearchTerm(search);
        return data;
    }
};
__decorate([
    (0, common_1.Get)(['', 'all']),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(access_guard_1.AccessGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('movie_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Param)('movie_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "removeMovie", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "createMovie", null);
__decorate([
    (0, common_1.Get)('recommendations'),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getPopularMovies", null);
__decorate([
    (0, common_1.Get)('preview'),
    __param(0, (0, common_1.Query)('movie_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getYtVideo", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "searchExistingMovies", null);
MoviesController = __decorate([
    (0, common_1.Controller)('groups/:id/movies'),
    (0, guard_1.UseAuth)('jwt'),
    __metadata("design:paramtypes", [movies_service_1.MoviesService, axios_1.HttpService])
], MoviesController);
exports.MoviesController = MoviesController;
