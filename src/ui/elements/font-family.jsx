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
    {
        label: "default",
        value: ''
    },
    {
        label: "Source Code Pro",
        value: '"Source Code Pro", "Liberation Mono", "Courier New", Courier, monospace'
    },
    {
        label: "Consolas",
        value: '"Consolas", "Source Code Pro", "Liberation Mono", "Courier New", Courier, monospace'
    },
    {
        label: "Inconsolata",
        value: '"Inconsolata", "Consolas", "Source Code Pro", "Liberation Mono", "Courier New", Courier, monospace'
    },
    {
        label: "Open Sans",
        value: '"Open Sans", Arial, Verdana, sans-serif'
    }
];


// wrap child elements into div container
export function FontFamily(props){

    function setCSS(v){
        updateRules(props.selector, {
            'font-family': v
        });
    }

    // select element
    return <FormSelect options={_options} onChange={setCSS} value=''/>;
}