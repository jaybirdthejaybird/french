import NotifierBase from "./NotifierBase.js";
// Create notifier classes here Open/Closed Encapsulation and Ploymprphism
class OnActiveStudyChangeNotifier extends NotifierBase {
}
class OnActiveSubjectChangeNotifier extends NotifierBase {
}
// Export notifiers here
export var EventNotifier;
(function (EventNotifier) {
    EventNotifier.onActiveStudyChange = new OnActiveStudyChangeNotifier();
    EventNotifier.onActiveSubjectChange = new OnActiveSubjectChangeNotifier();
})(EventNotifier || (EventNotifier = {}));
