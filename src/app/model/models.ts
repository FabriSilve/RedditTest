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
    created : number;
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
