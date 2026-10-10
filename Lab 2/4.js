const fn = () => {
    const person = {name: 'Anton'};
    let person2 = {name: 'Ismail'};
    person.name = 'Mike';
    person2.name = 'Karl';
    person2 = {name: 'Simon'};
    return {person, person2};
};
console.log(fn());
const createUser = (name, city) => ({name, city});
console.log(createUser('Alice', 'New York'));
