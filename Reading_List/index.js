const books = [
  {
    _id: 1,
    title: "Unlocking Android",
    author: "W. Frank Ableson",
    isRead: false,
  },
  {
    _id: 2,
    title: "Android in Action, Second Edition",
    author: "W. Frank Ableson",
    isRead: false,
  },
  {
    _id: 3,
    title: "Specification by Example",
    author: "Gojko Adzic",
    isRead: true,
  },
];

const consoleText = (books) => {
  books.forEach((element) => {
    const { title, author, isRead } = element;
    if (isRead) {
      console.log(
        `Book title: ${title} from author ${author} already have read`
      );
    } else {
      console.log(
        `Book title: ${title} from author ${author} haven't read yet already have read`
      );
    }
  });
};

consoleText(books);
