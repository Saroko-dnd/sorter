class Sorter {
    constructor() {
        this._elements = [];
        this._comparator = null;
    }

    add(element) {
        this._elements.push(element);
    }

    at(index) {
        return this._elements[index];
    }

    get length() {
        return this._elements.length;
    }

    toArray() {
        return this._elements;
    }

    sort(indices) {
        const arrayForSort = [];
        const sortedIndices = [...indices].sort(this._defaultComparator);

        sortedIndices.forEach(index =>
            arrayForSort.push(this._elements[index])
        );

        arrayForSort.sort(this._comparator || this._defaultComparator);

        arrayForSort.forEach(
            (element, index) => (this._elements[sortedIndices[index]] = element)
        );
    }

    setComparator(compareFunction) {
        this._comparator = compareFunction;
    }

    _defaultComparator(a, b) {
        return a - b;
    }
}

module.exports = Sorter;
