// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {updateRules} from '../css/generator';

// list of registered components
const _components = [];

// event stack
const updateEvents = [];

// internal list of base themes
let baseThemes = {};
let baseTheme = 'enlighter';

// register new component
export function registerComponent(component){
    _components.push(component);
}

// component update trigger
export function triggerUpdate(selector, component){
    // update rules for specific component
    updateRules(selector, component.getRules());

    // call hooks
    updateEvents.forEach((fn) => {
        fn.apply(fn);
    });
}

// register update hook
export function onUpdate(fn){
    // push to stack
    updateEvents.push(fn);
}

export function registerBaseThemes(rulesets){
    baseThemes = rulesets;
}

export function getBaseThemeList(){
    return Object.keys(baseThemes);
}

export function setBaseTheme(theme){
    baseTheme = theme;
}

export function loadBaseTheme(theme){
    // theme exists ?
    if (!baseThemes[theme]){
        throw new Error(`base theme ${theme} doesn't exist`);
    }

    // get styles
    const rulesets = baseThemes[theme];

    // iterate over components
    for (const component of _components){
        // reset component
        component.reset();

        // component selector exists in ruleset ?
        if (rulesets[component.selector]){
            component.applyRules(rulesets[component.selector]);
        }

        // trigger css generator update
        updateRules(component.selector, component.getRules());
    }
}