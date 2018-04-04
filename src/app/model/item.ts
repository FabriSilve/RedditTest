/*export class Item {
    public id : string;
    public thumbnail : string;
    public created : Date;
    public num_comments : number;
    public author : string;
    public score : number;
    public permalink : string;
    public title : string;
    public selftext : string;

    constructor(
        id : string,
        thumbnail : string,
        created : Date,
        num_comments : number,
        author : string,
        score : number,
        permalink : string,
        title : string,
        selftext : string
    ) {
        //TODO add control?
        this.id = id;
        this.thumbnail = thumbnail;
        this.created = created;
        this.num_comments = num_comments;
        this.author = author;
        this.score = score;
        this.permalink = permalink;
        this.title = title;
        this.selftext = selftext;
    }
}*/

export interface ServerDataFull {
    data : ServerData;
}

interface ServerData {
    children : ServerChild[];
}

interface ServerChild {
    data : Item;
}

export interface Item {

    id : string;
    thumbnail : string;
    created : Date;
    num_comments : number;
    author : string;
    score : number;
    permalink : string;
    title : string;
    selftext : string;

    
   /* selftext: "",
    id: "89bohr",
    author: "Ollad",
    score: 958,
    thumbnail: "https://a.thumbs.redditmedia.com/LReg0ChxThIlAunOvCYIu-WVMHzbNFJefhDyfY32Bb4.jpg",
    permalink: "/r/sweden/comments/89bohr/lillbabs_är_död_blev_80_år/",
    created: 1522774439,
    num_comments: 98,
    title: "Lill-Babs är död - blev 80 år",*/
}
