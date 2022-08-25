  //Kelvin for forecast today
const kelvin = 293;

  //Convert Kelvin in Celsius
let celsius = kelvin - 273;

//Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//Round down Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

//Convert Celsius to Newton
let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton`);