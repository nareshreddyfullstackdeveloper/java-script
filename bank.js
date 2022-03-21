class customer {
    constructor(a,b) {
        this.houseNo =a;
        this.city = b;
    }
//
}
class savings_Account extends customer {
    constructor(id,name,amount,houseNo,city) {
        super(houseNo,city);
        this.id = id;
        this.name = name;
        this.amount = amount;
    }

}
let c1 = new savings_Account(101,'Naresh reddy',96000,85,'a.p');
console.log(c1)