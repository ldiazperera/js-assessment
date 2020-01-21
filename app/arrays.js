exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) return i;
    }

    return -1;
  },

  sum: function(arr) {
     let total = 0;

     for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }

    return total;
  },

  remove: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) arr[i] = null;
    }
    
    let newArray = arr.filter(function(element) {
      return element != null;
    });

    return newArray;
  },

  removeWithoutCopy: function(arr, item) {
    var i;
    var len;

    for (i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return [...arr1, ...arr2];
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) count ++;
    }

    return count;
  },

  duplicates: function(arr) {
    let duplicates = [];
    arr.sort();

    for (let i = 0; i < arr.length; i++) {

      if (arr[i] === arr[i+1]) {
        if (duplicates.indexOf(arr[i]) === -1) {
          duplicates.push(arr[i]);
        }
      }
    }

    return duplicates;
  },

  square: function(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      newArray.push(arr[i] * arr[i]);
    }

    return newArray;
  },

  findAllOccurrences: function(arr, target) {
    let rep = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) rep.push(i);
    }

    return rep;
  }
};
