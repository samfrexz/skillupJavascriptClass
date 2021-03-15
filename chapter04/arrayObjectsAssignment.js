// create three realistic arrays with at least 3 other realistic arrays as element

const schoolItems = [
  ['pen', 'whiteBoard', 'marker'],
  ['writingMaterials', 'duster', 'bags'],
  ['desk', 'chairs', 'blackBoard']
];

console.log(schoolItems[0][2]);
console.log(schoolItems[2][2]);

const carParts = [
  ['rearMirrow', 'engine', 'seatBelt'],
  ['bonnet', 'wiper', 'dashboard'],
  ['brakeLight', 'brake', 'gear']
];

console.log(carParts[0][2]);
console.log(carParts[2][2]);

const buildingMaterials = [
  ['sink', 'ceramicTiles', 'brick'],
  ['granite', 'cement', 'doors'],
  ['sand', 'woods', 'ironRods']
];

console.log(buildingMaterials[0][2]);
console.log(buildingMaterials[2][2]);

// create an array with two realistic objects as its element

const carFeatures = [
  {
    color: 'blue',
    carWeight: '960kg',
    type: 'truck',
    registeration: new Date ()
  },
  {
    wheels: 4,
    seatBelt: true,
    doors: 2,
    carType: 'automatic'
  }
];

console.log(carFeatures[1].carType);

// create 3 realistic objects with at least 10 key-value pairs

const myLaptopFeatures = {
  color: 'black',
  chargingPort: 1,
  screenSize: '14 inches',
  usbPort: 4,
  keyboardLight: false,
  dateBought: new Date (2020, 8),
  laptopName: 'hp EliteBook pro',
  ram: '8gb',
  cardReader: true,
  chargerType: 'typeC'
};

const myPhoneFeatures = {
  phoneName: 'Nokia',
  chargerType: 'typeC',
  simSpaceAttributes: {
    simSlots: 2,
    simSize: 'nano',
    simTray: true,
    simPin: true,
    simSpaceLocation: 'phoneSide'
  },
  model: 6.2,
  screenSize: '450 pixels',
  phoneRearCamera: '16mp',
  phoneFrontCamera: '8mp',
  flashLight: true,
  color: 'green',
  infrared: false
};

const myTvFeatures = {
  tvName: 'LG',
  tvColor: 'black',
  remote: true,
  screenSize: '42inches',
  usbPort: 2,
  hdmiPort: true,
  cablePort: true,
  tvType: 'flat screen',
  cardSlot: false,
  tvDate: new Date(2019, 10)
}

console.log(myTvFeatures.tvDate);