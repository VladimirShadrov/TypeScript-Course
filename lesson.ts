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

interface SuccessResponse {
  status: string;
  data: SuccessPayData;
}

interface ErrorResponse {
  status: string;
  data: ErrorResponseData;
}
