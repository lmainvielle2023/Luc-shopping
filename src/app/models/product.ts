export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageURL: string;

    constructor(id: number , name = ' ', description = ' ', price = 0, imageURL = 'https://scx2.b-cdn.net/gfx/news/2018/1-rubikscube.jpg'){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageURL = imageURL;
    }
}


