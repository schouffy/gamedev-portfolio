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

    fetchDate() {
        return this.fetchDayOfTheWeek() +
            " - " + 
            this.fetchMonth() + 
            " " + 
            this.date.getDate() +
            ", " +
            this.date.getFullYear();
    }

    fetchDayOfTheWeek() {
        switch(this.date.getDay()) {
            case 0:
                return "Monday";
            case 1:
                return "Tuesday";
            case 2:
                return "Wednesday";
            case 3:
                return "Thursday";
            case 4:
                return "Friday";
            case 5:
                return "Saturday";
            default:
                return "Sunday";
        }
    }

    fetchMonth() {
        switch(this.date.getMonth()) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            default:
                return "December";
        }
    }
}