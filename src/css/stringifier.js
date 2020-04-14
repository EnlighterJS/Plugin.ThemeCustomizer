// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// render css _ruleset
export function stringifyRules(name, baseTheme, ruleset){
    // output buffer
    let buffer = '/*@BASETHEME:' + baseTheme + '*/\n';

    for (const selector in ruleset){
        // add selector
        buffer += '\n' + selector.replace('${THEME_NAME}', name) + '{\n';

        // add rules
        for (const rule in ruleset[selector]){
            // get value; strip whitespaces
            const value = (ruleset[selector][rule] + "").trim();

            // value set ?
            if (value && value.length > 0){
                buffer += '\t' + rule + ': ' + ruleset[selector][rule] + ';\n';
            }
        }

        // close block
        buffer += '}';
    }

    return buffer;
}