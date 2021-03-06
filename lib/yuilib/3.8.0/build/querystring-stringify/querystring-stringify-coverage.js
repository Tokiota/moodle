/*
YUI 3.8.0 (build 5744)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/querystring-stringify/querystring-stringify.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/querystring-stringify/querystring-stringify.js",
    code: []
};
_yuitest_coverage["build/querystring-stringify/querystring-stringify.js"].code=["YUI.add('querystring-stringify', function (Y, NAME) {","","/**"," * Provides Y.QueryString.stringify method for converting objects to Query Strings."," *"," * @module querystring"," * @submodule querystring-stringify"," */","","var QueryString = Y.namespace(\"QueryString\"),","    stack = [],","    L = Y.Lang;","","/**"," * Provides Y.QueryString.escape method to be able to override default encoding"," * method.  This is important in cases where non-standard delimiters are used, if"," * the delimiters would not normally be handled properly by the builtin"," * (en|de)codeURIComponent functions."," * Default: encodeURIComponent"," *"," * @method escape"," * @for QueryString"," * @static"," **/","QueryString.escape = encodeURIComponent;","","/**"," * <p>Converts an arbitrary value to a Query String representation.</p>"," *"," * <p>Objects with cyclical references will trigger an exception.</p>"," *"," * @method stringify"," * @for QueryString"," * @public"," * @param obj {Variant} any arbitrary value to convert to query string"," * @param cfg {Object} (optional) Configuration object.  The three"," * supported configurations are:"," * <ul><li>sep: When defined, the value will be used as the key-value"," * separator.  The default value is \"&\".</li>"," * <li>eq: When defined, the value will be used to join the key to"," * the value.  The default value is \"=\".</li>"," * <li>arrayKey: When set to true, the key of an array will have the"," * '[]' notation appended to the key.  The default value is false."," * </li></ul>"," * @param name {String} (optional) Name of the current key, for handling children recursively."," * @static"," */","QueryString.stringify = function (obj, c, name) {","    var begin, end, i, l, n, s,","        sep = c && c.sep ? c.sep : \"&\",","        eq = c && c.eq ? c.eq : \"=\",","        aK = c && c.arrayKey ? c.arrayKey : false;","","    if (L.isNull(obj) || L.isUndefined(obj) || L.isFunction(obj)) {","        return name ? QueryString.escape(name) + eq : '';","    }","","    if (L.isBoolean(obj) || Object.prototype.toString.call(obj) === '[object Boolean]') {","        obj =+ obj;","    }","","    if (L.isNumber(obj) || L.isString(obj)) {","        return QueryString.escape(name) + eq + QueryString.escape(obj);","    }","","    if (L.isArray(obj)) {","        s = [];","        name = aK ? name + '[]' : name;","        l = obj.length;","        for (i = 0; i < l; i++) {","            s.push( QueryString.stringify(obj[i], c, name) );","        }","","        return s.join(sep);","    }","    // now we know it's an object.","","    // Check for cyclical references in nested objects","    for (i = stack.length - 1; i >= 0; --i) {","        if (stack[i] === obj) {","            throw new Error(\"QueryString.stringify. Cyclical reference\");","        }","    }","","    stack.push(obj);","    s = [];","    begin = name ? name + '[' : '';","    end = name ? ']' : '';","    for (i in obj) {","        if (obj.hasOwnProperty(i)) {","            n = begin + i + end;","            s.push(QueryString.stringify(obj[i], c, n));","        }","    }","","    stack.pop();","    s = s.join(sep);","    if (!s && name) {","        return name + \"=\";","    }","","    return s;","};","","","}, '3.8.0', {\"requires\": [\"yui-base\"]});"];
_yuitest_coverage["build/querystring-stringify/querystring-stringify.js"].lines = {"1":0,"10":0,"25":0,"48":0,"49":0,"54":0,"55":0,"58":0,"59":0,"62":0,"63":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"74":0,"79":0,"80":0,"81":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"96":0,"97":0,"98":0,"99":0,"102":0};
_yuitest_coverage["build/querystring-stringify/querystring-stringify.js"].functions = {"stringify:48":0,"(anonymous 1):1":0};
_yuitest_coverage["build/querystring-stringify/querystring-stringify.js"].coveredLines = 34;
_yuitest_coverage["build/querystring-stringify/querystring-stringify.js"].coveredFunctions = 2;
_yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 1);
YUI.add('querystring-stringify', function (Y, NAME) {

/**
 * Provides Y.QueryString.stringify method for converting objects to Query Strings.
 *
 * @module querystring
 * @submodule querystring-stringify
 */

_yuitest_coverfunc("build/querystring-stringify/querystring-stringify.js", "(anonymous 1)", 1);
_yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 10);
var QueryString = Y.namespace("QueryString"),
    stack = [],
    L = Y.Lang;

/**
 * Provides Y.QueryString.escape method to be able to override default encoding
 * method.  This is important in cases where non-standard delimiters are used, if
 * the delimiters would not normally be handled properly by the builtin
 * (en|de)codeURIComponent functions.
 * Default: encodeURIComponent
 *
 * @method escape
 * @for QueryString
 * @static
 **/
_yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 25);
QueryString.escape = encodeURIComponent;

