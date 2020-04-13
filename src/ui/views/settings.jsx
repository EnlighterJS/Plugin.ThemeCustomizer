// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2016-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// Internal "ReactDOM"
import * as React from 'dom-magic';

import {Container} from '../components/container.jsx';
import {Group} from '../components/group.jsx';

// form
import {FormSelect} from '../forms/select.jsx';
import {FormButton} from '../forms/button.jsx';

import {getBaseThemeList, setBaseTheme, loadBaseTheme} from '../../customizer/manager';

export class SettingsView{

    constructor(){
        this.value='enlighter'
    }

    // eslint-disable-next-line class-methods-use-this
    onChange(v){
        this.value = v;
        setBaseTheme(v);
    }

    load(){
        loadBaseTheme(this.value);
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

        return <Container className="ejs-customizer-settings">
            <Group title="Base theme">
                <FormSelect options={options} onChange={this.onChange.bind(this)} value={this.value}/>
                <FormButton label="load base theme" onClick={this.load.bind(this)} />
            </Group>
        </Container>;
    }

}