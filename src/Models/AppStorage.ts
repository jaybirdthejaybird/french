import Subject from "./Subject.js";

export default class AppStorage {
    public activeSubjectId: string = '';
    public subjectIds: Array<string> = [];
    public subjects: { [key: string]: Subject} = {}
    
    constructor(init?: Partial<AppStorage>) {
        Object.assign(this, init)
    }
}

// The service needs
// set activeSubjectId
// get subjects
// createSubject => creates new subject
// get/set subject