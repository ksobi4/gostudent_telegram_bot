import axios from 'axios'
import { load } from 'ts-dotenv';


const env = load({
    PORT: Number,
    BASE_URL: String,
});

export async function callYourself() {
    await axios.get(`${env.BASE_URL}:${env.PORT}/call`)
}