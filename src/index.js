module.exports = function towelSort(matrix) {
    if (matrix === undefined) return [];
    let arr = [];
    matrix.map((el, i) => i % 2 !== 0 ? el.reverse() : el).forEach(el => arr.push(...el))
    return arr;
}