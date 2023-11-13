function cats(catData) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }

        meow() {
            return `${this.name}, age ${this.age} says Meow`
        }
    }

    for (let data of catData) {
        let [name, age] = data.split(" ")
        tom = new Cat(name, age)
        console.log(tom.meow())
    }
}

data = ['Mellow 2', 'Tom 5'];
cats(data)