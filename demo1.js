// 在这里我们希望name传入的是字符串类型的值
function person(name) {
    return 'Hello' + name;
}
var user = 'wanghui';
document.body.innerHTML = person(user);
function person(name) {
    return 'hello' + Person.firstName + Person.lastName;
}
var user = {
    firstName: 'wang',
    lastName: 'hui'
};
var showValue = person(user);
// 定义一个类
var Student = /** @class */ (function () {
    // 使用构造器定义了三个类
    function Student(firstName, age, lastName) {
        this.firstName = firstName;
        this.age = age;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + age + ' ' + lastName;
    }
    return Student;
}());
function person(name) {
    return "this is my" + Person.firstName + Person.lastName;
}
var newUser = new Student('wang' + '20' + 'hui');
document.body.innerHTML(newUser);
