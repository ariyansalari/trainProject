interface Problem {
  title: string;
  status: number;
  detail?: string;
  errors?: Record<string, string[]>;
}

interface BadRequestError extends Problem {}
interface UnauthorizedError extends Problem {}
interface ValidationError extends Problem {}
interface NotFoundError extends Problem {}
interface UnhandledExeption extends Problem {}
interface NetworkError extends Problem {}
type ApiError=BadRequestError | NetworkError | NotFoundError | UnauthorizedError | UnhandledExeption | ValidationError;

export type {
  Problem,
  BadRequestError,
  NetworkError,
  NotFoundError,
  UnauthorizedError,
  UnhandledExeption,
  ValidationError,
  ApiError
};
