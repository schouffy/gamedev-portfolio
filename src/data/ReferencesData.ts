
class ReferenceClass {
    id: string;
    name: string;
    iconUrl: string; // used as thumnail
    job: string;
    company: string;
    description: string;

    constructor(id: string, name: string, iconUrl: string, job: string, company: string, html: string){
        this.id = id;
        this.name = name;
        this.iconUrl = iconUrl;
        this.job = job;
        this.company = company;
        this.description = html;
    }
}

export default [ 
new ReferenceClass("kevin","Kevin Baker","","Managing Director","Knowledgemill Limited",
"Gabi is a diligent IT professional who is prepared to go extra mile on a project though he has not worked on it before. He has a wealth of knowledge under his sleeves which normally you wouldn’t find in a fresh graduate. He does not hesitate in applying fresh thinking to even well-established work practices to improve them"),
new ReferenceClass("nilesh","Nilesh Choudhary","","Senior Consultant","Knowledgemill Limited",
"We are so impressed with Gabi’s base technical knowledge, it allowed him to be productive from day one, his work focus is incredible, he just gets on with the job. He delivered an upgraded solution much faster than we expected"),
new ReferenceClass("juanjo","Juan Jose Bermejo ","","Program Analyst & IIB Focal Point","Viewnext",
"Throughout his traineeship, his attitude was excellent, with great teamwork, one of the most engaged technicians in his cohort. I’d like to highlight he’s a gifted student with exceptional potential, a very competent developer indeed."),
 ];
