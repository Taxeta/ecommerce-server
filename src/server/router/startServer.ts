import "dotenv/config";
import chalk from "chalk";
import app from "./indexRouter.js";

const startServer = (port: string | number) => {
  app.listen(+port, () => {
    console.log(chalk.green(`http://localhost:${port}`));
  });
};
export default startServer;
