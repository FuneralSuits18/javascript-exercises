const findTheOldest = function (people) {
  let oldestPerson = people[0];

  for (let i = 1; i < people.length; i++) {
    if (getAge(people[i]) > getAge(people[i - 1])){
      if(getAge(oldestPerson) < getAge(people[i]))
        oldestPerson = people[i];
    }
    else{
      if(getAge(oldestPerson) < getAge(people[i - 1]))
        oldestPerson = people[i - 1];
    }
  }
  return oldestPerson;
};

function getAge(person){
  if(!person.yearOfDeath){
    let death = new Date().getFullYear();
    return death - person.yearOfBirth;
  }
  else
    return person.yearOfDeath - person.yearOfBirth;
}


// Do not edit below this line
module.exports = findTheOldest;
