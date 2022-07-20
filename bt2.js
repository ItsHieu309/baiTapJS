// Bai 1
function soDuong(arr){
    for(let i=0; i<=arr.length;i++){
        if(arr[i]>0){
            return i + " " + arr[i];
        } 
    }
    return "No result";
}

var arr = [-1,2,3,-2];
console.log(soDuong(arr));

// bai 2

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr) {
    return arr.reduce((newObj, value) =>{
        newObj[value.id] = value;
        return newObj;
    }, {});
}

console.log(groupById(users));

// bai 3 

let user2 =[
    {id: 'john', name: "John", surname: "Smith"},
    {id: 'ann', name: "Ann", surname: "Smith"},
    {id: 'pete', name: "Pete", surname: "Peterson"},
];

function name(){
    return (newUser = user2.map((user3) => ({
        fullName: `${user3.name} ${user3.surname}`,
        id: user3.id
    })));
}

console.log(name(user2));

// bai4 

function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
    }
    let values = ["Hare", "Krishna", "Hare", "Krishna",
       "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];
    alert( unique(values) ); // Hare, Krishna, :-O