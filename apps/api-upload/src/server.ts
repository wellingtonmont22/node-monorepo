import app from "./app";
import { env } from "./env";


app.listen(env.PORT, () => console.log(`Running in ${env.PORT}`))