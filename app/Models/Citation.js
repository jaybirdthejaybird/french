export default class Citation {
    id;
    book;
    chapter;
    verse;
    page;
    title;
    section;
    constructor(init) {
        Object.assign(this, init);
    }
}
// Service needs
// StudyInfoService
// Citation
// get/set book
// get/set chapter
// get/set verse
// get/set page
// get/set title
// get/set section
