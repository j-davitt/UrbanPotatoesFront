export const getComments = async (movie) => {
  console.log(movie.comment)
  return movie.comment
  // return [
  //   {
  //     id: "1",
  //     body: "So happy i saw this at the theatre",
  //     username: "Joseph",
  //     userId: "1",
  //     parentId: null,
  //     createdAt: "2021-08-16T23:00:33.010+02:00",
  //   },
  //   {
  //     id: "2",
  //     body: "Why do they always use the same actors",
  //     username: "Tre",
  //     userId: "2",
  //     parentId: null,
  //     createdAt: "2021-08-16T23:00:33.010+02:00",
  //   },
  //   {
  //     id: "3",
  //     body: "Complete waste of 10$",
  //     username: "Marlon",
  //     userId: "2",
  //     parentId: "1",
  //     createdAt: "2021-08-16T23:00:33.010+02:00",
  //   },
  //   {
  //     id: "4",
  //     body: "Like did the guy behind me really need to kick my chair the entire time, otherwise 9 out of 10",
  //     username: "Yen",
  //     userId: "2",
  //     parentId: "2",
  //     createdAt: "2021-08-16T23:00:33.010+02:00",
  //   },
  //   {
  //     id: "5",
  //     body: "Well I probably will never get those 2 hours back",
  //     username: "",
  //     userId: "2",
  //     parentId: "2",
  //     createdAt: "2021-08-16T23:00:33.010+02:00",
  //   },
  // ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Guest02341",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};