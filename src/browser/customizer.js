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
import {renderStylesheet} from '../css/merger';
import {parseRemoteStylesheet} from '../css/parser';
import {onUpdate, registerBaseThemes, loadCustomizedTheme, applyRulesToComponents} from '../customizer/manager';

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

            // register+store base themes
            registerBaseThemes(rulesets);

            // try to parse existing theme
            let customizedRuleset = false;
            if (options.formExchange){
                console.log("loading customized theme..");
                const content = getElement(options.formExchange).value;
                
                // try to load
                customizedRuleset = loadCustomizedTheme(content);

                if (customizedRuleset === false){
                    console.log("failed - no rules set");
                }
            }

            // render settings
            renderComponent(SettingsView(), getElement(options.settings));

            // render font settings
            renderComponent(FontView(), getElement(options.fonts));

            // render token settings
            renderComponent(TokenView(), getElement(options.tokens));

            // initialize compoenents with loaded values
            if (customizedRuleset){
                applyRulesToComponents(customizedRuleset);

                // trigger update
                getElement(options.formExchange).textContent = renderStylesheet(options.themeName);
            }
            
            // handle css updates
            onUpdate(() => {
                getElement(options.formExchange).textContent = renderStylesheet(options.themeName);
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