const contacts = [
    {name: 'John', phone: '+380694222837'},
    {name: 'Jerry', phone: '+380958183056'},
    {name: 'Sofia', phone: '+380694321876'},
    {name: 'Mat', phone: '+380964321876'},
]
const findPhoneByName = name =>{
    for(const obj of contacts) {
        if(obj.name === name){
            return obj.phone;
        }
    }
};
console.log('Phone:', findPhoneByName('Jerry'));
const phoneBook = {
    Marc: '+380635417742',
    Den: '+380983123456',
    Serap: '+380674321098',
}
const findPhoneByNameInHash = name => phoneBook[name];
console.log('Phone:', findPhoneByNameInHash('Marc'));
