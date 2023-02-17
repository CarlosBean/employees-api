type Status = 'success' | 'error';

export interface ResponseApi<Type> {
  status: Status;
  data?: Type;
}
