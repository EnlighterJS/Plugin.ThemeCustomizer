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

export function TokenExpressionView(){
    return <Container className="ejs-customizer-token-expressions">

        <Token type="e0" name="Boolean Expressions" />
        <Token type="e1" name="Null Expressions" />
        <Token type="e2" name="Regular Expressions" />
        <Token type="e3" name="Constants" />
        <Token type="e4" name="Shell/Command Expression" />
    </Container>;
}