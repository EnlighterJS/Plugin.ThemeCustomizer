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
export function WPFormWrapper(props, ...children){

    // list of css classes
    const cssClasses="enlighter-setting enlighter-type-" + props.type;

    return <div className={cssClasses}>
            <div className="enlighter-setting-title">{props.title}</div>
            <div className="enlighter-setting-input">
                <label htmlFor={props.uid}>
                    {children}
                    <span className="enlighter-label-text">{props.label}</span>
                </label>
                <div className="enlighter-setting-description">{props.description}</div>
            </div>
        </div>;
}