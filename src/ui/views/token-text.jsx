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

export function TokenTextView(){
    return <Container className="ejs-customizer-tokens-text">

        <Token type="t0" name="Metadata" />
        <Token type="t1" name="Heading" />
        <Token type="t2" name="Section" />
        <Token type="t3" name="Hyperlink" />
        <Token type="t4" name="Emphasis/Formatting" />
        <Token type="t5" name="OK/Positive (e.g. diff+)" />
        <Token type="t6" name="Failure/Negative (e.g. diff-)" />
        <Token type="t7" name="Quotes/Blockquotes" />
        <Token type="t8" name="Code (not highlighted)" />

    </Container>;
}