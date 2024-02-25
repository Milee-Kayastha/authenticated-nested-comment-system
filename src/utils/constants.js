export const fakeComments = [
  {
    id: "1",
    body: "Wish you a happer new year Brother",
    username: "Jorge Parker",
    userId: "1",
    parentId: null,
    createdAt: "2024-02-25T07:38:10.112Z",
    replies: [
      {
        id: "10is4f3f1",
        body: "Where is the party?",
        parentId: "1",
        userId: "8",
        username: "Alina",
        createdAt: "2024-02-25T07:38:25.112Z",
      },
      {
        id: "yp9z4dgc5",
        body: "Invite me as well",
        parentId: "1",
        userId: "9",
        username: "Kristina Smith",
        createdAt: "2024-02-25T07:38:35.733Z",
        replies: [
          {
            id: "hiqool0nr",
            body: "No party without me",
            parentId: "yp9z4dgc5",
            userId: "7",
            username: "Jacob",
            createdAt: "2024-02-25T07:38:50.207Z",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    body: "Wish you a very happy new year. Enjoy !!",
    username: "John Park",
    userId: "2",
    parentId: null,
    createdAt: "2024-02-25T07:38:02.112Z",
    replies: [
      {
        id: "wj2354y29",
        body: "Let's meet up!",
        parentId: "2",
        userId: "3",
        username: "Sara",
        createdAt: "2024-02-25T07:38:09.599Z",
      },
    ],
  },
  {
    id: "3",
    body: "Happy New Year!!",
    username: "Sara",
    userId: "3",
    parentId: "1",
    createdAt: "2024-02-25T07:38:17.112Z",
  },
];
