import AppStorageService from "./AppStorageService.js";
import Study from "../Models/Study.js";
import uuidv4 from "../lib/uuidv4.js";
import { EventNotifier } from "../lib/EventNotifier/index.js";
// The service needs
// - AppStorageService
// - \_ Subject
// - get/set title
// - get/set description
// - set activeStudyId
// - get studies
// - get/set study
// - create study
export default class SubjectService {
    _service = new AppStorageService();
    _subject = this._service.subject;
    get studies() {
        return this._subject.studyIds.map(id => this._subject.studies[id]);
    }
    set activeStudyId(id) {
        if (!this._subject.studyIds.includes(id)) {
            throw new Error(`Study id '${id}' does not exist. Can't select study.`);
        }
        this._subject.activeStudyId = id;
        this._subject.studyIds.forEach((id) => {
            this._subject.studies[id].selected = this._subject.studies[id].id === id;
        });
        this.save();
        EventNotifier.onActiveStudyChange.dispatch();
    }
    get title() {
        return this._subject.title;
    }
    set title(title) {
        this._subject.title = title;
        this.save();
    }
    get description() {
        return this._subject.description;
    }
    set description(description) {
        this._subject.description = description;
        this.save();
    }
    save() {
        this._service.subject = this._subject;
    }
    get study() {
        return this._subject.studies[this._subject.activeStudyId];
    }
    set study(study) {
        if (!this._subject.studyIds.includes(study.id)) {
            throw new Error(`Study id '${study.id}' does not exist. Can't save study.`);
        }
        this._subject.studies[this._subject.activeStudyId] = study;
        this.save();
    }
    createStudy() {
        const id = this.newStudyId;
        this._subject.studyIds.unshift(id);
        this._subject.studies[id] = new Study({ id: id });
        this.activeStudyId = id;
        return this.study;
    }
    get newStudyId() {
        let result = uuidv4();
        while (this._subject.studyIds.includes(result)) {
            result = uuidv4();
        }
        return result;
    }
}
