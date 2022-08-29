import AppStorage from "../Models/AppStorage.js";
import uuidv4 from "../lib/uuidv4.js";
import Subject from "../Models/Subject.js";
import App from "../lib/App.js";
import { EventNotifier } from "../lib/EventNotifier/index.js";
// The service needs
// set activeSubjectId
// get subjects
// createSubject => creates new subject
// get/set subject
export default class AppStorageService {
    constructor() {
        this.appData = this.appData;
    }
    set activeSubjectId(id) {
        const data = this.appData;
        if (!data.subjectIds.includes(id)) {
            throw new Error(`Subject Id: ${id} does not exist, can't switch subjects.`);
        }
        data.activeSubjectId = id;
        this.appData = data;
        EventNotifier.onActiveSubjectChange.dispatch;
    }
    get newSubjectId() {
        let result = uuidv4();
        while (this.appData.subjectIds.includes(result)) {
            result = uuidv4();
        }
        return result;
    }
    get appData() {
        const appDataJson = window.localStorage.getItem(App.Name);
        return JSON.parse(appDataJson) || this.defaultAppStorage;
    }
    set appData(appData) {
        localStorage.setItem(App.Name, JSON.stringify(appData));
    }
    get defaultAppStorage() {
        const key = this.newSubjectId;
        return new AppStorage({
            activeSubjectId: key,
            subjectIds: [key],
            subjects: { [key]: new Subject({ id: key }) }
        });
    }
    get subject() {
        const data = this.appData;
        return data.subjects[data.activeSubjectId];
    }
    set subject(subject) {
        const data = this.appData;
        if (!data.subjectIds.includes(subject.id)) {
            throw new Error(`Subject Id: ${subject.id} does not exist, can't update subject.`);
        }
        data.subjects[subject.id] = subject;
        this.appData = data;
    }
    get subjects() {
        const data = this.appData;
        return data.subjectIds.map(key => data.subjects[key]);
    }
    createSubject() {
        const data = this.appData;
        data.activeSubjectId = this.newSubjectId;
        data.subjectIds.unshift(data.activeSubjectId);
        data.subjects[data.activeSubjectId] = new Subject({ id: data.activeSubjectId });
        this.appData = data;
        return this.subject;
    }
}
