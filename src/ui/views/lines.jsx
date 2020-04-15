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
import {Container} from '../components/container.jsx';
import {Group} from '../components/group.jsx';
import {BackgroundColor} from '../elements/bg-color.jsx';

export function LineView(){
    return <Container className="ejs-customizer-lines">
        <Group title="Lines hover">
           <BackgroundColor selector={selectors.linehover} />
        </Group>

        <Group title="Lines highlighted">
            <BackgroundColor selector={selectors.linespecial} />
        </Group>

        <Group title="Line highlighted hover">
           <BackgroundColor selector={selectors.linespecialhover} />
        </Group>

    </Container>;
}