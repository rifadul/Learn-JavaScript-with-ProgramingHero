class Perant {
    constructor(fName, mName) {
        this.FatherName = 'Shamim Al Mamun';
        this.MotherName = 'Kalpona Begum';
    }
}

class Child extends Perant {
    constructor(cName, cAge, cBldGroup, cSex) {
        super();
        this.ChildName = cName;
        this.Age = cAge;
        this.BloodGroup = cBldGroup;
        this.Sex = cSex;
    }
    getPerent() {
        return this.FatherName;
    }
}

const yengerBoy = new Child('Siam', 21, 'O+', 'Male');
console.log(yengerBoy.getPerent());
