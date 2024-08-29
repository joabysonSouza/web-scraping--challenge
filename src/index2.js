const testeArray = ['1:37:51', '1:37:51']

const arrayformat = []


function execute(){

    for (let item  of testeArray) {
        let splittedItem = item.split(':');

        arrayformat.push(splittedItem)
        
        
    }

    console.log(arrayformat)



}
execute()

