function sortNotif(p) {
    let notifOrder = 1;
    if(p[0] === "-") {
        notifOrder = -1;
        p = p.substr(1);
    }
    return function (a,b) {
        return ((a[p] < b[p]) ? -1 : (a[p] > b[p]) ? 1 : 0)* notifOrder;
    }
}

let People = [
    {Name: "new", Surname: "Surname"},
    {Name:"read", Surname:"ZZZ"},
    {Name: "new", Surname: "AAA"}
];

let data = People.sort(sortNotif("Name"));
console.log(data);