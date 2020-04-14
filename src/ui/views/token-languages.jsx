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

export function TokenLanguageView(){
    return <Container className="ejs-customizer-token-languages">

        <Token type="x1" name="XML Tag" />
        <Token type="x2" name="XML Attribute" />
        <Token type="x10" name="CSS ID Selector" />
        <Token type="x11" name="CSS Class Selector" />
        <Token type="x12" name="CSS Rule/Property" />
        <Token type="x13" name="CSS Units" />
        <Token type="x14" name="CSS Hex Colors" />
        <Token type="x15" name="CSS Pseudo Elements/Selectors" />

    </Container>;
}