const names = require("./static/names.json");
const lastNames = require("./static/lastNames.json");

module.exports = { 
    generateRandomName: function generateRandomName() {
      const namesObj = Object.values(names);
      const randomName = namesObj[parseInt(Math.random() * namesObj.length)];
      return randomName;
    },
  
    generateRandomLastName: function generateRandomLastName() {
      const lastNamesObj = Object.values(lastNames);
      const randomlastName =
        lastNamesObj[parseInt(Math.random() * lastNamesObj.length)];
      return randomlastName;
    },
  
    generateRandomPerson: function generateRandomPerson() {
      const randomName = this.generateRandomName();
      const randomlastName = this.generateRandomLastName();
  
      var person = {
        personName: randomName,
        lastName: randomlastName,
        email: `${randomName}${randomlastName}@gmail.com`
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, ""),
        phone: this.generateRandomPhoneNumber(),
      };
      return person;
    },
  
    generateRandomPhoneNumber: function generateRandomPhoneNumber() {
      const phoneNumber = "xx 9xxxx-xxxx".replace(/[xy]/g, function (c) {
        const max = 10;
        const min = 0;
        const result = Math.random() * (max - min) + min;
        return Math.floor(result);
      });
      return phoneNumber;
    },
  };