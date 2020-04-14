// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {stringifyRules} from './stringifier';
import {getBaseTheme, getBaseThemeRules, getComponentRuleset} from '../customizer/manager';

export function renderStylesheet(name){

    // get generated ruleset
    const componentRuleset = getComponentRuleset();

    // get base themes
    const baseTheme = getBaseThemeRules();

    // merged ruleset
    const ruleset = {};

    // copy base styles
    for (const selector in baseTheme){
        ruleset[selector] = Object.assign({}, baseTheme[selector]);
    }

    // override with customized styles
    for (const selector in componentRuleset){
        // selector exists ? some styles may not exist in base theme!
        if (!ruleset[selector]){
            ruleset[selector] = {};
        }

        // merge style
        // properties can be empty (not set by customizer)
        for (const prop in componentRuleset[selector]){
            const value = componentRuleset[selector][prop];
            // value set ?
            if (value.length > 0){
                ruleset[selector][prop] = value;
            }
        }
    }

    // ruleset to css string
    return stringifyRules(name, getBaseTheme(), ruleset);
}

