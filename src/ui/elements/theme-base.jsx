// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// Internal "ReactDOM"
import * as React from 'dom-magic';

import {getBaseThemeList, getBaseTheme} from '../../customizer/manager';
import {WPFormWrapper} from '../forms/wp-wrapper.jsx';
import {FormSelect} from '../forms/select.jsx';

// wrap child elements into div container
export class ThemeSelect{

    // eslint-disable-next-line constructor-super
    constructor(props){
        this.el = null;
        this.onChange = props.onChange;
        this.props = props || {};
        this.uid="4khwf0923g";
        this.props.title="Base theme";
        this.props.label="";
        this.props.description="Select the theme which should used for derivation. The theme customizer will use the styles of this theme."
    }

    setValue(v){
        this.value=v;
        this.el.value=v;
    }

    render(){

        // get theme list
        const themes = getBaseThemeList();

        // create option list
        const options = themes.map((t) => {
            return {
                'label': t,
                'value': t
            } 
        });

        // create stateless dom element
        this.el = <FormSelect id={this.uid} options={options} onChange={this.onChange} value={getBaseTheme()} />;

        // return dom element
        return <WPFormWrapper type="select" uid={this.uid} label={this.props.label} description={this.props.description} title={this.props.title}>
            {this.el}
        </WPFormWrapper>;
    }
}