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
    {
        label: "default",
        value: ''
    },
    {
        label: "Source Code Pro",
        value: '"Source Code Pro","Liberation Mono","Courier New",Courier,monospace'
    },
    {
        label: "Consolas",
        value: 'Consolas,"Source Code Pro","Liberation Mono","Courier New",Courier,monospace'
    },
    {
        label: "Inconsolata",
        value: 'Inconsolata,Consolas,"Source Code Pro","Liberation Mono","Courier New",Courier,monospace'
    },
    {
        label: "Open Sans",
        value: '"Open Sans",Arial,Verdana,sans-serif'
    },
    {
        label: "Arial",
        value: 'Arial,Helvetica,sans-serif'
    }
];


// wrap child elements into div container
export class FontFamily
    extends Component{

    constructor(props){
        super(props);
        this.cssProperty = 'font-family'
    }

    applyRules(rules){
        super.applyRules(rules);
    }

    reset(){
        this.value=_options[0].value;
        this.el.value=_options[0].value;
    }

    render(){
        // create stateless dom element
        this.el = <FormSelect options={_options} onChange={this.onChange.bind(this)} value='' />;

        // return dom element
        return this.el;
    }
}