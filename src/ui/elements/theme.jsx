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

// form
import {FormSelect} from '../forms/select.jsx';

// wrap child elements into div container
export class ThemeSelect{

    // eslint-disable-next-line constructor-super
    constructor(props){
        this.el = null;
        this.onChange = props.onChange;
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
        this.el = <FormSelect options={options} onChange={this.onChange} value={getBaseTheme()} />;

        // return dom element
        return this.el;
    }
}