import AppStorage from "../Models/AppStorage.js";
import Subject from "../Models/Subject.js";
import AppStorageService from "./AppStorageService.js";
import Study from "../Models/Study.js"
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
    private _service: AppStorageService = new AppStorageService()
    private _subject: Subject = this._service.subject

    public get studies(): Array<Study> {
        return this._subject.studyIds.map(
            id => this._subject.studies[id]
        )
    }

    public set activeStudyId(id: string) {
        if (!this._subject.studyIds.includes(id)) {
            throw new Error(`Study id '${id}' does not exist. Can't select study.`)
        }

        this._subject.activeStudyId = id

        this._subject.studyIds.forEach((id) => {
            this._subject.studies[id].selected = this._subject.studies[id].id === id 
        })

        this.save()
        EventNotifier.onActiveStudyChange.dispatch()
    }

    public get title(): string {
        return this._subject.title
    }

    public set title(title: string) {
        this._subject.title = title
        this.save()
    }

    public get description(): string {
        return this._subject.description
    }

    public set description(description: string) {
        this._subject.description = description
        this.save()
    }

    save() {
        this._service.subject = this._subject
    }

    public get study(): Study {
        return this._subject.studies[this._subject.activeStudyId]
    }

    public set study(study: Study) {
        if (!this._subject.studyIds.includes(study.id)) {
            throw new Error(`Study id '${study.id}' does not exist. Can't save study.`)
        }

        this._subject.studies[this._subject.activeStudyId] = study

        this.save()
    }

    public createStudy(): Study {
        const id: string = this.newStudyId
        this._subject.studyIds.unshift(id)
        this._subject.studies[id] = new Study({id: id})
        this.activeStudyId = id
        return this.study
    }
    
    private get newStudyId(): string {
        let result = uuidv4()

        while (this._subject.studyIds.includes(result)) {
            result = uuidv4()
        }

        return result
    }    
}

