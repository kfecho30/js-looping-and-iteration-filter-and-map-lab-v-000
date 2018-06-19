// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function (d) {
    return d.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver(driver, revenue).map(function (m){
    return m.name;
  });
}

function exactMatch(drivers, obj) {
  return drivers.filter(function (d) {
    return d.obj.keys[0]===obj[0];
  });
}

function exactMatchToList() {

}
