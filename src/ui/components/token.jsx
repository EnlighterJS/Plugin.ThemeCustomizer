// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2016-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// Internal "ReactDOM"
import * as React from 'dom-magic';

import {selectors} from '../../customizer/selectors';
import {Group} from '../components/group.jsx';
import {FontStyle} from '../elements/font-style.jsx';
import {FontWeight} from '../elements/font-weight.jsx';
import {FontColor} from '../elements/font-color.jsx';
import {FontSize} from '../elements/font-size.jsx';
import {BackgroundColor} from '../elements/bg-color.jsx';


export function Token(props){
    // generator selector
    const selector = selectors.token + props.type;

    return <Group title={props.name}>
            <FontStyle selector={selector} />
            <FontWeight selector={selector} />
            <FontSize selector={selector} />
            <FontColor selector={selector} />
            <BackgroundColor selector={selector} />
    </Group>
}
