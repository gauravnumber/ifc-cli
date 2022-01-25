#! /usr/bin/env node
"use strict";
class Ifc {
    constructor() {
        const today = new Date();
        const todayYear = today.getFullYear();
        const resetYear = new Date(todayYear, 0);
        const diffResetYearAndNow = today.getTime() - resetYear.getTime();
        this.numOfDaysThisYear = diffResetYearAndNow / (1000 * 3600 * 24);
        this.numOfDaysThisYear = Math.round(this.numOfDaysThisYear);
        // this.numOfDaysThisYear = 36656;
        this.month = 0;
        this.remainingDays = 0;
        this.calculate(this.numOfDaysThisYear);
    }
    calculate(numOfDaysThisYear) {
        if (numOfDaysThisYear > 365) {
            this.month += Math.floor(this.numOfDaysThisYear / 365);
            this.calculate(numOfDaysThisYear - 365);
        }
        else {
            let month = numOfDaysThisYear / 28;
            this.month = Math.ceil(month);
            this.remainingDays =
                numOfDaysThisYear % 28 === 0 ? 28 : numOfDaysThisYear % 28;
        }
    }
    now() {
        if (this.numOfDaysThisYear % 365 === 0) {
            return "Last Day of the Year";
        }
        return `${this.remainingDays} - ${this.month} - ${new Date().getFullYear()}`;
    }
}
const ifc = new Ifc();
console.log(ifc.now());
//# sourceMappingURL=index.js.map