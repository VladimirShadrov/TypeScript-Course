interface PayData {
  sum: number;
  from: number;
  to: number;
}

interface PayRequest extends PayData {}

interface SuccessResponseData extends PayRequest {
  databaseId: number;
}

interface SuccessPayResponse {
  status: string;
  data: SuccessResponseData;
}

interface ErrorPayResponseData {
  errorMessage: string;
  errorCode: number;
}

interface ErrorPayResponse {
  status: string;
  data: ErrorPayResponseData;
}
