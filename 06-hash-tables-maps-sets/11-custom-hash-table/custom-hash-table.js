class HashTable {
    constructor(limit = 14) {
        this.storage = [];
        this.limit = limit;
    }
    _hash(key, max) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % max;
    }


    set(key, value) {
        const index = this._hash(key, this.limit);

        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        } else {
            let inserted = false;
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (!inserted) {
                this.storage[index].push([key, value])
            }
        }
    }

    get(key) {
        const index = this._hash(key, this.limit);

        if (this.storage[index] === undefined) {
            return undefined;
        } else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1];
                }
            }
        }
    }

    remove(key) {
        const index = this._hash(key, this.limit);
        if (this.storage[index]) {
            if (this.storage[index].length === 1 &&
                this.storage[index][0][0] === key
            ) {
                delete this.storage[index];
            }
            else {
                for (let i = 0; i < this.storage[index].length; i++) {
                    if (this.storage[index][i][0] === key) {
                        delete this.storage[index][i];
                    }
                }
            }
        }
    }

    getValues() {
        const values = [];
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i]) {
                for (let j = 0; j < this.storage[i].length; j++) {
                    values.push(this.storage[i][j][1]);
                }
            }
        }

        return values;
    }

    has(key) {
        const index = this._hash(key, this.limit);

        if (this.storage[index]) {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return true;
                }
            }
        }
        return false;
    }

    printTable() {
        // for(let i = 0; i < this.storage.length; i++){
        //     if(this.storage[i]){

        //     }
        // }
        console.log(this.storage);
    }
}

module.exports = HashTable;
