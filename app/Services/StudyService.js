import SubjectService from "./SubjectService.js";
// The services needs
// SubjectService
//  Study
// get/set title
// get/set description
// get/set text
// get/set info
// get/set selected
export default class StudyService {
    _service = new SubjectService();
    _study = this._service.study;
    get title() {
        return this._study.title;
    }
    set title(title) {
        this._service.title = title;
        this.save();
    }
    get description() {
        return this._study.description;
    }
    set description(description) {
        this._study.description = description;
        this.save();
    }
    get text() {
        return this._study.text;
    }
    set text(text) {
        this._study.text = text;
        this.save();
    }
    get info() {
        return this._study.info;
    }
    set info(info) {
        this._study.info = info;
        this.save();
    }
    get selected() {
        return this._study.selected;
    }
    set selected(selected) {
        this._study.selected = selected;
        this.save();
    }
    save() {
        this._service.study = this._study;
    }
}
