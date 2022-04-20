function town(arr) {
  let result = {};

  for (let tokens of arr) {
    let city = tokens.split(" | ");
    result.town = city[0];
    result.latitude = Number(city[1]).toFixed(2);
    result.longitude = Number(city[2]).toFixed(2);
    console.log(result);
  }
}

town(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
