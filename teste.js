const products = require('./src/data/products.json');

const sortList = (format, list) => {
    switch (format) {
        case "a-z":
            return list.sort((a,b)=> {
                if(a.name > b.name) return 1;
                if(a.name < b.name) return -1;
                return 0;
            });
        case "price":
            break;
        case "score":
            break;        
    }
} 

console.log(sortList('a-z',products));