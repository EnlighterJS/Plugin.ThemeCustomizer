// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// Internal "ReactDOM"
import * as React from 'dom-magic';

// form
import {FormSelect} from '../forms/select.jsx';

// css generator
import {updateRules} from '../../css/generator';

const _options = [
    { label: "default", value: "" },
    { label: "normal", value: "normal" },
    { label: "italic", value: "italic" },
    { label: "overline", value: "overline" },
    { label: "underline", value: "underline" },
    { label: "line through", value: "line-through" }
];

// wrap child elements into div container
export function FontStyle(props){

    function setCSS(v){
        updateRules(props.selector, {
            'font-style': v
        });
    }

    // select element
    return <FormSelect options={_options} onChange={setCSS} value=''/>;
}