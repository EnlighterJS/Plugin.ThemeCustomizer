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
import {FormColor} from '../forms/color.jsx';

// wrap child elements into div container
export class BackgroundColor
    extends Component{

    constructor(props){
        super(props);
        this.cssProperty = 'background-color'
    }

    render(){
        // create stateless dom element
        this.el = <FormColor onChange={this.onChange.bind(this)} value=''/>;

        // return dom element
        return this.el;
    }
}