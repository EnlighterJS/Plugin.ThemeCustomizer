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

export function TokenMethodView(){
    return <Container className="ejs-customizer-token-methods">

        <Token type="m0" name="General/Global Function Calls" />
        <Token type="m1" name="General/Dynamic Method Calls" />
        <Token type="m2" name="Static Method Calls" />
        <Token type="m3" name="Properties" />

    </Container>;
}