// const promise2 = findUserInDB(1)
// const promise2_2 = promise2.then((user) => { return 100})
// console.log(promise2_2)
// promise2_2.then(name => console.log(name))

/*findUserInDB(1)
    .then(user => user.name)
    .then(name => console.log(name))*/


// axios.get("https://google.com")
//     .then(response => response.data)
//     .then(data => console.log(data))
const getVacanciesCountFromGoogle = () => {
    // const pr = axios.get("https://google.com")
    // const pr2 = pr.then(res => res.data)
    // return pr2
    return axios.get("https://google.com")
        .then(res = res.data)
        .then(data = data.vacancies)
}
getVacanciesCountFromGoogle()
    .then(count => console.log(count))