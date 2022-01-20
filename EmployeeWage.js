// UC 11 Object Operations using Arrow Functions.  

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
const WAGE_PER_HOUR = 20;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();

//To calculate Daily wage
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

//To calculate the working hours
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10 % 3);
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push(
        {
            dayNum: totalWorkingDays,
            dailyHours: empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString() {
                return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours +
                    'And Wage Earned = ' + this.dailyWage
            },
        });
}
console.log("UC 10 Showing Daily hours Worked and wage earned: " + empDailyHrsAndWageArr);

//UC 11A - Daily hours worked and wages earned.
let totalWage = empDailyHrsAndWageArr.reduce((totalWage, dailyHrsAndWage) => {
    return totalWage += dailyHrsAndWage.dailyWage;
}, 0);

let totalHours = empDailyHrsAndWageArr.reduce((totalHours, dailyHrsAndWage) => {
    return totalHours += dailyHrsAndWage.dailyHours;
}, 0);
console.log("UC 11A Total Hours : " + totalHours + " Total Wage : " + totalWage);

//UC 11B - Showing full working days using forEach.
process.stdout.write("UC 11B Logging full working days");
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
    .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

//UC 11C - Part time working days.
let partWorkingDayStrArr = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
    .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\nUC 11C PartTimeWorkingDaysString : " + partWorkingDayStrArr);

//UC 11D - Non Working Days usin Map function.
let nonWorkingDaysNums = empDailyHrsAndWageArr
.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
.map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("UC 11D NonWorkingDaysNums : "+nonWorkingDaysNums);

