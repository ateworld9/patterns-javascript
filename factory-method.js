// Создание класса, который будет создавать определенные объекты на основании входных данных

// Когда нужен?
// - Когда нужно создавать множество однотипных объектов с разными данными

// класс конструктор
class BMW {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

// фабрика
class BMWFactory {
  create(type) {
    switch (type) {
      case 'X5':
        return new BMW(type, 108000, 300);
      case 'X6':
        return new BMW(type, 111000, 320);
    }
  }
}

const factory = new BMWFactory();

const X5 = factory.create('X5'); //BMW { model: 'X5', price: 108000, maxSpeed: 300 }
const X6 = factory.create('X6'); //BMW { model: 'X6', price: 111000, maxSpeed: 320 }
console.log(X5, X6);
// Самый распостраненный кейс использования:
// - Сложность создания объекта в конструкторе
//            чаще всего, когда он создается из не скольких источников
