// ----------------------------------------------------------------------
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// --
// Copyright 2019-2020 Andi Dittrich <https://andidittrich.de>
// ----------------------------------------------------------------------

// Internal "ReactDOM"
import * as React from 'dom-magic';

// wrap child elements into div container
export function FormColor(props){

    let el = null;

    const onChangeEvent = () => {
        props.onChange(el.value);
    };

    // create select element
    el = <input id={props.id} name={props.name} className={props.className} onInput={onChangeEvent} type="text" />

    // initial trigger
    if (props.onChange){
        props.onChange.apply(el, [props.value]);
    }

    return el;
}