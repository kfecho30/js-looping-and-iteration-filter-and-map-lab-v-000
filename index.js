// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function (d) {
    return d.revenue > revenue;
  });
}
