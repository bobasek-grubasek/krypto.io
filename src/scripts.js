//funkcja zamieniajązca liczbe na zapis binarny
export function doBinary(index) {
  let binary = "";
  let value = index;

  while (value >= 1) {
    if (value % 2 === 1) {
      binary += "1";
    } else {
      binary += "0";
    }
    value = Math.floor(value / 2);
  }

  return binary.split("").reverse(); //taki zapis jest poprawny
}

export function doModulo(value, modulo, binaryArr) {
  const binary = binaryArr; //odwrócona do obliczania
  let moduloArr = [];
  // let result = value;

  for (let i = 0; i < binary.length; i++) {
    moduloArr.push(value);
    value = Math.pow(value, 2) % modulo;
  }

  return moduloArr;
}

export function countResult(modulo, binaryArr, moduloArr) {
  const binary = binaryArr; //odwrócona do obliczania
  let resultArr = [1];
  let result = 1; //zawsze 1 jako pierwsze

  for (let i = 0; i < binary.length; i++) {
    if (Number(binary[i]) === 1) {
      // mnożymy
      result = (result * moduloArr[i]) % modulo;
    }

    resultArr.push(result);
  }

  return resultArr;
}


export function countRSA(base, mod) {
  let i = 0;

  let odp = [
    {
      lp: i,
      Ui: 0,
      Uip: 1,
      Vi: 1,
      Vip: 0,
      ni: mod,
      ai: base,
      qi: Math.floor(mod / base),
      ri: mod % base,
    },
  ];
  if (base > 0 && mod > 0) {
    while (odp[i].ri > 0) {
      i++;

      odp.push({
        lp: i,
        Ui: odp[i - 1].Uip - odp[i - 1].qi * odp[i - 1].Ui,
        Uip: odp[i - 1].Ui,
        Vi: odp[i - 1].Vip - odp[i - 1].qi * odp[i - 1].Vi,
        Vip: odp[i - 1].Vi,
        ni: odp[i - 1].ai,
        ai: odp[i - 1].ri,
        qi: Math.floor(odp[i - 1].ai / odp[i - 1].ri),
        ri: odp[i - 1].ai % odp[i - 1].ri,
      });
    }
  }

  return odp;
}

//alfabet
export const alfabet = [
  ["A", 0],
  ["B", 1],
  ["C", 2],
  ["D", 3],
  ["E", 4],
  ["F", 5],
  ["G", 6],
  ["H", 7],
  ["I", 8],
  ["J", 9],
  ["K", 10],
  ["L", 11],
  ["M", 12],
  ["N", 13],
  ["O", 14],
  ["P", 15],
  ["Q", 16],
  ["R", 17],
  ["S", 18],
  ["T", 19],
  ["U", 20],
  ["V", 21],
  ["W", 22],
  ["X", 23],
  ["Y", 24],
  ["Z", 25],
];
