
declare module com {
	export module onesignal {
		export class ADMMessageHandler extends com.amazon.device.messaging.ADMMessageHandlerBase {
			public onRegistrationError(param0: string): void;
			public onUnregistered(param0: string): void;
			public onTrimMemory(param0: number): void;
			public constructor(param0: android.content.Context);
			public constructor();
			public constructor(param0: string);
			public onMessage(param0: android.content.Intent): void;
			public onRegistered(param0: string): void;
		}
		export module ADMMessageHandler {
			export class Receiver extends com.amazon.device.messaging.ADMMessageReceiver {
				public constructor(param0: java.lang.Class);
				public constructor();
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class ActivityLifecycleHandler extends java.lang.Object {
			public static removeActivityAvailableListener(param0: com.onesignal.ActivityLifecycleHandler.ActivityAvailableListener): void;
		}
		export module ActivityLifecycleHandler {
			export class ActivityAvailableListener extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.onesignal.ActivityLifecycleHandler$ActivityAvailableListener interface with the provided implementation.
				 */
				public constructor(implementation: {
					available(param0: android.app.Activity): void;
				});
				public available(param0: android.app.Activity): void;
			}
			export class AppFocusRunnable extends java.lang.Object implements java.lang.Runnable {
				public run(): void;
			}
			export class FocusHandlerThread extends android.os.HandlerThread {
				public run(): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class ActivityLifecycleListener extends java.lang.Object implements android.app.Application.ActivityLifecycleCallbacks {
			public onActivityResumed(param0: android.app.Activity): void;
			public onActivityStopped(param0: android.app.Activity): void;
			public onActivitySaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;
			public onActivityCreated(param0: android.app.Activity, param1: android.os.Bundle): void;
			public onActivityPaused(param0: android.app.Activity): void;
			public onActivityDestroyed(param0: android.app.Activity): void;
			public onActivityStarted(param0: android.app.Activity): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class ActivityLifecycleListenerCompat extends java.lang.Object {
		}
	}
}

declare module com {
	export module onesignal {
		export class AdvertisingIdProviderGPS extends java.lang.Object implements com.onesignal.AdvertisingIdentifierProvider {
			public getIdentifier(param0: android.content.Context): string;
		}
	}
}

declare module com {
	export module onesignal {
		export class AdvertisingIdentifierProvider extends java.lang.Object {
			/**
			 * Constructs a new instance of the com.onesignal.AdvertisingIdentifierProvider interface with the provided implementation.
			 */
			public constructor(implementation: {
				getIdentifier(param0: android.content.Context): string;
			});
			public getIdentifier(param0: android.content.Context): string;
		}
	}
}

declare module com {
	export module onesignal {
		export class AndroidSupportV4Compat extends java.lang.Object {
		}
		export module AndroidSupportV4Compat {
			export class ActivityCompat extends java.lang.Object {
			}
			export class ActivityCompatApi23 extends java.lang.Object {
			}
			export class ContextCompat extends java.lang.Object {
			}
			export class RequestPermissionsRequestCodeValidator extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.onesignal.AndroidSupportV4Compat$RequestPermissionsRequestCodeValidator interface with the provided implementation.
				 */
				public constructor(implementation: {
					validateRequestPermissionsRequestCode(param0: number): void;
				});
				public validateRequestPermissionsRequestCode(param0: number): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class BadgeCountUpdater extends java.lang.Object {
		}
	}
}

declare module com {
	export module onesignal {
		export class BootUpReceiver extends android.support.v4.content.WakefulBroadcastReceiver {
			public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class BuildConfig extends java.lang.Object {
			public static DEBUG: boolean;
			public static APPLICATION_ID: string;
			public static BUILD_TYPE: string;
			public static FLAVOR: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class GcmBroadcastReceiver extends android.support.v4.content.WakefulBroadcastReceiver {
			public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class GcmIntentService extends android.app.IntentService {
			public onHandleIntent(param0: android.content.Intent): void;
			public onTrimMemory(param0: number): void;
			public constructor(param0: android.content.Context);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module onesignal {
		export class GenerateNotification extends java.lang.Object {
		}
	}
}

declare module com {
	export module onesignal {
		export class GoogleApiClientCompatProxy extends java.lang.Object {
			public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
			public connect(): void;
			public realInstance(): com.google.android.gms.common.api.GoogleApiClient;
			public disconnect(): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class LocationGMS extends java.lang.Object {
		}
		export module LocationGMS {
			export class GoogleApiClientListener extends java.lang.Object implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
				public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
				public onConnectionSuspended(param0: number): void;
				public onConnected(param0: android.os.Bundle): void;
			}
			export class LocationHandler extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.onesignal.LocationGMS$LocationHandler interface with the provided implementation.
				 */
				public constructor(implementation: {
					complete(param0: java.lang.Double, param1: java.lang.Double, param2: java.lang.Float, param3: java.lang.Integer): void;
				});
				public complete(param0: java.lang.Double, param1: java.lang.Double, param2: java.lang.Float, param3: java.lang.Integer): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class NotificationBundleProcessor extends java.lang.Object {
		}
	}
}

declare module com {
	export module onesignal {
		export abstract class NotificationExtenderService extends android.app.IntentService {
			public onHandleIntent(param0: android.content.Intent): void;
			public onTrimMemory(param0: number): void;
			public onNotificationProcessing(param0: com.onesignal.OSNotificationReceivedResult): boolean;
			public constructor(param0: android.content.Context);
			public displayNotification(param0: com.onesignal.NotificationExtenderService.OverrideSettings): com.onesignal.OSNotificationDisplayedResult;
			public constructor();
			public constructor(param0: string);
		}
		export module NotificationExtenderService {
			export class OverrideSettings extends java.lang.Object {
				public extender: android.support.v4.app.NotificationCompat.Extender;
				public androidNotificationId: java.lang.Integer;
				public constructor();
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class NotificationOpenedActivity extends android.app.Activity {
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
			public onPanelClosed(param0: number, param1: android.view.Menu): void;
			public onSearchRequested(): boolean;
			public onTrimMemory(param0: number): void;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onActionModeFinished(param0: android.view.ActionMode): void;
			public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
			public onCreatePanelView(param0: number): android.view.View;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public onDetachedFromWindow(): void;
			public onActionModeStarted(param0: android.view.ActionMode): void;
			public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
			public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
			public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
			public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
			public onSearchRequested(param0: android.view.SearchEvent): boolean;
			public constructor();
			public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;
			public constructor(param0: android.content.Context, param1: number);
			public onProvideKeyboardShortcuts(param0: java.util.List, param1: android.view.Menu, param2: number): void;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onNewIntent(param0: android.content.Intent): void;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
			public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
			public constructor(param0: android.content.Context);
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
			public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
			public onWindowFocusChanged(param0: boolean): void;
			public onAttachedToWindow(): void;
			public onCreate(param0: android.os.Bundle): void;
			public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
			public onContentChanged(): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class NotificationOpenedProcessor extends java.lang.Object {
			public constructor();
			public static processFromActivity(param0: android.content.Context, param1: android.content.Intent): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class NotificationOpenedReceiver extends android.content.BroadcastReceiver {
			public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class NotificationRestoreService extends android.app.IntentService {
			public onHandleIntent(param0: android.content.Intent): void;
			public onTrimMemory(param0: number): void;
			public constructor(param0: android.content.Context);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module onesignal {
		export class NotificationRestorer extends java.lang.Object {
			public static restored: boolean;
			public static restore(param0: android.content.Context): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSNotification extends java.lang.Object {
			public isAppInFocus: boolean;
			public shown: boolean;
			public androidNotificationId: number;
			public payload: com.onesignal.OSNotificationPayload;
			public displayType: com.onesignal.OSNotification.DisplayType;
			public groupedNotifications: java.util.List;
			public stringify(): string;
			public constructor();
			public toJSONObject(): org.json.JSONObject;
		}
		export module OSNotification {
			export class DisplayType extends java.lang.Enum {
				public static Notification: com.onesignal.OSNotification.DisplayType;
				public static InAppAlert: com.onesignal.OSNotification.DisplayType;
				public static None: com.onesignal.OSNotification.DisplayType;
				public static valueOf(param0: string): com.onesignal.OSNotification.DisplayType;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static values(): native.Array<com.onesignal.OSNotification.DisplayType>;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OSNotificationAction extends java.lang.Object {
			public type: com.onesignal.OSNotificationAction.ActionType;
			public actionID: string;
			public constructor();
		}
		export module OSNotificationAction {
			export class ActionType extends java.lang.Enum {
				public static Opened: com.onesignal.OSNotificationAction.ActionType;
				public static ActionTaken: com.onesignal.OSNotificationAction.ActionType;
				public static valueOf(param0: string): com.onesignal.OSNotificationAction.ActionType;
				public static values(): native.Array<com.onesignal.OSNotificationAction.ActionType>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OSNotificationDisplayedResult extends java.lang.Object {
			public androidNotificationId: number;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class OSNotificationOpenResult extends java.lang.Object {
			public notification: com.onesignal.OSNotification;
			public action: com.onesignal.OSNotificationAction;
			public stringify(): string;
			public constructor();
			public toJSONObject(): org.json.JSONObject;
		}
	}
}

declare module com {
	export module onesignal {
		export class OSNotificationPayload extends java.lang.Object {
			public notificationID: string;
			public title: string;
			public body: string;
			public additionalData: org.json.JSONObject;
			public smallIcon: string;
			public largeIcon: string;
			public bigPicture: string;
			public smallIconAccentColor: string;
			public launchURL: string;
			public sound: string;
			public ledColor: string;
			public lockScreenVisibility: number;
			public groupKey: string;
			public groupMessage: string;
			public actionButtons: java.util.List;
			public fromProjectNumber: string;
			public backgroundImageLayout: com.onesignal.OSNotificationPayload.BackgroundImageLayout;
			public collapseId: string;
			public priority: number;
			public rawPayload: string;
			public constructor();
			public toJSONObject(): org.json.JSONObject;
		}
		export module OSNotificationPayload {
			export class ActionButton extends java.lang.Object {
				public id: string;
				public text: string;
				public icon: string;
				public constructor();
			}
			export class BackgroundImageLayout extends java.lang.Object {
				public image: string;
				public titleTextColor: string;
				public bodyTextColor: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OSNotificationReceivedResult extends java.lang.Object {
			public restoring: boolean;
			public isAppInFocus: boolean;
			public payload: com.onesignal.OSNotificationPayload;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class OSUtils extends java.lang.Object {
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignal extends java.lang.Object {
			public static VERSION: string;
			public static sdkType: string;
			public static syncHashedEmail(param0: string): void;
			public static deleteTag(param0: string): void;
			public static setLogLevel(param0: com.onesignal.OneSignal.LOG_LEVEL, param1: com.onesignal.OneSignal.LOG_LEVEL): void;
			public static postNotification(param0: org.json.JSONObject, param1: com.onesignal.OneSignal.PostNotificationResponseHandler): void;
			public static setInFocusDisplaying(param0: number): void;
			public static init(param0: android.content.Context, param1: string, param2: string): void;
			public static sendTags(param0: string): void;
			public static removeNotificationReceivedHandler(): void;
			public static setSubscription(param0: boolean): void;
			public static removeNotificationOpenedHandler(): void;
			public static idsAvailable(param0: com.onesignal.OneSignal.IdsAvailableHandler): void;
			public static startInit(param0: android.content.Context): com.onesignal.OneSignal.Builder;
			public static promptLocation(): void;
			public static postNotification(param0: string, param1: com.onesignal.OneSignal.PostNotificationResponseHandler): void;
			public static setLocationShared(param0: boolean): void;
			public constructor();
			public static enableVibrate(param0: boolean): void;
			public static init(param0: android.content.Context, param1: string, param2: string, param3: com.onesignal.OneSignal.NotificationOpenedHandler, param4: com.onesignal.OneSignal.NotificationReceivedHandler): void;
			public static sendTag(param0: string, param1: string): void;
			public static setInFocusDisplaying(param0: com.onesignal.OneSignal.OSInFocusDisplayOption): void;
			public static clearOneSignalNotifications(): void;
			public static cancelNotification(param0: number): void;
			public static enableSound(param0: boolean): void;
			public static init(param0: android.content.Context, param1: string, param2: string, param3: com.onesignal.OneSignal.NotificationOpenedHandler): void;
			public static deleteTags(param0: java.util.Collection): void;
			public static getTags(param0: com.onesignal.OneSignal.GetTagsHandler): void;
			public static setLogLevel(param0: number, param1: number): void;
			public static sendTags(param0: org.json.JSONObject): void;
			public static handleNotificationOpen(param0: android.content.Context, param1: org.json.JSONArray, param2: boolean): void;
			public static deleteTags(param0: string): void;
		}
		export module OneSignal {
			export class Builder extends java.lang.Object {
				public disableGmsMissingPrompt(param0: boolean): com.onesignal.OneSignal.Builder;
				public autoPromptLocation(param0: boolean): com.onesignal.OneSignal.Builder;
				public setNotificationOpenedHandler(param0: com.onesignal.OneSignal.NotificationOpenedHandler): com.onesignal.OneSignal.Builder;
				public setNotificationReceivedHandler(param0: com.onesignal.OneSignal.NotificationReceivedHandler): com.onesignal.OneSignal.Builder;
				public inFocusDisplaying(param0: com.onesignal.OneSignal.OSInFocusDisplayOption): com.onesignal.OneSignal.Builder;
				public init(): void;
			}
			export class GetTagsHandler extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.onesignal.OneSignal$GetTagsHandler interface with the provided implementation.
				 */
				public constructor(implementation: {
					tagsAvailable(param0: org.json.JSONObject): void;
				});
				public tagsAvailable(param0: org.json.JSONObject): void;
			}
			export class IdsAvailableHandler extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.onesignal.OneSignal$IdsAvailableHandler interface with the provided implementation.
				 */
				public constructor(implementation: {
					idsAvailable(param0: string, param1: string): void;
				});
				public idsAvailable(param0: string, param1: string): void;
			}
			export class LOG_LEVEL extends java.lang.Enum {
				public static NONE: com.onesignal.OneSignal.LOG_LEVEL;
				public static FATAL: com.onesignal.OneSignal.LOG_LEVEL;
				public static ERROR: com.onesignal.OneSignal.LOG_LEVEL;
				public static WARN: com.onesignal.OneSignal.LOG_LEVEL;
				public static INFO: com.onesignal.OneSignal.LOG_LEVEL;
				public static DEBUG: com.onesignal.OneSignal.LOG_LEVEL;
				public static VERBOSE: com.onesignal.OneSignal.LOG_LEVEL;
				public static values(): native.Array<com.onesignal.OneSignal.LOG_LEVEL>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): com.onesignal.OneSignal.LOG_LEVEL;
			}
			export class NotificationOpenedHandler extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.onesignal.OneSignal$NotificationOpenedHandler interface with the provided implementation.
				 */
				public constructor(implementation: {
					notificationOpened(param0: com.onesignal.OSNotificationOpenResult): void;
				});
				public notificationOpened(param0: com.onesignal.OSNotificationOpenResult): void;
			}
			export class NotificationReceivedHandler extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.onesignal.OneSignal$NotificationReceivedHandler interface with the provided implementation.
				 */
				public constructor(implementation: {
					notificationReceived(param0: com.onesignal.OSNotification): void;
				});
				public notificationReceived(param0: com.onesignal.OSNotification): void;
			}
			export class OSInFocusDisplayOption extends java.lang.Enum {
				public static None: com.onesignal.OneSignal.OSInFocusDisplayOption;
				public static InAppAlert: com.onesignal.OneSignal.OSInFocusDisplayOption;
				public static Notification: com.onesignal.OneSignal.OSInFocusDisplayOption;
				public static values(): native.Array<com.onesignal.OneSignal.OSInFocusDisplayOption>;
				public static valueOf(param0: string): com.onesignal.OneSignal.OSInFocusDisplayOption;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			}
			export class PostNotificationResponseHandler extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.onesignal.OneSignal$PostNotificationResponseHandler interface with the provided implementation.
				 */
				public constructor(implementation: {
					onSuccess(param0: org.json.JSONObject): void;
					onFailure(param0: org.json.JSONObject): void;
				});
				public onFailure(param0: org.json.JSONObject): void;
				public onSuccess(param0: org.json.JSONObject): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignalDbContract extends java.lang.Object {
		}
		export module OneSignalDbContract {
			export abstract class NotificationTable extends java.lang.Object implements android.provider.BaseColumns {
				public static TABLE_NAME: string;
				public static COLUMN_NAME_NOTIFICATION_ID: string;
				public static COLUMN_NAME_ANDROID_NOTIFICATION_ID: string;
				public static COLUMN_NAME_GROUP_ID: string;
				public static COLUMN_NAME_IS_SUMMARY: string;
				public static COLUMN_NAME_OPENED: string;
				public static COLUMN_NAME_DISMISSED: string;
				public static COLUMN_NAME_TITLE: string;
				public static COLUMN_NAME_MESSAGE: string;
				public static COLUMN_NAME_CREATED_TIME: string;
				public static COLUMN_NAME_FULL_DATA: string;
				public static INDEX_CREATE_NOTIFICATION_ID: string;
				public static INDEX_CREATE_ANDROID_NOTIFICATION_ID: string;
				public static INDEX_CREATE_GROUP_ID: string;
				public static INDEX_CREATE_CREATED_TIME: string;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignalDbHelper extends android.database.sqlite.SQLiteOpenHelper {
			public static DATABASE_VERSION: number;
			public static DATABASE_NAME: string;
			public onCreate(param0: android.database.sqlite.SQLiteDatabase): void;
			public static getInstance(param0: android.content.Context): com.onesignal.OneSignalDbHelper;
			public onUpgrade(param0: android.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignalRestClient extends java.lang.Object {
		}
		export module OneSignalRestClient {
			export class ResponseHandler extends java.lang.Object {
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class OneSignalStateSynchronizer extends java.lang.Object {
			public static stopAndPersist(): void;
		}
		export module OneSignalStateSynchronizer {
			export class GetTagsResult extends java.lang.Object {
				public serverSuccess: boolean;
				public result: org.json.JSONObject;
			}
			export class NetworkHandlerThread extends android.os.HandlerThread {
				public run(): void;
				public runNewJob(): void;
			}
			export class UserState extends java.lang.Object {
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class PermissionsActivity extends android.app.Activity {
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
			public onPanelClosed(param0: number, param1: android.view.Menu): void;
			public onSearchRequested(): boolean;
			public onTrimMemory(param0: number): void;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onActionModeFinished(param0: android.view.ActionMode): void;
			public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
			public onCreatePanelView(param0: number): android.view.View;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public onDetachedFromWindow(): void;
			public onActionModeStarted(param0: android.view.ActionMode): void;
			public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
			public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
			public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
			public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
			public onSearchRequested(param0: android.view.SearchEvent): boolean;
			public constructor();
			public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
			public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;
			public constructor(param0: android.content.Context, param1: number);
			public onProvideKeyboardShortcuts(param0: java.util.List, param1: android.view.Menu, param2: number): void;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onNewIntent(param0: android.content.Intent): void;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
			public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
			public constructor(param0: android.content.Context);
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
			public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
			public onWindowFocusChanged(param0: boolean): void;
			public onAttachedToWindow(): void;
			public onCreate(param0: android.os.Bundle): void;
			public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
			public onContentChanged(): void;
		}
	}
}

declare module com {
	export module onesignal {
		export class PushRegistrator extends java.lang.Object {
			/**
			 * Constructs a new instance of the com.onesignal.PushRegistrator interface with the provided implementation.
			 */
			public constructor(implementation: {
				registerForPush(param0: android.content.Context, param1: string, param2: com.onesignal.PushRegistrator.RegisteredHandler): void;
			});
			public registerForPush(param0: android.content.Context, param1: string, param2: com.onesignal.PushRegistrator.RegisteredHandler): void;
		}
		export module PushRegistrator {
			export class RegisteredHandler extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.onesignal.PushRegistrator$RegisteredHandler interface with the provided implementation.
				 */
				public constructor(implementation: {
					complete(param0: string, param1: number): void;
				});
				public complete(param0: string, param1: number): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class PushRegistratorADM extends java.lang.Object implements com.onesignal.PushRegistrator {
			public static fireCallback(param0: string): void;
			public registerForPush(param0: android.content.Context, param1: string, param2: com.onesignal.PushRegistrator.RegisteredHandler): void;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class PushRegistratorGPS extends java.lang.Object implements com.onesignal.PushRegistrator {
			public registerForPush(param0: android.content.Context, param1: string, param2: com.onesignal.PushRegistrator.RegisteredHandler): void;
			public constructor();
		}
	}
}

declare module com {
	export module onesignal {
		export class RootToolsInternalMethods extends java.lang.Object {
		}
	}
}

declare module com {
	export module onesignal {
		export class SyncService extends android.app.Service {
			public onTrimMemory(param0: number): void;
			public onBind(param0: android.content.Intent): android.os.IBinder;
			public constructor(param0: android.content.Context);
			public onTaskRemoved(param0: android.content.Intent): void;
			public onCreate(): void;
			public constructor();
			public onStartCommand(param0: android.content.Intent, param1: number, param2: number): number;
		}
	}
}

declare module com {
	export module onesignal {
		export class TrackAmazonPurchase extends java.lang.Object {
			public checkListener(): void;
		}
		export module TrackAmazonPurchase {
			export class OSPurchasingListener extends java.lang.Object {
				public onProductDataResponse(param0: com.amazon.device.iap.model.ProductDataResponse): void;
				public onPurchaseResponse(param0: com.amazon.device.iap.model.PurchaseResponse): void;
				public onPurchaseUpdatesResponse(param0: com.amazon.device.iap.model.PurchaseUpdatesResponse): void;
				public onUserDataResponse(param0: com.amazon.device.iap.model.UserDataResponse): void;
				public orgPurchasingListener: com.amazon.device.iap.PurchasingListener;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export class TrackGooglePurchase extends java.lang.Object {
		}
	}
}

declare module com {
	export module onesignal {
		export class UpgradeReceiver extends android.support.v4.content.WakefulBroadcastReceiver {
			public constructor();
			public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export class Badger extends java.lang.Object {
				public executeBadge(param0: android.content.Context, param1: android.content.ComponentName, param2: number): void;
				public getSupportLaunchers(): java.util.List;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export class ShortcutBadgeException extends java.lang.Exception {
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: string, param1: java.lang.Exception);
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export class ShortcutBadger extends java.lang.Object {
				public static applyCount(param0: android.content.Context, param1: number): boolean;
				public static applyCountOrThrow(param0: android.content.Context, param1: number): void;
				public static removeCount(param0: android.content.Context): boolean;
				public static removeCountOrThrow(param0: android.content.Context): void;
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class AdwHomeBadger extends java.lang.Object {
					public constructor();
					public executeBadge(param0: android.content.Context, param1: android.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List;
					public static INTENT_UPDATE_COUNTER: string;
					public static PACKAGENAME: string;
					public static CLASSNAME: string;
					public static COUNT: string;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class ApexHomeBadger extends java.lang.Object {
					public constructor();
					public executeBadge(param0: android.content.Context, param1: android.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class AsusHomeLauncher extends java.lang.Object {
					public constructor();
					public executeBadge(param0: android.content.Context, param1: android.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class DefaultBadger extends java.lang.Object {
					public constructor();
					public executeBadge(param0: android.content.Context, param1: android.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class HuaweiHomeBadger extends java.lang.Object {
					public constructor();
					public executeBadge(param0: android.content.Context, param1: android.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class NewHtcHomeBadger extends java.lang.Object {
					public constructor();
					public executeBadge(param0: android.content.Context, param1: android.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List;
					public static INTENT_UPDATE_SHORTCUT: string;
					public static INTENT_SET_NOTIFICATION: string;
					public static PACKAGENAME: string;
					public static COUNT: string;
					public static EXTRA_COMPONENT: string;
					public static EXTRA_COUNT: string;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class NovaHomeBadger extends java.lang.Object {
					public constructor();
					public executeBadge(param0: android.content.Context, param1: android.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class SolidHomeBadger extends java.lang.Object {
					public constructor();
					public executeBadge(param0: android.content.Context, param1: android.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class SonyHomeBadger extends java.lang.Object {
					public constructor();
					public executeBadge(param0: android.content.Context, param1: android.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module impl {
				export class XiaomiHomeBadger extends java.lang.Object {
					public constructor();
					public executeBadge(param0: android.content.Context, param1: android.content.ComponentName, param2: number): void;
					public getSupportLaunchers(): java.util.List;
					public static INTENT_ACTION: string;
					public static EXTRA_UPDATE_APP_COMPONENT_NAME: string;
					public static EXTRA_UPDATE_APP_MSG_TEXT: string;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module util {
				export class BroadcastHelper extends java.lang.Object {
					public constructor();
					public static canResolveBroadcast(param0: android.content.Context, param1: android.content.Intent): boolean;
				}
			}
		}
	}
}

declare module com {
	export module onesignal {
		export module shortcutbadger {
			export module util {
				export class CloseHelper extends java.lang.Object {
					public constructor();
					public static close(param0: android.database.Cursor): void;
				}
			}
		}
	}
}
