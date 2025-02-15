class MyClass{
    private myProp: number = 0

    get myProperty(): number{
        return this.myProp
    }

    set myProperty(value : number){
        this.myProp = value
    }
}

const instance = new MyClass()

console.log(`Previous Value: ${instance.myProperty}`) // using the get property to get the value of this private member
instance.myProperty = 123 // using the set property to set the value by assignment

console.log(`Current Value: ${instance.myProperty}`)