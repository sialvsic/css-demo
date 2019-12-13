const data = [
  {
    id: "sYffw0LNr7s",
    originalWidth: 5923,
    originalHeight: 3332,
    primaryColor: "FBF3E6",
    creatorName: "Federico Respini",
    creatorProfileUrl: "https://unsplash.com/@federicorespini",
    thumbUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzNzI2fQ",
    rawUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ"
  },
  {
    id: "wFWQmOyfkkM",
    originalWidth: 3000,
    originalHeight: 2001,
    primaryColor: "F3E2D6",
    creatorName: "Joshua Earle",
    creatorProfileUrl: "https://unsplash.com/@joshuaearle",
    thumbUrl:
      "https://images.unsplash.com/photo-1519293978507-9c6bb9f82eda?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzNzI2fQ",
    rawUrl:
      "https://images.unsplash.com/photo-1519293978507-9c6bb9f82eda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ"
  },
  {
    id: "ciGdq28feDA",
    originalWidth: 3648,
    originalHeight: 4864,
    primaryColor: "AFD8E4",
    creatorName: "Janis Karkossa",
    creatorProfileUrl: "https://unsplash.com/@janisfilmt",
    thumbUrl:
      "https://images.unsplash.com/photo-1560214447-b99d5f20a6ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEzNzI2fQ",
    rawUrl:
      "https://images.unsplash.com/photo-1560214447-b99d5f20a6ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ"
  }
];

const sort = data.slice().sort(function(a, b) {
  return b.originalHeight - a.originalHeight;
});

// 1.根据originalHeight排序 从大到小

const e = {};
let b = 0;
const g = sort.splice(0, 3);
// console.log(g);

// 2. 找出三个中的最小高度
e.minHeight = g.reduce(function(a, b) {
  a > b.originalHeight && (a = b.originalHeight);
  return a;
}, Infinity);

// console.log(e);

// 3.设置定宽 710px
e.oB = 710; //宽度
e.Hs = 0;
e.YQ = {};

// console.log("e的值为");
// console.log(e);
g.forEach(
  (function(a) {
    return function(b) {
      //4200 / 4864 * 3648 => 3150   4200 * 0.75
      //4200 / 4608 * 3456 => 3150   4200 * 0.75
      //4200 / 4200 * 2800 => 2800   4200 * 0.67
      var c = (a.minHeight / b.originalHeight) * b.originalWidth;
      a.YQ[b.id] = c;
      a.Hs += c;
      a.oB -= 10; //间距
    };
  })(e)
);
// console.log("e的更新值为");
// console.log(e);

// { id: 'ciGdq28feDA',
//   originalWidth: 3648,
//   originalHeight: 4864,
// { id: 'i6TiA4Hs4MQ',
//   originalWidth: 3456,
//   originalHeight: 4608,
// { id: 'UcNhoxAs6PQ',
//   originalWidth: 2800,
//   originalHeight: 4200,
// { minHeight: 4200, oB: 710, Hs: 0, YQ: {} }
// 更新为
// { minHeight: 4200,
//   oB: 680,   710 - 10 -10
//   Hs: 9100,  3150 + 3150 + 2800
//   YQ: { ciGdq28feDA: 3150, i6TiA4Hs4MQ: 3150, UcNhoxAs6PQ: 2800 } }

e.OR = e.oB / e.Hs; // 0.074
e.lR = Math.round(e.minHeight * e.OR); //314 高度

b += e.lR;
e.Hs = 0;

console.log("e的更新值为");
console.log(e);

// { minHeight: 4200,
//   oB: 680,
//   Hs: 0,
//   YQ: { ciGdq28feDA: 3150, i6TiA4Hs4MQ: 3150, UcNhoxAs6PQ: 2800 },
//   OR: 0.07472527472527472,
//   lR: 314 }

console.log("g的值为");
console.log(g);
g.forEach(
  (function(a) {
    return function(b) {
      b.height = a.lR;
      var c = Math.floor(a.YQ[b.id] * a.OR);
      b.width = c;
      a.Hs += c;
    };
  })(e)
);

console.log("e的更新值为");
console.log(e);
// { minHeight: 4200,
//   oB: 680,
//   Hs: 679,
//   YQ: { ciGdq28feDA: 3150, i6TiA4Hs4MQ: 3150, UcNhoxAs6PQ: 2800 },
//   OR: 0.07472527472527472,
//   lR: 314 }
console.log("g的值为");
console.log(g);

const root = document.querySelector("#root");
const dom = g.map(item => {
  return `<img src=${item.rawUrl} width=${item.width} height=${item.height}}/>`;
});
console.log(dom);
root.innerHTML = dom;
// [ { id: 'ciGdq28feDA',
//     originalWidth: 3648,
//     originalHeight: 4864,
//     height: 314,
//     width: 235 },
//   { id: 'i6TiA4Hs4MQ',
//     originalWidth: 3456,
//     originalHeight: 4608,
//     height: 314,
//     width: 235 },
//   { id: 'UcNhoxAs6PQ',
//     originalWidth: 2800,
//     originalHeight: 4200,
//     height: 314,
//     width: 209 } ]
