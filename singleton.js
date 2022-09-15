// Объект, который есть в системе в единственном экземпляре
// и есть глобальная точка доступа к нему

// Когда нужен?
// - Каждый раз когда в системе должен быть объект в единственном экземпляре к которому есть доступ из разных частей программы (корзина \ карта клиента \ инстанс плеера)

const instance1 = {
  name: 'notSingleton',
};

const instance2 = {
  name: 'notSingleton',
};

console.log(instance1 === instance2); // false

console.log({} === {}); // false

//==============================================================================================================================================================================
// 1 реализация (Объявление переменной и класса стоит выносить в отдельный файл(модуль) для замыкания переменной instance в этом модуле)
//
let instance;

class CounterES5 {
  constructor() {
    if (!instance) instance = this;
    instance.count = 0;
    return instance;
  }

  getCount() {
    return instance.count;
  }

  increaseCount() {
    instance.count++;
  }
}

// 2 реализация в es6

class Counter {
  constructor() {
    if (typeof Counter.instance === 'object') return Counter.instance;
    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCount() {
    return instance.count;
  }

  increaseCount() {
    instance.count++;
  }
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

console.log(myCount1.getCount()); // 4
console.log(myCount1.getCount()); // 4
