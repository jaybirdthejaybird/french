export default class Subject {
    id = '';
    title = 'Subject Title';
    description = 'Describe the Subject';
    activeStudyId = '';
    studyIds = [];
    studies = {};
    constructor(init) {
        Object.assign(this, init);
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
