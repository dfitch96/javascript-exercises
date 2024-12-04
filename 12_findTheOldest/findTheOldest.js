const findTheOldest = function(people) {
    const orderedPeople = people.sort((a, b) =>{
        if (!a.yearOfDeath){
            a.yearOfDeath = (new Date()).getFullYear();
        } else if (!b.yearOfDeath){
            b.yearOfDeath = (new Date()).getFullYear();
        }

        return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth)

    });
    return orderedPeople.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
