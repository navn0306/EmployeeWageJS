//To calculate Daily wage
function calDailyWage(empHrs) {
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

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calDailyWage(empHrs));
}

let empWage = calDailyWage(totalEmpHrs);
console.log("UC6 - TotalDays : " + totalWorkingDays + "\nTotal Hours :" + totalEmpHrs + "\nTotal Wage: " + empWage);

//Array Helper Functions
// UC 7A - Calc total wage using array forEach traversal or reduce method.
let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays +
    " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totalEmpWage);
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce: " +
    empDailyWageArr.reduce(totalWages, 0));

//UC 7B - Show the Day along with daily wage using Array map helper function.
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + "=" + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C - Show days when Full time of 160 were earned.
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily wage Filter when Fulltime Wage earned");
console.log(fullDayWageArr);

//UC 7D - Find the first occurance when Full time wage was earned using find function.
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7D - Frist time fulltime wage was earned on Day: " +
    mapDayWithWageArr.find(findFullTimeWage));

//UC 7E - Check if every element of Full time wage is truely holding Full time wage.
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7E - Check all elements have Full time wage: " +
    fullDayWageArr.every(isAllFulltimeWage));

//UC 7F - Check if there is any part time wage.
function isAnyParttimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC 7F - Check if there is any part time wage: " +
    mapDayWithWageArr.some(isAnyParttimeWage));

//UC 7G - Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC 7G - Find the number of days the Employee Worked: " +
    empDailyWageArr.reduce(totalDaysWorked, 0));