/**
 * <p>Converts an arbitrary value to a Query String representation.</p>
 *
 * <p>Objects with cyclical references will trigger an exception.</p>
 *
 * @method stringify
 * @for QueryString
 * @public
 * @param obj {Variant} any arbitrary value to convert to query string
 * @param cfg {Object} (optional) Configuration object.  The three
 * supported configurations are:
 * <ul><li>sep: When defined, the value will be used as the key-value
 * separator.  The default value is "&".</li>
 * <li>eq: When defined, the value will be used to join the key to
 * the value.  The default value is "=".</li>
 * <li>arrayKey: When set to true, the key of an array will have the
 * '[]' notation appended to the key.  The default value is false.
 * </li></ul>
 * @param name {String} (optional) Name of the current key, for handling children recursively.
 * @static
 */
_yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 48);
QueryString.stringify = function (obj, c, name) {
    _yuitest_coverfunc("build/querystring-stringify/querystring-stringify.js", "stringify", 48);
_yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 49);
var begin, end, i, l, n, s,
        sep = c && c.sep ? c.sep : "&",
        eq = c && c.eq ? c.eq : "=",
        aK = c && c.arrayKey ? c.arrayKey : false;

    _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 54);
if (L.isNull(obj) || L.isUndefined(obj) || L.isFunction(obj)) {
        _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 55);
return name ? QueryString.escape(name) + eq : '';
    }

    _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 58);
if (L.isBoolean(obj) || Object.prototype.toString.call(obj) === '[object Boolean]') {
        _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 59);
obj =+ obj;
    }

    _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 62);
if (L.isNumber(obj) || L.isString(obj)) {
        _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 63);
return QueryString.escape(name) + eq + QueryString.escape(obj);
    }

    _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 66);
if (L.isArray(obj)) {
        _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 67);
s = [];
        _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 68);
name = aK ? name + '[]' : name;
        _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 69);
l = obj.length;
        _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 70);
for (i = 0; i < l; i++) {
            _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 71);
s.push( QueryString.stringify(obj[i], c, name) );
        }

        _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 74);
return s.join(sep);
    }
    // now we know it's an object.

    // Check for cyclical references in nested objects
    _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 79);
for (i = stack.length - 1; i >= 0; --i) {
        _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 80);
if (stack[i] === obj) {
            _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 81);
throw new Error("QueryString.stringify. Cyclical reference");
        }
    }

    _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 85);
stack.push(obj);
    _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 86);
s = [];
    _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 87);
begin = name ? name + '[' : '';
    _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 88);
end = name ? ']' : '';
    _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 89);
for (i in obj) {
        _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 90);
if (obj.hasOwnProperty(i)) {
            _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 91);
n = begin + i + end;
            _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 92);
s.push(QueryString.stringify(obj[i], c, n));
        }
    }

    _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 96);
stack.pop();
    _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 97);
s = s.join(sep);
    _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 98);
if (!s && name) {
        _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 99);
return name + "=";
    }

    _yuitest_coverline("build/querystring-stringify/querystring-stringify.js", 102);
return s;
};


}, '3.8.0', {"requires": ["yui-base"]});
