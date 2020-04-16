// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// Internal "ReactDOM"
import * as React from 'dom-magic';

import {WPFormWrapper} from '../forms/wp-wrapper.jsx';
import {FormButton} from '../forms/button.jsx';

// wrap child elements into div container
export class ThemeLoadButton{

    // eslint-disable-next-line constructor-super
    constructor(props){
        this.el = null;
        this.onChange = props.onChange;
        this.props = props || {};
        this.uid="h802zfh8";
        this.props.title="Load styles";
        this.props.label="";
        this.props.description="After selecting a base theme you have to load the styles into the customizer. This will remove all previous settings!"
    }

    setValue(v){
        this.value=v;
        this.el.value=v;
    }

    render(){

        // create stateless dom element
        this.el = <FormButton id={this.uid} onClick={this.props.onClick} label="load" className="button button-primary" />;

        // return dom element
        return <WPFormWrapper type="text" uid={this.uid} label={this.props.label} description={this.props.description} title={this.props.title}>
            {this.el}
        </WPFormWrapper>;
    }
}