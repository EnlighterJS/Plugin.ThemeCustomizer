// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// Internal "ReactDOM"
import * as React from 'dom-magic';

// form
import {FormInput} from '../forms/input.jsx';

// css generator
import {updateRules} from '../../css/generator';

// wrap child elements into div container
export function FontSize(props){

    function setCSS(v){
        updateRules(props.selector, {
            'font-size': v
        });
    }

    // select element
    return <FormInput onChange={setCSS} value=''/>;
}