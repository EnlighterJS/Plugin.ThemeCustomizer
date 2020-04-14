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

export function TokenKeywordView(){
    return <Container className="ejs-customizer-token-keywords">

        <Token type="k0" name="Global Keywords" />
        <Token type="k1" name="Control Structure Keywords" />
        <Token type="k2" name="Variable/Type Initialization Keyword" />
        <Token type="k3" name="Operators" />
        <Token type="k4" name="Directives" />
        <Token type="k5" name="Types" />
        <Token type="k6" name="Labels/Symbols" />
        <Token type="k7" name="Variable" />
        <Token type="k8" name="Type Qualifiers/Modifier" />
        <Token type="k9" name="Special Keywords" />
        <Token type="k10" name="Namespaces" />

    </Container>;
}