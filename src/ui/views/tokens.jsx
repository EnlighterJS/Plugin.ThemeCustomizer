// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2016-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// Internal "ReactDOM"
import * as React from 'dom-magic';

import {selectors} from '../../customizer/selectors';
import {Container} from '../components/container.jsx';
import {Group} from '../components/group.jsx';
import {FontStyle} from '../elements/font-style.jsx';
import {FontWeight} from '../elements/font-weight.jsx';
import {FontColor} from '../elements/font-color.jsx';
import {FontSize} from '../elements/font-size.jsx';
import {BackgroundColor} from '../elements/bg-color.jsx';


function Token(props){
    // generator selector
    const selector = selectors.token + props.type;

    return <Group title={props.name}>
            <FontStyle selector={selector} />
            <FontWeight selector={selector} />
            <FontSize selector={selector} />
            <FontColor selector={selector} />
            <BackgroundColor selector={selector} />
    </Group>
}

export function TokenView(){
    return <Container className="ejs-customizer-tokens">

        <h2>Comments</h2>
        <Token type="c0" name="Single Line Comments/General" />
        <Token type="c1" name="Multi Line Block Comments" />
        <Token type="c2" name="Multi Line Doc Comments" />
        <Token type="c9" name="Special Comment Syntax" />

        <h2>Keywords</h2>
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

        <h2>Expressions/Literals</h2>
        <Token type="e0" name="Boolean Expressions" />
        <Token type="e1" name="Null Expressions" />
        <Token type="e2" name="Regular Expressions" />
        <Token type="e3" name="Constants" />
        <Token type="e4" name="Shell/Command Expression" />

        <h2>Strings</h2>
        <Token type="s0" name="General Strings" />
        <Token type="s1" name="Characters" />
        <Token type="s2" name="Template Strings" />
        <Token type="s3" name="Template String Delimiter" />
        <Token type="s4" name="String Escape Sequences" />
        <Token type="s5" name="Multi Line Strings" />

        <h2>Numbers</h2>
        <Token type="n0" name="Floats/General Numbers" />
        <Token type="n1" name="Integers" />
        <Token type="n2" name="Hexadecimal" />
        <Token type="n3" name="Binary" />
        <Token type="n4" name="Octal" />
        <Token type="n5" name="Complex/Imaginary Numbers" />

        <h2>Methods/Functions</h2>
        <Token type="m0" name="General/Global Function Calls" />
        <Token type="m1" name="General/Dynamic Method Calls" />
        <Token type="m2" name="Static Method Calls" />
        <Token type="m3" name="Properties" />


        <h2>Generic</h2>
        <Token type="g0" name="Generic Symbols" />
        <Token type="g1" name="Brackets" />
        
        <h2>Language Specific</h2>
        <Token type="x1" name="XML Tag" />
        <Token type="x2" name="XML Attribute" />
        <Token type="x10" name="CSS ID Selector" />
        <Token type="x11" name="CSS Class Selector" />
        <Token type="x12" name="CSS Rule/Property" />
        <Token type="x13" name="CSS Units" />
        <Token type="x14" name="CSS Hex Colors" />
        <Token type="x15" name="CSS Pseudo Elements/Selectors" />

        <h2>Text Documents</h2>
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