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
        // this.numOfDaysThisYear = 169;
        this.month = 0;
        this.remainingDays = 0;
        this.fixedDays = 365;
        this.todayYear = new Date().getFullYear();
        // this.todayYear = 2020;
        this.calculate(this.numOfDaysThisYear);
    }
    calculate(numOfDaysThisYear) {
        if (this.isLeapYear()) {
            this.fixedDays = 366;
            numOfDaysThisYear =
                numOfDaysThisYear > 169 ? numOfDaysThisYear - 1 : numOfDaysThisYear;
        }
        if (numOfDaysThisYear > this.fixedDays) {
            this.month += Math.floor(this.numOfDaysThisYear / this.fixedDays);
            this.calculate(numOfDaysThisYear - this.fixedDays);
        }
        else {
            let month = numOfDaysThisYear / 28;
            this.month = Math.ceil(month);
            this.remainingDays =
                numOfDaysThisYear % 28 === 0 ? 28 : numOfDaysThisYear % 28;
        }
    }
    isLeapYear() {
        if (this.todayYear % 4 === 0) {
            // if (this.todayYear % 100 === 0) {
            //   if (this.todayYear % 400 === 0) {
            //     return true;
            //   } else {
            //     return false;
            //   }
            // } else {
            //   return true;
            // }
            return true;
        }
        else {
            return false;
        }
    }
    now() {
        if (this.numOfDaysThisYear % this.fixedDays === 0) {
            return "Year Day";
        }
        if (this.isLeapYear()) {
            if (this.numOfDaysThisYear === 169) {
                return "Leap Day";
            }
        }
        return `${this.remainingDays} - ${this.month} - ${this.todayYear}`;
    }
}
const ifc = new Ifc();
console.log(ifc.now());
//# sourceMappingURL=index.js.map