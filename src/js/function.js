import obj from './object.js';
import filter from './filter.js';

export default function orderByProps(object, exampleFilter) {
  const thisObject = object;
  const newOrderArray = [];

  if (exampleFilter) {
    exampleFilter.forEach((element) => {
      newOrderArray.push({
        key: element,
        value: thisObject[element],
      });
      delete thisObject[element];
    });
  }

  const noFilterArray = [];

  for (const item in thisObject) {
    noFilterArray.push({
      key: item,
      value: thisObject[item],
    });
  }

  noFilterArray.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    }
    if (a.key > b.key) {
      return 1;
    }
  });

  const sortedArray = newOrderArray.concat(noFilterArray);

  return sortedArray;
}

orderByProps(obj, filter);
