import AppStorage from "../Models/AppStorage.js";
import Study from "../Models/Study.js";
import uuidv4 from "../lib/uuidv4.js";
import Subject from "../Models/Subject.js";
import App from "../lib/App.js"
import { EventNotifier } from "../lib/EventNotifier/index.js";

// The service needs
// set activeSubjectId
// get subjects
// createSubject => creates new subject
// get/set subject

export default class AppStorageService {
    constructor() {
        this.appData = this.appData
    }

    public set activeSubjectId(id: string) {
        const data = this.appData

        if (!data.subjectIds.includes(id)) {
            throw new Error(`Subject Id: ${id} does not exist, can't switch subjects.`)
        }

        data.activeSubjectId = id
        this.appData = data;

        EventNotifier.onActiveSubjectChange.dispatch
    }

    private get newSubjectId(): string {
        let result = uuidv4()

        while (this.appData.subjectIds.includes(result)) {
            result = uuidv4()
        } 

        return result
    }

    private get appData(): AppStorage {
        const appDataJson = window.localStorage.getItem(App.Name)
        return JSON.parse(appDataJson) || this.defaultAppStorage     
    }

    private set appData(appData: AppStorage) {
        localStorage.setItem(App.Name, JSON.stringify(appData))    
    }

    private get defaultAppStorage(): AppStorage {
        const key = this.newSubjectId

        return new AppStorage({
            activeSubjectId: key,
            subjectIds: [key],
            subjects: {[key]: new Subject({id: key})}
        })
    }

    public get subject(): Subject {
        const data = this.appData
        return data.subjects[data.activeSubjectId]
    }

    public set subject(subject: Subject) {
        const data = this.appData

        if (!data.subjectIds.includes(subject.id)) {
            throw new Error(`Subject Id: ${subject.id} does not exist, can't update subject.`)
        }

        data.subjects[subject.id] = subject

        this.appData = data
    }

    public get subjects(): Array<Subject> {
        const data = this.appData
        return data.subjectIds.map(key => data.subjects[key])
    }

    public createSubject(): Subject {
        const data = this.appData

        data.activeSubjectId = this.newSubjectId
        data.subjectIds.unshift(data.activeSubjectId)
        data.subjects[data.activeSubjectId] = new Subject({id: data.activeSubjectId})

        this.appData = data
        return this.subject
    }

}