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
import {FontFamily} from '../elements/font-family.jsx';
import {FontStyle} from '../elements/font-style.jsx';
import {FontWeight} from '../elements/font-weight.jsx';
import {FontColor} from '../elements/font-color.jsx';
import {FontSize} from '../elements/font-size.jsx';
import {FontLineHeight} from '../elements/font-lineheight.jsx';
import {BackgroundColor} from '../elements/bg-color.jsx';

export function DefaultsView(){
    return <Container className="ejs-customizer-defaults">

        <Group title="Global styles (outer container)">
            <FontFamily selector={selectors.container} />
            <FontSize selector={selectors.container} />
            <FontLineHeight selector={selectors.container} />

            <FontStyle selector={selectors.container} />
            <FontWeight selector={selectors.container} />
           
            <FontColor selector={selectors.container} />
            <BackgroundColor selector={selectors.container} />
        </Group>

        <Group title="Token base style (applied to all tokens)">
            <FontFamily selector={selectors.tokens.all} />
            <FontSize selector={selectors.tokens.all} />
            <FontLineHeight selector={selectors.tokens.all} />

            <FontStyle selector={selectors.tokens.all} />
            <FontWeight selector={selectors.tokens.all} />
           
            <FontColor selector={selectors.tokens.all} />
            <BackgroundColor selector={selectors.tokens.all} />
        </Group>

    </Container>;
}