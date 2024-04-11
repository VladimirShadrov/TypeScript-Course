// Типизируем ответ сервера

// // Запрос в виде платежа
// {
//     "sum": 10000,
//     "from": 2,
//     "to": 4
// }
// // Ответ
// {
//     "status": "success",
//     "data": {
//         "databaseId": 567,
//         "sum": 10000,
//         "from": 2,
//         "to": 4
//     }
// },
// {
//     "status": "failed",
//     "data": {
//         "errorMessage": "Недостаточно средств",
//         "errorCode": 4
//     }
// }

interface PayData {
  sum: number;
  from: number;
  to: number;
}

interface SuccessPayData extends PayData {
  databaseId: number;
}

interface ErrorResponseData {
  errorMessage: string;
  errorCode: number;
}

enum PayStatus {
  success = 'success',
  failed = 'failed',
}

interface SuccessResponse {
  status: PayStatus.success;
  data: SuccessPayData;
}

interface ErrorResponse {
  status: PayStatus.failed;
  data: ErrorResponseData;
}

// Делаем typeguard ответа
function isSuccessResponse(resp: SuccessResponse | ErrorResponse): resp is SuccessResponse {
  if (resp.status === PayStatus.success) {
    return true;
  }
  return false;
}

function getData(resp: SuccessResponse | ErrorResponse): number {
  if (isSuccessResponse(resp)) {
    return resp.data.databaseId;
  } else {
    throw new Error(resp.data.errorMessage);
  }
}
