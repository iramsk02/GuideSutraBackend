
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Assessment
 * 
 */
export type Assessment = $Result.DefaultSelection<Prisma.$AssessmentPayload>
/**
 * Model Career
 * 
 */
export type Career = $Result.DefaultSelection<Prisma.$CareerPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model College
 * 
 */
export type College = $Result.DefaultSelection<Prisma.$CollegePayload>
/**
 * Model CollegeCourse
 * 
 */
export type CollegeCourse = $Result.DefaultSelection<Prisma.$CollegeCoursePayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model CareerSkill
 * 
 */
export type CareerSkill = $Result.DefaultSelection<Prisma.$CareerSkillPayload>
/**
 * Model CourseSkill
 * 
 */
export type CourseSkill = $Result.DefaultSelection<Prisma.$CourseSkillPayload>
/**
 * Model Recommendation
 * 
 */
export type Recommendation = $Result.DefaultSelection<Prisma.$RecommendationPayload>

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assessment`: Exposes CRUD operations for the **Assessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assessments
    * const assessments = await prisma.assessment.findMany()
    * ```
    */
  get assessment(): Prisma.AssessmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.career`: Exposes CRUD operations for the **Career** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Careers
    * const careers = await prisma.career.findMany()
    * ```
    */
  get career(): Prisma.CareerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.college`: Exposes CRUD operations for the **College** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colleges
    * const colleges = await prisma.college.findMany()
    * ```
    */
  get college(): Prisma.CollegeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collegeCourse`: Exposes CRUD operations for the **CollegeCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollegeCourses
    * const collegeCourses = await prisma.collegeCourse.findMany()
    * ```
    */
  get collegeCourse(): Prisma.CollegeCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.careerSkill`: Exposes CRUD operations for the **CareerSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CareerSkills
    * const careerSkills = await prisma.careerSkill.findMany()
    * ```
    */
  get careerSkill(): Prisma.CareerSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseSkill`: Exposes CRUD operations for the **CourseSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseSkills
    * const courseSkills = await prisma.courseSkill.findMany()
    * ```
    */
  get courseSkill(): Prisma.CourseSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recommendation`: Exposes CRUD operations for the **Recommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommendations
    * const recommendations = await prisma.recommendation.findMany()
    * ```
    */
  get recommendation(): Prisma.RecommendationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Assessment: 'Assessment',
    Career: 'Career',
    Course: 'Course',
    College: 'College',
    CollegeCourse: 'CollegeCourse',
    Skill: 'Skill',
    CareerSkill: 'CareerSkill',
    CourseSkill: 'CourseSkill',
    Recommendation: 'Recommendation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "assessment" | "career" | "course" | "college" | "collegeCourse" | "skill" | "careerSkill" | "courseSkill" | "recommendation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Assessment: {
        payload: Prisma.$AssessmentPayload<ExtArgs>
        fields: Prisma.AssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findFirst: {
            args: Prisma.AssessmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findMany: {
            args: Prisma.AssessmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          create: {
            args: Prisma.AssessmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          createMany: {
            args: Prisma.AssessmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          delete: {
            args: Prisma.AssessmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          update: {
            args: Prisma.AssessmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssessmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          upsert: {
            args: Prisma.AssessmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          aggregate: {
            args: Prisma.AssessmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessment>
          }
          groupBy: {
            args: Prisma.AssessmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentCountAggregateOutputType> | number
          }
        }
      }
      Career: {
        payload: Prisma.$CareerPayload<ExtArgs>
        fields: Prisma.CareerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          findFirst: {
            args: Prisma.CareerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          findMany: {
            args: Prisma.CareerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          create: {
            args: Prisma.CareerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          createMany: {
            args: Prisma.CareerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CareerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          delete: {
            args: Prisma.CareerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          update: {
            args: Prisma.CareerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          deleteMany: {
            args: Prisma.CareerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CareerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CareerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          upsert: {
            args: Prisma.CareerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          aggregate: {
            args: Prisma.CareerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareer>
          }
          groupBy: {
            args: Prisma.CareerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareerCountArgs<ExtArgs>
            result: $Utils.Optional<CareerCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      College: {
        payload: Prisma.$CollegePayload<ExtArgs>
        fields: Prisma.CollegeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollegeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollegeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          findFirst: {
            args: Prisma.CollegeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollegeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          findMany: {
            args: Prisma.CollegeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          create: {
            args: Prisma.CollegeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          createMany: {
            args: Prisma.CollegeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollegeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          delete: {
            args: Prisma.CollegeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          update: {
            args: Prisma.CollegeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          deleteMany: {
            args: Prisma.CollegeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollegeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollegeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          upsert: {
            args: Prisma.CollegeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          aggregate: {
            args: Prisma.CollegeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollege>
          }
          groupBy: {
            args: Prisma.CollegeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollegeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollegeCountArgs<ExtArgs>
            result: $Utils.Optional<CollegeCountAggregateOutputType> | number
          }
        }
      }
      CollegeCourse: {
        payload: Prisma.$CollegeCoursePayload<ExtArgs>
        fields: Prisma.CollegeCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollegeCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollegeCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCoursePayload>
          }
          findFirst: {
            args: Prisma.CollegeCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollegeCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCoursePayload>
          }
          findMany: {
            args: Prisma.CollegeCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCoursePayload>[]
          }
          create: {
            args: Prisma.CollegeCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCoursePayload>
          }
          createMany: {
            args: Prisma.CollegeCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollegeCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCoursePayload>[]
          }
          delete: {
            args: Prisma.CollegeCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCoursePayload>
          }
          update: {
            args: Prisma.CollegeCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCoursePayload>
          }
          deleteMany: {
            args: Prisma.CollegeCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollegeCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollegeCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCoursePayload>[]
          }
          upsert: {
            args: Prisma.CollegeCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeCoursePayload>
          }
          aggregate: {
            args: Prisma.CollegeCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollegeCourse>
          }
          groupBy: {
            args: Prisma.CollegeCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollegeCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollegeCourseCountArgs<ExtArgs>
            result: $Utils.Optional<CollegeCourseCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      CareerSkill: {
        payload: Prisma.$CareerSkillPayload<ExtArgs>
        fields: Prisma.CareerSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareerSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareerSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerSkillPayload>
          }
          findFirst: {
            args: Prisma.CareerSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareerSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerSkillPayload>
          }
          findMany: {
            args: Prisma.CareerSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerSkillPayload>[]
          }
          create: {
            args: Prisma.CareerSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerSkillPayload>
          }
          createMany: {
            args: Prisma.CareerSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CareerSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerSkillPayload>[]
          }
          delete: {
            args: Prisma.CareerSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerSkillPayload>
          }
          update: {
            args: Prisma.CareerSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerSkillPayload>
          }
          deleteMany: {
            args: Prisma.CareerSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CareerSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CareerSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerSkillPayload>[]
          }
          upsert: {
            args: Prisma.CareerSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerSkillPayload>
          }
          aggregate: {
            args: Prisma.CareerSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareerSkill>
          }
          groupBy: {
            args: Prisma.CareerSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareerSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareerSkillCountArgs<ExtArgs>
            result: $Utils.Optional<CareerSkillCountAggregateOutputType> | number
          }
        }
      }
      CourseSkill: {
        payload: Prisma.$CourseSkillPayload<ExtArgs>
        fields: Prisma.CourseSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSkillPayload>
          }
          findFirst: {
            args: Prisma.CourseSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSkillPayload>
          }
          findMany: {
            args: Prisma.CourseSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSkillPayload>[]
          }
          create: {
            args: Prisma.CourseSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSkillPayload>
          }
          createMany: {
            args: Prisma.CourseSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSkillPayload>[]
          }
          delete: {
            args: Prisma.CourseSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSkillPayload>
          }
          update: {
            args: Prisma.CourseSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSkillPayload>
          }
          deleteMany: {
            args: Prisma.CourseSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSkillPayload>[]
          }
          upsert: {
            args: Prisma.CourseSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseSkillPayload>
          }
          aggregate: {
            args: Prisma.CourseSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseSkill>
          }
          groupBy: {
            args: Prisma.CourseSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseSkillCountArgs<ExtArgs>
            result: $Utils.Optional<CourseSkillCountAggregateOutputType> | number
          }
        }
      }
      Recommendation: {
        payload: Prisma.$RecommendationPayload<ExtArgs>
        fields: Prisma.RecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findFirst: {
            args: Prisma.RecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findMany: {
            args: Prisma.RecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          create: {
            args: Prisma.RecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          createMany: {
            args: Prisma.RecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          delete: {
            args: Prisma.RecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          update: {
            args: Prisma.RecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          deleteMany: {
            args: Prisma.RecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecommendationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          upsert: {
            args: Prisma.RecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          aggregate: {
            args: Prisma.RecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendation>
          }
          groupBy: {
            args: Prisma.RecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    assessment?: AssessmentOmit
    career?: CareerOmit
    course?: CourseOmit
    college?: CollegeOmit
    collegeCourse?: CollegeCourseOmit
    skill?: SkillOmit
    careerSkill?: CareerSkillOmit
    courseSkill?: CourseSkillOmit
    recommendation?: RecommendationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

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
    assessments: number
    recommendations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessments?: boolean | UserCountOutputTypeCountAssessmentsArgs
    recommendations?: boolean | UserCountOutputTypeCountRecommendationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
  }


  /**
   * Count Type CareerCountOutputType
   */

  export type CareerCountOutputType = {
    careerSkills: number
    courses: number
    recommendations: number
  }

  export type CareerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careerSkills?: boolean | CareerCountOutputTypeCountCareerSkillsArgs
    courses?: boolean | CareerCountOutputTypeCountCoursesArgs
    recommendations?: boolean | CareerCountOutputTypeCountRecommendationsArgs
  }

  // Custom InputTypes
  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerCountOutputType
     */
    select?: CareerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeCountCareerSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerSkillWhereInput
  }

  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    collegeCourses: number
    courseSkills: number
    recommendations: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collegeCourses?: boolean | CourseCountOutputTypeCountCollegeCoursesArgs
    courseSkills?: boolean | CourseCountOutputTypeCountCourseSkillsArgs
    recommendations?: boolean | CourseCountOutputTypeCountRecommendationsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCollegeCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeCourseWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseSkillWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
  }


  /**
   * Count Type CollegeCountOutputType
   */

  export type CollegeCountOutputType = {
    collegeCourses: number
    recommendations: number
  }

  export type CollegeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collegeCourses?: boolean | CollegeCountOutputTypeCountCollegeCoursesArgs
    recommendations?: boolean | CollegeCountOutputTypeCountRecommendationsArgs
  }

  // Custom InputTypes
  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCountOutputType
     */
    select?: CollegeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountCollegeCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeCourseWhereInput
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    careerSkills: number
    courseSkills: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careerSkills?: boolean | SkillCountOutputTypeCountCareerSkillsArgs
    courseSkills?: boolean | SkillCountOutputTypeCountCourseSkillsArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountCareerSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerSkillWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountCourseSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseSkillWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    dob: Date | null
    educationLevel: string | null
    gender: string | null
    location: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    dob: Date | null
    educationLevel: string | null
    gender: string | null
    location: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    dob: number
    educationLevel: number
    gender: number
    interests: number
    location: number
    skills: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    dob?: true
    educationLevel?: true
    gender?: true
    location?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    dob?: true
    educationLevel?: true
    gender?: true
    location?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    dob?: true
    educationLevel?: true
    gender?: true
    interests?: true
    location?: true
    skills?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    dob: Date | null
    educationLevel: string | null
    gender: string | null
    interests: string[]
    location: string | null
    skills: string[]
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    dob?: boolean
    educationLevel?: boolean
    gender?: boolean
    interests?: boolean
    location?: boolean
    skills?: boolean
    assessments?: boolean | User$assessmentsArgs<ExtArgs>
    recommendations?: boolean | User$recommendationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    dob?: boolean
    educationLevel?: boolean
    gender?: boolean
    interests?: boolean
    location?: boolean
    skills?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    dob?: boolean
    educationLevel?: boolean
    gender?: boolean
    interests?: boolean
    location?: boolean
    skills?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    dob?: boolean
    educationLevel?: boolean
    gender?: boolean
    interests?: boolean
    location?: boolean
    skills?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "dob" | "educationLevel" | "gender" | "interests" | "location" | "skills", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessments?: boolean | User$assessmentsArgs<ExtArgs>
    recommendations?: boolean | User$recommendationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      assessments: Prisma.$AssessmentPayload<ExtArgs>[]
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      dob: Date | null
      educationLevel: string | null
      gender: string | null
      interests: string[]
      location: string | null
      skills: string[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assessments<T extends User$assessmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assessmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recommendations<T extends User$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, User$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly dob: FieldRef<"User", 'DateTime'>
    readonly educationLevel: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly interests: FieldRef<"User", 'String[]'>
    readonly location: FieldRef<"User", 'String'>
    readonly skills: FieldRef<"User", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.assessments
   */
  export type User$assessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    cursor?: AssessmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * User.recommendations
   */
  export type User$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    cursor?: RecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Assessment
   */

  export type AggregateAssessment = {
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  export type AssessmentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    score: number | null
  }

  export type AssessmentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    score: number | null
  }

  export type AssessmentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    testType: string | null
    score: number | null
    stream: string | null
    createdAt: Date | null
  }

  export type AssessmentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    testType: string | null
    score: number | null
    stream: string | null
    createdAt: Date | null
  }

  export type AssessmentCountAggregateOutputType = {
    id: number
    userId: number
    testType: number
    score: number
    stream: number
    strengths: number
    weaknesses: number
    createdAt: number
    _all: number
  }


  export type AssessmentAvgAggregateInputType = {
    id?: true
    userId?: true
    score?: true
  }

  export type AssessmentSumAggregateInputType = {
    id?: true
    userId?: true
    score?: true
  }

  export type AssessmentMinAggregateInputType = {
    id?: true
    userId?: true
    testType?: true
    score?: true
    stream?: true
    createdAt?: true
  }

  export type AssessmentMaxAggregateInputType = {
    id?: true
    userId?: true
    testType?: true
    score?: true
    stream?: true
    createdAt?: true
  }

  export type AssessmentCountAggregateInputType = {
    id?: true
    userId?: true
    testType?: true
    score?: true
    stream?: true
    strengths?: true
    weaknesses?: true
    createdAt?: true
    _all?: true
  }

  export type AssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessment to aggregate.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assessments
    **/
    _count?: true | AssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentMaxAggregateInputType
  }

  export type GetAssessmentAggregateType<T extends AssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessment[P]>
      : GetScalarType<T[P], AggregateAssessment[P]>
  }




  export type AssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithAggregationInput | AssessmentOrderByWithAggregationInput[]
    by: AssessmentScalarFieldEnum[] | AssessmentScalarFieldEnum
    having?: AssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentCountAggregateInputType | true
    _avg?: AssessmentAvgAggregateInputType
    _sum?: AssessmentSumAggregateInputType
    _min?: AssessmentMinAggregateInputType
    _max?: AssessmentMaxAggregateInputType
  }

  export type AssessmentGroupByOutputType = {
    id: number
    userId: number
    testType: string | null
    score: number | null
    stream: string | null
    strengths: string[]
    weaknesses: string[]
    createdAt: Date
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  type GetAssessmentGroupByPayload<T extends AssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    testType?: boolean
    score?: boolean
    stream?: boolean
    strengths?: boolean
    weaknesses?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    testType?: boolean
    score?: boolean
    stream?: boolean
    strengths?: boolean
    weaknesses?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    testType?: boolean
    score?: boolean
    stream?: boolean
    strengths?: boolean
    weaknesses?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectScalar = {
    id?: boolean
    userId?: boolean
    testType?: boolean
    score?: boolean
    stream?: boolean
    strengths?: boolean
    weaknesses?: boolean
    createdAt?: boolean
  }

  export type AssessmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "testType" | "score" | "stream" | "strengths" | "weaknesses" | "createdAt", ExtArgs["result"]["assessment"]>
  export type AssessmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssessmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssessmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assessment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      testType: string | null
      score: number | null
      stream: string | null
      strengths: string[]
      weaknesses: string[]
      createdAt: Date
    }, ExtArgs["result"]["assessment"]>
    composites: {}
  }

  type AssessmentGetPayload<S extends boolean | null | undefined | AssessmentDefaultArgs> = $Result.GetResult<Prisma.$AssessmentPayload, S>

  type AssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssessmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssessmentCountAggregateInputType | true
    }

  export interface AssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assessment'], meta: { name: 'Assessment' } }
    /**
     * Find zero or one Assessment that matches the filter.
     * @param {AssessmentFindUniqueArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentFindUniqueArgs>(args: SelectSubset<T, AssessmentFindUniqueArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assessment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssessmentFindUniqueOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentFindFirstArgs>(args?: SelectSubset<T, AssessmentFindFirstArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assessments
     * const assessments = await prisma.assessment.findMany()
     * 
     * // Get first 10 Assessments
     * const assessments = await prisma.assessment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentWithIdOnly = await prisma.assessment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentFindManyArgs>(args?: SelectSubset<T, AssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assessment.
     * @param {AssessmentCreateArgs} args - Arguments to create a Assessment.
     * @example
     * // Create one Assessment
     * const Assessment = await prisma.assessment.create({
     *   data: {
     *     // ... data to create a Assessment
     *   }
     * })
     * 
     */
    create<T extends AssessmentCreateArgs>(args: SelectSubset<T, AssessmentCreateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assessments.
     * @param {AssessmentCreateManyArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentCreateManyArgs>(args?: SelectSubset<T, AssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assessments and returns the data saved in the database.
     * @param {AssessmentCreateManyAndReturnArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assessments and only return the `id`
     * const assessmentWithIdOnly = await prisma.assessment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assessment.
     * @param {AssessmentDeleteArgs} args - Arguments to delete one Assessment.
     * @example
     * // Delete one Assessment
     * const Assessment = await prisma.assessment.delete({
     *   where: {
     *     // ... filter to delete one Assessment
     *   }
     * })
     * 
     */
    delete<T extends AssessmentDeleteArgs>(args: SelectSubset<T, AssessmentDeleteArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assessment.
     * @param {AssessmentUpdateArgs} args - Arguments to update one Assessment.
     * @example
     * // Update one Assessment
     * const assessment = await prisma.assessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentUpdateArgs>(args: SelectSubset<T, AssessmentUpdateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assessments.
     * @param {AssessmentDeleteManyArgs} args - Arguments to filter Assessments to delete.
     * @example
     * // Delete a few Assessments
     * const { count } = await prisma.assessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentDeleteManyArgs>(args?: SelectSubset<T, AssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentUpdateManyArgs>(args: SelectSubset<T, AssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments and returns the data updated in the database.
     * @param {AssessmentUpdateManyAndReturnArgs} args - Arguments to update many Assessments.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assessments and only return the `id`
     * const assessmentWithIdOnly = await prisma.assessment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssessmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssessmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assessment.
     * @param {AssessmentUpsertArgs} args - Arguments to update or create a Assessment.
     * @example
     * // Update or create a Assessment
     * const assessment = await prisma.assessment.upsert({
     *   create: {
     *     // ... data to create a Assessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assessment we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentUpsertArgs>(args: SelectSubset<T, AssessmentUpsertArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentCountArgs} args - Arguments to filter Assessments to count.
     * @example
     * // Count the number of Assessments
     * const count = await prisma.assessment.count({
     *   where: {
     *     // ... the filter for the Assessments we want to count
     *   }
     * })
    **/
    count<T extends AssessmentCountArgs>(
      args?: Subset<T, AssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssessmentAggregateArgs>(args: Subset<T, AssessmentAggregateArgs>): Prisma.PrismaPromise<GetAssessmentAggregateType<T>>

    /**
     * Group by Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentGroupByArgs} args - Group by arguments.
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
      T extends AssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assessment model
   */
  readonly fields: AssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assessment model
   */
  interface AssessmentFieldRefs {
    readonly id: FieldRef<"Assessment", 'Int'>
    readonly userId: FieldRef<"Assessment", 'Int'>
    readonly testType: FieldRef<"Assessment", 'String'>
    readonly score: FieldRef<"Assessment", 'Float'>
    readonly stream: FieldRef<"Assessment", 'String'>
    readonly strengths: FieldRef<"Assessment", 'String[]'>
    readonly weaknesses: FieldRef<"Assessment", 'String[]'>
    readonly createdAt: FieldRef<"Assessment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assessment findUnique
   */
  export type AssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findUniqueOrThrow
   */
  export type AssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findFirst
   */
  export type AssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findFirstOrThrow
   */
  export type AssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findMany
   */
  export type AssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessments to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment create
   */
  export type AssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assessment.
     */
    data: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
  }

  /**
   * Assessment createMany
   */
  export type AssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assessment createManyAndReturn
   */
  export type AssessmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assessment update
   */
  export type AssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assessment.
     */
    data: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
    /**
     * Choose, which Assessment to update.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment updateMany
   */
  export type AssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
  }

  /**
   * Assessment updateManyAndReturn
   */
  export type AssessmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assessment upsert
   */
  export type AssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assessment to update in case it exists.
     */
    where: AssessmentWhereUniqueInput
    /**
     * In case the Assessment found by the `where` argument doesn't exist, create a new Assessment with this data.
     */
    create: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
    /**
     * In case the Assessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
  }

  /**
   * Assessment delete
   */
  export type AssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter which Assessment to delete.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment deleteMany
   */
  export type AssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessments to delete
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to delete.
     */
    limit?: number
  }

  /**
   * Assessment without action
   */
  export type AssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
  }


  /**
   * Model Career
   */

  export type AggregateCareer = {
    _count: CareerCountAggregateOutputType | null
    _avg: CareerAvgAggregateOutputType | null
    _sum: CareerSumAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  export type CareerAvgAggregateOutputType = {
    id: number | null
  }

  export type CareerSumAggregateOutputType = {
    id: number | null
  }

  export type CareerMinAggregateOutputType = {
    id: number | null
    careerName: string | null
    description: string | null
    requiredStream: string | null
    futureScope: string | null
  }

  export type CareerMaxAggregateOutputType = {
    id: number | null
    careerName: string | null
    description: string | null
    requiredStream: string | null
    futureScope: string | null
  }

  export type CareerCountAggregateOutputType = {
    id: number
    careerName: number
    description: number
    requiredSkills: number
    requiredStream: number
    futureScope: number
    _all: number
  }


  export type CareerAvgAggregateInputType = {
    id?: true
  }

  export type CareerSumAggregateInputType = {
    id?: true
  }

  export type CareerMinAggregateInputType = {
    id?: true
    careerName?: true
    description?: true
    requiredStream?: true
    futureScope?: true
  }

  export type CareerMaxAggregateInputType = {
    id?: true
    careerName?: true
    description?: true
    requiredStream?: true
    futureScope?: true
  }

  export type CareerCountAggregateInputType = {
    id?: true
    careerName?: true
    description?: true
    requiredSkills?: true
    requiredStream?: true
    futureScope?: true
    _all?: true
  }

  export type CareerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Career to aggregate.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Careers
    **/
    _count?: true | CareerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CareerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CareerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareerMaxAggregateInputType
  }

  export type GetCareerAggregateType<T extends CareerAggregateArgs> = {
        [P in keyof T & keyof AggregateCareer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareer[P]>
      : GetScalarType<T[P], AggregateCareer[P]>
  }




  export type CareerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerWhereInput
    orderBy?: CareerOrderByWithAggregationInput | CareerOrderByWithAggregationInput[]
    by: CareerScalarFieldEnum[] | CareerScalarFieldEnum
    having?: CareerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareerCountAggregateInputType | true
    _avg?: CareerAvgAggregateInputType
    _sum?: CareerSumAggregateInputType
    _min?: CareerMinAggregateInputType
    _max?: CareerMaxAggregateInputType
  }

  export type CareerGroupByOutputType = {
    id: number
    careerName: string
    description: string | null
    requiredSkills: string[]
    requiredStream: string | null
    futureScope: string | null
    _count: CareerCountAggregateOutputType | null
    _avg: CareerAvgAggregateOutputType | null
    _sum: CareerSumAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  type GetCareerGroupByPayload<T extends CareerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareerGroupByOutputType[P]>
            : GetScalarType<T[P], CareerGroupByOutputType[P]>
        }
      >
    >


  export type CareerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    careerName?: boolean
    description?: boolean
    requiredSkills?: boolean
    requiredStream?: boolean
    futureScope?: boolean
    careerSkills?: boolean | Career$careerSkillsArgs<ExtArgs>
    courses?: boolean | Career$coursesArgs<ExtArgs>
    recommendations?: boolean | Career$recommendationsArgs<ExtArgs>
    _count?: boolean | CareerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["career"]>

  export type CareerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    careerName?: boolean
    description?: boolean
    requiredSkills?: boolean
    requiredStream?: boolean
    futureScope?: boolean
  }, ExtArgs["result"]["career"]>

  export type CareerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    careerName?: boolean
    description?: boolean
    requiredSkills?: boolean
    requiredStream?: boolean
    futureScope?: boolean
  }, ExtArgs["result"]["career"]>

  export type CareerSelectScalar = {
    id?: boolean
    careerName?: boolean
    description?: boolean
    requiredSkills?: boolean
    requiredStream?: boolean
    futureScope?: boolean
  }

  export type CareerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "careerName" | "description" | "requiredSkills" | "requiredStream" | "futureScope", ExtArgs["result"]["career"]>
  export type CareerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careerSkills?: boolean | Career$careerSkillsArgs<ExtArgs>
    courses?: boolean | Career$coursesArgs<ExtArgs>
    recommendations?: boolean | Career$recommendationsArgs<ExtArgs>
    _count?: boolean | CareerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CareerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CareerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CareerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Career"
    objects: {
      careerSkills: Prisma.$CareerSkillPayload<ExtArgs>[]
      courses: Prisma.$CoursePayload<ExtArgs>[]
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      careerName: string
      description: string | null
      requiredSkills: string[]
      requiredStream: string | null
      futureScope: string | null
    }, ExtArgs["result"]["career"]>
    composites: {}
  }

  type CareerGetPayload<S extends boolean | null | undefined | CareerDefaultArgs> = $Result.GetResult<Prisma.$CareerPayload, S>

  type CareerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CareerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareerCountAggregateInputType | true
    }

  export interface CareerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Career'], meta: { name: 'Career' } }
    /**
     * Find zero or one Career that matches the filter.
     * @param {CareerFindUniqueArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareerFindUniqueArgs>(args: SelectSubset<T, CareerFindUniqueArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Career that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareerFindUniqueOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareerFindUniqueOrThrowArgs>(args: SelectSubset<T, CareerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareerFindFirstArgs>(args?: SelectSubset<T, CareerFindFirstArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareerFindFirstOrThrowArgs>(args?: SelectSubset<T, CareerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Careers
     * const careers = await prisma.career.findMany()
     * 
     * // Get first 10 Careers
     * const careers = await prisma.career.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careerWithIdOnly = await prisma.career.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CareerFindManyArgs>(args?: SelectSubset<T, CareerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Career.
     * @param {CareerCreateArgs} args - Arguments to create a Career.
     * @example
     * // Create one Career
     * const Career = await prisma.career.create({
     *   data: {
     *     // ... data to create a Career
     *   }
     * })
     * 
     */
    create<T extends CareerCreateArgs>(args: SelectSubset<T, CareerCreateArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Careers.
     * @param {CareerCreateManyArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const career = await prisma.career.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CareerCreateManyArgs>(args?: SelectSubset<T, CareerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Careers and returns the data saved in the database.
     * @param {CareerCreateManyAndReturnArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const career = await prisma.career.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Careers and only return the `id`
     * const careerWithIdOnly = await prisma.career.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CareerCreateManyAndReturnArgs>(args?: SelectSubset<T, CareerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Career.
     * @param {CareerDeleteArgs} args - Arguments to delete one Career.
     * @example
     * // Delete one Career
     * const Career = await prisma.career.delete({
     *   where: {
     *     // ... filter to delete one Career
     *   }
     * })
     * 
     */
    delete<T extends CareerDeleteArgs>(args: SelectSubset<T, CareerDeleteArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Career.
     * @param {CareerUpdateArgs} args - Arguments to update one Career.
     * @example
     * // Update one Career
     * const career = await prisma.career.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CareerUpdateArgs>(args: SelectSubset<T, CareerUpdateArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Careers.
     * @param {CareerDeleteManyArgs} args - Arguments to filter Careers to delete.
     * @example
     * // Delete a few Careers
     * const { count } = await prisma.career.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CareerDeleteManyArgs>(args?: SelectSubset<T, CareerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CareerUpdateManyArgs>(args: SelectSubset<T, CareerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers and returns the data updated in the database.
     * @param {CareerUpdateManyAndReturnArgs} args - Arguments to update many Careers.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Careers and only return the `id`
     * const careerWithIdOnly = await prisma.career.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CareerUpdateManyAndReturnArgs>(args: SelectSubset<T, CareerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Career.
     * @param {CareerUpsertArgs} args - Arguments to update or create a Career.
     * @example
     * // Update or create a Career
     * const career = await prisma.career.upsert({
     *   create: {
     *     // ... data to create a Career
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Career we want to update
     *   }
     * })
     */
    upsert<T extends CareerUpsertArgs>(args: SelectSubset<T, CareerUpsertArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerCountArgs} args - Arguments to filter Careers to count.
     * @example
     * // Count the number of Careers
     * const count = await prisma.career.count({
     *   where: {
     *     // ... the filter for the Careers we want to count
     *   }
     * })
    **/
    count<T extends CareerCountArgs>(
      args?: Subset<T, CareerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CareerAggregateArgs>(args: Subset<T, CareerAggregateArgs>): Prisma.PrismaPromise<GetCareerAggregateType<T>>

    /**
     * Group by Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerGroupByArgs} args - Group by arguments.
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
      T extends CareerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareerGroupByArgs['orderBy'] }
        : { orderBy?: CareerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CareerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Career model
   */
  readonly fields: CareerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Career.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    careerSkills<T extends Career$careerSkillsArgs<ExtArgs> = {}>(args?: Subset<T, Career$careerSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courses<T extends Career$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Career$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recommendations<T extends Career$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, Career$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Career model
   */
  interface CareerFieldRefs {
    readonly id: FieldRef<"Career", 'Int'>
    readonly careerName: FieldRef<"Career", 'String'>
    readonly description: FieldRef<"Career", 'String'>
    readonly requiredSkills: FieldRef<"Career", 'String[]'>
    readonly requiredStream: FieldRef<"Career", 'String'>
    readonly futureScope: FieldRef<"Career", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Career findUnique
   */
  export type CareerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career findUniqueOrThrow
   */
  export type CareerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career findFirst
   */
  export type CareerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career findFirstOrThrow
   */
  export type CareerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career findMany
   */
  export type CareerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Careers to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career create
   */
  export type CareerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The data needed to create a Career.
     */
    data: XOR<CareerCreateInput, CareerUncheckedCreateInput>
  }

  /**
   * Career createMany
   */
  export type CareerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Careers.
     */
    data: CareerCreateManyInput | CareerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Career createManyAndReturn
   */
  export type CareerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * The data used to create many Careers.
     */
    data: CareerCreateManyInput | CareerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Career update
   */
  export type CareerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The data needed to update a Career.
     */
    data: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
    /**
     * Choose, which Career to update.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career updateMany
   */
  export type CareerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Careers.
     */
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyInput>
    /**
     * Filter which Careers to update
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to update.
     */
    limit?: number
  }

  /**
   * Career updateManyAndReturn
   */
  export type CareerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * The data used to update Careers.
     */
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyInput>
    /**
     * Filter which Careers to update
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to update.
     */
    limit?: number
  }

  /**
   * Career upsert
   */
  export type CareerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The filter to search for the Career to update in case it exists.
     */
    where: CareerWhereUniqueInput
    /**
     * In case the Career found by the `where` argument doesn't exist, create a new Career with this data.
     */
    create: XOR<CareerCreateInput, CareerUncheckedCreateInput>
    /**
     * In case the Career was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
  }

  /**
   * Career delete
   */
  export type CareerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter which Career to delete.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career deleteMany
   */
  export type CareerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Careers to delete
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to delete.
     */
    limit?: number
  }

  /**
   * Career.careerSkills
   */
  export type Career$careerSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerSkill
     */
    select?: CareerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerSkill
     */
    omit?: CareerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerSkillInclude<ExtArgs> | null
    where?: CareerSkillWhereInput
    orderBy?: CareerSkillOrderByWithRelationInput | CareerSkillOrderByWithRelationInput[]
    cursor?: CareerSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CareerSkillScalarFieldEnum | CareerSkillScalarFieldEnum[]
  }

  /**
   * Career.courses
   */
  export type Career$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Career.recommendations
   */
  export type Career$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    cursor?: RecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Career without action
   */
  export type CareerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
    careerId: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
    careerId: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    courseName: string | null
    stream: string | null
    duration: string | null
    eligibility: string | null
    careerId: number | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    courseName: string | null
    stream: string | null
    duration: string | null
    eligibility: string | null
    careerId: number | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    courseName: number
    stream: number
    duration: number
    eligibility: number
    careerId: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
    careerId?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
    careerId?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    courseName?: true
    stream?: true
    duration?: true
    eligibility?: true
    careerId?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    courseName?: true
    stream?: true
    duration?: true
    eligibility?: true
    careerId?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    courseName?: true
    stream?: true
    duration?: true
    eligibility?: true
    careerId?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    courseName: string
    stream: string | null
    duration: string | null
    eligibility: string | null
    careerId: number | null
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseName?: boolean
    stream?: boolean
    duration?: boolean
    eligibility?: boolean
    careerId?: boolean
    collegeCourses?: boolean | Course$collegeCoursesArgs<ExtArgs>
    career?: boolean | Course$careerArgs<ExtArgs>
    courseSkills?: boolean | Course$courseSkillsArgs<ExtArgs>
    recommendations?: boolean | Course$recommendationsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseName?: boolean
    stream?: boolean
    duration?: boolean
    eligibility?: boolean
    careerId?: boolean
    career?: boolean | Course$careerArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseName?: boolean
    stream?: boolean
    duration?: boolean
    eligibility?: boolean
    careerId?: boolean
    career?: boolean | Course$careerArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    courseName?: boolean
    stream?: boolean
    duration?: boolean
    eligibility?: boolean
    careerId?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseName" | "stream" | "duration" | "eligibility" | "careerId", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collegeCourses?: boolean | Course$collegeCoursesArgs<ExtArgs>
    career?: boolean | Course$careerArgs<ExtArgs>
    courseSkills?: boolean | Course$courseSkillsArgs<ExtArgs>
    recommendations?: boolean | Course$recommendationsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | Course$careerArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | Course$careerArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      collegeCourses: Prisma.$CollegeCoursePayload<ExtArgs>[]
      career: Prisma.$CareerPayload<ExtArgs> | null
      courseSkills: Prisma.$CourseSkillPayload<ExtArgs>[]
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseName: string
      stream: string | null
      duration: string | null
      eligibility: string | null
      careerId: number | null
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collegeCourses<T extends Course$collegeCoursesArgs<ExtArgs> = {}>(args?: Subset<T, Course$collegeCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    career<T extends Course$careerArgs<ExtArgs> = {}>(args?: Subset<T, Course$careerArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    courseSkills<T extends Course$courseSkillsArgs<ExtArgs> = {}>(args?: Subset<T, Course$courseSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recommendations<T extends Course$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, Course$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly courseName: FieldRef<"Course", 'String'>
    readonly stream: FieldRef<"Course", 'String'>
    readonly duration: FieldRef<"Course", 'String'>
    readonly eligibility: FieldRef<"Course", 'String'>
    readonly careerId: FieldRef<"Course", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.collegeCourses
   */
  export type Course$collegeCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCourse
     */
    select?: CollegeCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCourse
     */
    omit?: CollegeCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCourseInclude<ExtArgs> | null
    where?: CollegeCourseWhereInput
    orderBy?: CollegeCourseOrderByWithRelationInput | CollegeCourseOrderByWithRelationInput[]
    cursor?: CollegeCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollegeCourseScalarFieldEnum | CollegeCourseScalarFieldEnum[]
  }

  /**
   * Course.career
   */
  export type Course$careerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    where?: CareerWhereInput
  }

  /**
   * Course.courseSkills
   */
  export type Course$courseSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSkill
     */
    select?: CourseSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSkill
     */
    omit?: CourseSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSkillInclude<ExtArgs> | null
    where?: CourseSkillWhereInput
    orderBy?: CourseSkillOrderByWithRelationInput | CourseSkillOrderByWithRelationInput[]
    cursor?: CourseSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseSkillScalarFieldEnum | CourseSkillScalarFieldEnum[]
  }

  /**
   * Course.recommendations
   */
  export type Course$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    cursor?: RecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model College
   */

  export type AggregateCollege = {
    _count: CollegeCountAggregateOutputType | null
    _avg: CollegeAvgAggregateOutputType | null
    _sum: CollegeSumAggregateOutputType | null
    _min: CollegeMinAggregateOutputType | null
    _max: CollegeMaxAggregateOutputType | null
  }

  export type CollegeAvgAggregateOutputType = {
    id: number | null
  }

  export type CollegeSumAggregateOutputType = {
    id: number | null
  }

  export type CollegeMinAggregateOutputType = {
    id: number | null
    collegeName: string | null
    location: string | null
    affiliation: string | null
  }

  export type CollegeMaxAggregateOutputType = {
    id: number | null
    collegeName: string | null
    location: string | null
    affiliation: string | null
  }

  export type CollegeCountAggregateOutputType = {
    id: number
    collegeName: number
    location: number
    affiliation: number
    _all: number
  }


  export type CollegeAvgAggregateInputType = {
    id?: true
  }

  export type CollegeSumAggregateInputType = {
    id?: true
  }

  export type CollegeMinAggregateInputType = {
    id?: true
    collegeName?: true
    location?: true
    affiliation?: true
  }

  export type CollegeMaxAggregateInputType = {
    id?: true
    collegeName?: true
    location?: true
    affiliation?: true
  }

  export type CollegeCountAggregateInputType = {
    id?: true
    collegeName?: true
    location?: true
    affiliation?: true
    _all?: true
  }

  export type CollegeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which College to aggregate.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colleges
    **/
    _count?: true | CollegeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollegeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollegeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollegeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollegeMaxAggregateInputType
  }

  export type GetCollegeAggregateType<T extends CollegeAggregateArgs> = {
        [P in keyof T & keyof AggregateCollege]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollege[P]>
      : GetScalarType<T[P], AggregateCollege[P]>
  }




  export type CollegeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeWhereInput
    orderBy?: CollegeOrderByWithAggregationInput | CollegeOrderByWithAggregationInput[]
    by: CollegeScalarFieldEnum[] | CollegeScalarFieldEnum
    having?: CollegeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollegeCountAggregateInputType | true
    _avg?: CollegeAvgAggregateInputType
    _sum?: CollegeSumAggregateInputType
    _min?: CollegeMinAggregateInputType
    _max?: CollegeMaxAggregateInputType
  }

  export type CollegeGroupByOutputType = {
    id: number
    collegeName: string
    location: string | null
    affiliation: string | null
    _count: CollegeCountAggregateOutputType | null
    _avg: CollegeAvgAggregateOutputType | null
    _sum: CollegeSumAggregateOutputType | null
    _min: CollegeMinAggregateOutputType | null
    _max: CollegeMaxAggregateOutputType | null
  }

  type GetCollegeGroupByPayload<T extends CollegeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollegeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollegeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollegeGroupByOutputType[P]>
            : GetScalarType<T[P], CollegeGroupByOutputType[P]>
        }
      >
    >


  export type CollegeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collegeName?: boolean
    location?: boolean
    affiliation?: boolean
    collegeCourses?: boolean | College$collegeCoursesArgs<ExtArgs>
    recommendations?: boolean | College$recommendationsArgs<ExtArgs>
    _count?: boolean | CollegeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collegeName?: boolean
    location?: boolean
    affiliation?: boolean
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collegeName?: boolean
    location?: boolean
    affiliation?: boolean
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectScalar = {
    id?: boolean
    collegeName?: boolean
    location?: boolean
    affiliation?: boolean
  }

  export type CollegeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "collegeName" | "location" | "affiliation", ExtArgs["result"]["college"]>
  export type CollegeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collegeCourses?: boolean | College$collegeCoursesArgs<ExtArgs>
    recommendations?: boolean | College$recommendationsArgs<ExtArgs>
    _count?: boolean | CollegeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollegeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CollegeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CollegePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "College"
    objects: {
      collegeCourses: Prisma.$CollegeCoursePayload<ExtArgs>[]
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      collegeName: string
      location: string | null
      affiliation: string | null
    }, ExtArgs["result"]["college"]>
    composites: {}
  }

  type CollegeGetPayload<S extends boolean | null | undefined | CollegeDefaultArgs> = $Result.GetResult<Prisma.$CollegePayload, S>

  type CollegeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollegeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollegeCountAggregateInputType | true
    }

  export interface CollegeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['College'], meta: { name: 'College' } }
    /**
     * Find zero or one College that matches the filter.
     * @param {CollegeFindUniqueArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollegeFindUniqueArgs>(args: SelectSubset<T, CollegeFindUniqueArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one College that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollegeFindUniqueOrThrowArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollegeFindUniqueOrThrowArgs>(args: SelectSubset<T, CollegeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first College that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindFirstArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollegeFindFirstArgs>(args?: SelectSubset<T, CollegeFindFirstArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first College that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindFirstOrThrowArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollegeFindFirstOrThrowArgs>(args?: SelectSubset<T, CollegeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colleges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colleges
     * const colleges = await prisma.college.findMany()
     * 
     * // Get first 10 Colleges
     * const colleges = await prisma.college.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collegeWithIdOnly = await prisma.college.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollegeFindManyArgs>(args?: SelectSubset<T, CollegeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a College.
     * @param {CollegeCreateArgs} args - Arguments to create a College.
     * @example
     * // Create one College
     * const College = await prisma.college.create({
     *   data: {
     *     // ... data to create a College
     *   }
     * })
     * 
     */
    create<T extends CollegeCreateArgs>(args: SelectSubset<T, CollegeCreateArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colleges.
     * @param {CollegeCreateManyArgs} args - Arguments to create many Colleges.
     * @example
     * // Create many Colleges
     * const college = await prisma.college.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollegeCreateManyArgs>(args?: SelectSubset<T, CollegeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colleges and returns the data saved in the database.
     * @param {CollegeCreateManyAndReturnArgs} args - Arguments to create many Colleges.
     * @example
     * // Create many Colleges
     * const college = await prisma.college.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colleges and only return the `id`
     * const collegeWithIdOnly = await prisma.college.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollegeCreateManyAndReturnArgs>(args?: SelectSubset<T, CollegeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a College.
     * @param {CollegeDeleteArgs} args - Arguments to delete one College.
     * @example
     * // Delete one College
     * const College = await prisma.college.delete({
     *   where: {
     *     // ... filter to delete one College
     *   }
     * })
     * 
     */
    delete<T extends CollegeDeleteArgs>(args: SelectSubset<T, CollegeDeleteArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one College.
     * @param {CollegeUpdateArgs} args - Arguments to update one College.
     * @example
     * // Update one College
     * const college = await prisma.college.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollegeUpdateArgs>(args: SelectSubset<T, CollegeUpdateArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colleges.
     * @param {CollegeDeleteManyArgs} args - Arguments to filter Colleges to delete.
     * @example
     * // Delete a few Colleges
     * const { count } = await prisma.college.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollegeDeleteManyArgs>(args?: SelectSubset<T, CollegeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colleges
     * const college = await prisma.college.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollegeUpdateManyArgs>(args: SelectSubset<T, CollegeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colleges and returns the data updated in the database.
     * @param {CollegeUpdateManyAndReturnArgs} args - Arguments to update many Colleges.
     * @example
     * // Update many Colleges
     * const college = await prisma.college.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colleges and only return the `id`
     * const collegeWithIdOnly = await prisma.college.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollegeUpdateManyAndReturnArgs>(args: SelectSubset<T, CollegeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one College.
     * @param {CollegeUpsertArgs} args - Arguments to update or create a College.
     * @example
     * // Update or create a College
     * const college = await prisma.college.upsert({
     *   create: {
     *     // ... data to create a College
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the College we want to update
     *   }
     * })
     */
    upsert<T extends CollegeUpsertArgs>(args: SelectSubset<T, CollegeUpsertArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCountArgs} args - Arguments to filter Colleges to count.
     * @example
     * // Count the number of Colleges
     * const count = await prisma.college.count({
     *   where: {
     *     // ... the filter for the Colleges we want to count
     *   }
     * })
    **/
    count<T extends CollegeCountArgs>(
      args?: Subset<T, CollegeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollegeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a College.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollegeAggregateArgs>(args: Subset<T, CollegeAggregateArgs>): Prisma.PrismaPromise<GetCollegeAggregateType<T>>

    /**
     * Group by College.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeGroupByArgs} args - Group by arguments.
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
      T extends CollegeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollegeGroupByArgs['orderBy'] }
        : { orderBy?: CollegeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CollegeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollegeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the College model
   */
  readonly fields: CollegeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for College.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollegeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collegeCourses<T extends College$collegeCoursesArgs<ExtArgs> = {}>(args?: Subset<T, College$collegeCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recommendations<T extends College$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, College$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the College model
   */
  interface CollegeFieldRefs {
    readonly id: FieldRef<"College", 'Int'>
    readonly collegeName: FieldRef<"College", 'String'>
    readonly location: FieldRef<"College", 'String'>
    readonly affiliation: FieldRef<"College", 'String'>
  }
    

  // Custom InputTypes
  /**
   * College findUnique
   */
  export type CollegeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College findUniqueOrThrow
   */
  export type CollegeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College findFirst
   */
  export type CollegeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colleges.
     */
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College findFirstOrThrow
   */
  export type CollegeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colleges.
     */
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College findMany
   */
  export type CollegeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which Colleges to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College create
   */
  export type CollegeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The data needed to create a College.
     */
    data: XOR<CollegeCreateInput, CollegeUncheckedCreateInput>
  }

  /**
   * College createMany
   */
  export type CollegeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colleges.
     */
    data: CollegeCreateManyInput | CollegeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * College createManyAndReturn
   */
  export type CollegeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * The data used to create many Colleges.
     */
    data: CollegeCreateManyInput | CollegeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * College update
   */
  export type CollegeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The data needed to update a College.
     */
    data: XOR<CollegeUpdateInput, CollegeUncheckedUpdateInput>
    /**
     * Choose, which College to update.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College updateMany
   */
  export type CollegeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colleges.
     */
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyInput>
    /**
     * Filter which Colleges to update
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to update.
     */
    limit?: number
  }

  /**
   * College updateManyAndReturn
   */
  export type CollegeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * The data used to update Colleges.
     */
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyInput>
    /**
     * Filter which Colleges to update
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to update.
     */
    limit?: number
  }

  /**
   * College upsert
   */
  export type CollegeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The filter to search for the College to update in case it exists.
     */
    where: CollegeWhereUniqueInput
    /**
     * In case the College found by the `where` argument doesn't exist, create a new College with this data.
     */
    create: XOR<CollegeCreateInput, CollegeUncheckedCreateInput>
    /**
     * In case the College was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollegeUpdateInput, CollegeUncheckedUpdateInput>
  }

  /**
   * College delete
   */
  export type CollegeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter which College to delete.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College deleteMany
   */
  export type CollegeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colleges to delete
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to delete.
     */
    limit?: number
  }

  /**
   * College.collegeCourses
   */
  export type College$collegeCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCourse
     */
    select?: CollegeCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCourse
     */
    omit?: CollegeCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCourseInclude<ExtArgs> | null
    where?: CollegeCourseWhereInput
    orderBy?: CollegeCourseOrderByWithRelationInput | CollegeCourseOrderByWithRelationInput[]
    cursor?: CollegeCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollegeCourseScalarFieldEnum | CollegeCourseScalarFieldEnum[]
  }

  /**
   * College.recommendations
   */
  export type College$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    cursor?: RecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * College without action
   */
  export type CollegeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
  }


  /**
   * Model CollegeCourse
   */

  export type AggregateCollegeCourse = {
    _count: CollegeCourseCountAggregateOutputType | null
    _avg: CollegeCourseAvgAggregateOutputType | null
    _sum: CollegeCourseSumAggregateOutputType | null
    _min: CollegeCourseMinAggregateOutputType | null
    _max: CollegeCourseMaxAggregateOutputType | null
  }

  export type CollegeCourseAvgAggregateOutputType = {
    id: number | null
    collegeId: number | null
    courseId: number | null
  }

  export type CollegeCourseSumAggregateOutputType = {
    id: number | null
    collegeId: number | null
    courseId: number | null
  }

  export type CollegeCourseMinAggregateOutputType = {
    id: number | null
    collegeId: number | null
    courseId: number | null
  }

  export type CollegeCourseMaxAggregateOutputType = {
    id: number | null
    collegeId: number | null
    courseId: number | null
  }

  export type CollegeCourseCountAggregateOutputType = {
    id: number
    collegeId: number
    courseId: number
    _all: number
  }


  export type CollegeCourseAvgAggregateInputType = {
    id?: true
    collegeId?: true
    courseId?: true
  }

  export type CollegeCourseSumAggregateInputType = {
    id?: true
    collegeId?: true
    courseId?: true
  }

  export type CollegeCourseMinAggregateInputType = {
    id?: true
    collegeId?: true
    courseId?: true
  }

  export type CollegeCourseMaxAggregateInputType = {
    id?: true
    collegeId?: true
    courseId?: true
  }

  export type CollegeCourseCountAggregateInputType = {
    id?: true
    collegeId?: true
    courseId?: true
    _all?: true
  }

  export type CollegeCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollegeCourse to aggregate.
     */
    where?: CollegeCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeCourses to fetch.
     */
    orderBy?: CollegeCourseOrderByWithRelationInput | CollegeCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollegeCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollegeCourses
    **/
    _count?: true | CollegeCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollegeCourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollegeCourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollegeCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollegeCourseMaxAggregateInputType
  }

  export type GetCollegeCourseAggregateType<T extends CollegeCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCollegeCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollegeCourse[P]>
      : GetScalarType<T[P], AggregateCollegeCourse[P]>
  }




  export type CollegeCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeCourseWhereInput
    orderBy?: CollegeCourseOrderByWithAggregationInput | CollegeCourseOrderByWithAggregationInput[]
    by: CollegeCourseScalarFieldEnum[] | CollegeCourseScalarFieldEnum
    having?: CollegeCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollegeCourseCountAggregateInputType | true
    _avg?: CollegeCourseAvgAggregateInputType
    _sum?: CollegeCourseSumAggregateInputType
    _min?: CollegeCourseMinAggregateInputType
    _max?: CollegeCourseMaxAggregateInputType
  }

  export type CollegeCourseGroupByOutputType = {
    id: number
    collegeId: number
    courseId: number
    _count: CollegeCourseCountAggregateOutputType | null
    _avg: CollegeCourseAvgAggregateOutputType | null
    _sum: CollegeCourseSumAggregateOutputType | null
    _min: CollegeCourseMinAggregateOutputType | null
    _max: CollegeCourseMaxAggregateOutputType | null
  }

  type GetCollegeCourseGroupByPayload<T extends CollegeCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollegeCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollegeCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollegeCourseGroupByOutputType[P]>
            : GetScalarType<T[P], CollegeCourseGroupByOutputType[P]>
        }
      >
    >


  export type CollegeCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collegeId?: boolean
    courseId?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collegeCourse"]>

  export type CollegeCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collegeId?: boolean
    courseId?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collegeCourse"]>

  export type CollegeCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collegeId?: boolean
    courseId?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collegeCourse"]>

  export type CollegeCourseSelectScalar = {
    id?: boolean
    collegeId?: boolean
    courseId?: boolean
  }

  export type CollegeCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "collegeId" | "courseId", ExtArgs["result"]["collegeCourse"]>
  export type CollegeCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CollegeCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CollegeCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CollegeCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollegeCourse"
    objects: {
      college: Prisma.$CollegePayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      collegeId: number
      courseId: number
    }, ExtArgs["result"]["collegeCourse"]>
    composites: {}
  }

  type CollegeCourseGetPayload<S extends boolean | null | undefined | CollegeCourseDefaultArgs> = $Result.GetResult<Prisma.$CollegeCoursePayload, S>

  type CollegeCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollegeCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollegeCourseCountAggregateInputType | true
    }

  export interface CollegeCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollegeCourse'], meta: { name: 'CollegeCourse' } }
    /**
     * Find zero or one CollegeCourse that matches the filter.
     * @param {CollegeCourseFindUniqueArgs} args - Arguments to find a CollegeCourse
     * @example
     * // Get one CollegeCourse
     * const collegeCourse = await prisma.collegeCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollegeCourseFindUniqueArgs>(args: SelectSubset<T, CollegeCourseFindUniqueArgs<ExtArgs>>): Prisma__CollegeCourseClient<$Result.GetResult<Prisma.$CollegeCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollegeCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollegeCourseFindUniqueOrThrowArgs} args - Arguments to find a CollegeCourse
     * @example
     * // Get one CollegeCourse
     * const collegeCourse = await prisma.collegeCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollegeCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CollegeCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollegeCourseClient<$Result.GetResult<Prisma.$CollegeCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollegeCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCourseFindFirstArgs} args - Arguments to find a CollegeCourse
     * @example
     * // Get one CollegeCourse
     * const collegeCourse = await prisma.collegeCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollegeCourseFindFirstArgs>(args?: SelectSubset<T, CollegeCourseFindFirstArgs<ExtArgs>>): Prisma__CollegeCourseClient<$Result.GetResult<Prisma.$CollegeCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollegeCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCourseFindFirstOrThrowArgs} args - Arguments to find a CollegeCourse
     * @example
     * // Get one CollegeCourse
     * const collegeCourse = await prisma.collegeCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollegeCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CollegeCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollegeCourseClient<$Result.GetResult<Prisma.$CollegeCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollegeCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollegeCourses
     * const collegeCourses = await prisma.collegeCourse.findMany()
     * 
     * // Get first 10 CollegeCourses
     * const collegeCourses = await prisma.collegeCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collegeCourseWithIdOnly = await prisma.collegeCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollegeCourseFindManyArgs>(args?: SelectSubset<T, CollegeCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollegeCourse.
     * @param {CollegeCourseCreateArgs} args - Arguments to create a CollegeCourse.
     * @example
     * // Create one CollegeCourse
     * const CollegeCourse = await prisma.collegeCourse.create({
     *   data: {
     *     // ... data to create a CollegeCourse
     *   }
     * })
     * 
     */
    create<T extends CollegeCourseCreateArgs>(args: SelectSubset<T, CollegeCourseCreateArgs<ExtArgs>>): Prisma__CollegeCourseClient<$Result.GetResult<Prisma.$CollegeCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollegeCourses.
     * @param {CollegeCourseCreateManyArgs} args - Arguments to create many CollegeCourses.
     * @example
     * // Create many CollegeCourses
     * const collegeCourse = await prisma.collegeCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollegeCourseCreateManyArgs>(args?: SelectSubset<T, CollegeCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CollegeCourses and returns the data saved in the database.
     * @param {CollegeCourseCreateManyAndReturnArgs} args - Arguments to create many CollegeCourses.
     * @example
     * // Create many CollegeCourses
     * const collegeCourse = await prisma.collegeCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CollegeCourses and only return the `id`
     * const collegeCourseWithIdOnly = await prisma.collegeCourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollegeCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CollegeCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CollegeCourse.
     * @param {CollegeCourseDeleteArgs} args - Arguments to delete one CollegeCourse.
     * @example
     * // Delete one CollegeCourse
     * const CollegeCourse = await prisma.collegeCourse.delete({
     *   where: {
     *     // ... filter to delete one CollegeCourse
     *   }
     * })
     * 
     */
    delete<T extends CollegeCourseDeleteArgs>(args: SelectSubset<T, CollegeCourseDeleteArgs<ExtArgs>>): Prisma__CollegeCourseClient<$Result.GetResult<Prisma.$CollegeCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollegeCourse.
     * @param {CollegeCourseUpdateArgs} args - Arguments to update one CollegeCourse.
     * @example
     * // Update one CollegeCourse
     * const collegeCourse = await prisma.collegeCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollegeCourseUpdateArgs>(args: SelectSubset<T, CollegeCourseUpdateArgs<ExtArgs>>): Prisma__CollegeCourseClient<$Result.GetResult<Prisma.$CollegeCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollegeCourses.
     * @param {CollegeCourseDeleteManyArgs} args - Arguments to filter CollegeCourses to delete.
     * @example
     * // Delete a few CollegeCourses
     * const { count } = await prisma.collegeCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollegeCourseDeleteManyArgs>(args?: SelectSubset<T, CollegeCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollegeCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollegeCourses
     * const collegeCourse = await prisma.collegeCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollegeCourseUpdateManyArgs>(args: SelectSubset<T, CollegeCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollegeCourses and returns the data updated in the database.
     * @param {CollegeCourseUpdateManyAndReturnArgs} args - Arguments to update many CollegeCourses.
     * @example
     * // Update many CollegeCourses
     * const collegeCourse = await prisma.collegeCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CollegeCourses and only return the `id`
     * const collegeCourseWithIdOnly = await prisma.collegeCourse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollegeCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CollegeCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CollegeCourse.
     * @param {CollegeCourseUpsertArgs} args - Arguments to update or create a CollegeCourse.
     * @example
     * // Update or create a CollegeCourse
     * const collegeCourse = await prisma.collegeCourse.upsert({
     *   create: {
     *     // ... data to create a CollegeCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollegeCourse we want to update
     *   }
     * })
     */
    upsert<T extends CollegeCourseUpsertArgs>(args: SelectSubset<T, CollegeCourseUpsertArgs<ExtArgs>>): Prisma__CollegeCourseClient<$Result.GetResult<Prisma.$CollegeCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CollegeCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCourseCountArgs} args - Arguments to filter CollegeCourses to count.
     * @example
     * // Count the number of CollegeCourses
     * const count = await prisma.collegeCourse.count({
     *   where: {
     *     // ... the filter for the CollegeCourses we want to count
     *   }
     * })
    **/
    count<T extends CollegeCourseCountArgs>(
      args?: Subset<T, CollegeCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollegeCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollegeCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollegeCourseAggregateArgs>(args: Subset<T, CollegeCourseAggregateArgs>): Prisma.PrismaPromise<GetCollegeCourseAggregateType<T>>

    /**
     * Group by CollegeCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCourseGroupByArgs} args - Group by arguments.
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
      T extends CollegeCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollegeCourseGroupByArgs['orderBy'] }
        : { orderBy?: CollegeCourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CollegeCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollegeCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollegeCourse model
   */
  readonly fields: CollegeCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollegeCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollegeCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CollegeCourse model
   */
  interface CollegeCourseFieldRefs {
    readonly id: FieldRef<"CollegeCourse", 'Int'>
    readonly collegeId: FieldRef<"CollegeCourse", 'Int'>
    readonly courseId: FieldRef<"CollegeCourse", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CollegeCourse findUnique
   */
  export type CollegeCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCourse
     */
    select?: CollegeCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCourse
     */
    omit?: CollegeCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCourseInclude<ExtArgs> | null
    /**
     * Filter, which CollegeCourse to fetch.
     */
    where: CollegeCourseWhereUniqueInput
  }

  /**
   * CollegeCourse findUniqueOrThrow
   */
  export type CollegeCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCourse
     */
    select?: CollegeCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCourse
     */
    omit?: CollegeCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCourseInclude<ExtArgs> | null
    /**
     * Filter, which CollegeCourse to fetch.
     */
    where: CollegeCourseWhereUniqueInput
  }

  /**
   * CollegeCourse findFirst
   */
  export type CollegeCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCourse
     */
    select?: CollegeCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCourse
     */
    omit?: CollegeCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCourseInclude<ExtArgs> | null
    /**
     * Filter, which CollegeCourse to fetch.
     */
    where?: CollegeCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeCourses to fetch.
     */
    orderBy?: CollegeCourseOrderByWithRelationInput | CollegeCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollegeCourses.
     */
    cursor?: CollegeCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollegeCourses.
     */
    distinct?: CollegeCourseScalarFieldEnum | CollegeCourseScalarFieldEnum[]
  }

  /**
   * CollegeCourse findFirstOrThrow
   */
  export type CollegeCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCourse
     */
    select?: CollegeCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCourse
     */
    omit?: CollegeCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCourseInclude<ExtArgs> | null
    /**
     * Filter, which CollegeCourse to fetch.
     */
    where?: CollegeCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeCourses to fetch.
     */
    orderBy?: CollegeCourseOrderByWithRelationInput | CollegeCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollegeCourses.
     */
    cursor?: CollegeCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollegeCourses.
     */
    distinct?: CollegeCourseScalarFieldEnum | CollegeCourseScalarFieldEnum[]
  }

  /**
   * CollegeCourse findMany
   */
  export type CollegeCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCourse
     */
    select?: CollegeCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCourse
     */
    omit?: CollegeCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCourseInclude<ExtArgs> | null
    /**
     * Filter, which CollegeCourses to fetch.
     */
    where?: CollegeCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeCourses to fetch.
     */
    orderBy?: CollegeCourseOrderByWithRelationInput | CollegeCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollegeCourses.
     */
    cursor?: CollegeCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeCourses.
     */
    skip?: number
    distinct?: CollegeCourseScalarFieldEnum | CollegeCourseScalarFieldEnum[]
  }

  /**
   * CollegeCourse create
   */
  export type CollegeCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCourse
     */
    select?: CollegeCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCourse
     */
    omit?: CollegeCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a CollegeCourse.
     */
    data: XOR<CollegeCourseCreateInput, CollegeCourseUncheckedCreateInput>
  }

  /**
   * CollegeCourse createMany
   */
  export type CollegeCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollegeCourses.
     */
    data: CollegeCourseCreateManyInput | CollegeCourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CollegeCourse createManyAndReturn
   */
  export type CollegeCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCourse
     */
    select?: CollegeCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCourse
     */
    omit?: CollegeCourseOmit<ExtArgs> | null
    /**
     * The data used to create many CollegeCourses.
     */
    data: CollegeCourseCreateManyInput | CollegeCourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollegeCourse update
   */
  export type CollegeCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCourse
     */
    select?: CollegeCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCourse
     */
    omit?: CollegeCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a CollegeCourse.
     */
    data: XOR<CollegeCourseUpdateInput, CollegeCourseUncheckedUpdateInput>
    /**
     * Choose, which CollegeCourse to update.
     */
    where: CollegeCourseWhereUniqueInput
  }

  /**
   * CollegeCourse updateMany
   */
  export type CollegeCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollegeCourses.
     */
    data: XOR<CollegeCourseUpdateManyMutationInput, CollegeCourseUncheckedUpdateManyInput>
    /**
     * Filter which CollegeCourses to update
     */
    where?: CollegeCourseWhereInput
    /**
     * Limit how many CollegeCourses to update.
     */
    limit?: number
  }

  /**
   * CollegeCourse updateManyAndReturn
   */
  export type CollegeCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCourse
     */
    select?: CollegeCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCourse
     */
    omit?: CollegeCourseOmit<ExtArgs> | null
    /**
     * The data used to update CollegeCourses.
     */
    data: XOR<CollegeCourseUpdateManyMutationInput, CollegeCourseUncheckedUpdateManyInput>
    /**
     * Filter which CollegeCourses to update
     */
    where?: CollegeCourseWhereInput
    /**
     * Limit how many CollegeCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollegeCourse upsert
   */
  export type CollegeCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCourse
     */
    select?: CollegeCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCourse
     */
    omit?: CollegeCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the CollegeCourse to update in case it exists.
     */
    where: CollegeCourseWhereUniqueInput
    /**
     * In case the CollegeCourse found by the `where` argument doesn't exist, create a new CollegeCourse with this data.
     */
    create: XOR<CollegeCourseCreateInput, CollegeCourseUncheckedCreateInput>
    /**
     * In case the CollegeCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollegeCourseUpdateInput, CollegeCourseUncheckedUpdateInput>
  }

  /**
   * CollegeCourse delete
   */
  export type CollegeCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCourse
     */
    select?: CollegeCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCourse
     */
    omit?: CollegeCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCourseInclude<ExtArgs> | null
    /**
     * Filter which CollegeCourse to delete.
     */
    where: CollegeCourseWhereUniqueInput
  }

  /**
   * CollegeCourse deleteMany
   */
  export type CollegeCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollegeCourses to delete
     */
    where?: CollegeCourseWhereInput
    /**
     * Limit how many CollegeCourses to delete.
     */
    limit?: number
  }

  /**
   * CollegeCourse without action
   */
  export type CollegeCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCourse
     */
    select?: CollegeCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeCourse
     */
    omit?: CollegeCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeCourseInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: number | null
    skillName: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: number | null
    skillName: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    skillName: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true
  }

  export type SkillSumAggregateInputType = {
    id?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    skillName?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    skillName?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    skillName?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: number
    skillName: string
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillName?: boolean
    careerSkills?: boolean | Skill$careerSkillsArgs<ExtArgs>
    courseSkills?: boolean | Skill$courseSkillsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillName?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillName?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    skillName?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skillName", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careerSkills?: boolean | Skill$careerSkillsArgs<ExtArgs>
    courseSkills?: boolean | Skill$courseSkillsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      careerSkills: Prisma.$CareerSkillPayload<ExtArgs>[]
      courseSkills: Prisma.$CourseSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      skillName: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    careerSkills<T extends Skill$careerSkillsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$careerSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseSkills<T extends Skill$courseSkillsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$courseSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'Int'>
    readonly skillName: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.careerSkills
   */
  export type Skill$careerSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerSkill
     */
    select?: CareerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerSkill
     */
    omit?: CareerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerSkillInclude<ExtArgs> | null
    where?: CareerSkillWhereInput
    orderBy?: CareerSkillOrderByWithRelationInput | CareerSkillOrderByWithRelationInput[]
    cursor?: CareerSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CareerSkillScalarFieldEnum | CareerSkillScalarFieldEnum[]
  }

  /**
   * Skill.courseSkills
   */
  export type Skill$courseSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSkill
     */
    select?: CourseSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSkill
     */
    omit?: CourseSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSkillInclude<ExtArgs> | null
    where?: CourseSkillWhereInput
    orderBy?: CourseSkillOrderByWithRelationInput | CourseSkillOrderByWithRelationInput[]
    cursor?: CourseSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseSkillScalarFieldEnum | CourseSkillScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model CareerSkill
   */

  export type AggregateCareerSkill = {
    _count: CareerSkillCountAggregateOutputType | null
    _avg: CareerSkillAvgAggregateOutputType | null
    _sum: CareerSkillSumAggregateOutputType | null
    _min: CareerSkillMinAggregateOutputType | null
    _max: CareerSkillMaxAggregateOutputType | null
  }

  export type CareerSkillAvgAggregateOutputType = {
    id: number | null
    careerId: number | null
    skillId: number | null
  }

  export type CareerSkillSumAggregateOutputType = {
    id: number | null
    careerId: number | null
    skillId: number | null
  }

  export type CareerSkillMinAggregateOutputType = {
    id: number | null
    careerId: number | null
    skillId: number | null
  }

  export type CareerSkillMaxAggregateOutputType = {
    id: number | null
    careerId: number | null
    skillId: number | null
  }

  export type CareerSkillCountAggregateOutputType = {
    id: number
    careerId: number
    skillId: number
    _all: number
  }


  export type CareerSkillAvgAggregateInputType = {
    id?: true
    careerId?: true
    skillId?: true
  }

  export type CareerSkillSumAggregateInputType = {
    id?: true
    careerId?: true
    skillId?: true
  }

  export type CareerSkillMinAggregateInputType = {
    id?: true
    careerId?: true
    skillId?: true
  }

  export type CareerSkillMaxAggregateInputType = {
    id?: true
    careerId?: true
    skillId?: true
  }

  export type CareerSkillCountAggregateInputType = {
    id?: true
    careerId?: true
    skillId?: true
    _all?: true
  }

  export type CareerSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareerSkill to aggregate.
     */
    where?: CareerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerSkills to fetch.
     */
    orderBy?: CareerSkillOrderByWithRelationInput | CareerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CareerSkills
    **/
    _count?: true | CareerSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CareerSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CareerSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareerSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareerSkillMaxAggregateInputType
  }

  export type GetCareerSkillAggregateType<T extends CareerSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateCareerSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareerSkill[P]>
      : GetScalarType<T[P], AggregateCareerSkill[P]>
  }




  export type CareerSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerSkillWhereInput
    orderBy?: CareerSkillOrderByWithAggregationInput | CareerSkillOrderByWithAggregationInput[]
    by: CareerSkillScalarFieldEnum[] | CareerSkillScalarFieldEnum
    having?: CareerSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareerSkillCountAggregateInputType | true
    _avg?: CareerSkillAvgAggregateInputType
    _sum?: CareerSkillSumAggregateInputType
    _min?: CareerSkillMinAggregateInputType
    _max?: CareerSkillMaxAggregateInputType
  }

  export type CareerSkillGroupByOutputType = {
    id: number
    careerId: number
    skillId: number
    _count: CareerSkillCountAggregateOutputType | null
    _avg: CareerSkillAvgAggregateOutputType | null
    _sum: CareerSkillSumAggregateOutputType | null
    _min: CareerSkillMinAggregateOutputType | null
    _max: CareerSkillMaxAggregateOutputType | null
  }

  type GetCareerSkillGroupByPayload<T extends CareerSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareerSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareerSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareerSkillGroupByOutputType[P]>
            : GetScalarType<T[P], CareerSkillGroupByOutputType[P]>
        }
      >
    >


  export type CareerSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    careerId?: boolean
    skillId?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careerSkill"]>

  export type CareerSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    careerId?: boolean
    skillId?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careerSkill"]>

  export type CareerSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    careerId?: boolean
    skillId?: boolean
    career?: boolean | CareerDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careerSkill"]>

  export type CareerSkillSelectScalar = {
    id?: boolean
    careerId?: boolean
    skillId?: boolean
  }

  export type CareerSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "careerId" | "skillId", ExtArgs["result"]["careerSkill"]>
  export type CareerSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type CareerSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type CareerSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | CareerDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $CareerSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CareerSkill"
    objects: {
      career: Prisma.$CareerPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      careerId: number
      skillId: number
    }, ExtArgs["result"]["careerSkill"]>
    composites: {}
  }

  type CareerSkillGetPayload<S extends boolean | null | undefined | CareerSkillDefaultArgs> = $Result.GetResult<Prisma.$CareerSkillPayload, S>

  type CareerSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CareerSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareerSkillCountAggregateInputType | true
    }

  export interface CareerSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CareerSkill'], meta: { name: 'CareerSkill' } }
    /**
     * Find zero or one CareerSkill that matches the filter.
     * @param {CareerSkillFindUniqueArgs} args - Arguments to find a CareerSkill
     * @example
     * // Get one CareerSkill
     * const careerSkill = await prisma.careerSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareerSkillFindUniqueArgs>(args: SelectSubset<T, CareerSkillFindUniqueArgs<ExtArgs>>): Prisma__CareerSkillClient<$Result.GetResult<Prisma.$CareerSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CareerSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareerSkillFindUniqueOrThrowArgs} args - Arguments to find a CareerSkill
     * @example
     * // Get one CareerSkill
     * const careerSkill = await prisma.careerSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareerSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, CareerSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CareerSkillClient<$Result.GetResult<Prisma.$CareerSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareerSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerSkillFindFirstArgs} args - Arguments to find a CareerSkill
     * @example
     * // Get one CareerSkill
     * const careerSkill = await prisma.careerSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareerSkillFindFirstArgs>(args?: SelectSubset<T, CareerSkillFindFirstArgs<ExtArgs>>): Prisma__CareerSkillClient<$Result.GetResult<Prisma.$CareerSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareerSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerSkillFindFirstOrThrowArgs} args - Arguments to find a CareerSkill
     * @example
     * // Get one CareerSkill
     * const careerSkill = await prisma.careerSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareerSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, CareerSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__CareerSkillClient<$Result.GetResult<Prisma.$CareerSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CareerSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CareerSkills
     * const careerSkills = await prisma.careerSkill.findMany()
     * 
     * // Get first 10 CareerSkills
     * const careerSkills = await prisma.careerSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careerSkillWithIdOnly = await prisma.careerSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CareerSkillFindManyArgs>(args?: SelectSubset<T, CareerSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CareerSkill.
     * @param {CareerSkillCreateArgs} args - Arguments to create a CareerSkill.
     * @example
     * // Create one CareerSkill
     * const CareerSkill = await prisma.careerSkill.create({
     *   data: {
     *     // ... data to create a CareerSkill
     *   }
     * })
     * 
     */
    create<T extends CareerSkillCreateArgs>(args: SelectSubset<T, CareerSkillCreateArgs<ExtArgs>>): Prisma__CareerSkillClient<$Result.GetResult<Prisma.$CareerSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CareerSkills.
     * @param {CareerSkillCreateManyArgs} args - Arguments to create many CareerSkills.
     * @example
     * // Create many CareerSkills
     * const careerSkill = await prisma.careerSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CareerSkillCreateManyArgs>(args?: SelectSubset<T, CareerSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CareerSkills and returns the data saved in the database.
     * @param {CareerSkillCreateManyAndReturnArgs} args - Arguments to create many CareerSkills.
     * @example
     * // Create many CareerSkills
     * const careerSkill = await prisma.careerSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CareerSkills and only return the `id`
     * const careerSkillWithIdOnly = await prisma.careerSkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CareerSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, CareerSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CareerSkill.
     * @param {CareerSkillDeleteArgs} args - Arguments to delete one CareerSkill.
     * @example
     * // Delete one CareerSkill
     * const CareerSkill = await prisma.careerSkill.delete({
     *   where: {
     *     // ... filter to delete one CareerSkill
     *   }
     * })
     * 
     */
    delete<T extends CareerSkillDeleteArgs>(args: SelectSubset<T, CareerSkillDeleteArgs<ExtArgs>>): Prisma__CareerSkillClient<$Result.GetResult<Prisma.$CareerSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CareerSkill.
     * @param {CareerSkillUpdateArgs} args - Arguments to update one CareerSkill.
     * @example
     * // Update one CareerSkill
     * const careerSkill = await prisma.careerSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CareerSkillUpdateArgs>(args: SelectSubset<T, CareerSkillUpdateArgs<ExtArgs>>): Prisma__CareerSkillClient<$Result.GetResult<Prisma.$CareerSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CareerSkills.
     * @param {CareerSkillDeleteManyArgs} args - Arguments to filter CareerSkills to delete.
     * @example
     * // Delete a few CareerSkills
     * const { count } = await prisma.careerSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CareerSkillDeleteManyArgs>(args?: SelectSubset<T, CareerSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareerSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CareerSkills
     * const careerSkill = await prisma.careerSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CareerSkillUpdateManyArgs>(args: SelectSubset<T, CareerSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareerSkills and returns the data updated in the database.
     * @param {CareerSkillUpdateManyAndReturnArgs} args - Arguments to update many CareerSkills.
     * @example
     * // Update many CareerSkills
     * const careerSkill = await prisma.careerSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CareerSkills and only return the `id`
     * const careerSkillWithIdOnly = await prisma.careerSkill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CareerSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, CareerSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CareerSkill.
     * @param {CareerSkillUpsertArgs} args - Arguments to update or create a CareerSkill.
     * @example
     * // Update or create a CareerSkill
     * const careerSkill = await prisma.careerSkill.upsert({
     *   create: {
     *     // ... data to create a CareerSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CareerSkill we want to update
     *   }
     * })
     */
    upsert<T extends CareerSkillUpsertArgs>(args: SelectSubset<T, CareerSkillUpsertArgs<ExtArgs>>): Prisma__CareerSkillClient<$Result.GetResult<Prisma.$CareerSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CareerSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerSkillCountArgs} args - Arguments to filter CareerSkills to count.
     * @example
     * // Count the number of CareerSkills
     * const count = await prisma.careerSkill.count({
     *   where: {
     *     // ... the filter for the CareerSkills we want to count
     *   }
     * })
    **/
    count<T extends CareerSkillCountArgs>(
      args?: Subset<T, CareerSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareerSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CareerSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CareerSkillAggregateArgs>(args: Subset<T, CareerSkillAggregateArgs>): Prisma.PrismaPromise<GetCareerSkillAggregateType<T>>

    /**
     * Group by CareerSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerSkillGroupByArgs} args - Group by arguments.
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
      T extends CareerSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareerSkillGroupByArgs['orderBy'] }
        : { orderBy?: CareerSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CareerSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareerSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CareerSkill model
   */
  readonly fields: CareerSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CareerSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareerSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    career<T extends CareerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareerDefaultArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CareerSkill model
   */
  interface CareerSkillFieldRefs {
    readonly id: FieldRef<"CareerSkill", 'Int'>
    readonly careerId: FieldRef<"CareerSkill", 'Int'>
    readonly skillId: FieldRef<"CareerSkill", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CareerSkill findUnique
   */
  export type CareerSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerSkill
     */
    select?: CareerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerSkill
     */
    omit?: CareerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerSkillInclude<ExtArgs> | null
    /**
     * Filter, which CareerSkill to fetch.
     */
    where: CareerSkillWhereUniqueInput
  }

  /**
   * CareerSkill findUniqueOrThrow
   */
  export type CareerSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerSkill
     */
    select?: CareerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerSkill
     */
    omit?: CareerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerSkillInclude<ExtArgs> | null
    /**
     * Filter, which CareerSkill to fetch.
     */
    where: CareerSkillWhereUniqueInput
  }

  /**
   * CareerSkill findFirst
   */
  export type CareerSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerSkill
     */
    select?: CareerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerSkill
     */
    omit?: CareerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerSkillInclude<ExtArgs> | null
    /**
     * Filter, which CareerSkill to fetch.
     */
    where?: CareerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerSkills to fetch.
     */
    orderBy?: CareerSkillOrderByWithRelationInput | CareerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareerSkills.
     */
    cursor?: CareerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareerSkills.
     */
    distinct?: CareerSkillScalarFieldEnum | CareerSkillScalarFieldEnum[]
  }

  /**
   * CareerSkill findFirstOrThrow
   */
  export type CareerSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerSkill
     */
    select?: CareerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerSkill
     */
    omit?: CareerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerSkillInclude<ExtArgs> | null
    /**
     * Filter, which CareerSkill to fetch.
     */
    where?: CareerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerSkills to fetch.
     */
    orderBy?: CareerSkillOrderByWithRelationInput | CareerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareerSkills.
     */
    cursor?: CareerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareerSkills.
     */
    distinct?: CareerSkillScalarFieldEnum | CareerSkillScalarFieldEnum[]
  }

  /**
   * CareerSkill findMany
   */
  export type CareerSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerSkill
     */
    select?: CareerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerSkill
     */
    omit?: CareerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerSkillInclude<ExtArgs> | null
    /**
     * Filter, which CareerSkills to fetch.
     */
    where?: CareerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerSkills to fetch.
     */
    orderBy?: CareerSkillOrderByWithRelationInput | CareerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CareerSkills.
     */
    cursor?: CareerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerSkills.
     */
    skip?: number
    distinct?: CareerSkillScalarFieldEnum | CareerSkillScalarFieldEnum[]
  }

  /**
   * CareerSkill create
   */
  export type CareerSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerSkill
     */
    select?: CareerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerSkill
     */
    omit?: CareerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a CareerSkill.
     */
    data: XOR<CareerSkillCreateInput, CareerSkillUncheckedCreateInput>
  }

  /**
   * CareerSkill createMany
   */
  export type CareerSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CareerSkills.
     */
    data: CareerSkillCreateManyInput | CareerSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CareerSkill createManyAndReturn
   */
  export type CareerSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerSkill
     */
    select?: CareerSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CareerSkill
     */
    omit?: CareerSkillOmit<ExtArgs> | null
    /**
     * The data used to create many CareerSkills.
     */
    data: CareerSkillCreateManyInput | CareerSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CareerSkill update
   */
  export type CareerSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerSkill
     */
    select?: CareerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerSkill
     */
    omit?: CareerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a CareerSkill.
     */
    data: XOR<CareerSkillUpdateInput, CareerSkillUncheckedUpdateInput>
    /**
     * Choose, which CareerSkill to update.
     */
    where: CareerSkillWhereUniqueInput
  }

  /**
   * CareerSkill updateMany
   */
  export type CareerSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CareerSkills.
     */
    data: XOR<CareerSkillUpdateManyMutationInput, CareerSkillUncheckedUpdateManyInput>
    /**
     * Filter which CareerSkills to update
     */
    where?: CareerSkillWhereInput
    /**
     * Limit how many CareerSkills to update.
     */
    limit?: number
  }

  /**
   * CareerSkill updateManyAndReturn
   */
  export type CareerSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerSkill
     */
    select?: CareerSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CareerSkill
     */
    omit?: CareerSkillOmit<ExtArgs> | null
    /**
     * The data used to update CareerSkills.
     */
    data: XOR<CareerSkillUpdateManyMutationInput, CareerSkillUncheckedUpdateManyInput>
    /**
     * Filter which CareerSkills to update
     */
    where?: CareerSkillWhereInput
    /**
     * Limit how many CareerSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CareerSkill upsert
   */
  export type CareerSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerSkill
     */
    select?: CareerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerSkill
     */
    omit?: CareerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the CareerSkill to update in case it exists.
     */
    where: CareerSkillWhereUniqueInput
    /**
     * In case the CareerSkill found by the `where` argument doesn't exist, create a new CareerSkill with this data.
     */
    create: XOR<CareerSkillCreateInput, CareerSkillUncheckedCreateInput>
    /**
     * In case the CareerSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareerSkillUpdateInput, CareerSkillUncheckedUpdateInput>
  }

  /**
   * CareerSkill delete
   */
  export type CareerSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerSkill
     */
    select?: CareerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerSkill
     */
    omit?: CareerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerSkillInclude<ExtArgs> | null
    /**
     * Filter which CareerSkill to delete.
     */
    where: CareerSkillWhereUniqueInput
  }

  /**
   * CareerSkill deleteMany
   */
  export type CareerSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareerSkills to delete
     */
    where?: CareerSkillWhereInput
    /**
     * Limit how many CareerSkills to delete.
     */
    limit?: number
  }

  /**
   * CareerSkill without action
   */
  export type CareerSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerSkill
     */
    select?: CareerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerSkill
     */
    omit?: CareerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerSkillInclude<ExtArgs> | null
  }


  /**
   * Model CourseSkill
   */

  export type AggregateCourseSkill = {
    _count: CourseSkillCountAggregateOutputType | null
    _avg: CourseSkillAvgAggregateOutputType | null
    _sum: CourseSkillSumAggregateOutputType | null
    _min: CourseSkillMinAggregateOutputType | null
    _max: CourseSkillMaxAggregateOutputType | null
  }

  export type CourseSkillAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
    skillId: number | null
  }

  export type CourseSkillSumAggregateOutputType = {
    id: number | null
    courseId: number | null
    skillId: number | null
  }

  export type CourseSkillMinAggregateOutputType = {
    id: number | null
    courseId: number | null
    skillId: number | null
  }

  export type CourseSkillMaxAggregateOutputType = {
    id: number | null
    courseId: number | null
    skillId: number | null
  }

  export type CourseSkillCountAggregateOutputType = {
    id: number
    courseId: number
    skillId: number
    _all: number
  }


  export type CourseSkillAvgAggregateInputType = {
    id?: true
    courseId?: true
    skillId?: true
  }

  export type CourseSkillSumAggregateInputType = {
    id?: true
    courseId?: true
    skillId?: true
  }

  export type CourseSkillMinAggregateInputType = {
    id?: true
    courseId?: true
    skillId?: true
  }

  export type CourseSkillMaxAggregateInputType = {
    id?: true
    courseId?: true
    skillId?: true
  }

  export type CourseSkillCountAggregateInputType = {
    id?: true
    courseId?: true
    skillId?: true
    _all?: true
  }

  export type CourseSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseSkill to aggregate.
     */
    where?: CourseSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseSkills to fetch.
     */
    orderBy?: CourseSkillOrderByWithRelationInput | CourseSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseSkills
    **/
    _count?: true | CourseSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseSkillMaxAggregateInputType
  }

  export type GetCourseSkillAggregateType<T extends CourseSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseSkill[P]>
      : GetScalarType<T[P], AggregateCourseSkill[P]>
  }




  export type CourseSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseSkillWhereInput
    orderBy?: CourseSkillOrderByWithAggregationInput | CourseSkillOrderByWithAggregationInput[]
    by: CourseSkillScalarFieldEnum[] | CourseSkillScalarFieldEnum
    having?: CourseSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseSkillCountAggregateInputType | true
    _avg?: CourseSkillAvgAggregateInputType
    _sum?: CourseSkillSumAggregateInputType
    _min?: CourseSkillMinAggregateInputType
    _max?: CourseSkillMaxAggregateInputType
  }

  export type CourseSkillGroupByOutputType = {
    id: number
    courseId: number
    skillId: number
    _count: CourseSkillCountAggregateOutputType | null
    _avg: CourseSkillAvgAggregateOutputType | null
    _sum: CourseSkillSumAggregateOutputType | null
    _min: CourseSkillMinAggregateOutputType | null
    _max: CourseSkillMaxAggregateOutputType | null
  }

  type GetCourseSkillGroupByPayload<T extends CourseSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseSkillGroupByOutputType[P]>
            : GetScalarType<T[P], CourseSkillGroupByOutputType[P]>
        }
      >
    >


  export type CourseSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    skillId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseSkill"]>

  export type CourseSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    skillId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseSkill"]>

  export type CourseSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    skillId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseSkill"]>

  export type CourseSkillSelectScalar = {
    id?: boolean
    courseId?: boolean
    skillId?: boolean
  }

  export type CourseSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "skillId", ExtArgs["result"]["courseSkill"]>
  export type CourseSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type CourseSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type CourseSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $CourseSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseSkill"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: number
      skillId: number
    }, ExtArgs["result"]["courseSkill"]>
    composites: {}
  }

  type CourseSkillGetPayload<S extends boolean | null | undefined | CourseSkillDefaultArgs> = $Result.GetResult<Prisma.$CourseSkillPayload, S>

  type CourseSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseSkillCountAggregateInputType | true
    }

  export interface CourseSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseSkill'], meta: { name: 'CourseSkill' } }
    /**
     * Find zero or one CourseSkill that matches the filter.
     * @param {CourseSkillFindUniqueArgs} args - Arguments to find a CourseSkill
     * @example
     * // Get one CourseSkill
     * const courseSkill = await prisma.courseSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseSkillFindUniqueArgs>(args: SelectSubset<T, CourseSkillFindUniqueArgs<ExtArgs>>): Prisma__CourseSkillClient<$Result.GetResult<Prisma.$CourseSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseSkillFindUniqueOrThrowArgs} args - Arguments to find a CourseSkill
     * @example
     * // Get one CourseSkill
     * const courseSkill = await prisma.courseSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseSkillClient<$Result.GetResult<Prisma.$CourseSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseSkillFindFirstArgs} args - Arguments to find a CourseSkill
     * @example
     * // Get one CourseSkill
     * const courseSkill = await prisma.courseSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseSkillFindFirstArgs>(args?: SelectSubset<T, CourseSkillFindFirstArgs<ExtArgs>>): Prisma__CourseSkillClient<$Result.GetResult<Prisma.$CourseSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseSkillFindFirstOrThrowArgs} args - Arguments to find a CourseSkill
     * @example
     * // Get one CourseSkill
     * const courseSkill = await prisma.courseSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseSkillClient<$Result.GetResult<Prisma.$CourseSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseSkills
     * const courseSkills = await prisma.courseSkill.findMany()
     * 
     * // Get first 10 CourseSkills
     * const courseSkills = await prisma.courseSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseSkillWithIdOnly = await prisma.courseSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseSkillFindManyArgs>(args?: SelectSubset<T, CourseSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseSkill.
     * @param {CourseSkillCreateArgs} args - Arguments to create a CourseSkill.
     * @example
     * // Create one CourseSkill
     * const CourseSkill = await prisma.courseSkill.create({
     *   data: {
     *     // ... data to create a CourseSkill
     *   }
     * })
     * 
     */
    create<T extends CourseSkillCreateArgs>(args: SelectSubset<T, CourseSkillCreateArgs<ExtArgs>>): Prisma__CourseSkillClient<$Result.GetResult<Prisma.$CourseSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseSkills.
     * @param {CourseSkillCreateManyArgs} args - Arguments to create many CourseSkills.
     * @example
     * // Create many CourseSkills
     * const courseSkill = await prisma.courseSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseSkillCreateManyArgs>(args?: SelectSubset<T, CourseSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseSkills and returns the data saved in the database.
     * @param {CourseSkillCreateManyAndReturnArgs} args - Arguments to create many CourseSkills.
     * @example
     * // Create many CourseSkills
     * const courseSkill = await prisma.courseSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseSkills and only return the `id`
     * const courseSkillWithIdOnly = await prisma.courseSkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseSkill.
     * @param {CourseSkillDeleteArgs} args - Arguments to delete one CourseSkill.
     * @example
     * // Delete one CourseSkill
     * const CourseSkill = await prisma.courseSkill.delete({
     *   where: {
     *     // ... filter to delete one CourseSkill
     *   }
     * })
     * 
     */
    delete<T extends CourseSkillDeleteArgs>(args: SelectSubset<T, CourseSkillDeleteArgs<ExtArgs>>): Prisma__CourseSkillClient<$Result.GetResult<Prisma.$CourseSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseSkill.
     * @param {CourseSkillUpdateArgs} args - Arguments to update one CourseSkill.
     * @example
     * // Update one CourseSkill
     * const courseSkill = await prisma.courseSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseSkillUpdateArgs>(args: SelectSubset<T, CourseSkillUpdateArgs<ExtArgs>>): Prisma__CourseSkillClient<$Result.GetResult<Prisma.$CourseSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseSkills.
     * @param {CourseSkillDeleteManyArgs} args - Arguments to filter CourseSkills to delete.
     * @example
     * // Delete a few CourseSkills
     * const { count } = await prisma.courseSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseSkillDeleteManyArgs>(args?: SelectSubset<T, CourseSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseSkills
     * const courseSkill = await prisma.courseSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseSkillUpdateManyArgs>(args: SelectSubset<T, CourseSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseSkills and returns the data updated in the database.
     * @param {CourseSkillUpdateManyAndReturnArgs} args - Arguments to update many CourseSkills.
     * @example
     * // Update many CourseSkills
     * const courseSkill = await prisma.courseSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseSkills and only return the `id`
     * const courseSkillWithIdOnly = await prisma.courseSkill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseSkill.
     * @param {CourseSkillUpsertArgs} args - Arguments to update or create a CourseSkill.
     * @example
     * // Update or create a CourseSkill
     * const courseSkill = await prisma.courseSkill.upsert({
     *   create: {
     *     // ... data to create a CourseSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseSkill we want to update
     *   }
     * })
     */
    upsert<T extends CourseSkillUpsertArgs>(args: SelectSubset<T, CourseSkillUpsertArgs<ExtArgs>>): Prisma__CourseSkillClient<$Result.GetResult<Prisma.$CourseSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseSkillCountArgs} args - Arguments to filter CourseSkills to count.
     * @example
     * // Count the number of CourseSkills
     * const count = await prisma.courseSkill.count({
     *   where: {
     *     // ... the filter for the CourseSkills we want to count
     *   }
     * })
    **/
    count<T extends CourseSkillCountArgs>(
      args?: Subset<T, CourseSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseSkillAggregateArgs>(args: Subset<T, CourseSkillAggregateArgs>): Prisma.PrismaPromise<GetCourseSkillAggregateType<T>>

    /**
     * Group by CourseSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseSkillGroupByArgs} args - Group by arguments.
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
      T extends CourseSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseSkillGroupByArgs['orderBy'] }
        : { orderBy?: CourseSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CourseSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseSkill model
   */
  readonly fields: CourseSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseSkill model
   */
  interface CourseSkillFieldRefs {
    readonly id: FieldRef<"CourseSkill", 'Int'>
    readonly courseId: FieldRef<"CourseSkill", 'Int'>
    readonly skillId: FieldRef<"CourseSkill", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CourseSkill findUnique
   */
  export type CourseSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSkill
     */
    select?: CourseSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSkill
     */
    omit?: CourseSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSkillInclude<ExtArgs> | null
    /**
     * Filter, which CourseSkill to fetch.
     */
    where: CourseSkillWhereUniqueInput
  }

  /**
   * CourseSkill findUniqueOrThrow
   */
  export type CourseSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSkill
     */
    select?: CourseSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSkill
     */
    omit?: CourseSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSkillInclude<ExtArgs> | null
    /**
     * Filter, which CourseSkill to fetch.
     */
    where: CourseSkillWhereUniqueInput
  }

  /**
   * CourseSkill findFirst
   */
  export type CourseSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSkill
     */
    select?: CourseSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSkill
     */
    omit?: CourseSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSkillInclude<ExtArgs> | null
    /**
     * Filter, which CourseSkill to fetch.
     */
    where?: CourseSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseSkills to fetch.
     */
    orderBy?: CourseSkillOrderByWithRelationInput | CourseSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseSkills.
     */
    cursor?: CourseSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseSkills.
     */
    distinct?: CourseSkillScalarFieldEnum | CourseSkillScalarFieldEnum[]
  }

  /**
   * CourseSkill findFirstOrThrow
   */
  export type CourseSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSkill
     */
    select?: CourseSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSkill
     */
    omit?: CourseSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSkillInclude<ExtArgs> | null
    /**
     * Filter, which CourseSkill to fetch.
     */
    where?: CourseSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseSkills to fetch.
     */
    orderBy?: CourseSkillOrderByWithRelationInput | CourseSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseSkills.
     */
    cursor?: CourseSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseSkills.
     */
    distinct?: CourseSkillScalarFieldEnum | CourseSkillScalarFieldEnum[]
  }

  /**
   * CourseSkill findMany
   */
  export type CourseSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSkill
     */
    select?: CourseSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSkill
     */
    omit?: CourseSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSkillInclude<ExtArgs> | null
    /**
     * Filter, which CourseSkills to fetch.
     */
    where?: CourseSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseSkills to fetch.
     */
    orderBy?: CourseSkillOrderByWithRelationInput | CourseSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseSkills.
     */
    cursor?: CourseSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseSkills.
     */
    skip?: number
    distinct?: CourseSkillScalarFieldEnum | CourseSkillScalarFieldEnum[]
  }

  /**
   * CourseSkill create
   */
  export type CourseSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSkill
     */
    select?: CourseSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSkill
     */
    omit?: CourseSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseSkill.
     */
    data: XOR<CourseSkillCreateInput, CourseSkillUncheckedCreateInput>
  }

  /**
   * CourseSkill createMany
   */
  export type CourseSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseSkills.
     */
    data: CourseSkillCreateManyInput | CourseSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseSkill createManyAndReturn
   */
  export type CourseSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSkill
     */
    select?: CourseSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSkill
     */
    omit?: CourseSkillOmit<ExtArgs> | null
    /**
     * The data used to create many CourseSkills.
     */
    data: CourseSkillCreateManyInput | CourseSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseSkill update
   */
  export type CourseSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSkill
     */
    select?: CourseSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSkill
     */
    omit?: CourseSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseSkill.
     */
    data: XOR<CourseSkillUpdateInput, CourseSkillUncheckedUpdateInput>
    /**
     * Choose, which CourseSkill to update.
     */
    where: CourseSkillWhereUniqueInput
  }

  /**
   * CourseSkill updateMany
   */
  export type CourseSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseSkills.
     */
    data: XOR<CourseSkillUpdateManyMutationInput, CourseSkillUncheckedUpdateManyInput>
    /**
     * Filter which CourseSkills to update
     */
    where?: CourseSkillWhereInput
    /**
     * Limit how many CourseSkills to update.
     */
    limit?: number
  }

  /**
   * CourseSkill updateManyAndReturn
   */
  export type CourseSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSkill
     */
    select?: CourseSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSkill
     */
    omit?: CourseSkillOmit<ExtArgs> | null
    /**
     * The data used to update CourseSkills.
     */
    data: XOR<CourseSkillUpdateManyMutationInput, CourseSkillUncheckedUpdateManyInput>
    /**
     * Filter which CourseSkills to update
     */
    where?: CourseSkillWhereInput
    /**
     * Limit how many CourseSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseSkill upsert
   */
  export type CourseSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSkill
     */
    select?: CourseSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSkill
     */
    omit?: CourseSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseSkill to update in case it exists.
     */
    where: CourseSkillWhereUniqueInput
    /**
     * In case the CourseSkill found by the `where` argument doesn't exist, create a new CourseSkill with this data.
     */
    create: XOR<CourseSkillCreateInput, CourseSkillUncheckedCreateInput>
    /**
     * In case the CourseSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseSkillUpdateInput, CourseSkillUncheckedUpdateInput>
  }

  /**
   * CourseSkill delete
   */
  export type CourseSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSkill
     */
    select?: CourseSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSkill
     */
    omit?: CourseSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSkillInclude<ExtArgs> | null
    /**
     * Filter which CourseSkill to delete.
     */
    where: CourseSkillWhereUniqueInput
  }

  /**
   * CourseSkill deleteMany
   */
  export type CourseSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseSkills to delete
     */
    where?: CourseSkillWhereInput
    /**
     * Limit how many CourseSkills to delete.
     */
    limit?: number
  }

  /**
   * CourseSkill without action
   */
  export type CourseSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseSkill
     */
    select?: CourseSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseSkill
     */
    omit?: CourseSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseSkillInclude<ExtArgs> | null
  }


  /**
   * Model Recommendation
   */

  export type AggregateRecommendation = {
    _count: RecommendationCountAggregateOutputType | null
    _avg: RecommendationAvgAggregateOutputType | null
    _sum: RecommendationSumAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  export type RecommendationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    careerId: number | null
    courseId: number | null
    collegeId: number | null
    score: number | null
  }

  export type RecommendationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    careerId: number | null
    courseId: number | null
    collegeId: number | null
    score: number | null
  }

  export type RecommendationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    careerId: number | null
    courseId: number | null
    collegeId: number | null
    score: number | null
    reason: string | null
    recommendedAt: Date | null
  }

  export type RecommendationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    careerId: number | null
    courseId: number | null
    collegeId: number | null
    score: number | null
    reason: string | null
    recommendedAt: Date | null
  }

  export type RecommendationCountAggregateOutputType = {
    id: number
    userId: number
    careerId: number
    courseId: number
    collegeId: number
    score: number
    reason: number
    recommendedAt: number
    _all: number
  }


  export type RecommendationAvgAggregateInputType = {
    id?: true
    userId?: true
    careerId?: true
    courseId?: true
    collegeId?: true
    score?: true
  }

  export type RecommendationSumAggregateInputType = {
    id?: true
    userId?: true
    careerId?: true
    courseId?: true
    collegeId?: true
    score?: true
  }

  export type RecommendationMinAggregateInputType = {
    id?: true
    userId?: true
    careerId?: true
    courseId?: true
    collegeId?: true
    score?: true
    reason?: true
    recommendedAt?: true
  }

  export type RecommendationMaxAggregateInputType = {
    id?: true
    userId?: true
    careerId?: true
    courseId?: true
    collegeId?: true
    score?: true
    reason?: true
    recommendedAt?: true
  }

  export type RecommendationCountAggregateInputType = {
    id?: true
    userId?: true
    careerId?: true
    courseId?: true
    collegeId?: true
    score?: true
    reason?: true
    recommendedAt?: true
    _all?: true
  }

  export type RecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendation to aggregate.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recommendations
    **/
    _count?: true | RecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecommendationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecommendationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendationMaxAggregateInputType
  }

  export type GetRecommendationAggregateType<T extends RecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendation[P]>
      : GetScalarType<T[P], AggregateRecommendation[P]>
  }




  export type RecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithAggregationInput | RecommendationOrderByWithAggregationInput[]
    by: RecommendationScalarFieldEnum[] | RecommendationScalarFieldEnum
    having?: RecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendationCountAggregateInputType | true
    _avg?: RecommendationAvgAggregateInputType
    _sum?: RecommendationSumAggregateInputType
    _min?: RecommendationMinAggregateInputType
    _max?: RecommendationMaxAggregateInputType
  }

  export type RecommendationGroupByOutputType = {
    id: number
    userId: number
    careerId: number | null
    courseId: number | null
    collegeId: number | null
    score: number | null
    reason: string | null
    recommendedAt: Date
    _count: RecommendationCountAggregateOutputType | null
    _avg: RecommendationAvgAggregateOutputType | null
    _sum: RecommendationSumAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  type GetRecommendationGroupByPayload<T extends RecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
        }
      >
    >


  export type RecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    careerId?: boolean
    courseId?: boolean
    collegeId?: boolean
    score?: boolean
    reason?: boolean
    recommendedAt?: boolean
    career?: boolean | Recommendation$careerArgs<ExtArgs>
    college?: boolean | Recommendation$collegeArgs<ExtArgs>
    course?: boolean | Recommendation$courseArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    careerId?: boolean
    courseId?: boolean
    collegeId?: boolean
    score?: boolean
    reason?: boolean
    recommendedAt?: boolean
    career?: boolean | Recommendation$careerArgs<ExtArgs>
    college?: boolean | Recommendation$collegeArgs<ExtArgs>
    course?: boolean | Recommendation$courseArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    careerId?: boolean
    courseId?: boolean
    collegeId?: boolean
    score?: boolean
    reason?: boolean
    recommendedAt?: boolean
    career?: boolean | Recommendation$careerArgs<ExtArgs>
    college?: boolean | Recommendation$collegeArgs<ExtArgs>
    course?: boolean | Recommendation$courseArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectScalar = {
    id?: boolean
    userId?: boolean
    careerId?: boolean
    courseId?: boolean
    collegeId?: boolean
    score?: boolean
    reason?: boolean
    recommendedAt?: boolean
  }

  export type RecommendationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "careerId" | "courseId" | "collegeId" | "score" | "reason" | "recommendedAt", ExtArgs["result"]["recommendation"]>
  export type RecommendationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | Recommendation$careerArgs<ExtArgs>
    college?: boolean | Recommendation$collegeArgs<ExtArgs>
    course?: boolean | Recommendation$courseArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecommendationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | Recommendation$careerArgs<ExtArgs>
    college?: boolean | Recommendation$collegeArgs<ExtArgs>
    course?: boolean | Recommendation$courseArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecommendationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    career?: boolean | Recommendation$careerArgs<ExtArgs>
    college?: boolean | Recommendation$collegeArgs<ExtArgs>
    course?: boolean | Recommendation$courseArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recommendation"
    objects: {
      career: Prisma.$CareerPayload<ExtArgs> | null
      college: Prisma.$CollegePayload<ExtArgs> | null
      course: Prisma.$CoursePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      careerId: number | null
      courseId: number | null
      collegeId: number | null
      score: number | null
      reason: string | null
      recommendedAt: Date
    }, ExtArgs["result"]["recommendation"]>
    composites: {}
  }

  type RecommendationGetPayload<S extends boolean | null | undefined | RecommendationDefaultArgs> = $Result.GetResult<Prisma.$RecommendationPayload, S>

  type RecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecommendationCountAggregateInputType | true
    }

  export interface RecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recommendation'], meta: { name: 'Recommendation' } }
    /**
     * Find zero or one Recommendation that matches the filter.
     * @param {RecommendationFindUniqueArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationFindUniqueArgs>(args: SelectSubset<T, RecommendationFindUniqueArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recommendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecommendationFindUniqueOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationFindFirstArgs>(args?: SelectSubset<T, RecommendationFindFirstArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommendations
     * const recommendations = await prisma.recommendation.findMany()
     * 
     * // Get first 10 Recommendations
     * const recommendations = await prisma.recommendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecommendationFindManyArgs>(args?: SelectSubset<T, RecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recommendation.
     * @param {RecommendationCreateArgs} args - Arguments to create a Recommendation.
     * @example
     * // Create one Recommendation
     * const Recommendation = await prisma.recommendation.create({
     *   data: {
     *     // ... data to create a Recommendation
     *   }
     * })
     * 
     */
    create<T extends RecommendationCreateArgs>(args: SelectSubset<T, RecommendationCreateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recommendations.
     * @param {RecommendationCreateManyArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendationCreateManyArgs>(args?: SelectSubset<T, RecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recommendations and returns the data saved in the database.
     * @param {RecommendationCreateManyAndReturnArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recommendations and only return the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recommendation.
     * @param {RecommendationDeleteArgs} args - Arguments to delete one Recommendation.
     * @example
     * // Delete one Recommendation
     * const Recommendation = await prisma.recommendation.delete({
     *   where: {
     *     // ... filter to delete one Recommendation
     *   }
     * })
     * 
     */
    delete<T extends RecommendationDeleteArgs>(args: SelectSubset<T, RecommendationDeleteArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recommendation.
     * @param {RecommendationUpdateArgs} args - Arguments to update one Recommendation.
     * @example
     * // Update one Recommendation
     * const recommendation = await prisma.recommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendationUpdateArgs>(args: SelectSubset<T, RecommendationUpdateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recommendations.
     * @param {RecommendationDeleteManyArgs} args - Arguments to filter Recommendations to delete.
     * @example
     * // Delete a few Recommendations
     * const { count } = await prisma.recommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendationDeleteManyArgs>(args?: SelectSubset<T, RecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommendations
     * const recommendation = await prisma.recommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendationUpdateManyArgs>(args: SelectSubset<T, RecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations and returns the data updated in the database.
     * @param {RecommendationUpdateManyAndReturnArgs} args - Arguments to update many Recommendations.
     * @example
     * // Update many Recommendations
     * const recommendation = await prisma.recommendation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recommendations and only return the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecommendationUpdateManyAndReturnArgs>(args: SelectSubset<T, RecommendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recommendation.
     * @param {RecommendationUpsertArgs} args - Arguments to update or create a Recommendation.
     * @example
     * // Update or create a Recommendation
     * const recommendation = await prisma.recommendation.upsert({
     *   create: {
     *     // ... data to create a Recommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommendation we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationUpsertArgs>(args: SelectSubset<T, RecommendationUpsertArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationCountArgs} args - Arguments to filter Recommendations to count.
     * @example
     * // Count the number of Recommendations
     * const count = await prisma.recommendation.count({
     *   where: {
     *     // ... the filter for the Recommendations we want to count
     *   }
     * })
    **/
    count<T extends RecommendationCountArgs>(
      args?: Subset<T, RecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecommendationAggregateArgs>(args: Subset<T, RecommendationAggregateArgs>): Prisma.PrismaPromise<GetRecommendationAggregateType<T>>

    /**
     * Group by Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationGroupByArgs} args - Group by arguments.
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
      T extends RecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recommendation model
   */
  readonly fields: RecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    career<T extends Recommendation$careerArgs<ExtArgs> = {}>(args?: Subset<T, Recommendation$careerArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    college<T extends Recommendation$collegeArgs<ExtArgs> = {}>(args?: Subset<T, Recommendation$collegeArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    course<T extends Recommendation$courseArgs<ExtArgs> = {}>(args?: Subset<T, Recommendation$courseArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recommendation model
   */
  interface RecommendationFieldRefs {
    readonly id: FieldRef<"Recommendation", 'Int'>
    readonly userId: FieldRef<"Recommendation", 'Int'>
    readonly careerId: FieldRef<"Recommendation", 'Int'>
    readonly courseId: FieldRef<"Recommendation", 'Int'>
    readonly collegeId: FieldRef<"Recommendation", 'Int'>
    readonly score: FieldRef<"Recommendation", 'Float'>
    readonly reason: FieldRef<"Recommendation", 'String'>
    readonly recommendedAt: FieldRef<"Recommendation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recommendation findUnique
   */
  export type RecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findUniqueOrThrow
   */
  export type RecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findFirst
   */
  export type RecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findFirstOrThrow
   */
  export type RecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findMany
   */
  export type RecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation create
   */
  export type RecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The data needed to create a Recommendation.
     */
    data: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
  }

  /**
   * Recommendation createMany
   */
  export type RecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recommendation createManyAndReturn
   */
  export type RecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recommendation update
   */
  export type RecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The data needed to update a Recommendation.
     */
    data: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
    /**
     * Choose, which Recommendation to update.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation updateMany
   */
  export type RecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to update.
     */
    limit?: number
  }

  /**
   * Recommendation updateManyAndReturn
   */
  export type RecommendationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recommendation upsert
   */
  export type RecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The filter to search for the Recommendation to update in case it exists.
     */
    where: RecommendationWhereUniqueInput
    /**
     * In case the Recommendation found by the `where` argument doesn't exist, create a new Recommendation with this data.
     */
    create: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
    /**
     * In case the Recommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
  }

  /**
   * Recommendation delete
   */
  export type RecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter which Recommendation to delete.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation deleteMany
   */
  export type RecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendations to delete
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to delete.
     */
    limit?: number
  }

  /**
   * Recommendation.career
   */
  export type Recommendation$careerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    where?: CareerWhereInput
  }

  /**
   * Recommendation.college
   */
  export type Recommendation$collegeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    where?: CollegeWhereInput
  }

  /**
   * Recommendation.course
   */
  export type Recommendation$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
  }

  /**
   * Recommendation without action
   */
  export type RecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    dob: 'dob',
    educationLevel: 'educationLevel',
    gender: 'gender',
    interests: 'interests',
    location: 'location',
    skills: 'skills'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AssessmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    testType: 'testType',
    score: 'score',
    stream: 'stream',
    strengths: 'strengths',
    weaknesses: 'weaknesses',
    createdAt: 'createdAt'
  };

  export type AssessmentScalarFieldEnum = (typeof AssessmentScalarFieldEnum)[keyof typeof AssessmentScalarFieldEnum]


  export const CareerScalarFieldEnum: {
    id: 'id',
    careerName: 'careerName',
    description: 'description',
    requiredSkills: 'requiredSkills',
    requiredStream: 'requiredStream',
    futureScope: 'futureScope'
  };

  export type CareerScalarFieldEnum = (typeof CareerScalarFieldEnum)[keyof typeof CareerScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    courseName: 'courseName',
    stream: 'stream',
    duration: 'duration',
    eligibility: 'eligibility',
    careerId: 'careerId'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CollegeScalarFieldEnum: {
    id: 'id',
    collegeName: 'collegeName',
    location: 'location',
    affiliation: 'affiliation'
  };

  export type CollegeScalarFieldEnum = (typeof CollegeScalarFieldEnum)[keyof typeof CollegeScalarFieldEnum]


  export const CollegeCourseScalarFieldEnum: {
    id: 'id',
    collegeId: 'collegeId',
    courseId: 'courseId'
  };

  export type CollegeCourseScalarFieldEnum = (typeof CollegeCourseScalarFieldEnum)[keyof typeof CollegeCourseScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    skillName: 'skillName'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const CareerSkillScalarFieldEnum: {
    id: 'id',
    careerId: 'careerId',
    skillId: 'skillId'
  };

  export type CareerSkillScalarFieldEnum = (typeof CareerSkillScalarFieldEnum)[keyof typeof CareerSkillScalarFieldEnum]


  export const CourseSkillScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    skillId: 'skillId'
  };

  export type CourseSkillScalarFieldEnum = (typeof CourseSkillScalarFieldEnum)[keyof typeof CourseSkillScalarFieldEnum]


  export const RecommendationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    careerId: 'careerId',
    courseId: 'courseId',
    collegeId: 'collegeId',
    score: 'score',
    reason: 'reason',
    recommendedAt: 'recommendedAt'
  };

  export type RecommendationScalarFieldEnum = (typeof RecommendationScalarFieldEnum)[keyof typeof RecommendationScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    educationLevel?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    interests?: StringNullableListFilter<"User">
    location?: StringNullableFilter<"User"> | string | null
    skills?: StringNullableListFilter<"User">
    assessments?: AssessmentListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    educationLevel?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    interests?: SortOrder
    location?: SortOrderInput | SortOrder
    skills?: SortOrder
    assessments?: AssessmentOrderByRelationAggregateInput
    recommendations?: RecommendationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    educationLevel?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    interests?: StringNullableListFilter<"User">
    location?: StringNullableFilter<"User"> | string | null
    skills?: StringNullableListFilter<"User">
    assessments?: AssessmentListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    educationLevel?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    interests?: SortOrder
    location?: SortOrderInput | SortOrder
    skills?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    dob?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    educationLevel?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    interests?: StringNullableListFilter<"User">
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    skills?: StringNullableListFilter<"User">
  }

  export type AssessmentWhereInput = {
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    id?: IntFilter<"Assessment"> | number
    userId?: IntFilter<"Assessment"> | number
    testType?: StringNullableFilter<"Assessment"> | string | null
    score?: FloatNullableFilter<"Assessment"> | number | null
    stream?: StringNullableFilter<"Assessment"> | string | null
    strengths?: StringNullableListFilter<"Assessment">
    weaknesses?: StringNullableListFilter<"Assessment">
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AssessmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    testType?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    stream?: SortOrderInput | SortOrder
    strengths?: SortOrder
    weaknesses?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    userId?: IntFilter<"Assessment"> | number
    testType?: StringNullableFilter<"Assessment"> | string | null
    score?: FloatNullableFilter<"Assessment"> | number | null
    stream?: StringNullableFilter<"Assessment"> | string | null
    strengths?: StringNullableListFilter<"Assessment">
    weaknesses?: StringNullableListFilter<"Assessment">
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AssessmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    testType?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    stream?: SortOrderInput | SortOrder
    strengths?: SortOrder
    weaknesses?: SortOrder
    createdAt?: SortOrder
    _count?: AssessmentCountOrderByAggregateInput
    _avg?: AssessmentAvgOrderByAggregateInput
    _max?: AssessmentMaxOrderByAggregateInput
    _min?: AssessmentMinOrderByAggregateInput
    _sum?: AssessmentSumOrderByAggregateInput
  }

  export type AssessmentScalarWhereWithAggregatesInput = {
    AND?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    OR?: AssessmentScalarWhereWithAggregatesInput[]
    NOT?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Assessment"> | number
    userId?: IntWithAggregatesFilter<"Assessment"> | number
    testType?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
    score?: FloatNullableWithAggregatesFilter<"Assessment"> | number | null
    stream?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
    strengths?: StringNullableListFilter<"Assessment">
    weaknesses?: StringNullableListFilter<"Assessment">
    createdAt?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
  }

  export type CareerWhereInput = {
    AND?: CareerWhereInput | CareerWhereInput[]
    OR?: CareerWhereInput[]
    NOT?: CareerWhereInput | CareerWhereInput[]
    id?: IntFilter<"Career"> | number
    careerName?: StringFilter<"Career"> | string
    description?: StringNullableFilter<"Career"> | string | null
    requiredSkills?: StringNullableListFilter<"Career">
    requiredStream?: StringNullableFilter<"Career"> | string | null
    futureScope?: StringNullableFilter<"Career"> | string | null
    careerSkills?: CareerSkillListRelationFilter
    courses?: CourseListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }

  export type CareerOrderByWithRelationInput = {
    id?: SortOrder
    careerName?: SortOrder
    description?: SortOrderInput | SortOrder
    requiredSkills?: SortOrder
    requiredStream?: SortOrderInput | SortOrder
    futureScope?: SortOrderInput | SortOrder
    careerSkills?: CareerSkillOrderByRelationAggregateInput
    courses?: CourseOrderByRelationAggregateInput
    recommendations?: RecommendationOrderByRelationAggregateInput
  }

  export type CareerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    careerName?: string
    AND?: CareerWhereInput | CareerWhereInput[]
    OR?: CareerWhereInput[]
    NOT?: CareerWhereInput | CareerWhereInput[]
    description?: StringNullableFilter<"Career"> | string | null
    requiredSkills?: StringNullableListFilter<"Career">
    requiredStream?: StringNullableFilter<"Career"> | string | null
    futureScope?: StringNullableFilter<"Career"> | string | null
    careerSkills?: CareerSkillListRelationFilter
    courses?: CourseListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }, "id" | "careerName">

  export type CareerOrderByWithAggregationInput = {
    id?: SortOrder
    careerName?: SortOrder
    description?: SortOrderInput | SortOrder
    requiredSkills?: SortOrder
    requiredStream?: SortOrderInput | SortOrder
    futureScope?: SortOrderInput | SortOrder
    _count?: CareerCountOrderByAggregateInput
    _avg?: CareerAvgOrderByAggregateInput
    _max?: CareerMaxOrderByAggregateInput
    _min?: CareerMinOrderByAggregateInput
    _sum?: CareerSumOrderByAggregateInput
  }

  export type CareerScalarWhereWithAggregatesInput = {
    AND?: CareerScalarWhereWithAggregatesInput | CareerScalarWhereWithAggregatesInput[]
    OR?: CareerScalarWhereWithAggregatesInput[]
    NOT?: CareerScalarWhereWithAggregatesInput | CareerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Career"> | number
    careerName?: StringWithAggregatesFilter<"Career"> | string
    description?: StringNullableWithAggregatesFilter<"Career"> | string | null
    requiredSkills?: StringNullableListFilter<"Career">
    requiredStream?: StringNullableWithAggregatesFilter<"Career"> | string | null
    futureScope?: StringNullableWithAggregatesFilter<"Career"> | string | null
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    courseName?: StringFilter<"Course"> | string
    stream?: StringNullableFilter<"Course"> | string | null
    duration?: StringNullableFilter<"Course"> | string | null
    eligibility?: StringNullableFilter<"Course"> | string | null
    careerId?: IntNullableFilter<"Course"> | number | null
    collegeCourses?: CollegeCourseListRelationFilter
    career?: XOR<CareerNullableScalarRelationFilter, CareerWhereInput> | null
    courseSkills?: CourseSkillListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    courseName?: SortOrder
    stream?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    eligibility?: SortOrderInput | SortOrder
    careerId?: SortOrderInput | SortOrder
    collegeCourses?: CollegeCourseOrderByRelationAggregateInput
    career?: CareerOrderByWithRelationInput
    courseSkills?: CourseSkillOrderByRelationAggregateInput
    recommendations?: RecommendationOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    courseName?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    stream?: StringNullableFilter<"Course"> | string | null
    duration?: StringNullableFilter<"Course"> | string | null
    eligibility?: StringNullableFilter<"Course"> | string | null
    careerId?: IntNullableFilter<"Course"> | number | null
    collegeCourses?: CollegeCourseListRelationFilter
    career?: XOR<CareerNullableScalarRelationFilter, CareerWhereInput> | null
    courseSkills?: CourseSkillListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }, "id" | "courseName">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    courseName?: SortOrder
    stream?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    eligibility?: SortOrderInput | SortOrder
    careerId?: SortOrderInput | SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    courseName?: StringWithAggregatesFilter<"Course"> | string
    stream?: StringNullableWithAggregatesFilter<"Course"> | string | null
    duration?: StringNullableWithAggregatesFilter<"Course"> | string | null
    eligibility?: StringNullableWithAggregatesFilter<"Course"> | string | null
    careerId?: IntNullableWithAggregatesFilter<"Course"> | number | null
  }

  export type CollegeWhereInput = {
    AND?: CollegeWhereInput | CollegeWhereInput[]
    OR?: CollegeWhereInput[]
    NOT?: CollegeWhereInput | CollegeWhereInput[]
    id?: IntFilter<"College"> | number
    collegeName?: StringFilter<"College"> | string
    location?: StringNullableFilter<"College"> | string | null
    affiliation?: StringNullableFilter<"College"> | string | null
    collegeCourses?: CollegeCourseListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }

  export type CollegeOrderByWithRelationInput = {
    id?: SortOrder
    collegeName?: SortOrder
    location?: SortOrderInput | SortOrder
    affiliation?: SortOrderInput | SortOrder
    collegeCourses?: CollegeCourseOrderByRelationAggregateInput
    recommendations?: RecommendationOrderByRelationAggregateInput
  }

  export type CollegeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CollegeWhereInput | CollegeWhereInput[]
    OR?: CollegeWhereInput[]
    NOT?: CollegeWhereInput | CollegeWhereInput[]
    collegeName?: StringFilter<"College"> | string
    location?: StringNullableFilter<"College"> | string | null
    affiliation?: StringNullableFilter<"College"> | string | null
    collegeCourses?: CollegeCourseListRelationFilter
    recommendations?: RecommendationListRelationFilter
  }, "id">

  export type CollegeOrderByWithAggregationInput = {
    id?: SortOrder
    collegeName?: SortOrder
    location?: SortOrderInput | SortOrder
    affiliation?: SortOrderInput | SortOrder
    _count?: CollegeCountOrderByAggregateInput
    _avg?: CollegeAvgOrderByAggregateInput
    _max?: CollegeMaxOrderByAggregateInput
    _min?: CollegeMinOrderByAggregateInput
    _sum?: CollegeSumOrderByAggregateInput
  }

  export type CollegeScalarWhereWithAggregatesInput = {
    AND?: CollegeScalarWhereWithAggregatesInput | CollegeScalarWhereWithAggregatesInput[]
    OR?: CollegeScalarWhereWithAggregatesInput[]
    NOT?: CollegeScalarWhereWithAggregatesInput | CollegeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"College"> | number
    collegeName?: StringWithAggregatesFilter<"College"> | string
    location?: StringNullableWithAggregatesFilter<"College"> | string | null
    affiliation?: StringNullableWithAggregatesFilter<"College"> | string | null
  }

  export type CollegeCourseWhereInput = {
    AND?: CollegeCourseWhereInput | CollegeCourseWhereInput[]
    OR?: CollegeCourseWhereInput[]
    NOT?: CollegeCourseWhereInput | CollegeCourseWhereInput[]
    id?: IntFilter<"CollegeCourse"> | number
    collegeId?: IntFilter<"CollegeCourse"> | number
    courseId?: IntFilter<"CollegeCourse"> | number
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CollegeCourseOrderByWithRelationInput = {
    id?: SortOrder
    collegeId?: SortOrder
    courseId?: SortOrder
    college?: CollegeOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type CollegeCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    collegeId_courseId?: CollegeCourseCollegeIdCourseIdCompoundUniqueInput
    AND?: CollegeCourseWhereInput | CollegeCourseWhereInput[]
    OR?: CollegeCourseWhereInput[]
    NOT?: CollegeCourseWhereInput | CollegeCourseWhereInput[]
    collegeId?: IntFilter<"CollegeCourse"> | number
    courseId?: IntFilter<"CollegeCourse"> | number
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "collegeId_courseId">

  export type CollegeCourseOrderByWithAggregationInput = {
    id?: SortOrder
    collegeId?: SortOrder
    courseId?: SortOrder
    _count?: CollegeCourseCountOrderByAggregateInput
    _avg?: CollegeCourseAvgOrderByAggregateInput
    _max?: CollegeCourseMaxOrderByAggregateInput
    _min?: CollegeCourseMinOrderByAggregateInput
    _sum?: CollegeCourseSumOrderByAggregateInput
  }

  export type CollegeCourseScalarWhereWithAggregatesInput = {
    AND?: CollegeCourseScalarWhereWithAggregatesInput | CollegeCourseScalarWhereWithAggregatesInput[]
    OR?: CollegeCourseScalarWhereWithAggregatesInput[]
    NOT?: CollegeCourseScalarWhereWithAggregatesInput | CollegeCourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CollegeCourse"> | number
    collegeId?: IntWithAggregatesFilter<"CollegeCourse"> | number
    courseId?: IntWithAggregatesFilter<"CollegeCourse"> | number
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: IntFilter<"Skill"> | number
    skillName?: StringFilter<"Skill"> | string
    careerSkills?: CareerSkillListRelationFilter
    courseSkills?: CourseSkillListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    skillName?: SortOrder
    careerSkills?: CareerSkillOrderByRelationAggregateInput
    courseSkills?: CourseSkillOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    skillName?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    careerSkills?: CareerSkillListRelationFilter
    courseSkills?: CourseSkillListRelationFilter
  }, "id" | "skillName">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    skillName?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Skill"> | number
    skillName?: StringWithAggregatesFilter<"Skill"> | string
  }

  export type CareerSkillWhereInput = {
    AND?: CareerSkillWhereInput | CareerSkillWhereInput[]
    OR?: CareerSkillWhereInput[]
    NOT?: CareerSkillWhereInput | CareerSkillWhereInput[]
    id?: IntFilter<"CareerSkill"> | number
    careerId?: IntFilter<"CareerSkill"> | number
    skillId?: IntFilter<"CareerSkill"> | number
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }

  export type CareerSkillOrderByWithRelationInput = {
    id?: SortOrder
    careerId?: SortOrder
    skillId?: SortOrder
    career?: CareerOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type CareerSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    careerId_skillId?: CareerSkillCareerIdSkillIdCompoundUniqueInput
    AND?: CareerSkillWhereInput | CareerSkillWhereInput[]
    OR?: CareerSkillWhereInput[]
    NOT?: CareerSkillWhereInput | CareerSkillWhereInput[]
    careerId?: IntFilter<"CareerSkill"> | number
    skillId?: IntFilter<"CareerSkill"> | number
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }, "id" | "careerId_skillId">

  export type CareerSkillOrderByWithAggregationInput = {
    id?: SortOrder
    careerId?: SortOrder
    skillId?: SortOrder
    _count?: CareerSkillCountOrderByAggregateInput
    _avg?: CareerSkillAvgOrderByAggregateInput
    _max?: CareerSkillMaxOrderByAggregateInput
    _min?: CareerSkillMinOrderByAggregateInput
    _sum?: CareerSkillSumOrderByAggregateInput
  }

  export type CareerSkillScalarWhereWithAggregatesInput = {
    AND?: CareerSkillScalarWhereWithAggregatesInput | CareerSkillScalarWhereWithAggregatesInput[]
    OR?: CareerSkillScalarWhereWithAggregatesInput[]
    NOT?: CareerSkillScalarWhereWithAggregatesInput | CareerSkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CareerSkill"> | number
    careerId?: IntWithAggregatesFilter<"CareerSkill"> | number
    skillId?: IntWithAggregatesFilter<"CareerSkill"> | number
  }

  export type CourseSkillWhereInput = {
    AND?: CourseSkillWhereInput | CourseSkillWhereInput[]
    OR?: CourseSkillWhereInput[]
    NOT?: CourseSkillWhereInput | CourseSkillWhereInput[]
    id?: IntFilter<"CourseSkill"> | number
    courseId?: IntFilter<"CourseSkill"> | number
    skillId?: IntFilter<"CourseSkill"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }

  export type CourseSkillOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    skillId?: SortOrder
    course?: CourseOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type CourseSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    courseId_skillId?: CourseSkillCourseIdSkillIdCompoundUniqueInput
    AND?: CourseSkillWhereInput | CourseSkillWhereInput[]
    OR?: CourseSkillWhereInput[]
    NOT?: CourseSkillWhereInput | CourseSkillWhereInput[]
    courseId?: IntFilter<"CourseSkill"> | number
    skillId?: IntFilter<"CourseSkill"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }, "id" | "courseId_skillId">

  export type CourseSkillOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    skillId?: SortOrder
    _count?: CourseSkillCountOrderByAggregateInput
    _avg?: CourseSkillAvgOrderByAggregateInput
    _max?: CourseSkillMaxOrderByAggregateInput
    _min?: CourseSkillMinOrderByAggregateInput
    _sum?: CourseSkillSumOrderByAggregateInput
  }

  export type CourseSkillScalarWhereWithAggregatesInput = {
    AND?: CourseSkillScalarWhereWithAggregatesInput | CourseSkillScalarWhereWithAggregatesInput[]
    OR?: CourseSkillScalarWhereWithAggregatesInput[]
    NOT?: CourseSkillScalarWhereWithAggregatesInput | CourseSkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CourseSkill"> | number
    courseId?: IntWithAggregatesFilter<"CourseSkill"> | number
    skillId?: IntWithAggregatesFilter<"CourseSkill"> | number
  }

  export type RecommendationWhereInput = {
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    id?: IntFilter<"Recommendation"> | number
    userId?: IntFilter<"Recommendation"> | number
    careerId?: IntNullableFilter<"Recommendation"> | number | null
    courseId?: IntNullableFilter<"Recommendation"> | number | null
    collegeId?: IntNullableFilter<"Recommendation"> | number | null
    score?: FloatNullableFilter<"Recommendation"> | number | null
    reason?: StringNullableFilter<"Recommendation"> | string | null
    recommendedAt?: DateTimeFilter<"Recommendation"> | Date | string
    career?: XOR<CareerNullableScalarRelationFilter, CareerWhereInput> | null
    college?: XOR<CollegeNullableScalarRelationFilter, CollegeWhereInput> | null
    course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RecommendationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrderInput | SortOrder
    courseId?: SortOrderInput | SortOrder
    collegeId?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    recommendedAt?: SortOrder
    career?: CareerOrderByWithRelationInput
    college?: CollegeOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    userId?: IntFilter<"Recommendation"> | number
    careerId?: IntNullableFilter<"Recommendation"> | number | null
    courseId?: IntNullableFilter<"Recommendation"> | number | null
    collegeId?: IntNullableFilter<"Recommendation"> | number | null
    score?: FloatNullableFilter<"Recommendation"> | number | null
    reason?: StringNullableFilter<"Recommendation"> | string | null
    recommendedAt?: DateTimeFilter<"Recommendation"> | Date | string
    career?: XOR<CareerNullableScalarRelationFilter, CareerWhereInput> | null
    college?: XOR<CollegeNullableScalarRelationFilter, CollegeWhereInput> | null
    course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RecommendationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrderInput | SortOrder
    courseId?: SortOrderInput | SortOrder
    collegeId?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    recommendedAt?: SortOrder
    _count?: RecommendationCountOrderByAggregateInput
    _avg?: RecommendationAvgOrderByAggregateInput
    _max?: RecommendationMaxOrderByAggregateInput
    _min?: RecommendationMinOrderByAggregateInput
    _sum?: RecommendationSumOrderByAggregateInput
  }

  export type RecommendationScalarWhereWithAggregatesInput = {
    AND?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    OR?: RecommendationScalarWhereWithAggregatesInput[]
    NOT?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recommendation"> | number
    userId?: IntWithAggregatesFilter<"Recommendation"> | number
    careerId?: IntNullableWithAggregatesFilter<"Recommendation"> | number | null
    courseId?: IntNullableWithAggregatesFilter<"Recommendation"> | number | null
    collegeId?: IntNullableWithAggregatesFilter<"Recommendation"> | number | null
    score?: FloatNullableWithAggregatesFilter<"Recommendation"> | number | null
    reason?: StringNullableWithAggregatesFilter<"Recommendation"> | string | null
    recommendedAt?: DateTimeWithAggregatesFilter<"Recommendation"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    dob?: Date | string | null
    educationLevel?: string | null
    gender?: string | null
    interests?: UserCreateinterestsInput | string[]
    location?: string | null
    skills?: UserCreateskillsInput | string[]
    assessments?: AssessmentCreateNestedManyWithoutUserInput
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    dob?: Date | string | null
    educationLevel?: string | null
    gender?: string | null
    interests?: UserCreateinterestsInput | string[]
    location?: string | null
    skills?: UserCreateskillsInput | string[]
    assessments?: AssessmentUncheckedCreateNestedManyWithoutUserInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    assessments?: AssessmentUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    assessments?: AssessmentUncheckedUpdateManyWithoutUserNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    dob?: Date | string | null
    educationLevel?: string | null
    gender?: string | null
    interests?: UserCreateinterestsInput | string[]
    location?: string | null
    skills?: UserCreateskillsInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
  }

  export type AssessmentCreateInput = {
    testType?: string | null
    score?: number | null
    stream?: string | null
    strengths?: AssessmentCreatestrengthsInput | string[]
    weaknesses?: AssessmentCreateweaknessesInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAssessmentsInput
  }

  export type AssessmentUncheckedCreateInput = {
    id?: number
    userId: number
    testType?: string | null
    score?: number | null
    stream?: string | null
    strengths?: AssessmentCreatestrengthsInput | string[]
    weaknesses?: AssessmentCreateweaknessesInput | string[]
    createdAt?: Date | string
  }

  export type AssessmentUpdateInput = {
    testType?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: AssessmentUpdatestrengthsInput | string[]
    weaknesses?: AssessmentUpdateweaknessesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAssessmentsNestedInput
  }

  export type AssessmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    testType?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: AssessmentUpdatestrengthsInput | string[]
    weaknesses?: AssessmentUpdateweaknessesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentCreateManyInput = {
    id?: number
    userId: number
    testType?: string | null
    score?: number | null
    stream?: string | null
    strengths?: AssessmentCreatestrengthsInput | string[]
    weaknesses?: AssessmentCreateweaknessesInput | string[]
    createdAt?: Date | string
  }

  export type AssessmentUpdateManyMutationInput = {
    testType?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: AssessmentUpdatestrengthsInput | string[]
    weaknesses?: AssessmentUpdateweaknessesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    testType?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: AssessmentUpdatestrengthsInput | string[]
    weaknesses?: AssessmentUpdateweaknessesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerCreateInput = {
    careerName: string
    description?: string | null
    requiredSkills?: CareerCreaterequiredSkillsInput | string[]
    requiredStream?: string | null
    futureScope?: string | null
    careerSkills?: CareerSkillCreateNestedManyWithoutCareerInput
    courses?: CourseCreateNestedManyWithoutCareerInput
    recommendations?: RecommendationCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateInput = {
    id?: number
    careerName: string
    description?: string | null
    requiredSkills?: CareerCreaterequiredSkillsInput | string[]
    requiredStream?: string | null
    futureScope?: string | null
    careerSkills?: CareerSkillUncheckedCreateNestedManyWithoutCareerInput
    courses?: CourseUncheckedCreateNestedManyWithoutCareerInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerUpdateInput = {
    careerName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: CareerUpdaterequiredSkillsInput | string[]
    requiredStream?: NullableStringFieldUpdateOperationsInput | string | null
    futureScope?: NullableStringFieldUpdateOperationsInput | string | null
    careerSkills?: CareerSkillUpdateManyWithoutCareerNestedInput
    courses?: CourseUpdateManyWithoutCareerNestedInput
    recommendations?: RecommendationUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    careerName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: CareerUpdaterequiredSkillsInput | string[]
    requiredStream?: NullableStringFieldUpdateOperationsInput | string | null
    futureScope?: NullableStringFieldUpdateOperationsInput | string | null
    careerSkills?: CareerSkillUncheckedUpdateManyWithoutCareerNestedInput
    courses?: CourseUncheckedUpdateManyWithoutCareerNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type CareerCreateManyInput = {
    id?: number
    careerName: string
    description?: string | null
    requiredSkills?: CareerCreaterequiredSkillsInput | string[]
    requiredStream?: string | null
    futureScope?: string | null
  }

  export type CareerUpdateManyMutationInput = {
    careerName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: CareerUpdaterequiredSkillsInput | string[]
    requiredStream?: NullableStringFieldUpdateOperationsInput | string | null
    futureScope?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CareerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    careerName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: CareerUpdaterequiredSkillsInput | string[]
    requiredStream?: NullableStringFieldUpdateOperationsInput | string | null
    futureScope?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseCreateInput = {
    courseName: string
    stream?: string | null
    duration?: string | null
    eligibility?: string | null
    collegeCourses?: CollegeCourseCreateNestedManyWithoutCourseInput
    career?: CareerCreateNestedOneWithoutCoursesInput
    courseSkills?: CourseSkillCreateNestedManyWithoutCourseInput
    recommendations?: RecommendationCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    courseName: string
    stream?: string | null
    duration?: string | null
    eligibility?: string | null
    careerId?: number | null
    collegeCourses?: CollegeCourseUncheckedCreateNestedManyWithoutCourseInput
    courseSkills?: CourseSkillUncheckedCreateNestedManyWithoutCourseInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    courseName?: StringFieldUpdateOperationsInput | string
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility?: NullableStringFieldUpdateOperationsInput | string | null
    collegeCourses?: CollegeCourseUpdateManyWithoutCourseNestedInput
    career?: CareerUpdateOneWithoutCoursesNestedInput
    courseSkills?: CourseSkillUpdateManyWithoutCourseNestedInput
    recommendations?: RecommendationUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility?: NullableStringFieldUpdateOperationsInput | string | null
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
    collegeCourses?: CollegeCourseUncheckedUpdateManyWithoutCourseNestedInput
    courseSkills?: CourseSkillUncheckedUpdateManyWithoutCourseNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    courseName: string
    stream?: string | null
    duration?: string | null
    eligibility?: string | null
    careerId?: number | null
  }

  export type CourseUpdateManyMutationInput = {
    courseName?: StringFieldUpdateOperationsInput | string
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility?: NullableStringFieldUpdateOperationsInput | string | null
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CollegeCreateInput = {
    collegeName: string
    location?: string | null
    affiliation?: string | null
    collegeCourses?: CollegeCourseCreateNestedManyWithoutCollegeInput
    recommendations?: RecommendationCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateInput = {
    id?: number
    collegeName: string
    location?: string | null
    affiliation?: string | null
    collegeCourses?: CollegeCourseUncheckedCreateNestedManyWithoutCollegeInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUpdateInput = {
    collegeName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    collegeCourses?: CollegeCourseUpdateManyWithoutCollegeNestedInput
    recommendations?: RecommendationUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    collegeName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    collegeCourses?: CollegeCourseUncheckedUpdateManyWithoutCollegeNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeCreateManyInput = {
    id?: number
    collegeName: string
    location?: string | null
    affiliation?: string | null
  }

  export type CollegeUpdateManyMutationInput = {
    collegeName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollegeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    collegeName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollegeCourseCreateInput = {
    college: CollegeCreateNestedOneWithoutCollegeCoursesInput
    course: CourseCreateNestedOneWithoutCollegeCoursesInput
  }

  export type CollegeCourseUncheckedCreateInput = {
    id?: number
    collegeId: number
    courseId: number
  }

  export type CollegeCourseUpdateInput = {
    college?: CollegeUpdateOneRequiredWithoutCollegeCoursesNestedInput
    course?: CourseUpdateOneRequiredWithoutCollegeCoursesNestedInput
  }

  export type CollegeCourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    collegeId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type CollegeCourseCreateManyInput = {
    id?: number
    collegeId: number
    courseId: number
  }

  export type CollegeCourseUpdateManyMutationInput = {

  }

  export type CollegeCourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    collegeId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type SkillCreateInput = {
    skillName: string
    careerSkills?: CareerSkillCreateNestedManyWithoutSkillInput
    courseSkills?: CourseSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: number
    skillName: string
    careerSkills?: CareerSkillUncheckedCreateNestedManyWithoutSkillInput
    courseSkills?: CourseSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    skillName?: StringFieldUpdateOperationsInput | string
    careerSkills?: CareerSkillUpdateManyWithoutSkillNestedInput
    courseSkills?: CourseSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillName?: StringFieldUpdateOperationsInput | string
    careerSkills?: CareerSkillUncheckedUpdateManyWithoutSkillNestedInput
    courseSkills?: CourseSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: number
    skillName: string
  }

  export type SkillUpdateManyMutationInput = {
    skillName?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillName?: StringFieldUpdateOperationsInput | string
  }

  export type CareerSkillCreateInput = {
    career: CareerCreateNestedOneWithoutCareerSkillsInput
    skill: SkillCreateNestedOneWithoutCareerSkillsInput
  }

  export type CareerSkillUncheckedCreateInput = {
    id?: number
    careerId: number
    skillId: number
  }

  export type CareerSkillUpdateInput = {
    career?: CareerUpdateOneRequiredWithoutCareerSkillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutCareerSkillsNestedInput
  }

  export type CareerSkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type CareerSkillCreateManyInput = {
    id?: number
    careerId: number
    skillId: number
  }

  export type CareerSkillUpdateManyMutationInput = {

  }

  export type CareerSkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseSkillCreateInput = {
    course: CourseCreateNestedOneWithoutCourseSkillsInput
    skill: SkillCreateNestedOneWithoutCourseSkillsInput
  }

  export type CourseSkillUncheckedCreateInput = {
    id?: number
    courseId: number
    skillId: number
  }

  export type CourseSkillUpdateInput = {
    course?: CourseUpdateOneRequiredWithoutCourseSkillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutCourseSkillsNestedInput
  }

  export type CourseSkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseSkillCreateManyInput = {
    id?: number
    courseId: number
    skillId: number
  }

  export type CourseSkillUpdateManyMutationInput = {

  }

  export type CourseSkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type RecommendationCreateInput = {
    score?: number | null
    reason?: string | null
    recommendedAt?: Date | string
    career?: CareerCreateNestedOneWithoutRecommendationsInput
    college?: CollegeCreateNestedOneWithoutRecommendationsInput
    course?: CourseCreateNestedOneWithoutRecommendationsInput
    user: UserCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateInput = {
    id?: number
    userId: number
    careerId?: number | null
    courseId?: number | null
    collegeId?: number | null
    score?: number | null
    reason?: string | null
    recommendedAt?: Date | string
  }

  export type RecommendationUpdateInput = {
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    career?: CareerUpdateOneWithoutRecommendationsNestedInput
    college?: CollegeUpdateOneWithoutRecommendationsNestedInput
    course?: CourseUpdateOneWithoutRecommendationsNestedInput
    user?: UserUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    collegeId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationCreateManyInput = {
    id?: number
    userId: number
    careerId?: number | null
    courseId?: number | null
    collegeId?: number | null
    score?: number | null
    reason?: string | null
    recommendedAt?: Date | string
  }

  export type RecommendationUpdateManyMutationInput = {
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    collegeId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AssessmentListRelationFilter = {
    every?: AssessmentWhereInput
    some?: AssessmentWhereInput
    none?: AssessmentWhereInput
  }

  export type RecommendationListRelationFilter = {
    every?: RecommendationWhereInput
    some?: RecommendationWhereInput
    none?: RecommendationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssessmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecommendationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    educationLevel?: SortOrder
    gender?: SortOrder
    interests?: SortOrder
    location?: SortOrder
    skills?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    educationLevel?: SortOrder
    gender?: SortOrder
    location?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    educationLevel?: SortOrder
    gender?: SortOrder
    location?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AssessmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    testType?: SortOrder
    score?: SortOrder
    stream?: SortOrder
    strengths?: SortOrder
    weaknesses?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
  }

  export type AssessmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    testType?: SortOrder
    score?: SortOrder
    stream?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    testType?: SortOrder
    score?: SortOrder
    stream?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CareerSkillListRelationFilter = {
    every?: CareerSkillWhereInput
    some?: CareerSkillWhereInput
    none?: CareerSkillWhereInput
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type CareerSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CareerCountOrderByAggregateInput = {
    id?: SortOrder
    careerName?: SortOrder
    description?: SortOrder
    requiredSkills?: SortOrder
    requiredStream?: SortOrder
    futureScope?: SortOrder
  }

  export type CareerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CareerMaxOrderByAggregateInput = {
    id?: SortOrder
    careerName?: SortOrder
    description?: SortOrder
    requiredStream?: SortOrder
    futureScope?: SortOrder
  }

  export type CareerMinOrderByAggregateInput = {
    id?: SortOrder
    careerName?: SortOrder
    description?: SortOrder
    requiredStream?: SortOrder
    futureScope?: SortOrder
  }

  export type CareerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CollegeCourseListRelationFilter = {
    every?: CollegeCourseWhereInput
    some?: CollegeCourseWhereInput
    none?: CollegeCourseWhereInput
  }

  export type CareerNullableScalarRelationFilter = {
    is?: CareerWhereInput | null
    isNot?: CareerWhereInput | null
  }

  export type CourseSkillListRelationFilter = {
    every?: CourseSkillWhereInput
    some?: CourseSkillWhereInput
    none?: CourseSkillWhereInput
  }

  export type CollegeCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    courseName?: SortOrder
    stream?: SortOrder
    duration?: SortOrder
    eligibility?: SortOrder
    careerId?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
    careerId?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    courseName?: SortOrder
    stream?: SortOrder
    duration?: SortOrder
    eligibility?: SortOrder
    careerId?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    courseName?: SortOrder
    stream?: SortOrder
    duration?: SortOrder
    eligibility?: SortOrder
    careerId?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
    careerId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CollegeCountOrderByAggregateInput = {
    id?: SortOrder
    collegeName?: SortOrder
    location?: SortOrder
    affiliation?: SortOrder
  }

  export type CollegeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CollegeMaxOrderByAggregateInput = {
    id?: SortOrder
    collegeName?: SortOrder
    location?: SortOrder
    affiliation?: SortOrder
  }

  export type CollegeMinOrderByAggregateInput = {
    id?: SortOrder
    collegeName?: SortOrder
    location?: SortOrder
    affiliation?: SortOrder
  }

  export type CollegeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CollegeScalarRelationFilter = {
    is?: CollegeWhereInput
    isNot?: CollegeWhereInput
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type CollegeCourseCollegeIdCourseIdCompoundUniqueInput = {
    collegeId: number
    courseId: number
  }

  export type CollegeCourseCountOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    courseId?: SortOrder
  }

  export type CollegeCourseAvgOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    courseId?: SortOrder
  }

  export type CollegeCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    courseId?: SortOrder
  }

  export type CollegeCourseMinOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    courseId?: SortOrder
  }

  export type CollegeCourseSumOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    courseId?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    skillName?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    skillName?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    skillName?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CareerScalarRelationFilter = {
    is?: CareerWhereInput
    isNot?: CareerWhereInput
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type CareerSkillCareerIdSkillIdCompoundUniqueInput = {
    careerId: number
    skillId: number
  }

  export type CareerSkillCountOrderByAggregateInput = {
    id?: SortOrder
    careerId?: SortOrder
    skillId?: SortOrder
  }

  export type CareerSkillAvgOrderByAggregateInput = {
    id?: SortOrder
    careerId?: SortOrder
    skillId?: SortOrder
  }

  export type CareerSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    careerId?: SortOrder
    skillId?: SortOrder
  }

  export type CareerSkillMinOrderByAggregateInput = {
    id?: SortOrder
    careerId?: SortOrder
    skillId?: SortOrder
  }

  export type CareerSkillSumOrderByAggregateInput = {
    id?: SortOrder
    careerId?: SortOrder
    skillId?: SortOrder
  }

  export type CourseSkillCourseIdSkillIdCompoundUniqueInput = {
    courseId: number
    skillId: number
  }

  export type CourseSkillCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    skillId?: SortOrder
  }

  export type CourseSkillAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    skillId?: SortOrder
  }

  export type CourseSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    skillId?: SortOrder
  }

  export type CourseSkillMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    skillId?: SortOrder
  }

  export type CourseSkillSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    skillId?: SortOrder
  }

  export type CollegeNullableScalarRelationFilter = {
    is?: CollegeWhereInput | null
    isNot?: CollegeWhereInput | null
  }

  export type CourseNullableScalarRelationFilter = {
    is?: CourseWhereInput | null
    isNot?: CourseWhereInput | null
  }

  export type RecommendationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
    courseId?: SortOrder
    collegeId?: SortOrder
    score?: SortOrder
    reason?: SortOrder
    recommendedAt?: SortOrder
  }

  export type RecommendationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
    courseId?: SortOrder
    collegeId?: SortOrder
    score?: SortOrder
  }

  export type RecommendationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
    courseId?: SortOrder
    collegeId?: SortOrder
    score?: SortOrder
    reason?: SortOrder
    recommendedAt?: SortOrder
  }

  export type RecommendationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
    courseId?: SortOrder
    collegeId?: SortOrder
    score?: SortOrder
    reason?: SortOrder
    recommendedAt?: SortOrder
  }

  export type RecommendationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
    courseId?: SortOrder
    collegeId?: SortOrder
    score?: SortOrder
  }

  export type UserCreateinterestsInput = {
    set: string[]
  }

  export type UserCreateskillsInput = {
    set: string[]
  }

  export type AssessmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput> | AssessmentCreateWithoutUserInput[] | AssessmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutUserInput | AssessmentCreateOrConnectWithoutUserInput[]
    createMany?: AssessmentCreateManyUserInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type RecommendationCreateNestedManyWithoutUserInput = {
    create?: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput> | RecommendationCreateWithoutUserInput[] | RecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutUserInput | RecommendationCreateOrConnectWithoutUserInput[]
    createMany?: RecommendationCreateManyUserInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type AssessmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput> | AssessmentCreateWithoutUserInput[] | AssessmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutUserInput | AssessmentCreateOrConnectWithoutUserInput[]
    createMany?: AssessmentCreateManyUserInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type RecommendationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput> | RecommendationCreateWithoutUserInput[] | RecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutUserInput | RecommendationCreateOrConnectWithoutUserInput[]
    createMany?: RecommendationCreateManyUserInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateinterestsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AssessmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput> | AssessmentCreateWithoutUserInput[] | AssessmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutUserInput | AssessmentCreateOrConnectWithoutUserInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutUserInput | AssessmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssessmentCreateManyUserInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutUserInput | AssessmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutUserInput | AssessmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type RecommendationUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput> | RecommendationCreateWithoutUserInput[] | RecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutUserInput | RecommendationCreateOrConnectWithoutUserInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutUserInput | RecommendationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecommendationCreateManyUserInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutUserInput | RecommendationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutUserInput | RecommendationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssessmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput> | AssessmentCreateWithoutUserInput[] | AssessmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutUserInput | AssessmentCreateOrConnectWithoutUserInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutUserInput | AssessmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssessmentCreateManyUserInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutUserInput | AssessmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutUserInput | AssessmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type RecommendationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput> | RecommendationCreateWithoutUserInput[] | RecommendationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutUserInput | RecommendationCreateOrConnectWithoutUserInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutUserInput | RecommendationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecommendationCreateManyUserInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutUserInput | RecommendationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutUserInput | RecommendationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type AssessmentCreatestrengthsInput = {
    set: string[]
  }

  export type AssessmentCreateweaknessesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutAssessmentsInput = {
    create?: XOR<UserCreateWithoutAssessmentsInput, UserUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssessmentsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssessmentUpdatestrengthsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AssessmentUpdateweaknessesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutAssessmentsNestedInput = {
    create?: XOR<UserCreateWithoutAssessmentsInput, UserUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssessmentsInput
    upsert?: UserUpsertWithoutAssessmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssessmentsInput, UserUpdateWithoutAssessmentsInput>, UserUncheckedUpdateWithoutAssessmentsInput>
  }

  export type CareerCreaterequiredSkillsInput = {
    set: string[]
  }

  export type CareerSkillCreateNestedManyWithoutCareerInput = {
    create?: XOR<CareerSkillCreateWithoutCareerInput, CareerSkillUncheckedCreateWithoutCareerInput> | CareerSkillCreateWithoutCareerInput[] | CareerSkillUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: CareerSkillCreateOrConnectWithoutCareerInput | CareerSkillCreateOrConnectWithoutCareerInput[]
    createMany?: CareerSkillCreateManyCareerInputEnvelope
    connect?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutCareerInput = {
    create?: XOR<CourseCreateWithoutCareerInput, CourseUncheckedCreateWithoutCareerInput> | CourseCreateWithoutCareerInput[] | CourseUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCareerInput | CourseCreateOrConnectWithoutCareerInput[]
    createMany?: CourseCreateManyCareerInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type RecommendationCreateNestedManyWithoutCareerInput = {
    create?: XOR<RecommendationCreateWithoutCareerInput, RecommendationUncheckedCreateWithoutCareerInput> | RecommendationCreateWithoutCareerInput[] | RecommendationUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutCareerInput | RecommendationCreateOrConnectWithoutCareerInput[]
    createMany?: RecommendationCreateManyCareerInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type CareerSkillUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<CareerSkillCreateWithoutCareerInput, CareerSkillUncheckedCreateWithoutCareerInput> | CareerSkillCreateWithoutCareerInput[] | CareerSkillUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: CareerSkillCreateOrConnectWithoutCareerInput | CareerSkillCreateOrConnectWithoutCareerInput[]
    createMany?: CareerSkillCreateManyCareerInputEnvelope
    connect?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<CourseCreateWithoutCareerInput, CourseUncheckedCreateWithoutCareerInput> | CourseCreateWithoutCareerInput[] | CourseUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCareerInput | CourseCreateOrConnectWithoutCareerInput[]
    createMany?: CourseCreateManyCareerInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type RecommendationUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<RecommendationCreateWithoutCareerInput, RecommendationUncheckedCreateWithoutCareerInput> | RecommendationCreateWithoutCareerInput[] | RecommendationUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutCareerInput | RecommendationCreateOrConnectWithoutCareerInput[]
    createMany?: RecommendationCreateManyCareerInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type CareerUpdaterequiredSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CareerSkillUpdateManyWithoutCareerNestedInput = {
    create?: XOR<CareerSkillCreateWithoutCareerInput, CareerSkillUncheckedCreateWithoutCareerInput> | CareerSkillCreateWithoutCareerInput[] | CareerSkillUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: CareerSkillCreateOrConnectWithoutCareerInput | CareerSkillCreateOrConnectWithoutCareerInput[]
    upsert?: CareerSkillUpsertWithWhereUniqueWithoutCareerInput | CareerSkillUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: CareerSkillCreateManyCareerInputEnvelope
    set?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
    disconnect?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
    delete?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
    connect?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
    update?: CareerSkillUpdateWithWhereUniqueWithoutCareerInput | CareerSkillUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: CareerSkillUpdateManyWithWhereWithoutCareerInput | CareerSkillUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: CareerSkillScalarWhereInput | CareerSkillScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutCareerNestedInput = {
    create?: XOR<CourseCreateWithoutCareerInput, CourseUncheckedCreateWithoutCareerInput> | CourseCreateWithoutCareerInput[] | CourseUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCareerInput | CourseCreateOrConnectWithoutCareerInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCareerInput | CourseUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: CourseCreateManyCareerInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCareerInput | CourseUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCareerInput | CourseUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type RecommendationUpdateManyWithoutCareerNestedInput = {
    create?: XOR<RecommendationCreateWithoutCareerInput, RecommendationUncheckedCreateWithoutCareerInput> | RecommendationCreateWithoutCareerInput[] | RecommendationUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutCareerInput | RecommendationCreateOrConnectWithoutCareerInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutCareerInput | RecommendationUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: RecommendationCreateManyCareerInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutCareerInput | RecommendationUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutCareerInput | RecommendationUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type CareerSkillUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<CareerSkillCreateWithoutCareerInput, CareerSkillUncheckedCreateWithoutCareerInput> | CareerSkillCreateWithoutCareerInput[] | CareerSkillUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: CareerSkillCreateOrConnectWithoutCareerInput | CareerSkillCreateOrConnectWithoutCareerInput[]
    upsert?: CareerSkillUpsertWithWhereUniqueWithoutCareerInput | CareerSkillUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: CareerSkillCreateManyCareerInputEnvelope
    set?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
    disconnect?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
    delete?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
    connect?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
    update?: CareerSkillUpdateWithWhereUniqueWithoutCareerInput | CareerSkillUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: CareerSkillUpdateManyWithWhereWithoutCareerInput | CareerSkillUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: CareerSkillScalarWhereInput | CareerSkillScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<CourseCreateWithoutCareerInput, CourseUncheckedCreateWithoutCareerInput> | CourseCreateWithoutCareerInput[] | CourseUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCareerInput | CourseCreateOrConnectWithoutCareerInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCareerInput | CourseUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: CourseCreateManyCareerInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCareerInput | CourseUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCareerInput | CourseUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type RecommendationUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<RecommendationCreateWithoutCareerInput, RecommendationUncheckedCreateWithoutCareerInput> | RecommendationCreateWithoutCareerInput[] | RecommendationUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutCareerInput | RecommendationCreateOrConnectWithoutCareerInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutCareerInput | RecommendationUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: RecommendationCreateManyCareerInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutCareerInput | RecommendationUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutCareerInput | RecommendationUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type CollegeCourseCreateNestedManyWithoutCourseInput = {
    create?: XOR<CollegeCourseCreateWithoutCourseInput, CollegeCourseUncheckedCreateWithoutCourseInput> | CollegeCourseCreateWithoutCourseInput[] | CollegeCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CollegeCourseCreateOrConnectWithoutCourseInput | CollegeCourseCreateOrConnectWithoutCourseInput[]
    createMany?: CollegeCourseCreateManyCourseInputEnvelope
    connect?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
  }

  export type CareerCreateNestedOneWithoutCoursesInput = {
    create?: XOR<CareerCreateWithoutCoursesInput, CareerUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CareerCreateOrConnectWithoutCoursesInput
    connect?: CareerWhereUniqueInput
  }

  export type CourseSkillCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseSkillCreateWithoutCourseInput, CourseSkillUncheckedCreateWithoutCourseInput> | CourseSkillCreateWithoutCourseInput[] | CourseSkillUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseSkillCreateOrConnectWithoutCourseInput | CourseSkillCreateOrConnectWithoutCourseInput[]
    createMany?: CourseSkillCreateManyCourseInputEnvelope
    connect?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
  }

  export type RecommendationCreateNestedManyWithoutCourseInput = {
    create?: XOR<RecommendationCreateWithoutCourseInput, RecommendationUncheckedCreateWithoutCourseInput> | RecommendationCreateWithoutCourseInput[] | RecommendationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutCourseInput | RecommendationCreateOrConnectWithoutCourseInput[]
    createMany?: RecommendationCreateManyCourseInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type CollegeCourseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CollegeCourseCreateWithoutCourseInput, CollegeCourseUncheckedCreateWithoutCourseInput> | CollegeCourseCreateWithoutCourseInput[] | CollegeCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CollegeCourseCreateOrConnectWithoutCourseInput | CollegeCourseCreateOrConnectWithoutCourseInput[]
    createMany?: CollegeCourseCreateManyCourseInputEnvelope
    connect?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
  }

  export type CourseSkillUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseSkillCreateWithoutCourseInput, CourseSkillUncheckedCreateWithoutCourseInput> | CourseSkillCreateWithoutCourseInput[] | CourseSkillUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseSkillCreateOrConnectWithoutCourseInput | CourseSkillCreateOrConnectWithoutCourseInput[]
    createMany?: CourseSkillCreateManyCourseInputEnvelope
    connect?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
  }

  export type RecommendationUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<RecommendationCreateWithoutCourseInput, RecommendationUncheckedCreateWithoutCourseInput> | RecommendationCreateWithoutCourseInput[] | RecommendationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutCourseInput | RecommendationCreateOrConnectWithoutCourseInput[]
    createMany?: RecommendationCreateManyCourseInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type CollegeCourseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CollegeCourseCreateWithoutCourseInput, CollegeCourseUncheckedCreateWithoutCourseInput> | CollegeCourseCreateWithoutCourseInput[] | CollegeCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CollegeCourseCreateOrConnectWithoutCourseInput | CollegeCourseCreateOrConnectWithoutCourseInput[]
    upsert?: CollegeCourseUpsertWithWhereUniqueWithoutCourseInput | CollegeCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CollegeCourseCreateManyCourseInputEnvelope
    set?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
    disconnect?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
    delete?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
    connect?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
    update?: CollegeCourseUpdateWithWhereUniqueWithoutCourseInput | CollegeCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CollegeCourseUpdateManyWithWhereWithoutCourseInput | CollegeCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CollegeCourseScalarWhereInput | CollegeCourseScalarWhereInput[]
  }

  export type CareerUpdateOneWithoutCoursesNestedInput = {
    create?: XOR<CareerCreateWithoutCoursesInput, CareerUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CareerCreateOrConnectWithoutCoursesInput
    upsert?: CareerUpsertWithoutCoursesInput
    disconnect?: CareerWhereInput | boolean
    delete?: CareerWhereInput | boolean
    connect?: CareerWhereUniqueInput
    update?: XOR<XOR<CareerUpdateToOneWithWhereWithoutCoursesInput, CareerUpdateWithoutCoursesInput>, CareerUncheckedUpdateWithoutCoursesInput>
  }

  export type CourseSkillUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseSkillCreateWithoutCourseInput, CourseSkillUncheckedCreateWithoutCourseInput> | CourseSkillCreateWithoutCourseInput[] | CourseSkillUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseSkillCreateOrConnectWithoutCourseInput | CourseSkillCreateOrConnectWithoutCourseInput[]
    upsert?: CourseSkillUpsertWithWhereUniqueWithoutCourseInput | CourseSkillUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseSkillCreateManyCourseInputEnvelope
    set?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
    disconnect?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
    delete?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
    connect?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
    update?: CourseSkillUpdateWithWhereUniqueWithoutCourseInput | CourseSkillUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseSkillUpdateManyWithWhereWithoutCourseInput | CourseSkillUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseSkillScalarWhereInput | CourseSkillScalarWhereInput[]
  }

  export type RecommendationUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RecommendationCreateWithoutCourseInput, RecommendationUncheckedCreateWithoutCourseInput> | RecommendationCreateWithoutCourseInput[] | RecommendationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutCourseInput | RecommendationCreateOrConnectWithoutCourseInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutCourseInput | RecommendationUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RecommendationCreateManyCourseInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutCourseInput | RecommendationUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutCourseInput | RecommendationUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CollegeCourseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CollegeCourseCreateWithoutCourseInput, CollegeCourseUncheckedCreateWithoutCourseInput> | CollegeCourseCreateWithoutCourseInput[] | CollegeCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CollegeCourseCreateOrConnectWithoutCourseInput | CollegeCourseCreateOrConnectWithoutCourseInput[]
    upsert?: CollegeCourseUpsertWithWhereUniqueWithoutCourseInput | CollegeCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CollegeCourseCreateManyCourseInputEnvelope
    set?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
    disconnect?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
    delete?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
    connect?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
    update?: CollegeCourseUpdateWithWhereUniqueWithoutCourseInput | CollegeCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CollegeCourseUpdateManyWithWhereWithoutCourseInput | CollegeCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CollegeCourseScalarWhereInput | CollegeCourseScalarWhereInput[]
  }

  export type CourseSkillUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseSkillCreateWithoutCourseInput, CourseSkillUncheckedCreateWithoutCourseInput> | CourseSkillCreateWithoutCourseInput[] | CourseSkillUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseSkillCreateOrConnectWithoutCourseInput | CourseSkillCreateOrConnectWithoutCourseInput[]
    upsert?: CourseSkillUpsertWithWhereUniqueWithoutCourseInput | CourseSkillUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseSkillCreateManyCourseInputEnvelope
    set?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
    disconnect?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
    delete?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
    connect?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
    update?: CourseSkillUpdateWithWhereUniqueWithoutCourseInput | CourseSkillUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseSkillUpdateManyWithWhereWithoutCourseInput | CourseSkillUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseSkillScalarWhereInput | CourseSkillScalarWhereInput[]
  }

  export type RecommendationUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RecommendationCreateWithoutCourseInput, RecommendationUncheckedCreateWithoutCourseInput> | RecommendationCreateWithoutCourseInput[] | RecommendationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutCourseInput | RecommendationCreateOrConnectWithoutCourseInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutCourseInput | RecommendationUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RecommendationCreateManyCourseInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutCourseInput | RecommendationUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutCourseInput | RecommendationUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type CollegeCourseCreateNestedManyWithoutCollegeInput = {
    create?: XOR<CollegeCourseCreateWithoutCollegeInput, CollegeCourseUncheckedCreateWithoutCollegeInput> | CollegeCourseCreateWithoutCollegeInput[] | CollegeCourseUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CollegeCourseCreateOrConnectWithoutCollegeInput | CollegeCourseCreateOrConnectWithoutCollegeInput[]
    createMany?: CollegeCourseCreateManyCollegeInputEnvelope
    connect?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
  }

  export type RecommendationCreateNestedManyWithoutCollegeInput = {
    create?: XOR<RecommendationCreateWithoutCollegeInput, RecommendationUncheckedCreateWithoutCollegeInput> | RecommendationCreateWithoutCollegeInput[] | RecommendationUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutCollegeInput | RecommendationCreateOrConnectWithoutCollegeInput[]
    createMany?: RecommendationCreateManyCollegeInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type CollegeCourseUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<CollegeCourseCreateWithoutCollegeInput, CollegeCourseUncheckedCreateWithoutCollegeInput> | CollegeCourseCreateWithoutCollegeInput[] | CollegeCourseUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CollegeCourseCreateOrConnectWithoutCollegeInput | CollegeCourseCreateOrConnectWithoutCollegeInput[]
    createMany?: CollegeCourseCreateManyCollegeInputEnvelope
    connect?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
  }

  export type RecommendationUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<RecommendationCreateWithoutCollegeInput, RecommendationUncheckedCreateWithoutCollegeInput> | RecommendationCreateWithoutCollegeInput[] | RecommendationUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutCollegeInput | RecommendationCreateOrConnectWithoutCollegeInput[]
    createMany?: RecommendationCreateManyCollegeInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type CollegeCourseUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<CollegeCourseCreateWithoutCollegeInput, CollegeCourseUncheckedCreateWithoutCollegeInput> | CollegeCourseCreateWithoutCollegeInput[] | CollegeCourseUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CollegeCourseCreateOrConnectWithoutCollegeInput | CollegeCourseCreateOrConnectWithoutCollegeInput[]
    upsert?: CollegeCourseUpsertWithWhereUniqueWithoutCollegeInput | CollegeCourseUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: CollegeCourseCreateManyCollegeInputEnvelope
    set?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
    disconnect?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
    delete?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
    connect?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
    update?: CollegeCourseUpdateWithWhereUniqueWithoutCollegeInput | CollegeCourseUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: CollegeCourseUpdateManyWithWhereWithoutCollegeInput | CollegeCourseUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: CollegeCourseScalarWhereInput | CollegeCourseScalarWhereInput[]
  }

  export type RecommendationUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<RecommendationCreateWithoutCollegeInput, RecommendationUncheckedCreateWithoutCollegeInput> | RecommendationCreateWithoutCollegeInput[] | RecommendationUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutCollegeInput | RecommendationCreateOrConnectWithoutCollegeInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutCollegeInput | RecommendationUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: RecommendationCreateManyCollegeInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutCollegeInput | RecommendationUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutCollegeInput | RecommendationUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type CollegeCourseUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<CollegeCourseCreateWithoutCollegeInput, CollegeCourseUncheckedCreateWithoutCollegeInput> | CollegeCourseCreateWithoutCollegeInput[] | CollegeCourseUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: CollegeCourseCreateOrConnectWithoutCollegeInput | CollegeCourseCreateOrConnectWithoutCollegeInput[]
    upsert?: CollegeCourseUpsertWithWhereUniqueWithoutCollegeInput | CollegeCourseUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: CollegeCourseCreateManyCollegeInputEnvelope
    set?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
    disconnect?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
    delete?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
    connect?: CollegeCourseWhereUniqueInput | CollegeCourseWhereUniqueInput[]
    update?: CollegeCourseUpdateWithWhereUniqueWithoutCollegeInput | CollegeCourseUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: CollegeCourseUpdateManyWithWhereWithoutCollegeInput | CollegeCourseUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: CollegeCourseScalarWhereInput | CollegeCourseScalarWhereInput[]
  }

  export type RecommendationUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<RecommendationCreateWithoutCollegeInput, RecommendationUncheckedCreateWithoutCollegeInput> | RecommendationCreateWithoutCollegeInput[] | RecommendationUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutCollegeInput | RecommendationCreateOrConnectWithoutCollegeInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutCollegeInput | RecommendationUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: RecommendationCreateManyCollegeInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutCollegeInput | RecommendationUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutCollegeInput | RecommendationUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type CollegeCreateNestedOneWithoutCollegeCoursesInput = {
    create?: XOR<CollegeCreateWithoutCollegeCoursesInput, CollegeUncheckedCreateWithoutCollegeCoursesInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutCollegeCoursesInput
    connect?: CollegeWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutCollegeCoursesInput = {
    create?: XOR<CourseCreateWithoutCollegeCoursesInput, CourseUncheckedCreateWithoutCollegeCoursesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCollegeCoursesInput
    connect?: CourseWhereUniqueInput
  }

  export type CollegeUpdateOneRequiredWithoutCollegeCoursesNestedInput = {
    create?: XOR<CollegeCreateWithoutCollegeCoursesInput, CollegeUncheckedCreateWithoutCollegeCoursesInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutCollegeCoursesInput
    upsert?: CollegeUpsertWithoutCollegeCoursesInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutCollegeCoursesInput, CollegeUpdateWithoutCollegeCoursesInput>, CollegeUncheckedUpdateWithoutCollegeCoursesInput>
  }

  export type CourseUpdateOneRequiredWithoutCollegeCoursesNestedInput = {
    create?: XOR<CourseCreateWithoutCollegeCoursesInput, CourseUncheckedCreateWithoutCollegeCoursesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCollegeCoursesInput
    upsert?: CourseUpsertWithoutCollegeCoursesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCollegeCoursesInput, CourseUpdateWithoutCollegeCoursesInput>, CourseUncheckedUpdateWithoutCollegeCoursesInput>
  }

  export type CareerSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<CareerSkillCreateWithoutSkillInput, CareerSkillUncheckedCreateWithoutSkillInput> | CareerSkillCreateWithoutSkillInput[] | CareerSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CareerSkillCreateOrConnectWithoutSkillInput | CareerSkillCreateOrConnectWithoutSkillInput[]
    createMany?: CareerSkillCreateManySkillInputEnvelope
    connect?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
  }

  export type CourseSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<CourseSkillCreateWithoutSkillInput, CourseSkillUncheckedCreateWithoutSkillInput> | CourseSkillCreateWithoutSkillInput[] | CourseSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CourseSkillCreateOrConnectWithoutSkillInput | CourseSkillCreateOrConnectWithoutSkillInput[]
    createMany?: CourseSkillCreateManySkillInputEnvelope
    connect?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
  }

  export type CareerSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<CareerSkillCreateWithoutSkillInput, CareerSkillUncheckedCreateWithoutSkillInput> | CareerSkillCreateWithoutSkillInput[] | CareerSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CareerSkillCreateOrConnectWithoutSkillInput | CareerSkillCreateOrConnectWithoutSkillInput[]
    createMany?: CareerSkillCreateManySkillInputEnvelope
    connect?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
  }

  export type CourseSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<CourseSkillCreateWithoutSkillInput, CourseSkillUncheckedCreateWithoutSkillInput> | CourseSkillCreateWithoutSkillInput[] | CourseSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CourseSkillCreateOrConnectWithoutSkillInput | CourseSkillCreateOrConnectWithoutSkillInput[]
    createMany?: CourseSkillCreateManySkillInputEnvelope
    connect?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
  }

  export type CareerSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<CareerSkillCreateWithoutSkillInput, CareerSkillUncheckedCreateWithoutSkillInput> | CareerSkillCreateWithoutSkillInput[] | CareerSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CareerSkillCreateOrConnectWithoutSkillInput | CareerSkillCreateOrConnectWithoutSkillInput[]
    upsert?: CareerSkillUpsertWithWhereUniqueWithoutSkillInput | CareerSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: CareerSkillCreateManySkillInputEnvelope
    set?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
    disconnect?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
    delete?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
    connect?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
    update?: CareerSkillUpdateWithWhereUniqueWithoutSkillInput | CareerSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: CareerSkillUpdateManyWithWhereWithoutSkillInput | CareerSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: CareerSkillScalarWhereInput | CareerSkillScalarWhereInput[]
  }

  export type CourseSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<CourseSkillCreateWithoutSkillInput, CourseSkillUncheckedCreateWithoutSkillInput> | CourseSkillCreateWithoutSkillInput[] | CourseSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CourseSkillCreateOrConnectWithoutSkillInput | CourseSkillCreateOrConnectWithoutSkillInput[]
    upsert?: CourseSkillUpsertWithWhereUniqueWithoutSkillInput | CourseSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: CourseSkillCreateManySkillInputEnvelope
    set?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
    disconnect?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
    delete?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
    connect?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
    update?: CourseSkillUpdateWithWhereUniqueWithoutSkillInput | CourseSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: CourseSkillUpdateManyWithWhereWithoutSkillInput | CourseSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: CourseSkillScalarWhereInput | CourseSkillScalarWhereInput[]
  }

  export type CareerSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<CareerSkillCreateWithoutSkillInput, CareerSkillUncheckedCreateWithoutSkillInput> | CareerSkillCreateWithoutSkillInput[] | CareerSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CareerSkillCreateOrConnectWithoutSkillInput | CareerSkillCreateOrConnectWithoutSkillInput[]
    upsert?: CareerSkillUpsertWithWhereUniqueWithoutSkillInput | CareerSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: CareerSkillCreateManySkillInputEnvelope
    set?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
    disconnect?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
    delete?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
    connect?: CareerSkillWhereUniqueInput | CareerSkillWhereUniqueInput[]
    update?: CareerSkillUpdateWithWhereUniqueWithoutSkillInput | CareerSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: CareerSkillUpdateManyWithWhereWithoutSkillInput | CareerSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: CareerSkillScalarWhereInput | CareerSkillScalarWhereInput[]
  }

  export type CourseSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<CourseSkillCreateWithoutSkillInput, CourseSkillUncheckedCreateWithoutSkillInput> | CourseSkillCreateWithoutSkillInput[] | CourseSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CourseSkillCreateOrConnectWithoutSkillInput | CourseSkillCreateOrConnectWithoutSkillInput[]
    upsert?: CourseSkillUpsertWithWhereUniqueWithoutSkillInput | CourseSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: CourseSkillCreateManySkillInputEnvelope
    set?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
    disconnect?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
    delete?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
    connect?: CourseSkillWhereUniqueInput | CourseSkillWhereUniqueInput[]
    update?: CourseSkillUpdateWithWhereUniqueWithoutSkillInput | CourseSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: CourseSkillUpdateManyWithWhereWithoutSkillInput | CourseSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: CourseSkillScalarWhereInput | CourseSkillScalarWhereInput[]
  }

  export type CareerCreateNestedOneWithoutCareerSkillsInput = {
    create?: XOR<CareerCreateWithoutCareerSkillsInput, CareerUncheckedCreateWithoutCareerSkillsInput>
    connectOrCreate?: CareerCreateOrConnectWithoutCareerSkillsInput
    connect?: CareerWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutCareerSkillsInput = {
    create?: XOR<SkillCreateWithoutCareerSkillsInput, SkillUncheckedCreateWithoutCareerSkillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutCareerSkillsInput
    connect?: SkillWhereUniqueInput
  }

  export type CareerUpdateOneRequiredWithoutCareerSkillsNestedInput = {
    create?: XOR<CareerCreateWithoutCareerSkillsInput, CareerUncheckedCreateWithoutCareerSkillsInput>
    connectOrCreate?: CareerCreateOrConnectWithoutCareerSkillsInput
    upsert?: CareerUpsertWithoutCareerSkillsInput
    connect?: CareerWhereUniqueInput
    update?: XOR<XOR<CareerUpdateToOneWithWhereWithoutCareerSkillsInput, CareerUpdateWithoutCareerSkillsInput>, CareerUncheckedUpdateWithoutCareerSkillsInput>
  }

  export type SkillUpdateOneRequiredWithoutCareerSkillsNestedInput = {
    create?: XOR<SkillCreateWithoutCareerSkillsInput, SkillUncheckedCreateWithoutCareerSkillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutCareerSkillsInput
    upsert?: SkillUpsertWithoutCareerSkillsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutCareerSkillsInput, SkillUpdateWithoutCareerSkillsInput>, SkillUncheckedUpdateWithoutCareerSkillsInput>
  }

  export type CourseCreateNestedOneWithoutCourseSkillsInput = {
    create?: XOR<CourseCreateWithoutCourseSkillsInput, CourseUncheckedCreateWithoutCourseSkillsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseSkillsInput
    connect?: CourseWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutCourseSkillsInput = {
    create?: XOR<SkillCreateWithoutCourseSkillsInput, SkillUncheckedCreateWithoutCourseSkillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutCourseSkillsInput
    connect?: SkillWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutCourseSkillsNestedInput = {
    create?: XOR<CourseCreateWithoutCourseSkillsInput, CourseUncheckedCreateWithoutCourseSkillsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseSkillsInput
    upsert?: CourseUpsertWithoutCourseSkillsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCourseSkillsInput, CourseUpdateWithoutCourseSkillsInput>, CourseUncheckedUpdateWithoutCourseSkillsInput>
  }

  export type SkillUpdateOneRequiredWithoutCourseSkillsNestedInput = {
    create?: XOR<SkillCreateWithoutCourseSkillsInput, SkillUncheckedCreateWithoutCourseSkillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutCourseSkillsInput
    upsert?: SkillUpsertWithoutCourseSkillsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutCourseSkillsInput, SkillUpdateWithoutCourseSkillsInput>, SkillUncheckedUpdateWithoutCourseSkillsInput>
  }

  export type CareerCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<CareerCreateWithoutRecommendationsInput, CareerUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: CareerCreateOrConnectWithoutRecommendationsInput
    connect?: CareerWhereUniqueInput
  }

  export type CollegeCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<CollegeCreateWithoutRecommendationsInput, CollegeUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutRecommendationsInput
    connect?: CollegeWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<CourseCreateWithoutRecommendationsInput, CourseUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRecommendationsInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<UserCreateWithoutRecommendationsInput, UserUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecommendationsInput
    connect?: UserWhereUniqueInput
  }

  export type CareerUpdateOneWithoutRecommendationsNestedInput = {
    create?: XOR<CareerCreateWithoutRecommendationsInput, CareerUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: CareerCreateOrConnectWithoutRecommendationsInput
    upsert?: CareerUpsertWithoutRecommendationsInput
    disconnect?: CareerWhereInput | boolean
    delete?: CareerWhereInput | boolean
    connect?: CareerWhereUniqueInput
    update?: XOR<XOR<CareerUpdateToOneWithWhereWithoutRecommendationsInput, CareerUpdateWithoutRecommendationsInput>, CareerUncheckedUpdateWithoutRecommendationsInput>
  }

  export type CollegeUpdateOneWithoutRecommendationsNestedInput = {
    create?: XOR<CollegeCreateWithoutRecommendationsInput, CollegeUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutRecommendationsInput
    upsert?: CollegeUpsertWithoutRecommendationsInput
    disconnect?: CollegeWhereInput | boolean
    delete?: CollegeWhereInput | boolean
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutRecommendationsInput, CollegeUpdateWithoutRecommendationsInput>, CollegeUncheckedUpdateWithoutRecommendationsInput>
  }

  export type CourseUpdateOneWithoutRecommendationsNestedInput = {
    create?: XOR<CourseCreateWithoutRecommendationsInput, CourseUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRecommendationsInput
    upsert?: CourseUpsertWithoutRecommendationsInput
    disconnect?: CourseWhereInput | boolean
    delete?: CourseWhereInput | boolean
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutRecommendationsInput, CourseUpdateWithoutRecommendationsInput>, CourseUncheckedUpdateWithoutRecommendationsInput>
  }

  export type UserUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<UserCreateWithoutRecommendationsInput, UserUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecommendationsInput
    upsert?: UserUpsertWithoutRecommendationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecommendationsInput, UserUpdateWithoutRecommendationsInput>, UserUncheckedUpdateWithoutRecommendationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AssessmentCreateWithoutUserInput = {
    testType?: string | null
    score?: number | null
    stream?: string | null
    strengths?: AssessmentCreatestrengthsInput | string[]
    weaknesses?: AssessmentCreateweaknessesInput | string[]
    createdAt?: Date | string
  }

  export type AssessmentUncheckedCreateWithoutUserInput = {
    id?: number
    testType?: string | null
    score?: number | null
    stream?: string | null
    strengths?: AssessmentCreatestrengthsInput | string[]
    weaknesses?: AssessmentCreateweaknessesInput | string[]
    createdAt?: Date | string
  }

  export type AssessmentCreateOrConnectWithoutUserInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput>
  }

  export type AssessmentCreateManyUserInputEnvelope = {
    data: AssessmentCreateManyUserInput | AssessmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationCreateWithoutUserInput = {
    score?: number | null
    reason?: string | null
    recommendedAt?: Date | string
    career?: CareerCreateNestedOneWithoutRecommendationsInput
    college?: CollegeCreateNestedOneWithoutRecommendationsInput
    course?: CourseCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateWithoutUserInput = {
    id?: number
    careerId?: number | null
    courseId?: number | null
    collegeId?: number | null
    score?: number | null
    reason?: string | null
    recommendedAt?: Date | string
  }

  export type RecommendationCreateOrConnectWithoutUserInput = {
    where: RecommendationWhereUniqueInput
    create: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput>
  }

  export type RecommendationCreateManyUserInputEnvelope = {
    data: RecommendationCreateManyUserInput | RecommendationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AssessmentWhereUniqueInput
    update: XOR<AssessmentUpdateWithoutUserInput, AssessmentUncheckedUpdateWithoutUserInput>
    create: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput>
  }

  export type AssessmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AssessmentWhereUniqueInput
    data: XOR<AssessmentUpdateWithoutUserInput, AssessmentUncheckedUpdateWithoutUserInput>
  }

  export type AssessmentUpdateManyWithWhereWithoutUserInput = {
    where: AssessmentScalarWhereInput
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AssessmentScalarWhereInput = {
    AND?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    OR?: AssessmentScalarWhereInput[]
    NOT?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    id?: IntFilter<"Assessment"> | number
    userId?: IntFilter<"Assessment"> | number
    testType?: StringNullableFilter<"Assessment"> | string | null
    score?: FloatNullableFilter<"Assessment"> | number | null
    stream?: StringNullableFilter<"Assessment"> | string | null
    strengths?: StringNullableListFilter<"Assessment">
    weaknesses?: StringNullableListFilter<"Assessment">
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
  }

  export type RecommendationUpsertWithWhereUniqueWithoutUserInput = {
    where: RecommendationWhereUniqueInput
    update: XOR<RecommendationUpdateWithoutUserInput, RecommendationUncheckedUpdateWithoutUserInput>
    create: XOR<RecommendationCreateWithoutUserInput, RecommendationUncheckedCreateWithoutUserInput>
  }

  export type RecommendationUpdateWithWhereUniqueWithoutUserInput = {
    where: RecommendationWhereUniqueInput
    data: XOR<RecommendationUpdateWithoutUserInput, RecommendationUncheckedUpdateWithoutUserInput>
  }

  export type RecommendationUpdateManyWithWhereWithoutUserInput = {
    where: RecommendationScalarWhereInput
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyWithoutUserInput>
  }

  export type RecommendationScalarWhereInput = {
    AND?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
    OR?: RecommendationScalarWhereInput[]
    NOT?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
    id?: IntFilter<"Recommendation"> | number
    userId?: IntFilter<"Recommendation"> | number
    careerId?: IntNullableFilter<"Recommendation"> | number | null
    courseId?: IntNullableFilter<"Recommendation"> | number | null
    collegeId?: IntNullableFilter<"Recommendation"> | number | null
    score?: FloatNullableFilter<"Recommendation"> | number | null
    reason?: StringNullableFilter<"Recommendation"> | string | null
    recommendedAt?: DateTimeFilter<"Recommendation"> | Date | string
  }

  export type UserCreateWithoutAssessmentsInput = {
    email: string
    name?: string | null
    dob?: Date | string | null
    educationLevel?: string | null
    gender?: string | null
    interests?: UserCreateinterestsInput | string[]
    location?: string | null
    skills?: UserCreateskillsInput | string[]
    recommendations?: RecommendationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssessmentsInput = {
    id?: number
    email: string
    name?: string | null
    dob?: Date | string | null
    educationLevel?: string | null
    gender?: string | null
    interests?: UserCreateinterestsInput | string[]
    location?: string | null
    skills?: UserCreateskillsInput | string[]
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssessmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssessmentsInput, UserUncheckedCreateWithoutAssessmentsInput>
  }

  export type UserUpsertWithoutAssessmentsInput = {
    update: XOR<UserUpdateWithoutAssessmentsInput, UserUncheckedUpdateWithoutAssessmentsInput>
    create: XOR<UserCreateWithoutAssessmentsInput, UserUncheckedCreateWithoutAssessmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssessmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssessmentsInput, UserUncheckedUpdateWithoutAssessmentsInput>
  }

  export type UserUpdateWithoutAssessmentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    recommendations?: RecommendationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssessmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    recommendations?: RecommendationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CareerSkillCreateWithoutCareerInput = {
    skill: SkillCreateNestedOneWithoutCareerSkillsInput
  }

  export type CareerSkillUncheckedCreateWithoutCareerInput = {
    id?: number
    skillId: number
  }

  export type CareerSkillCreateOrConnectWithoutCareerInput = {
    where: CareerSkillWhereUniqueInput
    create: XOR<CareerSkillCreateWithoutCareerInput, CareerSkillUncheckedCreateWithoutCareerInput>
  }

  export type CareerSkillCreateManyCareerInputEnvelope = {
    data: CareerSkillCreateManyCareerInput | CareerSkillCreateManyCareerInput[]
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutCareerInput = {
    courseName: string
    stream?: string | null
    duration?: string | null
    eligibility?: string | null
    collegeCourses?: CollegeCourseCreateNestedManyWithoutCourseInput
    courseSkills?: CourseSkillCreateNestedManyWithoutCourseInput
    recommendations?: RecommendationCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCareerInput = {
    id?: number
    courseName: string
    stream?: string | null
    duration?: string | null
    eligibility?: string | null
    collegeCourses?: CollegeCourseUncheckedCreateNestedManyWithoutCourseInput
    courseSkills?: CourseSkillUncheckedCreateNestedManyWithoutCourseInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCareerInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCareerInput, CourseUncheckedCreateWithoutCareerInput>
  }

  export type CourseCreateManyCareerInputEnvelope = {
    data: CourseCreateManyCareerInput | CourseCreateManyCareerInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationCreateWithoutCareerInput = {
    score?: number | null
    reason?: string | null
    recommendedAt?: Date | string
    college?: CollegeCreateNestedOneWithoutRecommendationsInput
    course?: CourseCreateNestedOneWithoutRecommendationsInput
    user: UserCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateWithoutCareerInput = {
    id?: number
    userId: number
    courseId?: number | null
    collegeId?: number | null
    score?: number | null
    reason?: string | null
    recommendedAt?: Date | string
  }

  export type RecommendationCreateOrConnectWithoutCareerInput = {
    where: RecommendationWhereUniqueInput
    create: XOR<RecommendationCreateWithoutCareerInput, RecommendationUncheckedCreateWithoutCareerInput>
  }

  export type RecommendationCreateManyCareerInputEnvelope = {
    data: RecommendationCreateManyCareerInput | RecommendationCreateManyCareerInput[]
    skipDuplicates?: boolean
  }

  export type CareerSkillUpsertWithWhereUniqueWithoutCareerInput = {
    where: CareerSkillWhereUniqueInput
    update: XOR<CareerSkillUpdateWithoutCareerInput, CareerSkillUncheckedUpdateWithoutCareerInput>
    create: XOR<CareerSkillCreateWithoutCareerInput, CareerSkillUncheckedCreateWithoutCareerInput>
  }

  export type CareerSkillUpdateWithWhereUniqueWithoutCareerInput = {
    where: CareerSkillWhereUniqueInput
    data: XOR<CareerSkillUpdateWithoutCareerInput, CareerSkillUncheckedUpdateWithoutCareerInput>
  }

  export type CareerSkillUpdateManyWithWhereWithoutCareerInput = {
    where: CareerSkillScalarWhereInput
    data: XOR<CareerSkillUpdateManyMutationInput, CareerSkillUncheckedUpdateManyWithoutCareerInput>
  }

  export type CareerSkillScalarWhereInput = {
    AND?: CareerSkillScalarWhereInput | CareerSkillScalarWhereInput[]
    OR?: CareerSkillScalarWhereInput[]
    NOT?: CareerSkillScalarWhereInput | CareerSkillScalarWhereInput[]
    id?: IntFilter<"CareerSkill"> | number
    careerId?: IntFilter<"CareerSkill"> | number
    skillId?: IntFilter<"CareerSkill"> | number
  }

  export type CourseUpsertWithWhereUniqueWithoutCareerInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutCareerInput, CourseUncheckedUpdateWithoutCareerInput>
    create: XOR<CourseCreateWithoutCareerInput, CourseUncheckedCreateWithoutCareerInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutCareerInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutCareerInput, CourseUncheckedUpdateWithoutCareerInput>
  }

  export type CourseUpdateManyWithWhereWithoutCareerInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutCareerInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: IntFilter<"Course"> | number
    courseName?: StringFilter<"Course"> | string
    stream?: StringNullableFilter<"Course"> | string | null
    duration?: StringNullableFilter<"Course"> | string | null
    eligibility?: StringNullableFilter<"Course"> | string | null
    careerId?: IntNullableFilter<"Course"> | number | null
  }

  export type RecommendationUpsertWithWhereUniqueWithoutCareerInput = {
    where: RecommendationWhereUniqueInput
    update: XOR<RecommendationUpdateWithoutCareerInput, RecommendationUncheckedUpdateWithoutCareerInput>
    create: XOR<RecommendationCreateWithoutCareerInput, RecommendationUncheckedCreateWithoutCareerInput>
  }

  export type RecommendationUpdateWithWhereUniqueWithoutCareerInput = {
    where: RecommendationWhereUniqueInput
    data: XOR<RecommendationUpdateWithoutCareerInput, RecommendationUncheckedUpdateWithoutCareerInput>
  }

  export type RecommendationUpdateManyWithWhereWithoutCareerInput = {
    where: RecommendationScalarWhereInput
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyWithoutCareerInput>
  }

  export type CollegeCourseCreateWithoutCourseInput = {
    college: CollegeCreateNestedOneWithoutCollegeCoursesInput
  }

  export type CollegeCourseUncheckedCreateWithoutCourseInput = {
    id?: number
    collegeId: number
  }

  export type CollegeCourseCreateOrConnectWithoutCourseInput = {
    where: CollegeCourseWhereUniqueInput
    create: XOR<CollegeCourseCreateWithoutCourseInput, CollegeCourseUncheckedCreateWithoutCourseInput>
  }

  export type CollegeCourseCreateManyCourseInputEnvelope = {
    data: CollegeCourseCreateManyCourseInput | CollegeCourseCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CareerCreateWithoutCoursesInput = {
    careerName: string
    description?: string | null
    requiredSkills?: CareerCreaterequiredSkillsInput | string[]
    requiredStream?: string | null
    futureScope?: string | null
    careerSkills?: CareerSkillCreateNestedManyWithoutCareerInput
    recommendations?: RecommendationCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateWithoutCoursesInput = {
    id?: number
    careerName: string
    description?: string | null
    requiredSkills?: CareerCreaterequiredSkillsInput | string[]
    requiredStream?: string | null
    futureScope?: string | null
    careerSkills?: CareerSkillUncheckedCreateNestedManyWithoutCareerInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerCreateOrConnectWithoutCoursesInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutCoursesInput, CareerUncheckedCreateWithoutCoursesInput>
  }

  export type CourseSkillCreateWithoutCourseInput = {
    skill: SkillCreateNestedOneWithoutCourseSkillsInput
  }

  export type CourseSkillUncheckedCreateWithoutCourseInput = {
    id?: number
    skillId: number
  }

  export type CourseSkillCreateOrConnectWithoutCourseInput = {
    where: CourseSkillWhereUniqueInput
    create: XOR<CourseSkillCreateWithoutCourseInput, CourseSkillUncheckedCreateWithoutCourseInput>
  }

  export type CourseSkillCreateManyCourseInputEnvelope = {
    data: CourseSkillCreateManyCourseInput | CourseSkillCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationCreateWithoutCourseInput = {
    score?: number | null
    reason?: string | null
    recommendedAt?: Date | string
    career?: CareerCreateNestedOneWithoutRecommendationsInput
    college?: CollegeCreateNestedOneWithoutRecommendationsInput
    user: UserCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateWithoutCourseInput = {
    id?: number
    userId: number
    careerId?: number | null
    collegeId?: number | null
    score?: number | null
    reason?: string | null
    recommendedAt?: Date | string
  }

  export type RecommendationCreateOrConnectWithoutCourseInput = {
    where: RecommendationWhereUniqueInput
    create: XOR<RecommendationCreateWithoutCourseInput, RecommendationUncheckedCreateWithoutCourseInput>
  }

  export type RecommendationCreateManyCourseInputEnvelope = {
    data: RecommendationCreateManyCourseInput | RecommendationCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CollegeCourseUpsertWithWhereUniqueWithoutCourseInput = {
    where: CollegeCourseWhereUniqueInput
    update: XOR<CollegeCourseUpdateWithoutCourseInput, CollegeCourseUncheckedUpdateWithoutCourseInput>
    create: XOR<CollegeCourseCreateWithoutCourseInput, CollegeCourseUncheckedCreateWithoutCourseInput>
  }

  export type CollegeCourseUpdateWithWhereUniqueWithoutCourseInput = {
    where: CollegeCourseWhereUniqueInput
    data: XOR<CollegeCourseUpdateWithoutCourseInput, CollegeCourseUncheckedUpdateWithoutCourseInput>
  }

  export type CollegeCourseUpdateManyWithWhereWithoutCourseInput = {
    where: CollegeCourseScalarWhereInput
    data: XOR<CollegeCourseUpdateManyMutationInput, CollegeCourseUncheckedUpdateManyWithoutCourseInput>
  }

  export type CollegeCourseScalarWhereInput = {
    AND?: CollegeCourseScalarWhereInput | CollegeCourseScalarWhereInput[]
    OR?: CollegeCourseScalarWhereInput[]
    NOT?: CollegeCourseScalarWhereInput | CollegeCourseScalarWhereInput[]
    id?: IntFilter<"CollegeCourse"> | number
    collegeId?: IntFilter<"CollegeCourse"> | number
    courseId?: IntFilter<"CollegeCourse"> | number
  }

  export type CareerUpsertWithoutCoursesInput = {
    update: XOR<CareerUpdateWithoutCoursesInput, CareerUncheckedUpdateWithoutCoursesInput>
    create: XOR<CareerCreateWithoutCoursesInput, CareerUncheckedCreateWithoutCoursesInput>
    where?: CareerWhereInput
  }

  export type CareerUpdateToOneWithWhereWithoutCoursesInput = {
    where?: CareerWhereInput
    data: XOR<CareerUpdateWithoutCoursesInput, CareerUncheckedUpdateWithoutCoursesInput>
  }

  export type CareerUpdateWithoutCoursesInput = {
    careerName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: CareerUpdaterequiredSkillsInput | string[]
    requiredStream?: NullableStringFieldUpdateOperationsInput | string | null
    futureScope?: NullableStringFieldUpdateOperationsInput | string | null
    careerSkills?: CareerSkillUpdateManyWithoutCareerNestedInput
    recommendations?: RecommendationUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    careerName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: CareerUpdaterequiredSkillsInput | string[]
    requiredStream?: NullableStringFieldUpdateOperationsInput | string | null
    futureScope?: NullableStringFieldUpdateOperationsInput | string | null
    careerSkills?: CareerSkillUncheckedUpdateManyWithoutCareerNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type CourseSkillUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseSkillWhereUniqueInput
    update: XOR<CourseSkillUpdateWithoutCourseInput, CourseSkillUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseSkillCreateWithoutCourseInput, CourseSkillUncheckedCreateWithoutCourseInput>
  }

  export type CourseSkillUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseSkillWhereUniqueInput
    data: XOR<CourseSkillUpdateWithoutCourseInput, CourseSkillUncheckedUpdateWithoutCourseInput>
  }

  export type CourseSkillUpdateManyWithWhereWithoutCourseInput = {
    where: CourseSkillScalarWhereInput
    data: XOR<CourseSkillUpdateManyMutationInput, CourseSkillUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseSkillScalarWhereInput = {
    AND?: CourseSkillScalarWhereInput | CourseSkillScalarWhereInput[]
    OR?: CourseSkillScalarWhereInput[]
    NOT?: CourseSkillScalarWhereInput | CourseSkillScalarWhereInput[]
    id?: IntFilter<"CourseSkill"> | number
    courseId?: IntFilter<"CourseSkill"> | number
    skillId?: IntFilter<"CourseSkill"> | number
  }

  export type RecommendationUpsertWithWhereUniqueWithoutCourseInput = {
    where: RecommendationWhereUniqueInput
    update: XOR<RecommendationUpdateWithoutCourseInput, RecommendationUncheckedUpdateWithoutCourseInput>
    create: XOR<RecommendationCreateWithoutCourseInput, RecommendationUncheckedCreateWithoutCourseInput>
  }

  export type RecommendationUpdateWithWhereUniqueWithoutCourseInput = {
    where: RecommendationWhereUniqueInput
    data: XOR<RecommendationUpdateWithoutCourseInput, RecommendationUncheckedUpdateWithoutCourseInput>
  }

  export type RecommendationUpdateManyWithWhereWithoutCourseInput = {
    where: RecommendationScalarWhereInput
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyWithoutCourseInput>
  }

  export type CollegeCourseCreateWithoutCollegeInput = {
    course: CourseCreateNestedOneWithoutCollegeCoursesInput
  }

  export type CollegeCourseUncheckedCreateWithoutCollegeInput = {
    id?: number
    courseId: number
  }

  export type CollegeCourseCreateOrConnectWithoutCollegeInput = {
    where: CollegeCourseWhereUniqueInput
    create: XOR<CollegeCourseCreateWithoutCollegeInput, CollegeCourseUncheckedCreateWithoutCollegeInput>
  }

  export type CollegeCourseCreateManyCollegeInputEnvelope = {
    data: CollegeCourseCreateManyCollegeInput | CollegeCourseCreateManyCollegeInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationCreateWithoutCollegeInput = {
    score?: number | null
    reason?: string | null
    recommendedAt?: Date | string
    career?: CareerCreateNestedOneWithoutRecommendationsInput
    course?: CourseCreateNestedOneWithoutRecommendationsInput
    user: UserCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateWithoutCollegeInput = {
    id?: number
    userId: number
    careerId?: number | null
    courseId?: number | null
    score?: number | null
    reason?: string | null
    recommendedAt?: Date | string
  }

  export type RecommendationCreateOrConnectWithoutCollegeInput = {
    where: RecommendationWhereUniqueInput
    create: XOR<RecommendationCreateWithoutCollegeInput, RecommendationUncheckedCreateWithoutCollegeInput>
  }

  export type RecommendationCreateManyCollegeInputEnvelope = {
    data: RecommendationCreateManyCollegeInput | RecommendationCreateManyCollegeInput[]
    skipDuplicates?: boolean
  }

  export type CollegeCourseUpsertWithWhereUniqueWithoutCollegeInput = {
    where: CollegeCourseWhereUniqueInput
    update: XOR<CollegeCourseUpdateWithoutCollegeInput, CollegeCourseUncheckedUpdateWithoutCollegeInput>
    create: XOR<CollegeCourseCreateWithoutCollegeInput, CollegeCourseUncheckedCreateWithoutCollegeInput>
  }

  export type CollegeCourseUpdateWithWhereUniqueWithoutCollegeInput = {
    where: CollegeCourseWhereUniqueInput
    data: XOR<CollegeCourseUpdateWithoutCollegeInput, CollegeCourseUncheckedUpdateWithoutCollegeInput>
  }

  export type CollegeCourseUpdateManyWithWhereWithoutCollegeInput = {
    where: CollegeCourseScalarWhereInput
    data: XOR<CollegeCourseUpdateManyMutationInput, CollegeCourseUncheckedUpdateManyWithoutCollegeInput>
  }

  export type RecommendationUpsertWithWhereUniqueWithoutCollegeInput = {
    where: RecommendationWhereUniqueInput
    update: XOR<RecommendationUpdateWithoutCollegeInput, RecommendationUncheckedUpdateWithoutCollegeInput>
    create: XOR<RecommendationCreateWithoutCollegeInput, RecommendationUncheckedCreateWithoutCollegeInput>
  }

  export type RecommendationUpdateWithWhereUniqueWithoutCollegeInput = {
    where: RecommendationWhereUniqueInput
    data: XOR<RecommendationUpdateWithoutCollegeInput, RecommendationUncheckedUpdateWithoutCollegeInput>
  }

  export type RecommendationUpdateManyWithWhereWithoutCollegeInput = {
    where: RecommendationScalarWhereInput
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyWithoutCollegeInput>
  }

  export type CollegeCreateWithoutCollegeCoursesInput = {
    collegeName: string
    location?: string | null
    affiliation?: string | null
    recommendations?: RecommendationCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutCollegeCoursesInput = {
    id?: number
    collegeName: string
    location?: string | null
    affiliation?: string | null
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutCollegeCoursesInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutCollegeCoursesInput, CollegeUncheckedCreateWithoutCollegeCoursesInput>
  }

  export type CourseCreateWithoutCollegeCoursesInput = {
    courseName: string
    stream?: string | null
    duration?: string | null
    eligibility?: string | null
    career?: CareerCreateNestedOneWithoutCoursesInput
    courseSkills?: CourseSkillCreateNestedManyWithoutCourseInput
    recommendations?: RecommendationCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCollegeCoursesInput = {
    id?: number
    courseName: string
    stream?: string | null
    duration?: string | null
    eligibility?: string | null
    careerId?: number | null
    courseSkills?: CourseSkillUncheckedCreateNestedManyWithoutCourseInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCollegeCoursesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCollegeCoursesInput, CourseUncheckedCreateWithoutCollegeCoursesInput>
  }

  export type CollegeUpsertWithoutCollegeCoursesInput = {
    update: XOR<CollegeUpdateWithoutCollegeCoursesInput, CollegeUncheckedUpdateWithoutCollegeCoursesInput>
    create: XOR<CollegeCreateWithoutCollegeCoursesInput, CollegeUncheckedCreateWithoutCollegeCoursesInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutCollegeCoursesInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutCollegeCoursesInput, CollegeUncheckedUpdateWithoutCollegeCoursesInput>
  }

  export type CollegeUpdateWithoutCollegeCoursesInput = {
    collegeName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    recommendations?: RecommendationUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutCollegeCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    collegeName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    recommendations?: RecommendationUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CourseUpsertWithoutCollegeCoursesInput = {
    update: XOR<CourseUpdateWithoutCollegeCoursesInput, CourseUncheckedUpdateWithoutCollegeCoursesInput>
    create: XOR<CourseCreateWithoutCollegeCoursesInput, CourseUncheckedCreateWithoutCollegeCoursesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCollegeCoursesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCollegeCoursesInput, CourseUncheckedUpdateWithoutCollegeCoursesInput>
  }

  export type CourseUpdateWithoutCollegeCoursesInput = {
    courseName?: StringFieldUpdateOperationsInput | string
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility?: NullableStringFieldUpdateOperationsInput | string | null
    career?: CareerUpdateOneWithoutCoursesNestedInput
    courseSkills?: CourseSkillUpdateManyWithoutCourseNestedInput
    recommendations?: RecommendationUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCollegeCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility?: NullableStringFieldUpdateOperationsInput | string | null
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
    courseSkills?: CourseSkillUncheckedUpdateManyWithoutCourseNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CareerSkillCreateWithoutSkillInput = {
    career: CareerCreateNestedOneWithoutCareerSkillsInput
  }

  export type CareerSkillUncheckedCreateWithoutSkillInput = {
    id?: number
    careerId: number
  }

  export type CareerSkillCreateOrConnectWithoutSkillInput = {
    where: CareerSkillWhereUniqueInput
    create: XOR<CareerSkillCreateWithoutSkillInput, CareerSkillUncheckedCreateWithoutSkillInput>
  }

  export type CareerSkillCreateManySkillInputEnvelope = {
    data: CareerSkillCreateManySkillInput | CareerSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type CourseSkillCreateWithoutSkillInput = {
    course: CourseCreateNestedOneWithoutCourseSkillsInput
  }

  export type CourseSkillUncheckedCreateWithoutSkillInput = {
    id?: number
    courseId: number
  }

  export type CourseSkillCreateOrConnectWithoutSkillInput = {
    where: CourseSkillWhereUniqueInput
    create: XOR<CourseSkillCreateWithoutSkillInput, CourseSkillUncheckedCreateWithoutSkillInput>
  }

  export type CourseSkillCreateManySkillInputEnvelope = {
    data: CourseSkillCreateManySkillInput | CourseSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type CareerSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: CareerSkillWhereUniqueInput
    update: XOR<CareerSkillUpdateWithoutSkillInput, CareerSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<CareerSkillCreateWithoutSkillInput, CareerSkillUncheckedCreateWithoutSkillInput>
  }

  export type CareerSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: CareerSkillWhereUniqueInput
    data: XOR<CareerSkillUpdateWithoutSkillInput, CareerSkillUncheckedUpdateWithoutSkillInput>
  }

  export type CareerSkillUpdateManyWithWhereWithoutSkillInput = {
    where: CareerSkillScalarWhereInput
    data: XOR<CareerSkillUpdateManyMutationInput, CareerSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type CourseSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: CourseSkillWhereUniqueInput
    update: XOR<CourseSkillUpdateWithoutSkillInput, CourseSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<CourseSkillCreateWithoutSkillInput, CourseSkillUncheckedCreateWithoutSkillInput>
  }

  export type CourseSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: CourseSkillWhereUniqueInput
    data: XOR<CourseSkillUpdateWithoutSkillInput, CourseSkillUncheckedUpdateWithoutSkillInput>
  }

  export type CourseSkillUpdateManyWithWhereWithoutSkillInput = {
    where: CourseSkillScalarWhereInput
    data: XOR<CourseSkillUpdateManyMutationInput, CourseSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type CareerCreateWithoutCareerSkillsInput = {
    careerName: string
    description?: string | null
    requiredSkills?: CareerCreaterequiredSkillsInput | string[]
    requiredStream?: string | null
    futureScope?: string | null
    courses?: CourseCreateNestedManyWithoutCareerInput
    recommendations?: RecommendationCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateWithoutCareerSkillsInput = {
    id?: number
    careerName: string
    description?: string | null
    requiredSkills?: CareerCreaterequiredSkillsInput | string[]
    requiredStream?: string | null
    futureScope?: string | null
    courses?: CourseUncheckedCreateNestedManyWithoutCareerInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerCreateOrConnectWithoutCareerSkillsInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutCareerSkillsInput, CareerUncheckedCreateWithoutCareerSkillsInput>
  }

  export type SkillCreateWithoutCareerSkillsInput = {
    skillName: string
    courseSkills?: CourseSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutCareerSkillsInput = {
    id?: number
    skillName: string
    courseSkills?: CourseSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutCareerSkillsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutCareerSkillsInput, SkillUncheckedCreateWithoutCareerSkillsInput>
  }

  export type CareerUpsertWithoutCareerSkillsInput = {
    update: XOR<CareerUpdateWithoutCareerSkillsInput, CareerUncheckedUpdateWithoutCareerSkillsInput>
    create: XOR<CareerCreateWithoutCareerSkillsInput, CareerUncheckedCreateWithoutCareerSkillsInput>
    where?: CareerWhereInput
  }

  export type CareerUpdateToOneWithWhereWithoutCareerSkillsInput = {
    where?: CareerWhereInput
    data: XOR<CareerUpdateWithoutCareerSkillsInput, CareerUncheckedUpdateWithoutCareerSkillsInput>
  }

  export type CareerUpdateWithoutCareerSkillsInput = {
    careerName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: CareerUpdaterequiredSkillsInput | string[]
    requiredStream?: NullableStringFieldUpdateOperationsInput | string | null
    futureScope?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: CourseUpdateManyWithoutCareerNestedInput
    recommendations?: RecommendationUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateWithoutCareerSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    careerName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: CareerUpdaterequiredSkillsInput | string[]
    requiredStream?: NullableStringFieldUpdateOperationsInput | string | null
    futureScope?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: CourseUncheckedUpdateManyWithoutCareerNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type SkillUpsertWithoutCareerSkillsInput = {
    update: XOR<SkillUpdateWithoutCareerSkillsInput, SkillUncheckedUpdateWithoutCareerSkillsInput>
    create: XOR<SkillCreateWithoutCareerSkillsInput, SkillUncheckedCreateWithoutCareerSkillsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutCareerSkillsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutCareerSkillsInput, SkillUncheckedUpdateWithoutCareerSkillsInput>
  }

  export type SkillUpdateWithoutCareerSkillsInput = {
    skillName?: StringFieldUpdateOperationsInput | string
    courseSkills?: CourseSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutCareerSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillName?: StringFieldUpdateOperationsInput | string
    courseSkills?: CourseSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type CourseCreateWithoutCourseSkillsInput = {
    courseName: string
    stream?: string | null
    duration?: string | null
    eligibility?: string | null
    collegeCourses?: CollegeCourseCreateNestedManyWithoutCourseInput
    career?: CareerCreateNestedOneWithoutCoursesInput
    recommendations?: RecommendationCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCourseSkillsInput = {
    id?: number
    courseName: string
    stream?: string | null
    duration?: string | null
    eligibility?: string | null
    careerId?: number | null
    collegeCourses?: CollegeCourseUncheckedCreateNestedManyWithoutCourseInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCourseSkillsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCourseSkillsInput, CourseUncheckedCreateWithoutCourseSkillsInput>
  }

  export type SkillCreateWithoutCourseSkillsInput = {
    skillName: string
    careerSkills?: CareerSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutCourseSkillsInput = {
    id?: number
    skillName: string
    careerSkills?: CareerSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutCourseSkillsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutCourseSkillsInput, SkillUncheckedCreateWithoutCourseSkillsInput>
  }

  export type CourseUpsertWithoutCourseSkillsInput = {
    update: XOR<CourseUpdateWithoutCourseSkillsInput, CourseUncheckedUpdateWithoutCourseSkillsInput>
    create: XOR<CourseCreateWithoutCourseSkillsInput, CourseUncheckedCreateWithoutCourseSkillsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCourseSkillsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCourseSkillsInput, CourseUncheckedUpdateWithoutCourseSkillsInput>
  }

  export type CourseUpdateWithoutCourseSkillsInput = {
    courseName?: StringFieldUpdateOperationsInput | string
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility?: NullableStringFieldUpdateOperationsInput | string | null
    collegeCourses?: CollegeCourseUpdateManyWithoutCourseNestedInput
    career?: CareerUpdateOneWithoutCoursesNestedInput
    recommendations?: RecommendationUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCourseSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility?: NullableStringFieldUpdateOperationsInput | string | null
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
    collegeCourses?: CollegeCourseUncheckedUpdateManyWithoutCourseNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type SkillUpsertWithoutCourseSkillsInput = {
    update: XOR<SkillUpdateWithoutCourseSkillsInput, SkillUncheckedUpdateWithoutCourseSkillsInput>
    create: XOR<SkillCreateWithoutCourseSkillsInput, SkillUncheckedCreateWithoutCourseSkillsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutCourseSkillsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutCourseSkillsInput, SkillUncheckedUpdateWithoutCourseSkillsInput>
  }

  export type SkillUpdateWithoutCourseSkillsInput = {
    skillName?: StringFieldUpdateOperationsInput | string
    careerSkills?: CareerSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutCourseSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillName?: StringFieldUpdateOperationsInput | string
    careerSkills?: CareerSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type CareerCreateWithoutRecommendationsInput = {
    careerName: string
    description?: string | null
    requiredSkills?: CareerCreaterequiredSkillsInput | string[]
    requiredStream?: string | null
    futureScope?: string | null
    careerSkills?: CareerSkillCreateNestedManyWithoutCareerInput
    courses?: CourseCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateWithoutRecommendationsInput = {
    id?: number
    careerName: string
    description?: string | null
    requiredSkills?: CareerCreaterequiredSkillsInput | string[]
    requiredStream?: string | null
    futureScope?: string | null
    careerSkills?: CareerSkillUncheckedCreateNestedManyWithoutCareerInput
    courses?: CourseUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerCreateOrConnectWithoutRecommendationsInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutRecommendationsInput, CareerUncheckedCreateWithoutRecommendationsInput>
  }

  export type CollegeCreateWithoutRecommendationsInput = {
    collegeName: string
    location?: string | null
    affiliation?: string | null
    collegeCourses?: CollegeCourseCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutRecommendationsInput = {
    id?: number
    collegeName: string
    location?: string | null
    affiliation?: string | null
    collegeCourses?: CollegeCourseUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutRecommendationsInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutRecommendationsInput, CollegeUncheckedCreateWithoutRecommendationsInput>
  }

  export type CourseCreateWithoutRecommendationsInput = {
    courseName: string
    stream?: string | null
    duration?: string | null
    eligibility?: string | null
    collegeCourses?: CollegeCourseCreateNestedManyWithoutCourseInput
    career?: CareerCreateNestedOneWithoutCoursesInput
    courseSkills?: CourseSkillCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutRecommendationsInput = {
    id?: number
    courseName: string
    stream?: string | null
    duration?: string | null
    eligibility?: string | null
    careerId?: number | null
    collegeCourses?: CollegeCourseUncheckedCreateNestedManyWithoutCourseInput
    courseSkills?: CourseSkillUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutRecommendationsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutRecommendationsInput, CourseUncheckedCreateWithoutRecommendationsInput>
  }

  export type UserCreateWithoutRecommendationsInput = {
    email: string
    name?: string | null
    dob?: Date | string | null
    educationLevel?: string | null
    gender?: string | null
    interests?: UserCreateinterestsInput | string[]
    location?: string | null
    skills?: UserCreateskillsInput | string[]
    assessments?: AssessmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecommendationsInput = {
    id?: number
    email: string
    name?: string | null
    dob?: Date | string | null
    educationLevel?: string | null
    gender?: string | null
    interests?: UserCreateinterestsInput | string[]
    location?: string | null
    skills?: UserCreateskillsInput | string[]
    assessments?: AssessmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecommendationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecommendationsInput, UserUncheckedCreateWithoutRecommendationsInput>
  }

  export type CareerUpsertWithoutRecommendationsInput = {
    update: XOR<CareerUpdateWithoutRecommendationsInput, CareerUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<CareerCreateWithoutRecommendationsInput, CareerUncheckedCreateWithoutRecommendationsInput>
    where?: CareerWhereInput
  }

  export type CareerUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: CareerWhereInput
    data: XOR<CareerUpdateWithoutRecommendationsInput, CareerUncheckedUpdateWithoutRecommendationsInput>
  }

  export type CareerUpdateWithoutRecommendationsInput = {
    careerName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: CareerUpdaterequiredSkillsInput | string[]
    requiredStream?: NullableStringFieldUpdateOperationsInput | string | null
    futureScope?: NullableStringFieldUpdateOperationsInput | string | null
    careerSkills?: CareerSkillUpdateManyWithoutCareerNestedInput
    courses?: CourseUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateWithoutRecommendationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    careerName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requiredSkills?: CareerUpdaterequiredSkillsInput | string[]
    requiredStream?: NullableStringFieldUpdateOperationsInput | string | null
    futureScope?: NullableStringFieldUpdateOperationsInput | string | null
    careerSkills?: CareerSkillUncheckedUpdateManyWithoutCareerNestedInput
    courses?: CourseUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type CollegeUpsertWithoutRecommendationsInput = {
    update: XOR<CollegeUpdateWithoutRecommendationsInput, CollegeUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<CollegeCreateWithoutRecommendationsInput, CollegeUncheckedCreateWithoutRecommendationsInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutRecommendationsInput, CollegeUncheckedUpdateWithoutRecommendationsInput>
  }

  export type CollegeUpdateWithoutRecommendationsInput = {
    collegeName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    collegeCourses?: CollegeCourseUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutRecommendationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    collegeName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    collegeCourses?: CollegeCourseUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CourseUpsertWithoutRecommendationsInput = {
    update: XOR<CourseUpdateWithoutRecommendationsInput, CourseUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<CourseCreateWithoutRecommendationsInput, CourseUncheckedCreateWithoutRecommendationsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutRecommendationsInput, CourseUncheckedUpdateWithoutRecommendationsInput>
  }

  export type CourseUpdateWithoutRecommendationsInput = {
    courseName?: StringFieldUpdateOperationsInput | string
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility?: NullableStringFieldUpdateOperationsInput | string | null
    collegeCourses?: CollegeCourseUpdateManyWithoutCourseNestedInput
    career?: CareerUpdateOneWithoutCoursesNestedInput
    courseSkills?: CourseSkillUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutRecommendationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility?: NullableStringFieldUpdateOperationsInput | string | null
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
    collegeCourses?: CollegeCourseUncheckedUpdateManyWithoutCourseNestedInput
    courseSkills?: CourseSkillUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithoutRecommendationsInput = {
    update: XOR<UserUpdateWithoutRecommendationsInput, UserUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<UserCreateWithoutRecommendationsInput, UserUncheckedCreateWithoutRecommendationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecommendationsInput, UserUncheckedUpdateWithoutRecommendationsInput>
  }

  export type UserUpdateWithoutRecommendationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    assessments?: AssessmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecommendationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: UserUpdateskillsInput | string[]
    assessments?: AssessmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AssessmentCreateManyUserInput = {
    id?: number
    testType?: string | null
    score?: number | null
    stream?: string | null
    strengths?: AssessmentCreatestrengthsInput | string[]
    weaknesses?: AssessmentCreateweaknessesInput | string[]
    createdAt?: Date | string
  }

  export type RecommendationCreateManyUserInput = {
    id?: number
    careerId?: number | null
    courseId?: number | null
    collegeId?: number | null
    score?: number | null
    reason?: string | null
    recommendedAt?: Date | string
  }

  export type AssessmentUpdateWithoutUserInput = {
    testType?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: AssessmentUpdatestrengthsInput | string[]
    weaknesses?: AssessmentUpdateweaknessesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    testType?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: AssessmentUpdatestrengthsInput | string[]
    weaknesses?: AssessmentUpdateweaknessesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    testType?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: AssessmentUpdatestrengthsInput | string[]
    weaknesses?: AssessmentUpdateweaknessesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUpdateWithoutUserInput = {
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    career?: CareerUpdateOneWithoutRecommendationsNestedInput
    college?: CollegeUpdateOneWithoutRecommendationsNestedInput
    course?: CourseUpdateOneWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    collegeId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    collegeId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerSkillCreateManyCareerInput = {
    id?: number
    skillId: number
  }

  export type CourseCreateManyCareerInput = {
    id?: number
    courseName: string
    stream?: string | null
    duration?: string | null
    eligibility?: string | null
  }

  export type RecommendationCreateManyCareerInput = {
    id?: number
    userId: number
    courseId?: number | null
    collegeId?: number | null
    score?: number | null
    reason?: string | null
    recommendedAt?: Date | string
  }

  export type CareerSkillUpdateWithoutCareerInput = {
    skill?: SkillUpdateOneRequiredWithoutCareerSkillsNestedInput
  }

  export type CareerSkillUncheckedUpdateWithoutCareerInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type CareerSkillUncheckedUpdateManyWithoutCareerInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseUpdateWithoutCareerInput = {
    courseName?: StringFieldUpdateOperationsInput | string
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility?: NullableStringFieldUpdateOperationsInput | string | null
    collegeCourses?: CollegeCourseUpdateManyWithoutCourseNestedInput
    courseSkills?: CourseSkillUpdateManyWithoutCourseNestedInput
    recommendations?: RecommendationUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCareerInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility?: NullableStringFieldUpdateOperationsInput | string | null
    collegeCourses?: CollegeCourseUncheckedUpdateManyWithoutCourseNestedInput
    courseSkills?: CourseSkillUncheckedUpdateManyWithoutCourseNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutCareerInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    stream?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecommendationUpdateWithoutCareerInput = {
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    college?: CollegeUpdateOneWithoutRecommendationsNestedInput
    course?: CourseUpdateOneWithoutRecommendationsNestedInput
    user?: UserUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateWithoutCareerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    collegeId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateManyWithoutCareerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    collegeId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollegeCourseCreateManyCourseInput = {
    id?: number
    collegeId: number
  }

  export type CourseSkillCreateManyCourseInput = {
    id?: number
    skillId: number
  }

  export type RecommendationCreateManyCourseInput = {
    id?: number
    userId: number
    careerId?: number | null
    collegeId?: number | null
    score?: number | null
    reason?: string | null
    recommendedAt?: Date | string
  }

  export type CollegeCourseUpdateWithoutCourseInput = {
    college?: CollegeUpdateOneRequiredWithoutCollegeCoursesNestedInput
  }

  export type CollegeCourseUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    collegeId?: IntFieldUpdateOperationsInput | number
  }

  export type CollegeCourseUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    collegeId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseSkillUpdateWithoutCourseInput = {
    skill?: SkillUpdateOneRequiredWithoutCourseSkillsNestedInput
  }

  export type CourseSkillUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseSkillUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type RecommendationUpdateWithoutCourseInput = {
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    career?: CareerUpdateOneWithoutRecommendationsNestedInput
    college?: CollegeUpdateOneWithoutRecommendationsNestedInput
    user?: UserUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
    collegeId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
    collegeId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollegeCourseCreateManyCollegeInput = {
    id?: number
    courseId: number
  }

  export type RecommendationCreateManyCollegeInput = {
    id?: number
    userId: number
    careerId?: number | null
    courseId?: number | null
    score?: number | null
    reason?: string | null
    recommendedAt?: Date | string
  }

  export type CollegeCourseUpdateWithoutCollegeInput = {
    course?: CourseUpdateOneRequiredWithoutCollegeCoursesNestedInput
  }

  export type CollegeCourseUncheckedUpdateWithoutCollegeInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type CollegeCourseUncheckedUpdateManyWithoutCollegeInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type RecommendationUpdateWithoutCollegeInput = {
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    career?: CareerUpdateOneWithoutRecommendationsNestedInput
    course?: CourseUpdateOneWithoutRecommendationsNestedInput
    user?: UserUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateWithoutCollegeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateManyWithoutCollegeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    careerId?: NullableIntFieldUpdateOperationsInput | number | null
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    recommendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerSkillCreateManySkillInput = {
    id?: number
    careerId: number
  }

  export type CourseSkillCreateManySkillInput = {
    id?: number
    courseId: number
  }

  export type CareerSkillUpdateWithoutSkillInput = {
    career?: CareerUpdateOneRequiredWithoutCareerSkillsNestedInput
  }

  export type CareerSkillUncheckedUpdateWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
  }

  export type CareerSkillUncheckedUpdateManyWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    careerId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseSkillUpdateWithoutSkillInput = {
    course?: CourseUpdateOneRequiredWithoutCourseSkillsNestedInput
  }

  export type CourseSkillUncheckedUpdateWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseSkillUncheckedUpdateManyWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
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
  export const dmmf: runtime.BaseDMMF
}