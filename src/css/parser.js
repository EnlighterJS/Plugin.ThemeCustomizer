// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {getWindow} from 'dom-magic';

// Note: this is a minimalistic css parser which didn't take care of a lot of edge cases
// it just works in case of enlighterjs themes!
function parseStyles(styles){
    // remove comments
    const rawCSS = styles.replace(/\/\*[\s\S]*?\*\//g, '');

    // split into blocks
    // remove empty blocks
    const blocks = rawCSS.split(/[}]/).map(function(str){
        // remove whitespaces
        return str.trim();
    }).filter(String);

    // extract selectors
    const rulesets = blocks.map(b => {
        const parts = b.split('{');
        const selector = parts[0].trim();
        const rawRules = parts[1].split(';');

        // rules cache
        const rules = {};

        // process rules
        for (const rule of rawRules){
            const p2 = rule.split(':');
            rules[p2[0]] = p2[1];
        }
        
        // wrap into container
        return {
            selector: selector,
            rules: rules
        }
    });

    return rulesets;
}

// sort rulesets regarding the theme
function sortThemes(rulesets){
    // buffer
    const themes = {};

    // iterate over ruleset
    for (const ruleset of rulesets){
        // theme related selector ?
        const m = ruleset.selector.match(/(^|\s)\.enlighter-t-(\w+)($|\s)/);

        // match found ?
        if (m !== null){
            // extract theme name
            const name = m[2];

            // theme key in buffer ?
            if (!themes[name]){
                themes[name] = {};
            }

            // assign selector
            themes[name][ruleset.selector] = ruleset.rules;
        }
    }

    return themes;
}

const url = '/enlighterjs.min.css';

export function parseStylesheet(){
    getWindow().fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((data) => {

        console.time();
        console.log(sortThemes(parseStyles(data)));
        console.timeEnd();
    });
}