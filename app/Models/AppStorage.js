export default class AppStorage {
    activeSubjectId = '';
    subjectIds = [];
    subjects = {};
    constructor(init) {
        Object.assign(this, init);
    }
}
// The service needs
// set activeSubjectId
// get subjects
// createSubject => creates new subject
// get/set subject
