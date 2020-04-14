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
import {ThemeSelect} from '../elements/theme.jsx';
import {FormButton} from '../forms/button.jsx';

import {setBaseTheme, applyBaseTheme} from '../../customizer/manager';

export function SettingsView(){

    // eslint-disable-next-line class-methods-use-this
    function onChange(v){
        setBaseTheme(v);
    }

    function load(){
        applyBaseTheme();
    }

    return <Container className="ejs-customizer-settings">
        <Group title="Base theme">
            <ThemeSelect onChange={onChange} />
            <FormButton label="load base theme" onClick={load} />
        </Group>
    </Container>;
}