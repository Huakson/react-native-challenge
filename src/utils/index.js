import defaultList from '../data/products.json';

export const formatMoney = (value) => {
    return `R$ ${value.toFixed(2).split('.').join(',')}`;
}

export const sortList = (format, list) => {
    switch (format) {
        case "a-z":
            return list.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            });
        case "price":
            return list.sort((a, b) => {
                if (a.price > b.price) return -1;
                if (a.price < b.price) return 1;
                return 0;
            });
        case "score":
            return list.sort((a, b) => {
                if (a.score > b.score) return -1;
                if (a.score < b.score) return 1;
                return 0;
            });
        default:
            return defaultList;
    }
} 