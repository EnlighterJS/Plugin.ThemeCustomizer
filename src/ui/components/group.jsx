// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// Internal "ReactDOM"
import * as React from 'dom-magic';

import {Container} from './container.jsx';

// wrap child elements into div container
export class Group{

    constructor(props, ...children){
        this.props = props;
        this.children = children;
    }

    render(){
        return <Container>
            <h4>{this.props.title}</h4>
            {this.children}
        </Container>;
    }
    
}