import axios from "axios"
import { CheerioAPI, load } from "cheerio"
import { Sub, options, subjects,  } from "./config"
import { Offer, Subject } from "./class/subject"


async function scrape(): Promise<Subject[]> {
    let {data} = await axios.get(options.link)

    const $ = load(data)

    let subjectList: Subject[] = []

    for (let sub of subjects) {
        let trlist = $(`#${sub.id} > div > table > tbody > tr`)

        let outputSubject = new Subject(sub.name, [])

        let i = 1
        while(true) {
            let refId = $($(trlist[i]).children('td.s14')[0]).text()
            if(refId == '') {
                break
            } else {
                refId = refId.split(': ')[1]
                let student_age = $($(trlist[i]).children('td.s16')[0]).text()
                let level = $($(trlist[i]).children('td.s16')[1]).text()
                let weekly_hours = $($(trlist[i]).children('td.s16')[2]).text()
                let day_hour = $($(trlist[i]).children('td.s16')[3]).text()

                let add_info = $($(trlist[i]).children('td.s17')[0]).text()
                let publication_date = $($(trlist[i]).children('td.s17')[1]).text()
                
                let offer = new Offer(
                    refId,student_age,level,weekly_hours,day_hour,add_info,publication_date
                )

                outputSubject.addOffer(offer)
            }

            i++
        }

        subjectList.push(outputSubject)
    }

    return subjectList

}

export {scrape}