import {
  ApiError,
  BadRequestError,
  NetworkError,
  NotFoundError,
  UnauthorizedError,
  UnhandledExeption,
} from "@/types/http-errors.interface";

export type ApiErrorHandler = (errors: ApiError) => void;

export const badRequestErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } as BadRequestError;
};
export const validationErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } as BadRequestError;
};
export const notFoundErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "سرویس مورد نظر یافت نشد",
  } as NotFoundError;
};
export const unauthorizedErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "دسترسی به سرویس مورد نظر امکان پذیر نمی باشد",
  } as UnauthorizedError;
};
export const unhandledExeptionStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "خطای سرور",
  } as UnhandledExeption;
};
export const networkErrorStrategy = () => {
  throw {
    detail: "خطای شبکه",
  } as NetworkError;
};

export const errorHandler:Record<number,ApiErrorHandler>={
    400:(errorData)=>(errorData.errors?validationErrorStrategy:badRequestErrorStrategy)(errorData),
    403:unauthorizedErrorStrategy,
404:notFoundErrorStrategy,
500:unhandledExeptionStrategy
}