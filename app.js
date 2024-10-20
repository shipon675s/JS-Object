const newSymb = Symbol('key1');

const mobileModel = {
    // Key: value
    brand: 'Realme',
    model: 'c15',
    processor: 'Snapdragon 460',
    camera: ['13MP', '8MP', '5MP', '2MP'],
    hasZoomCamera: false,
    'Selfie camera MP': 8,
    [newSymb]: 'Mykey1',
    brandModel: function() {
            return `Mobile Brand is ${this.brand} and model is ${this.model}`
    },
    battery: {
        mah:5000,
    }
};

mobileModel.model = 'c25';  //! Update Rules

Object.freeze(mobileModel); //! Freeze Rules
mobileModel.model = 'c35';  //! Not working

console.log(mobileModel.hasOwnProperty('camera'));  //! Verification Rules

console.log(Object.keys(mobileModel)); 

console.log(Object.values(mobileModel)); 

console.log(mobileModel.model);

console.log(mobileModel['Selfie camera MP']);

console.log(mobileModel[newSymb]);

console.log(mobileModel.brandModel());

console.log(mobileModel.battery.mah);



//! Multiple Obj has 2 rules:
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
};

const obj2 = {
    p: 1,
    q: 2,
    r: 3,
};

const obj3 = {
    x: 1,
    y: 2,
    z: 3,
};

//! Modern way
const objFinal = {
    ...obj1, ...obj2, ...obj3
};
console.log(objFinal);

//! Best practice
const objFinals = Object.assign({},obj1,obj2,obj3);
console.log(objFinals);



//! Constractor Object
function Person(first, last){
    (this.firstName = first),
    (this.lastName = last);
};

const person1 = new Person('Ibrahim', 'Hossen');
person1.age = 18;
const person2 = new Person('Shipon','Ahmed');

console.log(person1);
console.log(person2);













