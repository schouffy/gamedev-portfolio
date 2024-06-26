export default class BlogPostData {
    id: string;
    name: string;
    synopses: string;
    date: Date;

    constructor(
        id: string, 
        name: string,
        synopses: string, 
        date: string) 
    {
        this.id = id;
        this.name = name;
        this.synopses = synopses;
        this.date = new Date(date);
    }
}