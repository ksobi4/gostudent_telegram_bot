import express from 'express'
import { load } from 'ts-dotenv';
import { strict as assert } from 'assert';
import { check, initTelegram } from './telegram'
import { callYourself } from './antisleeper';

const env = load({
    PORT: Number,
    BASE_URL: String,
});

assert.ok(env.PORT === 3000);

const app = express();
const port = env.PORT

let now: Date = new Date()
let lastCall = new Date()

app.get('/', (req, res) => {
    res.send(
        `Go student Lista Okazji bot ON <br/>
        since ${now.getDate()}-${now.getMonth()}-${now.getFullYear()} | godz =${now.getHours()}:${now.getMinutes() <10 ? '0'+ now.getMinutes().toString() : now.getMinutes()} <br/>
        last call ${lastCall.getDate()}-${lastCall.getMonth()}-${lastCall.getFullYear()} | godz =${lastCall.getHours()}:${lastCall.getMinutes() <10 ? '0'+ lastCall.getMinutes().toString() : lastCall.getMinutes()}
    `)
})

app.get('/call', (req, res) => {
    lastCall = new Date()
    // console.log('api was called')
    res.send('got it')
})

initTelegram()
//setInterval(check, 5*60*1000) //check updates on gostudent
//setInterval(callYourself, 1*60*1000)




app.listen(port, () => {
    console.log(`[server]: Server is running at ${env.BASE_URL}:${port}`);
  });
