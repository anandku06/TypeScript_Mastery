let password: string | number = "hello123";
password = 1234231;
// here this password var allows both type to exist in it

let user: UserInfo | AccountDetails = {
    firstName : "Anand",
    lastName : "Kumar",
    age : 23
}

user = {
    email : "example@exam.com",
    password : "12344"
}
// here as well the user var can take values according to either of the type

const items: (number | string)[] = [
    1, 3, 5, 6, "hello"
]
// here this array can take values of either type