// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import { render as _renderComponent } from '../ui/renderer';

// static properties
export const version = '[[VERSION]]';

// enlighter a single element/codegroup
export function init(options={}){
    try {
       
        _renderComponent('fonts', options.fonts);

        // ok
        return true;
        

    // Global Error Handling (FATAL ERRORS)
    }catch (err){
        /* eslint no-console: 0 */
        console.error('EnlighterJS Customizer Internal Error:', err);
        return false;
    }
}

// render the css
export function render(){

}