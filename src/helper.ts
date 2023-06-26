import { Subject } from "./class/subject";



export function convertMessage(subjectList: Subject[]):string {
    let str = ''
    for (let subject of subjectList) {
        str += '\n'+subject.name
        for ( let offer of subject.offerList) {
            str += '\n    id='+ offer.refId
            str += '\n    wiek='+ offer.student_age
            str += '\n    '+ offer.level
            str += '\n    '+ offer.weekly_hours
            str += '\n    '+ offer.day_hour
            str += '\n    '+ offer.add_info
            str += '\n    data_publikacji='+ offer.publication_date
            str += '\n'
        }
        if(subject.offerList.length ==0 ) str += '\n    brak'
        str += '\n'
    }

    return str
}