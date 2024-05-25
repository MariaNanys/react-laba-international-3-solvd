const MOCK_DATA = require("./MOCK_DATA");

const needleList = [
  "d462bb76-81ee-46af-9fdb-ebfe53a93d3f",
  "6df55f86-e3f5-4d7b-9cd5-906d8d7e804a",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
  "e04b6074-332f-4661-8f3a-4cdcb3adfb6a",
  "be77abf7-29b0-4ed1-9379-f5d7576cb5ce",
  "3c511860-d159-457d-8374-e8205904e6f5",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
  "e04b6074-332f-4661-8f3a-4cdcb3adfb6a",
  "9c4a0320-1d82-4a46-83b3-511ddffb7ee6",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
  "e04b6074-332f-4661-8f3a-4cdcb3adfb6a",
  "be77abf7-29b0-4ed1-9379-f5d7576cb5ce",
  "3c511860-d159-457d-8374-e8205904e6f5",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
  "d462bb76-81ee-46af-9fdb-ebfe53a93d3f",
  "6df55f86-e3f5-4d7b-9cd5-906d8d7e804a",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
];
function sorting(a, b) {
  if (a.sku < b.sku) {
    return -1;
  }
  if (a.sku > b.sku) {
    return 1;
  }
  return 0;
}
function searchLinear(sku) {
  const obj = MOCK_DATA;
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    if (element.sku === sku) {
      return index;
    }
  }
}
function searchBinary(sku) {
  const obj = MOCK_DATA;
  let start = 0;
  let end = obj.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (obj[middle] < sku) {
      start = middle + 1;
    } else if (obj[middle] > sku) {
      end = middle - 1;
    } else if (obj[middle] === sku) {
      return middle;
    }
  }
  return -1;
}
console.time("straight");
for (let i = 0; i < needleList.length; i++) {
  searchLinear(needleList[i]);
}
console.timeEnd("straight");

MOCK_DATA.sort(sorting);

console.time("binary");
for (let i = 0; i < needleList.length; i++) {
  searchBinary(needleList[i]);
}
console.timeEnd("binary");
