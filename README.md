# automation-utils

A set of useful methods for the test automation process.


## Installation

Install automation-utils using npm

```bash
  npm install automation-utils
```
    
## Usage

```bash
  var automationUtils = require("automation-utils")

  automationUtils.generateUUID()
```


## Methods

### Jump-to:
- [generateUUID()](#generateUUID)
- [person.generateRandomPerson()](#person.generateRandomPerson)
- [person.generateRandomName()](#person.generateRandomName)
- [person.generateRandomLastName()](#person.generateRandomLastName)
- [person.generateRandomPhoneNumber()](#person.generateRandomPhoneNumber)

### generateUUID()

Creates a Globally Unique Identifier and returns a string.

### person.generateRandomPerson()

Creates a random person with the following attributes:

```javascript
var person = {
        personName: string,
        lastName: string,
        email: string (personName + lastName@gmail.com),
        phone: string (xx xxxxx-xxxx),
      };
```

### person.generateRandomName()

Creates a random name and returns a string.

### person.generateRandomLastName()

Creates a random last name and returns a string.

### person.generateRandomPhoneNumber()

Creates a ranfom phone number and returns a string.
