
class Offer {
    refId:string
    student_age: string
    level:string
    weekly_hours: string
    day_hour:string
    add_info: string
    publication_date:string

    constructor(
        refId: string, 
        student_age: string, 
        level: string,
        weekly_hours: string,
        day_hour: string,
        add_info: string,
        publication_date: string
    ) {
        this.refId = refId
        this.student_age = student_age
        this.level = level
        this.weekly_hours = weekly_hours
        this.day_hour = day_hour
        this.add_info = add_info
        this.publication_date = publication_date
    }    
}

class Subject {
    name: string;
    offerList: Offer[];

    constructor(name:string, offerList: Offer[]) {
        this.name = name
        this.offerList = offerList
    }

    addOffer(offer: Offer) {
        this.offerList.push(offer)
    }
}

export {Subject, Offer}