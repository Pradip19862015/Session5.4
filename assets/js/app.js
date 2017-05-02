// Below code about displaying  objects and arrays. JSON in console.
var dispResult = '{"employees":[' +
    '{"name" : "John", "age" : 30, "salary" : 40000, "city" : "Bengaluru", "state" : "Karnataka", "pincode" : 560037},'+
    '{"name" : "Raj", "age" : 20, "salary" : 10000, "city" : "Bengaluru", "state" : "Karnataka", "pincode" : 560027 },'+
    '{"name" : "Mack","age" : 40, "salary" : 43000, "city" : "Bengaluru", "state" : "Karnataka", "pincode" : 560001 },'+
    '{"name" : "Aryan", "age" : 24, "salary" : 21000, "city" : "Chennai", "state" : "Tamilnadu", "pincode" : 55 },'+
    '{"name" : "Venkataramana", "age" : 50, "salary" : 41000, "city" : "Chennai", "state" : "Tamilnadu", "pincode" : 120 }]}';

result = JSON.parse(dispResult);
console.log("%c I am " + result.employees[3].name + " " + result.employees[3].age + " years old, I earn "  
            + result.employees[3].salary + "k Per month & located in " 
            + result.employees[3].city + ", " + result.employees[3].state + ", " + result.employees[3].pincode 
            + ".", 'background: #32e5e5; color: $ffffff;');

 