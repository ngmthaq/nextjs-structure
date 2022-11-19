import { DefaultDatabase } from "../database";

export const getUsers = async () => {
  let sql = "SELECT * FROM users";

  return new DefaultDatabase().query(sql);
};
