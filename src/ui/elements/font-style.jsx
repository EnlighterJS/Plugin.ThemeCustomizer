// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// Internal "ReactDOM"
import * as React from 'dom-magic';

import {Component} from '../components/component';

// form
import {FormSelect} from '../forms/select.jsx';

const _options = [
    { label: "default", value: "" },
    { label: "normal", value: "normal" },
    { label: "italic", value: "italic" },
    { label: "overline", value: "overline" },
    { label: "underline", value: "underline" },
    { label: "line through", value: "line-through" }
];

// wrap child elements into div container
export class FontStyle
    extends Component{

    constructor(props){
        super(props);
        this.cssProperty = 'font-style'
    }

    reset(){
        this.value=_options[0].value;
        this.el.value=_options[0].value;
    }
    
    render(){
        // create stateless dom element
        this.el = <FormSelect options={_options} onChange={this.onChange.bind(this)} value=''/>;

        // return dom element
        return this.el;
    }
}