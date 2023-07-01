
import {diff} from 'json-diff-ts'
import TelegramBot, { SendMessageOptions } from 'node-telegram-bot-api'
import { convertMessage } from "./helper"
import { scrape } from "./scraper"
import {telegram } from './config'

let bot:TelegramBot

import { load } from 'ts-dotenv';


const env = load({
    PORT: Number,
    BASE_URL: String,
    TELEGRAM_TOKEN: String
});

export async function initTelegram() {

    bot = new TelegramBot(env.TELEGRAM_TOKEN, {polling: true})

    for (let id of telegram.audience) {
        bot.sendMessage(id, env.TELEGRAM_TOKEN)
        console.log(env.TELEGRAM_TOKEN)
    }


    bot.onText(/\/info/, async (msg) => {

        const chatId = msg.chat.id;

        let subjectList = await scrape()
        let text = convertMessage(subjectList)

        bot.sendMessage(chatId, text);
    });

    bot.onText(/\/test/, async (msg) => {
        const chatId = msg.chat.id;
        await bot.sendMessage(chatId, 'test');
    });

}



let currentJSON = [
    {
        "name": "Fizyka",
        "offerList": [
        {
            "refId": "1608269069",
            "student_age": "17",
            "level": "3 klasa liceum",
            "weekly_hours": "raz w miesiącu",
            "day_hour": "Środa między 18-19",
            "add_info": " \tbudowa atomu, izotopy, rozpad alfa, beta, gamma oraz czas połowicznego zaniku",
            "publication_date": "09/05/2023"
        },
        {
            "refId": "1636962401",
            "student_age": "",
            "level": "1 klasa technikum  ",
            "weekly_hours": "tylko 1 godzina ",
            "day_hour": "po godzinie 20:00 ",
            "add_info": "Jutro przygotowanie do sprawdzianu, siła i energia podstawa",
            "publication_date": "22/05/2023"
        }
      ]
    },
    {
        "name": "Matematyka",
        "offerList": []
    },
    {
        "name": "Informatyka",
        "offerList": []
    }
]

export async function check() {
    //bot.sendMessage('1784005117', 'check!')

    let subjectList = await scrape()
    let newJSON = JSON.parse(JSON.stringify(subjectList, null, 2))

    let d = diff(currentJSON, newJSON)

    if(d.length != 0) {
        currentJSON = newJSON

        let text = convertMessage(subjectList)

        for (let id of telegram.audience) {
            bot.sendMessage(id, text)
        }
    }

}