import StudyInfo from "./StudyInfo.js";
export default class Study {
    id = '';
    title = 'New Study';
    description = 'Describe the Study';
    text = '';
    info = new StudyInfo();
    selected = false;
    constructor(init) {
        Object.assign(this, init);
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
