import AppStorage from "../Models/AppStorage.js";
import Subject from "../Models/Subject";
import Study from "../Models/Study.js"
import SubjectService from "./SubjectService.js";
import AppStorageService from "./AppStorageService";
import StudyInfo from "../Models/StudyInfo.js";
// The services needs
// SubjectService
//  Study
// get/set title
// get/set description
// get/set text
// get/set info
// get/set selected
export default class StudyService {
    private _service: SubjectService = new SubjectService()
    private _study: Study = this._service.study

    public get title(): string {
        return this._study.title
    }

    public set title(title: string) {
        this._service.title = title
        this.save()
    }

    public get description(): string {
        return this._study.description
    }

    public set description(description: string) {
        this._study.description = description
        this.save()
    }

    public get text(): string {
        return this._study.text
    }

    public set text(text: string) {
        this._study.text = text
        this.save()
    }

    public get info(): StudyInfo {
        return this._study.info
    }

    public set info(info: StudyInfo) {
        this._study.info = info
        this.save()
    }

    public get selected(): boolean {
        return this._study.selected
    }

    public set selected(selected: boolean) {
        this._study.selected = selected
        this.save()
    }

    private save() {
        this._service.study = this._study
    }
}