let axios = {
    _fake(url, data){
        return new Promise( (resolve) => {
            setTimeout( () => {
                let responseData = {
                    text: `${url} Loves you`
                };
                if (url.indexOf("it-incubator") > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: "we will prepare students for you"
                    }
                }else if (url.indexOf("google") > 0) {
                    responseData = {
                        vacancies: 15
                    }
                }else if (url.indexOf("microsoft") > 0) {
                    responseData = {
                        vacancies: 20
                    }
                }
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    date: responseData
                })
            }, randomIntFromInterval(1,5) * 1000)
        })
    },
    post(url, data) {
        return this._fake(url, data);
    },
    get(url, data) {
        return this._fake(url, data)
    }
}
let findUserInDB = (id) => {
    const users = [
        {id:1, name: "Dima", friendly: 4},
        {id:2, name: "Alena", friendly: null},
        {id:3, name: "Denis", friendly: 2},
    ]
    return new Promise( (res, rej) => {
        setTimeout( () => {
            let user = users.find(u => u.id == id)
            if(user === null) {
                rej("user not found")
            }else {
                res(user)
            }
        }, randomIntFromInterval(500, 1500))
    })
}
const randomIntFromInterval = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}