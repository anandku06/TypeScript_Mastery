type UserInfo = {
    firstName : string,
    lastName : string,
    age : number
}

type AccountDetails = {
    email : string,
    password : string
}

type Customer = UserInfo & AccountDetails // here the new type has the properties of both the types

const user1 : Customer = {
    firstName : "Anand",
    lastName : "Kumar",
    age : 25,
    email : "example@exam.com",
    password : "hello123"
} // bcz both the types are combined so this type will take the properties of both the type

console.log(user1);
