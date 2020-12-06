export const getImage = (name) => {
    switch (name) {
        case "super-mario-odyssey.png":
            return (require('../../assets/products/super-mario-odyssey.png'));

        case "call-of-duty-infinite-warfare.png":
            return (require('../../assets/products/call-of-duty-infinite-warfare.png'));

        case "the-witcher-iii-wild-hunt.png":
            return (require('../../assets/products/the-witcher-iii-wild-hunt.png'));

        case "call-of-duty-wwii.png":
            return (require('../../assets/products/call-of-duty-wwii.png'));

        case "mortal-kombat-xl.png":
            return (require('../../assets/products/mortal-kombat-xl.png'));

        case "shards-of-darkness.png":
            return (require('../../assets/products/shards-of-darkness.png'));

        case "terra-media-sombras-de-mordor.png":
            return (require('../../assets/products/terra-media-sombras-de-mordor.png'));

        case "fifa-18.png":
            return (require('../../assets/products/fifa-18.png'));

        case "horizon-zero-dawn.png":
            return (require('../../assets/products/horizon-zero-dawn.png'));

        default:
            break;
    }
}