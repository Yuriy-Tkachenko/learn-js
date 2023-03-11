let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }
        console.log(list.value);
    }

printReverseList(list);

function printReverseList(list) {
    let items = list;
    let arr = [];

    while (items) {
        arr.push(items.value);
        tmp = items.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}