
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  avatar: string | null
  email: string
  password: string
  createdAt: Date
}

/**
 * Model Group
 * 
 */
export type Group = {
  id: string
  name: string
  ownerId: string | null
  createdAt: Date
}

/**
 * Model GroupMembers
 * 
 */
export type GroupMembers = {
  id: string
  groupId: string
  userId: string
  role: number
  createdAt: Date
}

/**
 * Model Invite
 * 
 */
export type Invite = {
  id: string
  groupId: string
  inviteOwnerId: string
  createdAt: Date
}

/**
 * Model Movie
 * 
 */
export type Movie = {
  id: string
  title: string
  overview: string
  groupId: string
  backdrop_path: string
  poster_path: string
  release_date: string
  movie_id: number
  adult: boolean
  ytKey: string
  createdAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<GlobalReject>;

  /**
   * `prisma.groupMembers`: Exposes CRUD operations for the **GroupMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMembers.findMany()
    * ```
    */
  get groupMembers(): Prisma.GroupMembersDelegate<GlobalReject>;

  /**
   * `prisma.invite`: Exposes CRUD operations for the **Invite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invites
    * const invites = await prisma.invite.findMany()
    * ```
    */
  get invite(): Prisma.InviteDelegate<GlobalReject>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.9.2
   * Query Engine version: bcc2ff906db47790ee902e7bbc76d7ffb1893009
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Group: 'Group',
    GroupMembers: 'GroupMembers',
    Invite: 'Invite',
    Movie: 'Movie'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    groups: number
    invites: number
    GroupMembers: number
  }

  export type UserCountOutputTypeSelect = {
    groups?: boolean
    invites?: boolean
    GroupMembers?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserCountOutputType ?UserCountOutputType [P]
  : 
     never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type GroupCountOutputType
   */


  export type GroupCountOutputType = {
    members: number
    invites: number
    movie: number
  }

  export type GroupCountOutputTypeSelect = {
    members?: boolean
    invites?: boolean
    movie?: boolean
  }

  export type GroupCountOutputTypeGetPayload<
    S extends boolean | null | undefined | GroupCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? GroupCountOutputType
    : S extends undefined
    ? never
    : S extends GroupCountOutputTypeArgs
    ?'include' extends U
    ? GroupCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof GroupCountOutputType ?GroupCountOutputType [P]
  : 
     never
  } 
    : GroupCountOutputType
  : GroupCountOutputType




  // Custom InputTypes

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     * 
    **/
    select?: GroupCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    avatar: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    avatar: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    avatar: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    avatar?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    avatar?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    avatar?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    avatar: string | null
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    avatar?: boolean
    email?: boolean
    password?: boolean
    groups?: boolean | GroupFindManyArgs
    invites?: boolean | InviteFindManyArgs
    GroupMembers?: boolean | GroupMembersFindManyArgs
    createdAt?: boolean
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    groups?: boolean | GroupFindManyArgs
    invites?: boolean | InviteFindManyArgs
    GroupMembers?: boolean | GroupMembersFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'groups'
        ? Array < GroupGetPayload<S['include'][P]>>  :
        P extends 'invites'
        ? Array < InviteGetPayload<S['include'][P]>>  :
        P extends 'GroupMembers'
        ? Array < GroupMembersGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'groups'
        ? Array < GroupGetPayload<S['select'][P]>>  :
        P extends 'invites'
        ? Array < InviteGetPayload<S['select'][P]>>  :
        P extends 'GroupMembers'
        ? Array < GroupMembersGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    groups<T extends GroupFindManyArgs = {}>(args?: Subset<T, GroupFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Group>>, PrismaPromise<Array<GroupGetPayload<T>>>>;

    invites<T extends InviteFindManyArgs = {}>(args?: Subset<T, InviteFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Invite>>, PrismaPromise<Array<InviteGetPayload<T>>>>;

    GroupMembers<T extends GroupMembersFindManyArgs = {}>(args?: Subset<T, GroupMembersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GroupMembers>>, PrismaPromise<Array<GroupMembersGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Group
   */


  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    ownerId: number
    createdAt: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
    _all?: true
  }

  export type GroupAggregateArgs = {
    /**
     * Filter which Group to aggregate.
     * 
    **/
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     * 
    **/
    orderBy?: Enumerable<GroupOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs = {
    where?: GroupWhereInput
    orderBy?: Enumerable<GroupOrderByWithAggregationInput>
    by: Array<GroupScalarFieldEnum>
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }


  export type GroupGroupByOutputType = {
    id: string
    name: string
    ownerId: string | null
    createdAt: Date
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Promise<
    Array<
      PickArray<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect = {
    id?: boolean
    name?: boolean
    ownerId?: boolean
    members?: boolean | GroupMembersFindManyArgs
    invites?: boolean | InviteFindManyArgs
    movie?: boolean | MovieFindManyArgs
    User?: boolean | UserArgs
    createdAt?: boolean
    _count?: boolean | GroupCountOutputTypeArgs
  }

  export type GroupInclude = {
    members?: boolean | GroupMembersFindManyArgs
    invites?: boolean | InviteFindManyArgs
    movie?: boolean | MovieFindManyArgs
    User?: boolean | UserArgs
    _count?: boolean | GroupCountOutputTypeArgs
  }

  export type GroupGetPayload<
    S extends boolean | null | undefined | GroupArgs,
    U = keyof S
      > = S extends true
        ? Group
    : S extends undefined
    ? never
    : S extends GroupArgs | GroupFindManyArgs
    ?'include' extends U
    ? Group  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'members'
        ? Array < GroupMembersGetPayload<S['include'][P]>>  :
        P extends 'invites'
        ? Array < InviteGetPayload<S['include'][P]>>  :
        P extends 'movie'
        ? Array < MovieGetPayload<S['include'][P]>>  :
        P extends 'User'
        ? UserGetPayload<S['include'][P]> | null :
        P extends '_count'
        ? GroupCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Group ?Group [P]
  : 
          P extends 'members'
        ? Array < GroupMembersGetPayload<S['select'][P]>>  :
        P extends 'invites'
        ? Array < InviteGetPayload<S['select'][P]>>  :
        P extends 'movie'
        ? Array < MovieGetPayload<S['select'][P]>>  :
        P extends 'User'
        ? UserGetPayload<S['select'][P]> | null :
        P extends '_count'
        ? GroupCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Group
  : Group


  type GroupCountArgs = Merge<
    Omit<GroupFindManyArgs, 'select' | 'include'> & {
      select?: GroupCountAggregateInputType | true
    }
  >

  export interface GroupDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GroupFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Group'> extends True ? CheckSelect<T, Prisma__GroupClient<Group>, Prisma__GroupClient<GroupGetPayload<T>>> : CheckSelect<T, Prisma__GroupClient<Group | null >, Prisma__GroupClient<GroupGetPayload<T> | null >>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GroupFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Group'> extends True ? CheckSelect<T, Prisma__GroupClient<Group>, Prisma__GroupClient<GroupGetPayload<T>>> : CheckSelect<T, Prisma__GroupClient<Group | null >, Prisma__GroupClient<GroupGetPayload<T> | null >>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupFindManyArgs>(
      args?: SelectSubset<T, GroupFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Group>>, PrismaPromise<Array<GroupGetPayload<T>>>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
    **/
    create<T extends GroupCreateArgs>(
      args: SelectSubset<T, GroupCreateArgs>
    ): CheckSelect<T, Prisma__GroupClient<Group>, Prisma__GroupClient<GroupGetPayload<T>>>

    /**
     * Create many Groups.
     *     @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     *     @example
     *     // Create many Groups
     *     const group = await prisma.group.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupCreateManyArgs>(
      args?: SelectSubset<T, GroupCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
    **/
    delete<T extends GroupDeleteArgs>(
      args: SelectSubset<T, GroupDeleteArgs>
    ): CheckSelect<T, Prisma__GroupClient<Group>, Prisma__GroupClient<GroupGetPayload<T>>>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupUpdateArgs>(
      args: SelectSubset<T, GroupUpdateArgs>
    ): CheckSelect<T, Prisma__GroupClient<Group>, Prisma__GroupClient<GroupGetPayload<T>>>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupDeleteManyArgs>(
      args?: SelectSubset<T, GroupDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupUpdateManyArgs>(
      args: SelectSubset<T, GroupUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
    **/
    upsert<T extends GroupUpsertArgs>(
      args: SelectSubset<T, GroupUpsertArgs>
    ): CheckSelect<T, Prisma__GroupClient<Group>, Prisma__GroupClient<GroupGetPayload<T>>>

    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GroupClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    members<T extends GroupMembersFindManyArgs = {}>(args?: Subset<T, GroupMembersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<GroupMembers>>, PrismaPromise<Array<GroupMembersGetPayload<T>>>>;

    invites<T extends InviteFindManyArgs = {}>(args?: Subset<T, InviteFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Invite>>, PrismaPromise<Array<InviteGetPayload<T>>>>;

    movie<T extends MovieFindManyArgs = {}>(args?: Subset<T, MovieFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Movie>>, PrismaPromise<Array<MovieGetPayload<T>>>>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Group
     * 
    **/
    select?: GroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupInclude | null
    /**
     * Throw an Error if a Group can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Group to fetch.
     * 
    **/
    where: GroupWhereUniqueInput
  }


  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Group
     * 
    **/
    select?: GroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupInclude | null
    /**
     * Throw an Error if a Group can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Group to fetch.
     * 
    **/
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     * 
    **/
    orderBy?: Enumerable<GroupOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     * 
    **/
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     * 
    **/
    distinct?: Enumerable<GroupScalarFieldEnum>
  }


  /**
   * Group findMany
   */
  export type GroupFindManyArgs = {
    /**
     * Select specific fields to fetch from the Group
     * 
    **/
    select?: GroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupInclude | null
    /**
     * Filter, which Groups to fetch.
     * 
    **/
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     * 
    **/
    orderBy?: Enumerable<GroupOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     * 
    **/
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GroupScalarFieldEnum>
  }


  /**
   * Group create
   */
  export type GroupCreateArgs = {
    /**
     * Select specific fields to fetch from the Group
     * 
    **/
    select?: GroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupInclude | null
    /**
     * The data needed to create a Group.
     * 
    **/
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }


  /**
   * Group createMany
   */
  export type GroupCreateManyArgs = {
    /**
     * The data used to create many Groups.
     * 
    **/
    data: Enumerable<GroupCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Group update
   */
  export type GroupUpdateArgs = {
    /**
     * Select specific fields to fetch from the Group
     * 
    **/
    select?: GroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupInclude | null
    /**
     * The data needed to update a Group.
     * 
    **/
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     * 
    **/
    where: GroupWhereUniqueInput
  }


  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs = {
    /**
     * The data used to update Groups.
     * 
    **/
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     * 
    **/
    where?: GroupWhereInput
  }


  /**
   * Group upsert
   */
  export type GroupUpsertArgs = {
    /**
     * Select specific fields to fetch from the Group
     * 
    **/
    select?: GroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupInclude | null
    /**
     * The filter to search for the Group to update in case it exists.
     * 
    **/
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     * 
    **/
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }


  /**
   * Group delete
   */
  export type GroupDeleteArgs = {
    /**
     * Select specific fields to fetch from the Group
     * 
    **/
    select?: GroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupInclude | null
    /**
     * Filter which Group to delete.
     * 
    **/
    where: GroupWhereUniqueInput
  }


  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs = {
    /**
     * Filter which Groups to delete
     * 
    **/
    where?: GroupWhereInput
  }


  /**
   * Group without action
   */
  export type GroupArgs = {
    /**
     * Select specific fields to fetch from the Group
     * 
    **/
    select?: GroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupInclude | null
  }



  /**
   * Model GroupMembers
   */


  export type AggregateGroupMembers = {
    _count: GroupMembersCountAggregateOutputType | null
    _avg: GroupMembersAvgAggregateOutputType | null
    _sum: GroupMembersSumAggregateOutputType | null
    _min: GroupMembersMinAggregateOutputType | null
    _max: GroupMembersMaxAggregateOutputType | null
  }

  export type GroupMembersAvgAggregateOutputType = {
    role: number | null
  }

  export type GroupMembersSumAggregateOutputType = {
    role: number | null
  }

  export type GroupMembersMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    role: number | null
    createdAt: Date | null
  }

  export type GroupMembersMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    role: number | null
    createdAt: Date | null
  }

  export type GroupMembersCountAggregateOutputType = {
    id: number
    groupId: number
    userId: number
    role: number
    createdAt: number
    _all: number
  }


  export type GroupMembersAvgAggregateInputType = {
    role?: true
  }

  export type GroupMembersSumAggregateInputType = {
    role?: true
  }

  export type GroupMembersMinAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type GroupMembersMaxAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type GroupMembersCountAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type GroupMembersAggregateArgs = {
    /**
     * Filter which GroupMembers to aggregate.
     * 
    **/
    where?: GroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     * 
    **/
    orderBy?: Enumerable<GroupMembersOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupMembersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupMembersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMembersMaxAggregateInputType
  }

  export type GetGroupMembersAggregateType<T extends GroupMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMembers[P]>
      : GetScalarType<T[P], AggregateGroupMembers[P]>
  }




  export type GroupMembersGroupByArgs = {
    where?: GroupMembersWhereInput
    orderBy?: Enumerable<GroupMembersOrderByWithAggregationInput>
    by: Array<GroupMembersScalarFieldEnum>
    having?: GroupMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMembersCountAggregateInputType | true
    _avg?: GroupMembersAvgAggregateInputType
    _sum?: GroupMembersSumAggregateInputType
    _min?: GroupMembersMinAggregateInputType
    _max?: GroupMembersMaxAggregateInputType
  }


  export type GroupMembersGroupByOutputType = {
    id: string
    groupId: string
    userId: string
    role: number
    createdAt: Date
    _count: GroupMembersCountAggregateOutputType | null
    _avg: GroupMembersAvgAggregateOutputType | null
    _sum: GroupMembersSumAggregateOutputType | null
    _min: GroupMembersMinAggregateOutputType | null
    _max: GroupMembersMaxAggregateOutputType | null
  }

  type GetGroupMembersGroupByPayload<T extends GroupMembersGroupByArgs> = Promise<
    Array<
      PickArray<GroupMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMembersGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMembersGroupByOutputType[P]>
        }
      >
    >


  export type GroupMembersSelect = {
    id?: boolean
    Group?: boolean | GroupArgs
    groupId?: boolean
    userId?: boolean
    User?: boolean | UserArgs
    role?: boolean
    createdAt?: boolean
  }

  export type GroupMembersInclude = {
    Group?: boolean | GroupArgs
    User?: boolean | UserArgs
  }

  export type GroupMembersGetPayload<
    S extends boolean | null | undefined | GroupMembersArgs,
    U = keyof S
      > = S extends true
        ? GroupMembers
    : S extends undefined
    ? never
    : S extends GroupMembersArgs | GroupMembersFindManyArgs
    ?'include' extends U
    ? GroupMembers  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Group'
        ? GroupGetPayload<S['include'][P]> :
        P extends 'User'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof GroupMembers ?GroupMembers [P]
  : 
          P extends 'Group'
        ? GroupGetPayload<S['select'][P]> :
        P extends 'User'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : GroupMembers
  : GroupMembers


  type GroupMembersCountArgs = Merge<
    Omit<GroupMembersFindManyArgs, 'select' | 'include'> & {
      select?: GroupMembersCountAggregateInputType | true
    }
  >

  export interface GroupMembersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one GroupMembers that matches the filter.
     * @param {GroupMembersFindUniqueArgs} args - Arguments to find a GroupMembers
     * @example
     * // Get one GroupMembers
     * const groupMembers = await prisma.groupMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupMembersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GroupMembersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GroupMembers'> extends True ? CheckSelect<T, Prisma__GroupMembersClient<GroupMembers>, Prisma__GroupMembersClient<GroupMembersGetPayload<T>>> : CheckSelect<T, Prisma__GroupMembersClient<GroupMembers | null >, Prisma__GroupMembersClient<GroupMembersGetPayload<T> | null >>

    /**
     * Find the first GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersFindFirstArgs} args - Arguments to find a GroupMembers
     * @example
     * // Get one GroupMembers
     * const groupMembers = await prisma.groupMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupMembersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GroupMembersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GroupMembers'> extends True ? CheckSelect<T, Prisma__GroupMembersClient<GroupMembers>, Prisma__GroupMembersClient<GroupMembersGetPayload<T>>> : CheckSelect<T, Prisma__GroupMembersClient<GroupMembers | null >, Prisma__GroupMembersClient<GroupMembersGetPayload<T> | null >>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMembers.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMembersWithIdOnly = await prisma.groupMembers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupMembersFindManyArgs>(
      args?: SelectSubset<T, GroupMembersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<GroupMembers>>, PrismaPromise<Array<GroupMembersGetPayload<T>>>>

    /**
     * Create a GroupMembers.
     * @param {GroupMembersCreateArgs} args - Arguments to create a GroupMembers.
     * @example
     * // Create one GroupMembers
     * const GroupMembers = await prisma.groupMembers.create({
     *   data: {
     *     // ... data to create a GroupMembers
     *   }
     * })
     * 
    **/
    create<T extends GroupMembersCreateArgs>(
      args: SelectSubset<T, GroupMembersCreateArgs>
    ): CheckSelect<T, Prisma__GroupMembersClient<GroupMembers>, Prisma__GroupMembersClient<GroupMembersGetPayload<T>>>

    /**
     * Create many GroupMembers.
     *     @param {GroupMembersCreateManyArgs} args - Arguments to create many GroupMembers.
     *     @example
     *     // Create many GroupMembers
     *     const groupMembers = await prisma.groupMembers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupMembersCreateManyArgs>(
      args?: SelectSubset<T, GroupMembersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a GroupMembers.
     * @param {GroupMembersDeleteArgs} args - Arguments to delete one GroupMembers.
     * @example
     * // Delete one GroupMembers
     * const GroupMembers = await prisma.groupMembers.delete({
     *   where: {
     *     // ... filter to delete one GroupMembers
     *   }
     * })
     * 
    **/
    delete<T extends GroupMembersDeleteArgs>(
      args: SelectSubset<T, GroupMembersDeleteArgs>
    ): CheckSelect<T, Prisma__GroupMembersClient<GroupMembers>, Prisma__GroupMembersClient<GroupMembersGetPayload<T>>>

    /**
     * Update one GroupMembers.
     * @param {GroupMembersUpdateArgs} args - Arguments to update one GroupMembers.
     * @example
     * // Update one GroupMembers
     * const groupMembers = await prisma.groupMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupMembersUpdateArgs>(
      args: SelectSubset<T, GroupMembersUpdateArgs>
    ): CheckSelect<T, Prisma__GroupMembersClient<GroupMembers>, Prisma__GroupMembersClient<GroupMembersGetPayload<T>>>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMembersDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupMembersDeleteManyArgs>(
      args?: SelectSubset<T, GroupMembersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMembers = await prisma.groupMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupMembersUpdateManyArgs>(
      args: SelectSubset<T, GroupMembersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupMembers.
     * @param {GroupMembersUpsertArgs} args - Arguments to update or create a GroupMembers.
     * @example
     * // Update or create a GroupMembers
     * const groupMembers = await prisma.groupMembers.upsert({
     *   create: {
     *     // ... data to create a GroupMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMembers we want to update
     *   }
     * })
    **/
    upsert<T extends GroupMembersUpsertArgs>(
      args: SelectSubset<T, GroupMembersUpsertArgs>
    ): CheckSelect<T, Prisma__GroupMembersClient<GroupMembers>, Prisma__GroupMembersClient<GroupMembersGetPayload<T>>>

    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMembers.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMembersCountArgs>(
      args?: Subset<T, GroupMembersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupMembersAggregateArgs>(args: Subset<T, GroupMembersAggregateArgs>): PrismaPromise<GetGroupMembersAggregateType<T>>

    /**
     * Group by GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMembersGroupByArgs['orderBy'] }
        : { orderBy?: GroupMembersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMembersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GroupMembersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Group<T extends GroupArgs = {}>(args?: Subset<T, GroupArgs>): CheckSelect<T, Prisma__GroupClient<Group | null >, Prisma__GroupClient<GroupGetPayload<T> | null >>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * GroupMembers findUnique
   */
  export type GroupMembersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the GroupMembers
     * 
    **/
    select?: GroupMembersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupMembersInclude | null
    /**
     * Throw an Error if a GroupMembers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GroupMembers to fetch.
     * 
    **/
    where: GroupMembersWhereUniqueInput
  }


  /**
   * GroupMembers findFirst
   */
  export type GroupMembersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the GroupMembers
     * 
    **/
    select?: GroupMembersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupMembersInclude | null
    /**
     * Throw an Error if a GroupMembers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GroupMembers to fetch.
     * 
    **/
    where?: GroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     * 
    **/
    orderBy?: Enumerable<GroupMembersOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     * 
    **/
    cursor?: GroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     * 
    **/
    distinct?: Enumerable<GroupMembersScalarFieldEnum>
  }


  /**
   * GroupMembers findMany
   */
  export type GroupMembersFindManyArgs = {
    /**
     * Select specific fields to fetch from the GroupMembers
     * 
    **/
    select?: GroupMembersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupMembersInclude | null
    /**
     * Filter, which GroupMembers to fetch.
     * 
    **/
    where?: GroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     * 
    **/
    orderBy?: Enumerable<GroupMembersOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     * 
    **/
    cursor?: GroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GroupMembersScalarFieldEnum>
  }


  /**
   * GroupMembers create
   */
  export type GroupMembersCreateArgs = {
    /**
     * Select specific fields to fetch from the GroupMembers
     * 
    **/
    select?: GroupMembersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupMembersInclude | null
    /**
     * The data needed to create a GroupMembers.
     * 
    **/
    data: XOR<GroupMembersCreateInput, GroupMembersUncheckedCreateInput>
  }


  /**
   * GroupMembers createMany
   */
  export type GroupMembersCreateManyArgs = {
    /**
     * The data used to create many GroupMembers.
     * 
    **/
    data: Enumerable<GroupMembersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GroupMembers update
   */
  export type GroupMembersUpdateArgs = {
    /**
     * Select specific fields to fetch from the GroupMembers
     * 
    **/
    select?: GroupMembersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupMembersInclude | null
    /**
     * The data needed to update a GroupMembers.
     * 
    **/
    data: XOR<GroupMembersUpdateInput, GroupMembersUncheckedUpdateInput>
    /**
     * Choose, which GroupMembers to update.
     * 
    **/
    where: GroupMembersWhereUniqueInput
  }


  /**
   * GroupMembers updateMany
   */
  export type GroupMembersUpdateManyArgs = {
    /**
     * The data used to update GroupMembers.
     * 
    **/
    data: XOR<GroupMembersUpdateManyMutationInput, GroupMembersUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     * 
    **/
    where?: GroupMembersWhereInput
  }


  /**
   * GroupMembers upsert
   */
  export type GroupMembersUpsertArgs = {
    /**
     * Select specific fields to fetch from the GroupMembers
     * 
    **/
    select?: GroupMembersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupMembersInclude | null
    /**
     * The filter to search for the GroupMembers to update in case it exists.
     * 
    **/
    where: GroupMembersWhereUniqueInput
    /**
     * In case the GroupMembers found by the `where` argument doesn't exist, create a new GroupMembers with this data.
     * 
    **/
    create: XOR<GroupMembersCreateInput, GroupMembersUncheckedCreateInput>
    /**
     * In case the GroupMembers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GroupMembersUpdateInput, GroupMembersUncheckedUpdateInput>
  }


  /**
   * GroupMembers delete
   */
  export type GroupMembersDeleteArgs = {
    /**
     * Select specific fields to fetch from the GroupMembers
     * 
    **/
    select?: GroupMembersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupMembersInclude | null
    /**
     * Filter which GroupMembers to delete.
     * 
    **/
    where: GroupMembersWhereUniqueInput
  }


  /**
   * GroupMembers deleteMany
   */
  export type GroupMembersDeleteManyArgs = {
    /**
     * Filter which GroupMembers to delete
     * 
    **/
    where?: GroupMembersWhereInput
  }


  /**
   * GroupMembers without action
   */
  export type GroupMembersArgs = {
    /**
     * Select specific fields to fetch from the GroupMembers
     * 
    **/
    select?: GroupMembersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GroupMembersInclude | null
  }



  /**
   * Model Invite
   */


  export type AggregateInvite = {
    _count: InviteCountAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
  }

  export type InviteMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    inviteOwnerId: string | null
    createdAt: Date | null
  }

  export type InviteMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    inviteOwnerId: string | null
    createdAt: Date | null
  }

  export type InviteCountAggregateOutputType = {
    id: number
    groupId: number
    inviteOwnerId: number
    createdAt: number
    _all: number
  }


  export type InviteMinAggregateInputType = {
    id?: true
    groupId?: true
    inviteOwnerId?: true
    createdAt?: true
  }

  export type InviteMaxAggregateInputType = {
    id?: true
    groupId?: true
    inviteOwnerId?: true
    createdAt?: true
  }

  export type InviteCountAggregateInputType = {
    id?: true
    groupId?: true
    inviteOwnerId?: true
    createdAt?: true
    _all?: true
  }

  export type InviteAggregateArgs = {
    /**
     * Filter which Invite to aggregate.
     * 
    **/
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     * 
    **/
    orderBy?: Enumerable<InviteOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invites
    **/
    _count?: true | InviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InviteMaxAggregateInputType
  }

  export type GetInviteAggregateType<T extends InviteAggregateArgs> = {
        [P in keyof T & keyof AggregateInvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvite[P]>
      : GetScalarType<T[P], AggregateInvite[P]>
  }




  export type InviteGroupByArgs = {
    where?: InviteWhereInput
    orderBy?: Enumerable<InviteOrderByWithAggregationInput>
    by: Array<InviteScalarFieldEnum>
    having?: InviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InviteCountAggregateInputType | true
    _min?: InviteMinAggregateInputType
    _max?: InviteMaxAggregateInputType
  }


  export type InviteGroupByOutputType = {
    id: string
    groupId: string
    inviteOwnerId: string
    createdAt: Date
    _count: InviteCountAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
  }

  type GetInviteGroupByPayload<T extends InviteGroupByArgs> = Promise<
    Array<
      PickArray<InviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InviteGroupByOutputType[P]>
            : GetScalarType<T[P], InviteGroupByOutputType[P]>
        }
      >
    >


  export type InviteSelect = {
    id?: boolean
    Group?: boolean | GroupArgs
    groupId?: boolean
    InviteOwner?: boolean | UserArgs
    inviteOwnerId?: boolean
    createdAt?: boolean
  }

  export type InviteInclude = {
    Group?: boolean | GroupArgs
    InviteOwner?: boolean | UserArgs
  }

  export type InviteGetPayload<
    S extends boolean | null | undefined | InviteArgs,
    U = keyof S
      > = S extends true
        ? Invite
    : S extends undefined
    ? never
    : S extends InviteArgs | InviteFindManyArgs
    ?'include' extends U
    ? Invite  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Group'
        ? GroupGetPayload<S['include'][P]> :
        P extends 'InviteOwner'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Invite ?Invite [P]
  : 
          P extends 'Group'
        ? GroupGetPayload<S['select'][P]> :
        P extends 'InviteOwner'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Invite
  : Invite


  type InviteCountArgs = Merge<
    Omit<InviteFindManyArgs, 'select' | 'include'> & {
      select?: InviteCountAggregateInputType | true
    }
  >

  export interface InviteDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Invite that matches the filter.
     * @param {InviteFindUniqueArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InviteFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InviteFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Invite'> extends True ? CheckSelect<T, Prisma__InviteClient<Invite>, Prisma__InviteClient<InviteGetPayload<T>>> : CheckSelect<T, Prisma__InviteClient<Invite | null >, Prisma__InviteClient<InviteGetPayload<T> | null >>

    /**
     * Find the first Invite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindFirstArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InviteFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InviteFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Invite'> extends True ? CheckSelect<T, Prisma__InviteClient<Invite>, Prisma__InviteClient<InviteGetPayload<T>>> : CheckSelect<T, Prisma__InviteClient<Invite | null >, Prisma__InviteClient<InviteGetPayload<T> | null >>

    /**
     * Find zero or more Invites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invites
     * const invites = await prisma.invite.findMany()
     * 
     * // Get first 10 Invites
     * const invites = await prisma.invite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inviteWithIdOnly = await prisma.invite.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InviteFindManyArgs>(
      args?: SelectSubset<T, InviteFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Invite>>, PrismaPromise<Array<InviteGetPayload<T>>>>

    /**
     * Create a Invite.
     * @param {InviteCreateArgs} args - Arguments to create a Invite.
     * @example
     * // Create one Invite
     * const Invite = await prisma.invite.create({
     *   data: {
     *     // ... data to create a Invite
     *   }
     * })
     * 
    **/
    create<T extends InviteCreateArgs>(
      args: SelectSubset<T, InviteCreateArgs>
    ): CheckSelect<T, Prisma__InviteClient<Invite>, Prisma__InviteClient<InviteGetPayload<T>>>

    /**
     * Create many Invites.
     *     @param {InviteCreateManyArgs} args - Arguments to create many Invites.
     *     @example
     *     // Create many Invites
     *     const invite = await prisma.invite.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InviteCreateManyArgs>(
      args?: SelectSubset<T, InviteCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Invite.
     * @param {InviteDeleteArgs} args - Arguments to delete one Invite.
     * @example
     * // Delete one Invite
     * const Invite = await prisma.invite.delete({
     *   where: {
     *     // ... filter to delete one Invite
     *   }
     * })
     * 
    **/
    delete<T extends InviteDeleteArgs>(
      args: SelectSubset<T, InviteDeleteArgs>
    ): CheckSelect<T, Prisma__InviteClient<Invite>, Prisma__InviteClient<InviteGetPayload<T>>>

    /**
     * Update one Invite.
     * @param {InviteUpdateArgs} args - Arguments to update one Invite.
     * @example
     * // Update one Invite
     * const invite = await prisma.invite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InviteUpdateArgs>(
      args: SelectSubset<T, InviteUpdateArgs>
    ): CheckSelect<T, Prisma__InviteClient<Invite>, Prisma__InviteClient<InviteGetPayload<T>>>

    /**
     * Delete zero or more Invites.
     * @param {InviteDeleteManyArgs} args - Arguments to filter Invites to delete.
     * @example
     * // Delete a few Invites
     * const { count } = await prisma.invite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InviteDeleteManyArgs>(
      args?: SelectSubset<T, InviteDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invites
     * const invite = await prisma.invite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InviteUpdateManyArgs>(
      args: SelectSubset<T, InviteUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Invite.
     * @param {InviteUpsertArgs} args - Arguments to update or create a Invite.
     * @example
     * // Update or create a Invite
     * const invite = await prisma.invite.upsert({
     *   create: {
     *     // ... data to create a Invite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invite we want to update
     *   }
     * })
    **/
    upsert<T extends InviteUpsertArgs>(
      args: SelectSubset<T, InviteUpsertArgs>
    ): CheckSelect<T, Prisma__InviteClient<Invite>, Prisma__InviteClient<InviteGetPayload<T>>>

    /**
     * Count the number of Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCountArgs} args - Arguments to filter Invites to count.
     * @example
     * // Count the number of Invites
     * const count = await prisma.invite.count({
     *   where: {
     *     // ... the filter for the Invites we want to count
     *   }
     * })
    **/
    count<T extends InviteCountArgs>(
      args?: Subset<T, InviteCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InviteAggregateArgs>(args: Subset<T, InviteAggregateArgs>): PrismaPromise<GetInviteAggregateType<T>>

    /**
     * Group by Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InviteGroupByArgs['orderBy'] }
        : { orderBy?: InviteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInviteGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InviteClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Group<T extends GroupArgs = {}>(args?: Subset<T, GroupArgs>): CheckSelect<T, Prisma__GroupClient<Group | null >, Prisma__GroupClient<GroupGetPayload<T> | null >>;

    InviteOwner<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Invite findUnique
   */
  export type InviteFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Invite
     * 
    **/
    select?: InviteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InviteInclude | null
    /**
     * Throw an Error if a Invite can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Invite to fetch.
     * 
    **/
    where: InviteWhereUniqueInput
  }


  /**
   * Invite findFirst
   */
  export type InviteFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Invite
     * 
    **/
    select?: InviteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InviteInclude | null
    /**
     * Throw an Error if a Invite can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Invite to fetch.
     * 
    **/
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     * 
    **/
    orderBy?: Enumerable<InviteOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invites.
     * 
    **/
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invites.
     * 
    **/
    distinct?: Enumerable<InviteScalarFieldEnum>
  }


  /**
   * Invite findMany
   */
  export type InviteFindManyArgs = {
    /**
     * Select specific fields to fetch from the Invite
     * 
    **/
    select?: InviteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InviteInclude | null
    /**
     * Filter, which Invites to fetch.
     * 
    **/
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     * 
    **/
    orderBy?: Enumerable<InviteOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invites.
     * 
    **/
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InviteScalarFieldEnum>
  }


  /**
   * Invite create
   */
  export type InviteCreateArgs = {
    /**
     * Select specific fields to fetch from the Invite
     * 
    **/
    select?: InviteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InviteInclude | null
    /**
     * The data needed to create a Invite.
     * 
    **/
    data: XOR<InviteCreateInput, InviteUncheckedCreateInput>
  }


  /**
   * Invite createMany
   */
  export type InviteCreateManyArgs = {
    /**
     * The data used to create many Invites.
     * 
    **/
    data: Enumerable<InviteCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Invite update
   */
  export type InviteUpdateArgs = {
    /**
     * Select specific fields to fetch from the Invite
     * 
    **/
    select?: InviteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InviteInclude | null
    /**
     * The data needed to update a Invite.
     * 
    **/
    data: XOR<InviteUpdateInput, InviteUncheckedUpdateInput>
    /**
     * Choose, which Invite to update.
     * 
    **/
    where: InviteWhereUniqueInput
  }


  /**
   * Invite updateMany
   */
  export type InviteUpdateManyArgs = {
    /**
     * The data used to update Invites.
     * 
    **/
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyInput>
    /**
     * Filter which Invites to update
     * 
    **/
    where?: InviteWhereInput
  }


  /**
   * Invite upsert
   */
  export type InviteUpsertArgs = {
    /**
     * Select specific fields to fetch from the Invite
     * 
    **/
    select?: InviteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InviteInclude | null
    /**
     * The filter to search for the Invite to update in case it exists.
     * 
    **/
    where: InviteWhereUniqueInput
    /**
     * In case the Invite found by the `where` argument doesn't exist, create a new Invite with this data.
     * 
    **/
    create: XOR<InviteCreateInput, InviteUncheckedCreateInput>
    /**
     * In case the Invite was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InviteUpdateInput, InviteUncheckedUpdateInput>
  }


  /**
   * Invite delete
   */
  export type InviteDeleteArgs = {
    /**
     * Select specific fields to fetch from the Invite
     * 
    **/
    select?: InviteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InviteInclude | null
    /**
     * Filter which Invite to delete.
     * 
    **/
    where: InviteWhereUniqueInput
  }


  /**
   * Invite deleteMany
   */
  export type InviteDeleteManyArgs = {
    /**
     * Filter which Invites to delete
     * 
    **/
    where?: InviteWhereInput
  }


  /**
   * Invite without action
   */
  export type InviteArgs = {
    /**
     * Select specific fields to fetch from the Invite
     * 
    **/
    select?: InviteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InviteInclude | null
  }



  /**
   * Model Movie
   */


  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    movie_id: number | null
  }

  export type MovieSumAggregateOutputType = {
    movie_id: number | null
  }

  export type MovieMinAggregateOutputType = {
    id: string | null
    title: string | null
    overview: string | null
    groupId: string | null
    backdrop_path: string | null
    poster_path: string | null
    release_date: string | null
    movie_id: number | null
    adult: boolean | null
    ytKey: string | null
    createdAt: Date | null
  }

  export type MovieMaxAggregateOutputType = {
    id: string | null
    title: string | null
    overview: string | null
    groupId: string | null
    backdrop_path: string | null
    poster_path: string | null
    release_date: string | null
    movie_id: number | null
    adult: boolean | null
    ytKey: string | null
    createdAt: Date | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    title: number
    overview: number
    groupId: number
    backdrop_path: number
    poster_path: number
    release_date: number
    movie_id: number
    adult: number
    ytKey: number
    createdAt: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    movie_id?: true
  }

  export type MovieSumAggregateInputType = {
    movie_id?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    title?: true
    overview?: true
    groupId?: true
    backdrop_path?: true
    poster_path?: true
    release_date?: true
    movie_id?: true
    adult?: true
    ytKey?: true
    createdAt?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    title?: true
    overview?: true
    groupId?: true
    backdrop_path?: true
    poster_path?: true
    release_date?: true
    movie_id?: true
    adult?: true
    ytKey?: true
    createdAt?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    title?: true
    overview?: true
    groupId?: true
    backdrop_path?: true
    poster_path?: true
    release_date?: true
    movie_id?: true
    adult?: true
    ytKey?: true
    createdAt?: true
    _all?: true
  }

  export type MovieAggregateArgs = {
    /**
     * Filter which Movie to aggregate.
     * 
    **/
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs = {
    where?: MovieWhereInput
    orderBy?: Enumerable<MovieOrderByWithAggregationInput>
    by: Array<MovieScalarFieldEnum>
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }


  export type MovieGroupByOutputType = {
    id: string
    title: string
    overview: string
    groupId: string
    backdrop_path: string
    poster_path: string
    release_date: string
    movie_id: number
    adult: boolean
    ytKey: string
    createdAt: Date
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Promise<
    Array<
      PickArray<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect = {
    id?: boolean
    title?: boolean
    overview?: boolean
    groupId?: boolean
    group?: boolean | GroupArgs
    backdrop_path?: boolean
    poster_path?: boolean
    release_date?: boolean
    movie_id?: boolean
    adult?: boolean
    ytKey?: boolean
    createdAt?: boolean
  }

  export type MovieInclude = {
    group?: boolean | GroupArgs
  }

  export type MovieGetPayload<
    S extends boolean | null | undefined | MovieArgs,
    U = keyof S
      > = S extends true
        ? Movie
    : S extends undefined
    ? never
    : S extends MovieArgs | MovieFindManyArgs
    ?'include' extends U
    ? Movie  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'group'
        ? GroupGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Movie ?Movie [P]
  : 
          P extends 'group'
        ? GroupGetPayload<S['select'][P]> : never
  } 
    : Movie
  : Movie


  type MovieCountArgs = Merge<
    Omit<MovieFindManyArgs, 'select' | 'include'> & {
      select?: MovieCountAggregateInputType | true
    }
  >

  export interface MovieDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MovieFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MovieFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Movie'> extends True ? CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>> : CheckSelect<T, Prisma__MovieClient<Movie | null >, Prisma__MovieClient<MovieGetPayload<T> | null >>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MovieFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MovieFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Movie'> extends True ? CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>> : CheckSelect<T, Prisma__MovieClient<Movie | null >, Prisma__MovieClient<MovieGetPayload<T> | null >>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MovieFindManyArgs>(
      args?: SelectSubset<T, MovieFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Movie>>, PrismaPromise<Array<MovieGetPayload<T>>>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
    **/
    create<T extends MovieCreateArgs>(
      args: SelectSubset<T, MovieCreateArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Create many Movies.
     *     @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movie = await prisma.movie.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MovieCreateManyArgs>(
      args?: SelectSubset<T, MovieCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
    **/
    delete<T extends MovieDeleteArgs>(
      args: SelectSubset<T, MovieDeleteArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MovieUpdateArgs>(
      args: SelectSubset<T, MovieUpdateArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MovieDeleteManyArgs>(
      args?: SelectSubset<T, MovieDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MovieUpdateManyArgs>(
      args: SelectSubset<T, MovieUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
    **/
    upsert<T extends MovieUpsertArgs>(
      args: SelectSubset<T, MovieUpsertArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    group<T extends GroupArgs = {}>(args?: Subset<T, GroupArgs>): CheckSelect<T, Prisma__GroupClient<Group | null >, Prisma__GroupClient<GroupGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Throw an Error if a Movie can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Movie to fetch.
     * 
    **/
    where: MovieWhereUniqueInput
  }


  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Throw an Error if a Movie can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Movie to fetch.
     * 
    **/
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     * 
    **/
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     * 
    **/
    distinct?: Enumerable<MovieScalarFieldEnum>
  }


  /**
   * Movie findMany
   */
  export type MovieFindManyArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Filter, which Movies to fetch.
     * 
    **/
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     * 
    **/
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MovieScalarFieldEnum>
  }


  /**
   * Movie create
   */
  export type MovieCreateArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * The data needed to create a Movie.
     * 
    **/
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }


  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs = {
    /**
     * The data used to create many Movies.
     * 
    **/
    data: Enumerable<MovieCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Movie update
   */
  export type MovieUpdateArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * The data needed to update a Movie.
     * 
    **/
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     * 
    **/
    where: MovieWhereUniqueInput
  }


  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs = {
    /**
     * The data used to update Movies.
     * 
    **/
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     * 
    **/
    where?: MovieWhereInput
  }


  /**
   * Movie upsert
   */
  export type MovieUpsertArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * The filter to search for the Movie to update in case it exists.
     * 
    **/
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     * 
    **/
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }


  /**
   * Movie delete
   */
  export type MovieDeleteArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Filter which Movie to delete.
     * 
    **/
    where: MovieWhereUniqueInput
  }


  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs = {
    /**
     * Filter which Movies to delete
     * 
    **/
    where?: MovieWhereInput
  }


  /**
   * Movie without action
   */
  export type MovieArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    avatar: 'avatar',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId',
    createdAt: 'createdAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GroupMembersScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type GroupMembersScalarFieldEnum = (typeof GroupMembersScalarFieldEnum)[keyof typeof GroupMembersScalarFieldEnum]


  export const InviteScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    inviteOwnerId: 'inviteOwnerId',
    createdAt: 'createdAt'
  };

  export type InviteScalarFieldEnum = (typeof InviteScalarFieldEnum)[keyof typeof InviteScalarFieldEnum]


  export const MovieScalarFieldEnum: {
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
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    avatar: 'avatar',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const GroupOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId'
  };

  export type GroupOrderByRelevanceFieldEnum = (typeof GroupOrderByRelevanceFieldEnum)[keyof typeof GroupOrderByRelevanceFieldEnum]


  export const GroupMembersOrderByRelevanceFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId'
  };

  export type GroupMembersOrderByRelevanceFieldEnum = (typeof GroupMembersOrderByRelevanceFieldEnum)[keyof typeof GroupMembersOrderByRelevanceFieldEnum]


  export const InviteOrderByRelevanceFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    inviteOwnerId: 'inviteOwnerId'
  };

  export type InviteOrderByRelevanceFieldEnum = (typeof InviteOrderByRelevanceFieldEnum)[keyof typeof InviteOrderByRelevanceFieldEnum]


  export const MovieOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    overview: 'overview',
    groupId: 'groupId',
    backdrop_path: 'backdrop_path',
    poster_path: 'poster_path',
    release_date: 'release_date',
    ytKey: 'ytKey'
  };

  export type MovieOrderByRelevanceFieldEnum = (typeof MovieOrderByRelevanceFieldEnum)[keyof typeof MovieOrderByRelevanceFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    avatar?: StringNullableFilter | string | null
    email?: StringFilter | string
    password?: StringFilter | string
    groups?: GroupListRelationFilter
    invites?: InviteListRelationFilter
    GroupMembers?: GroupMembersListRelationFilter
    createdAt?: DateTimeFilter | Date | string
  }

  export type UserOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    avatar?: SortOrder
    email?: SortOrder
    password?: SortOrder
    groups?: GroupOrderByRelationAggregateInput
    invites?: InviteOrderByRelationAggregateInput
    GroupMembers?: GroupMembersOrderByRelationAggregateInput
    createdAt?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
    email_avatar?: UserEmailAvatarCompoundUniqueInput
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    avatar?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    avatar?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GroupWhereInput = {
    AND?: Enumerable<GroupWhereInput>
    OR?: Enumerable<GroupWhereInput>
    NOT?: Enumerable<GroupWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    ownerId?: StringNullableFilter | string | null
    members?: GroupMembersListRelationFilter
    invites?: InviteListRelationFilter
    movie?: MovieListRelationFilter
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type GroupOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    members?: GroupMembersOrderByRelationAggregateInput
    invites?: InviteOrderByRelationAggregateInput
    movie?: MovieOrderByRelationAggregateInput
    User?: UserOrderByWithRelationAndSearchRelevanceInput
    createdAt?: SortOrder
    _relevance?: GroupOrderByRelevanceInput
  }

  export type GroupWhereUniqueInput = {
    id?: string
    name_ownerId?: GroupNameOwnerIdCompoundUniqueInput
  }

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GroupScalarWhereWithAggregatesInput>
    OR?: Enumerable<GroupScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GroupScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    ownerId?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GroupMembersWhereInput = {
    AND?: Enumerable<GroupMembersWhereInput>
    OR?: Enumerable<GroupMembersWhereInput>
    NOT?: Enumerable<GroupMembersWhereInput>
    id?: StringFilter | string
    Group?: XOR<GroupRelationFilter, GroupWhereInput>
    groupId?: StringFilter | string
    userId?: StringFilter | string
    User?: XOR<UserRelationFilter, UserWhereInput>
    role?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
  }

  export type GroupMembersOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    Group?: GroupOrderByWithRelationAndSearchRelevanceInput
    groupId?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationAndSearchRelevanceInput
    role?: SortOrder
    createdAt?: SortOrder
    _relevance?: GroupMembersOrderByRelevanceInput
  }

  export type GroupMembersWhereUniqueInput = {
    id?: string
    userId_groupId?: GroupMembersUserIdGroupIdCompoundUniqueInput
  }

  export type GroupMembersOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: GroupMembersCountOrderByAggregateInput
    _avg?: GroupMembersAvgOrderByAggregateInput
    _max?: GroupMembersMaxOrderByAggregateInput
    _min?: GroupMembersMinOrderByAggregateInput
    _sum?: GroupMembersSumOrderByAggregateInput
  }

  export type GroupMembersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GroupMembersScalarWhereWithAggregatesInput>
    OR?: Enumerable<GroupMembersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GroupMembersScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    groupId?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    role?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type InviteWhereInput = {
    AND?: Enumerable<InviteWhereInput>
    OR?: Enumerable<InviteWhereInput>
    NOT?: Enumerable<InviteWhereInput>
    id?: StringFilter | string
    Group?: XOR<GroupRelationFilter, GroupWhereInput>
    groupId?: StringFilter | string
    InviteOwner?: XOR<UserRelationFilter, UserWhereInput>
    inviteOwnerId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type InviteOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    Group?: GroupOrderByWithRelationAndSearchRelevanceInput
    groupId?: SortOrder
    InviteOwner?: UserOrderByWithRelationAndSearchRelevanceInput
    inviteOwnerId?: SortOrder
    createdAt?: SortOrder
    _relevance?: InviteOrderByRelevanceInput
  }

  export type InviteWhereUniqueInput = {
    id?: string
    inviteOwnerId_groupId?: InviteInviteOwnerIdGroupIdCompoundUniqueInput
  }

  export type InviteOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    inviteOwnerId?: SortOrder
    createdAt?: SortOrder
    _count?: InviteCountOrderByAggregateInput
    _max?: InviteMaxOrderByAggregateInput
    _min?: InviteMinOrderByAggregateInput
  }

  export type InviteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InviteScalarWhereWithAggregatesInput>
    OR?: Enumerable<InviteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InviteScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    groupId?: StringWithAggregatesFilter | string
    inviteOwnerId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type MovieWhereInput = {
    AND?: Enumerable<MovieWhereInput>
    OR?: Enumerable<MovieWhereInput>
    NOT?: Enumerable<MovieWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    overview?: StringFilter | string
    groupId?: StringFilter | string
    group?: XOR<GroupRelationFilter, GroupWhereInput>
    backdrop_path?: StringFilter | string
    poster_path?: StringFilter | string
    release_date?: StringFilter | string
    movie_id?: IntFilter | number
    adult?: BoolFilter | boolean
    ytKey?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type MovieOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    groupId?: SortOrder
    group?: GroupOrderByWithRelationAndSearchRelevanceInput
    backdrop_path?: SortOrder
    poster_path?: SortOrder
    release_date?: SortOrder
    movie_id?: SortOrder
    adult?: SortOrder
    ytKey?: SortOrder
    createdAt?: SortOrder
    _relevance?: MovieOrderByRelevanceInput
  }

  export type MovieWhereUniqueInput = {
    id?: string
    movie_id_groupId?: MovieMovie_idGroupIdCompoundUniqueInput
  }

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    groupId?: SortOrder
    backdrop_path?: SortOrder
    poster_path?: SortOrder
    release_date?: SortOrder
    movie_id?: SortOrder
    adult?: SortOrder
    ytKey?: SortOrder
    createdAt?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MovieScalarWhereWithAggregatesInput>
    OR?: Enumerable<MovieScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MovieScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    overview?: StringWithAggregatesFilter | string
    groupId?: StringWithAggregatesFilter | string
    backdrop_path?: StringWithAggregatesFilter | string
    poster_path?: StringWithAggregatesFilter | string
    release_date?: StringWithAggregatesFilter | string
    movie_id?: IntWithAggregatesFilter | number
    adult?: BoolWithAggregatesFilter | boolean
    ytKey?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    id?: string
    avatar?: string | null
    email: string
    password: string
    createdAt?: Date | string
    groups?: GroupCreateNestedManyWithoutUserInput
    invites?: InviteCreateNestedManyWithoutInviteOwnerInput
    GroupMembers?: GroupMembersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    avatar?: string | null
    email: string
    password: string
    createdAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutUserInput
    invites?: InviteUncheckedCreateNestedManyWithoutInviteOwnerInput
    GroupMembers?: GroupMembersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutUserInput
    invites?: InviteUpdateManyWithoutInviteOwnerInput
    GroupMembers?: GroupMembersUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutUserInput
    invites?: InviteUncheckedUpdateManyWithoutInviteOwnerInput
    GroupMembers?: GroupMembersUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    id?: string
    avatar?: string | null
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: GroupMembersCreateNestedManyWithoutGroupInput
    invites?: InviteCreateNestedManyWithoutGroupInput
    movie?: MovieCreateNestedManyWithoutGroupInput
    User?: UserCreateNestedOneWithoutGroupsInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    ownerId?: string | null
    createdAt?: Date | string
    members?: GroupMembersUncheckedCreateNestedManyWithoutGroupInput
    invites?: InviteUncheckedCreateNestedManyWithoutGroupInput
    movie?: MovieUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMembersUpdateManyWithoutGroupInput
    invites?: InviteUpdateManyWithoutGroupInput
    movie?: MovieUpdateManyWithoutGroupInput
    User?: UserUpdateOneWithoutGroupsInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMembersUncheckedUpdateManyWithoutGroupInput
    invites?: InviteUncheckedUpdateManyWithoutGroupInput
    movie?: MovieUncheckedUpdateManyWithoutGroupInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    ownerId?: string | null
    createdAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMembersCreateInput = {
    id?: string
    role?: number
    createdAt?: Date | string
    Group: GroupCreateNestedOneWithoutMembersInput
    User: UserCreateNestedOneWithoutGroupMembersInput
  }

  export type GroupMembersUncheckedCreateInput = {
    id?: string
    groupId: string
    userId: string
    role?: number
    createdAt?: Date | string
  }

  export type GroupMembersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Group?: GroupUpdateOneRequiredWithoutMembersInput
    User?: UserUpdateOneRequiredWithoutGroupMembersInput
  }

  export type GroupMembersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMembersCreateManyInput = {
    id?: string
    groupId: string
    userId: string
    role?: number
    createdAt?: Date | string
  }

  export type GroupMembersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMembersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCreateInput = {
    id?: string
    createdAt?: Date | string
    Group: GroupCreateNestedOneWithoutInvitesInput
    InviteOwner: UserCreateNestedOneWithoutInvitesInput
  }

  export type InviteUncheckedCreateInput = {
    id?: string
    groupId: string
    inviteOwnerId: string
    createdAt?: Date | string
  }

  export type InviteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Group?: GroupUpdateOneRequiredWithoutInvitesInput
    InviteOwner?: UserUpdateOneRequiredWithoutInvitesInput
  }

  export type InviteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    inviteOwnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCreateManyInput = {
    id?: string
    groupId: string
    inviteOwnerId: string
    createdAt?: Date | string
  }

  export type InviteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    inviteOwnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieCreateInput = {
    id?: string
    title: string
    overview: string
    backdrop_path: string
    poster_path: string
    release_date: string
    movie_id: number
    adult: boolean
    ytKey: string
    createdAt?: Date | string
    group: GroupCreateNestedOneWithoutMovieInput
  }

  export type MovieUncheckedCreateInput = {
    id?: string
    title: string
    overview: string
    groupId: string
    backdrop_path: string
    poster_path: string
    release_date: string
    movie_id: number
    adult: boolean
    ytKey: string
    createdAt?: Date | string
  }

  export type MovieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    backdrop_path?: StringFieldUpdateOperationsInput | string
    poster_path?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    movie_id?: IntFieldUpdateOperationsInput | number
    adult?: BoolFieldUpdateOperationsInput | boolean
    ytKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutMovieInput
  }

  export type MovieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    backdrop_path?: StringFieldUpdateOperationsInput | string
    poster_path?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    movie_id?: IntFieldUpdateOperationsInput | number
    adult?: BoolFieldUpdateOperationsInput | boolean
    ytKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieCreateManyInput = {
    id?: string
    title: string
    overview: string
    groupId: string
    backdrop_path: string
    poster_path: string
    release_date: string
    movie_id: number
    adult: boolean
    ytKey: string
    createdAt?: Date | string
  }

  export type MovieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    backdrop_path?: StringFieldUpdateOperationsInput | string
    poster_path?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    movie_id?: IntFieldUpdateOperationsInput | number
    adult?: BoolFieldUpdateOperationsInput | boolean
    ytKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    backdrop_path?: StringFieldUpdateOperationsInput | string
    poster_path?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    movie_id?: IntFieldUpdateOperationsInput | number
    adult?: BoolFieldUpdateOperationsInput | boolean
    ytKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type InviteListRelationFilter = {
    every?: InviteWhereInput
    some?: InviteWhereInput
    none?: InviteWhereInput
  }

  export type GroupMembersListRelationFilter = {
    every?: GroupMembersWhereInput
    some?: GroupMembersWhereInput
    none?: GroupMembersWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: Enumerable<UserOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type UserEmailAvatarCompoundUniqueInput = {
    email: string
    avatar: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type MovieListRelationFilter = {
    every?: MovieWhereInput
    some?: MovieWhereInput
    none?: MovieWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MovieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderByRelevanceInput = {
    fields: Enumerable<GroupOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type GroupNameOwnerIdCompoundUniqueInput = {
    name: string
    ownerId: string
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type GroupMembersOrderByRelevanceInput = {
    fields: Enumerable<GroupMembersOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type GroupMembersUserIdGroupIdCompoundUniqueInput = {
    userId: string
    groupId: string
  }

  export type GroupMembersCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMembersAvgOrderByAggregateInput = {
    role?: SortOrder
  }

  export type GroupMembersMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMembersMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMembersSumOrderByAggregateInput = {
    role?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type InviteOrderByRelevanceInput = {
    fields: Enumerable<InviteOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type InviteInviteOwnerIdGroupIdCompoundUniqueInput = {
    inviteOwnerId: string
    groupId: string
  }

  export type InviteCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    inviteOwnerId?: SortOrder
    createdAt?: SortOrder
  }

  export type InviteMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    inviteOwnerId?: SortOrder
    createdAt?: SortOrder
  }

  export type InviteMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    inviteOwnerId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type MovieOrderByRelevanceInput = {
    fields: Enumerable<MovieOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type MovieMovie_idGroupIdCompoundUniqueInput = {
    movie_id: number
    groupId: string
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    groupId?: SortOrder
    backdrop_path?: SortOrder
    poster_path?: SortOrder
    release_date?: SortOrder
    movie_id?: SortOrder
    adult?: SortOrder
    ytKey?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    movie_id?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    groupId?: SortOrder
    backdrop_path?: SortOrder
    poster_path?: SortOrder
    release_date?: SortOrder
    movie_id?: SortOrder
    adult?: SortOrder
    ytKey?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    groupId?: SortOrder
    backdrop_path?: SortOrder
    poster_path?: SortOrder
    release_date?: SortOrder
    movie_id?: SortOrder
    adult?: SortOrder
    ytKey?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    movie_id?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type GroupCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GroupCreateWithoutUserInput>, Enumerable<GroupUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GroupCreateOrConnectWithoutUserInput>
    createMany?: GroupCreateManyUserInputEnvelope
    connect?: Enumerable<GroupWhereUniqueInput>
  }

  export type InviteCreateNestedManyWithoutInviteOwnerInput = {
    create?: XOR<Enumerable<InviteCreateWithoutInviteOwnerInput>, Enumerable<InviteUncheckedCreateWithoutInviteOwnerInput>>
    connectOrCreate?: Enumerable<InviteCreateOrConnectWithoutInviteOwnerInput>
    createMany?: InviteCreateManyInviteOwnerInputEnvelope
    connect?: Enumerable<InviteWhereUniqueInput>
  }

  export type GroupMembersCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GroupMembersCreateWithoutUserInput>, Enumerable<GroupMembersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GroupMembersCreateOrConnectWithoutUserInput>
    createMany?: GroupMembersCreateManyUserInputEnvelope
    connect?: Enumerable<GroupMembersWhereUniqueInput>
  }

  export type GroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GroupCreateWithoutUserInput>, Enumerable<GroupUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GroupCreateOrConnectWithoutUserInput>
    createMany?: GroupCreateManyUserInputEnvelope
    connect?: Enumerable<GroupWhereUniqueInput>
  }

  export type InviteUncheckedCreateNestedManyWithoutInviteOwnerInput = {
    create?: XOR<Enumerable<InviteCreateWithoutInviteOwnerInput>, Enumerable<InviteUncheckedCreateWithoutInviteOwnerInput>>
    connectOrCreate?: Enumerable<InviteCreateOrConnectWithoutInviteOwnerInput>
    createMany?: InviteCreateManyInviteOwnerInputEnvelope
    connect?: Enumerable<InviteWhereUniqueInput>
  }

  export type GroupMembersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GroupMembersCreateWithoutUserInput>, Enumerable<GroupMembersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GroupMembersCreateOrConnectWithoutUserInput>
    createMany?: GroupMembersCreateManyUserInputEnvelope
    connect?: Enumerable<GroupMembersWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<GroupCreateWithoutUserInput>, Enumerable<GroupUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GroupCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GroupUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GroupCreateManyUserInputEnvelope
    set?: Enumerable<GroupWhereUniqueInput>
    disconnect?: Enumerable<GroupWhereUniqueInput>
    delete?: Enumerable<GroupWhereUniqueInput>
    connect?: Enumerable<GroupWhereUniqueInput>
    update?: Enumerable<GroupUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GroupUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GroupScalarWhereInput>
  }

  export type InviteUpdateManyWithoutInviteOwnerInput = {
    create?: XOR<Enumerable<InviteCreateWithoutInviteOwnerInput>, Enumerable<InviteUncheckedCreateWithoutInviteOwnerInput>>
    connectOrCreate?: Enumerable<InviteCreateOrConnectWithoutInviteOwnerInput>
    upsert?: Enumerable<InviteUpsertWithWhereUniqueWithoutInviteOwnerInput>
    createMany?: InviteCreateManyInviteOwnerInputEnvelope
    set?: Enumerable<InviteWhereUniqueInput>
    disconnect?: Enumerable<InviteWhereUniqueInput>
    delete?: Enumerable<InviteWhereUniqueInput>
    connect?: Enumerable<InviteWhereUniqueInput>
    update?: Enumerable<InviteUpdateWithWhereUniqueWithoutInviteOwnerInput>
    updateMany?: Enumerable<InviteUpdateManyWithWhereWithoutInviteOwnerInput>
    deleteMany?: Enumerable<InviteScalarWhereInput>
  }

  export type GroupMembersUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<GroupMembersCreateWithoutUserInput>, Enumerable<GroupMembersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GroupMembersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GroupMembersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GroupMembersCreateManyUserInputEnvelope
    set?: Enumerable<GroupMembersWhereUniqueInput>
    disconnect?: Enumerable<GroupMembersWhereUniqueInput>
    delete?: Enumerable<GroupMembersWhereUniqueInput>
    connect?: Enumerable<GroupMembersWhereUniqueInput>
    update?: Enumerable<GroupMembersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GroupMembersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GroupMembersScalarWhereInput>
  }

  export type GroupUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<GroupCreateWithoutUserInput>, Enumerable<GroupUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GroupCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GroupUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GroupCreateManyUserInputEnvelope
    set?: Enumerable<GroupWhereUniqueInput>
    disconnect?: Enumerable<GroupWhereUniqueInput>
    delete?: Enumerable<GroupWhereUniqueInput>
    connect?: Enumerable<GroupWhereUniqueInput>
    update?: Enumerable<GroupUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GroupUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GroupScalarWhereInput>
  }

  export type InviteUncheckedUpdateManyWithoutInviteOwnerInput = {
    create?: XOR<Enumerable<InviteCreateWithoutInviteOwnerInput>, Enumerable<InviteUncheckedCreateWithoutInviteOwnerInput>>
    connectOrCreate?: Enumerable<InviteCreateOrConnectWithoutInviteOwnerInput>
    upsert?: Enumerable<InviteUpsertWithWhereUniqueWithoutInviteOwnerInput>
    createMany?: InviteCreateManyInviteOwnerInputEnvelope
    set?: Enumerable<InviteWhereUniqueInput>
    disconnect?: Enumerable<InviteWhereUniqueInput>
    delete?: Enumerable<InviteWhereUniqueInput>
    connect?: Enumerable<InviteWhereUniqueInput>
    update?: Enumerable<InviteUpdateWithWhereUniqueWithoutInviteOwnerInput>
    updateMany?: Enumerable<InviteUpdateManyWithWhereWithoutInviteOwnerInput>
    deleteMany?: Enumerable<InviteScalarWhereInput>
  }

  export type GroupMembersUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<GroupMembersCreateWithoutUserInput>, Enumerable<GroupMembersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GroupMembersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GroupMembersUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GroupMembersCreateManyUserInputEnvelope
    set?: Enumerable<GroupMembersWhereUniqueInput>
    disconnect?: Enumerable<GroupMembersWhereUniqueInput>
    delete?: Enumerable<GroupMembersWhereUniqueInput>
    connect?: Enumerable<GroupMembersWhereUniqueInput>
    update?: Enumerable<GroupMembersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GroupMembersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GroupMembersScalarWhereInput>
  }

  export type GroupMembersCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<GroupMembersCreateWithoutGroupInput>, Enumerable<GroupMembersUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<GroupMembersCreateOrConnectWithoutGroupInput>
    createMany?: GroupMembersCreateManyGroupInputEnvelope
    connect?: Enumerable<GroupMembersWhereUniqueInput>
  }

  export type InviteCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<InviteCreateWithoutGroupInput>, Enumerable<InviteUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<InviteCreateOrConnectWithoutGroupInput>
    createMany?: InviteCreateManyGroupInputEnvelope
    connect?: Enumerable<InviteWhereUniqueInput>
  }

  export type MovieCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<MovieCreateWithoutGroupInput>, Enumerable<MovieUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutGroupInput>
    createMany?: MovieCreateManyGroupInputEnvelope
    connect?: Enumerable<MovieWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutGroupsInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupMembersUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<GroupMembersCreateWithoutGroupInput>, Enumerable<GroupMembersUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<GroupMembersCreateOrConnectWithoutGroupInput>
    createMany?: GroupMembersCreateManyGroupInputEnvelope
    connect?: Enumerable<GroupMembersWhereUniqueInput>
  }

  export type InviteUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<InviteCreateWithoutGroupInput>, Enumerable<InviteUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<InviteCreateOrConnectWithoutGroupInput>
    createMany?: InviteCreateManyGroupInputEnvelope
    connect?: Enumerable<InviteWhereUniqueInput>
  }

  export type MovieUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<MovieCreateWithoutGroupInput>, Enumerable<MovieUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutGroupInput>
    createMany?: MovieCreateManyGroupInputEnvelope
    connect?: Enumerable<MovieWhereUniqueInput>
  }

  export type GroupMembersUpdateManyWithoutGroupInput = {
    create?: XOR<Enumerable<GroupMembersCreateWithoutGroupInput>, Enumerable<GroupMembersUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<GroupMembersCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<GroupMembersUpsertWithWhereUniqueWithoutGroupInput>
    createMany?: GroupMembersCreateManyGroupInputEnvelope
    set?: Enumerable<GroupMembersWhereUniqueInput>
    disconnect?: Enumerable<GroupMembersWhereUniqueInput>
    delete?: Enumerable<GroupMembersWhereUniqueInput>
    connect?: Enumerable<GroupMembersWhereUniqueInput>
    update?: Enumerable<GroupMembersUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<GroupMembersUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<GroupMembersScalarWhereInput>
  }

  export type InviteUpdateManyWithoutGroupInput = {
    create?: XOR<Enumerable<InviteCreateWithoutGroupInput>, Enumerable<InviteUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<InviteCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<InviteUpsertWithWhereUniqueWithoutGroupInput>
    createMany?: InviteCreateManyGroupInputEnvelope
    set?: Enumerable<InviteWhereUniqueInput>
    disconnect?: Enumerable<InviteWhereUniqueInput>
    delete?: Enumerable<InviteWhereUniqueInput>
    connect?: Enumerable<InviteWhereUniqueInput>
    update?: Enumerable<InviteUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<InviteUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<InviteScalarWhereInput>
  }

  export type MovieUpdateManyWithoutGroupInput = {
    create?: XOR<Enumerable<MovieCreateWithoutGroupInput>, Enumerable<MovieUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<MovieUpsertWithWhereUniqueWithoutGroupInput>
    createMany?: MovieCreateManyGroupInputEnvelope
    set?: Enumerable<MovieWhereUniqueInput>
    disconnect?: Enumerable<MovieWhereUniqueInput>
    delete?: Enumerable<MovieWhereUniqueInput>
    connect?: Enumerable<MovieWhereUniqueInput>
    update?: Enumerable<MovieUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<MovieUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<MovieScalarWhereInput>
  }

  export type UserUpdateOneWithoutGroupsInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    upsert?: UserUpsertWithoutGroupsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type GroupMembersUncheckedUpdateManyWithoutGroupInput = {
    create?: XOR<Enumerable<GroupMembersCreateWithoutGroupInput>, Enumerable<GroupMembersUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<GroupMembersCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<GroupMembersUpsertWithWhereUniqueWithoutGroupInput>
    createMany?: GroupMembersCreateManyGroupInputEnvelope
    set?: Enumerable<GroupMembersWhereUniqueInput>
    disconnect?: Enumerable<GroupMembersWhereUniqueInput>
    delete?: Enumerable<GroupMembersWhereUniqueInput>
    connect?: Enumerable<GroupMembersWhereUniqueInput>
    update?: Enumerable<GroupMembersUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<GroupMembersUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<GroupMembersScalarWhereInput>
  }

  export type InviteUncheckedUpdateManyWithoutGroupInput = {
    create?: XOR<Enumerable<InviteCreateWithoutGroupInput>, Enumerable<InviteUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<InviteCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<InviteUpsertWithWhereUniqueWithoutGroupInput>
    createMany?: InviteCreateManyGroupInputEnvelope
    set?: Enumerable<InviteWhereUniqueInput>
    disconnect?: Enumerable<InviteWhereUniqueInput>
    delete?: Enumerable<InviteWhereUniqueInput>
    connect?: Enumerable<InviteWhereUniqueInput>
    update?: Enumerable<InviteUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<InviteUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<InviteScalarWhereInput>
  }

  export type MovieUncheckedUpdateManyWithoutGroupInput = {
    create?: XOR<Enumerable<MovieCreateWithoutGroupInput>, Enumerable<MovieUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<MovieUpsertWithWhereUniqueWithoutGroupInput>
    createMany?: MovieCreateManyGroupInputEnvelope
    set?: Enumerable<MovieWhereUniqueInput>
    disconnect?: Enumerable<MovieWhereUniqueInput>
    delete?: Enumerable<MovieWhereUniqueInput>
    connect?: Enumerable<MovieWhereUniqueInput>
    update?: Enumerable<MovieUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<MovieUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<MovieScalarWhereInput>
  }

  export type GroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGroupMembersInput = {
    create?: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMembersInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GroupUpdateOneRequiredWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    upsert?: GroupUpsertWithoutMembersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutGroupMembersInput = {
    create?: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMembersInput
    upsert?: UserUpsertWithoutGroupMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutGroupMembersInput, UserUncheckedUpdateWithoutGroupMembersInput>
  }

  export type GroupCreateNestedOneWithoutInvitesInput = {
    create?: XOR<GroupCreateWithoutInvitesInput, GroupUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutInvitesInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvitesInput = {
    create?: XOR<UserCreateWithoutInvitesInput, UserUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitesInput
    connect?: UserWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutInvitesInput = {
    create?: XOR<GroupCreateWithoutInvitesInput, GroupUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutInvitesInput
    upsert?: GroupUpsertWithoutInvitesInput
    connect?: GroupWhereUniqueInput
    update?: XOR<GroupUpdateWithoutInvitesInput, GroupUncheckedUpdateWithoutInvitesInput>
  }

  export type UserUpdateOneRequiredWithoutInvitesInput = {
    create?: XOR<UserCreateWithoutInvitesInput, UserUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitesInput
    upsert?: UserUpsertWithoutInvitesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutInvitesInput, UserUncheckedUpdateWithoutInvitesInput>
  }

  export type GroupCreateNestedOneWithoutMovieInput = {
    create?: XOR<GroupCreateWithoutMovieInput, GroupUncheckedCreateWithoutMovieInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMovieInput
    connect?: GroupWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GroupUpdateOneRequiredWithoutMovieInput = {
    create?: XOR<GroupCreateWithoutMovieInput, GroupUncheckedCreateWithoutMovieInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMovieInput
    upsert?: GroupUpsertWithoutMovieInput
    connect?: GroupWhereUniqueInput
    update?: XOR<GroupUpdateWithoutMovieInput, GroupUncheckedUpdateWithoutMovieInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type GroupCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: GroupMembersCreateNestedManyWithoutGroupInput
    invites?: InviteCreateNestedManyWithoutGroupInput
    movie?: MovieCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: GroupMembersUncheckedCreateNestedManyWithoutGroupInput
    invites?: InviteUncheckedCreateNestedManyWithoutGroupInput
    movie?: MovieUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutUserInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput>
  }

  export type GroupCreateManyUserInputEnvelope = {
    data: Enumerable<GroupCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type InviteCreateWithoutInviteOwnerInput = {
    id?: string
    createdAt?: Date | string
    Group: GroupCreateNestedOneWithoutInvitesInput
  }

  export type InviteUncheckedCreateWithoutInviteOwnerInput = {
    id?: string
    groupId: string
    createdAt?: Date | string
  }

  export type InviteCreateOrConnectWithoutInviteOwnerInput = {
    where: InviteWhereUniqueInput
    create: XOR<InviteCreateWithoutInviteOwnerInput, InviteUncheckedCreateWithoutInviteOwnerInput>
  }

  export type InviteCreateManyInviteOwnerInputEnvelope = {
    data: Enumerable<InviteCreateManyInviteOwnerInput>
    skipDuplicates?: boolean
  }

  export type GroupMembersCreateWithoutUserInput = {
    id?: string
    role?: number
    createdAt?: Date | string
    Group: GroupCreateNestedOneWithoutMembersInput
  }

  export type GroupMembersUncheckedCreateWithoutUserInput = {
    id?: string
    groupId: string
    role?: number
    createdAt?: Date | string
  }

  export type GroupMembersCreateOrConnectWithoutUserInput = {
    where: GroupMembersWhereUniqueInput
    create: XOR<GroupMembersCreateWithoutUserInput, GroupMembersUncheckedCreateWithoutUserInput>
  }

  export type GroupMembersCreateManyUserInputEnvelope = {
    data: Enumerable<GroupMembersCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutUserInput, GroupUncheckedUpdateWithoutUserInput>
    create: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutUserInput, GroupUncheckedUpdateWithoutUserInput>
  }

  export type GroupUpdateManyWithWhereWithoutUserInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutGroupsInput>
  }

  export type GroupScalarWhereInput = {
    AND?: Enumerable<GroupScalarWhereInput>
    OR?: Enumerable<GroupScalarWhereInput>
    NOT?: Enumerable<GroupScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    ownerId?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type InviteUpsertWithWhereUniqueWithoutInviteOwnerInput = {
    where: InviteWhereUniqueInput
    update: XOR<InviteUpdateWithoutInviteOwnerInput, InviteUncheckedUpdateWithoutInviteOwnerInput>
    create: XOR<InviteCreateWithoutInviteOwnerInput, InviteUncheckedCreateWithoutInviteOwnerInput>
  }

  export type InviteUpdateWithWhereUniqueWithoutInviteOwnerInput = {
    where: InviteWhereUniqueInput
    data: XOR<InviteUpdateWithoutInviteOwnerInput, InviteUncheckedUpdateWithoutInviteOwnerInput>
  }

  export type InviteUpdateManyWithWhereWithoutInviteOwnerInput = {
    where: InviteScalarWhereInput
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyWithoutInvitesInput>
  }

  export type InviteScalarWhereInput = {
    AND?: Enumerable<InviteScalarWhereInput>
    OR?: Enumerable<InviteScalarWhereInput>
    NOT?: Enumerable<InviteScalarWhereInput>
    id?: StringFilter | string
    groupId?: StringFilter | string
    inviteOwnerId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type GroupMembersUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMembersWhereUniqueInput
    update: XOR<GroupMembersUpdateWithoutUserInput, GroupMembersUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMembersCreateWithoutUserInput, GroupMembersUncheckedCreateWithoutUserInput>
  }

  export type GroupMembersUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMembersWhereUniqueInput
    data: XOR<GroupMembersUpdateWithoutUserInput, GroupMembersUncheckedUpdateWithoutUserInput>
  }

  export type GroupMembersUpdateManyWithWhereWithoutUserInput = {
    where: GroupMembersScalarWhereInput
    data: XOR<GroupMembersUpdateManyMutationInput, GroupMembersUncheckedUpdateManyWithoutGroupMembersInput>
  }

  export type GroupMembersScalarWhereInput = {
    AND?: Enumerable<GroupMembersScalarWhereInput>
    OR?: Enumerable<GroupMembersScalarWhereInput>
    NOT?: Enumerable<GroupMembersScalarWhereInput>
    id?: StringFilter | string
    groupId?: StringFilter | string
    userId?: StringFilter | string
    role?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
  }

  export type GroupMembersCreateWithoutGroupInput = {
    id?: string
    role?: number
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutGroupMembersInput
  }

  export type GroupMembersUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    role?: number
    createdAt?: Date | string
  }

  export type GroupMembersCreateOrConnectWithoutGroupInput = {
    where: GroupMembersWhereUniqueInput
    create: XOR<GroupMembersCreateWithoutGroupInput, GroupMembersUncheckedCreateWithoutGroupInput>
  }

  export type GroupMembersCreateManyGroupInputEnvelope = {
    data: Enumerable<GroupMembersCreateManyGroupInput>
    skipDuplicates?: boolean
  }

  export type InviteCreateWithoutGroupInput = {
    id?: string
    createdAt?: Date | string
    InviteOwner: UserCreateNestedOneWithoutInvitesInput
  }

  export type InviteUncheckedCreateWithoutGroupInput = {
    id?: string
    inviteOwnerId: string
    createdAt?: Date | string
  }

  export type InviteCreateOrConnectWithoutGroupInput = {
    where: InviteWhereUniqueInput
    create: XOR<InviteCreateWithoutGroupInput, InviteUncheckedCreateWithoutGroupInput>
  }

  export type InviteCreateManyGroupInputEnvelope = {
    data: Enumerable<InviteCreateManyGroupInput>
    skipDuplicates?: boolean
  }

  export type MovieCreateWithoutGroupInput = {
    id?: string
    title: string
    overview: string
    backdrop_path: string
    poster_path: string
    release_date: string
    movie_id: number
    adult: boolean
    ytKey: string
    createdAt?: Date | string
  }

  export type MovieUncheckedCreateWithoutGroupInput = {
    id?: string
    title: string
    overview: string
    backdrop_path: string
    poster_path: string
    release_date: string
    movie_id: number
    adult: boolean
    ytKey: string
    createdAt?: Date | string
  }

  export type MovieCreateOrConnectWithoutGroupInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutGroupInput, MovieUncheckedCreateWithoutGroupInput>
  }

  export type MovieCreateManyGroupInputEnvelope = {
    data: Enumerable<MovieCreateManyGroupInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutGroupsInput = {
    id?: string
    avatar?: string | null
    email: string
    password: string
    createdAt?: Date | string
    invites?: InviteCreateNestedManyWithoutInviteOwnerInput
    GroupMembers?: GroupMembersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupsInput = {
    id?: string
    avatar?: string | null
    email: string
    password: string
    createdAt?: Date | string
    invites?: InviteUncheckedCreateNestedManyWithoutInviteOwnerInput
    GroupMembers?: GroupMembersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type GroupMembersUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMembersWhereUniqueInput
    update: XOR<GroupMembersUpdateWithoutGroupInput, GroupMembersUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMembersCreateWithoutGroupInput, GroupMembersUncheckedCreateWithoutGroupInput>
  }

  export type GroupMembersUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMembersWhereUniqueInput
    data: XOR<GroupMembersUpdateWithoutGroupInput, GroupMembersUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMembersUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMembersScalarWhereInput
    data: XOR<GroupMembersUpdateManyMutationInput, GroupMembersUncheckedUpdateManyWithoutMembersInput>
  }

  export type InviteUpsertWithWhereUniqueWithoutGroupInput = {
    where: InviteWhereUniqueInput
    update: XOR<InviteUpdateWithoutGroupInput, InviteUncheckedUpdateWithoutGroupInput>
    create: XOR<InviteCreateWithoutGroupInput, InviteUncheckedCreateWithoutGroupInput>
  }

  export type InviteUpdateWithWhereUniqueWithoutGroupInput = {
    where: InviteWhereUniqueInput
    data: XOR<InviteUpdateWithoutGroupInput, InviteUncheckedUpdateWithoutGroupInput>
  }

  export type InviteUpdateManyWithWhereWithoutGroupInput = {
    where: InviteScalarWhereInput
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyWithoutInvitesInput>
  }

  export type MovieUpsertWithWhereUniqueWithoutGroupInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutGroupInput, MovieUncheckedUpdateWithoutGroupInput>
    create: XOR<MovieCreateWithoutGroupInput, MovieUncheckedCreateWithoutGroupInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutGroupInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutGroupInput, MovieUncheckedUpdateWithoutGroupInput>
  }

  export type MovieUpdateManyWithWhereWithoutGroupInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutMovieInput>
  }

  export type MovieScalarWhereInput = {
    AND?: Enumerable<MovieScalarWhereInput>
    OR?: Enumerable<MovieScalarWhereInput>
    NOT?: Enumerable<MovieScalarWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    overview?: StringFilter | string
    groupId?: StringFilter | string
    backdrop_path?: StringFilter | string
    poster_path?: StringFilter | string
    release_date?: StringFilter | string
    movie_id?: IntFilter | number
    adult?: BoolFilter | boolean
    ytKey?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type UserUpsertWithoutGroupsInput = {
    update: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type UserUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invites?: InviteUpdateManyWithoutInviteOwnerInput
    GroupMembers?: GroupMembersUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invites?: InviteUncheckedUpdateManyWithoutInviteOwnerInput
    GroupMembers?: GroupMembersUncheckedUpdateManyWithoutUserInput
  }

  export type GroupCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    invites?: InviteCreateNestedManyWithoutGroupInput
    movie?: MovieCreateNestedManyWithoutGroupInput
    User?: UserCreateNestedOneWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    ownerId?: string | null
    createdAt?: Date | string
    invites?: InviteUncheckedCreateNestedManyWithoutGroupInput
    movie?: MovieUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutGroupMembersInput = {
    id?: string
    avatar?: string | null
    email: string
    password: string
    createdAt?: Date | string
    groups?: GroupCreateNestedManyWithoutUserInput
    invites?: InviteCreateNestedManyWithoutInviteOwnerInput
  }

  export type UserUncheckedCreateWithoutGroupMembersInput = {
    id?: string
    avatar?: string | null
    email: string
    password: string
    createdAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutUserInput
    invites?: InviteUncheckedCreateNestedManyWithoutInviteOwnerInput
  }

  export type UserCreateOrConnectWithoutGroupMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
  }

  export type GroupUpsertWithoutMembersInput = {
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type GroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invites?: InviteUpdateManyWithoutGroupInput
    movie?: MovieUpdateManyWithoutGroupInput
    User?: UserUpdateOneWithoutGroupsInput
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invites?: InviteUncheckedUpdateManyWithoutGroupInput
    movie?: MovieUncheckedUpdateManyWithoutGroupInput
  }

  export type UserUpsertWithoutGroupMembersInput = {
    update: XOR<UserUpdateWithoutGroupMembersInput, UserUncheckedUpdateWithoutGroupMembersInput>
    create: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
  }

  export type UserUpdateWithoutGroupMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutUserInput
    invites?: InviteUpdateManyWithoutInviteOwnerInput
  }

  export type UserUncheckedUpdateWithoutGroupMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutUserInput
    invites?: InviteUncheckedUpdateManyWithoutInviteOwnerInput
  }

  export type GroupCreateWithoutInvitesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: GroupMembersCreateNestedManyWithoutGroupInput
    movie?: MovieCreateNestedManyWithoutGroupInput
    User?: UserCreateNestedOneWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutInvitesInput = {
    id?: string
    name: string
    ownerId?: string | null
    createdAt?: Date | string
    members?: GroupMembersUncheckedCreateNestedManyWithoutGroupInput
    movie?: MovieUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutInvitesInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutInvitesInput, GroupUncheckedCreateWithoutInvitesInput>
  }

  export type UserCreateWithoutInvitesInput = {
    id?: string
    avatar?: string | null
    email: string
    password: string
    createdAt?: Date | string
    groups?: GroupCreateNestedManyWithoutUserInput
    GroupMembers?: GroupMembersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvitesInput = {
    id?: string
    avatar?: string | null
    email: string
    password: string
    createdAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutUserInput
    GroupMembers?: GroupMembersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvitesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitesInput, UserUncheckedCreateWithoutInvitesInput>
  }

  export type GroupUpsertWithoutInvitesInput = {
    update: XOR<GroupUpdateWithoutInvitesInput, GroupUncheckedUpdateWithoutInvitesInput>
    create: XOR<GroupCreateWithoutInvitesInput, GroupUncheckedCreateWithoutInvitesInput>
  }

  export type GroupUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMembersUpdateManyWithoutGroupInput
    movie?: MovieUpdateManyWithoutGroupInput
    User?: UserUpdateOneWithoutGroupsInput
  }

  export type GroupUncheckedUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMembersUncheckedUpdateManyWithoutGroupInput
    movie?: MovieUncheckedUpdateManyWithoutGroupInput
  }

  export type UserUpsertWithoutInvitesInput = {
    update: XOR<UserUpdateWithoutInvitesInput, UserUncheckedUpdateWithoutInvitesInput>
    create: XOR<UserCreateWithoutInvitesInput, UserUncheckedCreateWithoutInvitesInput>
  }

  export type UserUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutUserInput
    GroupMembers?: GroupMembersUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutUserInput
    GroupMembers?: GroupMembersUncheckedUpdateManyWithoutUserInput
  }

  export type GroupCreateWithoutMovieInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: GroupMembersCreateNestedManyWithoutGroupInput
    invites?: InviteCreateNestedManyWithoutGroupInput
    User?: UserCreateNestedOneWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutMovieInput = {
    id?: string
    name: string
    ownerId?: string | null
    createdAt?: Date | string
    members?: GroupMembersUncheckedCreateNestedManyWithoutGroupInput
    invites?: InviteUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMovieInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMovieInput, GroupUncheckedCreateWithoutMovieInput>
  }

  export type GroupUpsertWithoutMovieInput = {
    update: XOR<GroupUpdateWithoutMovieInput, GroupUncheckedUpdateWithoutMovieInput>
    create: XOR<GroupCreateWithoutMovieInput, GroupUncheckedCreateWithoutMovieInput>
  }

  export type GroupUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMembersUpdateManyWithoutGroupInput
    invites?: InviteUpdateManyWithoutGroupInput
    User?: UserUpdateOneWithoutGroupsInput
  }

  export type GroupUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMembersUncheckedUpdateManyWithoutGroupInput
    invites?: InviteUncheckedUpdateManyWithoutGroupInput
  }

  export type GroupCreateManyUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type InviteCreateManyInviteOwnerInput = {
    id?: string
    groupId: string
    createdAt?: Date | string
  }

  export type GroupMembersCreateManyUserInput = {
    id?: string
    groupId: string
    role?: number
    createdAt?: Date | string
  }

  export type GroupUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMembersUpdateManyWithoutGroupInput
    invites?: InviteUpdateManyWithoutGroupInput
    movie?: MovieUpdateManyWithoutGroupInput
  }

  export type GroupUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMembersUncheckedUpdateManyWithoutGroupInput
    invites?: InviteUncheckedUpdateManyWithoutGroupInput
    movie?: MovieUncheckedUpdateManyWithoutGroupInput
  }

  export type GroupUncheckedUpdateManyWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUpdateWithoutInviteOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Group?: GroupUpdateOneRequiredWithoutInvitesInput
  }

  export type InviteUncheckedUpdateWithoutInviteOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUncheckedUpdateManyWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMembersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Group?: GroupUpdateOneRequiredWithoutMembersInput
  }

  export type GroupMembersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMembersUncheckedUpdateManyWithoutGroupMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMembersCreateManyGroupInput = {
    id?: string
    userId: string
    role?: number
    createdAt?: Date | string
  }

  export type InviteCreateManyGroupInput = {
    id?: string
    inviteOwnerId: string
    createdAt?: Date | string
  }

  export type MovieCreateManyGroupInput = {
    id?: string
    title: string
    overview: string
    backdrop_path: string
    poster_path: string
    release_date: string
    movie_id: number
    adult: boolean
    ytKey: string
    createdAt?: Date | string
  }

  export type GroupMembersUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutGroupMembersInput
  }

  export type GroupMembersUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMembersUncheckedUpdateManyWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    InviteOwner?: UserUpdateOneRequiredWithoutInvitesInput
  }

  export type InviteUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviteOwnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    backdrop_path?: StringFieldUpdateOperationsInput | string
    poster_path?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    movie_id?: IntFieldUpdateOperationsInput | number
    adult?: BoolFieldUpdateOperationsInput | boolean
    ytKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    backdrop_path?: StringFieldUpdateOperationsInput | string
    poster_path?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    movie_id?: IntFieldUpdateOperationsInput | number
    adult?: BoolFieldUpdateOperationsInput | boolean
    ytKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    backdrop_path?: StringFieldUpdateOperationsInput | string
    poster_path?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    movie_id?: IntFieldUpdateOperationsInput | number
    adult?: BoolFieldUpdateOperationsInput | boolean
    ytKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}