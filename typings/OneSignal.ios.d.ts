
declare var ONESIGNAL_VERSION: string;

declare const enum ONE_S_LOG_LEVEL {

	L_NONE = 0,

	L_FATAL = 1,

	L_ERROR = 2,

	L_WARN = 3,

	L_INFO = 4,

	L_DEBUG = 5,

	L_VERBOSE = 6
}

declare class OSNotification extends NSObject {

	static alloc(): OSNotification; // inherited from NSObject

	static new(): OSNotification; // inherited from NSObject

	readonly displayType: OSNotificationDisplayType;

	readonly isAppInFocus: boolean;

	readonly mutableContent: boolean;

	readonly payload: OSNotificationPayload;

	readonly shown: boolean;

	readonly silentNotification: boolean;

	stringify(): string;
}

declare class OSNotificationAction extends NSObject {

	static alloc(): OSNotificationAction; // inherited from NSObject

	static new(): OSNotificationAction; // inherited from NSObject

	readonly actionID: string;

	readonly type: OSNotificationActionType;
}

declare const enum OSNotificationActionType {

	Opened = 0,

	ActionTaken = 1
}

declare const enum OSNotificationDisplayType {

	None = 0,

	InAppAlert = 1,

	Notification = 2
}

declare class OSNotificationOpenedResult extends NSObject {

	static alloc(): OSNotificationOpenedResult; // inherited from NSObject

	static new(): OSNotificationOpenedResult; // inherited from NSObject

	readonly action: OSNotificationAction;

	readonly notification: OSNotification;

	stringify(): string;
}

declare class OSNotificationPayload extends NSObject {

	static alloc(): OSNotificationPayload; // inherited from NSObject

	static new(): OSNotificationPayload; // inherited from NSObject

	readonly actionButtons: NSArray<any>;

	readonly additionalData: NSDictionary<any, any>;

	readonly attachments: NSDictionary<any, any>;

	readonly badge: number;

	readonly body: string;

	readonly contentAvailable: boolean;

	readonly launchURL: string;

	readonly notificationID: string;

	readonly rawPayload: NSDictionary<any, any>;

	readonly sound: string;

	readonly subtitle: string;

	readonly title: string;
}

declare class OneSignal extends NSObject {

	static IdsAvailable(idsAvailableBlock: (p1: string, p2: string) => void): void;

	static alloc(): OneSignal; // inherited from NSObject

	static app_id(): string;

	static deleteTag(key: string): void;

	static deleteTagOnSuccessOnFailure(key: string, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

	static deleteTags(keys: NSArray<any>): void;

	static deleteTagsOnSuccessOnFailure(keys: NSArray<any>, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

	static deleteTagsWithJsonString(jsonString: string): void;

	static getTags(successBlock: (p1: NSDictionary<any, any>) => void): void;

	static getTagsOnFailure(successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

	static initWithLaunchOptionsAppId(launchOptions: NSDictionary<any, any>, appId: string): any;

	static initWithLaunchOptionsAppIdHandleNotificationAction(launchOptions: NSDictionary<any, any>, appId: string, actionCallback: (p1: OSNotificationOpenedResult) => void): any;

	static initWithLaunchOptionsAppIdHandleNotificationActionSettings(launchOptions: NSDictionary<any, any>, appId: string, actionCallback: (p1: OSNotificationOpenedResult) => void, settings: NSDictionary<any, any>): any;

	static initWithLaunchOptionsAppIdHandleNotificationReceivedHandleNotificationActionSettings(launchOptions: NSDictionary<any, any>, appId: string, receivedCallback: (p1: OSNotification) => void, actionCallback: (p1: OSNotificationOpenedResult) => void, settings: NSDictionary<any, any>): any;

	static new(): OneSignal; // inherited from NSObject

	static onesignal_LogMessage(logLevel: ONE_S_LOG_LEVEL, message: string): void;

	static parseNSErrorAsJsonString(error: NSError): string;

	static postNotification(jsonData: NSDictionary<any, any>): void;

	static postNotificationOnSuccessOnFailure(jsonData: NSDictionary<any, any>, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

	static postNotificationWithJsonStringOnSuccessOnFailure(jsonData: string, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

	static promptLocation(): void;

	static registerForPushNotifications(): void;

	static sendTagValue(key: string, value: string): void;

	static sendTagValueOnSuccessOnFailure(key: string, value: string, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

	static sendTags(keyValuePair: NSDictionary<any, any>): void;

	static sendTagsOnSuccessOnFailure(keyValuePair: NSDictionary<any, any>, successBlock: (p1: NSDictionary<any, any>) => void, failureBlock: (p1: NSError) => void): void;

	static sendTagsWithJsonString(jsonString: string): void;

	static setLocationShared(enable: boolean): void;

	static setLogLevelVisualLevel(logLevel: ONE_S_LOG_LEVEL, visualLogLevel: ONE_S_LOG_LEVEL): void;

	static setSubscription(enable: boolean): void;

	static syncHashedEmail(email: string): void;
}

declare var kOSSettingsKeyAutoPrompt: string;

declare var kOSSettingsKeyInAppAlerts: string;

declare var kOSSettingsKeyInAppLaunchURL: string;

declare var kOSSettingsKeyInFocusDisplayOption: string;
