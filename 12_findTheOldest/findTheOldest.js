const findTheOldest = function(people) {
    return people.reduce((current,next) => {
        const currentAge = age(current.yearOfDeath, current.yearOfBirth);
        const nextAge = age(next.yearOfDeath, next.yearOfBirth);
        return currentAge < nextAge ? next : current;
    })
};

    const age = function(deathYear, birthYear) {
        if (!deathYear) {
            deathYear = new Date().getFullYear();
        }
        return (deathYear-birthYear);
};


// Do not edit below this line
module.exports = findTheOldest;
