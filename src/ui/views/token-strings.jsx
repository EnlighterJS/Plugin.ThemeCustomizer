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

export function TokenStringView(){
    return <Container className="ejs-customizer-token-strings">

        <Token type="s0" name="General Strings" />
        <Token type="s1" name="Characters" />
        <Token type="s2" name="Template Strings" />
        <Token type="s3" name="Template String Delimiter" />
        <Token type="s4" name="String Escape Sequences" />
        <Token type="s5" name="Multi Line Strings" />

    </Container>;
}