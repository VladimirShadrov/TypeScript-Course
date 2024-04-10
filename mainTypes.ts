// Типизируем объект

// {
//     "officeId": 45,
//     "isOpened": false,
//     "contacts": {
//         "phone": "+79100000000",
//         "email": "my@email.ru",
//         "address": {
//             "city": "Москва"
//         }
//     }
// }

const myObj: {
  officeId: number;
  isOpened: boolean;
  contacts: {
    phone: string;
    email: string;
    address: {
      city: string;
    };
  };
} = {
  officeId: 45,
  isOpened: false,
  contacts: {
    phone: '+79100000000',
    email: 'my@email.ru',
    address: {
      city: 'Москва',
    },
  },
};

// Типизируем функцию
// /* Запрос */
// {
//     "topicId": 5,
//     "status": "published" // "draft", "deleted"
// }
// /* Ответ */
// [
//     {
//         "question": "Как осуществляется доставка?",
//         "answer": "быстро!",
//         "tags": [
//             "popular",
//             "new"
//         ],
//         "likes": 3,
//         "status": "published"
//     }
// ]

enum StatusValues {
  published = 'published',
  draft = 'draft',
  deleted = 'deleted',
}

async function getFaqs(req: { topicId: number; status: StatusValues }): Promise<{
  question: string;
  answer: string;
  tags: string[];
  likes: number;
  status: string;
}> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });
  const data: {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: string;
  } = await res.json();
  return data;
}
