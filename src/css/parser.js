// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {getWindow} from 'dom-magic';

// Note: this is a minimalistic css parser which didn't take care of a lot of edge cases
// it just works in for of enlighterjs themes!
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
            // modify selector to generic one
            const selector = ruleset.selector.replace(/\.enlighter-t-(\w+)/, '.enlighter-t-${THEME_NAME}');

            // extract theme name
            const name = m[2];

            // theme key in buffer ?
            if (!themes[name]){
                themes[name] = {};
            }

            // assign selector
            themes[name][selector] = ruleset.rules;
        }
    }

    return themes;
}

// load and parse stylesheet
export function parseRemoteStylesheet(url, fn){
    getWindow().fetch(url)
        .then((response) => {
            if (response.status === 200) {
                return response;
            }else{
                throw new Error(response.statusText);
            }
        })
        // to text
        .then((response) => {
            return response.text();
        })

        // parse
        .then((data) => {
            try{
                fn(false, sortThemes(parseStyles(data)));
            }catch(e){
                fn(e);
            }
        })
        .catch(e => {
            fn(e);
        })
}