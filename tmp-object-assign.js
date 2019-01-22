// const a = {
//   "group1": {
//     "a": {
//       "title": "a",
//       "contents": [
//         {
//           "title": "a",
//           "aoge": "fuga"
//         }
//       ]
//     }
//   }
// }

// const b = {
//   "group1": {
//     "b": {
//       "title": "b",
//       "contents": [
//         {
//           "title": "b",
//           "boge": "fuga"
//         }
//       ]
//     }
//   }
// }

// const c = {
//   "group2": {
//     "c": {
//       "title": "c",
//       "contents": [
//         {
//           "title": "c",
//           "coge": "fuga"
//         }
//       ]
//     }
//   }
// }

// let obj = Object.assign({}, a, b, c)
// console.log(obj);

const a = {
  a: {
    title: "a",
    group: "group1",
    contents: [
      {
        title: "a",
        hoge: "fugaa"
      }
    ]
  }
};

const b = {
  b: {
    title: "b",
    group: "group1",
    contents: [
      {
        title: "b",
        hoge: "fugab"
      }
    ]
  }
};

const c = {
  c: {
    title: "c",
    group: "group2",
    contents: [
      {
        title: "c",
        hoge: "fugac"
      }
    ]
  }
};

let obj = Object.assign({}, a, b, c);
console.log(obj);

let obj2 = Object.keys(obj).map(key => {
  if (obj[key].group == "group1") return obj[key];
}).filter(e => e);
console.log(obj2);