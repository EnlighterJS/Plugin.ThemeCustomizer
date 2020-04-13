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
import {SettingsView} from '../ui/views/settings.jsx';
import {renderStylesheet} from '../css/generator';
import {parseRemoteStylesheet} from '../css/parser';
import {onUpdate, registerBaseThemes} from '../customizer/manager';

// static properties
export const version = '[[VERSION]]';

// enlighter a single element/codegroup
export function init(options={}){
    try {

        // load base styles
        parseRemoteStylesheet(options.themeURL, (err, rulesets) => {
            // error occured ?
            if (err){
                console.error("failed to load+parse EnlighterJS themes", err);
                return false;
            }

            // show info
            console.log("EnlighterJS themes loaded: ", Object.keys(rulesets).join(', '));

            console.log(rulesets);

            // register base themes
            registerBaseThemes(rulesets);

            // render settings
            renderComponent((new SettingsView()).render(), getElement(options.settings));

            // render font settings
            renderComponent(FontView(), getElement(options.fonts));

            // render token settings
            renderComponent(TokenView(), getElement(options.tokens));

            // handle css updates
            onUpdate(() => {
                getElement('#output').textContent = renderStylesheet('xxx');
            });
        });

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