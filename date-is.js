
function isValid(date) {
  if (typeof date === 'number') {
    date = new Date(date);
  }
  return date instanceof Date && !isNaN(date.getTime());
}

function isAfter(date1, date2) {
  if (typeof date1 === 'number') date1 = new Date(date1);
  if (typeof date2 === 'number') date2 = new Date(date2);
  return isValid(date1) && isValid(date2) && date1.getTime() > date2.getTime();
}

function isBefore(date1, date2) {
  if (typeof date1 === 'number') date1 = new Date(date1);
  if (typeof date2 === 'number') date2 = new Date(date2);
  return isValid(date1) && isValid(date2) && date1.getTime() < date2.getTime();
}

function isFuture(date) {
  if (typeof date === 'number') date = new Date(date);
  return isValid(date) && date.getTime() > Date.now();
}

function isPast(date) {
  if (typeof date === 'number') date = new Date(date);
  return isValid(date) && date.getTime() < Date.now();
}