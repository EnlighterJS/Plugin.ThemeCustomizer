// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// font styles
export const selectors = {

    container: '.enlighter-t-${THEME_NAME}',

    linenumbers: '.enlighter-t-${THEME_NAME}.enlighter-linenumbers div.enlighter>div::before',

    buttons: {
        generic: '.enlighter-t-${THEME_NAME} .enlighter-btn',
        codegroup: '.enlighter-t-${THEME_NAME}.enlighter-v-codegroup .enlighter-codegroup-switch .enlighter-btn'
    },

    token: '.enlighter-t-${THEME_NAME} .enlighter-'
}