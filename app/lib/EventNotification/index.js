import NotifierBase from "./NotifierBase";
export var EventNotifiers;
(function (EventNotifiers) {
    class OnActiveStudyChange extends NotifierBase {
    }
    EventNotifiers.OnActiveStudyChange = OnActiveStudyChange;
    class OnActiveSubjectChange extends NotifierBase {
    }
    EventNotifiers.OnActiveSubjectChange = OnActiveSubjectChange;
})(EventNotifiers || (EventNotifiers = {}));
