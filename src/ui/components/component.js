// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {registerComponent, updateComponent} from '../../customizer/manager'

export class Component{
    
    constructor(props){
        this.props = props || {};
        this.selector = props.selector;
        this.el = null;
        this.value = null;
        this.cssProperty = null;

        // UID
        this.uid = Math.random().toString(36).substr(2, 12);

        // register component to manager
        registerComponent(this);
    }

    // component state change
    onChange(v){
        // store value
        this.value = v;

        // forward update event
        updateComponent(this.selector, this);
    }

    reset(){
        this.value='';
        this.el.value='';
    }

    // @override
    // eslint-disable-next-line class-methods-use-this
    render(){
    }

    getRules(){
        if (!this.cssProperty){
            return {};
        }
        return{
            [this.cssProperty]: this.value
        }
    }

    applyRules(rules){
        // background available ?
        if (!rules[this.cssProperty]){
            return;
        }

        // set internal value
        this.value = rules[this.cssProperty];

        // update element state
        this.el.value = this.value;
    }
}