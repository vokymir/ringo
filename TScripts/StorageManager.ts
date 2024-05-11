/**
 * In charge of all Local and Session storage of the browser.
 * For every access to any storage please use this class.
 * It has all info about how is the storage used, which names used etc.
 */
class BrowserStorage {

    static saveToSessionStorage(key: string, sth: any) {
        // maybe save the key to some storage, so we know it is there?
        // but maybe only for local storage, not session
    }

    static getFromSessionStorage(key: string): any {

    }
}