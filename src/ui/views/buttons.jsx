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
import {BackgroundColor} from '../elements/bg-color.jsx';
import {FontLineHeight} from '../elements/font-lineheight.jsx';

export function ButtonView(){
    return <Container className="ejs-customizer-buttons">
        <Group title="Generic buttons">
            <FontFamily selector={selectors.buttons.generic} />
            <FontSize selector={selectors.buttons.generic} />
            <FontLineHeight selector={selectors.buttons.generic} />

            <FontStyle selector={selectors.buttons.generic} />
            <FontWeight selector={selectors.buttons.generic} />
           
            <FontColor selector={selectors.buttons.generic} />
            <BackgroundColor selector={selectors.buttons.generic} />
        </Group>

        <Group title="Codegroup buttons">
            <FontFamily selector={selectors.buttons.codegroup} />
            <FontSize selector={selectors.buttons.codegroup} />
            <FontLineHeight selector={selectors.buttons.codegroup} />

            <FontStyle selector={selectors.buttons.codegroup} />
            <FontWeight selector={selectors.buttons.codegroup} />
           
            <FontColor selector={selectors.buttons.codegroup} />
            <BackgroundColor selector={selectors.buttons.codegroup} />
        </Group>
    </Container>;
}