// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

import {getElement, renderComponent, logError, logInfo} from 'dom-magic';
import {renderStylesheet} from '../css/merger';
import {parseRemoteStylesheet} from '../css/parser';
import {onUpdate, registerBaseThemes, loadCustomizedTheme, applyRulesToComponents} from '../customizer/manager';
import {DefaultsView} from '../ui/views/defaults.jsx';
import {LineView} from '../ui/views/lines.jsx';
import {RawView} from '../ui/views/rawcode.jsx';
import {ButtonView} from '../ui/views/buttons.jsx';
import {SettingsView} from '../ui/views/settings.jsx';
import {TokenCommentView} from '../ui/views/token-comments.jsx';
import {TokenExpressionView} from '../ui/views/token-expressions.jsx';
import {TokenGenericView} from '../ui/views/token-generic.jsx';
import {TokenKeywordView} from '../ui/views/token-keywords.jsx';
import {TokenLanguageView} from '../ui/views/token-languages.jsx';
import {TokenMethodView} from '../ui/views/token-methods.jsx';
import {TokenNumberView} from '../ui/views/token-numbers.jsx';
import {TokenStringView} from '../ui/views/token-strings.jsx';
import {TokenTextView} from '../ui/views/token-text.jsx';

// static properties
export const version = '[[VERSION]]';

// enlighter a single element/codegroup
export function init(options={}){

    // load base styles
    parseRemoteStylesheet(options.themeURL, (err, rulesets) => {
        // error occured ?
        if (err){
            logError("failed to load+parse EnlighterJS themes", err);
            return false;
        }

        try {

            // show info
            logInfo("EnlighterJS themes loaded: ", Object.keys(rulesets).join(', '));

            // register+store base themes
            registerBaseThemes(rulesets);

            // try to parse existing theme
            let customizedRuleset = false;
            if (options.formExchange){
                logInfo("loading customized theme..");
                const el = getElement(options.formExchange);

                if (el){
                    // try to load
                    customizedRuleset = loadCustomizedTheme(el.value);

                    if (customizedRuleset === false){
                        logInfo("failed - no rules set");
                    }
                }
            }

            // render settings
            renderComponent(SettingsView(), getElement(options.settings));

            // render default settings
            renderComponent(DefaultsView(), getElement(options.defaults));

            // render line settings
            renderComponent(LineView(), getElement(options.lines));

            // render rawcode settings
            renderComponent(RawView(), getElement(options.rawcode));

            // render button settings
            renderComponent(ButtonView(), getElement(options.buttons));

            // render token settings
            renderComponent(TokenCommentView(), getElement(options.tokens.comments));
            renderComponent(TokenExpressionView(), getElement(options.tokens.expressions));
            renderComponent(TokenGenericView(), getElement(options.tokens.generic));
            renderComponent(TokenKeywordView(), getElement(options.tokens.keywords));
            renderComponent(TokenLanguageView(), getElement(options.tokens.languages));
            renderComponent(TokenMethodView(), getElement(options.tokens.methods));
            renderComponent(TokenNumberView(), getElement(options.tokens.numbers));
            renderComponent(TokenStringView(), getElement(options.tokens.strings));
            renderComponent(TokenTextView(), getElement(options.tokens.text));

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

        // Global Error Handling (FATAL ERRORS)
        }catch (exc){
            logError('EnlighterJS Customizer Internal Error:', exc);
            return false;
        }
    });
}

// render the css
export function render(name=null){
    return renderStylesheet(name || 'custom');
}