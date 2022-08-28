export default class Citation {
    public id: string;
    public book: string;
    public chapter: number;
    public verse: number;
    public page: number;
    public title: string;
    public section: string;

    constructor(init?: Partial<Citation>) {
        Object.assign(this, init)
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