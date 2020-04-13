// global _ruleset
// selector => [] rules
const _ruleset = {};

// retrieve global _ruleset
export function getRules(){
    return _ruleset;
}

// render css _ruleset
export function renderStylesheet(name){
    // output buffer
    let buffer = '';

    for (const selector in _ruleset){
        // add selector
        buffer += '\n' + selector.replace('${THEME_NAME}', name) + '{\n';

        // add rules
        for (const rule in _ruleset[selector]){
            // get value; strip whitespaces
            const value = (_ruleset[selector][rule] + "").trim();

            // value set ?
            if (value && value.length > 0){
                buffer += '\t' + rule + ': ' + _ruleset[selector][rule] + ';\n';
            }
        }

        // close block
        buffer += '}';
    }

    return buffer;
}

export function updateRules(selector, rules={}){
    // selector set ?
    if (!selector){
        throw new Error('selector not set');
    }

    // _ruleset available for given selector ?
    if (!_ruleset[selector]){
        _ruleset[selector] = {};
    }

    // merge rules
    Object.assign(_ruleset[selector], rules);
}