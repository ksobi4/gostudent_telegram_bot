import axios from 'axios'
import { load } from 'ts-dotenv';


const env = load({
    PORT: Number,
    BASE_URL: String,
    ENV: String
});

export async function callYourself() {

    let url = env.ENV == 'DEV' ? `${env.BASE_URL}:${env.PORT}/call` : `${env.BASE_URL}/call`
    await axios.get(url)
}