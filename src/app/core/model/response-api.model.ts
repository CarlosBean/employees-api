export type ResponseStatus = 'success' | 'error';

export interface ResponseApi<Type> {
  status: ResponseStatus;
  data: Type;
}
