type Status = 'success' | 'error';

export interface ResponseApi {
  status: Status;
  data?: any;
}
