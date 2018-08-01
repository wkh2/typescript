// 在这里我们希望name传入的是字符串类型的值

function person(name:String) {
  return 'Hello' + name
}
let user = 'wanghui'
document.body.innerHTML = person(user)


interface  Person {
  firstName: String,
  lastName: String
}
function person(name:Person) {
  return 'hello' + Person.firstName + Person.lastName
}
let user = {
  firstName:'wang',
  lastName: 'hui'
}
let showValue = person(user)

// 定义一个类

class Student {
  fullName: String,
  // 使用构造器定义了三个类
  constructor(public firstName, public age, public lastName) {
    this.fullName = firstName + ' ' + age + ' ' + lastName
  }
}
interface Person {
  firstName: String,
  lastName: String
}
function person(name:Person) {
  return "this is my" + Person.firstName + Person.lastName
}
let newUser = new Student('wang' + '20' + 'hui')
document.body.innerHTML(newUser)
