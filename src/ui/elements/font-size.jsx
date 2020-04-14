// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// Internal "ReactDOM"
import * as React from 'dom-magic';

import {Component} from '../components/component';
import {WPFormWrapper} from '../forms/wp-wrapper.jsx';
import {FormInput} from '../forms/input.jsx';

// wrap child elements into div container
export class FontSize
    extends Component{

    constructor(props){
        super(props);
        this.cssProperty = 'font-size'
        this.props.title="Font size";
        this.props.label="e.g. 1.2em";
        this.props.description="Set the font size of the element."
    }

    render(){
        // create stateless dom element
        this.el = <FormInput id={this.uid} onChange={this.onChange.bind(this)} value={this.value} />;

        // return dom element
        return <WPFormWrapper type="text" uid={this.uid} label={this.props.label} description={this.props.description} title={this.props.title}>
            {this.el}
        </WPFormWrapper>;
    }
}