//  Bài 1
function factorial(n){
    if( n<1 || n>20 ){
        return "Số không đúng điều kiện";
    }else{

        let factorial = 1; 
        for (let index = 1 ; index <= n; index++) {
            factorial = factorial * index;
        }
        return factorial;
    }
}
console.log(factorial(3));

// Bài 2 

function reverseStr(str){
    var newStr = "";
    for(let index = str.length - 1; index >= 0; index--){
        newStr += str[index];
    }
    return newStr;
}
console.log(reverseStr('HieuTrongVeo'));

// Bài 3

function run(name, job) {
    const person = {
      name: '',
      job: '',
      printIntroduction: function () {
        console.log(`My name is ${this.name}.My job is ${this.job}`);
      },
    };
    const me = Object.create(person);
    me.name = name;
    me.job = job;
    me.printIntroduction();
}

run('Hiếu', 'developer');

// bài 4
function run1() {
    var person = {
      firstName: 'Trung',
      lastName: 'Vuong',
      age: 50,
      eyeColor: 'blue',
    };
    console.log(Object.values(person));
  }
  run1();