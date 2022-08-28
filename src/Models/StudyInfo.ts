import Citation from "./Citation.js";

export default class StudyInfo {
    public links: Array<string> = [];
    public notes: Array<string> = [];
    public citations: Array<Citation> = [];

    constructor(init?: Partial<StudyInfo>) {
        Object.assign(this, init)
    }
}

// Service needs
// StudyService
// Info
// get/set links
// get/set notes
// get/set citations