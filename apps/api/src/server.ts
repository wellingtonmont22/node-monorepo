import app from "./app";
import { env } from "../env";
import { mostraMensagem } from 'utils-string'

console.log(mostraMensagem())

app.listen(env.PORT, () => console.log(`Running in ${env.PORT}`))