import mysql from "mysql";

class DefaultDatabase {
  connection;

  prepare(sql) {
    this.connection = mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    return new Promise((resolve, reject) => {
      this.connection.query(sql, (error, result) => {
        this.connection.destroy();
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  async query(sql) {
    try {
      let result = await this.prepare(sql);

      return {
        status: "success",
        data: result,
      };
    } catch (error) {
      return {
        status: "error",
        error: error,
      };
    }
  }
}

export default DefaultDatabase;
