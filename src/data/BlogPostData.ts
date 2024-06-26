export default class BlogPostData {
    id: string;
    name: string;
    synopses: string;
    date: Date;
    pathToPage: string;

    constructor(
        id: string, 
        name: string,
        synopses: string, 
        date: string,
        pageName: string) 
    {
        this.id = id;
        this.name = name;
        this.synopses = synopses;
        this.date = new Date(date);
        this.pathToPage = "/blog/" + pageName;
    }
}