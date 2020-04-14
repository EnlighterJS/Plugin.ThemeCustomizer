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

export function TokenNumberView(){
    return <Container className="ejs-customizer-token-numbers">

        <Token type="n0" name="Floats/General Numbers" />
        <Token type="n1" name="Integers" />
        <Token type="n2" name="Hexadecimal" />
        <Token type="n3" name="Binary" />
        <Token type="n4" name="Octal" />
        <Token type="n5" name="Complex/Imaginary Numbers" />

    </Container>;
}