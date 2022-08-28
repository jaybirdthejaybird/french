import Study from "./Study.js";

export default class Subject {
    public id: string = '';
    public title: string = 'Subject Title';
    public description: string = 'Describe the Subject';
    public activeStudyId: string = '';
    public studyIds: Array<string> = [];
    public studies: { [key: string]: Study } = {};

    constructor(init?: Partial<Subject>) {
        Object.assign(this, init)
    }
}

// The service needs
// AppStorageService
// \_ Subject
// get/set title
// get/set description
// set activeStudyId
// get studies
// get/set study