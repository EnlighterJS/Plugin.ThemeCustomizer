// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {getElement, renderComponent } from 'dom-magic';
import {FontView} from '../ui/views/fonts.jsx';
import {TokenView} from '../ui/views/tokens.jsx';
import {onUpdate, renderStylesheet} from '../css/generator';
import {parseStylesheet} from '../css/parser';

// static properties
export const version = '[[VERSION]]';

// enlighter a single element/codegroup
export function init(options={}){
    try {

        // render font settings
        renderComponent(FontView(), getElement(options.fonts));

        // render token settings
        renderComponent(TokenView(), getElement(options.tokens));

        // handle css updates
        onUpdate(() => {
            getElement('#output').textContent = renderStylesheet('xxx');
        });


        parseStylesheet();

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
export function render(name=null){
    return renderStylesheet(name || 'custom');
}