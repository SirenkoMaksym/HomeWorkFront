// Создайте классы: Plant, Rose.
// Роза должна наследовать Растение. Пусть у растения будут поля:

// рост,
// возраст.
// И метод grow, который увеличивает его рост на 10 см.

// У розы должно быть поле - количество бутонов (numberOfFlowers). Создайте объект класса розы, вызовите метод.


class Plant {
    constructor(grosse, lebensalter){
        this.grosse=grosse
        this.lebensalter=lebensalter
    }
    grow(){
        this.grosse+=0.1
    }
}

class Rosa extends Plant {
    constructor(grosse, lebensalter, numberOfFlowers ){
        super(grosse, lebensalter)
        this.numberOfFlowers=numberOfFlowers
    }
}

const dikaya = new Rosa(2,15,1)
dikaya.grow()
console.log(dikaya)