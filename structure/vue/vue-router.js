/**
 * @file vue router
 * @author xiaoerwen
 */

class HistoryState {
    constructor() {
        this.current = null;
    }
}

class VueRouter {
    constructor(options) {
        this.mode = options.mode || 'hash';
        this.routes = options.routes || [];
        this.history = new HistoryState();
        this.init();
    }

    init() {
        if (this.mode === 'hash') {
            location.hash ? '' : (location.hash = '/');
            document.addEventListener('load', () => {
                this.history.current = location.hash.slice(1);
            });
            document.addEventListener('hashchange', () => {
                this.history.current = location.hash.slice(1);
            });
        }
        else {
            document.addEventListener('load', () => {
                this.history.current = location.pathname;
            });
            document.addEventListener('popstate', () => {
                this.history.current = location.pathname;
            })
            
        }
    }

    push(url) {
        if (this.mode === 'hash') {
            location.hash = url;
        }
        else {
            let history = window.history;
            history.pushState({key: Date.now()}, '', url);
        }
    }

    replace(url) {
        if (this.mode === 'history') {
            location.hash = url;
        }
        else {
            let history = window.history;
            history.replaceState({key: history.state.key}, '', url);
        }
    }
}