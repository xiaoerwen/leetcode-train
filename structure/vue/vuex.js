/**
 * @file 简单实现vuex
 * @author xiaoerwen
 */

class Store {
    constructor(options) {
        const {state = {}, getters = {}, mutations = {}, actions = {}} = options;
        this.getters = {};
        this.mutations = {};
        this.actions = {};

        // vuex的核心就是借用vue实例
        this._vm = new Vue({
            data: state
        });

        for (let getterName of Object.keys(getters)) {
            let getterFn = getters[getterName];
            Object.defineProperty(getters, getterName, {
                get() {
                    return getterFn(state)
                }
            });
        }

        for (let mutationName of Object.keys(mutations)) {
            let mustationFn = mutations[mutationName];
            this.mutations[mutationName] = () => {
                mustationFn.call(this, state);
            };
        }

        for (let actionName of Object.keys(actions)) {
            let actionFn = actions[actionName];
            this.actions[actionName] = () => {
                actionFn.call(this, state);
            };
        }

        const {commit, dispatch} = this;
        this.commit = type => {
            commit.call(this, type);
        };
        this.dispatch = type => {
            dispatch.call(this, type);
        }
    }

    get state() {
        return this._vm.state;
    }

    commit(type) {
        this.mutations[type]();
    }

    dispatch(type) {
        this.actions[type]();
    }
}