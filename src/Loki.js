import loki from "lokijs";

const db = new loki("Example");

const users = db.addCollection("users", { indices: ["email"] });

users.insert(
  {
    email: "ajith@gmail.com",
    password: "ajith",
    firstname: "ajith",
    lastname: "dollichan",
  },
  {
    email: "vishu@gmail.com",
    password: "vishnu",
    firstname: "vishnu",
    lastname: "sashi",
  }
);

export { users, db };
