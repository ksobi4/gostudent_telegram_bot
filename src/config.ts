

let options  = {
    link: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSvt4zcNTLr634DeKerU9bQrs3B6njUkQKTbKb4u9L26FhsuND53IKgmD4-RRRNeFpH4tD7Fzm12WtT/pubhtml?gid=1890552659&range=A1:J&widget=false&chrome=false&headers=false&',
    browser_w: 1000,
    browser_h : 1000,
}

let telegram = {
    audience: [
        '1784005117'
    ]
}

type Sub = {
    id: string,
    name: string;
}

let subjects = [
    {
        id: '1890552659',
        name: 'Fizyka'
    },
    {
        id: '695965261',
        name: 'Matematyka'
    },
    {
        id: '6878166',
        name: 'Informatyka'
    }
]



export {options, subjects, Sub, telegram}