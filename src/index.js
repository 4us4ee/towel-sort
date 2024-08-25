// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let newArr = [];
    let count = 1;

    for (let elem of matrix) {
        if (count % 2 == 0) {
            elem.reverse();
        }

        count++;
        for (let j = 0; j < elem.length; j++) {
            newArr.push(elem[j]);
        }
    }

    return newArr;
};
