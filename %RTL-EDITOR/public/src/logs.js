/**
 * Use log-methods that adds the log-time (as seconds since page's start-time)
 * @param {'log' | 'info' | 'warn' | 'error' | 'group' | 'groupCollapsed'} logMethod
 * @param {IArguments} args
 */
function _logByMethod(logMethod, args) {
    const prefix = `${(Date.now() - performance.timeOrigin).toFixed(3).padStart(9)}: `;
    if (typeof args[0] === 'string') {
        args[0] = prefix + args[0];
        console[logMethod](...args);
    } else {
        console[logMethod](prefix, ...args);
    }
}
export function consoleLog() { _logByMethod('log', arguments); }
export function consoleInfo() { _logByMethod('info', arguments); }
export function consoleWarn() { _logByMethod('warn', arguments); }
export function consoleError() {
    _logByMethod('error', arguments);

    // Show a brief warning sign, to draw the user's attention of the problem.
    // This is specifically useful to alert the user that `bun run dev` is not running.
    const warnSign = document.createElement('div');
    warnSign.classList.add('warn-sign');
    warnSign.innerHTML = '🛑';
    document.body.appendChild(warnSign);
    setTimeout(() => warnSign.remove(), 500);
}
export function consoleGroup() { _logByMethod('group', arguments); }
export function consoleGroupCollapsed() { _logByMethod('groupCollapsed', arguments); }
export function consoleGroupEnd() { console.groupEnd(); }
