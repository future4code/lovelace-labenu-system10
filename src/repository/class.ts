import { connection } from "../database/connection";
import { Classes } from "../types";

export const createClass = async (classes: Classes) => {
  await connection.insert({
    id: classes.id,
    name: classes.name,
    module: classes.module,
    startDate: classes.startDate,
    endDate: classes.endDate,
  });
};

