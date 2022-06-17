const names = require('./static/names.json')
const lastNames = require('./static/lastNames.json')

function generateUUID() {
  let dt = new Date().getTime();
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}

function generateRandomName(){
  const namesObj = Object.values(names)
  const randomName = namesObj[parseInt(Math.random() * namesObj.length)]
  return randomName
}

function generateRandomLastName(){
  const lastNamesObj = Object.values(lastNames)
  const randomlastName = lastNamesObj[parseInt(Math.random() * lastNamesObj.length)]
  return randomlastName
}

function generateRandomPerson() {
  const randomName = generateRandomName()
  const randomlastName = generateRandomLastName()

  var person = {
    personName: randomName,
    lastName: randomlastName,
    email: `${randomName}${randomlastName}@gmail.com`.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
    phone: generateRandomPhoneNumber(),
  };
  return person;
}

function generateRandomPhoneNumber() {
  const phoneNumber = "xx 9xxxx-xxxx".replace(/[xy]/g, function (c) {
    const max = 10;
    const min = 0;
    const result = Math.random() * (max - min) + min;
    return Math.floor(result);
  });
  return phoneNumber;
}

module.exports = {
  generateUUID: generateUUID,
  generateRandomPhoneNumber: generateRandomPhoneNumber,
  generateRandomPerson: generateRandomPerson,
  generateRandomName: generateRandomName,
  generateRandomLastName: generateRandomLastName
};
