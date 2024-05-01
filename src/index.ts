import chalk from "chalk";
import startServer from "./server/router/startServer.js";

const port = process.env.PORT ?? 4000;

try {
  startServer(port);
} catch (error: unknown) {
  console.log(chalk.red((error as Error).message));

  process.exit(1);
}
