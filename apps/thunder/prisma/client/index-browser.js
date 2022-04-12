
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.9.2
 * Query Engine version: bcc2ff906db47790ee902e7bbc76d7ffb1893009
 */
Prisma.prismaVersion = {
  client: "3.9.2",
  engine: "bcc2ff906db47790ee902e7bbc76d7ffb1893009"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  avatar: 'avatar',
  email: 'email',
  password: 'password',
  createdAt: 'createdAt'
});

exports.Prisma.GroupScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  ownerId: 'ownerId',
  createdAt: 'createdAt'
});

exports.Prisma.GroupMembersScalarFieldEnum = makeEnum({
  id: 'id',
  groupId: 'groupId',
  userId: 'userId',
  role: 'role',
  createdAt: 'createdAt'
});

exports.Prisma.InviteScalarFieldEnum = makeEnum({
  id: 'id',
  groupId: 'groupId',
  inviteOwnerId: 'inviteOwnerId',
  createdAt: 'createdAt'
});

exports.Prisma.MovieScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  overview: 'overview',
  groupId: 'groupId',
  backdrop_path: 'backdrop_path',
  poster_path: 'poster_path',
  release_date: 'release_date',
  movie_id: 'movie_id',
  adult: 'adult',
  ytKey: 'ytKey',
  createdAt: 'createdAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.UserOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  avatar: 'avatar',
  email: 'email',
  password: 'password'
});

exports.Prisma.GroupOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  ownerId: 'ownerId'
});

exports.Prisma.GroupMembersOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  groupId: 'groupId',
  userId: 'userId'
});

exports.Prisma.InviteOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  groupId: 'groupId',
  inviteOwnerId: 'inviteOwnerId'
});

exports.Prisma.MovieOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  overview: 'overview',
  groupId: 'groupId',
  backdrop_path: 'backdrop_path',
  poster_path: 'poster_path',
  release_date: 'release_date',
  ytKey: 'ytKey'
});


exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Group: 'Group',
  GroupMembers: 'GroupMembers',
  Invite: 'Invite',
  Movie: 'Movie'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
