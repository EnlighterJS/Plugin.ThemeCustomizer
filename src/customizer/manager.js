// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {parseInterchangeableStylesheet} from '../css/parser';

// list of registered components
const _components = [];

// cached ruleset
const _componentRuleset = {};

// customized rules previously created
let _customizedRuleset = {};

// event stack
const updateEvents = [];

// internal list of base themes
let baseThemes = {};
let baseTheme = 'enlighter';

function fireUpdate(){
    // call hooks
    updateEvents.forEach((fn) => {
        fn.apply(fn);
    });
}

export function getComponentRuleset(){
    return _componentRuleset;
}

function updateComponentRules(selector, rules={}){
    // selector set ?
    if (!selector){
        throw new Error('selector not set');
    }

    // _ruleset available for given selector ?
    if (!_componentRuleset[selector]){
        _componentRuleset[selector] = {};
    }

    // merge rules
    Object.assign(_componentRuleset[selector], rules);
}

// register new component
export function registerComponent(component){
    // push to stack
    _components.push(component);
}

// component update trigger (passthrough from components onInput/onChange)
export function updateComponent(selector, component){
    // update rules for specific component
    updateComponentRules(selector, component.getRules());
    fireUpdate();
}

// register update hook
export function onUpdate(fn){
    // push to stack
    updateEvents.push(fn);
}

// store base themes
export function registerBaseThemes(rulesets){
    baseThemes = rulesets;
}

// get theme names based on keys
export function getBaseThemeList(){
    return Object.keys(baseThemes);
}

export function setBaseTheme(theme){
    baseTheme = theme;
    fireUpdate();
}

export function getBaseTheme(){
    return baseTheme;
}

export function getBaseThemeRules(){
    return baseThemes[baseTheme];
}

export function applyRulesToComponents(ruleset){
    // iterate over components
    for (const component of _components){
        // reset component (set value to empty)
        component.reset();

        // component selector exists in ruleset ?
        if (ruleset[component.selector]){
            component.applyRules(ruleset[component.selector]);
        }

        // store new rules
        updateComponentRules(component.selector, component.getRules());
    }

    // call hooks
    fireUpdate();
}

// load settings from base theme
export function applyBaseTheme(){
    // theme exists ?
    if (!baseThemes[baseTheme]){
        throw new Error(`base theme ${baseTheme} doesn't exist`);
    }

    // apply theme styles to all components
    applyRulesToComponents(baseThemes[baseTheme]);
}

// load settings from a previously generated theme
export function loadCustomizedTheme(content){
    // try to parse existing stylesheet (previously create by customizer)
    const stylesheet = parseInterchangeableStylesheet(content);

    // rules available ?
    if (Object.keys(stylesheet.rules).length === 0 || stylesheet.theme === null){
        return false;
    }

    // set new base theme name
    setBaseTheme(stylesheet.theme);

    // apply theme styles to all components
    _customizedRuleset = stylesheet.rules;

    return _customizedRuleset;
}