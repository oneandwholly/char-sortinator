class Records {
    constructor() {
        this.list = []
    }

    addRecord({ unsorted, sorted }) {
        this.list.push({ unsorted, sorted });
    }

    returnRecords() {
        return this.list;
    }
}


module.exports = record;