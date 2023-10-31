function catalogue(arr) {
    let obj = {};
 
    for (let line of arr) {
        let [productName, price] = line.split(' : ');
        obj[productName] = price;
    }
 
    let sortedItem = Object.entries(obj)
        .sort((a, b) => a[0].localeCompare(b[0]));
 
    print(sortedItem);
 
    function print(arr) {
        let lastName = '';
        for (let line of arr) {
            let name = line[0];
            let firstChar = name.charAt(0);
 
            if (firstChar !== lastName[0]) {
                console.log(`${firstChar}`);
            }
            console.log(`  ${name}: ${line[1]}`);
            lastName = name;
        }
    }
}
 
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);