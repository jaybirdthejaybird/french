import StudyInfo from "./StudyInfo.js";

export default class Study {
    public id: string = '';
    public title: string = 'New Study';
    public description: string = 'Describe the Study';
    public text: string = '';
    public info: StudyInfo = new StudyInfo();
    public selected: boolean = false;

    constructor(init?: Partial<Study>) {
        Object.assign(this, init)
    }
}

// The services needs
// SubjectService
//  Study
// get/set title
// get/set description
// get/set text
// get/set info
// get/set selected