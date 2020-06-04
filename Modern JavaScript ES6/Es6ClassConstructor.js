class MobileDetails {
    constructor(mName, mColor, mPrice, mWidth) {
        this.Name = mName
        this.Color = mColor;
        this.Price = mPrice + ' tk';
        this.Width = mWidth + ' gm';
        this.Wrrenty = '2 year'
    }
    AllDetailsShows() {
        return this.Name + " " + this.Color + " " + this.Price + " " + this.Width + " " + this.Wrrenty;
    }
}

let samsung = new MobileDetails('Samsung A51', 'white', 2999, 170);
console.log(samsung);
console.log(samsung.AllDetailsShows());
let xyami = new MobileDetails('Note 8 pro', 'Parpel', 2599, 180);
console.log(xyami);
console.log(xyami.Price)


class Student {
    constructor(sName, sId, sDepartment, sSection) {
        this.Name = sName;
        this.Id = sId;
        this.Department = sDepartment;
        this.Section = sSection;
        this.UniversityName = 'Daffodils International University,Parmanent Campus'
    }
}

const student = new Student('Siam', '181-15-1886', 'CSE', 'PC-C');
console.log(student);

const student1 = new Student('Munia', '181-15-3682', 'SWE', 'PC-C');
console.log(student1);
console.log(student1.Department);