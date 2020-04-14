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

export function TokenCommentView(){
    return <Container className="ejs-customizer-token-comments">

        <Token type="c0" name="Single Line Comments/General" />
        <Token type="c1" name="Multi Line Block Comments" />
        <Token type="c2" name="Multi Line Doc Comments" />
        <Token type="c9" name="Special Comment Syntax" />

    </Container>;
}