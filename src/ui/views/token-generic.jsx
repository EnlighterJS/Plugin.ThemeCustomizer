// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2016-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// Internal "ReactDOM"
import * as React from 'dom-magic';

import {Token} from '../components/token.jsx';
import {Container} from '../components/container.jsx';
import {selectors} from '../../customizer/selectors';
import {Group} from '../components/group.jsx';
import {FontStyle} from '../elements/font-style.jsx';
import {FontWeight} from '../elements/font-weight.jsx';
import {FontColor} from '../elements/font-color.jsx';
import {FontSize} from '../elements/font-size.jsx';
import {BackgroundColor} from '../elements/bg-color.jsx';

export function TokenGenericView(){
    return <Container className="ejs-customizer-token-generic">

        <Group title="Token base style (applied to all tokens)">
            <FontStyle selector={selectors.genericToken} />
            <FontWeight selector={selectors.genericToken} />
            <FontSize selector={selectors.genericToken} />
            <FontColor selector={selectors.genericToken} />
            <BackgroundColor selector={selectors.genericToken} />
        </Group>

        <Token type="g0" name="Generic Symbols" />
        <Token type="g1" name="Brackets" />

    </Container>;
}