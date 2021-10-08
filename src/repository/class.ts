import { connection } from "../database/connection";
import { Classes } from "../types";

export const createClass = async (classes: Classes) => {
  await connection('cohort').insert({
    id: classes.id,
    name: classes.name,
    module: classes.module,
    start_date: classes.startDate,
    end_date: classes.endDate,
  });
};

