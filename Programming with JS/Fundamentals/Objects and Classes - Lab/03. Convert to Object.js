function convertToObj(text) {
  let object = JSON.parse(text);

  let entries = Object.entries(object);

  for (let [key, value] of entries) {
    console.log(`${key}: ${value} `);
  }
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');
