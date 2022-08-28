import Notifier from "./Notifer.js";
import NotifierBase from "./NotifierBase.js";

// Create notifier classes here Open/Closed Encapsulation and Ploymprphism
class OnActiveStudyChangeNotifier extends NotifierBase {}
class OnActiveSubjectChangeNotifier extends NotifierBase {}

// Export notifiers here
export namespace EventNotifier {
    export const onActiveStudyChange: Notifier = new OnActiveStudyChangeNotifier()
    export const onActiveSubjectChange: Notifier = new OnActiveSubjectChangeNotifier()
}