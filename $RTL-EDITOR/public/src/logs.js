// noinspection JSCheckFunctionSignatures

/**
 * Use log-methods that adds the log-time (as seconds since page's start-time)
 * @param {keyof Console} logMethod
 * @param {any[]} args
 */
function _logByMethod(logMethod, args) {
    const prefix = `${(Date.now() - performance.timeOrigin).toFixed(3).padStart(9)}: `;
    if (typeof args[0] === 'string') {
        args[0] = prefix + args[0];
    } else {
        args = [prefix, ...args];
    }
    console[logMethod](...args);
}
export function consoleLog() { _logByMethod('log', arguments); }
export function consoleInfo() { _logByMethod('info', arguments); }
export function consoleWarn() { _logByMethod('warn', arguments); }
export function consoleError() { _logByMethod('error', arguments); }
export function consoleGroup() { _logByMethod('group', arguments); }
export function consoleGroupCollapsed() { _logByMethod('groupCollapsed', arguments); }
export function consoleGroupEnd() { console.groupEnd(); }
