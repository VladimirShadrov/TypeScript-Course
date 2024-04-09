/* Запрос */
{
    "topicId": 5,
    "status": "published" // "draft", "deleted"
}
/* Ответ */
[
    {
        "question": "Как осуществляется доставка?",
        "answer": "быстро!",
        "tags": [
            "popular",
            "new"
        ],
        "likes": 3,
        "status": "published"
    }
]

enum statusId {
  published,
  draft,
  deleted,
}

async function getFaqs(req: {topicId: number; status: statusId}): Promise<
  {
        "question": string;
        "answer": string
        "tags": string[],
        "likes": number,
        "status": statusId
  }
> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data: {
        "question": string;
        "answer": string
        "tags": string[],
        "likes": number,
        "status": statusId
    } = await res.json();
    return data;
}
