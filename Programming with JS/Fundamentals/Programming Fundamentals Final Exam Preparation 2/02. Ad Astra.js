function adAdstra(input) {
  let text = input.shift();
  let pattern =
    /(\||#)(?<product>[A-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<qty>\d{1,5})\1/g;
  let calories = 0;
  let result = [];

  let match = pattern.exec(text);
  while (match != null) {
    let productName = match[2];
    let expDate = match[3];
    let quantity = Number(match[4]);

    calories += quantity;

    result.push([
      `Item: ${productName}, Best before: ${expDate}, Nutrition: ${quantity}`,
    ]);

    match = pattern.exec(text);
  }

  console.log(
    `You have food to last you for: ${Math.floor(calories / 2000)} days!`
  );

  console.log(result.join('\n'));
}

adAdstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    );
