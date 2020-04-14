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
import {FormSelect} from '../forms/select.jsx';

const _options = [
    { label: "default", value: "" },
    { label: "normal", value: "normal" },
    { label: "bold", value: "bold" },
    { label: "bolder", value: "bolder" },
    { label: "lighter", value: "lighter" },
    { label: "100", value: 100 },
    { label: "200", value: 200 },
    { label: "300", value: 300 },
    { label: "400", value: 400 },
    { label: "500", value: 500 },
    { label: "600", value: 600 },
    { label: "700", value: 700 },
    { label: "800", value: 800 },
    { label: "900", value: 900 }
];

// wrap child elements into div container
export class FontWeight
    extends Component{

    constructor(props){
        super(props);
        this.cssProperty = 'font-weight'
        this.props.title="Font weight";
        this.props.label="";
        this.props.description="Select the font weight of the element."
    }

    reset(){
        this.value=_options[0].value;
        this.el.value=_options[0].value;
    }

    render(){
        // create stateless dom element
        this.el = <FormSelect id={this.uid} options={_options} onChange={this.onChange.bind(this)} value={this.value} />;

        // return dom element
        return <WPFormWrapper type="select" uid={this.uid} label={this.props.label} description={this.props.description} title={this.props.title}>
            {this.el}
        </WPFormWrapper>;
    }
}