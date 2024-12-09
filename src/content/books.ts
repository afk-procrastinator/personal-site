export interface BookEntry {
  isbn: string;
  title: string;
  authors: string[];
  coverImage: string;
  yearPublished: number;
  dateRead: string; // ISO date string
}

export const books: BookEntry[] = [
  {
    isbn: "9780374275631",
    title: "Thinking, Fast and Slow",
    authors: ["Daniel Kahneman"],
    coverImage: "http://books.google.com/books/content?id=SHvzzuCnuv8C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    yearPublished: 2011,
    dateRead: "2024-10-08"
  },
  {
    isbn: "9780593466490",
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    authors: ["Gabrielle Zevin"],
    coverImage: "http://books.google.com/books/content?id=LML4EAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    yearPublished: 2024,
    dateRead: "2024-07-01"
  },
  {
    isbn: "9780140449334",
    title: "Meditations",
    authors: ["Marcus Aurelius"],
    coverImage: "https://m.media-amazon.com/images/I/81DFDGzHZqL._AC_UF894,1000_QL80_.jpg",
    yearPublished: 2006,
    dateRead: "2024-12-03"
  },
  {
    isbn: "978-0-374-60973-3",
    title: "The New Leviathans",
    authors: ["John Gray"],
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq5GTf65zosoDST3_WcOVGYyF-ZZHpzEE3FQ&s",
    yearPublished: 2023,
    dateRead: "2024-01-05"
  },
  {
    isbn: "978-0-8052-1057-6",
    title: "The Metamorphosis",
    authors: ["Franz Kafka"],
    coverImage: "http://books.google.com/books/content?id=xwp2c1SFDacC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    yearPublished: 1995,
    dateRead: "2024-01-29"
  },
  {
    isbn: "978-0-385-54384-2",
    title: "Interior States",
    authors: ["Meghan O'Gieblyn"],
    coverImage: "http://books.google.com/books/content?id=oVxKDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    yearPublished: 2018,
    dateRead: "2024-02-07"
  },
  {
    isbn: "978-1-63149-694-3",
    title: "The Handover: How We Gave Control of Our Lives to Corporations, States, and AIs",
    authors: ["David Runciman"],
    coverImage: "https://m.media-amazon.com/images/I/61q6IIX8oBL._AC_UF1000,1000_QL80_.jpg",
    yearPublished: 2023,
    dateRead: "2024-02-11"
  },
  {
    isbn: "9780525558620",
    title: "Human Compatible",
    authors: ["Stuart Russell"],
    coverImage: "http://books.google.com/books/content?id=M1eFDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    yearPublished: 2019,
    dateRead: "2024-02-26"
  },
  {
    isbn: "978-0-14-118208-7",
    title: "R.U.R. (Rossum's Universal Robots)",
    authors: ["Karel Capek"],
    coverImage: "http://books.google.com/books/content?id=6tRMPJSOXG8C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    yearPublished: 2004,
    dateRead: "2024-04-06"
  },
  {
    isbn: "978-0-9835321-2-5",
    title: "The Machine Stops",
    authors: ["E.M. Forster"],
    coverImage: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781681460277/the-machine-stops-9781681460277_hr.jpg",
    yearPublished: 2015,
    dateRead: "2024-03-12"
  },
  {
    isbn: "978-0-226-77696-5",
    title: "The Political Philosophy of Hobbes",
    authors: ["Leo Strauss"],
    coverImage: "http://books.google.com/books/content?id=VNunNRuEul4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    yearPublished: 1963,
    dateRead: "2024-03-20"
  },
  {
    isbn: "978-0-7432-4744-3",
    title: "The Corporation",
    authors: ["Joel Bakan"],
    coverImage: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780743247467/the-corporation-9780743247467_hr.jpg",
    yearPublished: 2004,
    dateRead: "2024-04-03"
  },
  {
    isbn: "9780199678112",
    title: "Superintelligence",
    authors: ["Nick Bostrom"],
    coverImage: "http://books.google.com/books/content?id=7_H8AwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    yearPublished: 2014,
    dateRead: "2024-04-03"
  },
  {
    isbn: "9780198777984",
    title: "AI",
    authors: ["Margaret A. Boden"],
    coverImage: "http://books.google.com/books/content?id=yDQTDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    yearPublished: 2016,
    dateRead: "2024-04-08"
  },
  {
    isbn: "9780143128793",
    title: "Frankenstein in Baghdad",
    authors: ["Ahmed Saadawi"],
    coverImage: "http://books.google.com/books/content?id=b4xEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    yearPublished: 2018,
    dateRead: "2024-04-17"
  },
  {
    isbn: "9780525562719",
    title: "God, Human, Animal, Machine",
    authors: ["Meghan O'Gieblyn"],
    coverImage: "http://books.google.com/books/content?id=cNp0EAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    yearPublished: 2022,
    dateRead: "2024-04-20"
  },
  {
    isbn: "9780140282023",
    title: "The Age of Spiritual Machines",
    authors: ["Ray Kurzweil"],
    coverImage: "http://books.google.com/books/content?id=ldAGcyh0bkUC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    yearPublished: 2000,
    dateRead: "2024-05-12"
  },
  {
    isbn: "978-1-368-10120-2",
    title: "On Earth as It Is on Television",
    authors: ["Emily Jane"],
    coverImage: "https://images.penguinrandomhouse.com/cover/9781368101202",
    yearPublished: 2024,
    dateRead: "2024-06-07"
  },
  {
    isbn: "9780807060117",
    title: "Man's Search for Meaning",
    authors: ["Viktor E. Frankl"],
    coverImage: "http://books.google.com/books/content?id=Tx92CgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    yearPublished: 2015,
    dateRead: "2024-06-09"
  },
  {
    isbn: "9780141439700",
    title: "How to Be a Stoic: Using Ancient Philosophy to Live a Modern Life",
    authors: ["Massimo Pigliucci"],
    coverImage: "https://m.media-amazon.com/images/I/81pSMuVoQ0L._SL1500_.jpg",
    yearPublished: 2017,
    dateRead: "2024-11-05"
  },
  {
    isbn: "978-0262730112",
    title: "God and Golem, Inc.",
    authors: ["Massimo Pigliucci"],
    coverImage: "https://m.media-amazon.com/images/I/61kQxb3U3VL._SL1500_.jpg",
    yearPublished: 2017,
    dateRead: "2024-05-05"
  },
  {
    isbn: "978-0393635829",
    title: "The Alignment Problem",
    authors: ["Brian Christian"],
    coverImage: "https://m.media-amazon.com/images/I/71buTbF1YDL._SL1200_.jpg",
    yearPublished: 2024,
    dateRead: "2024-01-30"
  },
  {
    isbn: "9780679720201",
    title: "The Stranger", // The Stranger
    authors: ["Albert Camus"],
    coverImage: "http://books.google.com/books/content?id=iVV7bKVUNBAC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    yearPublished: 1989,
    dateRead: "2024-08-12"
  },
  {
    isbn: "9789390736300",
    title: "How to Win Friends and Influence People", // How to Win Friends and Influence People
    authors: ["Dale Carnegie"],
    coverImage: "https://m.media-amazon.com/images/I/71vK0WVQ4rL._AC_UF894,1000_QL80_.jpg",
    yearPublished: 2024,
    dateRead: "2024-09-12"
  },
  {
    isbn: "",
    title: "Machines of Loving Grace",
    authors: ["Dario Amodei"],
    coverImage: "https://scdd.sfo2.cdn.digitaloceanspaces.com/uploads/original/3X/6/b/6bb02e44d09b7e709a61c129fe655231867739ba.png",
    yearPublished: 2024,
    dateRead: "2024-10-11"
  },
  {
    isbn: "",
    title: "SITUATIONAL AWARENESS: The Decade Ahead",
    authors: ["Leopold Aschenbrenner"],
    coverImage: "https://pbs.twimg.com/media/GRRT17ebQAALd2B.png",
    yearPublished: 2024,
    dateRead: "2024-06-05"
  }
]; 