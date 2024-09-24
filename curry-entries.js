const defaultCurry = (obj1) => (obj2) => {
  return { ...obj1, ...obj2 };
};

const mapCurry = (func) => (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => func([k, v]))
  );
};

const reduceCurry = (func) => (obj, initialValue) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    return func(acc, [key, value]);
  }, initialValue);
};

const filterCurry = (func) => (obj) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => func([k, v]))
  );
};

const reduceScore = (personnel, initialValue = 0) => {
  return reduceCurry((acc, [_, person]) => {
    if (person.isForceUser) {
      return acc + person.pilotingScore + person.shootingScore;
    }
    return acc;
  })(personnel, initialValue);
};

const filterForce = (personnel) => {
  return filterCurry(([_, person]) => 
    person.isForceUser && person.shootingScore >= 80
  )(personnel);
};

const mapAverage = (personnel) => {
  return mapCurry(([name, person]) => [
    name,
    {
      ...person,
      averageScore: (person.pilotingScore + person.shootingScore) / 2
    }
  ])(personnel);
};