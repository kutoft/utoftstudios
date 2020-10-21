(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[4],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-radio-button_2.entry.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-radio-button_2.entry.js ***!
  \**********************************************************************************************/
/*! exports provided: amplify_radio_button, amplify_totp_setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_radio_button", function() { return AmplifyRadioButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_totp_setup", function() { return AmplifyTOTPSetup; });
/* harmony import */ var _index_39969785_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-39969785.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-39969785.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-392acb9b.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-392acb9b.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-01ecf5f9.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/helpers-01ecf5f9.js");
/* harmony import */ var _auth_helpers_2fada98e_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-helpers-2fada98e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-helpers-2fada98e.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! buffer */ "./node_modules/node-libs-browser/node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_8__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var amplifyRadioButtonCss = ":host{--font-family:var(--amplify-font-family)}.radio-button{display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.radio-button input{margin-right:12px}";
var AmplifyRadioButton = /** @class */ (function () {
    function AmplifyRadioButton(hostRef) {
        Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */
        this.placeholder = '';
        /** If `true`, the radio button is selected. */
        this.checked = false;
        /** If `true`, the checkbox is disabled */
        this.disabled = false;
    }
    AmplifyRadioButton.prototype.render = function () {
        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "radio-button" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", Object.assign({ type: "radio", name: this.name, value: this.value, onInput: this.handleInputChange, placeholder: this.placeholder, id: this.fieldId, checked: this.checked, disabled: this.disabled }, this.inputProps)), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-label", { htmlFor: this.fieldId }, this.label)));
    };
    return AmplifyRadioButton;
}());
AmplifyRadioButton.style = amplifyRadioButtonCss;
// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157
var canPromise = function () {
    return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then;
};
var toString = {}.toString;
var isarray = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
};
function typedArraySupport() {
    // Can typed array instances be augmented?
    try {
        var arr = new Uint8Array(1);
        arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42; } };
        return arr.foo() === 42;
    }
    catch (e) {
        return false;
    }
}
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
var K_MAX_LENGTH = Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff;
function Buffer(arg, offset, length) {
    if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
        return new Buffer(arg, offset, length);
    }
    if (typeof arg === 'number') {
        return allocUnsafe(this, arg);
    }
    return from(this, arg, offset, length);
}
if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype;
    Buffer.__proto__ = Uint8Array;
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    if (typeof Symbol !== 'undefined' && Symbol.species &&
        Buffer[Symbol.species] === Buffer) {
        Object.defineProperty(Buffer, Symbol.species, {
            value: null,
            configurable: true,
            enumerable: false,
            writable: false
        });
    }
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
            'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
    }
    return length | 0;
}
function isnan(val) {
    return val !== val; // eslint-disable-line no-self-compare
}
function createBuffer(that, length) {
    var buf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        buf = new Uint8Array(length);
        buf.__proto__ = Buffer.prototype;
    }
    else {
        // Fallback: Return an object instance of the Buffer class
        buf = that;
        if (buf === null) {
            buf = new Buffer(length);
        }
        buf.length = length;
    }
    return buf;
}
function allocUnsafe(that, size) {
    var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
            buf[i] = 0;
        }
    }
    return buf;
}
function fromString(that, string) {
    var length = byteLength(string) | 0;
    var buf = createBuffer(that, length);
    var actual = buf.write(string);
    if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        buf = buf.slice(0, actual);
    }
    return buf;
}
function fromArrayLike(that, array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(that, length);
    for (var i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
    }
    return buf;
}
function fromArrayBuffer(that, array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('\'offset\' is out of bounds');
    }
    if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds');
    }
    var buf;
    if (byteOffset === undefined && length === undefined) {
        buf = new Uint8Array(array);
    }
    else if (length === undefined) {
        buf = new Uint8Array(array, byteOffset);
    }
    else {
        buf = new Uint8Array(array, byteOffset, length);
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        buf.__proto__ = Buffer.prototype;
    }
    else {
        // Fallback: Return an object instance of the Buffer class
        buf = fromArrayLike(that, buf);
    }
    return buf;
}
function fromObject(that, obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(that, len);
        if (buf.length === 0) {
            return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj) {
        if ((typeof ArrayBuffer !== 'undefined' &&
            obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
            if (typeof obj.length !== 'number' || isnan(obj.length)) {
                return createBuffer(that, 0);
            }
            return fromArrayLike(that, obj);
        }
        if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
            return fromArrayLike(that, obj.data);
        }
    }
    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1)
                        bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1)
                        bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1)
                    bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        }
        else if (leadSurrogate) {
            // valid bmp char, but last char was a lead
            if ((units -= 3) > -1)
                bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0)
                break;
            bytes.push(codePoint);
        }
        else if (codePoint < 0x800) {
            if ((units -= 2) < 0)
                break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        }
        else if (codePoint < 0x10000) {
            if ((units -= 3) < 0)
                break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        }
        else if (codePoint < 0x110000) {
            if ((units -= 4) < 0)
                break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        }
        else {
            throw new Error('Invalid code point');
        }
    }
    return bytes;
}
function byteLength(string) {
    if (Buffer.isBuffer(string)) {
        return string.length;
    }
    if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
        (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength;
    }
    if (typeof string !== 'string') {
        string = '' + string;
    }
    var len = string.length;
    if (len === 0)
        return 0;
    return utf8ToBytes(string).length;
}
function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length))
            break;
        dst[i + offset] = src[i];
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function from(that, value, offset, length) {
    if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number');
    }
    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, offset, length);
    }
    if (typeof value === 'string') {
        return fromString(that, value);
    }
    return fromObject(that, value);
}
Buffer.prototype.write = function write(string, offset, length) {
    // Buffer#write(string)
    if (offset === undefined) {
        length = this.length;
        offset = 0;
        // Buffer#write(string, encoding)
    }
    else if (length === undefined && typeof offset === 'string') {
        length = this.length;
        offset = 0;
        // Buffer#write(string, offset[, length])
    }
    else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
            length = length | 0;
        }
        else {
            length = undefined;
        }
    }
    var remaining = this.length - offset;
    if (length === undefined || length > remaining)
        length = remaining;
    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds');
    }
    return utf8Write(this, string, offset, length);
};
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0)
            start = 0;
    }
    else if (start > len) {
        start = len;
    }
    if (end < 0) {
        end += len;
        if (end < 0)
            end = 0;
    }
    else if (end > len) {
        end = len;
    }
    if (end < start)
        end = start;
    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        // Return an augmented `Uint8Array` instance
        newBuf.__proto__ = Buffer.prototype;
    }
    else {
        var sliceLen = end - start;
        newBuf = new Buffer(sliceLen, undefined);
        for (var i = 0; i < sliceLen; ++i) {
            newBuf[i] = this[i + start];
        }
    }
    return newBuf;
};
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!start)
        start = 0;
    if (!end && end !== 0)
        end = this.length;
    if (targetStart >= target.length)
        targetStart = target.length;
    if (!targetStart)
        targetStart = 0;
    if (end > 0 && end < start)
        end = start;
    // Copy 0 bytes; we're done
    if (end === start)
        return 0;
    if (target.length === 0 || this.length === 0)
        return 0;
    // Fatal error conditions
    if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length)
        throw new RangeError('sourceStart out of bounds');
    if (end < 0)
        throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length)
        end = this.length;
    if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
    }
    var len = end - start;
    var i;
    if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; --i) {
            target[i + targetStart] = this[i + start];
        }
    }
    else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
        // ascending copy from start
        for (i = 0; i < len; ++i) {
            target[i + targetStart] = this[i + start];
        }
    }
    else {
        Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
    }
    return len;
};
Buffer.prototype.fill = function fill(val, start, end) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            start = 0;
            end = this.length;
        }
        else if (typeof end === 'string') {
            end = this.length;
        }
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (code < 256) {
                val = code;
            }
        }
    }
    else if (typeof val === 'number') {
        val = val & 255;
    }
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index');
    }
    if (end <= start) {
        return this;
    }
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val)
        val = 0;
    var i;
    if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
            this[i] = val;
        }
    }
    else {
        var bytes = Buffer.isBuffer(val)
            ? val
            : new Buffer(val);
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
        }
    }
    return this;
};
Buffer.concat = function concat(list, length) {
    if (!isarray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (list.length === 0) {
        return createBuffer(null, 0);
    }
    var i;
    if (length === undefined) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
            length += list[i].length;
        }
    }
    var buffer = allocUnsafe(null, length);
    var pos = 0;
    for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!Buffer.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
        }
        buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
Buffer.byteLength = byteLength;
Buffer.prototype._isBuffer = true;
Buffer.isBuffer = function isBuffer(b) {
    return !!(b != null && b._isBuffer);
};
var alloc = function (size) {
    var buffer = new Buffer(size);
    buffer.fill(0);
    return buffer;
};
var from_1 = function (data) {
    return new Buffer(data);
};
var typedarrayBuffer = {
    alloc: alloc,
    from: from_1
};
var toSJISFunction;
var CODEWORDS_COUNT = [
    0,
    26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
    404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
    1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
    2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
];
/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
var getSymbolSize = function getSymbolSize(version) {
    if (!version)
        throw new Error('"version" cannot be null or undefined');
    if (version < 1 || version > 40)
        throw new Error('"version" should be in range from 1 to 40');
    return version * 4 + 17;
};
/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
var getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
    return CODEWORDS_COUNT[version];
};
/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
var getBCHDigit = function (data) {
    var digit = 0;
    while (data !== 0) {
        digit++;
        data >>>= 1;
    }
    return digit;
};
var setToSJISFunction = function setToSJISFunction(f) {
    if (typeof f !== 'function') {
        throw new Error('"toSJISFunc" is not a valid function.');
    }
    toSJISFunction = f;
};
var isKanjiModeEnabled = function () {
    return typeof toSJISFunction !== 'undefined';
};
var toSJIS = function toSJIS(kanji) {
    return toSJISFunction(kanji);
};
var utils = {
    getSymbolSize: getSymbolSize,
    getSymbolTotalCodewords: getSymbolTotalCodewords,
    getBCHDigit: getBCHDigit,
    setToSJISFunction: setToSJISFunction,
    isKanjiModeEnabled: isKanjiModeEnabled,
    toSJIS: toSJIS
};
function createCommonjsModule(fn, basedir, module) {
    return module = {
        path: basedir,
        exports: {},
        require: function (path, base) {
            return commonjsRequire();
        }
    }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
    throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}
var errorCorrectionLevel = createCommonjsModule(function (module, exports) {
    exports.L = { bit: 1 };
    exports.M = { bit: 0 };
    exports.Q = { bit: 3 };
    exports.H = { bit: 2 };
    function fromString(string) {
        if (typeof string !== 'string') {
            throw new Error('Param is not a string');
        }
        var lcStr = string.toLowerCase();
        switch (lcStr) {
            case 'l':
            case 'low':
                return exports.L;
            case 'm':
            case 'medium':
                return exports.M;
            case 'q':
            case 'quartile':
                return exports.Q;
            case 'h':
            case 'high':
                return exports.H;
            default:
                throw new Error('Unknown EC Level: ' + string);
        }
    }
    exports.isValid = function isValid(level) {
        return level && typeof level.bit !== 'undefined' &&
            level.bit >= 0 && level.bit < 4;
    };
    exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
            return value;
        }
        try {
            return fromString(value);
        }
        catch (e) {
            return defaultValue;
        }
    };
});
function BitBuffer() {
    this.buffer = [];
    this.length = 0;
}
BitBuffer.prototype = {
    get: function (index) {
        var bufIndex = Math.floor(index / 8);
        return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1;
    },
    put: function (num, length) {
        for (var i = 0; i < length; i++) {
            this.putBit(((num >>> (length - i - 1)) & 1) === 1);
        }
    },
    getLengthInBits: function () {
        return this.length;
    },
    putBit: function (bit) {
        var bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
            this.buffer.push(0);
        }
        if (bit) {
            this.buffer[bufIndex] |= (0x80 >>> (this.length % 8));
        }
        this.length++;
    }
};
var bitBuffer = BitBuffer;
/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix(size) {
    if (!size || size < 1) {
        throw new Error('BitMatrix size must be defined and greater than 0');
    }
    this.size = size;
    this.data = typedarrayBuffer.alloc(size * size);
    this.reservedBit = typedarrayBuffer.alloc(size * size);
}
/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
    var index = row * this.size + col;
    this.data[index] = value;
    if (reserved)
        this.reservedBit[index] = true;
};
/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
    return this.data[row * this.size + col];
};
/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
    this.data[row * this.size + col] ^= value;
};
/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
    return this.reservedBit[row * this.size + col];
};
var bitMatrix = BitMatrix;
var alignmentPattern = createCommonjsModule(function (module, exports) {
    /**
     * Alignment pattern are fixed reference pattern in defined positions
     * in a matrix symbology, which enables the decode software to re-synchronise
     * the coordinate mapping of the image modules in the event of moderate amounts
     * of distortion of the image.
     *
     * Alignment patterns are present only in QR Code symbols of version 2 or larger
     * and their number depends on the symbol version.
     */
    var getSymbolSize = utils.getSymbolSize;
    /**
     * Calculate the row/column coordinates of the center module of each alignment pattern
     * for the specified QR Code version.
     *
     * The alignment patterns are positioned symmetrically on either side of the diagonal
     * running from the top left corner of the symbol to the bottom right corner.
     *
     * Since positions are simmetrical only half of the coordinates are returned.
     * Each item of the array will represent in turn the x and y coordinate.
     * @see {@link getPositions}
     *
     * @param  {Number} version QR Code version
     * @return {Array}          Array of coordinate
     */
    exports.getRowColCoords = function getRowColCoords(version) {
        if (version === 1)
            return [];
        var posCount = Math.floor(version / 7) + 2;
        var size = getSymbolSize(version);
        var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
        var positions = [size - 7]; // Last coord is always (size - 7)
        for (var i = 1; i < posCount - 1; i++) {
            positions[i] = positions[i - 1] - intervals;
        }
        positions.push(6); // First coord is always 6
        return positions.reverse();
    };
    /**
     * Returns an array containing the positions of each alignment pattern.
     * Each array's element represent the center point of the pattern as (x, y) coordinates
     *
     * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
     * and filtering out the items that overlaps with finder pattern
     *
     * @example
     * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
     * The alignment patterns, therefore, are to be centered on (row, column)
     * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
     * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
     * and are not therefore used for alignment patterns.
     *
     * var pos = getPositions(7)
     * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
     *
     * @param  {Number} version QR Code version
     * @return {Array}          Array of coordinates
     */
    exports.getPositions = function getPositions(version) {
        var coords = [];
        var pos = exports.getRowColCoords(version);
        var posLength = pos.length;
        for (var i = 0; i < posLength; i++) {
            for (var j = 0; j < posLength; j++) {
                // Skip if position is occupied by finder patterns
                if ((i === 0 && j === 0) || // top-left
                    (i === 0 && j === posLength - 1) || // bottom-left
                    (i === posLength - 1 && j === 0)) { // top-right
                    continue;
                }
                coords.push([pos[i], pos[j]]);
            }
        }
        return coords;
    };
});
var getSymbolSize$1 = utils.getSymbolSize;
var FINDER_PATTERN_SIZE = 7;
/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
var getPositions = function getPositions(version) {
    var size = getSymbolSize$1(version);
    return [
        // top-left
        [0, 0],
        // top-right
        [size - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size - FINDER_PATTERN_SIZE]
    ];
};
var finderPattern = {
    getPositions: getPositions
};
var maskPattern = createCommonjsModule(function (module, exports) {
    /**
     * Data mask pattern reference
     * @type {Object}
     */
    exports.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    /**
     * Weighted penalty scores for the undesirable features
     * @type {Object}
     */
    var PenaltyScores = {
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10
    };
    /**
     * Check if mask pattern value is valid
     *
     * @param  {Number}  mask    Mask pattern
     * @return {Boolean}         true if valid, false otherwise
     */
    exports.isValid = function isValid(mask) {
        return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    /**
     * Returns mask pattern from a value.
     * If value is not valid, returns undefined
     *
     * @param  {Number|String} value        Mask pattern value
     * @return {Number}                     Valid mask pattern or undefined
     */
    exports.from = function from(value) {
        return exports.isValid(value) ? parseInt(value, 10) : undefined;
    };
    /**
    * Find adjacent modules in row/column with the same color
    * and assign a penalty value.
    *
    * Points: N1 + i
    * i is the amount by which the number of adjacent modules of the same color exceeds 5
    */
    exports.getPenaltyN1 = function getPenaltyN1(data) {
        var size = data.size;
        var points = 0;
        var sameCountCol = 0;
        var sameCountRow = 0;
        var lastCol = null;
        var lastRow = null;
        for (var row = 0; row < size; row++) {
            sameCountCol = sameCountRow = 0;
            lastCol = lastRow = null;
            for (var col = 0; col < size; col++) {
                var module = data.get(row, col);
                if (module === lastCol) {
                    sameCountCol++;
                }
                else {
                    if (sameCountCol >= 5)
                        points += PenaltyScores.N1 + (sameCountCol - 5);
                    lastCol = module;
                    sameCountCol = 1;
                }
                module = data.get(col, row);
                if (module === lastRow) {
                    sameCountRow++;
                }
                else {
                    if (sameCountRow >= 5)
                        points += PenaltyScores.N1 + (sameCountRow - 5);
                    lastRow = module;
                    sameCountRow = 1;
                }
            }
            if (sameCountCol >= 5)
                points += PenaltyScores.N1 + (sameCountCol - 5);
            if (sameCountRow >= 5)
                points += PenaltyScores.N1 + (sameCountRow - 5);
        }
        return points;
    };
    /**
     * Find 2x2 blocks with the same color and assign a penalty value
     *
     * Points: N2 * (m - 1) * (n - 1)
     */
    exports.getPenaltyN2 = function getPenaltyN2(data) {
        var size = data.size;
        var points = 0;
        for (var row = 0; row < size - 1; row++) {
            for (var col = 0; col < size - 1; col++) {
                var last = data.get(row, col) +
                    data.get(row, col + 1) +
                    data.get(row + 1, col) +
                    data.get(row + 1, col + 1);
                if (last === 4 || last === 0)
                    points++;
            }
        }
        return points * PenaltyScores.N2;
    };
    /**
     * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
     * preceded or followed by light area 4 modules wide
     *
     * Points: N3 * number of pattern found
     */
    exports.getPenaltyN3 = function getPenaltyN3(data) {
        var size = data.size;
        var points = 0;
        var bitsCol = 0;
        var bitsRow = 0;
        for (var row = 0; row < size; row++) {
            bitsCol = bitsRow = 0;
            for (var col = 0; col < size; col++) {
                bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col);
                if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D))
                    points++;
                bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row);
                if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D))
                    points++;
            }
        }
        return points * PenaltyScores.N3;
    };
    /**
     * Calculate proportion of dark modules in entire symbol
     *
     * Points: N4 * k
     *
     * k is the rating of the deviation of the proportion of dark modules
     * in the symbol from 50% in steps of 5%
     */
    exports.getPenaltyN4 = function getPenaltyN4(data) {
        var darkCount = 0;
        var modulesCount = data.data.length;
        for (var i = 0; i < modulesCount; i++)
            darkCount += data.data[i];
        var k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10);
        return k * PenaltyScores.N4;
    };
    /**
     * Return mask value at given position
     *
     * @param  {Number} maskPattern Pattern reference value
     * @param  {Number} i           Row
     * @param  {Number} j           Column
     * @return {Boolean}            Mask value
     */
    function getMaskAt(maskPattern, i, j) {
        switch (maskPattern) {
            case exports.Patterns.PATTERN000: return (i + j) % 2 === 0;
            case exports.Patterns.PATTERN001: return i % 2 === 0;
            case exports.Patterns.PATTERN010: return j % 3 === 0;
            case exports.Patterns.PATTERN011: return (i + j) % 3 === 0;
            case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
            case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0;
            case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0;
            case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0;
            default: throw new Error('bad maskPattern:' + maskPattern);
        }
    }
    /**
     * Apply a mask pattern to a BitMatrix
     *
     * @param  {Number}    pattern Pattern reference number
     * @param  {BitMatrix} data    BitMatrix data
     */
    exports.applyMask = function applyMask(pattern, data) {
        var size = data.size;
        for (var col = 0; col < size; col++) {
            for (var row = 0; row < size; row++) {
                if (data.isReserved(row, col))
                    continue;
                data.xor(row, col, getMaskAt(pattern, row, col));
            }
        }
    };
    /**
     * Returns the best mask pattern for data
     *
     * @param  {BitMatrix} data
     * @return {Number} Mask pattern reference number
     */
    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
        var numPatterns = Object.keys(exports.Patterns).length;
        var bestPattern = 0;
        var lowerPenalty = Infinity;
        for (var p = 0; p < numPatterns; p++) {
            setupFormatFunc(p);
            exports.applyMask(p, data);
            // Calculate penalty
            var penalty = exports.getPenaltyN1(data) +
                exports.getPenaltyN2(data) +
                exports.getPenaltyN3(data) +
                exports.getPenaltyN4(data);
            // Undo previously applied mask
            exports.applyMask(p, data);
            if (penalty < lowerPenalty) {
                lowerPenalty = penalty;
                bestPattern = p;
            }
        }
        return bestPattern;
    };
});
var EC_BLOCKS_TABLE = [
    // L  M  Q  H
    1, 1, 1, 1,
    1, 1, 1, 1,
    1, 1, 2, 2,
    1, 2, 2, 4,
    1, 2, 4, 4,
    2, 4, 4, 4,
    2, 4, 6, 5,
    2, 4, 6, 6,
    2, 5, 8, 8,
    4, 5, 8, 8,
    4, 5, 8, 11,
    4, 8, 10, 11,
    4, 9, 12, 16,
    4, 9, 16, 16,
    6, 10, 12, 18,
    6, 10, 17, 16,
    6, 11, 16, 19,
    6, 13, 18, 21,
    7, 14, 21, 25,
    8, 16, 20, 25,
    8, 17, 23, 25,
    9, 17, 23, 34,
    9, 18, 25, 30,
    10, 20, 27, 32,
    12, 21, 29, 35,
    12, 23, 34, 37,
    12, 25, 34, 40,
    13, 26, 35, 42,
    14, 28, 38, 45,
    15, 29, 40, 48,
    16, 31, 43, 51,
    17, 33, 45, 54,
    18, 35, 48, 57,
    19, 37, 51, 60,
    19, 38, 53, 63,
    20, 40, 56, 66,
    21, 43, 59, 70,
    22, 45, 62, 74,
    24, 47, 65, 77,
    25, 49, 68, 81
];
var EC_CODEWORDS_TABLE = [
    // L  M  Q  H
    7, 10, 13, 17,
    10, 16, 22, 28,
    15, 26, 36, 44,
    20, 36, 52, 64,
    26, 48, 72, 88,
    36, 64, 96, 112,
    40, 72, 108, 130,
    48, 88, 132, 156,
    60, 110, 160, 192,
    72, 130, 192, 224,
    80, 150, 224, 264,
    96, 176, 260, 308,
    104, 198, 288, 352,
    120, 216, 320, 384,
    132, 240, 360, 432,
    144, 280, 408, 480,
    168, 308, 448, 532,
    180, 338, 504, 588,
    196, 364, 546, 650,
    224, 416, 600, 700,
    224, 442, 644, 750,
    252, 476, 690, 816,
    270, 504, 750, 900,
    300, 560, 810, 960,
    312, 588, 870, 1050,
    336, 644, 952, 1110,
    360, 700, 1020, 1200,
    390, 728, 1050, 1260,
    420, 784, 1140, 1350,
    450, 812, 1200, 1440,
    480, 868, 1290, 1530,
    510, 924, 1350, 1620,
    540, 980, 1440, 1710,
    570, 1036, 1530, 1800,
    570, 1064, 1590, 1890,
    600, 1120, 1680, 1980,
    630, 1204, 1770, 2100,
    660, 1260, 1860, 2220,
    720, 1316, 1950, 2310,
    750, 1372, 2040, 2430
];
/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
var getBlocksCount = function getBlocksCount(version, errorCorrectionLevel$1) {
    switch (errorCorrectionLevel$1) {
        case errorCorrectionLevel.L:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case errorCorrectionLevel.M:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case errorCorrectionLevel.Q:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case errorCorrectionLevel.H:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};
/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
var getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel$1) {
    switch (errorCorrectionLevel$1) {
        case errorCorrectionLevel.L:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case errorCorrectionLevel.M:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case errorCorrectionLevel.Q:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case errorCorrectionLevel.H:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};
var errorCorrectionCode = {
    getBlocksCount: getBlocksCount,
    getTotalCodewordsCount: getTotalCodewordsCount
};
var EXP_TABLE = typedarrayBuffer.alloc(512);
var LOG_TABLE = typedarrayBuffer.alloc(256);
(function initTables() {
    var x = 1;
    for (var i = 0; i < 255; i++) {
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1; // multiply by 2
        // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
        // This means that when a number is 256 or larger, it should be XORed with 0x11D.
        if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
            x ^= 0x11D;
        }
    }
    // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
    // stay inside the bounds (because we will mainly use this table for the multiplication of
    // two GF numbers, no more).
    // @see {@link mul}
    for (i = 255; i < 512; i++) {
        EXP_TABLE[i] = EXP_TABLE[i - 255];
    }
}());
/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
var log = function log(n) {
    if (n < 1)
        throw new Error('log(' + n + ')');
    return LOG_TABLE[n];
};
/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
var exp = function exp(n) {
    return EXP_TABLE[n];
};
/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
var mul = function mul(x, y) {
    if (x === 0 || y === 0)
        return 0;
    // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
    // @see {@link initTables}
    return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
};
var galoisField = {
    log: log,
    exp: exp,
    mul: mul
};
var polynomial = createCommonjsModule(function (module, exports) {
    /**
     * Multiplies two polynomials inside Galois Field
     *
     * @param  {Buffer} p1 Polynomial
     * @param  {Buffer} p2 Polynomial
     * @return {Buffer}    Product of p1 and p2
     */
    exports.mul = function mul(p1, p2) {
        var coeff = typedarrayBuffer.alloc(p1.length + p2.length - 1);
        for (var i = 0; i < p1.length; i++) {
            for (var j = 0; j < p2.length; j++) {
                coeff[i + j] ^= galoisField.mul(p1[i], p2[j]);
            }
        }
        return coeff;
    };
    /**
     * Calculate the remainder of polynomials division
     *
     * @param  {Buffer} divident Polynomial
     * @param  {Buffer} divisor  Polynomial
     * @return {Buffer}          Remainder
     */
    exports.mod = function mod(divident, divisor) {
        var result = typedarrayBuffer.from(divident);
        while ((result.length - divisor.length) >= 0) {
            var coeff = result[0];
            for (var i = 0; i < divisor.length; i++) {
                result[i] ^= galoisField.mul(divisor[i], coeff);
            }
            // remove all zeros from buffer head
            var offset = 0;
            while (offset < result.length && result[offset] === 0)
                offset++;
            result = result.slice(offset);
        }
        return result;
    };
    /**
     * Generate an irreducible generator polynomial of specified degree
     * (used by Reed-Solomon encoder)
     *
     * @param  {Number} degree Degree of the generator polynomial
     * @return {Buffer}        Buffer containing polynomial coefficients
     */
    exports.generateECPolynomial = function generateECPolynomial(degree) {
        var poly = typedarrayBuffer.from([1]);
        for (var i = 0; i < degree; i++) {
            poly = exports.mul(poly, [1, galoisField.exp(i)]);
        }
        return poly;
    };
});
var Buffer$1 = buffer__WEBPACK_IMPORTED_MODULE_8___default.a.Buffer;
function ReedSolomonEncoder(degree) {
    this.genPoly = undefined;
    this.degree = degree;
    if (this.degree)
        this.initialize(this.degree);
}
/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
    // create an irreducible generator polynomial
    this.degree = degree;
    this.genPoly = polynomial.generateECPolynomial(this.degree);
};
/**
 * Encodes a chunk of data
 *
 * @param  {Buffer} data Buffer containing input data
 * @return {Buffer}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode(data) {
    if (!this.genPoly) {
        throw new Error('Encoder not initialized');
    }
    // Calculate EC for this data block
    // extends data size to data+genPoly size
    var pad = typedarrayBuffer.alloc(this.degree);
    var paddedData = Buffer$1.concat([data, pad], data.length + this.degree);
    // The error correction codewords are the remainder after dividing the data codewords
    // by a generator polynomial
    var remainder = polynomial.mod(paddedData, this.genPoly);
    // return EC data blocks (last n byte, where n is the degree of genPoly)
    // If coefficients number in remainder are less than genPoly degree,
    // pad with 0s to the left to reach the needed number of coefficients
    var start = this.degree - remainder.length;
    if (start > 0) {
        var buff = typedarrayBuffer.alloc(this.degree);
        remainder.copy(buff, start);
        return buff;
    }
    return remainder;
};
var reedSolomonEncoder = ReedSolomonEncoder;
/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
var isValid = function isValid(version) {
    return !isNaN(version) && version >= 1 && version <= 40;
};
var versionCheck = {
    isValid: isValid
};
var numeric = '[0-9]+';
var alphanumeric = '[A-Z $%*+\\-./:]+';
var kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
    '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
    '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
    '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
kanji = kanji.replace(/u/g, '\\u');
var byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';
var KANJI = new RegExp(kanji, 'g');
var BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
var BYTE = new RegExp(byte, 'g');
var NUMERIC = new RegExp(numeric, 'g');
var ALPHANUMERIC = new RegExp(alphanumeric, 'g');
var TEST_KANJI = new RegExp('^' + kanji + '$');
var TEST_NUMERIC = new RegExp('^' + numeric + '$');
var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
var testKanji = function testKanji(str) {
    return TEST_KANJI.test(str);
};
var testNumeric = function testNumeric(str) {
    return TEST_NUMERIC.test(str);
};
var testAlphanumeric = function testAlphanumeric(str) {
    return TEST_ALPHANUMERIC.test(str);
};
var regex = {
    KANJI: KANJI,
    BYTE_KANJI: BYTE_KANJI,
    BYTE: BYTE,
    NUMERIC: NUMERIC,
    ALPHANUMERIC: ALPHANUMERIC,
    testKanji: testKanji,
    testNumeric: testNumeric,
    testAlphanumeric: testAlphanumeric
};
var mode = createCommonjsModule(function (module, exports) {
    /**
     * Numeric mode encodes data from the decimal digit set (0 - 9)
     * (byte values 30HEX to 39HEX).
     * Normally, 3 data characters are represented by 10 bits.
     *
     * @type {Object}
     */
    exports.NUMERIC = {
        id: 'Numeric',
        bit: 1 << 0,
        ccBits: [10, 12, 14]
    };
    /**
     * Alphanumeric mode encodes data from a set of 45 characters,
     * i.e. 10 numeric digits (0 - 9),
     *      26 alphabetic characters (A - Z),
     *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
     * Normally, two input characters are represented by 11 bits.
     *
     * @type {Object}
     */
    exports.ALPHANUMERIC = {
        id: 'Alphanumeric',
        bit: 1 << 1,
        ccBits: [9, 11, 13]
    };
    /**
     * In byte mode, data is encoded at 8 bits per character.
     *
     * @type {Object}
     */
    exports.BYTE = {
        id: 'Byte',
        bit: 1 << 2,
        ccBits: [8, 16, 16]
    };
    /**
     * The Kanji mode efficiently encodes Kanji characters in accordance with
     * the Shift JIS system based on JIS X 0208.
     * The Shift JIS values are shifted from the JIS X 0208 values.
     * JIS X 0208 gives details of the shift coded representation.
     * Each two-byte character value is compacted to a 13-bit binary codeword.
     *
     * @type {Object}
     */
    exports.KANJI = {
        id: 'Kanji',
        bit: 1 << 3,
        ccBits: [8, 10, 12]
    };
    /**
     * Mixed mode will contain a sequences of data in a combination of any of
     * the modes described above
     *
     * @type {Object}
     */
    exports.MIXED = {
        bit: -1
    };
    /**
     * Returns the number of bits needed to store the data length
     * according to QR Code specifications.
     *
     * @param  {Mode}   mode    Data mode
     * @param  {Number} version QR Code version
     * @return {Number}         Number of bits
     */
    exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
        if (!mode.ccBits)
            throw new Error('Invalid mode: ' + mode);
        if (!versionCheck.isValid(version)) {
            throw new Error('Invalid version: ' + version);
        }
        if (version >= 1 && version < 10)
            return mode.ccBits[0];
        else if (version < 27)
            return mode.ccBits[1];
        return mode.ccBits[2];
    };
    /**
     * Returns the most efficient mode to store the specified data
     *
     * @param  {String} dataStr Input data string
     * @return {Mode}           Best mode
     */
    exports.getBestModeForData = function getBestModeForData(dataStr) {
        if (regex.testNumeric(dataStr))
            return exports.NUMERIC;
        else if (regex.testAlphanumeric(dataStr))
            return exports.ALPHANUMERIC;
        else if (regex.testKanji(dataStr))
            return exports.KANJI;
        else
            return exports.BYTE;
    };
    /**
     * Return mode name as string
     *
     * @param {Mode} mode Mode object
     * @returns {String}  Mode name
     */
    exports.toString = function toString(mode) {
        if (mode && mode.id)
            return mode.id;
        throw new Error('Invalid mode');
    };
    /**
     * Check if input param is a valid mode object
     *
     * @param   {Mode}    mode Mode object
     * @returns {Boolean} True if valid mode, false otherwise
     */
    exports.isValid = function isValid(mode) {
        return mode && mode.bit && mode.ccBits;
    };
    /**
     * Get mode object from its name
     *
     * @param   {String} string Mode name
     * @returns {Mode}          Mode object
     */
    function fromString(string) {
        if (typeof string !== 'string') {
            throw new Error('Param is not a string');
        }
        var lcStr = string.toLowerCase();
        switch (lcStr) {
            case 'numeric':
                return exports.NUMERIC;
            case 'alphanumeric':
                return exports.ALPHANUMERIC;
            case 'kanji':
                return exports.KANJI;
            case 'byte':
                return exports.BYTE;
            default:
                throw new Error('Unknown mode: ' + string);
        }
    }
    /**
     * Returns mode from a value.
     * If value is not a valid mode, returns defaultValue
     *
     * @param  {Mode|String} value        Encoding mode
     * @param  {Mode}        defaultValue Fallback value
     * @return {Mode}                     Encoding mode
     */
    exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
            return value;
        }
        try {
            return fromString(value);
        }
        catch (e) {
            return defaultValue;
        }
    };
});
var version = createCommonjsModule(function (module, exports) {
    // Generator polynomial used to encode version information
    var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
    var G18_BCH = utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
        for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
            if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
                return currentVersion;
            }
        }
        return undefined;
    }
    function getReservedBitsCount(mode$1, version) {
        // Character count indicator + mode indicator bits
        return mode.getCharCountIndicator(mode$1, version) + 4;
    }
    function getTotalBitsFromDataArray(segments, version) {
        var totalBits = 0;
        segments.forEach(function (data) {
            var reservedBits = getReservedBitsCount(data.mode, version);
            totalBits += reservedBits + data.getBitsLength();
        });
        return totalBits;
    }
    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
        for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
            var length = getTotalBitsFromDataArray(segments, currentVersion);
            if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode.MIXED)) {
                return currentVersion;
            }
        }
        return undefined;
    }
    /**
     * Returns version number from a value.
     * If value is not a valid version, returns defaultValue
     *
     * @param  {Number|String} value        QR Code version
     * @param  {Number}        defaultValue Fallback value
     * @return {Number}                     QR Code version number
     */
    exports.from = function from(value, defaultValue) {
        if (versionCheck.isValid(value)) {
            return parseInt(value, 10);
        }
        return defaultValue;
    };
    /**
     * Returns how much data can be stored with the specified QR code version
     * and error correction level
     *
     * @param  {Number} version              QR Code version (1-40)
     * @param  {Number} errorCorrectionLevel Error correction level
     * @param  {Mode}   mode                 Data mode
     * @return {Number}                      Quantity of storable data
     */
    exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode$1) {
        if (!versionCheck.isValid(version)) {
            throw new Error('Invalid QR Code version');
        }
        // Use Byte mode as default
        if (typeof mode$1 === 'undefined')
            mode$1 = mode.BYTE;
        // Total codewords for this QR code version (Data + Error correction)
        var totalCodewords = utils.getSymbolTotalCodewords(version);
        // Total number of error correction codewords
        var ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        // Total number of data codewords
        var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
        if (mode$1 === mode.MIXED)
            return dataTotalCodewordsBits;
        var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode$1, version);
        // Return max number of storable codewords
        switch (mode$1) {
            case mode.NUMERIC:
                return Math.floor((usableBits / 10) * 3);
            case mode.ALPHANUMERIC:
                return Math.floor((usableBits / 11) * 2);
            case mode.KANJI:
                return Math.floor(usableBits / 13);
            case mode.BYTE:
            default:
                return Math.floor(usableBits / 8);
        }
    };
    /**
     * Returns the minimum version needed to contain the amount of data
     *
     * @param  {Segment} data                    Segment of data
     * @param  {Number} [errorCorrectionLevel=H] Error correction level
     * @param  {Mode} mode                       Data mode
     * @return {Number}                          QR Code version
     */
    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel$1) {
        var seg;
        var ecl = errorCorrectionLevel.from(errorCorrectionLevel$1, errorCorrectionLevel.M);
        if (isarray(data)) {
            if (data.length > 1) {
                return getBestVersionForMixedData(data, ecl);
            }
            if (data.length === 0) {
                return 1;
            }
            seg = data[0];
        }
        else {
            seg = data;
        }
        return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    /**
     * Returns version information with relative error correction bits
     *
     * The version information is included in QR Code symbols of version 7 or larger.
     * It consists of an 18-bit sequence containing 6 data bits,
     * with 12 error correction bits calculated using the (18, 6) Golay code.
     *
     * @param  {Number} version QR Code version
     * @return {Number}         Encoded version info bits
     */
    exports.getEncodedBits = function getEncodedBits(version) {
        if (!versionCheck.isValid(version) || version < 7) {
            throw new Error('Invalid QR Code version');
        }
        var d = version << 12;
        while (utils.getBCHDigit(d) - G18_BCH >= 0) {
            d ^= (G18 << (utils.getBCHDigit(d) - G18_BCH));
        }
        return (version << 12) | d;
    };
});
var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);
var G15_BCH = utils.getBCHDigit(G15);
/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
var getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
    var data = ((errorCorrectionLevel.bit << 3) | mask);
    var d = data << 10;
    while (utils.getBCHDigit(d) - G15_BCH >= 0) {
        d ^= (G15 << (utils.getBCHDigit(d) - G15_BCH));
    }
    // xor final data with mask pattern in order to ensure that
    // no combination of Error Correction Level and data mask pattern
    // will result in an all-zero data string
    return ((data << 10) | d) ^ G15_MASK;
};
var formatInfo = {
    getEncodedBits: getEncodedBits
};
function NumericData(data) {
    this.mode = mode.NUMERIC;
    this.data = data.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
    return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0);
};
NumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength() {
    return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write(bitBuffer) {
    var i, group, value;
    // The input data string is divided into groups of three digits,
    // and each group is converted to its 10-bit binary equivalent.
    for (i = 0; i + 3 <= this.data.length; i += 3) {
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
    }
    // If the number of input digits is not an exact multiple of three,
    // the final one or two digits are converted to 4 or 7 bits respectively.
    var remainingNum = this.data.length - i;
    if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
    }
};
var numericData = NumericData;
/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
var ALPHA_NUM_CHARS = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    ' ', '$', '%', '*', '+', '-', '.', '/', ':'
];
function AlphanumericData(data) {
    this.mode = mode.ALPHANUMERIC;
    this.data = data;
}
AlphanumericData.getBitsLength = function getBitsLength(length) {
    return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength() {
    return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write(bitBuffer) {
    var i;
    // Input data characters are divided into groups of two characters
    // and encoded as 11-bit binary codes.
    for (i = 0; i + 2 <= this.data.length; i += 2) {
        // The character value of the first character is multiplied by 45
        var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        // The character value of the second digit is added to the product
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        // The sum is then stored as 11-bit binary number
        bitBuffer.put(value, 11);
    }
    // If the number of input data characters is not a multiple of two,
    // the character value of the final character is encoded as a 6-bit binary number.
    if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
    }
};
var alphanumericData = AlphanumericData;
function ByteData(data) {
    this.mode = mode.BYTE;
    this.data = typedarrayBuffer.from(data);
}
ByteData.getBitsLength = function getBitsLength(length) {
    return length * 8;
};
ByteData.prototype.getLength = function getLength() {
    return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength() {
    return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function (bitBuffer) {
    for (var i = 0, l = this.data.length; i < l; i++) {
        bitBuffer.put(this.data[i], 8);
    }
};
var byteData = ByteData;
function KanjiData(data) {
    this.mode = mode.KANJI;
    this.data = data;
}
KanjiData.getBitsLength = function getBitsLength(length) {
    return length * 13;
};
KanjiData.prototype.getLength = function getLength() {
    return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength() {
    return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function (bitBuffer) {
    var i;
    // In the Shift JIS system, Kanji characters are represented by a two byte combination.
    // These byte values are shifted from the JIS X 0208 values.
    // JIS X 0208 gives details of the shift coded representation.
    for (i = 0; i < this.data.length; i++) {
        var value = utils.toSJIS(this.data[i]);
        // For characters with Shift JIS values from 0x8140 to 0x9FFC:
        if (value >= 0x8140 && value <= 0x9FFC) {
            // Subtract 0x8140 from Shift JIS value
            value -= 0x8140;
            // For characters with Shift JIS values from 0xE040 to 0xEBBF
        }
        else if (value >= 0xE040 && value <= 0xEBBF) {
            // Subtract 0xC140 from Shift JIS value
            value -= 0xC140;
        }
        else {
            throw new Error('Invalid SJIS character: ' + this.data[i] + '\n' +
                'Make sure your charset is UTF-8');
        }
        // Multiply most significant byte of result by 0xC0
        // and add least significant byte to product
        value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff);
        // Convert result to a 13-bit binary string
        bitBuffer.put(value, 13);
    }
};
var kanjiData = KanjiData;
var dijkstra_1 = createCommonjsModule(function (module) {
    /******************************************************************************
     * Created 2008-08-19.
     *
     * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
     *
     * Copyright (C) 2008
     *   Wyatt Baldwin <self@wyattbaldwin.com>
     *   All rights reserved
     *
     * Licensed under the MIT license.
     *
     *   http://www.opensource.org/licenses/mit-license.php
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     *****************************************************************************/
    var dijkstra = {
        single_source_shortest_paths: function (graph, s, d) {
            // Predecessor map for each node that has been encountered.
            // node ID => predecessor node ID
            var predecessors = {};
            // Costs of shortest paths from s to all nodes encountered.
            // node ID => cost
            var costs = {};
            costs[s] = 0;
            // Costs of shortest paths from s to all nodes encountered; differs from
            // `costs` in that it provides easy access to the node that currently has
            // the known shortest path from s.
            // XXX: Do we actually need both `costs` and `open`?
            var open = dijkstra.PriorityQueue.make();
            open.push(s, 0);
            var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
            while (!open.empty()) {
                // In the nodes remaining in graph that have a known cost from s,
                // find the node, u, that currently has the shortest path from s.
                closest = open.pop();
                u = closest.value;
                cost_of_s_to_u = closest.cost;
                // Get nodes adjacent to u...
                adjacent_nodes = graph[u] || {};
                // ...and explore the edges that connect u to those nodes, updating
                // the cost of the shortest paths to any or all of those nodes as
                // necessary. v is the node across the current edge from u.
                for (v in adjacent_nodes) {
                    if (adjacent_nodes.hasOwnProperty(v)) {
                        // Get the cost of the edge running from u to v.
                        cost_of_e = adjacent_nodes[v];
                        // Cost of s to u plus the cost of u to v across e--this is *a*
                        // cost from s to v that may or may not be less than the current
                        // known cost to v.
                        cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
                        // If we haven't visited v yet OR if the current known cost from s to
                        // v is greater than the new cost we just found (cost of s to u plus
                        // cost of u to v across e), update v's cost in the cost list and
                        // update v's predecessor in the predecessor list (it's now u).
                        cost_of_s_to_v = costs[v];
                        first_visit = (typeof costs[v] === 'undefined');
                        if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                            costs[v] = cost_of_s_to_u_plus_cost_of_e;
                            open.push(v, cost_of_s_to_u_plus_cost_of_e);
                            predecessors[v] = u;
                        }
                    }
                }
            }
            if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
                var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
                throw new Error(msg);
            }
            return predecessors;
        },
        extract_shortest_path_from_predecessor_list: function (predecessors, d) {
            var nodes = [];
            var u = d;
            while (u) {
                nodes.push(u);
                u = predecessors[u];
            }
            nodes.reverse();
            return nodes;
        },
        find_path: function (graph, s, d) {
            var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
            return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
        },
        /**
         * A very naive priority queue implementation.
         */
        PriorityQueue: {
            make: function (opts) {
                var T = dijkstra.PriorityQueue, t = {}, key;
                opts = opts || {};
                for (key in T) {
                    if (T.hasOwnProperty(key)) {
                        t[key] = T[key];
                    }
                }
                t.queue = [];
                t.sorter = opts.sorter || T.default_sorter;
                return t;
            },
            default_sorter: function (a, b) {
                return a.cost - b.cost;
            },
            /**
             * Add a new item to the queue and ensure the highest priority element
             * is at the front of the queue.
             */
            push: function (value, cost) {
                var item = { value: value, cost: cost };
                this.queue.push(item);
                this.queue.sort(this.sorter);
            },
            /**
             * Return the highest priority element in the queue.
             */
            pop: function () {
                return this.queue.shift();
            },
            empty: function () {
                return this.queue.length === 0;
            }
        }
    };
    // node.js module exports
    {
        module.exports = dijkstra;
    }
});
var segments = createCommonjsModule(function (module, exports) {
    /**
     * Returns UTF8 byte length
     *
     * @param  {String} str Input string
     * @return {Number}     Number of byte
     */
    function getStringByteLength(str) {
        return unescape(encodeURIComponent(str)).length;
    }
    /**
     * Get a list of segments of the specified mode
     * from a string
     *
     * @param  {Mode}   mode Segment mode
     * @param  {String} str  String to process
     * @return {Array}       Array of object with segments data
     */
    function getSegments(regex, mode, str) {
        var segments = [];
        var result;
        while ((result = regex.exec(str)) !== null) {
            segments.push({
                data: result[0],
                index: result.index,
                mode: mode,
                length: result[0].length
            });
        }
        return segments;
    }
    /**
     * Extracts a series of segments with the appropriate
     * modes from a string
     *
     * @param  {String} dataStr Input string
     * @return {Array}          Array of object with segments data
     */
    function getSegmentsFromString(dataStr) {
        var numSegs = getSegments(regex.NUMERIC, mode.NUMERIC, dataStr);
        var alphaNumSegs = getSegments(regex.ALPHANUMERIC, mode.ALPHANUMERIC, dataStr);
        var byteSegs;
        var kanjiSegs;
        if (utils.isKanjiModeEnabled()) {
            byteSegs = getSegments(regex.BYTE, mode.BYTE, dataStr);
            kanjiSegs = getSegments(regex.KANJI, mode.KANJI, dataStr);
        }
        else {
            byteSegs = getSegments(regex.BYTE_KANJI, mode.BYTE, dataStr);
            kanjiSegs = [];
        }
        var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
        return segs
            .sort(function (s1, s2) {
            return s1.index - s2.index;
        })
            .map(function (obj) {
            return {
                data: obj.data,
                mode: obj.mode,
                length: obj.length
            };
        });
    }
    /**
     * Returns how many bits are needed to encode a string of
     * specified length with the specified mode
     *
     * @param  {Number} length String length
     * @param  {Mode} mode     Segment mode
     * @return {Number}        Bit length
     */
    function getSegmentBitsLength(length, mode$1) {
        switch (mode$1) {
            case mode.NUMERIC:
                return numericData.getBitsLength(length);
            case mode.ALPHANUMERIC:
                return alphanumericData.getBitsLength(length);
            case mode.KANJI:
                return kanjiData.getBitsLength(length);
            case mode.BYTE:
                return byteData.getBitsLength(length);
        }
    }
    /**
     * Merges adjacent segments which have the same mode
     *
     * @param  {Array} segs Array of object with segments data
     * @return {Array}      Array of object with segments data
     */
    function mergeSegments(segs) {
        return segs.reduce(function (acc, curr) {
            var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
            if (prevSeg && prevSeg.mode === curr.mode) {
                acc[acc.length - 1].data += curr.data;
                return acc;
            }
            acc.push(curr);
            return acc;
        }, []);
    }
    /**
     * Generates a list of all possible nodes combination which
     * will be used to build a segments graph.
     *
     * Nodes are divided by groups. Each group will contain a list of all the modes
     * in which is possible to encode the given text.
     *
     * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
     * The group for '12345' will contain then 3 objects, one for each
     * possible encoding mode.
     *
     * Each node represents a possible segment.
     *
     * @param  {Array} segs Array of object with segments data
     * @return {Array}      Array of object with segments data
     */
    function buildNodes(segs) {
        var nodes = [];
        for (var i = 0; i < segs.length; i++) {
            var seg = segs[i];
            switch (seg.mode) {
                case mode.NUMERIC:
                    nodes.push([seg,
                        { data: seg.data, mode: mode.ALPHANUMERIC, length: seg.length },
                        { data: seg.data, mode: mode.BYTE, length: seg.length }
                    ]);
                    break;
                case mode.ALPHANUMERIC:
                    nodes.push([seg,
                        { data: seg.data, mode: mode.BYTE, length: seg.length }
                    ]);
                    break;
                case mode.KANJI:
                    nodes.push([seg,
                        { data: seg.data, mode: mode.BYTE, length: getStringByteLength(seg.data) }
                    ]);
                    break;
                case mode.BYTE:
                    nodes.push([
                        { data: seg.data, mode: mode.BYTE, length: getStringByteLength(seg.data) }
                    ]);
            }
        }
        return nodes;
    }
    /**
     * Builds a graph from a list of nodes.
     * All segments in each node group will be connected with all the segments of
     * the next group and so on.
     *
     * At each connection will be assigned a weight depending on the
     * segment's byte length.
     *
     * @param  {Array} nodes    Array of object with segments data
     * @param  {Number} version QR Code version
     * @return {Object}         Graph of all possible segments
     */
    function buildGraph(nodes, version) {
        var table = {};
        var graph = { 'start': {} };
        var prevNodeIds = ['start'];
        for (var i = 0; i < nodes.length; i++) {
            var nodeGroup = nodes[i];
            var currentNodeIds = [];
            for (var j = 0; j < nodeGroup.length; j++) {
                var node = nodeGroup[j];
                var key = '' + i + j;
                currentNodeIds.push(key);
                table[key] = { node: node, lastCount: 0 };
                graph[key] = {};
                for (var n = 0; n < prevNodeIds.length; n++) {
                    var prevNodeId = prevNodeIds[n];
                    if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                        graph[prevNodeId][key] =
                            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
                                getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                        table[prevNodeId].lastCount += node.length;
                    }
                    else {
                        if (table[prevNodeId])
                            table[prevNodeId].lastCount = node.length;
                        graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
                            4 + mode.getCharCountIndicator(node.mode, version); // switch cost
                    }
                }
            }
            prevNodeIds = currentNodeIds;
        }
        for (n = 0; n < prevNodeIds.length; n++) {
            graph[prevNodeIds[n]]['end'] = 0;
        }
        return { map: graph, table: table };
    }
    /**
     * Builds a segment from a specified data and mode.
     * If a mode is not specified, the more suitable will be used.
     *
     * @param  {String} data             Input data
     * @param  {Mode | String} modesHint Data mode
     * @return {Segment}                 Segment
     */
    function buildSingleSegment(data, modesHint) {
        var mode$1;
        var bestMode = mode.getBestModeForData(data);
        mode$1 = mode.from(modesHint, bestMode);
        // Make sure data can be encoded
        if (mode$1 !== mode.BYTE && mode$1.bit < bestMode.bit) {
            throw new Error('"' + data + '"' +
                ' cannot be encoded with mode ' + mode.toString(mode$1) +
                '.\n Suggested mode is: ' + mode.toString(bestMode));
        }
        // Use Mode.BYTE if Kanji support is disabled
        if (mode$1 === mode.KANJI && !utils.isKanjiModeEnabled()) {
            mode$1 = mode.BYTE;
        }
        switch (mode$1) {
            case mode.NUMERIC:
                return new numericData(data);
            case mode.ALPHANUMERIC:
                return new alphanumericData(data);
            case mode.KANJI:
                return new kanjiData(data);
            case mode.BYTE:
                return new byteData(data);
        }
    }
    /**
     * Builds a list of segments from an array.
     * Array can contain Strings or Objects with segment's info.
     *
     * For each item which is a string, will be generated a segment with the given
     * string and the more appropriate encoding mode.
     *
     * For each item which is an object, will be generated a segment with the given
     * data and mode.
     * Objects must contain at least the property "data".
     * If property "mode" is not present, the more suitable mode will be used.
     *
     * @param  {Array} array Array of objects with segments data
     * @return {Array}       Array of Segments
     */
    exports.fromArray = function fromArray(array) {
        return array.reduce(function (acc, seg) {
            if (typeof seg === 'string') {
                acc.push(buildSingleSegment(seg, null));
            }
            else if (seg.data) {
                acc.push(buildSingleSegment(seg.data, seg.mode));
            }
            return acc;
        }, []);
    };
    /**
     * Builds an optimized sequence of segments from a string,
     * which will produce the shortest possible bitstream.
     *
     * @param  {String} data    Input string
     * @param  {Number} version QR Code version
     * @return {Array}          Array of segments
     */
    exports.fromString = function fromString(data, version) {
        var segs = getSegmentsFromString(data, utils.isKanjiModeEnabled());
        var nodes = buildNodes(segs);
        var graph = buildGraph(nodes, version);
        var path = dijkstra_1.find_path(graph.map, 'start', 'end');
        var optimizedSegs = [];
        for (var i = 1; i < path.length - 1; i++) {
            optimizedSegs.push(graph.table[path[i]].node);
        }
        return exports.fromArray(mergeSegments(optimizedSegs));
    };
    /**
     * Splits a string in various segments with the modes which
     * best represent their content.
     * The produced segments are far from being optimized.
     * The output of this function is only used to estimate a QR Code version
     * which may contain the data.
     *
     * @param  {string} data Input string
     * @return {Array}       Array of segments
     */
    exports.rawSplit = function rawSplit(data) {
        return exports.fromArray(getSegmentsFromString(data, utils.isKanjiModeEnabled()));
    };
});
/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/
/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern(matrix, version) {
    var size = matrix.size;
    var pos = finderPattern.getPositions(version);
    for (var i = 0; i < pos.length; i++) {
        var row = pos[i][0];
        var col = pos[i][1];
        for (var r = -1; r <= 7; r++) {
            if (row + r <= -1 || size <= row + r)
                continue;
            for (var c = -1; c <= 7; c++) {
                if (col + c <= -1 || size <= col + c)
                    continue;
                if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
                    (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
                    (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
                    matrix.set(row + r, col + c, true, true);
                }
                else {
                    matrix.set(row + r, col + c, false, true);
                }
            }
        }
    }
}
/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern(matrix) {
    var size = matrix.size;
    for (var r = 8; r < size - 8; r++) {
        var value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
    }
}
/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern(matrix, version) {
    var pos = alignmentPattern.getPositions(version);
    for (var i = 0; i < pos.length; i++) {
        var row = pos[i][0];
        var col = pos[i][1];
        for (var r = -2; r <= 2; r++) {
            for (var c = -2; c <= 2; c++) {
                if (r === -2 || r === 2 || c === -2 || c === 2 ||
                    (r === 0 && c === 0)) {
                    matrix.set(row + r, col + c, true, true);
                }
                else {
                    matrix.set(row + r, col + c, false, true);
                }
            }
        }
    }
}
/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo(matrix, version$1) {
    var size = matrix.size;
    var bits = version.getEncodedBits(version$1);
    var row, col, mod;
    for (var i = 0; i < 18; i++) {
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = ((bits >> i) & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
    }
}
/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
    var size = matrix.size;
    var bits = formatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
    var i, mod;
    for (i = 0; i < 15; i++) {
        mod = ((bits >> i) & 1) === 1;
        // vertical
        if (i < 6) {
            matrix.set(i, 8, mod, true);
        }
        else if (i < 8) {
            matrix.set(i + 1, 8, mod, true);
        }
        else {
            matrix.set(size - 15 + i, 8, mod, true);
        }
        // horizontal
        if (i < 8) {
            matrix.set(8, size - i - 1, mod, true);
        }
        else if (i < 9) {
            matrix.set(8, 15 - i - 1 + 1, mod, true);
        }
        else {
            matrix.set(8, 15 - i - 1, mod, true);
        }
    }
    // fixed module
    matrix.set(size - 8, 8, 1, true);
}
/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix} matrix Modules matrix
 * @param  {Buffer}    data   Data codewords
 */
function setupData(matrix, data) {
    var size = matrix.size;
    var inc = -1;
    var row = size - 1;
    var bitIndex = 7;
    var byteIndex = 0;
    for (var col = size - 1; col > 0; col -= 2) {
        if (col === 6)
            col--;
        while (true) {
            for (var c = 0; c < 2; c++) {
                if (!matrix.isReserved(row, col - c)) {
                    var dark = false;
                    if (byteIndex < data.length) {
                        dark = (((data[byteIndex] >>> bitIndex) & 1) === 1);
                    }
                    matrix.set(row, col - c, dark);
                    bitIndex--;
                    if (bitIndex === -1) {
                        byteIndex++;
                        bitIndex = 7;
                    }
                }
            }
            row += inc;
            if (row < 0 || size <= row) {
                row -= inc;
                inc = -inc;
                break;
            }
        }
    }
}
/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Buffer}                        Buffer containing encoded codewords
 */
function createData(version, errorCorrectionLevel, segments) {
    // Prepare data buffer
    var buffer = new bitBuffer();
    segments.forEach(function (data) {
        // prefix data with mode indicator (4 bits)
        buffer.put(data.mode.bit, 4);
        // Prefix data with character count indicator.
        // The character count indicator is a string of bits that represents the
        // number of characters that are being encoded.
        // The character count indicator must be placed after the mode indicator
        // and must be a certain number of bits long, depending on the QR version
        // and data mode
        // @see {@link Mode.getCharCountIndicator}.
        buffer.put(data.getLength(), mode.getCharCountIndicator(data.mode, version));
        // add binary data sequence to buffer
        data.write(buffer);
    });
    // Calculate required number of bits
    var totalCodewords = utils.getSymbolTotalCodewords(version);
    var ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    // Add a terminator.
    // If the bit string is shorter than the total number of required bits,
    // a terminator of up to four 0s must be added to the right side of the string.
    // If the bit string is more than four bits shorter than the required number of bits,
    // add four 0s to the end.
    if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
    }
    // If the bit string is fewer than four bits shorter, add only the number of 0s that
    // are needed to reach the required number of bits.
    // After adding the terminator, if the number of bits in the string is not a multiple of 8,
    // pad the string on the right with 0s to make the string's length a multiple of 8.
    while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
    }
    // Add pad bytes if the string is still shorter than the total number of required bits.
    // Extend the buffer to fill the data capacity of the symbol corresponding to
    // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
    // and 00010001 (0x11) alternately.
    var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
    for (var i = 0; i < remainingByte; i++) {
        buffer.put(i % 2 ? 0x11 : 0xEC, 8);
    }
    return createCodewords(buffer, version, errorCorrectionLevel);
}
/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Buffer}                         Buffer containing encoded codewords
 */
function createCodewords(bitBuffer, version, errorCorrectionLevel) {
    // Total codewords for this QR code version (Data + Error correction)
    var totalCodewords = utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    var ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    var dataTotalCodewords = totalCodewords - ecTotalCodewords;
    // Total number of blocks
    var ecTotalBlocks = errorCorrectionCode.getBlocksCount(version, errorCorrectionLevel);
    // Calculate how many blocks each group should contain
    var blocksInGroup2 = totalCodewords % ecTotalBlocks;
    var blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
    var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
    var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
    var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
    // Number of EC codewords is the same for both groups
    var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
    // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
    var rs = new reedSolomonEncoder(ecCount);
    var offset = 0;
    var dcData = new Array(ecTotalBlocks);
    var ecData = new Array(ecTotalBlocks);
    var maxDataSize = 0;
    var buffer = typedarrayBuffer.from(bitBuffer.buffer);
    // Divide the buffer into the required number of blocks
    for (var b = 0; b < ecTotalBlocks; b++) {
        var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        // extract a block of data from buffer
        dcData[b] = buffer.slice(offset, offset + dataSize);
        // Calculate EC codewords for this data block
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
    }
    // Create final data
    // Interleave the data and error correction codewords from each block
    var data = typedarrayBuffer.alloc(totalCodewords);
    var index = 0;
    var i, r;
    // Add data codewords
    for (i = 0; i < maxDataSize; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
            if (i < dcData[r].length) {
                data[index++] = dcData[r][i];
            }
        }
    }
    // Apped EC codewords
    for (i = 0; i < ecCount; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
            data[index++] = ecData[r][i];
        }
    }
    return data;
}
/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol(data, version$1, errorCorrectionLevel, maskPattern$1) {
    var segments$1;
    if (isarray(data)) {
        segments$1 = segments.fromArray(data);
    }
    else if (typeof data === 'string') {
        var estimatedVersion = version$1;
        if (!estimatedVersion) {
            var rawSegments = segments.rawSplit(data);
            // Estimate best version that can contain raw splitted segments
            estimatedVersion = version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        // Build optimized segments
        // If estimated version is undefined, try with the highest version
        segments$1 = segments.fromString(data, estimatedVersion || 40);
    }
    else {
        throw new Error('Invalid data');
    }
    // Get the min version that can contain data
    var bestVersion = version.getBestVersionForData(segments$1, errorCorrectionLevel);
    // If no version is found, data cannot be stored
    if (!bestVersion) {
        throw new Error('The amount of data is too big to be stored in a QR Code');
    }
    // If not specified, use min version as default
    if (!version$1) {
        version$1 = bestVersion;
        // Check if the specified version can contain the data
    }
    else if (version$1 < bestVersion) {
        throw new Error('\n' +
            'The chosen QR Code version cannot contain this amount of data.\n' +
            'Minimum version required to store current data is: ' + bestVersion + '.\n');
    }
    var dataBits = createData(version$1, errorCorrectionLevel, segments$1);
    // Allocate matrix buffer
    var moduleCount = utils.getSymbolSize(version$1);
    var modules = new bitMatrix(moduleCount);
    // Add function modules
    setupFinderPattern(modules, version$1);
    setupTimingPattern(modules);
    setupAlignmentPattern(modules, version$1);
    // Add temporary dummy bits for format info just to set them as reserved.
    // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
    // since the masking operation must be performed only on the encoding region.
    // These blocks will be replaced with correct values later in code.
    setupFormatInfo(modules, errorCorrectionLevel, 0);
    if (version$1 >= 7) {
        setupVersionInfo(modules, version$1);
    }
    // Add data codewords
    setupData(modules, dataBits);
    if (isNaN(maskPattern$1)) {
        // Find best mask pattern
        maskPattern$1 = maskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
    }
    // Apply mask pattern
    maskPattern.applyMask(maskPattern$1, modules);
    // Replace format info bits with correct values
    setupFormatInfo(modules, errorCorrectionLevel, maskPattern$1);
    return {
        modules: modules,
        version: version$1,
        errorCorrectionLevel: errorCorrectionLevel,
        maskPattern: maskPattern$1,
        segments: segments$1
    };
}
/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
var create = function create(data, options) {
    if (typeof data === 'undefined' || data === '') {
        throw new Error('No input text');
    }
    var errorCorrectionLevel$1 = errorCorrectionLevel.M;
    var version$1;
    var mask;
    if (typeof options !== 'undefined') {
        // Use higher error correction level as default
        errorCorrectionLevel$1 = errorCorrectionLevel.from(options.errorCorrectionLevel, errorCorrectionLevel.M);
        version$1 = version.from(options.version);
        mask = maskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
            utils.setToSJISFunction(options.toSJISFunc);
        }
    }
    return createSymbol(data, version$1, errorCorrectionLevel$1, mask);
};
var qrcode = {
    create: create
};
var utils$1 = createCommonjsModule(function (module, exports) {
    function hex2rgba(hex) {
        if (typeof hex === 'number') {
            hex = hex.toString();
        }
        if (typeof hex !== 'string') {
            throw new Error('Color should be defined as hex string');
        }
        var hexCode = hex.slice().replace('#', '').split('');
        if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
            throw new Error('Invalid hex color: ' + hex);
        }
        // Convert from short to long form (fff -> ffffff)
        if (hexCode.length === 3 || hexCode.length === 4) {
            hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
                return [c, c];
            }));
        }
        // Add default alpha value
        if (hexCode.length === 6)
            hexCode.push('F', 'F');
        var hexValue = parseInt(hexCode.join(''), 16);
        return {
            r: (hexValue >> 24) & 255,
            g: (hexValue >> 16) & 255,
            b: (hexValue >> 8) & 255,
            a: hexValue & 255,
            hex: '#' + hexCode.slice(0, 6).join('')
        };
    }
    exports.getOptions = function getOptions(options) {
        if (!options)
            options = {};
        if (!options.color)
            options.color = {};
        var margin = typeof options.margin === 'undefined' ||
            options.margin === null ||
            options.margin < 0 ? 4 : options.margin;
        var width = options.width && options.width >= 21 ? options.width : undefined;
        var scale = options.scale || 4;
        return {
            width: width,
            scale: width ? 4 : scale,
            margin: margin,
            color: {
                dark: hex2rgba(options.color.dark || '#000000ff'),
                light: hex2rgba(options.color.light || '#ffffffff')
            },
            type: options.type,
            rendererOpts: options.rendererOpts || {}
        };
    };
    exports.getScale = function getScale(qrSize, opts) {
        return opts.width && opts.width >= qrSize + opts.margin * 2
            ? opts.width / (qrSize + opts.margin * 2)
            : opts.scale;
    };
    exports.getImageWidth = function getImageWidth(qrSize, opts) {
        var scale = exports.getScale(qrSize, opts);
        return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
        var size = qr.modules.size;
        var data = qr.modules.data;
        var scale = exports.getScale(size, opts);
        var symbolSize = Math.floor((size + opts.margin * 2) * scale);
        var scaledMargin = opts.margin * scale;
        var palette = [opts.color.light, opts.color.dark];
        for (var i = 0; i < symbolSize; i++) {
            for (var j = 0; j < symbolSize; j++) {
                var posDst = (i * symbolSize + j) * 4;
                var pxColor = opts.color.light;
                if (i >= scaledMargin && j >= scaledMargin &&
                    i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
                    var iSrc = Math.floor((i - scaledMargin) / scale);
                    var jSrc = Math.floor((j - scaledMargin) / scale);
                    pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
                }
                imgData[posDst++] = pxColor.r;
                imgData[posDst++] = pxColor.g;
                imgData[posDst++] = pxColor.b;
                imgData[posDst] = pxColor.a;
            }
        }
    };
});
var canvas = createCommonjsModule(function (module, exports) {
    function clearCanvas(ctx, canvas, size) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (!canvas.style)
            canvas.style = {};
        canvas.height = size;
        canvas.width = size;
        canvas.style.height = size + 'px';
        canvas.style.width = size + 'px';
    }
    function getCanvasElement() {
        try {
            return document.createElement('canvas');
        }
        catch (e) {
            throw new Error('You need to specify a canvas element');
        }
    }
    exports.render = function render(qrData, canvas, options) {
        var opts = options;
        var canvasEl = canvas;
        if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
            opts = canvas;
            canvas = undefined;
        }
        if (!canvas) {
            canvasEl = getCanvasElement();
        }
        opts = utils$1.getOptions(opts);
        var size = utils$1.getImageWidth(qrData.modules.size, opts);
        var ctx = canvasEl.getContext('2d');
        var image = ctx.createImageData(size, size);
        utils$1.qrToImageData(image.data, qrData, opts);
        clearCanvas(ctx, canvasEl, size);
        ctx.putImageData(image, 0, 0);
        return canvasEl;
    };
    exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
        var opts = options;
        if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
            opts = canvas;
            canvas = undefined;
        }
        if (!opts)
            opts = {};
        var canvasEl = exports.render(qrData, canvas, opts);
        var type = opts.type || 'image/png';
        var rendererOpts = opts.rendererOpts || {};
        return canvasEl.toDataURL(type, rendererOpts.quality);
    };
});
function getColorAttrib(color, attrib) {
    var alpha = color.a / 255;
    var str = attrib + '="' + color.hex + '"';
    return alpha < 1
        ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
        : str;
}
function svgCmd(cmd, x, y) {
    var str = cmd + x;
    if (typeof y !== 'undefined')
        str += ' ' + y;
    return str;
}
function qrToPath(data, size, margin) {
    var path = '';
    var moveBy = 0;
    var newRow = false;
    var lineLength = 0;
    for (var i = 0; i < data.length; i++) {
        var col = Math.floor(i % size);
        var row = Math.floor(i / size);
        if (!col && !newRow)
            newRow = true;
        if (data[i]) {
            lineLength++;
            if (!(i > 0 && col > 0 && data[i - 1])) {
                path += newRow
                    ? svgCmd('M', col + margin, 0.5 + row + margin)
                    : svgCmd('m', moveBy, 0);
                moveBy = 0;
                newRow = false;
            }
            if (!(col + 1 < size && data[i + 1])) {
                path += svgCmd('h', lineLength);
                lineLength = 0;
            }
        }
        else {
            moveBy++;
        }
    }
    return path;
}
var render = function render(qrData, options, cb) {
    var opts = utils$1.getOptions(options);
    var size = qrData.modules.size;
    var data = qrData.modules.data;
    var qrcodesize = size + opts.margin * 2;
    var bg = !opts.color.light.a
        ? ''
        : '<path ' + getColorAttrib(opts.color.light, 'fill') +
            ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';
    var path = '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
        ' d="' + qrToPath(data, size, opts.margin) + '"/>';
    var viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';
    var width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';
    var svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';
    if (typeof cb === 'function') {
        cb(null, svgTag);
    }
    return svgTag;
};
var svgTag = {
    render: render
};
function renderCanvas(renderFunc, canvas, text, opts, cb) {
    var args = [].slice.call(arguments, 1);
    var argsNum = args.length;
    var isLastArgCb = typeof args[argsNum - 1] === 'function';
    if (!isLastArgCb && !canPromise()) {
        throw new Error('Callback required as last argument');
    }
    if (isLastArgCb) {
        if (argsNum < 2) {
            throw new Error('Too few arguments provided');
        }
        if (argsNum === 2) {
            cb = text;
            text = canvas;
            canvas = opts = undefined;
        }
        else if (argsNum === 3) {
            if (canvas.getContext && typeof cb === 'undefined') {
                cb = opts;
                opts = undefined;
            }
            else {
                cb = opts;
                opts = text;
                text = canvas;
                canvas = undefined;
            }
        }
    }
    else {
        if (argsNum < 1) {
            throw new Error('Too few arguments provided');
        }
        if (argsNum === 1) {
            text = canvas;
            canvas = opts = undefined;
        }
        else if (argsNum === 2 && !canvas.getContext) {
            opts = text;
            text = canvas;
            canvas = undefined;
        }
        return new Promise(function (resolve, reject) {
            try {
                var data = qrcode.create(text, opts);
                resolve(renderFunc(data, canvas, opts));
            }
            catch (e) {
                reject(e);
            }
        });
    }
    try {
        var data = qrcode.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
    }
    catch (e) {
        cb(e);
    }
}
var create$1 = qrcode.create;
var toCanvas = renderCanvas.bind(null, canvas.render);
var toDataURL = renderCanvas.bind(null, canvas.renderToDataURL);
// only svg for now.
var toString_1 = renderCanvas.bind(null, function (data, _, opts) {
    return svgTag.render(data, opts);
});
var browser = {
    create: create$1,
    toCanvas: toCanvas,
    toDataURL: toDataURL,
    toString: toString_1
};
var amplifyTotpSetupCss = ".totp-setup{text-align:center;margin-bottom:30px}.totp-setup img{height:128px;width:128px}";
var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('TOTP');
var AmplifyTOTPSetup = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputProps = {
            autoFocus: true,
        };
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** Used for header text in totp setup component */
        this.headerText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_HEADER_TEXT;
        /** Used for customizing the issuer string in the qr code image */
        this.issuer = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_ISSUER;
        this.code = null;
        this.setupMessage = null;
        this.qrCodeInput = null;
        this.loading = false;
    }
    class_1.prototype.componentWillLoad = function () {
        this.setup();
    };
    class_1.prototype.buildOtpAuthPath = function (user, issuer, secretKey) {
        return "otpauth://totp/" + issuer + ":" + user.username + "?secret=" + secretKey + "&issuer=" + issuer;
    };
    class_1.prototype.onTOTPEvent = function (event, data, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger.debug('on totp event', event, data);
                        if (!(event === _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["S"] && data === _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["i"])) return [3 /*break*/, 2];
                        return [4 /*yield*/, Object(_auth_helpers_2fada98e_js__WEBPACK_IMPORTED_MODULE_7__["c"])(user, this.handleAuthStateChange)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.handleTotpInputChange = function (event) {
        this.setupMessage = null;
        this.qrCodeInput = event.target.value;
    };
    class_1.prototype.generateQRCode = function (codeFromTotp) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, browser.toDataURL(codeFromTotp)];
                    case 1:
                        _a.qrCodeImageSource = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var encodedIssuer, secretKey, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setupMessage = null;
                        encodedIssuer = encodeURI(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.issuer));
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].setupTOTP !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        this.loading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].setupTOTP(this.user)];
                    case 2:
                        secretKey = _a.sent();
                        logger.debug('secret key', secretKey);
                        this.code = this.buildOtpAuthPath(this.user, encodedIssuer, secretKey);
                        this.generateQRCode(this.code);
                        return [3 /*break*/, 5];
                    case 3:
                        error_2 = _a.sent();
                        Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error_2);
                        logger.debug(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_SETUP_FAILURE), error_2);
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.verifyTotpToken = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            event.preventDefault();
                        }
                        if (!this.qrCodeInput) {
                            logger.debug('No TOTP Code provided');
                            return [2 /*return*/];
                        }
                        user = this.user;
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyTotpToken !== 'function' || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].setPreferredMFA !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyTotpToken(user, this.qrCodeInput)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].setPreferredMFA(user, _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].TOTP)];
                    case 3:
                        _a.sent();
                        this.setupMessage = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_SUCCESS_MESSAGE);
                        logger.debug(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_SUCCESS_MESSAGE));
                        return [4 /*yield*/, this.onTOTPEvent(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["S"], _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["i"], user)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        this.setupMessage = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_SETUP_FAILURE);
                        logger.error(error_3);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // TODO add Toast component to the Top of the form section
    class_1.prototype.render = function () {
        var _this = this;
        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_SUBMIT_BUTTON_TEXT), handleSubmit: function (event) { return _this.verifyTotpToken(event); }, loading: this.loading }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "totp-setup" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.qrCodeImageSource, alt: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].QR_CODE_ALT) }), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-field", { label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].TOTP_LABEL), inputProps: this.inputProps, fieldId: "totpCode", name: "totpCode", handleInputChange: function (event) { return _this.handleTotpInputChange(event); } }))));
    };
    return class_1;
}());
AmplifyTOTPSetup.style = amplifyTotpSetupCss;



/***/ }),

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-helpers-2fada98e.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-helpers-2fada98e.js ***!
  \***************************************************************************************/
/*! exports provided: c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handleSignIn; });
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-01ecf5f9.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/helpers-01ecf5f9.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["Logger"]('auth-helpers');
function checkContact(user, handleAuthStateChange) {
    return __awaiter(this, void 0, void 0, function () {
        var data, newUser, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].verifiedContact !== 'function') {
                        throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_3__["N"]);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].verifiedContact(user)];
                case 2:
                    data = _a.sent();
                    if (!Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(data.verified) || Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(data.unverified)) {
                        handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].SignedIn, user);
                    }
                    else {
                        newUser = Object.assign(user, data);
                        handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].VerifyContact, newUser);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_4__["a"])(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var handleSignIn = function (username, password, handleAuthStateChange) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].signIn !== 'function') {
                    throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_3__["N"]);
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 9, , 10]);
                return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].signIn(username, password)];
            case 2:
                user = _a.sent();
                logger.debug(user);
                if (!(user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].SMSMFA || user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].SoftwareTokenMFA)) return [3 /*break*/, 3];
                logger.debug('confirm user with ' + user.challengeName);
                handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].ConfirmSignIn, user);
                return [3 /*break*/, 8];
            case 3:
                if (!(user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].NewPasswordRequired)) return [3 /*break*/, 4];
                logger.debug('require new password', user.challengeParam);
                handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].ResetPassword, user);
                return [3 /*break*/, 8];
            case 4:
                if (!(user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].MFASetup)) return [3 /*break*/, 5];
                logger.debug('TOTP setup', user.challengeParam);
                handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].TOTPSetup, user);
                return [3 /*break*/, 8];
            case 5:
                if (!(user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].CustomChallenge &&
                    user.challengeParam &&
                    user.challengeParam.trigger === 'true')) return [3 /*break*/, 6];
                logger.debug('custom challenge', user.challengeParam);
                handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].CustomConfirmSignIn, user);
                return [3 /*break*/, 8];
            case 6: return [4 /*yield*/, checkContact(user, handleAuthStateChange)];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8: return [3 /*break*/, 10];
            case 9:
                error_2 = _a.sent();
                Object(_helpers_01ecf5f9_js__WEBPACK_IMPORTED_MODULE_4__["a"])(error_2);
                if (error_2.code === 'UserNotConfirmedException') {
                    logger.debug('the user is not confirmed');
                    handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].ConfirmSignUp, { username: username });
                }
                else if (error_2.code === 'PasswordResetRequiredException') {
                    logger.debug('the user requires a new password');
                    handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].ForgotPassword, { username: username });
                }
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); };



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LXJhZGlvLWJ1dHRvbl8yLmVudHJ5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGF3cy1hbXBsaWZ5L3VpLWNvbXBvbmVudHMvZGlzdC9lc20tZXM1L2F1dGgtaGVscGVycy0yZmFkYTk4ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUMrRDtBQUNkO0FBQ1M7QUFDakI7QUFDc0I7QUFDb0M7QUFDRztBQUN2QztBQUNuQztBQUM1QixtQ0FBbUMseUNBQXlDLGNBQWMsY0FBYyxXQUFXLGFBQWEsaUNBQWlDLCtCQUErQixvQkFBb0Isa0JBQWtCO0FBQ3RPO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFDLFVBQVUsd0JBQXdCLEVBQUUsNERBQUMseUJBQXlCLHNMQUFzTCxxQkFBcUIsNERBQUMsbUJBQW1CLHdCQUF3QjtBQUN0VTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFvRCxXQUFXLEVBQUU7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEtBQUs7QUFDckIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsS0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMkJBQTJCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNCQUFzQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxrQkFBa0IsbUJBQW1CLGdCQUFnQixhQUFhLFlBQVk7QUFDckgsaUJBQWlCLHdEQUFNO0FBQ3ZCO0FBQ0E7QUFDQSxRQUFRLDREQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxzREFBNEI7QUFDakU7QUFDQSwwQkFBMEIsMkRBQVk7QUFDdEM7QUFDQSxzQkFBc0IsMkRBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx3REFBVSxhQUFhLHdEQUFPO0FBQ3RFLDZDQUE2QyxtRUFBWTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4REFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHNEQUFJO0FBQ3RELDZCQUE2QixzREFBSSxXQUFXLHNEQUFJO0FBQ2hELDRDQUE0Qyx3REFBb0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxzREFBSTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhEQUFxQjtBQUM3QyxxQ0FBcUMsc0RBQUksS0FBSywyREFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzREFBSSxXQUFXLHNEQUFJLDBDQUEwQyxzREFBSTtBQUM5Riw0Q0FBNEMsd0RBQW9CO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHNEQUFJO0FBQ2pEO0FBQ0E7QUFDQSw2Q0FBNkMsc0RBQUksdUJBQXVCLHlEQUFTO0FBQ2pGO0FBQ0E7QUFDQSw0Q0FBNEMsc0RBQUksS0FBSywyREFBWTtBQUNqRSxxQ0FBcUMsc0RBQUksS0FBSywyREFBWTtBQUMxRCw4REFBOEQsd0RBQVUsRUFBRSx3REFBTztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHNEQUFJLEtBQUssMkRBQVk7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFDLDBCQUEwQixhQUFhLHNEQUFJLHlDQUF5QyxzREFBSSxLQUFLLDJEQUFZLDJEQUEyRCxxQ0FBcUMsRUFBRSx5QkFBeUIsRUFBRSw0REFBQyxTQUFTLHNCQUFzQixFQUFFLDREQUFDLFNBQVMsbUNBQW1DLHNEQUFJLEtBQUssMkRBQVksZUFBZSxHQUFHLDREQUFDLHdCQUF3QixRQUFRLHNEQUFJLEtBQUssMkRBQVksdUhBQXVILDJDQUEyQyxFQUFFLEVBQUU7QUFDemtCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDOEY7Ozs7Ozs7Ozs7Ozs7QUNqakc5RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsU0FBSSxJQUFJLFNBQUk7QUFDL0IsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDb0Q7QUFDMEI7QUFDckM7QUFDMkI7QUFDRDtBQUNuRSxpQkFBaUIsd0RBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNEQUFJLFdBQVcsc0RBQUk7QUFDNUMsd0NBQXdDLHdEQUFvQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxzREFBSTtBQUM3QztBQUNBO0FBQ0EseUJBQXlCLGlFQUFPLG1CQUFtQixpRUFBTztBQUMxRCw4Q0FBOEMseURBQVM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHlEQUFTO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhEQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EseUVBQXlFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFJLFdBQVcsc0RBQUk7QUFDeEMsb0NBQW9DLHdEQUFvQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxzREFBSTtBQUN6QztBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMseURBQWEsa0NBQWtDLHlEQUFhO0FBQ3pHO0FBQ0Esc0NBQXNDLHlEQUFTO0FBQy9DO0FBQ0E7QUFDQSw2Q0FBNkMseURBQWE7QUFDMUQ7QUFDQSxzQ0FBc0MseURBQVM7QUFDL0M7QUFDQTtBQUNBLDZDQUE2Qyx5REFBYTtBQUMxRDtBQUNBLHNDQUFzQyx5REFBUztBQUMvQztBQUNBO0FBQ0EsNkNBQTZDLHlEQUFhO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx5REFBUztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhEQUFxQjtBQUNyQztBQUNBO0FBQ0EsMENBQTBDLHlEQUFTLGlCQUFpQixxQkFBcUI7QUFDekY7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHlEQUFTLGtCQUFrQixxQkFBcUI7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQzZDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGggfSBmcm9tICcuL2luZGV4LTM5OTY5Nzg1LmpzJztcbmltcG9ydCB7IExvZ2dlciwgSTE4biB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9jb3JlJztcbmltcG9ydCB7IE0gYXMgTWZhT3B0aW9uIH0gZnJvbSAnLi9hdXRoLXR5cGVzLTc4ZGYzMDRlLmpzJztcbmltcG9ydCB7IEF1dGggfSBmcm9tICdAYXdzLWFtcGxpZnkvYXV0aCc7XG5pbXBvcnQgeyBUIGFzIFRyYW5zbGF0aW9ucyB9IGZyb20gJy4vVHJhbnNsYXRpb25zLTM5MmFjYjliLmpzJztcbmltcG9ydCB7IFMgYXMgU0VUVVBfVE9UUCwgaSBhcyBTVUNDRVNTLCBOIGFzIE5PX0FVVEhfTU9EVUxFX0ZPVU5EIH0gZnJvbSAnLi9jb25zdGFudHMtZDFhYmU3ZGUuanMnO1xuaW1wb3J0IHsgZCBhcyBkaXNwYXRjaEF1dGhTdGF0ZUNoYW5nZUV2ZW50LCBhIGFzIGRpc3BhdGNoVG9hc3RIdWJFdmVudCB9IGZyb20gJy4vaGVscGVycy0wMWVjZjVmOS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNoZWNrQ29udGFjdCB9IGZyb20gJy4vYXV0aC1oZWxwZXJzLTJmYWRhOThlLmpzJztcbmltcG9ydCBidWZmZXIgZnJvbSAnYnVmZmVyJztcbnZhciBhbXBsaWZ5UmFkaW9CdXR0b25Dc3MgPSBcIjpob3N0ey0tZm9udC1mYW1pbHk6dmFyKC0tYW1wbGlmeS1mb250LWZhbWlseSl9LnJhZGlvLWJ1dHRvbntkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7cGFkZGluZzoxNnB4O2ZvbnQtc2l6ZTp2YXIoLS1hbXBsaWZ5LXRleHQtc20pO2ZvbnQtZmFtaWx5OnZhcigtLWZvbnQtZmFtaWx5KX0ucmFkaW8tYnV0dG9uIGlucHV0e21hcmdpbi1yaWdodDoxMnB4fVwiO1xudmFyIEFtcGxpZnlSYWRpb0J1dHRvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbXBsaWZ5UmFkaW9CdXR0b24oaG9zdFJlZikge1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogKE9wdGlvbmFsKSBUaGUgcGxhY2Vob2xkZXIgZm9yIHRoZSBpbnB1dCBlbGVtZW50LiAgVXNpbmcgaGludHMgaXMgcmVjb21tZW5kZWQsIGJ1dCBwbGFjZWhvbGRlcnMgY2FuIGFsc28gYmUgdXNlZnVsIHRvIGNvbnZleSBpbmZvcm1hdGlvbiB0byB1c2Vycy4gKi9cbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgICAvKiogSWYgYHRydWVgLCB0aGUgcmFkaW8gYnV0dG9uIGlzIHNlbGVjdGVkLiAqL1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqIElmIGB0cnVlYCwgdGhlIGNoZWNrYm94IGlzIGRpc2FibGVkICovXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgQW1wbGlmeVJhZGlvQnV0dG9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoaChcInNwYW5cIiwgeyBjbGFzczogXCJyYWRpby1idXR0b25cIiB9LCBoKFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7IHR5cGU6IFwicmFkaW9cIiwgbmFtZTogdGhpcy5uYW1lLCB2YWx1ZTogdGhpcy52YWx1ZSwgb25JbnB1dDogdGhpcy5oYW5kbGVJbnB1dENoYW5nZSwgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsIGlkOiB0aGlzLmZpZWxkSWQsIGNoZWNrZWQ6IHRoaXMuY2hlY2tlZCwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfSwgdGhpcy5pbnB1dFByb3BzKSksIGgoXCJhbXBsaWZ5LWxhYmVsXCIsIHsgaHRtbEZvcjogdGhpcy5maWVsZElkIH0sIHRoaXMubGFiZWwpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gQW1wbGlmeVJhZGlvQnV0dG9uO1xufSgpKTtcbkFtcGxpZnlSYWRpb0J1dHRvbi5zdHlsZSA9IGFtcGxpZnlSYWRpb0J1dHRvbkNzcztcbi8vIGNhbi1wcm9taXNlIGhhcyBhIGNyYXNoIGluIHNvbWUgdmVyc2lvbnMgb2YgcmVhY3QgbmF0aXZlIHRoYXQgZG9udCBoYXZlXG4vLyBzdGFuZGFyZCBnbG9iYWwgb2JqZWN0c1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NvbGRhaXIvbm9kZS1xcmNvZGUvaXNzdWVzLzE1N1xudmFyIGNhblByb21pc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBQcm9taXNlID09PSAnZnVuY3Rpb24nICYmIFByb21pc2UucHJvdG90eXBlICYmIFByb21pc2UucHJvdG90eXBlLnRoZW47XG59O1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG52YXIgaXNhcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCgpIHtcbiAgICAvLyBDYW4gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGJlIGF1Z21lbnRlZD9cbiAgICB0cnkge1xuICAgICAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gICAgICAgIGFyci5fX3Byb3RvX18gPSB7IF9fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDI7IH0gfTtcbiAgICAgICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDI7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IHR5cGVkQXJyYXlTdXBwb3J0KCk7XG52YXIgS19NQVhfTEVOR1RIID0gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmY7XG5mdW5jdGlvbiBCdWZmZXIoYXJnLCBvZmZzZXQsIGxlbmd0aCkge1xuICAgIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgICAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIG9mZnNldCwgbGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBhbGxvY1Vuc2FmZSh0aGlzLCBhcmcpO1xuICAgIH1cbiAgICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIG9mZnNldCwgbGVuZ3RoKTtcbn1cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIEJ1ZmZlci5wcm90b3R5cGUuX19wcm90b19fID0gVWludDhBcnJheS5wcm90b3R5cGU7XG4gICAgQnVmZmVyLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXk7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIsIFN5bWJvbC5zcGVjaWVzLCB7XG4gICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNoZWNrZWQobGVuZ3RoKSB7XG4gICAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwgS19NQVhfTEVOR1RIYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gICAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gICAgaWYgKGxlbmd0aCA+PSBLX01BWF9MRU5HVEgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAnc2l6ZTogMHgnICsgS19NQVhfTEVOR1RILnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlbmd0aCB8IDA7XG59XG5mdW5jdGlvbiBpc25hbih2YWwpIHtcbiAgICByZXR1cm4gdmFsICE9PSB2YWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKSB7XG4gICAgdmFyIGJ1ZjtcbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAgICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbiAgICAgICAgYnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgICAgIGJ1ZiA9IHRoYXQ7XG4gICAgICAgIGlmIChidWYgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGJ1ZiA9IG5ldyBCdWZmZXIobGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBidWYubGVuZ3RoID0gbGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xufVxuZnVuY3Rpb24gYWxsb2NVbnNhZmUodGhhdCwgc2l6ZSkge1xuICAgIHZhciBidWYgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApO1xuICAgIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgIGJ1ZltpXSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJ1Zjtcbn1cbmZ1bmN0aW9uIGZyb21TdHJpbmcodGhhdCwgc3RyaW5nKSB7XG4gICAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nKSB8IDA7XG4gICAgdmFyIGJ1ZiA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpO1xuICAgIHZhciBhY3R1YWwgPSBidWYud3JpdGUoc3RyaW5nKTtcbiAgICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAgICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgICAgICBidWYgPSBidWYuc2xpY2UoMCwgYWN0dWFsKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1Zjtcbn1cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwO1xuICAgIHZhciBidWYgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGJ1ZltpXSA9IGFycmF5W2ldICYgMjU1O1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xufVxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyKHRoYXQsIGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJyk7XG4gICAgfVxuICAgIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJyk7XG4gICAgfVxuICAgIHZhciBidWY7XG4gICAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICAgIH1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgICAgIGJ1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgICAgICBidWYgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGJ1Zik7XG4gICAgfVxuICAgIHJldHVybiBidWY7XG59XG5mdW5jdGlvbiBmcm9tT2JqZWN0KHRoYXQsIG9iaikge1xuICAgIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgICAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDA7XG4gICAgICAgIHZhciBidWYgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKTtcbiAgICAgICAgaWYgKGJ1Zi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBidWY7XG4gICAgICAgIH1cbiAgICAgICAgb2JqLmNvcHkoYnVmLCAwLCAwLCBsZW4pO1xuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICBpZiAob2JqKSB7XG4gICAgICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIEFycmF5LmlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmouZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpO1xufVxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMoc3RyaW5nLCB1bml0cykge1xuICAgIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHk7XG4gICAgdmFyIGNvZGVQb2ludDtcbiAgICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcbiAgICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGw7XG4gICAgdmFyIGJ5dGVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgICAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAgICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgICAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSlcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKTtcbiAgICAgICAgICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKVxuICAgICAgICAgICAgICAgIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRCk7XG4gICAgICAgIH1cbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGw7XG4gICAgICAgIC8vIGVuY29kZSB1dGY4XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICAgICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBieXRlcy5wdXNoKGNvZGVQb2ludCA+PiAweDYgfCAweEMwLCBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBieXRlcy5wdXNoKGNvZGVQb2ludCA+PiAweEMgfCAweEUwLCBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBieXRlcy5wdXNoKGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCwgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLCBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzO1xufVxuZnVuY3Rpb24gYnl0ZUxlbmd0aChzdHJpbmcpIHtcbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5sZW5ndGg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgICAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGg7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgICBzdHJpbmcgPSAnJyArIHN0cmluZztcbiAgICB9XG4gICAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGg7XG4gICAgaWYgKGxlbiA9PT0gMClcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoO1xufVxuZnVuY3Rpb24gYmxpdEJ1ZmZlcihzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSlcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV07XG4gICAgfVxuICAgIHJldHVybiBpO1xufVxuZnVuY3Rpb24gdXRmOFdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICAgIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpO1xufVxuZnVuY3Rpb24gZnJvbSh0aGF0LCB2YWx1ZSwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHRoYXQsIHZhbHVlLCBvZmZzZXQsIGxlbmd0aCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBmcm9tU3RyaW5nKHRoYXQsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21PYmplY3QodGhhdCwgdmFsdWUpO1xufVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICAgIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgICAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gICAgfVxuICAgIGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdKVxuICAgIH1cbiAgICBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8IDA7XG4gICAgICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBsZW5ndGggfCAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldDtcbiAgICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKVxuICAgICAgICBsZW5ndGggPSByZW1haW5pbmc7XG4gICAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJyk7XG4gICAgfVxuICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCk7XG59O1xuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgbGVuID0gdGhpcy5sZW5ndGg7XG4gICAgc3RhcnQgPSB+fnN0YXJ0O1xuICAgIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmQ7XG4gICAgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgICBzdGFydCArPSBsZW47XG4gICAgICAgIGlmIChzdGFydCA8IDApXG4gICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgICAgIHN0YXJ0ID0gbGVuO1xuICAgIH1cbiAgICBpZiAoZW5kIDwgMCkge1xuICAgICAgICBlbmQgKz0gbGVuO1xuICAgICAgICBpZiAoZW5kIDwgMClcbiAgICAgICAgICAgIGVuZCA9IDA7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgICAgICBlbmQgPSBsZW47XG4gICAgfVxuICAgIGlmIChlbmQgPCBzdGFydClcbiAgICAgICAgZW5kID0gc3RhcnQ7XG4gICAgdmFyIG5ld0J1ZjtcbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAgICAgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKTtcbiAgICAgICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgICAgICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydDtcbiAgICAgICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgKytpKSB7XG4gICAgICAgICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0J1Zjtcbn07XG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5KHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoIXN0YXJ0KVxuICAgICAgICBzdGFydCA9IDA7XG4gICAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKVxuICAgICAgICBlbmQgPSB0aGlzLmxlbmd0aDtcbiAgICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aClcbiAgICAgICAgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoO1xuICAgIGlmICghdGFyZ2V0U3RhcnQpXG4gICAgICAgIHRhcmdldFN0YXJ0ID0gMDtcbiAgICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydClcbiAgICAgICAgZW5kID0gc3RhcnQ7XG4gICAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gICAgaWYgKGVuZCA9PT0gc3RhcnQpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm4gMDtcbiAgICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gICAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpO1xuICAgIH1cbiAgICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKVxuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpO1xuICAgIGlmIChlbmQgPCAwKVxuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKTtcbiAgICAvLyBBcmUgd2Ugb29iP1xuICAgIGlmIChlbmQgPiB0aGlzLmxlbmd0aClcbiAgICAgICAgZW5kID0gdGhpcy5sZW5ndGg7XG4gICAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0O1xuICAgIH1cbiAgICB2YXIgbGVuID0gZW5kIC0gc3RhcnQ7XG4gICAgdmFyIGk7XG4gICAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgICAgIC8vIGRlc2NlbmRpbmcgY29weSBmcm9tIGVuZFxuICAgICAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbCh0YXJnZXQsIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSwgdGFyZ2V0U3RhcnQpO1xuICAgIH1cbiAgICByZXR1cm4gbGVuO1xufTtcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwodmFsLCBzdGFydCwgZW5kKSB7XG4gICAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHN0YXJ0ID0gMDtcbiAgICAgICAgICAgIGVuZCA9IHRoaXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBlbmQgPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdmFyIGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgICAgICAgICAgdmFsID0gY29kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICB2YWwgPSB2YWwgJiAyNTU7XG4gICAgfVxuICAgIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICAgIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4Jyk7XG4gICAgfVxuICAgIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0YXJ0ID0gc3RhcnQgPj4+IDA7XG4gICAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMDtcbiAgICBpZiAoIXZhbClcbiAgICAgICAgdmFsID0gMDtcbiAgICB2YXIgaTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgICAgICAgdGhpc1tpXSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgICAgICAgID8gdmFsXG4gICAgICAgICAgICA6IG5ldyBCdWZmZXIodmFsKTtcbiAgICAgICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgICAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufTtcbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQobGlzdCwgbGVuZ3RoKSB7XG4gICAgaWYgKCFpc2FycmF5KGxpc3QpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpO1xuICAgIH1cbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihudWxsLCAwKTtcbiAgICB9XG4gICAgdmFyIGk7XG4gICAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxlbmd0aCA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGJ1ZmZlciA9IGFsbG9jVW5zYWZlKG51bGwsIGxlbmd0aCk7XG4gICAgdmFyIHBvcyA9IDA7XG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGJ1ZiA9IGxpc3RbaV07XG4gICAgICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpO1xuICAgICAgICB9XG4gICAgICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKTtcbiAgICAgICAgcG9zICs9IGJ1Zi5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXI7XG59O1xuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoO1xuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlO1xuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIoYikge1xuICAgIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpO1xufTtcbnZhciBhbGxvYyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBCdWZmZXIoc2l6ZSk7XG4gICAgYnVmZmVyLmZpbGwoMCk7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbn07XG52YXIgZnJvbV8xID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihkYXRhKTtcbn07XG52YXIgdHlwZWRhcnJheUJ1ZmZlciA9IHtcbiAgICBhbGxvYzogYWxsb2MsXG4gICAgZnJvbTogZnJvbV8xXG59O1xudmFyIHRvU0pJU0Z1bmN0aW9uO1xudmFyIENPREVXT1JEU19DT1VOVCA9IFtcbiAgICAwLFxuICAgIDI2LCA0NCwgNzAsIDEwMCwgMTM0LCAxNzIsIDE5NiwgMjQyLCAyOTIsIDM0NixcbiAgICA0MDQsIDQ2NiwgNTMyLCA1ODEsIDY1NSwgNzMzLCA4MTUsIDkwMSwgOTkxLCAxMDg1LFxuICAgIDExNTYsIDEyNTgsIDEzNjQsIDE0NzQsIDE1ODgsIDE3MDYsIDE4MjgsIDE5MjEsIDIwNTEsIDIxODUsXG4gICAgMjMyMywgMjQ2NSwgMjYxMSwgMjc2MSwgMjg3NiwgMzAzNCwgMzE5NiwgMzM2MiwgMzUzMiwgMzcwNlxuXTtcbi8qKlxuICogUmV0dXJucyB0aGUgUVIgQ29kZSBzaXplIGZvciB0aGUgc3BlY2lmaWVkIHZlcnNpb25cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgc2l6ZSBvZiBRUiBjb2RlXG4gKi9cbnZhciBnZXRTeW1ib2xTaXplID0gZnVuY3Rpb24gZ2V0U3ltYm9sU2l6ZSh2ZXJzaW9uKSB7XG4gICAgaWYgKCF2ZXJzaW9uKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1widmVyc2lvblwiIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICAgIGlmICh2ZXJzaW9uIDwgMSB8fCB2ZXJzaW9uID4gNDApXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignXCJ2ZXJzaW9uXCIgc2hvdWxkIGJlIGluIHJhbmdlIGZyb20gMSB0byA0MCcpO1xuICAgIHJldHVybiB2ZXJzaW9uICogNCArIDE3O1xufTtcbi8qKlxuICogUmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIGNvZGV3b3JkcyB1c2VkIHRvIHN0b3JlIGRhdGEgYW5kIEVDIGluZm9ybWF0aW9uLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICBEYXRhIGxlbmd0aCBpbiBiaXRzXG4gKi9cbnZhciBnZXRTeW1ib2xUb3RhbENvZGV3b3JkcyA9IGZ1bmN0aW9uIGdldFN5bWJvbFRvdGFsQ29kZXdvcmRzKHZlcnNpb24pIHtcbiAgICByZXR1cm4gQ09ERVdPUkRTX0NPVU5UW3ZlcnNpb25dO1xufTtcbi8qKlxuICogRW5jb2RlIGRhdGEgd2l0aCBCb3NlLUNoYXVkaHVyaS1Ib2NxdWVuZ2hlbVxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gZGF0YSBWYWx1ZSB0byBlbmNvZGVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICBFbmNvZGVkIHZhbHVlXG4gKi9cbnZhciBnZXRCQ0hEaWdpdCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIGRpZ2l0ID0gMDtcbiAgICB3aGlsZSAoZGF0YSAhPT0gMCkge1xuICAgICAgICBkaWdpdCsrO1xuICAgICAgICBkYXRhID4+Pj0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGRpZ2l0O1xufTtcbnZhciBzZXRUb1NKSVNGdW5jdGlvbiA9IGZ1bmN0aW9uIHNldFRvU0pJU0Z1bmN0aW9uKGYpIHtcbiAgICBpZiAodHlwZW9mIGYgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcInRvU0pJU0Z1bmNcIiBpcyBub3QgYSB2YWxpZCBmdW5jdGlvbi4nKTtcbiAgICB9XG4gICAgdG9TSklTRnVuY3Rpb24gPSBmO1xufTtcbnZhciBpc0thbmppTW9kZUVuYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0b1NKSVNGdW5jdGlvbiAhPT0gJ3VuZGVmaW5lZCc7XG59O1xudmFyIHRvU0pJUyA9IGZ1bmN0aW9uIHRvU0pJUyhrYW5qaSkge1xuICAgIHJldHVybiB0b1NKSVNGdW5jdGlvbihrYW5qaSk7XG59O1xudmFyIHV0aWxzID0ge1xuICAgIGdldFN5bWJvbFNpemU6IGdldFN5bWJvbFNpemUsXG4gICAgZ2V0U3ltYm9sVG90YWxDb2Rld29yZHM6IGdldFN5bWJvbFRvdGFsQ29kZXdvcmRzLFxuICAgIGdldEJDSERpZ2l0OiBnZXRCQ0hEaWdpdCxcbiAgICBzZXRUb1NKSVNGdW5jdGlvbjogc2V0VG9TSklTRnVuY3Rpb24sXG4gICAgaXNLYW5qaU1vZGVFbmFibGVkOiBpc0thbmppTW9kZUVuYWJsZWQsXG4gICAgdG9TSklTOiB0b1NKSVNcbn07XG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgYmFzZWRpciwgbW9kdWxlKSB7XG4gICAgcmV0dXJuIG1vZHVsZSA9IHtcbiAgICAgICAgcGF0aDogYmFzZWRpcixcbiAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgIHJlcXVpcmU6IGZ1bmN0aW9uIChwYXRoLCBiYXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tbW9uanNSZXF1aXJlKCk7XG4gICAgICAgIH1cbiAgICB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5mdW5jdGlvbiBjb21tb25qc1JlcXVpcmUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEeW5hbWljIHJlcXVpcmVzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBieSBAcm9sbHVwL3BsdWdpbi1jb21tb25qcycpO1xufVxudmFyIGVycm9yQ29ycmVjdGlvbkxldmVsID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuICAgIGV4cG9ydHMuTCA9IHsgYml0OiAxIH07XG4gICAgZXhwb3J0cy5NID0geyBiaXQ6IDAgfTtcbiAgICBleHBvcnRzLlEgPSB7IGJpdDogMyB9O1xuICAgIGV4cG9ydHMuSCA9IHsgYml0OiAyIH07XG4gICAgZnVuY3Rpb24gZnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtIGlzIG5vdCBhIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsY1N0ciA9IHN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBzd2l0Y2ggKGxjU3RyKSB7XG4gICAgICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuTDtcbiAgICAgICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5NO1xuICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICBjYXNlICdxdWFydGlsZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuUTtcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuSDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIEVDIExldmVsOiAnICsgc3RyaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnRzLmlzVmFsaWQgPSBmdW5jdGlvbiBpc1ZhbGlkKGxldmVsKSB7XG4gICAgICAgIHJldHVybiBsZXZlbCAmJiB0eXBlb2YgbGV2ZWwuYml0ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgbGV2ZWwuYml0ID49IDAgJiYgbGV2ZWwuYml0IDwgNDtcbiAgICB9O1xuICAgIGV4cG9ydHMuZnJvbSA9IGZ1bmN0aW9uIGZyb20odmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoZXhwb3J0cy5pc1ZhbGlkKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbVN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xufSk7XG5mdW5jdGlvbiBCaXRCdWZmZXIoKSB7XG4gICAgdGhpcy5idWZmZXIgPSBbXTtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG59XG5CaXRCdWZmZXIucHJvdG90eXBlID0ge1xuICAgIGdldDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBidWZJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyA4KTtcbiAgICAgICAgcmV0dXJuICgodGhpcy5idWZmZXJbYnVmSW5kZXhdID4+PiAoNyAtIGluZGV4ICUgOCkpICYgMSkgPT09IDE7XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uIChudW0sIGxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnB1dEJpdCgoKG51bSA+Pj4gKGxlbmd0aCAtIGkgLSAxKSkgJiAxKSA9PT0gMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldExlbmd0aEluQml0czogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gICAgfSxcbiAgICBwdXRCaXQ6IGZ1bmN0aW9uIChiaXQpIHtcbiAgICAgICAgdmFyIGJ1ZkluZGV4ID0gTWF0aC5mbG9vcih0aGlzLmxlbmd0aCAvIDgpO1xuICAgICAgICBpZiAodGhpcy5idWZmZXIubGVuZ3RoIDw9IGJ1ZkluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlci5wdXNoKDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiaXQpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyW2J1ZkluZGV4XSB8PSAoMHg4MCA+Pj4gKHRoaXMubGVuZ3RoICUgOCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGVuZ3RoKys7XG4gICAgfVxufTtcbnZhciBiaXRCdWZmZXIgPSBCaXRCdWZmZXI7XG4vKipcbiAqIEhlbHBlciBjbGFzcyB0byBoYW5kbGUgUVIgQ29kZSBzeW1ib2wgbW9kdWxlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzaXplIFN5bWJvbCBzaXplXG4gKi9cbmZ1bmN0aW9uIEJpdE1hdHJpeChzaXplKSB7XG4gICAgaWYgKCFzaXplIHx8IHNpemUgPCAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQml0TWF0cml4IHNpemUgbXVzdCBiZSBkZWZpbmVkIGFuZCBncmVhdGVyIHRoYW4gMCcpO1xuICAgIH1cbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMuZGF0YSA9IHR5cGVkYXJyYXlCdWZmZXIuYWxsb2Moc2l6ZSAqIHNpemUpO1xuICAgIHRoaXMucmVzZXJ2ZWRCaXQgPSB0eXBlZGFycmF5QnVmZmVyLmFsbG9jKHNpemUgKiBzaXplKTtcbn1cbi8qKlxuICogU2V0IGJpdCB2YWx1ZSBhdCBzcGVjaWZpZWQgbG9jYXRpb25cbiAqIElmIHJlc2VydmVkIGZsYWcgaXMgc2V0LCB0aGlzIGJpdCB3aWxsIGJlIGlnbm9yZWQgZHVyaW5nIG1hc2tpbmcgcHJvY2Vzc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSAgcm93XG4gKiBAcGFyYW0ge051bWJlcn0gIGNvbFxuICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICogQHBhcmFtIHtCb29sZWFufSByZXNlcnZlZFxuICovXG5CaXRNYXRyaXgucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChyb3csIGNvbCwgdmFsdWUsIHJlc2VydmVkKSB7XG4gICAgdmFyIGluZGV4ID0gcm93ICogdGhpcy5zaXplICsgY29sO1xuICAgIHRoaXMuZGF0YVtpbmRleF0gPSB2YWx1ZTtcbiAgICBpZiAocmVzZXJ2ZWQpXG4gICAgICAgIHRoaXMucmVzZXJ2ZWRCaXRbaW5kZXhdID0gdHJ1ZTtcbn07XG4vKipcbiAqIFJldHVybnMgYml0IHZhbHVlIGF0IHNwZWNpZmllZCBsb2NhdGlvblxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gIHJvd1xuICogQHBhcmFtICB7TnVtYmVyfSAgY29sXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5CaXRNYXRyaXgucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChyb3csIGNvbCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFbcm93ICogdGhpcy5zaXplICsgY29sXTtcbn07XG4vKipcbiAqIEFwcGxpZXMgeG9yIG9wZXJhdG9yIGF0IHNwZWNpZmllZCBsb2NhdGlvblxuICogKHVzZWQgZHVyaW5nIG1hc2tpbmcgcHJvY2VzcylcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gIHJvd1xuICogQHBhcmFtIHtOdW1iZXJ9ICBjb2xcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAqL1xuQml0TWF0cml4LnByb3RvdHlwZS54b3IgPSBmdW5jdGlvbiAocm93LCBjb2wsIHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhW3JvdyAqIHRoaXMuc2l6ZSArIGNvbF0gXj0gdmFsdWU7XG59O1xuLyoqXG4gKiBDaGVjayBpZiBiaXQgYXQgc3BlY2lmaWVkIGxvY2F0aW9uIGlzIHJlc2VydmVkXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9ICAgcm93XG4gKiBAcGFyYW0ge051bWJlcn0gICBjb2xcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbkJpdE1hdHJpeC5wcm90b3R5cGUuaXNSZXNlcnZlZCA9IGZ1bmN0aW9uIChyb3csIGNvbCkge1xuICAgIHJldHVybiB0aGlzLnJlc2VydmVkQml0W3JvdyAqIHRoaXMuc2l6ZSArIGNvbF07XG59O1xudmFyIGJpdE1hdHJpeCA9IEJpdE1hdHJpeDtcbnZhciBhbGlnbm1lbnRQYXR0ZXJuID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8qKlxuICAgICAqIEFsaWdubWVudCBwYXR0ZXJuIGFyZSBmaXhlZCByZWZlcmVuY2UgcGF0dGVybiBpbiBkZWZpbmVkIHBvc2l0aW9uc1xuICAgICAqIGluIGEgbWF0cml4IHN5bWJvbG9neSwgd2hpY2ggZW5hYmxlcyB0aGUgZGVjb2RlIHNvZnR3YXJlIHRvIHJlLXN5bmNocm9uaXNlXG4gICAgICogdGhlIGNvb3JkaW5hdGUgbWFwcGluZyBvZiB0aGUgaW1hZ2UgbW9kdWxlcyBpbiB0aGUgZXZlbnQgb2YgbW9kZXJhdGUgYW1vdW50c1xuICAgICAqIG9mIGRpc3RvcnRpb24gb2YgdGhlIGltYWdlLlxuICAgICAqXG4gICAgICogQWxpZ25tZW50IHBhdHRlcm5zIGFyZSBwcmVzZW50IG9ubHkgaW4gUVIgQ29kZSBzeW1ib2xzIG9mIHZlcnNpb24gMiBvciBsYXJnZXJcbiAgICAgKiBhbmQgdGhlaXIgbnVtYmVyIGRlcGVuZHMgb24gdGhlIHN5bWJvbCB2ZXJzaW9uLlxuICAgICAqL1xuICAgIHZhciBnZXRTeW1ib2xTaXplID0gdXRpbHMuZ2V0U3ltYm9sU2l6ZTtcbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhlIHJvdy9jb2x1bW4gY29vcmRpbmF0ZXMgb2YgdGhlIGNlbnRlciBtb2R1bGUgb2YgZWFjaCBhbGlnbm1lbnQgcGF0dGVyblxuICAgICAqIGZvciB0aGUgc3BlY2lmaWVkIFFSIENvZGUgdmVyc2lvbi5cbiAgICAgKlxuICAgICAqIFRoZSBhbGlnbm1lbnQgcGF0dGVybnMgYXJlIHBvc2l0aW9uZWQgc3ltbWV0cmljYWxseSBvbiBlaXRoZXIgc2lkZSBvZiB0aGUgZGlhZ29uYWxcbiAgICAgKiBydW5uaW5nIGZyb20gdGhlIHRvcCBsZWZ0IGNvcm5lciBvZiB0aGUgc3ltYm9sIHRvIHRoZSBib3R0b20gcmlnaHQgY29ybmVyLlxuICAgICAqXG4gICAgICogU2luY2UgcG9zaXRpb25zIGFyZSBzaW1tZXRyaWNhbCBvbmx5IGhhbGYgb2YgdGhlIGNvb3JkaW5hdGVzIGFyZSByZXR1cm5lZC5cbiAgICAgKiBFYWNoIGl0ZW0gb2YgdGhlIGFycmF5IHdpbGwgcmVwcmVzZW50IGluIHR1cm4gdGhlIHggYW5kIHkgY29vcmRpbmF0ZS5cbiAgICAgKiBAc2VlIHtAbGluayBnZXRQb3NpdGlvbnN9XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgIEFycmF5IG9mIGNvb3JkaW5hdGVcbiAgICAgKi9cbiAgICBleHBvcnRzLmdldFJvd0NvbENvb3JkcyA9IGZ1bmN0aW9uIGdldFJvd0NvbENvb3Jkcyh2ZXJzaW9uKSB7XG4gICAgICAgIGlmICh2ZXJzaW9uID09PSAxKVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB2YXIgcG9zQ291bnQgPSBNYXRoLmZsb29yKHZlcnNpb24gLyA3KSArIDI7XG4gICAgICAgIHZhciBzaXplID0gZ2V0U3ltYm9sU2l6ZSh2ZXJzaW9uKTtcbiAgICAgICAgdmFyIGludGVydmFscyA9IHNpemUgPT09IDE0NSA/IDI2IDogTWF0aC5jZWlsKChzaXplIC0gMTMpIC8gKDIgKiBwb3NDb3VudCAtIDIpKSAqIDI7XG4gICAgICAgIHZhciBwb3NpdGlvbnMgPSBbc2l6ZSAtIDddOyAvLyBMYXN0IGNvb3JkIGlzIGFsd2F5cyAoc2l6ZSAtIDcpXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9zQ291bnQgLSAxOyBpKyspIHtcbiAgICAgICAgICAgIHBvc2l0aW9uc1tpXSA9IHBvc2l0aW9uc1tpIC0gMV0gLSBpbnRlcnZhbHM7XG4gICAgICAgIH1cbiAgICAgICAgcG9zaXRpb25zLnB1c2goNik7IC8vIEZpcnN0IGNvb3JkIGlzIGFsd2F5cyA2XG4gICAgICAgIHJldHVybiBwb3NpdGlvbnMucmV2ZXJzZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBwb3NpdGlvbnMgb2YgZWFjaCBhbGlnbm1lbnQgcGF0dGVybi5cbiAgICAgKiBFYWNoIGFycmF5J3MgZWxlbWVudCByZXByZXNlbnQgdGhlIGNlbnRlciBwb2ludCBvZiB0aGUgcGF0dGVybiBhcyAoeCwgeSkgY29vcmRpbmF0ZXNcbiAgICAgKlxuICAgICAqIENvb3JkaW5hdGVzIGFyZSBjYWxjdWxhdGVkIGV4cGFuZGluZyB0aGUgcm93L2NvbHVtbiBjb29yZGluYXRlcyByZXR1cm5lZCBieSB7QGxpbmsgZ2V0Um93Q29sQ29vcmRzfVxuICAgICAqIGFuZCBmaWx0ZXJpbmcgb3V0IHRoZSBpdGVtcyB0aGF0IG92ZXJsYXBzIHdpdGggZmluZGVyIHBhdHRlcm5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogRm9yIGEgVmVyc2lvbiA3IHN5bWJvbCB7QGxpbmsgZ2V0Um93Q29sQ29vcmRzfSByZXR1cm5zIHZhbHVlcyA2LCAyMiBhbmQgMzguXG4gICAgICogVGhlIGFsaWdubWVudCBwYXR0ZXJucywgdGhlcmVmb3JlLCBhcmUgdG8gYmUgY2VudGVyZWQgb24gKHJvdywgY29sdW1uKVxuICAgICAqIHBvc2l0aW9ucyAoNiwyMiksICgyMiw2KSwgKDIyLDIyKSwgKDIyLDM4KSwgKDM4LDIyKSwgKDM4LDM4KS5cbiAgICAgKiBOb3RlIHRoYXQgdGhlIGNvb3JkaW5hdGVzICg2LDYpLCAoNiwzOCksICgzOCw2KSBhcmUgb2NjdXBpZWQgYnkgZmluZGVyIHBhdHRlcm5zXG4gICAgICogYW5kIGFyZSBub3QgdGhlcmVmb3JlIHVzZWQgZm9yIGFsaWdubWVudCBwYXR0ZXJucy5cbiAgICAgKlxuICAgICAqIHZhciBwb3MgPSBnZXRQb3NpdGlvbnMoNylcbiAgICAgKiAvLyBbWzYsMjJdLCBbMjIsNl0sIFsyMiwyMl0sIFsyMiwzOF0sIFszOCwyMl0sIFszOCwzOF1dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgIEFycmF5IG9mIGNvb3JkaW5hdGVzXG4gICAgICovXG4gICAgZXhwb3J0cy5nZXRQb3NpdGlvbnMgPSBmdW5jdGlvbiBnZXRQb3NpdGlvbnModmVyc2lvbikge1xuICAgICAgICB2YXIgY29vcmRzID0gW107XG4gICAgICAgIHZhciBwb3MgPSBleHBvcnRzLmdldFJvd0NvbENvb3Jkcyh2ZXJzaW9uKTtcbiAgICAgICAgdmFyIHBvc0xlbmd0aCA9IHBvcy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9zTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9zTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIGlmIHBvc2l0aW9uIGlzIG9jY3VwaWVkIGJ5IGZpbmRlciBwYXR0ZXJuc1xuICAgICAgICAgICAgICAgIGlmICgoaSA9PT0gMCAmJiBqID09PSAwKSB8fCAvLyB0b3AtbGVmdFxuICAgICAgICAgICAgICAgICAgICAoaSA9PT0gMCAmJiBqID09PSBwb3NMZW5ndGggLSAxKSB8fCAvLyBib3R0b20tbGVmdFxuICAgICAgICAgICAgICAgICAgICAoaSA9PT0gcG9zTGVuZ3RoIC0gMSAmJiBqID09PSAwKSkgeyAvLyB0b3AtcmlnaHRcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvb3Jkcy5wdXNoKFtwb3NbaV0sIHBvc1tqXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZHM7XG4gICAgfTtcbn0pO1xudmFyIGdldFN5bWJvbFNpemUkMSA9IHV0aWxzLmdldFN5bWJvbFNpemU7XG52YXIgRklOREVSX1BBVFRFUk5fU0laRSA9IDc7XG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgcG9zaXRpb25zIG9mIGVhY2ggZmluZGVyIHBhdHRlcm4uXG4gKiBFYWNoIGFycmF5J3MgZWxlbWVudCByZXByZXNlbnQgdGhlIHRvcC1sZWZ0IHBvaW50IG9mIHRoZSBwYXR0ZXJuIGFzICh4LCB5KSBjb29yZGluYXRlc1xuICpcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICBBcnJheSBvZiBjb29yZGluYXRlc1xuICovXG52YXIgZ2V0UG9zaXRpb25zID0gZnVuY3Rpb24gZ2V0UG9zaXRpb25zKHZlcnNpb24pIHtcbiAgICB2YXIgc2l6ZSA9IGdldFN5bWJvbFNpemUkMSh2ZXJzaW9uKTtcbiAgICByZXR1cm4gW1xuICAgICAgICAvLyB0b3AtbGVmdFxuICAgICAgICBbMCwgMF0sXG4gICAgICAgIC8vIHRvcC1yaWdodFxuICAgICAgICBbc2l6ZSAtIEZJTkRFUl9QQVRURVJOX1NJWkUsIDBdLFxuICAgICAgICAvLyBib3R0b20tbGVmdFxuICAgICAgICBbMCwgc2l6ZSAtIEZJTkRFUl9QQVRURVJOX1NJWkVdXG4gICAgXTtcbn07XG52YXIgZmluZGVyUGF0dGVybiA9IHtcbiAgICBnZXRQb3NpdGlvbnM6IGdldFBvc2l0aW9uc1xufTtcbnZhciBtYXNrUGF0dGVybiA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAvKipcbiAgICAgKiBEYXRhIG1hc2sgcGF0dGVybiByZWZlcmVuY2VcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIGV4cG9ydHMuUGF0dGVybnMgPSB7XG4gICAgICAgIFBBVFRFUk4wMDA6IDAsXG4gICAgICAgIFBBVFRFUk4wMDE6IDEsXG4gICAgICAgIFBBVFRFUk4wMTA6IDIsXG4gICAgICAgIFBBVFRFUk4wMTE6IDMsXG4gICAgICAgIFBBVFRFUk4xMDA6IDQsXG4gICAgICAgIFBBVFRFUk4xMDE6IDUsXG4gICAgICAgIFBBVFRFUk4xMTA6IDYsXG4gICAgICAgIFBBVFRFUk4xMTE6IDdcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdlaWdodGVkIHBlbmFsdHkgc2NvcmVzIGZvciB0aGUgdW5kZXNpcmFibGUgZmVhdHVyZXNcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBQZW5hbHR5U2NvcmVzID0ge1xuICAgICAgICBOMTogMyxcbiAgICAgICAgTjI6IDMsXG4gICAgICAgIE4zOiA0MCxcbiAgICAgICAgTjQ6IDEwXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBtYXNrIHBhdHRlcm4gdmFsdWUgaXMgdmFsaWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gIG1hc2sgICAgTWFzayBwYXR0ZXJuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgICB0cnVlIGlmIHZhbGlkLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgKi9cbiAgICBleHBvcnRzLmlzVmFsaWQgPSBmdW5jdGlvbiBpc1ZhbGlkKG1hc2spIHtcbiAgICAgICAgcmV0dXJuIG1hc2sgIT0gbnVsbCAmJiBtYXNrICE9PSAnJyAmJiAhaXNOYU4obWFzaykgJiYgbWFzayA+PSAwICYmIG1hc2sgPD0gNztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgbWFzayBwYXR0ZXJuIGZyb20gYSB2YWx1ZS5cbiAgICAgKiBJZiB2YWx1ZSBpcyBub3QgdmFsaWQsIHJldHVybnMgdW5kZWZpbmVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZSAgICAgICAgTWFzayBwYXR0ZXJuIHZhbHVlXG4gICAgICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgICAgICAgICAgIFZhbGlkIG1hc2sgcGF0dGVybiBvciB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBleHBvcnRzLmZyb20gPSBmdW5jdGlvbiBmcm9tKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLmlzVmFsaWQodmFsdWUpID8gcGFyc2VJbnQodmFsdWUsIDEwKSA6IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICogRmluZCBhZGphY2VudCBtb2R1bGVzIGluIHJvdy9jb2x1bW4gd2l0aCB0aGUgc2FtZSBjb2xvclxuICAgICogYW5kIGFzc2lnbiBhIHBlbmFsdHkgdmFsdWUuXG4gICAgKlxuICAgICogUG9pbnRzOiBOMSArIGlcbiAgICAqIGkgaXMgdGhlIGFtb3VudCBieSB3aGljaCB0aGUgbnVtYmVyIG9mIGFkamFjZW50IG1vZHVsZXMgb2YgdGhlIHNhbWUgY29sb3IgZXhjZWVkcyA1XG4gICAgKi9cbiAgICBleHBvcnRzLmdldFBlbmFsdHlOMSA9IGZ1bmN0aW9uIGdldFBlbmFsdHlOMShkYXRhKSB7XG4gICAgICAgIHZhciBzaXplID0gZGF0YS5zaXplO1xuICAgICAgICB2YXIgcG9pbnRzID0gMDtcbiAgICAgICAgdmFyIHNhbWVDb3VudENvbCA9IDA7XG4gICAgICAgIHZhciBzYW1lQ291bnRSb3cgPSAwO1xuICAgICAgICB2YXIgbGFzdENvbCA9IG51bGw7XG4gICAgICAgIHZhciBsYXN0Um93ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgc2l6ZTsgcm93KyspIHtcbiAgICAgICAgICAgIHNhbWVDb3VudENvbCA9IHNhbWVDb3VudFJvdyA9IDA7XG4gICAgICAgICAgICBsYXN0Q29sID0gbGFzdFJvdyA9IG51bGw7XG4gICAgICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBzaXplOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIHZhciBtb2R1bGUgPSBkYXRhLmdldChyb3csIGNvbCk7XG4gICAgICAgICAgICAgICAgaWYgKG1vZHVsZSA9PT0gbGFzdENvbCkge1xuICAgICAgICAgICAgICAgICAgICBzYW1lQ291bnRDb2wrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzYW1lQ291bnRDb2wgPj0gNSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50cyArPSBQZW5hbHR5U2NvcmVzLk4xICsgKHNhbWVDb3VudENvbCAtIDUpO1xuICAgICAgICAgICAgICAgICAgICBsYXN0Q29sID0gbW9kdWxlO1xuICAgICAgICAgICAgICAgICAgICBzYW1lQ291bnRDb2wgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb2R1bGUgPSBkYXRhLmdldChjb2wsIHJvdyk7XG4gICAgICAgICAgICAgICAgaWYgKG1vZHVsZSA9PT0gbGFzdFJvdykge1xuICAgICAgICAgICAgICAgICAgICBzYW1lQ291bnRSb3crKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzYW1lQ291bnRSb3cgPj0gNSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50cyArPSBQZW5hbHR5U2NvcmVzLk4xICsgKHNhbWVDb3VudFJvdyAtIDUpO1xuICAgICAgICAgICAgICAgICAgICBsYXN0Um93ID0gbW9kdWxlO1xuICAgICAgICAgICAgICAgICAgICBzYW1lQ291bnRSb3cgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzYW1lQ291bnRDb2wgPj0gNSlcbiAgICAgICAgICAgICAgICBwb2ludHMgKz0gUGVuYWx0eVNjb3Jlcy5OMSArIChzYW1lQ291bnRDb2wgLSA1KTtcbiAgICAgICAgICAgIGlmIChzYW1lQ291bnRSb3cgPj0gNSlcbiAgICAgICAgICAgICAgICBwb2ludHMgKz0gUGVuYWx0eVNjb3Jlcy5OMSArIChzYW1lQ291bnRSb3cgLSA1KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9pbnRzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmluZCAyeDIgYmxvY2tzIHdpdGggdGhlIHNhbWUgY29sb3IgYW5kIGFzc2lnbiBhIHBlbmFsdHkgdmFsdWVcbiAgICAgKlxuICAgICAqIFBvaW50czogTjIgKiAobSAtIDEpICogKG4gLSAxKVxuICAgICAqL1xuICAgIGV4cG9ydHMuZ2V0UGVuYWx0eU4yID0gZnVuY3Rpb24gZ2V0UGVuYWx0eU4yKGRhdGEpIHtcbiAgICAgICAgdmFyIHNpemUgPSBkYXRhLnNpemU7XG4gICAgICAgIHZhciBwb2ludHMgPSAwO1xuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBzaXplIC0gMTsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHNpemUgLSAxOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIHZhciBsYXN0ID0gZGF0YS5nZXQocm93LCBjb2wpICtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5nZXQocm93LCBjb2wgKyAxKSArXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZ2V0KHJvdyArIDEsIGNvbCkgK1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmdldChyb3cgKyAxLCBjb2wgKyAxKTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdCA9PT0gNCB8fCBsYXN0ID09PSAwKVxuICAgICAgICAgICAgICAgICAgICBwb2ludHMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9pbnRzICogUGVuYWx0eVNjb3Jlcy5OMjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZpbmQgMToxOjM6MToxIHJhdGlvIChkYXJrOmxpZ2h0OmRhcms6bGlnaHQ6ZGFyaykgcGF0dGVybiBpbiByb3cvY29sdW1uLFxuICAgICAqIHByZWNlZGVkIG9yIGZvbGxvd2VkIGJ5IGxpZ2h0IGFyZWEgNCBtb2R1bGVzIHdpZGVcbiAgICAgKlxuICAgICAqIFBvaW50czogTjMgKiBudW1iZXIgb2YgcGF0dGVybiBmb3VuZFxuICAgICAqL1xuICAgIGV4cG9ydHMuZ2V0UGVuYWx0eU4zID0gZnVuY3Rpb24gZ2V0UGVuYWx0eU4zKGRhdGEpIHtcbiAgICAgICAgdmFyIHNpemUgPSBkYXRhLnNpemU7XG4gICAgICAgIHZhciBwb2ludHMgPSAwO1xuICAgICAgICB2YXIgYml0c0NvbCA9IDA7XG4gICAgICAgIHZhciBiaXRzUm93ID0gMDtcbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgc2l6ZTsgcm93KyspIHtcbiAgICAgICAgICAgIGJpdHNDb2wgPSBiaXRzUm93ID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgYml0c0NvbCA9ICgoYml0c0NvbCA8PCAxKSAmIDB4N0ZGKSB8IGRhdGEuZ2V0KHJvdywgY29sKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sID49IDEwICYmIChiaXRzQ29sID09PSAweDVEMCB8fCBiaXRzQ29sID09PSAweDA1RCkpXG4gICAgICAgICAgICAgICAgICAgIHBvaW50cysrO1xuICAgICAgICAgICAgICAgIGJpdHNSb3cgPSAoKGJpdHNSb3cgPDwgMSkgJiAweDdGRikgfCBkYXRhLmdldChjb2wsIHJvdyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbCA+PSAxMCAmJiAoYml0c1JvdyA9PT0gMHg1RDAgfHwgYml0c1JvdyA9PT0gMHgwNUQpKVxuICAgICAgICAgICAgICAgICAgICBwb2ludHMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9pbnRzICogUGVuYWx0eVNjb3Jlcy5OMztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBwcm9wb3J0aW9uIG9mIGRhcmsgbW9kdWxlcyBpbiBlbnRpcmUgc3ltYm9sXG4gICAgICpcbiAgICAgKiBQb2ludHM6IE40ICoga1xuICAgICAqXG4gICAgICogayBpcyB0aGUgcmF0aW5nIG9mIHRoZSBkZXZpYXRpb24gb2YgdGhlIHByb3BvcnRpb24gb2YgZGFyayBtb2R1bGVzXG4gICAgICogaW4gdGhlIHN5bWJvbCBmcm9tIDUwJSBpbiBzdGVwcyBvZiA1JVxuICAgICAqL1xuICAgIGV4cG9ydHMuZ2V0UGVuYWx0eU40ID0gZnVuY3Rpb24gZ2V0UGVuYWx0eU40KGRhdGEpIHtcbiAgICAgICAgdmFyIGRhcmtDb3VudCA9IDA7XG4gICAgICAgIHZhciBtb2R1bGVzQ291bnQgPSBkYXRhLmRhdGEubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXNDb3VudDsgaSsrKVxuICAgICAgICAgICAgZGFya0NvdW50ICs9IGRhdGEuZGF0YVtpXTtcbiAgICAgICAgdmFyIGsgPSBNYXRoLmFicyhNYXRoLmNlaWwoKGRhcmtDb3VudCAqIDEwMCAvIG1vZHVsZXNDb3VudCkgLyA1KSAtIDEwKTtcbiAgICAgICAgcmV0dXJuIGsgKiBQZW5hbHR5U2NvcmVzLk40O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIG1hc2sgdmFsdWUgYXQgZ2l2ZW4gcG9zaXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbWFza1BhdHRlcm4gUGF0dGVybiByZWZlcmVuY2UgdmFsdWVcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGkgICAgICAgICAgIFJvd1xuICAgICAqIEBwYXJhbSAge051bWJlcn0gaiAgICAgICAgICAgQ29sdW1uXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgICAgICBNYXNrIHZhbHVlXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0TWFza0F0KG1hc2tQYXR0ZXJuLCBpLCBqKSB7XG4gICAgICAgIHN3aXRjaCAobWFza1BhdHRlcm4pIHtcbiAgICAgICAgICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMDAwOiByZXR1cm4gKGkgKyBqKSAlIDIgPT09IDA7XG4gICAgICAgICAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjAwMTogcmV0dXJuIGkgJSAyID09PSAwO1xuICAgICAgICAgICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4wMTA6IHJldHVybiBqICUgMyA9PT0gMDtcbiAgICAgICAgICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMDExOiByZXR1cm4gKGkgKyBqKSAlIDMgPT09IDA7XG4gICAgICAgICAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjEwMDogcmV0dXJuIChNYXRoLmZsb29yKGkgLyAyKSArIE1hdGguZmxvb3IoaiAvIDMpKSAlIDIgPT09IDA7XG4gICAgICAgICAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjEwMTogcmV0dXJuIChpICogaikgJSAyICsgKGkgKiBqKSAlIDMgPT09IDA7XG4gICAgICAgICAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjExMDogcmV0dXJuICgoaSAqIGopICUgMiArIChpICogaikgJSAzKSAlIDIgPT09IDA7XG4gICAgICAgICAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjExMTogcmV0dXJuICgoaSAqIGopICUgMyArIChpICsgaikgJSAyKSAlIDIgPT09IDA7XG4gICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoJ2JhZCBtYXNrUGF0dGVybjonICsgbWFza1BhdHRlcm4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGx5IGEgbWFzayBwYXR0ZXJuIHRvIGEgQml0TWF0cml4XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIHBhdHRlcm4gUGF0dGVybiByZWZlcmVuY2UgbnVtYmVyXG4gICAgICogQHBhcmFtICB7Qml0TWF0cml4fSBkYXRhICAgIEJpdE1hdHJpeCBkYXRhXG4gICAgICovXG4gICAgZXhwb3J0cy5hcHBseU1hc2sgPSBmdW5jdGlvbiBhcHBseU1hc2socGF0dGVybiwgZGF0YSkge1xuICAgICAgICB2YXIgc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgc2l6ZTsgY29sKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaXNSZXNlcnZlZChyb3csIGNvbCkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRhdGEueG9yKHJvdywgY29sLCBnZXRNYXNrQXQocGF0dGVybiwgcm93LCBjb2wpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYmVzdCBtYXNrIHBhdHRlcm4gZm9yIGRhdGFcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0JpdE1hdHJpeH0gZGF0YVxuICAgICAqIEByZXR1cm4ge051bWJlcn0gTWFzayBwYXR0ZXJuIHJlZmVyZW5jZSBudW1iZXJcbiAgICAgKi9cbiAgICBleHBvcnRzLmdldEJlc3RNYXNrID0gZnVuY3Rpb24gZ2V0QmVzdE1hc2soZGF0YSwgc2V0dXBGb3JtYXRGdW5jKSB7XG4gICAgICAgIHZhciBudW1QYXR0ZXJucyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuUGF0dGVybnMpLmxlbmd0aDtcbiAgICAgICAgdmFyIGJlc3RQYXR0ZXJuID0gMDtcbiAgICAgICAgdmFyIGxvd2VyUGVuYWx0eSA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IG51bVBhdHRlcm5zOyBwKyspIHtcbiAgICAgICAgICAgIHNldHVwRm9ybWF0RnVuYyhwKTtcbiAgICAgICAgICAgIGV4cG9ydHMuYXBwbHlNYXNrKHAsIGRhdGEpO1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHBlbmFsdHlcbiAgICAgICAgICAgIHZhciBwZW5hbHR5ID0gZXhwb3J0cy5nZXRQZW5hbHR5TjEoZGF0YSkgK1xuICAgICAgICAgICAgICAgIGV4cG9ydHMuZ2V0UGVuYWx0eU4yKGRhdGEpICtcbiAgICAgICAgICAgICAgICBleHBvcnRzLmdldFBlbmFsdHlOMyhkYXRhKSArXG4gICAgICAgICAgICAgICAgZXhwb3J0cy5nZXRQZW5hbHR5TjQoZGF0YSk7XG4gICAgICAgICAgICAvLyBVbmRvIHByZXZpb3VzbHkgYXBwbGllZCBtYXNrXG4gICAgICAgICAgICBleHBvcnRzLmFwcGx5TWFzayhwLCBkYXRhKTtcbiAgICAgICAgICAgIGlmIChwZW5hbHR5IDwgbG93ZXJQZW5hbHR5KSB7XG4gICAgICAgICAgICAgICAgbG93ZXJQZW5hbHR5ID0gcGVuYWx0eTtcbiAgICAgICAgICAgICAgICBiZXN0UGF0dGVybiA9IHA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJlc3RQYXR0ZXJuO1xuICAgIH07XG59KTtcbnZhciBFQ19CTE9DS1NfVEFCTEUgPSBbXG4gICAgLy8gTCAgTSAgUSAgSFxuICAgIDEsIDEsIDEsIDEsXG4gICAgMSwgMSwgMSwgMSxcbiAgICAxLCAxLCAyLCAyLFxuICAgIDEsIDIsIDIsIDQsXG4gICAgMSwgMiwgNCwgNCxcbiAgICAyLCA0LCA0LCA0LFxuICAgIDIsIDQsIDYsIDUsXG4gICAgMiwgNCwgNiwgNixcbiAgICAyLCA1LCA4LCA4LFxuICAgIDQsIDUsIDgsIDgsXG4gICAgNCwgNSwgOCwgMTEsXG4gICAgNCwgOCwgMTAsIDExLFxuICAgIDQsIDksIDEyLCAxNixcbiAgICA0LCA5LCAxNiwgMTYsXG4gICAgNiwgMTAsIDEyLCAxOCxcbiAgICA2LCAxMCwgMTcsIDE2LFxuICAgIDYsIDExLCAxNiwgMTksXG4gICAgNiwgMTMsIDE4LCAyMSxcbiAgICA3LCAxNCwgMjEsIDI1LFxuICAgIDgsIDE2LCAyMCwgMjUsXG4gICAgOCwgMTcsIDIzLCAyNSxcbiAgICA5LCAxNywgMjMsIDM0LFxuICAgIDksIDE4LCAyNSwgMzAsXG4gICAgMTAsIDIwLCAyNywgMzIsXG4gICAgMTIsIDIxLCAyOSwgMzUsXG4gICAgMTIsIDIzLCAzNCwgMzcsXG4gICAgMTIsIDI1LCAzNCwgNDAsXG4gICAgMTMsIDI2LCAzNSwgNDIsXG4gICAgMTQsIDI4LCAzOCwgNDUsXG4gICAgMTUsIDI5LCA0MCwgNDgsXG4gICAgMTYsIDMxLCA0MywgNTEsXG4gICAgMTcsIDMzLCA0NSwgNTQsXG4gICAgMTgsIDM1LCA0OCwgNTcsXG4gICAgMTksIDM3LCA1MSwgNjAsXG4gICAgMTksIDM4LCA1MywgNjMsXG4gICAgMjAsIDQwLCA1NiwgNjYsXG4gICAgMjEsIDQzLCA1OSwgNzAsXG4gICAgMjIsIDQ1LCA2MiwgNzQsXG4gICAgMjQsIDQ3LCA2NSwgNzcsXG4gICAgMjUsIDQ5LCA2OCwgODFcbl07XG52YXIgRUNfQ09ERVdPUkRTX1RBQkxFID0gW1xuICAgIC8vIEwgIE0gIFEgIEhcbiAgICA3LCAxMCwgMTMsIDE3LFxuICAgIDEwLCAxNiwgMjIsIDI4LFxuICAgIDE1LCAyNiwgMzYsIDQ0LFxuICAgIDIwLCAzNiwgNTIsIDY0LFxuICAgIDI2LCA0OCwgNzIsIDg4LFxuICAgIDM2LCA2NCwgOTYsIDExMixcbiAgICA0MCwgNzIsIDEwOCwgMTMwLFxuICAgIDQ4LCA4OCwgMTMyLCAxNTYsXG4gICAgNjAsIDExMCwgMTYwLCAxOTIsXG4gICAgNzIsIDEzMCwgMTkyLCAyMjQsXG4gICAgODAsIDE1MCwgMjI0LCAyNjQsXG4gICAgOTYsIDE3NiwgMjYwLCAzMDgsXG4gICAgMTA0LCAxOTgsIDI4OCwgMzUyLFxuICAgIDEyMCwgMjE2LCAzMjAsIDM4NCxcbiAgICAxMzIsIDI0MCwgMzYwLCA0MzIsXG4gICAgMTQ0LCAyODAsIDQwOCwgNDgwLFxuICAgIDE2OCwgMzA4LCA0NDgsIDUzMixcbiAgICAxODAsIDMzOCwgNTA0LCA1ODgsXG4gICAgMTk2LCAzNjQsIDU0NiwgNjUwLFxuICAgIDIyNCwgNDE2LCA2MDAsIDcwMCxcbiAgICAyMjQsIDQ0MiwgNjQ0LCA3NTAsXG4gICAgMjUyLCA0NzYsIDY5MCwgODE2LFxuICAgIDI3MCwgNTA0LCA3NTAsIDkwMCxcbiAgICAzMDAsIDU2MCwgODEwLCA5NjAsXG4gICAgMzEyLCA1ODgsIDg3MCwgMTA1MCxcbiAgICAzMzYsIDY0NCwgOTUyLCAxMTEwLFxuICAgIDM2MCwgNzAwLCAxMDIwLCAxMjAwLFxuICAgIDM5MCwgNzI4LCAxMDUwLCAxMjYwLFxuICAgIDQyMCwgNzg0LCAxMTQwLCAxMzUwLFxuICAgIDQ1MCwgODEyLCAxMjAwLCAxNDQwLFxuICAgIDQ4MCwgODY4LCAxMjkwLCAxNTMwLFxuICAgIDUxMCwgOTI0LCAxMzUwLCAxNjIwLFxuICAgIDU0MCwgOTgwLCAxNDQwLCAxNzEwLFxuICAgIDU3MCwgMTAzNiwgMTUzMCwgMTgwMCxcbiAgICA1NzAsIDEwNjQsIDE1OTAsIDE4OTAsXG4gICAgNjAwLCAxMTIwLCAxNjgwLCAxOTgwLFxuICAgIDYzMCwgMTIwNCwgMTc3MCwgMjEwMCxcbiAgICA2NjAsIDEyNjAsIDE4NjAsIDIyMjAsXG4gICAgNzIwLCAxMzE2LCAxOTUwLCAyMzEwLFxuICAgIDc1MCwgMTM3MiwgMjA0MCwgMjQzMFxuXTtcbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gYmxvY2sgdGhhdCB0aGUgUVIgQ29kZSBzaG91bGQgY29udGFpblxuICogZm9yIHRoZSBzcGVjaWZpZWQgdmVyc2lvbiBhbmQgZXJyb3IgY29ycmVjdGlvbiBsZXZlbC5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICogQHBhcmFtICB7TnVtYmVyfSBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgIE51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGJsb2Nrc1xuICovXG52YXIgZ2V0QmxvY2tzQ291bnQgPSBmdW5jdGlvbiBnZXRCbG9ja3NDb3VudCh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCQxKSB7XG4gICAgc3dpdGNoIChlcnJvckNvcnJlY3Rpb25MZXZlbCQxKSB7XG4gICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0aW9uTGV2ZWwuTDpcbiAgICAgICAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAwXTtcbiAgICAgICAgY2FzZSBlcnJvckNvcnJlY3Rpb25MZXZlbC5NOlxuICAgICAgICAgICAgcmV0dXJuIEVDX0JMT0NLU19UQUJMRVsodmVyc2lvbiAtIDEpICogNCArIDFdO1xuICAgICAgICBjYXNlIGVycm9yQ29ycmVjdGlvbkxldmVsLlE6XG4gICAgICAgICAgICByZXR1cm4gRUNfQkxPQ0tTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMl07XG4gICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0aW9uTGV2ZWwuSDpcbiAgICAgICAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAzXTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufTtcbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzIHRvIHVzZSBmb3IgdGhlIHNwZWNpZmllZFxuICogdmVyc2lvbiBhbmQgZXJyb3IgY29ycmVjdGlvbiBsZXZlbC5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICogQHBhcmFtICB7TnVtYmVyfSBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgIE51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGNvZGV3b3Jkc1xuICovXG52YXIgZ2V0VG90YWxDb2Rld29yZHNDb3VudCA9IGZ1bmN0aW9uIGdldFRvdGFsQ29kZXdvcmRzQ291bnQodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwkMSkge1xuICAgIHN3aXRjaCAoZXJyb3JDb3JyZWN0aW9uTGV2ZWwkMSkge1xuICAgICAgICBjYXNlIGVycm9yQ29ycmVjdGlvbkxldmVsLkw6XG4gICAgICAgICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMF07XG4gICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0aW9uTGV2ZWwuTTpcbiAgICAgICAgICAgIHJldHVybiBFQ19DT0RFV09SRFNfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAxXTtcbiAgICAgICAgY2FzZSBlcnJvckNvcnJlY3Rpb25MZXZlbC5ROlxuICAgICAgICAgICAgcmV0dXJuIEVDX0NPREVXT1JEU19UQUJMRVsodmVyc2lvbiAtIDEpICogNCArIDJdO1xuICAgICAgICBjYXNlIGVycm9yQ29ycmVjdGlvbkxldmVsLkg6XG4gICAgICAgICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgM107XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn07XG52YXIgZXJyb3JDb3JyZWN0aW9uQ29kZSA9IHtcbiAgICBnZXRCbG9ja3NDb3VudDogZ2V0QmxvY2tzQ291bnQsXG4gICAgZ2V0VG90YWxDb2Rld29yZHNDb3VudDogZ2V0VG90YWxDb2Rld29yZHNDb3VudFxufTtcbnZhciBFWFBfVEFCTEUgPSB0eXBlZGFycmF5QnVmZmVyLmFsbG9jKDUxMik7XG52YXIgTE9HX1RBQkxFID0gdHlwZWRhcnJheUJ1ZmZlci5hbGxvYygyNTYpO1xuKGZ1bmN0aW9uIGluaXRUYWJsZXMoKSB7XG4gICAgdmFyIHggPSAxO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU1OyBpKyspIHtcbiAgICAgICAgRVhQX1RBQkxFW2ldID0geDtcbiAgICAgICAgTE9HX1RBQkxFW3hdID0gaTtcbiAgICAgICAgeCA8PD0gMTsgLy8gbXVsdGlwbHkgYnkgMlxuICAgICAgICAvLyBUaGUgUVIgY29kZSBzcGVjaWZpY2F0aW9uIHNheXMgdG8gdXNlIGJ5dGUtd2lzZSBtb2R1bG8gMTAwMDExMTAxIGFyaXRobWV0aWMuXG4gICAgICAgIC8vIFRoaXMgbWVhbnMgdGhhdCB3aGVuIGEgbnVtYmVyIGlzIDI1NiBvciBsYXJnZXIsIGl0IHNob3VsZCBiZSBYT1JlZCB3aXRoIDB4MTFELlxuICAgICAgICBpZiAoeCAmIDB4MTAwKSB7IC8vIHNpbWlsYXIgdG8geCA+PSAyNTYsIGJ1dCBhIGxvdCBmYXN0ZXIgKGJlY2F1c2UgMHgxMDAgPT0gMjU2KVxuICAgICAgICAgICAgeCBePSAweDExRDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBPcHRpbWl6YXRpb246IGRvdWJsZSB0aGUgc2l6ZSBvZiB0aGUgYW50aS1sb2cgdGFibGUgc28gdGhhdCB3ZSBkb24ndCBuZWVkIHRvIG1vZCAyNTUgdG9cbiAgICAvLyBzdGF5IGluc2lkZSB0aGUgYm91bmRzIChiZWNhdXNlIHdlIHdpbGwgbWFpbmx5IHVzZSB0aGlzIHRhYmxlIGZvciB0aGUgbXVsdGlwbGljYXRpb24gb2ZcbiAgICAvLyB0d28gR0YgbnVtYmVycywgbm8gbW9yZSkuXG4gICAgLy8gQHNlZSB7QGxpbmsgbXVsfVxuICAgIGZvciAoaSA9IDI1NTsgaSA8IDUxMjsgaSsrKSB7XG4gICAgICAgIEVYUF9UQUJMRVtpXSA9IEVYUF9UQUJMRVtpIC0gMjU1XTtcbiAgICB9XG59KCkpO1xuLyoqXG4gKiBSZXR1cm5zIGxvZyB2YWx1ZSBvZiBuIGluc2lkZSBHYWxvaXMgRmllbGRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xudmFyIGxvZyA9IGZ1bmN0aW9uIGxvZyhuKSB7XG4gICAgaWYgKG4gPCAxKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2xvZygnICsgbiArICcpJyk7XG4gICAgcmV0dXJuIExPR19UQUJMRVtuXTtcbn07XG4vKipcbiAqIFJldHVybnMgYW50aS1sb2cgdmFsdWUgb2YgbiBpbnNpZGUgR2Fsb2lzIEZpZWxkXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbnZhciBleHAgPSBmdW5jdGlvbiBleHAobikge1xuICAgIHJldHVybiBFWFBfVEFCTEVbbl07XG59O1xuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBudW1iZXIgaW5zaWRlIEdhbG9pcyBGaWVsZFxuICpcbiAqIEBwYXJhbSAge051bWJlcn0geFxuICogQHBhcmFtICB7TnVtYmVyfSB5XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbnZhciBtdWwgPSBmdW5jdGlvbiBtdWwoeCwgeSkge1xuICAgIGlmICh4ID09PSAwIHx8IHkgPT09IDApXG4gICAgICAgIHJldHVybiAwO1xuICAgIC8vIHNob3VsZCBiZSBFWFBfVEFCTEVbKExPR19UQUJMRVt4XSArIExPR19UQUJMRVt5XSkgJSAyNTVdIGlmIEVYUF9UQUJMRSB3YXNuJ3Qgb3ZlcnNpemVkXG4gICAgLy8gQHNlZSB7QGxpbmsgaW5pdFRhYmxlc31cbiAgICByZXR1cm4gRVhQX1RBQkxFW0xPR19UQUJMRVt4XSArIExPR19UQUJMRVt5XV07XG59O1xudmFyIGdhbG9pc0ZpZWxkID0ge1xuICAgIGxvZzogbG9nLFxuICAgIGV4cDogZXhwLFxuICAgIG11bDogbXVsXG59O1xudmFyIHBvbHlub21pYWwgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0d28gcG9seW5vbWlhbHMgaW5zaWRlIEdhbG9pcyBGaWVsZFxuICAgICAqXG4gICAgICogQHBhcmFtICB7QnVmZmVyfSBwMSBQb2x5bm9taWFsXG4gICAgICogQHBhcmFtICB7QnVmZmVyfSBwMiBQb2x5bm9taWFsXG4gICAgICogQHJldHVybiB7QnVmZmVyfSAgICBQcm9kdWN0IG9mIHAxIGFuZCBwMlxuICAgICAqL1xuICAgIGV4cG9ydHMubXVsID0gZnVuY3Rpb24gbXVsKHAxLCBwMikge1xuICAgICAgICB2YXIgY29lZmYgPSB0eXBlZGFycmF5QnVmZmVyLmFsbG9jKHAxLmxlbmd0aCArIHAyLmxlbmd0aCAtIDEpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHAxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHAyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29lZmZbaSArIGpdIF49IGdhbG9pc0ZpZWxkLm11bChwMVtpXSwgcDJbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2VmZjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSB0aGUgcmVtYWluZGVyIG9mIHBvbHlub21pYWxzIGRpdmlzaW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtCdWZmZXJ9IGRpdmlkZW50IFBvbHlub21pYWxcbiAgICAgKiBAcGFyYW0gIHtCdWZmZXJ9IGRpdmlzb3IgIFBvbHlub21pYWxcbiAgICAgKiBAcmV0dXJuIHtCdWZmZXJ9ICAgICAgICAgIFJlbWFpbmRlclxuICAgICAqL1xuICAgIGV4cG9ydHMubW9kID0gZnVuY3Rpb24gbW9kKGRpdmlkZW50LCBkaXZpc29yKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0eXBlZGFycmF5QnVmZmVyLmZyb20oZGl2aWRlbnQpO1xuICAgICAgICB3aGlsZSAoKHJlc3VsdC5sZW5ndGggLSBkaXZpc29yLmxlbmd0aCkgPj0gMCkge1xuICAgICAgICAgICAgdmFyIGNvZWZmID0gcmVzdWx0WzBdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXZpc29yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldIF49IGdhbG9pc0ZpZWxkLm11bChkaXZpc29yW2ldLCBjb2VmZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZW1vdmUgYWxsIHplcm9zIGZyb20gYnVmZmVyIGhlYWRcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKG9mZnNldCA8IHJlc3VsdC5sZW5ndGggJiYgcmVzdWx0W29mZnNldF0gPT09IDApXG4gICAgICAgICAgICAgICAgb2Zmc2V0Kys7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYW4gaXJyZWR1Y2libGUgZ2VuZXJhdG9yIHBvbHlub21pYWwgb2Ygc3BlY2lmaWVkIGRlZ3JlZVxuICAgICAqICh1c2VkIGJ5IFJlZWQtU29sb21vbiBlbmNvZGVyKVxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBkZWdyZWUgRGVncmVlIG9mIHRoZSBnZW5lcmF0b3IgcG9seW5vbWlhbFxuICAgICAqIEByZXR1cm4ge0J1ZmZlcn0gICAgICAgIEJ1ZmZlciBjb250YWluaW5nIHBvbHlub21pYWwgY29lZmZpY2llbnRzXG4gICAgICovXG4gICAgZXhwb3J0cy5nZW5lcmF0ZUVDUG9seW5vbWlhbCA9IGZ1bmN0aW9uIGdlbmVyYXRlRUNQb2x5bm9taWFsKGRlZ3JlZSkge1xuICAgICAgICB2YXIgcG9seSA9IHR5cGVkYXJyYXlCdWZmZXIuZnJvbShbMV0pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlZ3JlZTsgaSsrKSB7XG4gICAgICAgICAgICBwb2x5ID0gZXhwb3J0cy5tdWwocG9seSwgWzEsIGdhbG9pc0ZpZWxkLmV4cChpKV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb2x5O1xuICAgIH07XG59KTtcbnZhciBCdWZmZXIkMSA9IGJ1ZmZlci5CdWZmZXI7XG5mdW5jdGlvbiBSZWVkU29sb21vbkVuY29kZXIoZGVncmVlKSB7XG4gICAgdGhpcy5nZW5Qb2x5ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVncmVlID0gZGVncmVlO1xuICAgIGlmICh0aGlzLmRlZ3JlZSlcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKHRoaXMuZGVncmVlKTtcbn1cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgZW5jb2Rlci5cbiAqIFRoZSBpbnB1dCBwYXJhbSBzaG91bGQgY29ycmVzcG9uZCB0byB0aGUgbnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gZGVncmVlXG4gKi9cblJlZWRTb2xvbW9uRW5jb2Rlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoZGVncmVlKSB7XG4gICAgLy8gY3JlYXRlIGFuIGlycmVkdWNpYmxlIGdlbmVyYXRvciBwb2x5bm9taWFsXG4gICAgdGhpcy5kZWdyZWUgPSBkZWdyZWU7XG4gICAgdGhpcy5nZW5Qb2x5ID0gcG9seW5vbWlhbC5nZW5lcmF0ZUVDUG9seW5vbWlhbCh0aGlzLmRlZ3JlZSk7XG59O1xuLyoqXG4gKiBFbmNvZGVzIGEgY2h1bmsgb2YgZGF0YVxuICpcbiAqIEBwYXJhbSAge0J1ZmZlcn0gZGF0YSBCdWZmZXIgY29udGFpbmluZyBpbnB1dCBkYXRhXG4gKiBAcmV0dXJuIHtCdWZmZXJ9ICAgICAgQnVmZmVyIGNvbnRhaW5pbmcgZW5jb2RlZCBkYXRhXG4gKi9cblJlZWRTb2xvbW9uRW5jb2Rlci5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMuZ2VuUG9seSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VuY29kZXIgbm90IGluaXRpYWxpemVkJyk7XG4gICAgfVxuICAgIC8vIENhbGN1bGF0ZSBFQyBmb3IgdGhpcyBkYXRhIGJsb2NrXG4gICAgLy8gZXh0ZW5kcyBkYXRhIHNpemUgdG8gZGF0YStnZW5Qb2x5IHNpemVcbiAgICB2YXIgcGFkID0gdHlwZWRhcnJheUJ1ZmZlci5hbGxvYyh0aGlzLmRlZ3JlZSk7XG4gICAgdmFyIHBhZGRlZERhdGEgPSBCdWZmZXIkMS5jb25jYXQoW2RhdGEsIHBhZF0sIGRhdGEubGVuZ3RoICsgdGhpcy5kZWdyZWUpO1xuICAgIC8vIFRoZSBlcnJvciBjb3JyZWN0aW9uIGNvZGV3b3JkcyBhcmUgdGhlIHJlbWFpbmRlciBhZnRlciBkaXZpZGluZyB0aGUgZGF0YSBjb2Rld29yZHNcbiAgICAvLyBieSBhIGdlbmVyYXRvciBwb2x5bm9taWFsXG4gICAgdmFyIHJlbWFpbmRlciA9IHBvbHlub21pYWwubW9kKHBhZGRlZERhdGEsIHRoaXMuZ2VuUG9seSk7XG4gICAgLy8gcmV0dXJuIEVDIGRhdGEgYmxvY2tzIChsYXN0IG4gYnl0ZSwgd2hlcmUgbiBpcyB0aGUgZGVncmVlIG9mIGdlblBvbHkpXG4gICAgLy8gSWYgY29lZmZpY2llbnRzIG51bWJlciBpbiByZW1haW5kZXIgYXJlIGxlc3MgdGhhbiBnZW5Qb2x5IGRlZ3JlZSxcbiAgICAvLyBwYWQgd2l0aCAwcyB0byB0aGUgbGVmdCB0byByZWFjaCB0aGUgbmVlZGVkIG51bWJlciBvZiBjb2VmZmljaWVudHNcbiAgICB2YXIgc3RhcnQgPSB0aGlzLmRlZ3JlZSAtIHJlbWFpbmRlci5sZW5ndGg7XG4gICAgaWYgKHN0YXJ0ID4gMCkge1xuICAgICAgICB2YXIgYnVmZiA9IHR5cGVkYXJyYXlCdWZmZXIuYWxsb2ModGhpcy5kZWdyZWUpO1xuICAgICAgICByZW1haW5kZXIuY29weShidWZmLCBzdGFydCk7XG4gICAgICAgIHJldHVybiBidWZmO1xuICAgIH1cbiAgICByZXR1cm4gcmVtYWluZGVyO1xufTtcbnZhciByZWVkU29sb21vbkVuY29kZXIgPSBSZWVkU29sb21vbkVuY29kZXI7XG4vKipcbiAqIENoZWNrIGlmIFFSIENvZGUgdmVyc2lvbiBpcyB2YWxpZFxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gIHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgIHRydWUgaWYgdmFsaWQgdmVyc2lvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbnZhciBpc1ZhbGlkID0gZnVuY3Rpb24gaXNWYWxpZCh2ZXJzaW9uKSB7XG4gICAgcmV0dXJuICFpc05hTih2ZXJzaW9uKSAmJiB2ZXJzaW9uID49IDEgJiYgdmVyc2lvbiA8PSA0MDtcbn07XG52YXIgdmVyc2lvbkNoZWNrID0ge1xuICAgIGlzVmFsaWQ6IGlzVmFsaWRcbn07XG52YXIgbnVtZXJpYyA9ICdbMC05XSsnO1xudmFyIGFscGhhbnVtZXJpYyA9ICdbQS1aICQlKitcXFxcLS4vOl0rJztcbnZhciBrYW5qaSA9ICcoPzpbdTMwMDAtdTMwM0ZdfFt1MzA0MC11MzA5Rl18W3UzMEEwLXUzMEZGXXwnICtcbiAgICAnW3VGRjAwLXVGRkVGXXxbdTRFMDAtdTlGQUZdfFt1MjYwNS11MjYwNl18W3UyMTkwLXUyMTk1XXx1MjAzQnwnICtcbiAgICAnW3UyMDEwdTIwMTV1MjAxOHUyMDE5dTIwMjV1MjAyNnUyMDFDdTIwMUR1MjIyNXUyMjYwXXwnICtcbiAgICAnW3UwMzkxLXUwNDUxXXxbdTAwQTd1MDBBOHUwMEIxdTAwQjR1MDBEN3UwMEY3XSkrJztcbmthbmppID0ga2FuamkucmVwbGFjZSgvdS9nLCAnXFxcXHUnKTtcbnZhciBieXRlID0gJyg/Oig/IVtBLVowLTkgJCUqK1xcXFwtLi86XXwnICsga2FuamkgKyAnKSg/Oi58W1xcclxcbl0pKSsnO1xudmFyIEtBTkpJID0gbmV3IFJlZ0V4cChrYW5qaSwgJ2cnKTtcbnZhciBCWVRFX0tBTkpJID0gbmV3IFJlZ0V4cCgnW15BLVowLTkgJCUqK1xcXFwtLi86XSsnLCAnZycpO1xudmFyIEJZVEUgPSBuZXcgUmVnRXhwKGJ5dGUsICdnJyk7XG52YXIgTlVNRVJJQyA9IG5ldyBSZWdFeHAobnVtZXJpYywgJ2cnKTtcbnZhciBBTFBIQU5VTUVSSUMgPSBuZXcgUmVnRXhwKGFscGhhbnVtZXJpYywgJ2cnKTtcbnZhciBURVNUX0tBTkpJID0gbmV3IFJlZ0V4cCgnXicgKyBrYW5qaSArICckJyk7XG52YXIgVEVTVF9OVU1FUklDID0gbmV3IFJlZ0V4cCgnXicgKyBudW1lcmljICsgJyQnKTtcbnZhciBURVNUX0FMUEhBTlVNRVJJQyA9IG5ldyBSZWdFeHAoJ15bQS1aMC05ICQlKitcXFxcLS4vOl0rJCcpO1xudmFyIHRlc3RLYW5qaSA9IGZ1bmN0aW9uIHRlc3RLYW5qaShzdHIpIHtcbiAgICByZXR1cm4gVEVTVF9LQU5KSS50ZXN0KHN0cik7XG59O1xudmFyIHRlc3ROdW1lcmljID0gZnVuY3Rpb24gdGVzdE51bWVyaWMoc3RyKSB7XG4gICAgcmV0dXJuIFRFU1RfTlVNRVJJQy50ZXN0KHN0cik7XG59O1xudmFyIHRlc3RBbHBoYW51bWVyaWMgPSBmdW5jdGlvbiB0ZXN0QWxwaGFudW1lcmljKHN0cikge1xuICAgIHJldHVybiBURVNUX0FMUEhBTlVNRVJJQy50ZXN0KHN0cik7XG59O1xudmFyIHJlZ2V4ID0ge1xuICAgIEtBTkpJOiBLQU5KSSxcbiAgICBCWVRFX0tBTkpJOiBCWVRFX0tBTkpJLFxuICAgIEJZVEU6IEJZVEUsXG4gICAgTlVNRVJJQzogTlVNRVJJQyxcbiAgICBBTFBIQU5VTUVSSUM6IEFMUEhBTlVNRVJJQyxcbiAgICB0ZXN0S2Fuamk6IHRlc3RLYW5qaSxcbiAgICB0ZXN0TnVtZXJpYzogdGVzdE51bWVyaWMsXG4gICAgdGVzdEFscGhhbnVtZXJpYzogdGVzdEFscGhhbnVtZXJpY1xufTtcbnZhciBtb2RlID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8qKlxuICAgICAqIE51bWVyaWMgbW9kZSBlbmNvZGVzIGRhdGEgZnJvbSB0aGUgZGVjaW1hbCBkaWdpdCBzZXQgKDAgLSA5KVxuICAgICAqIChieXRlIHZhbHVlcyAzMEhFWCB0byAzOUhFWCkuXG4gICAgICogTm9ybWFsbHksIDMgZGF0YSBjaGFyYWN0ZXJzIGFyZSByZXByZXNlbnRlZCBieSAxMCBiaXRzLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICBleHBvcnRzLk5VTUVSSUMgPSB7XG4gICAgICAgIGlkOiAnTnVtZXJpYycsXG4gICAgICAgIGJpdDogMSA8PCAwLFxuICAgICAgICBjY0JpdHM6IFsxMCwgMTIsIDE0XVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQWxwaGFudW1lcmljIG1vZGUgZW5jb2RlcyBkYXRhIGZyb20gYSBzZXQgb2YgNDUgY2hhcmFjdGVycyxcbiAgICAgKiBpLmUuIDEwIG51bWVyaWMgZGlnaXRzICgwIC0gOSksXG4gICAgICogICAgICAyNiBhbHBoYWJldGljIGNoYXJhY3RlcnMgKEEgLSBaKSxcbiAgICAgKiAgIGFuZCA5IHN5bWJvbHMgKFNQLCAkLCAlLCAqLCArLCAtLCAuLCAvLCA6KS5cbiAgICAgKiBOb3JtYWxseSwgdHdvIGlucHV0IGNoYXJhY3RlcnMgYXJlIHJlcHJlc2VudGVkIGJ5IDExIGJpdHMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIGV4cG9ydHMuQUxQSEFOVU1FUklDID0ge1xuICAgICAgICBpZDogJ0FscGhhbnVtZXJpYycsXG4gICAgICAgIGJpdDogMSA8PCAxLFxuICAgICAgICBjY0JpdHM6IFs5LCAxMSwgMTNdXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbiBieXRlIG1vZGUsIGRhdGEgaXMgZW5jb2RlZCBhdCA4IGJpdHMgcGVyIGNoYXJhY3Rlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgZXhwb3J0cy5CWVRFID0ge1xuICAgICAgICBpZDogJ0J5dGUnLFxuICAgICAgICBiaXQ6IDEgPDwgMixcbiAgICAgICAgY2NCaXRzOiBbOCwgMTYsIDE2XVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIEthbmppIG1vZGUgZWZmaWNpZW50bHkgZW5jb2RlcyBLYW5qaSBjaGFyYWN0ZXJzIGluIGFjY29yZGFuY2Ugd2l0aFxuICAgICAqIHRoZSBTaGlmdCBKSVMgc3lzdGVtIGJhc2VkIG9uIEpJUyBYIDAyMDguXG4gICAgICogVGhlIFNoaWZ0IEpJUyB2YWx1ZXMgYXJlIHNoaWZ0ZWQgZnJvbSB0aGUgSklTIFggMDIwOCB2YWx1ZXMuXG4gICAgICogSklTIFggMDIwOCBnaXZlcyBkZXRhaWxzIG9mIHRoZSBzaGlmdCBjb2RlZCByZXByZXNlbnRhdGlvbi5cbiAgICAgKiBFYWNoIHR3by1ieXRlIGNoYXJhY3RlciB2YWx1ZSBpcyBjb21wYWN0ZWQgdG8gYSAxMy1iaXQgYmluYXJ5IGNvZGV3b3JkLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICBleHBvcnRzLktBTkpJID0ge1xuICAgICAgICBpZDogJ0thbmppJyxcbiAgICAgICAgYml0OiAxIDw8IDMsXG4gICAgICAgIGNjQml0czogWzgsIDEwLCAxMl1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1peGVkIG1vZGUgd2lsbCBjb250YWluIGEgc2VxdWVuY2VzIG9mIGRhdGEgaW4gYSBjb21iaW5hdGlvbiBvZiBhbnkgb2ZcbiAgICAgKiB0aGUgbW9kZXMgZGVzY3JpYmVkIGFib3ZlXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIGV4cG9ydHMuTUlYRUQgPSB7XG4gICAgICAgIGJpdDogLTFcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBiaXRzIG5lZWRlZCB0byBzdG9yZSB0aGUgZGF0YSBsZW5ndGhcbiAgICAgKiBhY2NvcmRpbmcgdG8gUVIgQ29kZSBzcGVjaWZpY2F0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge01vZGV9ICAgbW9kZSAgICBEYXRhIG1vZGVcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgIE51bWJlciBvZiBiaXRzXG4gICAgICovXG4gICAgZXhwb3J0cy5nZXRDaGFyQ291bnRJbmRpY2F0b3IgPSBmdW5jdGlvbiBnZXRDaGFyQ291bnRJbmRpY2F0b3IobW9kZSwgdmVyc2lvbikge1xuICAgICAgICBpZiAoIW1vZGUuY2NCaXRzKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1vZGU6ICcgKyBtb2RlKTtcbiAgICAgICAgaWYgKCF2ZXJzaW9uQ2hlY2suaXNWYWxpZCh2ZXJzaW9uKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZlcnNpb246ICcgKyB2ZXJzaW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmVyc2lvbiA+PSAxICYmIHZlcnNpb24gPCAxMClcbiAgICAgICAgICAgIHJldHVybiBtb2RlLmNjQml0c1swXTtcbiAgICAgICAgZWxzZSBpZiAodmVyc2lvbiA8IDI3KVxuICAgICAgICAgICAgcmV0dXJuIG1vZGUuY2NCaXRzWzFdO1xuICAgICAgICByZXR1cm4gbW9kZS5jY0JpdHNbMl07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtb3N0IGVmZmljaWVudCBtb2RlIHRvIHN0b3JlIHRoZSBzcGVjaWZpZWQgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBkYXRhU3RyIElucHV0IGRhdGEgc3RyaW5nXG4gICAgICogQHJldHVybiB7TW9kZX0gICAgICAgICAgIEJlc3QgbW9kZVxuICAgICAqL1xuICAgIGV4cG9ydHMuZ2V0QmVzdE1vZGVGb3JEYXRhID0gZnVuY3Rpb24gZ2V0QmVzdE1vZGVGb3JEYXRhKGRhdGFTdHIpIHtcbiAgICAgICAgaWYgKHJlZ2V4LnRlc3ROdW1lcmljKGRhdGFTdHIpKVxuICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuTlVNRVJJQztcbiAgICAgICAgZWxzZSBpZiAocmVnZXgudGVzdEFscGhhbnVtZXJpYyhkYXRhU3RyKSlcbiAgICAgICAgICAgIHJldHVybiBleHBvcnRzLkFMUEhBTlVNRVJJQztcbiAgICAgICAgZWxzZSBpZiAocmVnZXgudGVzdEthbmppKGRhdGFTdHIpKVxuICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMuS0FOSkk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBleHBvcnRzLkJZVEU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gbW9kZSBuYW1lIGFzIHN0cmluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHtNb2RlfSBtb2RlIE1vZGUgb2JqZWN0XG4gICAgICogQHJldHVybnMge1N0cmluZ30gIE1vZGUgbmFtZVxuICAgICAqL1xuICAgIGV4cG9ydHMudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhtb2RlKSB7XG4gICAgICAgIGlmIChtb2RlICYmIG1vZGUuaWQpXG4gICAgICAgICAgICByZXR1cm4gbW9kZS5pZDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1vZGUnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGlucHV0IHBhcmFtIGlzIGEgdmFsaWQgbW9kZSBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtNb2RlfSAgICBtb2RlIE1vZGUgb2JqZWN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdmFsaWQgbW9kZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgZXhwb3J0cy5pc1ZhbGlkID0gZnVuY3Rpb24gaXNWYWxpZChtb2RlKSB7XG4gICAgICAgIHJldHVybiBtb2RlICYmIG1vZGUuYml0ICYmIG1vZGUuY2NCaXRzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IG1vZGUgb2JqZWN0IGZyb20gaXRzIG5hbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtTdHJpbmd9IHN0cmluZyBNb2RlIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7TW9kZX0gICAgICAgICAgTW9kZSBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmcm9tU3RyaW5nKHN0cmluZykge1xuICAgICAgICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGFyYW0gaXMgbm90IGEgc3RyaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxjU3RyID0gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHN3aXRjaCAobGNTdHIpIHtcbiAgICAgICAgICAgIGNhc2UgJ251bWVyaWMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBleHBvcnRzLk5VTUVSSUM7XG4gICAgICAgICAgICBjYXNlICdhbHBoYW51bWVyaWMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBleHBvcnRzLkFMUEhBTlVNRVJJQztcbiAgICAgICAgICAgIGNhc2UgJ2thbmppJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5LQU5KSTtcbiAgICAgICAgICAgIGNhc2UgJ2J5dGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBleHBvcnRzLkJZVEU7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBtb2RlOiAnICsgc3RyaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1vZGUgZnJvbSBhIHZhbHVlLlxuICAgICAqIElmIHZhbHVlIGlzIG5vdCBhIHZhbGlkIG1vZGUsIHJldHVybnMgZGVmYXVsdFZhbHVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtNb2RlfFN0cmluZ30gdmFsdWUgICAgICAgIEVuY29kaW5nIG1vZGVcbiAgICAgKiBAcGFyYW0gIHtNb2RlfSAgICAgICAgZGVmYXVsdFZhbHVlIEZhbGxiYWNrIHZhbHVlXG4gICAgICogQHJldHVybiB7TW9kZX0gICAgICAgICAgICAgICAgICAgICBFbmNvZGluZyBtb2RlXG4gICAgICovXG4gICAgZXhwb3J0cy5mcm9tID0gZnVuY3Rpb24gZnJvbSh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmIChleHBvcnRzLmlzVmFsaWQodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG59KTtcbnZhciB2ZXJzaW9uID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8vIEdlbmVyYXRvciBwb2x5bm9taWFsIHVzZWQgdG8gZW5jb2RlIHZlcnNpb24gaW5mb3JtYXRpb25cbiAgICB2YXIgRzE4ID0gKDEgPDwgMTIpIHwgKDEgPDwgMTEpIHwgKDEgPDwgMTApIHwgKDEgPDwgOSkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgMikgfCAoMSA8PCAwKTtcbiAgICB2YXIgRzE4X0JDSCA9IHV0aWxzLmdldEJDSERpZ2l0KEcxOCk7XG4gICAgZnVuY3Rpb24gZ2V0QmVzdFZlcnNpb25Gb3JEYXRhTGVuZ3RoKG1vZGUsIGxlbmd0aCwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcbiAgICAgICAgZm9yICh2YXIgY3VycmVudFZlcnNpb24gPSAxOyBjdXJyZW50VmVyc2lvbiA8PSA0MDsgY3VycmVudFZlcnNpb24rKykge1xuICAgICAgICAgICAgaWYgKGxlbmd0aCA8PSBleHBvcnRzLmdldENhcGFjaXR5KGN1cnJlbnRWZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgbW9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFZlcnNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UmVzZXJ2ZWRCaXRzQ291bnQobW9kZSQxLCB2ZXJzaW9uKSB7XG4gICAgICAgIC8vIENoYXJhY3RlciBjb3VudCBpbmRpY2F0b3IgKyBtb2RlIGluZGljYXRvciBiaXRzXG4gICAgICAgIHJldHVybiBtb2RlLmdldENoYXJDb3VudEluZGljYXRvcihtb2RlJDEsIHZlcnNpb24pICsgNDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0VG90YWxCaXRzRnJvbURhdGFBcnJheShzZWdtZW50cywgdmVyc2lvbikge1xuICAgICAgICB2YXIgdG90YWxCaXRzID0gMDtcbiAgICAgICAgc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgdmFyIHJlc2VydmVkQml0cyA9IGdldFJlc2VydmVkQml0c0NvdW50KGRhdGEubW9kZSwgdmVyc2lvbik7XG4gICAgICAgICAgICB0b3RhbEJpdHMgKz0gcmVzZXJ2ZWRCaXRzICsgZGF0YS5nZXRCaXRzTGVuZ3RoKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdG90YWxCaXRzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRCZXN0VmVyc2lvbkZvck1peGVkRGF0YShzZWdtZW50cywgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcbiAgICAgICAgZm9yICh2YXIgY3VycmVudFZlcnNpb24gPSAxOyBjdXJyZW50VmVyc2lvbiA8PSA0MDsgY3VycmVudFZlcnNpb24rKykge1xuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGdldFRvdGFsQml0c0Zyb21EYXRhQXJyYXkoc2VnbWVudHMsIGN1cnJlbnRWZXJzaW9uKTtcbiAgICAgICAgICAgIGlmIChsZW5ndGggPD0gZXhwb3J0cy5nZXRDYXBhY2l0eShjdXJyZW50VmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1vZGUuTUlYRUQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRWZXJzaW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdmVyc2lvbiBudW1iZXIgZnJvbSBhIHZhbHVlLlxuICAgICAqIElmIHZhbHVlIGlzIG5vdCBhIHZhbGlkIHZlcnNpb24sIHJldHVybnMgZGVmYXVsdFZhbHVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZSAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSAgICAgICAgZGVmYXVsdFZhbHVlIEZhbGxiYWNrIHZhbHVlXG4gICAgICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvbiBudW1iZXJcbiAgICAgKi9cbiAgICBleHBvcnRzLmZyb20gPSBmdW5jdGlvbiBmcm9tKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKHZlcnNpb25DaGVjay5pc1ZhbGlkKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgaG93IG11Y2ggZGF0YSBjYW4gYmUgc3RvcmVkIHdpdGggdGhlIHNwZWNpZmllZCBRUiBjb2RlIHZlcnNpb25cbiAgICAgKiBhbmQgZXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb24gKDEtNDApXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gICAgICogQHBhcmFtICB7TW9kZX0gICBtb2RlICAgICAgICAgICAgICAgICBEYXRhIG1vZGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgIFF1YW50aXR5IG9mIHN0b3JhYmxlIGRhdGFcbiAgICAgKi9cbiAgICBleHBvcnRzLmdldENhcGFjaXR5ID0gZnVuY3Rpb24gZ2V0Q2FwYWNpdHkodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1vZGUkMSkge1xuICAgICAgICBpZiAoIXZlcnNpb25DaGVjay5pc1ZhbGlkKHZlcnNpb24pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUVIgQ29kZSB2ZXJzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXNlIEJ5dGUgbW9kZSBhcyBkZWZhdWx0XG4gICAgICAgIGlmICh0eXBlb2YgbW9kZSQxID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIG1vZGUkMSA9IG1vZGUuQllURTtcbiAgICAgICAgLy8gVG90YWwgY29kZXdvcmRzIGZvciB0aGlzIFFSIGNvZGUgdmVyc2lvbiAoRGF0YSArIEVycm9yIGNvcnJlY3Rpb24pXG4gICAgICAgIHZhciB0b3RhbENvZGV3b3JkcyA9IHV0aWxzLmdldFN5bWJvbFRvdGFsQ29kZXdvcmRzKHZlcnNpb24pO1xuICAgICAgICAvLyBUb3RhbCBudW1iZXIgb2YgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHNcbiAgICAgICAgdmFyIGVjVG90YWxDb2Rld29yZHMgPSBlcnJvckNvcnJlY3Rpb25Db2RlLmdldFRvdGFsQ29kZXdvcmRzQ291bnQodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpO1xuICAgICAgICAvLyBUb3RhbCBudW1iZXIgb2YgZGF0YSBjb2Rld29yZHNcbiAgICAgICAgdmFyIGRhdGFUb3RhbENvZGV3b3Jkc0JpdHMgPSAodG90YWxDb2Rld29yZHMgLSBlY1RvdGFsQ29kZXdvcmRzKSAqIDg7XG4gICAgICAgIGlmIChtb2RlJDEgPT09IG1vZGUuTUlYRUQpXG4gICAgICAgICAgICByZXR1cm4gZGF0YVRvdGFsQ29kZXdvcmRzQml0cztcbiAgICAgICAgdmFyIHVzYWJsZUJpdHMgPSBkYXRhVG90YWxDb2Rld29yZHNCaXRzIC0gZ2V0UmVzZXJ2ZWRCaXRzQ291bnQobW9kZSQxLCB2ZXJzaW9uKTtcbiAgICAgICAgLy8gUmV0dXJuIG1heCBudW1iZXIgb2Ygc3RvcmFibGUgY29kZXdvcmRzXG4gICAgICAgIHN3aXRjaCAobW9kZSQxKSB7XG4gICAgICAgICAgICBjYXNlIG1vZGUuTlVNRVJJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigodXNhYmxlQml0cyAvIDEwKSAqIDMpO1xuICAgICAgICAgICAgY2FzZSBtb2RlLkFMUEhBTlVNRVJJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigodXNhYmxlQml0cyAvIDExKSAqIDIpO1xuICAgICAgICAgICAgY2FzZSBtb2RlLktBTkpJOlxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHVzYWJsZUJpdHMgLyAxMyk7XG4gICAgICAgICAgICBjYXNlIG1vZGUuQllURTpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodXNhYmxlQml0cyAvIDgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtaW5pbXVtIHZlcnNpb24gbmVlZGVkIHRvIGNvbnRhaW4gdGhlIGFtb3VudCBvZiBkYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTZWdtZW50fSBkYXRhICAgICAgICAgICAgICAgICAgICBTZWdtZW50IG9mIGRhdGFcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IFtlcnJvckNvcnJlY3Rpb25MZXZlbD1IXSBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gICAgICogQHBhcmFtICB7TW9kZX0gbW9kZSAgICAgICAgICAgICAgICAgICAgICAgRGF0YSBtb2RlXG4gICAgICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgICAgICAgICAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXG4gICAgICovXG4gICAgZXhwb3J0cy5nZXRCZXN0VmVyc2lvbkZvckRhdGEgPSBmdW5jdGlvbiBnZXRCZXN0VmVyc2lvbkZvckRhdGEoZGF0YSwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwkMSkge1xuICAgICAgICB2YXIgc2VnO1xuICAgICAgICB2YXIgZWNsID0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwuZnJvbShlcnJvckNvcnJlY3Rpb25MZXZlbCQxLCBlcnJvckNvcnJlY3Rpb25MZXZlbC5NKTtcbiAgICAgICAgaWYgKGlzYXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QmVzdFZlcnNpb25Gb3JNaXhlZERhdGEoZGF0YSwgZWNsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VnID0gZGF0YVswXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlZyA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldEJlc3RWZXJzaW9uRm9yRGF0YUxlbmd0aChzZWcubW9kZSwgc2VnLmdldExlbmd0aCgpLCBlY2wpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB2ZXJzaW9uIGluZm9ybWF0aW9uIHdpdGggcmVsYXRpdmUgZXJyb3IgY29ycmVjdGlvbiBiaXRzXG4gICAgICpcbiAgICAgKiBUaGUgdmVyc2lvbiBpbmZvcm1hdGlvbiBpcyBpbmNsdWRlZCBpbiBRUiBDb2RlIHN5bWJvbHMgb2YgdmVyc2lvbiA3IG9yIGxhcmdlci5cbiAgICAgKiBJdCBjb25zaXN0cyBvZiBhbiAxOC1iaXQgc2VxdWVuY2UgY29udGFpbmluZyA2IGRhdGEgYml0cyxcbiAgICAgKiB3aXRoIDEyIGVycm9yIGNvcnJlY3Rpb24gYml0cyBjYWxjdWxhdGVkIHVzaW5nIHRoZSAoMTgsIDYpIEdvbGF5IGNvZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgIEVuY29kZWQgdmVyc2lvbiBpbmZvIGJpdHNcbiAgICAgKi9cbiAgICBleHBvcnRzLmdldEVuY29kZWRCaXRzID0gZnVuY3Rpb24gZ2V0RW5jb2RlZEJpdHModmVyc2lvbikge1xuICAgICAgICBpZiAoIXZlcnNpb25DaGVjay5pc1ZhbGlkKHZlcnNpb24pIHx8IHZlcnNpb24gPCA3KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUVIgQ29kZSB2ZXJzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGQgPSB2ZXJzaW9uIDw8IDEyO1xuICAgICAgICB3aGlsZSAodXRpbHMuZ2V0QkNIRGlnaXQoZCkgLSBHMThfQkNIID49IDApIHtcbiAgICAgICAgICAgIGQgXj0gKEcxOCA8PCAodXRpbHMuZ2V0QkNIRGlnaXQoZCkgLSBHMThfQkNIKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICh2ZXJzaW9uIDw8IDEyKSB8IGQ7XG4gICAgfTtcbn0pO1xudmFyIEcxNSA9ICgxIDw8IDEwKSB8ICgxIDw8IDgpIHwgKDEgPDwgNSkgfCAoMSA8PCA0KSB8ICgxIDw8IDIpIHwgKDEgPDwgMSkgfCAoMSA8PCAwKTtcbnZhciBHMTVfTUFTSyA9ICgxIDw8IDE0KSB8ICgxIDw8IDEyKSB8ICgxIDw8IDEwKSB8ICgxIDw8IDQpIHwgKDEgPDwgMSk7XG52YXIgRzE1X0JDSCA9IHV0aWxzLmdldEJDSERpZ2l0KEcxNSk7XG4vKipcbiAqIFJldHVybnMgZm9ybWF0IGluZm9ybWF0aW9uIHdpdGggcmVsYXRpdmUgZXJyb3IgY29ycmVjdGlvbiBiaXRzXG4gKlxuICogVGhlIGZvcm1hdCBpbmZvcm1hdGlvbiBpcyBhIDE1LWJpdCBzZXF1ZW5jZSBjb250YWluaW5nIDUgZGF0YSBiaXRzLFxuICogd2l0aCAxMCBlcnJvciBjb3JyZWN0aW9uIGJpdHMgY2FsY3VsYXRlZCB1c2luZyB0aGUgKDE1LCA1KSBCQ0ggY29kZS5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEBwYXJhbSAge051bWJlcn0gbWFzayAgICAgICAgICAgICAgICAgTWFzayBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgIEVuY29kZWQgZm9ybWF0IGluZm9ybWF0aW9uIGJpdHNcbiAqL1xudmFyIGdldEVuY29kZWRCaXRzID0gZnVuY3Rpb24gZ2V0RW5jb2RlZEJpdHMoZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1hc2spIHtcbiAgICB2YXIgZGF0YSA9ICgoZXJyb3JDb3JyZWN0aW9uTGV2ZWwuYml0IDw8IDMpIHwgbWFzayk7XG4gICAgdmFyIGQgPSBkYXRhIDw8IDEwO1xuICAgIHdoaWxlICh1dGlscy5nZXRCQ0hEaWdpdChkKSAtIEcxNV9CQ0ggPj0gMCkge1xuICAgICAgICBkIF49IChHMTUgPDwgKHV0aWxzLmdldEJDSERpZ2l0KGQpIC0gRzE1X0JDSCkpO1xuICAgIH1cbiAgICAvLyB4b3IgZmluYWwgZGF0YSB3aXRoIG1hc2sgcGF0dGVybiBpbiBvcmRlciB0byBlbnN1cmUgdGhhdFxuICAgIC8vIG5vIGNvbWJpbmF0aW9uIG9mIEVycm9yIENvcnJlY3Rpb24gTGV2ZWwgYW5kIGRhdGEgbWFzayBwYXR0ZXJuXG4gICAgLy8gd2lsbCByZXN1bHQgaW4gYW4gYWxsLXplcm8gZGF0YSBzdHJpbmdcbiAgICByZXR1cm4gKChkYXRhIDw8IDEwKSB8IGQpIF4gRzE1X01BU0s7XG59O1xudmFyIGZvcm1hdEluZm8gPSB7XG4gICAgZ2V0RW5jb2RlZEJpdHM6IGdldEVuY29kZWRCaXRzXG59O1xuZnVuY3Rpb24gTnVtZXJpY0RhdGEoZGF0YSkge1xuICAgIHRoaXMubW9kZSA9IG1vZGUuTlVNRVJJQztcbiAgICB0aGlzLmRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG59XG5OdW1lcmljRGF0YS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aChsZW5ndGgpIHtcbiAgICByZXR1cm4gMTAgKiBNYXRoLmZsb29yKGxlbmd0aCAvIDMpICsgKChsZW5ndGggJSAzKSA/ICgobGVuZ3RoICUgMykgKiAzICsgMSkgOiAwKTtcbn07XG5OdW1lcmljRGF0YS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoO1xufTtcbk51bWVyaWNEYXRhLnByb3RvdHlwZS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aCgpIHtcbiAgICByZXR1cm4gTnVtZXJpY0RhdGEuZ2V0Qml0c0xlbmd0aCh0aGlzLmRhdGEubGVuZ3RoKTtcbn07XG5OdW1lcmljRGF0YS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZShiaXRCdWZmZXIpIHtcbiAgICB2YXIgaSwgZ3JvdXAsIHZhbHVlO1xuICAgIC8vIFRoZSBpbnB1dCBkYXRhIHN0cmluZyBpcyBkaXZpZGVkIGludG8gZ3JvdXBzIG9mIHRocmVlIGRpZ2l0cyxcbiAgICAvLyBhbmQgZWFjaCBncm91cCBpcyBjb252ZXJ0ZWQgdG8gaXRzIDEwLWJpdCBiaW5hcnkgZXF1aXZhbGVudC5cbiAgICBmb3IgKGkgPSAwOyBpICsgMyA8PSB0aGlzLmRhdGEubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgZ3JvdXAgPSB0aGlzLmRhdGEuc3Vic3RyKGksIDMpO1xuICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KGdyb3VwLCAxMCk7XG4gICAgICAgIGJpdEJ1ZmZlci5wdXQodmFsdWUsIDEwKTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIG51bWJlciBvZiBpbnB1dCBkaWdpdHMgaXMgbm90IGFuIGV4YWN0IG11bHRpcGxlIG9mIHRocmVlLFxuICAgIC8vIHRoZSBmaW5hbCBvbmUgb3IgdHdvIGRpZ2l0cyBhcmUgY29udmVydGVkIHRvIDQgb3IgNyBiaXRzIHJlc3BlY3RpdmVseS5cbiAgICB2YXIgcmVtYWluaW5nTnVtID0gdGhpcy5kYXRhLmxlbmd0aCAtIGk7XG4gICAgaWYgKHJlbWFpbmluZ051bSA+IDApIHtcbiAgICAgICAgZ3JvdXAgPSB0aGlzLmRhdGEuc3Vic3RyKGkpO1xuICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KGdyb3VwLCAxMCk7XG4gICAgICAgIGJpdEJ1ZmZlci5wdXQodmFsdWUsIHJlbWFpbmluZ051bSAqIDMgKyAxKTtcbiAgICB9XG59O1xudmFyIG51bWVyaWNEYXRhID0gTnVtZXJpY0RhdGE7XG4vKipcbiAqIEFycmF5IG9mIGNoYXJhY3RlcnMgYXZhaWxhYmxlIGluIGFscGhhbnVtZXJpYyBtb2RlXG4gKlxuICogQXMgcGVyIFFSIENvZGUgc3BlY2lmaWNhdGlvbiwgdG8gZWFjaCBjaGFyYWN0ZXJcbiAqIGlzIGFzc2lnbmVkIGEgdmFsdWUgZnJvbSAwIHRvIDQ0IHdoaWNoIGluIHRoaXMgY2FzZSBjb2luY2lkZXNcbiAqIHdpdGggdGhlIGFycmF5IGluZGV4XG4gKlxuICogQHR5cGUge0FycmF5fVxuICovXG52YXIgQUxQSEFfTlVNX0NIQVJTID0gW1xuICAgICcwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JyxcbiAgICAnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSicsICdLJywgJ0wnLCAnTScsXG4gICAgJ04nLCAnTycsICdQJywgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgJ1cnLCAnWCcsICdZJywgJ1onLFxuICAgICcgJywgJyQnLCAnJScsICcqJywgJysnLCAnLScsICcuJywgJy8nLCAnOidcbl07XG5mdW5jdGlvbiBBbHBoYW51bWVyaWNEYXRhKGRhdGEpIHtcbiAgICB0aGlzLm1vZGUgPSBtb2RlLkFMUEhBTlVNRVJJQztcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xufVxuQWxwaGFudW1lcmljRGF0YS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aChsZW5ndGgpIHtcbiAgICByZXR1cm4gMTEgKiBNYXRoLmZsb29yKGxlbmd0aCAvIDIpICsgNiAqIChsZW5ndGggJSAyKTtcbn07XG5BbHBoYW51bWVyaWNEYXRhLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XG59O1xuQWxwaGFudW1lcmljRGF0YS5wcm90b3R5cGUuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGgoKSB7XG4gICAgcmV0dXJuIEFscGhhbnVtZXJpY0RhdGEuZ2V0Qml0c0xlbmd0aCh0aGlzLmRhdGEubGVuZ3RoKTtcbn07XG5BbHBoYW51bWVyaWNEYXRhLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlKGJpdEJ1ZmZlcikge1xuICAgIHZhciBpO1xuICAgIC8vIElucHV0IGRhdGEgY2hhcmFjdGVycyBhcmUgZGl2aWRlZCBpbnRvIGdyb3VwcyBvZiB0d28gY2hhcmFjdGVyc1xuICAgIC8vIGFuZCBlbmNvZGVkIGFzIDExLWJpdCBiaW5hcnkgY29kZXMuXG4gICAgZm9yIChpID0gMDsgaSArIDIgPD0gdGhpcy5kYXRhLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIC8vIFRoZSBjaGFyYWN0ZXIgdmFsdWUgb2YgdGhlIGZpcnN0IGNoYXJhY3RlciBpcyBtdWx0aXBsaWVkIGJ5IDQ1XG4gICAgICAgIHZhciB2YWx1ZSA9IEFMUEhBX05VTV9DSEFSUy5pbmRleE9mKHRoaXMuZGF0YVtpXSkgKiA0NTtcbiAgICAgICAgLy8gVGhlIGNoYXJhY3RlciB2YWx1ZSBvZiB0aGUgc2Vjb25kIGRpZ2l0IGlzIGFkZGVkIHRvIHRoZSBwcm9kdWN0XG4gICAgICAgIHZhbHVlICs9IEFMUEhBX05VTV9DSEFSUy5pbmRleE9mKHRoaXMuZGF0YVtpICsgMV0pO1xuICAgICAgICAvLyBUaGUgc3VtIGlzIHRoZW4gc3RvcmVkIGFzIDExLWJpdCBiaW5hcnkgbnVtYmVyXG4gICAgICAgIGJpdEJ1ZmZlci5wdXQodmFsdWUsIDExKTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIG51bWJlciBvZiBpbnB1dCBkYXRhIGNoYXJhY3RlcnMgaXMgbm90IGEgbXVsdGlwbGUgb2YgdHdvLFxuICAgIC8vIHRoZSBjaGFyYWN0ZXIgdmFsdWUgb2YgdGhlIGZpbmFsIGNoYXJhY3RlciBpcyBlbmNvZGVkIGFzIGEgNi1iaXQgYmluYXJ5IG51bWJlci5cbiAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCAlIDIpIHtcbiAgICAgICAgYml0QnVmZmVyLnB1dChBTFBIQV9OVU1fQ0hBUlMuaW5kZXhPZih0aGlzLmRhdGFbaV0pLCA2KTtcbiAgICB9XG59O1xudmFyIGFscGhhbnVtZXJpY0RhdGEgPSBBbHBoYW51bWVyaWNEYXRhO1xuZnVuY3Rpb24gQnl0ZURhdGEoZGF0YSkge1xuICAgIHRoaXMubW9kZSA9IG1vZGUuQllURTtcbiAgICB0aGlzLmRhdGEgPSB0eXBlZGFycmF5QnVmZmVyLmZyb20oZGF0YSk7XG59XG5CeXRlRGF0YS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aChsZW5ndGgpIHtcbiAgICByZXR1cm4gbGVuZ3RoICogODtcbn07XG5CeXRlRGF0YS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoO1xufTtcbkJ5dGVEYXRhLnByb3RvdHlwZS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aCgpIHtcbiAgICByZXR1cm4gQnl0ZURhdGEuZ2V0Qml0c0xlbmd0aCh0aGlzLmRhdGEubGVuZ3RoKTtcbn07XG5CeXRlRGF0YS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoYml0QnVmZmVyKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGJpdEJ1ZmZlci5wdXQodGhpcy5kYXRhW2ldLCA4KTtcbiAgICB9XG59O1xudmFyIGJ5dGVEYXRhID0gQnl0ZURhdGE7XG5mdW5jdGlvbiBLYW5qaURhdGEoZGF0YSkge1xuICAgIHRoaXMubW9kZSA9IG1vZGUuS0FOSkk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbn1cbkthbmppRGF0YS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aChsZW5ndGgpIHtcbiAgICByZXR1cm4gbGVuZ3RoICogMTM7XG59O1xuS2FuamlEYXRhLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XG59O1xuS2FuamlEYXRhLnByb3RvdHlwZS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aCgpIHtcbiAgICByZXR1cm4gS2FuamlEYXRhLmdldEJpdHNMZW5ndGgodGhpcy5kYXRhLmxlbmd0aCk7XG59O1xuS2FuamlEYXRhLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChiaXRCdWZmZXIpIHtcbiAgICB2YXIgaTtcbiAgICAvLyBJbiB0aGUgU2hpZnQgSklTIHN5c3RlbSwgS2FuamkgY2hhcmFjdGVycyBhcmUgcmVwcmVzZW50ZWQgYnkgYSB0d28gYnl0ZSBjb21iaW5hdGlvbi5cbiAgICAvLyBUaGVzZSBieXRlIHZhbHVlcyBhcmUgc2hpZnRlZCBmcm9tIHRoZSBKSVMgWCAwMjA4IHZhbHVlcy5cbiAgICAvLyBKSVMgWCAwMjA4IGdpdmVzIGRldGFpbHMgb2YgdGhlIHNoaWZ0IGNvZGVkIHJlcHJlc2VudGF0aW9uLlxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdXRpbHMudG9TSklTKHRoaXMuZGF0YVtpXSk7XG4gICAgICAgIC8vIEZvciBjaGFyYWN0ZXJzIHdpdGggU2hpZnQgSklTIHZhbHVlcyBmcm9tIDB4ODE0MCB0byAweDlGRkM6XG4gICAgICAgIGlmICh2YWx1ZSA+PSAweDgxNDAgJiYgdmFsdWUgPD0gMHg5RkZDKSB7XG4gICAgICAgICAgICAvLyBTdWJ0cmFjdCAweDgxNDAgZnJvbSBTaGlmdCBKSVMgdmFsdWVcbiAgICAgICAgICAgIHZhbHVlIC09IDB4ODE0MDtcbiAgICAgICAgICAgIC8vIEZvciBjaGFyYWN0ZXJzIHdpdGggU2hpZnQgSklTIHZhbHVlcyBmcm9tIDB4RTA0MCB0byAweEVCQkZcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA+PSAweEUwNDAgJiYgdmFsdWUgPD0gMHhFQkJGKSB7XG4gICAgICAgICAgICAvLyBTdWJ0cmFjdCAweEMxNDAgZnJvbSBTaGlmdCBKSVMgdmFsdWVcbiAgICAgICAgICAgIHZhbHVlIC09IDB4QzE0MDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBTSklTIGNoYXJhY3RlcjogJyArIHRoaXMuZGF0YVtpXSArICdcXG4nICtcbiAgICAgICAgICAgICAgICAnTWFrZSBzdXJlIHlvdXIgY2hhcnNldCBpcyBVVEYtOCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE11bHRpcGx5IG1vc3Qgc2lnbmlmaWNhbnQgYnl0ZSBvZiByZXN1bHQgYnkgMHhDMFxuICAgICAgICAvLyBhbmQgYWRkIGxlYXN0IHNpZ25pZmljYW50IGJ5dGUgdG8gcHJvZHVjdFxuICAgICAgICB2YWx1ZSA9ICgoKHZhbHVlID4+PiA4KSAmIDB4ZmYpICogMHhDMCkgKyAodmFsdWUgJiAweGZmKTtcbiAgICAgICAgLy8gQ29udmVydCByZXN1bHQgdG8gYSAxMy1iaXQgYmluYXJ5IHN0cmluZ1xuICAgICAgICBiaXRCdWZmZXIucHV0KHZhbHVlLCAxMyk7XG4gICAgfVxufTtcbnZhciBrYW5qaURhdGEgPSBLYW5qaURhdGE7XG52YXIgZGlqa3N0cmFfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogQ3JlYXRlZCAyMDA4LTA4LTE5LlxuICAgICAqXG4gICAgICogRGlqa3N0cmEgcGF0aC1maW5kaW5nIGZ1bmN0aW9ucy4gQWRhcHRlZCBmcm9tIHRoZSBEaWprc3RhciBQeXRob24gcHJvamVjdC5cbiAgICAgKlxuICAgICAqIENvcHlyaWdodCAoQykgMjAwOFxuICAgICAqICAgV3lhdHQgQmFsZHdpbiA8c2VsZkB3eWF0dGJhbGR3aW4uY29tPlxuICAgICAqICAgQWxsIHJpZ2h0cyByZXNlcnZlZFxuICAgICAqXG4gICAgICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICAgICAqXG4gICAgICogICBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICAgICAqXG4gICAgICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICAgICAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICAgICAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICAgICAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgICAgKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICAgICAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAgICAgKiBUSEUgU09GVFdBUkUuXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHZhciBkaWprc3RyYSA9IHtcbiAgICAgICAgc2luZ2xlX3NvdXJjZV9zaG9ydGVzdF9wYXRoczogZnVuY3Rpb24gKGdyYXBoLCBzLCBkKSB7XG4gICAgICAgICAgICAvLyBQcmVkZWNlc3NvciBtYXAgZm9yIGVhY2ggbm9kZSB0aGF0IGhhcyBiZWVuIGVuY291bnRlcmVkLlxuICAgICAgICAgICAgLy8gbm9kZSBJRCA9PiBwcmVkZWNlc3NvciBub2RlIElEXG4gICAgICAgICAgICB2YXIgcHJlZGVjZXNzb3JzID0ge307XG4gICAgICAgICAgICAvLyBDb3N0cyBvZiBzaG9ydGVzdCBwYXRocyBmcm9tIHMgdG8gYWxsIG5vZGVzIGVuY291bnRlcmVkLlxuICAgICAgICAgICAgLy8gbm9kZSBJRCA9PiBjb3N0XG4gICAgICAgICAgICB2YXIgY29zdHMgPSB7fTtcbiAgICAgICAgICAgIGNvc3RzW3NdID0gMDtcbiAgICAgICAgICAgIC8vIENvc3RzIG9mIHNob3J0ZXN0IHBhdGhzIGZyb20gcyB0byBhbGwgbm9kZXMgZW5jb3VudGVyZWQ7IGRpZmZlcnMgZnJvbVxuICAgICAgICAgICAgLy8gYGNvc3RzYCBpbiB0aGF0IGl0IHByb3ZpZGVzIGVhc3kgYWNjZXNzIHRvIHRoZSBub2RlIHRoYXQgY3VycmVudGx5IGhhc1xuICAgICAgICAgICAgLy8gdGhlIGtub3duIHNob3J0ZXN0IHBhdGggZnJvbSBzLlxuICAgICAgICAgICAgLy8gWFhYOiBEbyB3ZSBhY3R1YWxseSBuZWVkIGJvdGggYGNvc3RzYCBhbmQgYG9wZW5gP1xuICAgICAgICAgICAgdmFyIG9wZW4gPSBkaWprc3RyYS5Qcmlvcml0eVF1ZXVlLm1ha2UoKTtcbiAgICAgICAgICAgIG9wZW4ucHVzaChzLCAwKTtcbiAgICAgICAgICAgIHZhciBjbG9zZXN0LCB1LCB2LCBjb3N0X29mX3NfdG9fdSwgYWRqYWNlbnRfbm9kZXMsIGNvc3Rfb2ZfZSwgY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2UsIGNvc3Rfb2Zfc190b192LCBmaXJzdF92aXNpdDtcbiAgICAgICAgICAgIHdoaWxlICghb3Blbi5lbXB0eSgpKSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIG5vZGVzIHJlbWFpbmluZyBpbiBncmFwaCB0aGF0IGhhdmUgYSBrbm93biBjb3N0IGZyb20gcyxcbiAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBub2RlLCB1LCB0aGF0IGN1cnJlbnRseSBoYXMgdGhlIHNob3J0ZXN0IHBhdGggZnJvbSBzLlxuICAgICAgICAgICAgICAgIGNsb3Nlc3QgPSBvcGVuLnBvcCgpO1xuICAgICAgICAgICAgICAgIHUgPSBjbG9zZXN0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvc3Rfb2Zfc190b191ID0gY2xvc2VzdC5jb3N0O1xuICAgICAgICAgICAgICAgIC8vIEdldCBub2RlcyBhZGphY2VudCB0byB1Li4uXG4gICAgICAgICAgICAgICAgYWRqYWNlbnRfbm9kZXMgPSBncmFwaFt1XSB8fCB7fTtcbiAgICAgICAgICAgICAgICAvLyAuLi5hbmQgZXhwbG9yZSB0aGUgZWRnZXMgdGhhdCBjb25uZWN0IHUgdG8gdGhvc2Ugbm9kZXMsIHVwZGF0aW5nXG4gICAgICAgICAgICAgICAgLy8gdGhlIGNvc3Qgb2YgdGhlIHNob3J0ZXN0IHBhdGhzIHRvIGFueSBvciBhbGwgb2YgdGhvc2Ugbm9kZXMgYXNcbiAgICAgICAgICAgICAgICAvLyBuZWNlc3NhcnkuIHYgaXMgdGhlIG5vZGUgYWNyb3NzIHRoZSBjdXJyZW50IGVkZ2UgZnJvbSB1LlxuICAgICAgICAgICAgICAgIGZvciAodiBpbiBhZGphY2VudF9ub2Rlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWRqYWNlbnRfbm9kZXMuaGFzT3duUHJvcGVydHkodikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY29zdCBvZiB0aGUgZWRnZSBydW5uaW5nIGZyb20gdSB0byB2LlxuICAgICAgICAgICAgICAgICAgICAgICAgY29zdF9vZl9lID0gYWRqYWNlbnRfbm9kZXNbdl07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb3N0IG9mIHMgdG8gdSBwbHVzIHRoZSBjb3N0IG9mIHUgdG8gdiBhY3Jvc3MgZS0tdGhpcyBpcyAqYSpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvc3QgZnJvbSBzIHRvIHYgdGhhdCBtYXkgb3IgbWF5IG5vdCBiZSBsZXNzIHRoYW4gdGhlIGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtub3duIGNvc3QgdG8gdi5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvc3Rfb2Zfc190b191X3BsdXNfY29zdF9vZl9lID0gY29zdF9vZl9zX3RvX3UgKyBjb3N0X29mX2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlbid0IHZpc2l0ZWQgdiB5ZXQgT1IgaWYgdGhlIGN1cnJlbnQga25vd24gY29zdCBmcm9tIHMgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHYgaXMgZ3JlYXRlciB0aGFuIHRoZSBuZXcgY29zdCB3ZSBqdXN0IGZvdW5kIChjb3N0IG9mIHMgdG8gdSBwbHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb3N0IG9mIHUgdG8gdiBhY3Jvc3MgZSksIHVwZGF0ZSB2J3MgY29zdCBpbiB0aGUgY29zdCBsaXN0IGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHYncyBwcmVkZWNlc3NvciBpbiB0aGUgcHJlZGVjZXNzb3IgbGlzdCAoaXQncyBub3cgdSkuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3N0X29mX3NfdG9fdiA9IGNvc3RzW3ZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfdmlzaXQgPSAodHlwZW9mIGNvc3RzW3ZdID09PSAndW5kZWZpbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3RfdmlzaXQgfHwgY29zdF9vZl9zX3RvX3YgPiBjb3N0X29mX3NfdG9fdV9wbHVzX2Nvc3Rfb2ZfZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvc3RzW3ZdID0gY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbi5wdXNoKHYsIGNvc3Rfb2Zfc190b191X3BsdXNfY29zdF9vZl9lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkZWNlc3NvcnNbdl0gPSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29zdHNbZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1zZyA9IFsnQ291bGQgbm90IGZpbmQgYSBwYXRoIGZyb20gJywgcywgJyB0byAnLCBkLCAnLiddLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByZWRlY2Vzc29ycztcbiAgICAgICAgfSxcbiAgICAgICAgZXh0cmFjdF9zaG9ydGVzdF9wYXRoX2Zyb21fcHJlZGVjZXNzb3JfbGlzdDogZnVuY3Rpb24gKHByZWRlY2Vzc29ycywgZCkge1xuICAgICAgICAgICAgdmFyIG5vZGVzID0gW107XG4gICAgICAgICAgICB2YXIgdSA9IGQ7XG4gICAgICAgICAgICB3aGlsZSAodSkge1xuICAgICAgICAgICAgICAgIG5vZGVzLnB1c2godSk7XG4gICAgICAgICAgICAgICAgdSA9IHByZWRlY2Vzc29yc1t1XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGVzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgfSxcbiAgICAgICAgZmluZF9wYXRoOiBmdW5jdGlvbiAoZ3JhcGgsIHMsIGQpIHtcbiAgICAgICAgICAgIHZhciBwcmVkZWNlc3NvcnMgPSBkaWprc3RyYS5zaW5nbGVfc291cmNlX3Nob3J0ZXN0X3BhdGhzKGdyYXBoLCBzLCBkKTtcbiAgICAgICAgICAgIHJldHVybiBkaWprc3RyYS5leHRyYWN0X3Nob3J0ZXN0X3BhdGhfZnJvbV9wcmVkZWNlc3Nvcl9saXN0KHByZWRlY2Vzc29ycywgZCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHZlcnkgbmFpdmUgcHJpb3JpdHkgcXVldWUgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICBQcmlvcml0eVF1ZXVlOiB7XG4gICAgICAgICAgICBtYWtlOiBmdW5jdGlvbiAob3B0cykge1xuICAgICAgICAgICAgICAgIHZhciBUID0gZGlqa3N0cmEuUHJpb3JpdHlRdWV1ZSwgdCA9IHt9LCBrZXk7XG4gICAgICAgICAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgICAgICAgICAgZm9yIChrZXkgaW4gVCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoVC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0W2tleV0gPSBUW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdC5xdWV1ZSA9IFtdO1xuICAgICAgICAgICAgICAgIHQuc29ydGVyID0gb3B0cy5zb3J0ZXIgfHwgVC5kZWZhdWx0X3NvcnRlcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWZhdWx0X3NvcnRlcjogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5jb3N0IC0gYi5jb3N0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQWRkIGEgbmV3IGl0ZW0gdG8gdGhlIHF1ZXVlIGFuZCBlbnN1cmUgdGhlIGhpZ2hlc3QgcHJpb3JpdHkgZWxlbWVudFxuICAgICAgICAgICAgICogaXMgYXQgdGhlIGZyb250IG9mIHRoZSBxdWV1ZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcHVzaDogZnVuY3Rpb24gKHZhbHVlLCBjb3N0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7IHZhbHVlOiB2YWx1ZSwgY29zdDogY29zdCB9O1xuICAgICAgICAgICAgICAgIHRoaXMucXVldWUucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlLnNvcnQodGhpcy5zb3J0ZXIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV0dXJuIHRoZSBoaWdoZXN0IHByaW9yaXR5IGVsZW1lbnQgaW4gdGhlIHF1ZXVlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwb3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5xdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVtcHR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVldWUubGVuZ3RoID09PSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBub2RlLmpzIG1vZHVsZSBleHBvcnRzXG4gICAge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGRpamtzdHJhO1xuICAgIH1cbn0pO1xudmFyIHNlZ21lbnRzID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgVVRGOCBieXRlIGxlbmd0aFxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBzdHIgSW5wdXQgc3RyaW5nXG4gICAgICogQHJldHVybiB7TnVtYmVyfSAgICAgTnVtYmVyIG9mIGJ5dGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRTdHJpbmdCeXRlTGVuZ3RoKHN0cikge1xuICAgICAgICByZXR1cm4gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpLmxlbmd0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGEgbGlzdCBvZiBzZWdtZW50cyBvZiB0aGUgc3BlY2lmaWVkIG1vZGVcbiAgICAgKiBmcm9tIGEgc3RyaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtNb2RlfSAgIG1vZGUgU2VnbWVudCBtb2RlXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBzdHIgIFN0cmluZyB0byBwcm9jZXNzXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgICAgIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRTZWdtZW50cyhyZWdleCwgbW9kZSwgc3RyKSB7XG4gICAgICAgIHZhciBzZWdtZW50cyA9IFtdO1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB3aGlsZSAoKHJlc3VsdCA9IHJlZ2V4LmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHNlZ21lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdFswXSxcbiAgICAgICAgICAgICAgICBpbmRleDogcmVzdWx0LmluZGV4LFxuICAgICAgICAgICAgICAgIG1vZGU6IG1vZGUsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiByZXN1bHRbMF0ubGVuZ3RoXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VnbWVudHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIGEgc2VyaWVzIG9mIHNlZ21lbnRzIHdpdGggdGhlIGFwcHJvcHJpYXRlXG4gICAgICogbW9kZXMgZnJvbSBhIHN0cmluZ1xuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBkYXRhU3RyIElucHV0IHN0cmluZ1xuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0U2VnbWVudHNGcm9tU3RyaW5nKGRhdGFTdHIpIHtcbiAgICAgICAgdmFyIG51bVNlZ3MgPSBnZXRTZWdtZW50cyhyZWdleC5OVU1FUklDLCBtb2RlLk5VTUVSSUMsIGRhdGFTdHIpO1xuICAgICAgICB2YXIgYWxwaGFOdW1TZWdzID0gZ2V0U2VnbWVudHMocmVnZXguQUxQSEFOVU1FUklDLCBtb2RlLkFMUEhBTlVNRVJJQywgZGF0YVN0cik7XG4gICAgICAgIHZhciBieXRlU2VncztcbiAgICAgICAgdmFyIGthbmppU2VncztcbiAgICAgICAgaWYgKHV0aWxzLmlzS2FuamlNb2RlRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICBieXRlU2VncyA9IGdldFNlZ21lbnRzKHJlZ2V4LkJZVEUsIG1vZGUuQllURSwgZGF0YVN0cik7XG4gICAgICAgICAgICBrYW5qaVNlZ3MgPSBnZXRTZWdtZW50cyhyZWdleC5LQU5KSSwgbW9kZS5LQU5KSSwgZGF0YVN0cik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBieXRlU2VncyA9IGdldFNlZ21lbnRzKHJlZ2V4LkJZVEVfS0FOSkksIG1vZGUuQllURSwgZGF0YVN0cik7XG4gICAgICAgICAgICBrYW5qaVNlZ3MgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VncyA9IG51bVNlZ3MuY29uY2F0KGFscGhhTnVtU2VncywgYnl0ZVNlZ3MsIGthbmppU2Vncyk7XG4gICAgICAgIHJldHVybiBzZWdzXG4gICAgICAgICAgICAuc29ydChmdW5jdGlvbiAoczEsIHMyKSB7XG4gICAgICAgICAgICByZXR1cm4gczEuaW5kZXggLSBzMi5pbmRleDtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhOiBvYmouZGF0YSxcbiAgICAgICAgICAgICAgICBtb2RlOiBvYmoubW9kZSxcbiAgICAgICAgICAgICAgICBsZW5ndGg6IG9iai5sZW5ndGhcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGhvdyBtYW55IGJpdHMgYXJlIG5lZWRlZCB0byBlbmNvZGUgYSBzdHJpbmcgb2ZcbiAgICAgKiBzcGVjaWZpZWQgbGVuZ3RoIHdpdGggdGhlIHNwZWNpZmllZCBtb2RlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGxlbmd0aCBTdHJpbmcgbGVuZ3RoXG4gICAgICogQHBhcmFtICB7TW9kZX0gbW9kZSAgICAgU2VnbWVudCBtb2RlXG4gICAgICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgQml0IGxlbmd0aFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFNlZ21lbnRCaXRzTGVuZ3RoKGxlbmd0aCwgbW9kZSQxKSB7XG4gICAgICAgIHN3aXRjaCAobW9kZSQxKSB7XG4gICAgICAgICAgICBjYXNlIG1vZGUuTlVNRVJJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtZXJpY0RhdGEuZ2V0Qml0c0xlbmd0aChsZW5ndGgpO1xuICAgICAgICAgICAgY2FzZSBtb2RlLkFMUEhBTlVNRVJJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxwaGFudW1lcmljRGF0YS5nZXRCaXRzTGVuZ3RoKGxlbmd0aCk7XG4gICAgICAgICAgICBjYXNlIG1vZGUuS0FOSkk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGthbmppRGF0YS5nZXRCaXRzTGVuZ3RoKGxlbmd0aCk7XG4gICAgICAgICAgICBjYXNlIG1vZGUuQllURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gYnl0ZURhdGEuZ2V0Qml0c0xlbmd0aChsZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1lcmdlcyBhZGphY2VudCBzZWdtZW50cyB3aGljaCBoYXZlIHRoZSBzYW1lIG1vZGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0FycmF5fSBzZWdzIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gICAgICovXG4gICAgZnVuY3Rpb24gbWVyZ2VTZWdtZW50cyhzZWdzKSB7XG4gICAgICAgIHJldHVybiBzZWdzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXJyKSB7XG4gICAgICAgICAgICB2YXIgcHJldlNlZyA9IGFjYy5sZW5ndGggLSAxID49IDAgPyBhY2NbYWNjLmxlbmd0aCAtIDFdIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChwcmV2U2VnICYmIHByZXZTZWcubW9kZSA9PT0gY3Vyci5tb2RlKSB7XG4gICAgICAgICAgICAgICAgYWNjW2FjYy5sZW5ndGggLSAxXS5kYXRhICs9IGN1cnIuZGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjLnB1c2goY3Vycik7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIGxpc3Qgb2YgYWxsIHBvc3NpYmxlIG5vZGVzIGNvbWJpbmF0aW9uIHdoaWNoXG4gICAgICogd2lsbCBiZSB1c2VkIHRvIGJ1aWxkIGEgc2VnbWVudHMgZ3JhcGguXG4gICAgICpcbiAgICAgKiBOb2RlcyBhcmUgZGl2aWRlZCBieSBncm91cHMuIEVhY2ggZ3JvdXAgd2lsbCBjb250YWluIGEgbGlzdCBvZiBhbGwgdGhlIG1vZGVzXG4gICAgICogaW4gd2hpY2ggaXMgcG9zc2libGUgdG8gZW5jb2RlIHRoZSBnaXZlbiB0ZXh0LlxuICAgICAqXG4gICAgICogRm9yIGV4YW1wbGUgdGhlIHRleHQgJzEyMzQ1JyBjYW4gYmUgZW5jb2RlZCBhcyBOdW1lcmljLCBBbHBoYW51bWVyaWMgb3IgQnl0ZS5cbiAgICAgKiBUaGUgZ3JvdXAgZm9yICcxMjM0NScgd2lsbCBjb250YWluIHRoZW4gMyBvYmplY3RzLCBvbmUgZm9yIGVhY2hcbiAgICAgKiBwb3NzaWJsZSBlbmNvZGluZyBtb2RlLlxuICAgICAqXG4gICAgICogRWFjaCBub2RlIHJlcHJlc2VudHMgYSBwb3NzaWJsZSBzZWdtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7QXJyYXl9IHNlZ3MgQXJyYXkgb2Ygb2JqZWN0IHdpdGggc2VnbWVudHMgZGF0YVxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICAgIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBidWlsZE5vZGVzKHNlZ3MpIHtcbiAgICAgICAgdmFyIG5vZGVzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2Vncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHNlZyA9IHNlZ3NbaV07XG4gICAgICAgICAgICBzd2l0Y2ggKHNlZy5tb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBtb2RlLk5VTUVSSUM6XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2goW3NlZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF0YTogc2VnLmRhdGEsIG1vZGU6IG1vZGUuQUxQSEFOVU1FUklDLCBsZW5ndGg6IHNlZy5sZW5ndGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF0YTogc2VnLmRhdGEsIG1vZGU6IG1vZGUuQllURSwgbGVuZ3RoOiBzZWcubGVuZ3RoIH1cbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgbW9kZS5BTFBIQU5VTUVSSUM6XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2goW3NlZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF0YTogc2VnLmRhdGEsIG1vZGU6IG1vZGUuQllURSwgbGVuZ3RoOiBzZWcubGVuZ3RoIH1cbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgbW9kZS5LQU5KSTpcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMucHVzaChbc2VnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBkYXRhOiBzZWcuZGF0YSwgbW9kZTogbW9kZS5CWVRFLCBsZW5ndGg6IGdldFN0cmluZ0J5dGVMZW5ndGgoc2VnLmRhdGEpIH1cbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgbW9kZS5CWVRFOlxuICAgICAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF0YTogc2VnLmRhdGEsIG1vZGU6IG1vZGUuQllURSwgbGVuZ3RoOiBnZXRTdHJpbmdCeXRlTGVuZ3RoKHNlZy5kYXRhKSB9XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGRzIGEgZ3JhcGggZnJvbSBhIGxpc3Qgb2Ygbm9kZXMuXG4gICAgICogQWxsIHNlZ21lbnRzIGluIGVhY2ggbm9kZSBncm91cCB3aWxsIGJlIGNvbm5lY3RlZCB3aXRoIGFsbCB0aGUgc2VnbWVudHMgb2ZcbiAgICAgKiB0aGUgbmV4dCBncm91cCBhbmQgc28gb24uXG4gICAgICpcbiAgICAgKiBBdCBlYWNoIGNvbm5lY3Rpb24gd2lsbCBiZSBhc3NpZ25lZCBhIHdlaWdodCBkZXBlbmRpbmcgb24gdGhlXG4gICAgICogc2VnbWVudCdzIGJ5dGUgbGVuZ3RoLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7QXJyYXl9IG5vZGVzICAgIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgIEdyYXBoIG9mIGFsbCBwb3NzaWJsZSBzZWdtZW50c1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGJ1aWxkR3JhcGgobm9kZXMsIHZlcnNpb24pIHtcbiAgICAgICAgdmFyIHRhYmxlID0ge307XG4gICAgICAgIHZhciBncmFwaCA9IHsgJ3N0YXJ0Jzoge30gfTtcbiAgICAgICAgdmFyIHByZXZOb2RlSWRzID0gWydzdGFydCddO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZUdyb3VwID0gbm9kZXNbaV07XG4gICAgICAgICAgICB2YXIgY3VycmVudE5vZGVJZHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbm9kZUdyb3VwLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBub2RlR3JvdXBbal07XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9ICcnICsgaSArIGo7XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGVJZHMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIHRhYmxlW2tleV0gPSB7IG5vZGU6IG5vZGUsIGxhc3RDb3VudDogMCB9O1xuICAgICAgICAgICAgICAgIGdyYXBoW2tleV0gPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHByZXZOb2RlSWRzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2Tm9kZUlkID0gcHJldk5vZGVJZHNbbl07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZVtwcmV2Tm9kZUlkXSAmJiB0YWJsZVtwcmV2Tm9kZUlkXS5ub2RlLm1vZGUgPT09IG5vZGUubW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhbcHJldk5vZGVJZF1ba2V5XSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U2VnbWVudEJpdHNMZW5ndGgodGFibGVbcHJldk5vZGVJZF0ubGFzdENvdW50ICsgbm9kZS5sZW5ndGgsIG5vZGUubW9kZSkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTZWdtZW50Qml0c0xlbmd0aCh0YWJsZVtwcmV2Tm9kZUlkXS5sYXN0Q291bnQsIG5vZGUubW9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZVtwcmV2Tm9kZUlkXS5sYXN0Q291bnQgKz0gbm9kZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFibGVbcHJldk5vZGVJZF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVbcHJldk5vZGVJZF0ubGFzdENvdW50ID0gbm9kZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwaFtwcmV2Tm9kZUlkXVtrZXldID0gZ2V0U2VnbWVudEJpdHNMZW5ndGgobm9kZS5sZW5ndGgsIG5vZGUubW9kZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQgKyBtb2RlLmdldENoYXJDb3VudEluZGljYXRvcihub2RlLm1vZGUsIHZlcnNpb24pOyAvLyBzd2l0Y2ggY29zdFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldk5vZGVJZHMgPSBjdXJyZW50Tm9kZUlkcztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKG4gPSAwOyBuIDwgcHJldk5vZGVJZHMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIGdyYXBoW3ByZXZOb2RlSWRzW25dXVsnZW5kJ10gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG1hcDogZ3JhcGgsIHRhYmxlOiB0YWJsZSB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYSBzZWdtZW50IGZyb20gYSBzcGVjaWZpZWQgZGF0YSBhbmQgbW9kZS5cbiAgICAgKiBJZiBhIG1vZGUgaXMgbm90IHNwZWNpZmllZCwgdGhlIG1vcmUgc3VpdGFibGUgd2lsbCBiZSB1c2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBkYXRhICAgICAgICAgICAgIElucHV0IGRhdGFcbiAgICAgKiBAcGFyYW0gIHtNb2RlIHwgU3RyaW5nfSBtb2Rlc0hpbnQgRGF0YSBtb2RlXG4gICAgICogQHJldHVybiB7U2VnbWVudH0gICAgICAgICAgICAgICAgIFNlZ21lbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBidWlsZFNpbmdsZVNlZ21lbnQoZGF0YSwgbW9kZXNIaW50KSB7XG4gICAgICAgIHZhciBtb2RlJDE7XG4gICAgICAgIHZhciBiZXN0TW9kZSA9IG1vZGUuZ2V0QmVzdE1vZGVGb3JEYXRhKGRhdGEpO1xuICAgICAgICBtb2RlJDEgPSBtb2RlLmZyb20obW9kZXNIaW50LCBiZXN0TW9kZSk7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSBkYXRhIGNhbiBiZSBlbmNvZGVkXG4gICAgICAgIGlmIChtb2RlJDEgIT09IG1vZGUuQllURSAmJiBtb2RlJDEuYml0IDwgYmVzdE1vZGUuYml0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGRhdGEgKyAnXCInICtcbiAgICAgICAgICAgICAgICAnIGNhbm5vdCBiZSBlbmNvZGVkIHdpdGggbW9kZSAnICsgbW9kZS50b1N0cmluZyhtb2RlJDEpICtcbiAgICAgICAgICAgICAgICAnLlxcbiBTdWdnZXN0ZWQgbW9kZSBpczogJyArIG1vZGUudG9TdHJpbmcoYmVzdE1vZGUpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVc2UgTW9kZS5CWVRFIGlmIEthbmppIHN1cHBvcnQgaXMgZGlzYWJsZWRcbiAgICAgICAgaWYgKG1vZGUkMSA9PT0gbW9kZS5LQU5KSSAmJiAhdXRpbHMuaXNLYW5qaU1vZGVFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIG1vZGUkMSA9IG1vZGUuQllURTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKG1vZGUkMSkge1xuICAgICAgICAgICAgY2FzZSBtb2RlLk5VTUVSSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBudW1lcmljRGF0YShkYXRhKTtcbiAgICAgICAgICAgIGNhc2UgbW9kZS5BTFBIQU5VTUVSSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBhbHBoYW51bWVyaWNEYXRhKGRhdGEpO1xuICAgICAgICAgICAgY2FzZSBtb2RlLktBTkpJOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcga2FuamlEYXRhKGRhdGEpO1xuICAgICAgICAgICAgY2FzZSBtb2RlLkJZVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBieXRlRGF0YShkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYSBsaXN0IG9mIHNlZ21lbnRzIGZyb20gYW4gYXJyYXkuXG4gICAgICogQXJyYXkgY2FuIGNvbnRhaW4gU3RyaW5ncyBvciBPYmplY3RzIHdpdGggc2VnbWVudCdzIGluZm8uXG4gICAgICpcbiAgICAgKiBGb3IgZWFjaCBpdGVtIHdoaWNoIGlzIGEgc3RyaW5nLCB3aWxsIGJlIGdlbmVyYXRlZCBhIHNlZ21lbnQgd2l0aCB0aGUgZ2l2ZW5cbiAgICAgKiBzdHJpbmcgYW5kIHRoZSBtb3JlIGFwcHJvcHJpYXRlIGVuY29kaW5nIG1vZGUuXG4gICAgICpcbiAgICAgKiBGb3IgZWFjaCBpdGVtIHdoaWNoIGlzIGFuIG9iamVjdCwgd2lsbCBiZSBnZW5lcmF0ZWQgYSBzZWdtZW50IHdpdGggdGhlIGdpdmVuXG4gICAgICogZGF0YSBhbmQgbW9kZS5cbiAgICAgKiBPYmplY3RzIG11c3QgY29udGFpbiBhdCBsZWFzdCB0aGUgcHJvcGVydHkgXCJkYXRhXCIuXG4gICAgICogSWYgcHJvcGVydHkgXCJtb2RlXCIgaXMgbm90IHByZXNlbnQsIHRoZSBtb3JlIHN1aXRhYmxlIG1vZGUgd2lsbCBiZSB1c2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7QXJyYXl9IGFycmF5IEFycmF5IG9mIG9iamVjdHMgd2l0aCBzZWdtZW50cyBkYXRhXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgICAgIEFycmF5IG9mIFNlZ21lbnRzXG4gICAgICovXG4gICAgZXhwb3J0cy5mcm9tQXJyYXkgPSBmdW5jdGlvbiBmcm9tQXJyYXkoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzZWcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGFjYy5wdXNoKGJ1aWxkU2luZ2xlU2VnbWVudChzZWcsIG51bGwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNlZy5kYXRhKSB7XG4gICAgICAgICAgICAgICAgYWNjLnB1c2goYnVpbGRTaW5nbGVTZWdtZW50KHNlZy5kYXRhLCBzZWcubW9kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwgW10pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQnVpbGRzIGFuIG9wdGltaXplZCBzZXF1ZW5jZSBvZiBzZWdtZW50cyBmcm9tIGEgc3RyaW5nLFxuICAgICAqIHdoaWNoIHdpbGwgcHJvZHVjZSB0aGUgc2hvcnRlc3QgcG9zc2libGUgYml0c3RyZWFtLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBkYXRhICAgIElucHV0IHN0cmluZ1xuICAgICAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgQXJyYXkgb2Ygc2VnbWVudHNcbiAgICAgKi9cbiAgICBleHBvcnRzLmZyb21TdHJpbmcgPSBmdW5jdGlvbiBmcm9tU3RyaW5nKGRhdGEsIHZlcnNpb24pIHtcbiAgICAgICAgdmFyIHNlZ3MgPSBnZXRTZWdtZW50c0Zyb21TdHJpbmcoZGF0YSwgdXRpbHMuaXNLYW5qaU1vZGVFbmFibGVkKCkpO1xuICAgICAgICB2YXIgbm9kZXMgPSBidWlsZE5vZGVzKHNlZ3MpO1xuICAgICAgICB2YXIgZ3JhcGggPSBidWlsZEdyYXBoKG5vZGVzLCB2ZXJzaW9uKTtcbiAgICAgICAgdmFyIHBhdGggPSBkaWprc3RyYV8xLmZpbmRfcGF0aChncmFwaC5tYXAsICdzdGFydCcsICdlbmQnKTtcbiAgICAgICAgdmFyIG9wdGltaXplZFNlZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgb3B0aW1pemVkU2Vncy5wdXNoKGdyYXBoLnRhYmxlW3BhdGhbaV1dLm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHBvcnRzLmZyb21BcnJheShtZXJnZVNlZ21lbnRzKG9wdGltaXplZFNlZ3MpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNwbGl0cyBhIHN0cmluZyBpbiB2YXJpb3VzIHNlZ21lbnRzIHdpdGggdGhlIG1vZGVzIHdoaWNoXG4gICAgICogYmVzdCByZXByZXNlbnQgdGhlaXIgY29udGVudC5cbiAgICAgKiBUaGUgcHJvZHVjZWQgc2VnbWVudHMgYXJlIGZhciBmcm9tIGJlaW5nIG9wdGltaXplZC5cbiAgICAgKiBUaGUgb3V0cHV0IG9mIHRoaXMgZnVuY3Rpb24gaXMgb25seSB1c2VkIHRvIGVzdGltYXRlIGEgUVIgQ29kZSB2ZXJzaW9uXG4gICAgICogd2hpY2ggbWF5IGNvbnRhaW4gdGhlIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGRhdGEgSW5wdXQgc3RyaW5nXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgICAgIEFycmF5IG9mIHNlZ21lbnRzXG4gICAgICovXG4gICAgZXhwb3J0cy5yYXdTcGxpdCA9IGZ1bmN0aW9uIHJhd1NwbGl0KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMuZnJvbUFycmF5KGdldFNlZ21lbnRzRnJvbVN0cmluZyhkYXRhLCB1dGlscy5pc0thbmppTW9kZUVuYWJsZWQoKSkpO1xuICAgIH07XG59KTtcbi8qKlxuICogUVJDb2RlIGZvciBKYXZhU2NyaXB0XG4gKlxuICogbW9kaWZpZWQgYnkgUnlhbiBEYXkgZm9yIG5vZGVqcyBzdXBwb3J0XG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEgUnlhbiBEYXlcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gKlxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFFSQ29kZSBmb3IgSmF2YVNjcmlwdFxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAwOSBLYXp1aGlrbyBBcmFzZVxuLy9cbi8vIFVSTDogaHR0cDovL3d3dy5kLXByb2plY3QuY29tL1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbi8vICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbi8vXG4vLyBUaGUgd29yZCBcIlFSIENvZGVcIiBpcyByZWdpc3RlcmVkIHRyYWRlbWFyayBvZlxuLy8gREVOU08gV0FWRSBJTkNPUlBPUkFURURcbi8vICAgaHR0cDovL3d3dy5kZW5zby13YXZlLmNvbS9xcmNvZGUvZmFxcGF0ZW50LWUuaHRtbFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLyoqXG4gKiBBZGQgZmluZGVyIHBhdHRlcm5zIGJpdHMgdG8gbWF0cml4XG4gKlxuICogQHBhcmFtICB7Qml0TWF0cml4fSBtYXRyaXggIE1vZHVsZXMgbWF0cml4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKi9cbmZ1bmN0aW9uIHNldHVwRmluZGVyUGF0dGVybihtYXRyaXgsIHZlcnNpb24pIHtcbiAgICB2YXIgc2l6ZSA9IG1hdHJpeC5zaXplO1xuICAgIHZhciBwb3MgPSBmaW5kZXJQYXR0ZXJuLmdldFBvc2l0aW9ucyh2ZXJzaW9uKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcm93ID0gcG9zW2ldWzBdO1xuICAgICAgICB2YXIgY29sID0gcG9zW2ldWzFdO1xuICAgICAgICBmb3IgKHZhciByID0gLTE7IHIgPD0gNzsgcisrKSB7XG4gICAgICAgICAgICBpZiAocm93ICsgciA8PSAtMSB8fCBzaXplIDw9IHJvdyArIHIpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBmb3IgKHZhciBjID0gLTE7IGMgPD0gNzsgYysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbCArIGMgPD0gLTEgfHwgc2l6ZSA8PSBjb2wgKyBjKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAoKHIgPj0gMCAmJiByIDw9IDYgJiYgKGMgPT09IDAgfHwgYyA9PT0gNikpIHx8XG4gICAgICAgICAgICAgICAgICAgIChjID49IDAgJiYgYyA8PSA2ICYmIChyID09PSAwIHx8IHIgPT09IDYpKSB8fFxuICAgICAgICAgICAgICAgICAgICAociA+PSAyICYmIHIgPD0gNCAmJiBjID49IDIgJiYgYyA8PSA0KSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRyaXguc2V0KHJvdyArIHIsIGNvbCArIGMsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4LnNldChyb3cgKyByLCBjb2wgKyBjLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBBZGQgdGltaW5nIHBhdHRlcm4gYml0cyB0byBtYXRyaXhcbiAqXG4gKiBOb3RlOiB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgY2FsbGVkIGJlZm9yZSB7QGxpbmsgc2V0dXBBbGlnbm1lbnRQYXR0ZXJufVxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4IE1vZHVsZXMgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIHNldHVwVGltaW5nUGF0dGVybihtYXRyaXgpIHtcbiAgICB2YXIgc2l6ZSA9IG1hdHJpeC5zaXplO1xuICAgIGZvciAodmFyIHIgPSA4OyByIDwgc2l6ZSAtIDg7IHIrKykge1xuICAgICAgICB2YXIgdmFsdWUgPSByICUgMiA9PT0gMDtcbiAgICAgICAgbWF0cml4LnNldChyLCA2LCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIG1hdHJpeC5zZXQoNiwgciwgdmFsdWUsIHRydWUpO1xuICAgIH1cbn1cbi8qKlxuICogQWRkIGFsaWdubWVudCBwYXR0ZXJucyBiaXRzIHRvIG1hdHJpeFxuICpcbiAqIE5vdGU6IHRoaXMgZnVuY3Rpb24gbXVzdCBiZSBjYWxsZWQgYWZ0ZXIge0BsaW5rIHNldHVwVGltaW5nUGF0dGVybn1cbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IG1hdHJpeCAgTW9kdWxlcyBtYXRyaXhcbiAqIEBwYXJhbSAge051bWJlcn0gICAgdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqL1xuZnVuY3Rpb24gc2V0dXBBbGlnbm1lbnRQYXR0ZXJuKG1hdHJpeCwgdmVyc2lvbikge1xuICAgIHZhciBwb3MgPSBhbGlnbm1lbnRQYXR0ZXJuLmdldFBvc2l0aW9ucyh2ZXJzaW9uKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcm93ID0gcG9zW2ldWzBdO1xuICAgICAgICB2YXIgY29sID0gcG9zW2ldWzFdO1xuICAgICAgICBmb3IgKHZhciByID0gLTI7IHIgPD0gMjsgcisrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBjID0gLTI7IGMgPD0gMjsgYysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHIgPT09IC0yIHx8IHIgPT09IDIgfHwgYyA9PT0gLTIgfHwgYyA9PT0gMiB8fFxuICAgICAgICAgICAgICAgICAgICAociA9PT0gMCAmJiBjID09PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRyaXguc2V0KHJvdyArIHIsIGNvbCArIGMsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4LnNldChyb3cgKyByLCBjb2wgKyBjLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBBZGQgdmVyc2lvbiBpbmZvIGJpdHMgdG8gbWF0cml4XG4gKlxuICogQHBhcmFtICB7Qml0TWF0cml4fSBtYXRyaXggIE1vZHVsZXMgbWF0cml4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKi9cbmZ1bmN0aW9uIHNldHVwVmVyc2lvbkluZm8obWF0cml4LCB2ZXJzaW9uJDEpIHtcbiAgICB2YXIgc2l6ZSA9IG1hdHJpeC5zaXplO1xuICAgIHZhciBiaXRzID0gdmVyc2lvbi5nZXRFbmNvZGVkQml0cyh2ZXJzaW9uJDEpO1xuICAgIHZhciByb3csIGNvbCwgbW9kO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTg7IGkrKykge1xuICAgICAgICByb3cgPSBNYXRoLmZsb29yKGkgLyAzKTtcbiAgICAgICAgY29sID0gaSAlIDMgKyBzaXplIC0gOCAtIDM7XG4gICAgICAgIG1vZCA9ICgoYml0cyA+PiBpKSAmIDEpID09PSAxO1xuICAgICAgICBtYXRyaXguc2V0KHJvdywgY29sLCBtb2QsIHRydWUpO1xuICAgICAgICBtYXRyaXguc2V0KGNvbCwgcm93LCBtb2QsIHRydWUpO1xuICAgIH1cbn1cbi8qKlxuICogQWRkIGZvcm1hdCBpbmZvIGJpdHMgdG8gbWF0cml4XG4gKlxuICogQHBhcmFtICB7Qml0TWF0cml4fSBtYXRyaXggICAgICAgICAgICAgICBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7RXJyb3JDb3JyZWN0aW9uTGV2ZWx9ICAgIGVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEBwYXJhbSAge051bWJlcn0gICAgbWFza1BhdHRlcm4gICAgICAgICAgTWFzayBwYXR0ZXJuIHJlZmVyZW5jZSB2YWx1ZVxuICovXG5mdW5jdGlvbiBzZXR1cEZvcm1hdEluZm8obWF0cml4LCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFza1BhdHRlcm4pIHtcbiAgICB2YXIgc2l6ZSA9IG1hdHJpeC5zaXplO1xuICAgIHZhciBiaXRzID0gZm9ybWF0SW5mby5nZXRFbmNvZGVkQml0cyhlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFza1BhdHRlcm4pO1xuICAgIHZhciBpLCBtb2Q7XG4gICAgZm9yIChpID0gMDsgaSA8IDE1OyBpKyspIHtcbiAgICAgICAgbW9kID0gKChiaXRzID4+IGkpICYgMSkgPT09IDE7XG4gICAgICAgIC8vIHZlcnRpY2FsXG4gICAgICAgIGlmIChpIDwgNikge1xuICAgICAgICAgICAgbWF0cml4LnNldChpLCA4LCBtb2QsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGkgPCA4KSB7XG4gICAgICAgICAgICBtYXRyaXguc2V0KGkgKyAxLCA4LCBtb2QsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWF0cml4LnNldChzaXplIC0gMTUgKyBpLCA4LCBtb2QsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhvcml6b250YWxcbiAgICAgICAgaWYgKGkgPCA4KSB7XG4gICAgICAgICAgICBtYXRyaXguc2V0KDgsIHNpemUgLSBpIC0gMSwgbW9kLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpIDwgOSkge1xuICAgICAgICAgICAgbWF0cml4LnNldCg4LCAxNSAtIGkgLSAxICsgMSwgbW9kLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1hdHJpeC5zZXQoOCwgMTUgLSBpIC0gMSwgbW9kLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBmaXhlZCBtb2R1bGVcbiAgICBtYXRyaXguc2V0KHNpemUgLSA4LCA4LCAxLCB0cnVlKTtcbn1cbi8qKlxuICogQWRkIGVuY29kZWQgZGF0YSBiaXRzIHRvIG1hdHJpeFxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4IE1vZHVsZXMgbWF0cml4XG4gKiBAcGFyYW0gIHtCdWZmZXJ9ICAgIGRhdGEgICBEYXRhIGNvZGV3b3Jkc1xuICovXG5mdW5jdGlvbiBzZXR1cERhdGEobWF0cml4LCBkYXRhKSB7XG4gICAgdmFyIHNpemUgPSBtYXRyaXguc2l6ZTtcbiAgICB2YXIgaW5jID0gLTE7XG4gICAgdmFyIHJvdyA9IHNpemUgLSAxO1xuICAgIHZhciBiaXRJbmRleCA9IDc7XG4gICAgdmFyIGJ5dGVJbmRleCA9IDA7XG4gICAgZm9yICh2YXIgY29sID0gc2l6ZSAtIDE7IGNvbCA+IDA7IGNvbCAtPSAyKSB7XG4gICAgICAgIGlmIChjb2wgPT09IDYpXG4gICAgICAgICAgICBjb2wtLTtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgMjsgYysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtYXRyaXguaXNSZXNlcnZlZChyb3csIGNvbCAtIGMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXJrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChieXRlSW5kZXggPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGFyayA9ICgoKGRhdGFbYnl0ZUluZGV4XSA+Pj4gYml0SW5kZXgpICYgMSkgPT09IDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeC5zZXQocm93LCBjb2wgLSBjLCBkYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgYml0SW5kZXgtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJpdEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZUluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICBiaXRJbmRleCA9IDc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb3cgKz0gaW5jO1xuICAgICAgICAgICAgaWYgKHJvdyA8IDAgfHwgc2l6ZSA8PSByb3cpIHtcbiAgICAgICAgICAgICAgICByb3cgLT0gaW5jO1xuICAgICAgICAgICAgICAgIGluYyA9IC1pbmM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIENyZWF0ZSBlbmNvZGVkIGNvZGV3b3JkcyBmcm9tIGRhdGEgaW5wdXRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgdmVyc2lvbiAgICAgICAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcGFyYW0gIHtFcnJvckNvcnJlY3Rpb25MZXZlbH0gICBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcGFyYW0gIHtCeXRlRGF0YX0gZGF0YSAgICAgICAgICAgICAgICAgRGF0YSBpbnB1dFxuICogQHJldHVybiB7QnVmZmVyfSAgICAgICAgICAgICAgICAgICAgICAgIEJ1ZmZlciBjb250YWluaW5nIGVuY29kZWQgY29kZXdvcmRzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURhdGEodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIHNlZ21lbnRzKSB7XG4gICAgLy8gUHJlcGFyZSBkYXRhIGJ1ZmZlclxuICAgIHZhciBidWZmZXIgPSBuZXcgYml0QnVmZmVyKCk7XG4gICAgc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAvLyBwcmVmaXggZGF0YSB3aXRoIG1vZGUgaW5kaWNhdG9yICg0IGJpdHMpXG4gICAgICAgIGJ1ZmZlci5wdXQoZGF0YS5tb2RlLmJpdCwgNCk7XG4gICAgICAgIC8vIFByZWZpeCBkYXRhIHdpdGggY2hhcmFjdGVyIGNvdW50IGluZGljYXRvci5cbiAgICAgICAgLy8gVGhlIGNoYXJhY3RlciBjb3VudCBpbmRpY2F0b3IgaXMgYSBzdHJpbmcgb2YgYml0cyB0aGF0IHJlcHJlc2VudHMgdGhlXG4gICAgICAgIC8vIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIGJlaW5nIGVuY29kZWQuXG4gICAgICAgIC8vIFRoZSBjaGFyYWN0ZXIgY291bnQgaW5kaWNhdG9yIG11c3QgYmUgcGxhY2VkIGFmdGVyIHRoZSBtb2RlIGluZGljYXRvclxuICAgICAgICAvLyBhbmQgbXVzdCBiZSBhIGNlcnRhaW4gbnVtYmVyIG9mIGJpdHMgbG9uZywgZGVwZW5kaW5nIG9uIHRoZSBRUiB2ZXJzaW9uXG4gICAgICAgIC8vIGFuZCBkYXRhIG1vZGVcbiAgICAgICAgLy8gQHNlZSB7QGxpbmsgTW9kZS5nZXRDaGFyQ291bnRJbmRpY2F0b3J9LlxuICAgICAgICBidWZmZXIucHV0KGRhdGEuZ2V0TGVuZ3RoKCksIG1vZGUuZ2V0Q2hhckNvdW50SW5kaWNhdG9yKGRhdGEubW9kZSwgdmVyc2lvbikpO1xuICAgICAgICAvLyBhZGQgYmluYXJ5IGRhdGEgc2VxdWVuY2UgdG8gYnVmZmVyXG4gICAgICAgIGRhdGEud3JpdGUoYnVmZmVyKTtcbiAgICB9KTtcbiAgICAvLyBDYWxjdWxhdGUgcmVxdWlyZWQgbnVtYmVyIG9mIGJpdHNcbiAgICB2YXIgdG90YWxDb2Rld29yZHMgPSB1dGlscy5nZXRTeW1ib2xUb3RhbENvZGV3b3Jkcyh2ZXJzaW9uKTtcbiAgICB2YXIgZWNUb3RhbENvZGV3b3JkcyA9IGVycm9yQ29ycmVjdGlvbkNvZGUuZ2V0VG90YWxDb2Rld29yZHNDb3VudCh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCk7XG4gICAgdmFyIGRhdGFUb3RhbENvZGV3b3Jkc0JpdHMgPSAodG90YWxDb2Rld29yZHMgLSBlY1RvdGFsQ29kZXdvcmRzKSAqIDg7XG4gICAgLy8gQWRkIGEgdGVybWluYXRvci5cbiAgICAvLyBJZiB0aGUgYml0IHN0cmluZyBpcyBzaG9ydGVyIHRoYW4gdGhlIHRvdGFsIG51bWJlciBvZiByZXF1aXJlZCBiaXRzLFxuICAgIC8vIGEgdGVybWluYXRvciBvZiB1cCB0byBmb3VyIDBzIG11c3QgYmUgYWRkZWQgdG8gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHN0cmluZy5cbiAgICAvLyBJZiB0aGUgYml0IHN0cmluZyBpcyBtb3JlIHRoYW4gZm91ciBiaXRzIHNob3J0ZXIgdGhhbiB0aGUgcmVxdWlyZWQgbnVtYmVyIG9mIGJpdHMsXG4gICAgLy8gYWRkIGZvdXIgMHMgdG8gdGhlIGVuZC5cbiAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICsgNCA8PSBkYXRhVG90YWxDb2Rld29yZHNCaXRzKSB7XG4gICAgICAgIGJ1ZmZlci5wdXQoMCwgNCk7XG4gICAgfVxuICAgIC8vIElmIHRoZSBiaXQgc3RyaW5nIGlzIGZld2VyIHRoYW4gZm91ciBiaXRzIHNob3J0ZXIsIGFkZCBvbmx5IHRoZSBudW1iZXIgb2YgMHMgdGhhdFxuICAgIC8vIGFyZSBuZWVkZWQgdG8gcmVhY2ggdGhlIHJlcXVpcmVkIG51bWJlciBvZiBiaXRzLlxuICAgIC8vIEFmdGVyIGFkZGluZyB0aGUgdGVybWluYXRvciwgaWYgdGhlIG51bWJlciBvZiBiaXRzIGluIHRoZSBzdHJpbmcgaXMgbm90IGEgbXVsdGlwbGUgb2YgOCxcbiAgICAvLyBwYWQgdGhlIHN0cmluZyBvbiB0aGUgcmlnaHQgd2l0aCAwcyB0byBtYWtlIHRoZSBzdHJpbmcncyBsZW5ndGggYSBtdWx0aXBsZSBvZiA4LlxuICAgIHdoaWxlIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgJSA4ICE9PSAwKSB7XG4gICAgICAgIGJ1ZmZlci5wdXRCaXQoMCk7XG4gICAgfVxuICAgIC8vIEFkZCBwYWQgYnl0ZXMgaWYgdGhlIHN0cmluZyBpcyBzdGlsbCBzaG9ydGVyIHRoYW4gdGhlIHRvdGFsIG51bWJlciBvZiByZXF1aXJlZCBiaXRzLlxuICAgIC8vIEV4dGVuZCB0aGUgYnVmZmVyIHRvIGZpbGwgdGhlIGRhdGEgY2FwYWNpdHkgb2YgdGhlIHN5bWJvbCBjb3JyZXNwb25kaW5nIHRvXG4gICAgLy8gdGhlIFZlcnNpb24gYW5kIEVycm9yIENvcnJlY3Rpb24gTGV2ZWwgYnkgYWRkaW5nIHRoZSBQYWQgQ29kZXdvcmRzIDExMTAxMTAwICgweEVDKVxuICAgIC8vIGFuZCAwMDAxMDAwMSAoMHgxMSkgYWx0ZXJuYXRlbHkuXG4gICAgdmFyIHJlbWFpbmluZ0J5dGUgPSAoZGF0YVRvdGFsQ29kZXdvcmRzQml0cyAtIGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSkgLyA4O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVtYWluaW5nQnl0ZTsgaSsrKSB7XG4gICAgICAgIGJ1ZmZlci5wdXQoaSAlIDIgPyAweDExIDogMHhFQywgOCk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDb2Rld29yZHMoYnVmZmVyLCB2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCk7XG59XG4vKipcbiAqIEVuY29kZSBpbnB1dCBkYXRhIHdpdGggUmVlZC1Tb2xvbW9uIGFuZCByZXR1cm4gY29kZXdvcmRzIHdpdGhcbiAqIHJlbGF0aXZlIGVycm9yIGNvcnJlY3Rpb24gYml0c1xuICpcbiAqIEBwYXJhbSAge0JpdEJ1ZmZlcn0gYml0QnVmZmVyICAgICAgICAgICAgRGF0YSB0byBlbmNvZGVcbiAqIEBwYXJhbSAge051bWJlcn0gICAgdmVyc2lvbiAgICAgICAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcGFyYW0gIHtFcnJvckNvcnJlY3Rpb25MZXZlbH0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICogQHJldHVybiB7QnVmZmVyfSAgICAgICAgICAgICAgICAgICAgICAgICBCdWZmZXIgY29udGFpbmluZyBlbmNvZGVkIGNvZGV3b3Jkc1xuICovXG5mdW5jdGlvbiBjcmVhdGVDb2Rld29yZHMoYml0QnVmZmVyLCB2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xuICAgIC8vIFRvdGFsIGNvZGV3b3JkcyBmb3IgdGhpcyBRUiBjb2RlIHZlcnNpb24gKERhdGEgKyBFcnJvciBjb3JyZWN0aW9uKVxuICAgIHZhciB0b3RhbENvZGV3b3JkcyA9IHV0aWxzLmdldFN5bWJvbFRvdGFsQ29kZXdvcmRzKHZlcnNpb24pO1xuICAgIC8vIFRvdGFsIG51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGNvZGV3b3Jkc1xuICAgIHZhciBlY1RvdGFsQ29kZXdvcmRzID0gZXJyb3JDb3JyZWN0aW9uQ29kZS5nZXRUb3RhbENvZGV3b3Jkc0NvdW50KHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKTtcbiAgICAvLyBUb3RhbCBudW1iZXIgb2YgZGF0YSBjb2Rld29yZHNcbiAgICB2YXIgZGF0YVRvdGFsQ29kZXdvcmRzID0gdG90YWxDb2Rld29yZHMgLSBlY1RvdGFsQ29kZXdvcmRzO1xuICAgIC8vIFRvdGFsIG51bWJlciBvZiBibG9ja3NcbiAgICB2YXIgZWNUb3RhbEJsb2NrcyA9IGVycm9yQ29ycmVjdGlvbkNvZGUuZ2V0QmxvY2tzQ291bnQodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpO1xuICAgIC8vIENhbGN1bGF0ZSBob3cgbWFueSBibG9ja3MgZWFjaCBncm91cCBzaG91bGQgY29udGFpblxuICAgIHZhciBibG9ja3NJbkdyb3VwMiA9IHRvdGFsQ29kZXdvcmRzICUgZWNUb3RhbEJsb2NrcztcbiAgICB2YXIgYmxvY2tzSW5Hcm91cDEgPSBlY1RvdGFsQmxvY2tzIC0gYmxvY2tzSW5Hcm91cDI7XG4gICAgdmFyIHRvdGFsQ29kZXdvcmRzSW5Hcm91cDEgPSBNYXRoLmZsb29yKHRvdGFsQ29kZXdvcmRzIC8gZWNUb3RhbEJsb2Nrcyk7XG4gICAgdmFyIGRhdGFDb2Rld29yZHNJbkdyb3VwMSA9IE1hdGguZmxvb3IoZGF0YVRvdGFsQ29kZXdvcmRzIC8gZWNUb3RhbEJsb2Nrcyk7XG4gICAgdmFyIGRhdGFDb2Rld29yZHNJbkdyb3VwMiA9IGRhdGFDb2Rld29yZHNJbkdyb3VwMSArIDE7XG4gICAgLy8gTnVtYmVyIG9mIEVDIGNvZGV3b3JkcyBpcyB0aGUgc2FtZSBmb3IgYm90aCBncm91cHNcbiAgICB2YXIgZWNDb3VudCA9IHRvdGFsQ29kZXdvcmRzSW5Hcm91cDEgLSBkYXRhQ29kZXdvcmRzSW5Hcm91cDE7XG4gICAgLy8gSW5pdGlhbGl6ZSBhIFJlZWQtU29sb21vbiBlbmNvZGVyIHdpdGggYSBnZW5lcmF0b3IgcG9seW5vbWlhbCBvZiBkZWdyZWUgZWNDb3VudFxuICAgIHZhciBycyA9IG5ldyByZWVkU29sb21vbkVuY29kZXIoZWNDb3VudCk7XG4gICAgdmFyIG9mZnNldCA9IDA7XG4gICAgdmFyIGRjRGF0YSA9IG5ldyBBcnJheShlY1RvdGFsQmxvY2tzKTtcbiAgICB2YXIgZWNEYXRhID0gbmV3IEFycmF5KGVjVG90YWxCbG9ja3MpO1xuICAgIHZhciBtYXhEYXRhU2l6ZSA9IDA7XG4gICAgdmFyIGJ1ZmZlciA9IHR5cGVkYXJyYXlCdWZmZXIuZnJvbShiaXRCdWZmZXIuYnVmZmVyKTtcbiAgICAvLyBEaXZpZGUgdGhlIGJ1ZmZlciBpbnRvIHRoZSByZXF1aXJlZCBudW1iZXIgb2YgYmxvY2tzXG4gICAgZm9yICh2YXIgYiA9IDA7IGIgPCBlY1RvdGFsQmxvY2tzOyBiKyspIHtcbiAgICAgICAgdmFyIGRhdGFTaXplID0gYiA8IGJsb2Nrc0luR3JvdXAxID8gZGF0YUNvZGV3b3Jkc0luR3JvdXAxIDogZGF0YUNvZGV3b3Jkc0luR3JvdXAyO1xuICAgICAgICAvLyBleHRyYWN0IGEgYmxvY2sgb2YgZGF0YSBmcm9tIGJ1ZmZlclxuICAgICAgICBkY0RhdGFbYl0gPSBidWZmZXIuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBkYXRhU2l6ZSk7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBFQyBjb2Rld29yZHMgZm9yIHRoaXMgZGF0YSBibG9ja1xuICAgICAgICBlY0RhdGFbYl0gPSBycy5lbmNvZGUoZGNEYXRhW2JdKTtcbiAgICAgICAgb2Zmc2V0ICs9IGRhdGFTaXplO1xuICAgICAgICBtYXhEYXRhU2l6ZSA9IE1hdGgubWF4KG1heERhdGFTaXplLCBkYXRhU2l6ZSk7XG4gICAgfVxuICAgIC8vIENyZWF0ZSBmaW5hbCBkYXRhXG4gICAgLy8gSW50ZXJsZWF2ZSB0aGUgZGF0YSBhbmQgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHMgZnJvbSBlYWNoIGJsb2NrXG4gICAgdmFyIGRhdGEgPSB0eXBlZGFycmF5QnVmZmVyLmFsbG9jKHRvdGFsQ29kZXdvcmRzKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpLCByO1xuICAgIC8vIEFkZCBkYXRhIGNvZGV3b3Jkc1xuICAgIGZvciAoaSA9IDA7IGkgPCBtYXhEYXRhU2l6ZTsgaSsrKSB7XG4gICAgICAgIGZvciAociA9IDA7IHIgPCBlY1RvdGFsQmxvY2tzOyByKyspIHtcbiAgICAgICAgICAgIGlmIChpIDwgZGNEYXRhW3JdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRhdGFbaW5kZXgrK10gPSBkY0RhdGFbcl1baV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQXBwZWQgRUMgY29kZXdvcmRzXG4gICAgZm9yIChpID0gMDsgaSA8IGVjQ291bnQ7IGkrKykge1xuICAgICAgICBmb3IgKHIgPSAwOyByIDwgZWNUb3RhbEJsb2NrczsgcisrKSB7XG4gICAgICAgICAgICBkYXRhW2luZGV4KytdID0gZWNEYXRhW3JdW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuLyoqXG4gKiBCdWlsZCBRUiBDb2RlIHN5bWJvbFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGF0YSAgICAgICAgICAgICAgICAgSW5wdXQgc3RyaW5nXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICogQHBhcmFtICB7RXJyb3JDb3JyZXRpb25MZXZlbH0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgbGV2ZWxcbiAqIEBwYXJhbSAge01hc2tQYXR0ZXJufSBtYXNrUGF0dGVybiAgICAgTWFzayBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgIE9iamVjdCBjb250YWluaW5nIHN5bWJvbCBkYXRhXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVN5bWJvbChkYXRhLCB2ZXJzaW9uJDEsIGVycm9yQ29ycmVjdGlvbkxldmVsLCBtYXNrUGF0dGVybiQxKSB7XG4gICAgdmFyIHNlZ21lbnRzJDE7XG4gICAgaWYgKGlzYXJyYXkoZGF0YSkpIHtcbiAgICAgICAgc2VnbWVudHMkMSA9IHNlZ21lbnRzLmZyb21BcnJheShkYXRhKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBlc3RpbWF0ZWRWZXJzaW9uID0gdmVyc2lvbiQxO1xuICAgICAgICBpZiAoIWVzdGltYXRlZFZlcnNpb24pIHtcbiAgICAgICAgICAgIHZhciByYXdTZWdtZW50cyA9IHNlZ21lbnRzLnJhd1NwbGl0KGRhdGEpO1xuICAgICAgICAgICAgLy8gRXN0aW1hdGUgYmVzdCB2ZXJzaW9uIHRoYXQgY2FuIGNvbnRhaW4gcmF3IHNwbGl0dGVkIHNlZ21lbnRzXG4gICAgICAgICAgICBlc3RpbWF0ZWRWZXJzaW9uID0gdmVyc2lvbi5nZXRCZXN0VmVyc2lvbkZvckRhdGEocmF3U2VnbWVudHMsIGVycm9yQ29ycmVjdGlvbkxldmVsKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBCdWlsZCBvcHRpbWl6ZWQgc2VnbWVudHNcbiAgICAgICAgLy8gSWYgZXN0aW1hdGVkIHZlcnNpb24gaXMgdW5kZWZpbmVkLCB0cnkgd2l0aCB0aGUgaGlnaGVzdCB2ZXJzaW9uXG4gICAgICAgIHNlZ21lbnRzJDEgPSBzZWdtZW50cy5mcm9tU3RyaW5nKGRhdGEsIGVzdGltYXRlZFZlcnNpb24gfHwgNDApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGRhdGEnKTtcbiAgICB9XG4gICAgLy8gR2V0IHRoZSBtaW4gdmVyc2lvbiB0aGF0IGNhbiBjb250YWluIGRhdGFcbiAgICB2YXIgYmVzdFZlcnNpb24gPSB2ZXJzaW9uLmdldEJlc3RWZXJzaW9uRm9yRGF0YShzZWdtZW50cyQxLCBlcnJvckNvcnJlY3Rpb25MZXZlbCk7XG4gICAgLy8gSWYgbm8gdmVyc2lvbiBpcyBmb3VuZCwgZGF0YSBjYW5ub3QgYmUgc3RvcmVkXG4gICAgaWYgKCFiZXN0VmVyc2lvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBhbW91bnQgb2YgZGF0YSBpcyB0b28gYmlnIHRvIGJlIHN0b3JlZCBpbiBhIFFSIENvZGUnKTtcbiAgICB9XG4gICAgLy8gSWYgbm90IHNwZWNpZmllZCwgdXNlIG1pbiB2ZXJzaW9uIGFzIGRlZmF1bHRcbiAgICBpZiAoIXZlcnNpb24kMSkge1xuICAgICAgICB2ZXJzaW9uJDEgPSBiZXN0VmVyc2lvbjtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHNwZWNpZmllZCB2ZXJzaW9uIGNhbiBjb250YWluIHRoZSBkYXRhXG4gICAgfVxuICAgIGVsc2UgaWYgKHZlcnNpb24kMSA8IGJlc3RWZXJzaW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignXFxuJyArXG4gICAgICAgICAgICAnVGhlIGNob3NlbiBRUiBDb2RlIHZlcnNpb24gY2Fubm90IGNvbnRhaW4gdGhpcyBhbW91bnQgb2YgZGF0YS5cXG4nICtcbiAgICAgICAgICAgICdNaW5pbXVtIHZlcnNpb24gcmVxdWlyZWQgdG8gc3RvcmUgY3VycmVudCBkYXRhIGlzOiAnICsgYmVzdFZlcnNpb24gKyAnLlxcbicpO1xuICAgIH1cbiAgICB2YXIgZGF0YUJpdHMgPSBjcmVhdGVEYXRhKHZlcnNpb24kMSwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIHNlZ21lbnRzJDEpO1xuICAgIC8vIEFsbG9jYXRlIG1hdHJpeCBidWZmZXJcbiAgICB2YXIgbW9kdWxlQ291bnQgPSB1dGlscy5nZXRTeW1ib2xTaXplKHZlcnNpb24kMSk7XG4gICAgdmFyIG1vZHVsZXMgPSBuZXcgYml0TWF0cml4KG1vZHVsZUNvdW50KTtcbiAgICAvLyBBZGQgZnVuY3Rpb24gbW9kdWxlc1xuICAgIHNldHVwRmluZGVyUGF0dGVybihtb2R1bGVzLCB2ZXJzaW9uJDEpO1xuICAgIHNldHVwVGltaW5nUGF0dGVybihtb2R1bGVzKTtcbiAgICBzZXR1cEFsaWdubWVudFBhdHRlcm4obW9kdWxlcywgdmVyc2lvbiQxKTtcbiAgICAvLyBBZGQgdGVtcG9yYXJ5IGR1bW15IGJpdHMgZm9yIGZvcm1hdCBpbmZvIGp1c3QgdG8gc2V0IHRoZW0gYXMgcmVzZXJ2ZWQuXG4gICAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gcHJldmVudCB0aGVzZSBiaXRzIGZyb20gYmVpbmcgbWFza2VkIGJ5IHtAbGluayBNYXNrUGF0dGVybi5hcHBseU1hc2t9XG4gICAgLy8gc2luY2UgdGhlIG1hc2tpbmcgb3BlcmF0aW9uIG11c3QgYmUgcGVyZm9ybWVkIG9ubHkgb24gdGhlIGVuY29kaW5nIHJlZ2lvbi5cbiAgICAvLyBUaGVzZSBibG9ja3Mgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGNvcnJlY3QgdmFsdWVzIGxhdGVyIGluIGNvZGUuXG4gICAgc2V0dXBGb3JtYXRJbmZvKG1vZHVsZXMsIGVycm9yQ29ycmVjdGlvbkxldmVsLCAwKTtcbiAgICBpZiAodmVyc2lvbiQxID49IDcpIHtcbiAgICAgICAgc2V0dXBWZXJzaW9uSW5mbyhtb2R1bGVzLCB2ZXJzaW9uJDEpO1xuICAgIH1cbiAgICAvLyBBZGQgZGF0YSBjb2Rld29yZHNcbiAgICBzZXR1cERhdGEobW9kdWxlcywgZGF0YUJpdHMpO1xuICAgIGlmIChpc05hTihtYXNrUGF0dGVybiQxKSkge1xuICAgICAgICAvLyBGaW5kIGJlc3QgbWFzayBwYXR0ZXJuXG4gICAgICAgIG1hc2tQYXR0ZXJuJDEgPSBtYXNrUGF0dGVybi5nZXRCZXN0TWFzayhtb2R1bGVzLCBzZXR1cEZvcm1hdEluZm8uYmluZChudWxsLCBtb2R1bGVzLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkpO1xuICAgIH1cbiAgICAvLyBBcHBseSBtYXNrIHBhdHRlcm5cbiAgICBtYXNrUGF0dGVybi5hcHBseU1hc2sobWFza1BhdHRlcm4kMSwgbW9kdWxlcyk7XG4gICAgLy8gUmVwbGFjZSBmb3JtYXQgaW5mbyBiaXRzIHdpdGggY29ycmVjdCB2YWx1ZXNcbiAgICBzZXR1cEZvcm1hdEluZm8obW9kdWxlcywgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1hc2tQYXR0ZXJuJDEpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG1vZHVsZXM6IG1vZHVsZXMsXG4gICAgICAgIHZlcnNpb246IHZlcnNpb24kMSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IGVycm9yQ29ycmVjdGlvbkxldmVsLFxuICAgICAgICBtYXNrUGF0dGVybjogbWFza1BhdHRlcm4kMSxcbiAgICAgICAgc2VnbWVudHM6IHNlZ21lbnRzJDFcbiAgICB9O1xufVxuLyoqXG4gKiBRUiBDb2RlXG4gKlxuICogQHBhcmFtIHtTdHJpbmcgfCBBcnJheX0gZGF0YSAgICAgICAgICAgICAgICAgSW5wdXQgZGF0YVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgICAgICAgICAgICAgICAgICAgICAgT3B0aW9uYWwgY29uZmlndXJhdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLnZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMuZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9ucy50b1NKSVNGdW5jICAgICAgICAgSGVscGVyIGZ1bmMgdG8gY29udmVydCB1dGY4IHRvIHNqaXNcbiAqL1xudmFyIGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShkYXRhLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyB8fCBkYXRhID09PSAnJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGlucHV0IHRleHQnKTtcbiAgICB9XG4gICAgdmFyIGVycm9yQ29ycmVjdGlvbkxldmVsJDEgPSBlcnJvckNvcnJlY3Rpb25MZXZlbC5NO1xuICAgIHZhciB2ZXJzaW9uJDE7XG4gICAgdmFyIG1hc2s7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBVc2UgaGlnaGVyIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWwgYXMgZGVmYXVsdFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbCQxID0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwuZnJvbShvcHRpb25zLmVycm9yQ29ycmVjdGlvbkxldmVsLCBlcnJvckNvcnJlY3Rpb25MZXZlbC5NKTtcbiAgICAgICAgdmVyc2lvbiQxID0gdmVyc2lvbi5mcm9tKG9wdGlvbnMudmVyc2lvbik7XG4gICAgICAgIG1hc2sgPSBtYXNrUGF0dGVybi5mcm9tKG9wdGlvbnMubWFza1BhdHRlcm4pO1xuICAgICAgICBpZiAob3B0aW9ucy50b1NKSVNGdW5jKSB7XG4gICAgICAgICAgICB1dGlscy5zZXRUb1NKSVNGdW5jdGlvbihvcHRpb25zLnRvU0pJU0Z1bmMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVTeW1ib2woZGF0YSwgdmVyc2lvbiQxLCBlcnJvckNvcnJlY3Rpb25MZXZlbCQxLCBtYXNrKTtcbn07XG52YXIgcXJjb2RlID0ge1xuICAgIGNyZWF0ZTogY3JlYXRlXG59O1xudmFyIHV0aWxzJDEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4gICAgZnVuY3Rpb24gaGV4MnJnYmEoaGV4KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaGV4ID0gaGV4LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBoZXggIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbG9yIHNob3VsZCBiZSBkZWZpbmVkIGFzIGhleCBzdHJpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGV4Q29kZSA9IGhleC5zbGljZSgpLnJlcGxhY2UoJyMnLCAnJykuc3BsaXQoJycpO1xuICAgICAgICBpZiAoaGV4Q29kZS5sZW5ndGggPCAzIHx8IGhleENvZGUubGVuZ3RoID09PSA1IHx8IGhleENvZGUubGVuZ3RoID4gOCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhleCBjb2xvcjogJyArIGhleCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ29udmVydCBmcm9tIHNob3J0IHRvIGxvbmcgZm9ybSAoZmZmIC0+IGZmZmZmZilcbiAgICAgICAgaWYgKGhleENvZGUubGVuZ3RoID09PSAzIHx8IGhleENvZGUubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICBoZXhDb2RlID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgaGV4Q29kZS5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2MsIGNdO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBkZWZhdWx0IGFscGhhIHZhbHVlXG4gICAgICAgIGlmIChoZXhDb2RlLmxlbmd0aCA9PT0gNilcbiAgICAgICAgICAgIGhleENvZGUucHVzaCgnRicsICdGJyk7XG4gICAgICAgIHZhciBoZXhWYWx1ZSA9IHBhcnNlSW50KGhleENvZGUuam9pbignJyksIDE2KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IChoZXhWYWx1ZSA+PiAyNCkgJiAyNTUsXG4gICAgICAgICAgICBnOiAoaGV4VmFsdWUgPj4gMTYpICYgMjU1LFxuICAgICAgICAgICAgYjogKGhleFZhbHVlID4+IDgpICYgMjU1LFxuICAgICAgICAgICAgYTogaGV4VmFsdWUgJiAyNTUsXG4gICAgICAgICAgICBoZXg6ICcjJyArIGhleENvZGUuc2xpY2UoMCwgNikuam9pbignJylcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZXhwb3J0cy5nZXRPcHRpb25zID0gZnVuY3Rpb24gZ2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucylcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgaWYgKCFvcHRpb25zLmNvbG9yKVxuICAgICAgICAgICAgb3B0aW9ucy5jb2xvciA9IHt9O1xuICAgICAgICB2YXIgbWFyZ2luID0gdHlwZW9mIG9wdGlvbnMubWFyZ2luID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAgICAgb3B0aW9ucy5tYXJnaW4gPT09IG51bGwgfHxcbiAgICAgICAgICAgIG9wdGlvbnMubWFyZ2luIDwgMCA/IDQgOiBvcHRpb25zLm1hcmdpbjtcbiAgICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCAmJiBvcHRpb25zLndpZHRoID49IDIxID8gb3B0aW9ucy53aWR0aCA6IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIHNjYWxlID0gb3B0aW9ucy5zY2FsZSB8fCA0O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgc2NhbGU6IHdpZHRoID8gNCA6IHNjYWxlLFxuICAgICAgICAgICAgbWFyZ2luOiBtYXJnaW4sXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIGRhcms6IGhleDJyZ2JhKG9wdGlvbnMuY29sb3IuZGFyayB8fCAnIzAwMDAwMGZmJyksXG4gICAgICAgICAgICAgICAgbGlnaHQ6IGhleDJyZ2JhKG9wdGlvbnMuY29sb3IubGlnaHQgfHwgJyNmZmZmZmZmZicpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogb3B0aW9ucy50eXBlLFxuICAgICAgICAgICAgcmVuZGVyZXJPcHRzOiBvcHRpb25zLnJlbmRlcmVyT3B0cyB8fCB7fVxuICAgICAgICB9O1xuICAgIH07XG4gICAgZXhwb3J0cy5nZXRTY2FsZSA9IGZ1bmN0aW9uIGdldFNjYWxlKHFyU2l6ZSwgb3B0cykge1xuICAgICAgICByZXR1cm4gb3B0cy53aWR0aCAmJiBvcHRzLndpZHRoID49IHFyU2l6ZSArIG9wdHMubWFyZ2luICogMlxuICAgICAgICAgICAgPyBvcHRzLndpZHRoIC8gKHFyU2l6ZSArIG9wdHMubWFyZ2luICogMilcbiAgICAgICAgICAgIDogb3B0cy5zY2FsZTtcbiAgICB9O1xuICAgIGV4cG9ydHMuZ2V0SW1hZ2VXaWR0aCA9IGZ1bmN0aW9uIGdldEltYWdlV2lkdGgocXJTaXplLCBvcHRzKSB7XG4gICAgICAgIHZhciBzY2FsZSA9IGV4cG9ydHMuZ2V0U2NhbGUocXJTaXplLCBvcHRzKTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHFyU2l6ZSArIG9wdHMubWFyZ2luICogMikgKiBzY2FsZSk7XG4gICAgfTtcbiAgICBleHBvcnRzLnFyVG9JbWFnZURhdGEgPSBmdW5jdGlvbiBxclRvSW1hZ2VEYXRhKGltZ0RhdGEsIHFyLCBvcHRzKSB7XG4gICAgICAgIHZhciBzaXplID0gcXIubW9kdWxlcy5zaXplO1xuICAgICAgICB2YXIgZGF0YSA9IHFyLm1vZHVsZXMuZGF0YTtcbiAgICAgICAgdmFyIHNjYWxlID0gZXhwb3J0cy5nZXRTY2FsZShzaXplLCBvcHRzKTtcbiAgICAgICAgdmFyIHN5bWJvbFNpemUgPSBNYXRoLmZsb29yKChzaXplICsgb3B0cy5tYXJnaW4gKiAyKSAqIHNjYWxlKTtcbiAgICAgICAgdmFyIHNjYWxlZE1hcmdpbiA9IG9wdHMubWFyZ2luICogc2NhbGU7XG4gICAgICAgIHZhciBwYWxldHRlID0gW29wdHMuY29sb3IubGlnaHQsIG9wdHMuY29sb3IuZGFya107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9sU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHN5bWJvbFNpemU7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBwb3NEc3QgPSAoaSAqIHN5bWJvbFNpemUgKyBqKSAqIDQ7XG4gICAgICAgICAgICAgICAgdmFyIHB4Q29sb3IgPSBvcHRzLmNvbG9yLmxpZ2h0O1xuICAgICAgICAgICAgICAgIGlmIChpID49IHNjYWxlZE1hcmdpbiAmJiBqID49IHNjYWxlZE1hcmdpbiAmJlxuICAgICAgICAgICAgICAgICAgICBpIDwgc3ltYm9sU2l6ZSAtIHNjYWxlZE1hcmdpbiAmJiBqIDwgc3ltYm9sU2l6ZSAtIHNjYWxlZE1hcmdpbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaVNyYyA9IE1hdGguZmxvb3IoKGkgLSBzY2FsZWRNYXJnaW4pIC8gc2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgalNyYyA9IE1hdGguZmxvb3IoKGogLSBzY2FsZWRNYXJnaW4pIC8gc2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICBweENvbG9yID0gcGFsZXR0ZVtkYXRhW2lTcmMgKiBzaXplICsgalNyY10gPyAxIDogMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltZ0RhdGFbcG9zRHN0KytdID0gcHhDb2xvci5yO1xuICAgICAgICAgICAgICAgIGltZ0RhdGFbcG9zRHN0KytdID0gcHhDb2xvci5nO1xuICAgICAgICAgICAgICAgIGltZ0RhdGFbcG9zRHN0KytdID0gcHhDb2xvci5iO1xuICAgICAgICAgICAgICAgIGltZ0RhdGFbcG9zRHN0XSA9IHB4Q29sb3IuYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59KTtcbnZhciBjYW52YXMgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4gICAgZnVuY3Rpb24gY2xlYXJDYW52YXMoY3R4LCBjYW52YXMsIHNpemUpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBpZiAoIWNhbnZhcy5zdHlsZSlcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZSA9IHt9O1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gc2l6ZTtcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHNpemUgKyAncHgnO1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBzaXplICsgJ3B4JztcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q2FudmFzRWxlbWVudCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBzcGVjaWZ5IGEgY2FudmFzIGVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnRzLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihxckRhdGEsIGNhbnZhcywgb3B0aW9ucykge1xuICAgICAgICB2YXIgb3B0cyA9IG9wdGlvbnM7XG4gICAgICAgIHZhciBjYW52YXNFbCA9IGNhbnZhcztcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzID09PSAndW5kZWZpbmVkJyAmJiAoIWNhbnZhcyB8fCAhY2FudmFzLmdldENvbnRleHQpKSB7XG4gICAgICAgICAgICBvcHRzID0gY2FudmFzO1xuICAgICAgICAgICAgY2FudmFzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2FudmFzKSB7XG4gICAgICAgICAgICBjYW52YXNFbCA9IGdldENhbnZhc0VsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRzID0gdXRpbHMkMS5nZXRPcHRpb25zKG9wdHMpO1xuICAgICAgICB2YXIgc2l6ZSA9IHV0aWxzJDEuZ2V0SW1hZ2VXaWR0aChxckRhdGEubW9kdWxlcy5zaXplLCBvcHRzKTtcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHZhciBpbWFnZSA9IGN0eC5jcmVhdGVJbWFnZURhdGEoc2l6ZSwgc2l6ZSk7XG4gICAgICAgIHV0aWxzJDEucXJUb0ltYWdlRGF0YShpbWFnZS5kYXRhLCBxckRhdGEsIG9wdHMpO1xuICAgICAgICBjbGVhckNhbnZhcyhjdHgsIGNhbnZhc0VsLCBzaXplKTtcbiAgICAgICAgY3R4LnB1dEltYWdlRGF0YShpbWFnZSwgMCwgMCk7XG4gICAgICAgIHJldHVybiBjYW52YXNFbDtcbiAgICB9O1xuICAgIGV4cG9ydHMucmVuZGVyVG9EYXRhVVJMID0gZnVuY3Rpb24gcmVuZGVyVG9EYXRhVVJMKHFyRGF0YSwgY2FudmFzLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBvcHRzID0gb3B0aW9ucztcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzID09PSAndW5kZWZpbmVkJyAmJiAoIWNhbnZhcyB8fCAhY2FudmFzLmdldENvbnRleHQpKSB7XG4gICAgICAgICAgICBvcHRzID0gY2FudmFzO1xuICAgICAgICAgICAgY2FudmFzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0cylcbiAgICAgICAgICAgIG9wdHMgPSB7fTtcbiAgICAgICAgdmFyIGNhbnZhc0VsID0gZXhwb3J0cy5yZW5kZXIocXJEYXRhLCBjYW52YXMsIG9wdHMpO1xuICAgICAgICB2YXIgdHlwZSA9IG9wdHMudHlwZSB8fCAnaW1hZ2UvcG5nJztcbiAgICAgICAgdmFyIHJlbmRlcmVyT3B0cyA9IG9wdHMucmVuZGVyZXJPcHRzIHx8IHt9O1xuICAgICAgICByZXR1cm4gY2FudmFzRWwudG9EYXRhVVJMKHR5cGUsIHJlbmRlcmVyT3B0cy5xdWFsaXR5KTtcbiAgICB9O1xufSk7XG5mdW5jdGlvbiBnZXRDb2xvckF0dHJpYihjb2xvciwgYXR0cmliKSB7XG4gICAgdmFyIGFscGhhID0gY29sb3IuYSAvIDI1NTtcbiAgICB2YXIgc3RyID0gYXR0cmliICsgJz1cIicgKyBjb2xvci5oZXggKyAnXCInO1xuICAgIHJldHVybiBhbHBoYSA8IDFcbiAgICAgICAgPyBzdHIgKyAnICcgKyBhdHRyaWIgKyAnLW9wYWNpdHk9XCInICsgYWxwaGEudG9GaXhlZCgyKS5zbGljZSgxKSArICdcIidcbiAgICAgICAgOiBzdHI7XG59XG5mdW5jdGlvbiBzdmdDbWQoY21kLCB4LCB5KSB7XG4gICAgdmFyIHN0ciA9IGNtZCArIHg7XG4gICAgaWYgKHR5cGVvZiB5ICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgc3RyICs9ICcgJyArIHk7XG4gICAgcmV0dXJuIHN0cjtcbn1cbmZ1bmN0aW9uIHFyVG9QYXRoKGRhdGEsIHNpemUsIG1hcmdpbikge1xuICAgIHZhciBwYXRoID0gJyc7XG4gICAgdmFyIG1vdmVCeSA9IDA7XG4gICAgdmFyIG5ld1JvdyA9IGZhbHNlO1xuICAgIHZhciBsaW5lTGVuZ3RoID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNvbCA9IE1hdGguZmxvb3IoaSAlIHNpemUpO1xuICAgICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcihpIC8gc2l6ZSk7XG4gICAgICAgIGlmICghY29sICYmICFuZXdSb3cpXG4gICAgICAgICAgICBuZXdSb3cgPSB0cnVlO1xuICAgICAgICBpZiAoZGF0YVtpXSkge1xuICAgICAgICAgICAgbGluZUxlbmd0aCsrO1xuICAgICAgICAgICAgaWYgKCEoaSA+IDAgJiYgY29sID4gMCAmJiBkYXRhW2kgLSAxXSkpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IG5ld1Jvd1xuICAgICAgICAgICAgICAgICAgICA/IHN2Z0NtZCgnTScsIGNvbCArIG1hcmdpbiwgMC41ICsgcm93ICsgbWFyZ2luKVxuICAgICAgICAgICAgICAgICAgICA6IHN2Z0NtZCgnbScsIG1vdmVCeSwgMCk7XG4gICAgICAgICAgICAgICAgbW92ZUJ5ID0gMDtcbiAgICAgICAgICAgICAgICBuZXdSb3cgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKGNvbCArIDEgPCBzaXplICYmIGRhdGFbaSArIDFdKSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gc3ZnQ21kKCdoJywgbGluZUxlbmd0aCk7XG4gICAgICAgICAgICAgICAgbGluZUxlbmd0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb3ZlQnkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocXJEYXRhLCBvcHRpb25zLCBjYikge1xuICAgIHZhciBvcHRzID0gdXRpbHMkMS5nZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIHZhciBzaXplID0gcXJEYXRhLm1vZHVsZXMuc2l6ZTtcbiAgICB2YXIgZGF0YSA9IHFyRGF0YS5tb2R1bGVzLmRhdGE7XG4gICAgdmFyIHFyY29kZXNpemUgPSBzaXplICsgb3B0cy5tYXJnaW4gKiAyO1xuICAgIHZhciBiZyA9ICFvcHRzLmNvbG9yLmxpZ2h0LmFcbiAgICAgICAgPyAnJ1xuICAgICAgICA6ICc8cGF0aCAnICsgZ2V0Q29sb3JBdHRyaWIob3B0cy5jb2xvci5saWdodCwgJ2ZpbGwnKSArXG4gICAgICAgICAgICAnIGQ9XCJNMCAwaCcgKyBxcmNvZGVzaXplICsgJ3YnICsgcXJjb2Rlc2l6ZSArICdIMHpcIi8+JztcbiAgICB2YXIgcGF0aCA9ICc8cGF0aCAnICsgZ2V0Q29sb3JBdHRyaWIob3B0cy5jb2xvci5kYXJrLCAnc3Ryb2tlJykgK1xuICAgICAgICAnIGQ9XCInICsgcXJUb1BhdGgoZGF0YSwgc2l6ZSwgb3B0cy5tYXJnaW4pICsgJ1wiLz4nO1xuICAgIHZhciB2aWV3Qm94ID0gJ3ZpZXdCb3g9XCInICsgJzAgMCAnICsgcXJjb2Rlc2l6ZSArICcgJyArIHFyY29kZXNpemUgKyAnXCInO1xuICAgIHZhciB3aWR0aCA9ICFvcHRzLndpZHRoID8gJycgOiAnd2lkdGg9XCInICsgb3B0cy53aWR0aCArICdcIiBoZWlnaHQ9XCInICsgb3B0cy53aWR0aCArICdcIiAnO1xuICAgIHZhciBzdmdUYWcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgJyArIHdpZHRoICsgdmlld0JveCArICcgc2hhcGUtcmVuZGVyaW5nPVwiY3Jpc3BFZGdlc1wiPicgKyBiZyArIHBhdGggKyAnPC9zdmc+XFxuJztcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNiKG51bGwsIHN2Z1RhZyk7XG4gICAgfVxuICAgIHJldHVybiBzdmdUYWc7XG59O1xudmFyIHN2Z1RhZyA9IHtcbiAgICByZW5kZXI6IHJlbmRlclxufTtcbmZ1bmN0aW9uIHJlbmRlckNhbnZhcyhyZW5kZXJGdW5jLCBjYW52YXMsIHRleHQsIG9wdHMsIGNiKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGFyZ3NOdW0gPSBhcmdzLmxlbmd0aDtcbiAgICB2YXIgaXNMYXN0QXJnQ2IgPSB0eXBlb2YgYXJnc1thcmdzTnVtIC0gMV0gPT09ICdmdW5jdGlvbic7XG4gICAgaWYgKCFpc0xhc3RBcmdDYiAmJiAhY2FuUHJvbWlzZSgpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGJhY2sgcmVxdWlyZWQgYXMgbGFzdCBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoaXNMYXN0QXJnQ2IpIHtcbiAgICAgICAgaWYgKGFyZ3NOdW0gPCAyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvbyBmZXcgYXJndW1lbnRzIHByb3ZpZGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3NOdW0gPT09IDIpIHtcbiAgICAgICAgICAgIGNiID0gdGV4dDtcbiAgICAgICAgICAgIHRleHQgPSBjYW52YXM7XG4gICAgICAgICAgICBjYW52YXMgPSBvcHRzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFyZ3NOdW0gPT09IDMpIHtcbiAgICAgICAgICAgIGlmIChjYW52YXMuZ2V0Q29udGV4dCAmJiB0eXBlb2YgY2IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY2IgPSBvcHRzO1xuICAgICAgICAgICAgICAgIG9wdHMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYiA9IG9wdHM7XG4gICAgICAgICAgICAgICAgb3B0cyA9IHRleHQ7XG4gICAgICAgICAgICAgICAgdGV4dCA9IGNhbnZhcztcbiAgICAgICAgICAgICAgICBjYW52YXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChhcmdzTnVtIDwgMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUb28gZmV3IGFyZ3VtZW50cyBwcm92aWRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzTnVtID09PSAxKSB7XG4gICAgICAgICAgICB0ZXh0ID0gY2FudmFzO1xuICAgICAgICAgICAgY2FudmFzID0gb3B0cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhcmdzTnVtID09PSAyICYmICFjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgICAgICAgICAgb3B0cyA9IHRleHQ7XG4gICAgICAgICAgICB0ZXh0ID0gY2FudmFzO1xuICAgICAgICAgICAgY2FudmFzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcXJjb2RlLmNyZWF0ZSh0ZXh0LCBvcHRzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlbmRlckZ1bmMoZGF0YSwgY2FudmFzLCBvcHRzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHZhciBkYXRhID0gcXJjb2RlLmNyZWF0ZSh0ZXh0LCBvcHRzKTtcbiAgICAgICAgY2IobnVsbCwgcmVuZGVyRnVuYyhkYXRhLCBjYW52YXMsIG9wdHMpKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY2IoZSk7XG4gICAgfVxufVxudmFyIGNyZWF0ZSQxID0gcXJjb2RlLmNyZWF0ZTtcbnZhciB0b0NhbnZhcyA9IHJlbmRlckNhbnZhcy5iaW5kKG51bGwsIGNhbnZhcy5yZW5kZXIpO1xudmFyIHRvRGF0YVVSTCA9IHJlbmRlckNhbnZhcy5iaW5kKG51bGwsIGNhbnZhcy5yZW5kZXJUb0RhdGFVUkwpO1xuLy8gb25seSBzdmcgZm9yIG5vdy5cbnZhciB0b1N0cmluZ18xID0gcmVuZGVyQ2FudmFzLmJpbmQobnVsbCwgZnVuY3Rpb24gKGRhdGEsIF8sIG9wdHMpIHtcbiAgICByZXR1cm4gc3ZnVGFnLnJlbmRlcihkYXRhLCBvcHRzKTtcbn0pO1xudmFyIGJyb3dzZXIgPSB7XG4gICAgY3JlYXRlOiBjcmVhdGUkMSxcbiAgICB0b0NhbnZhczogdG9DYW52YXMsXG4gICAgdG9EYXRhVVJMOiB0b0RhdGFVUkwsXG4gICAgdG9TdHJpbmc6IHRvU3RyaW5nXzFcbn07XG52YXIgYW1wbGlmeVRvdHBTZXR1cENzcyA9IFwiLnRvdHAtc2V0dXB7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWJvdHRvbTozMHB4fS50b3RwLXNldHVwIGltZ3toZWlnaHQ6MTI4cHg7d2lkdGg6MTI4cHh9XCI7XG52YXIgbG9nZ2VyID0gbmV3IExvZ2dlcignVE9UUCcpO1xudmFyIEFtcGxpZnlUT1RQU2V0dXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2xhc3NfMShob3N0UmVmKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgICAgIHRoaXMuaW5wdXRQcm9wcyA9IHtcbiAgICAgICAgICAgIGF1dG9Gb2N1czogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEF1dGggc3RhdGUgY2hhbmdlIGhhbmRsZXIgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gICAgICAgIHRoaXMuaGFuZGxlQXV0aFN0YXRlQ2hhbmdlID0gZGlzcGF0Y2hBdXRoU3RhdGVDaGFuZ2VFdmVudDtcbiAgICAgICAgLyoqIFVzZWQgZm9yIGhlYWRlciB0ZXh0IGluIHRvdHAgc2V0dXAgY29tcG9uZW50ICovXG4gICAgICAgIHRoaXMuaGVhZGVyVGV4dCA9IFRyYW5zbGF0aW9ucy5UT1RQX0hFQURFUl9URVhUO1xuICAgICAgICAvKiogVXNlZCBmb3IgY3VzdG9taXppbmcgdGhlIGlzc3VlciBzdHJpbmcgaW4gdGhlIHFyIGNvZGUgaW1hZ2UgKi9cbiAgICAgICAgdGhpcy5pc3N1ZXIgPSBUcmFuc2xhdGlvbnMuVE9UUF9JU1NVRVI7XG4gICAgICAgIHRoaXMuY29kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2V0dXBNZXNzYWdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5xckNvZGVJbnB1dCA9IG51bGw7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuYnVpbGRPdHBBdXRoUGF0aCA9IGZ1bmN0aW9uICh1c2VyLCBpc3N1ZXIsIHNlY3JldEtleSkge1xuICAgICAgICByZXR1cm4gXCJvdHBhdXRoOi8vdG90cC9cIiArIGlzc3VlciArIFwiOlwiICsgdXNlci51c2VybmFtZSArIFwiP3NlY3JldD1cIiArIHNlY3JldEtleSArIFwiJmlzc3Vlcj1cIiArIGlzc3VlcjtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLm9uVE9UUEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBkYXRhLCB1c2VyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1Zygnb24gdG90cCBldmVudCcsIGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGV2ZW50ID09PSBTRVRVUF9UT1RQICYmIGRhdGEgPT09IFNVQ0NFU1MpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNoZWNrQ29udGFjdCh1c2VyLCB0aGlzLmhhbmRsZUF1dGhTdGF0ZUNoYW5nZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmhhbmRsZVRvdHBJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLnNldHVwTWVzc2FnZSA9IG51bGw7XG4gICAgICAgIHRoaXMucXJDb2RlSW5wdXQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZW5lcmF0ZVFSQ29kZSA9IGZ1bmN0aW9uIChjb2RlRnJvbVRvdHApIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hLCBlcnJvcl8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGJyb3dzZXIudG9EYXRhVVJMKGNvZGVGcm9tVG90cCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5xckNvZGVJbWFnZVNvdXJjZSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50KGVycm9yXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZW5jb2RlZElzc3Vlciwgc2VjcmV0S2V5LCBlcnJvcl8yO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cE1lc3NhZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlZElzc3VlciA9IGVuY29kZVVSSShJMThuLmdldCh0aGlzLmlzc3VlcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFBdXRoIHx8IHR5cGVvZiBBdXRoLnNldHVwVE9UUCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOT19BVVRIX01PRFVMRV9GT1VORCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsIDQsIDVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEF1dGguc2V0dXBUT1RQKHRoaXMudXNlcildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNyZXRLZXkgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ3NlY3JldCBrZXknLCBzZWNyZXRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5idWlsZE90cEF1dGhQYXRoKHRoaXMudXNlciwgZW5jb2RlZElzc3Vlciwgc2VjcmV0S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVRUkNvZGUodGhpcy5jb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hUb2FzdEh1YkV2ZW50KGVycm9yXzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5UT1RQX1NFVFVQX0ZBSUxVUkUpLCBlcnJvcl8yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnZlcmlmeVRvdHBUb2tlbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdXNlciwgZXJyb3JfMztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucXJDb2RlSW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ05vIFRPVFAgQ29kZSBwcm92aWRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIgPSB0aGlzLnVzZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUF1dGggfHwgdHlwZW9mIEF1dGgudmVyaWZ5VG90cFRva2VuICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBBdXRoLnNldFByZWZlcnJlZE1GQSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOT19BVVRIX01PRFVMRV9GT1VORCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgNSwgLCA2XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLnZlcmlmeVRvdHBUb2tlbih1c2VyLCB0aGlzLnFyQ29kZUlucHV0KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEF1dGguc2V0UHJlZmVycmVkTUZBKHVzZXIsIE1mYU9wdGlvbi5UT1RQKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBNZXNzYWdlID0gSTE4bi5nZXQoVHJhbnNsYXRpb25zLlRPVFBfU1VDQ0VTU19NRVNTQUdFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhJMThuLmdldChUcmFuc2xhdGlvbnMuVE9UUF9TVUNDRVNTX01FU1NBR0UpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMub25UT1RQRXZlbnQoU0VUVVBfVE9UUCwgU1VDQ0VTUywgdXNlcildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBNZXNzYWdlID0gSTE4bi5nZXQoVHJhbnNsYXRpb25zLlRPVFBfU0VUVVBfRkFJTFVSRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyb3JfMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gVE9ETyBhZGQgVG9hc3QgY29tcG9uZW50IHRvIHRoZSBUb3Agb2YgdGhlIGZvcm0gc2VjdGlvblxuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIChoKFwiYW1wbGlmeS1mb3JtLXNlY3Rpb25cIiwgeyBoZWFkZXJUZXh0OiBJMThuLmdldCh0aGlzLmhlYWRlclRleHQpLCBzdWJtaXRCdXR0b25UZXh0OiBJMThuLmdldChUcmFuc2xhdGlvbnMuVE9UUF9TVUJNSVRfQlVUVE9OX1RFWFQpLCBoYW5kbGVTdWJtaXQ6IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMudmVyaWZ5VG90cFRva2VuKGV2ZW50KTsgfSwgbG9hZGluZzogdGhpcy5sb2FkaW5nIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0b3RwLXNldHVwXCIgfSwgaChcImltZ1wiLCB7IHNyYzogdGhpcy5xckNvZGVJbWFnZVNvdXJjZSwgYWx0OiBJMThuLmdldChUcmFuc2xhdGlvbnMuUVJfQ09ERV9BTFQpIH0pLCBoKFwiYW1wbGlmeS1mb3JtLWZpZWxkXCIsIHsgbGFiZWw6IEkxOG4uZ2V0KFRyYW5zbGF0aW9ucy5UT1RQX0xBQkVMKSwgaW5wdXRQcm9wczogdGhpcy5pbnB1dFByb3BzLCBmaWVsZElkOiBcInRvdHBDb2RlXCIsIG5hbWU6IFwidG90cENvZGVcIiwgaGFuZGxlSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlVG90cElucHV0Q2hhbmdlKGV2ZW50KTsgfSB9KSkpKTtcbiAgICB9O1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbkFtcGxpZnlUT1RQU2V0dXAuc3R5bGUgPSBhbXBsaWZ5VG90cFNldHVwQ3NzO1xuZXhwb3J0IHsgQW1wbGlmeVJhZGlvQnV0dG9uIGFzIGFtcGxpZnlfcmFkaW9fYnV0dG9uLCBBbXBsaWZ5VE9UUFNldHVwIGFzIGFtcGxpZnlfdG90cF9zZXR1cCB9O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IExvZ2dlciwgaXNFbXB0eSB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9jb3JlJztcbmltcG9ydCB7IEEgYXMgQXV0aFN0YXRlLCBDIGFzIENoYWxsZW5nZU5hbWUgfSBmcm9tICcuL2F1dGgtdHlwZXMtNzhkZjMwNGUuanMnO1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9hdXRoJztcbmltcG9ydCB7IE4gYXMgTk9fQVVUSF9NT0RVTEVfRk9VTkQgfSBmcm9tICcuL2NvbnN0YW50cy1kMWFiZTdkZS5qcyc7XG5pbXBvcnQgeyBhIGFzIGRpc3BhdGNoVG9hc3RIdWJFdmVudCB9IGZyb20gJy4vaGVscGVycy0wMWVjZjVmOS5qcyc7XG52YXIgbG9nZ2VyID0gbmV3IExvZ2dlcignYXV0aC1oZWxwZXJzJyk7XG5mdW5jdGlvbiBjaGVja0NvbnRhY3QodXNlciwgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSwgbmV3VXNlciwgZXJyb3JfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFBdXRoIHx8IHR5cGVvZiBBdXRoLnZlcmlmaWVkQ29udGFjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0FVVEhfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLnZlcmlmaWVkQ29udGFjdCh1c2VyKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRW1wdHkoZGF0YS52ZXJpZmllZCkgfHwgaXNFbXB0eShkYXRhLnVudmVyaWZpZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLlNpZ25lZEluLCB1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1VzZXIgPSBPYmplY3QuYXNzaWduKHVzZXIsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5WZXJpZnlDb250YWN0LCBuZXdVc2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoVG9hc3RIdWJFdmVudChlcnJvcl8xKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxudmFyIGhhbmRsZVNpZ25JbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQsIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdXNlciwgZXJyb3JfMjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoIUF1dGggfHwgdHlwZW9mIEF1dGguc2lnbkluICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOT19BVVRIX01PRFVMRV9GT1VORCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDksICwgMTBdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBBdXRoLnNpZ25Jbih1c2VybmFtZSwgcGFzc3dvcmQpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB1c2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1Zyh1c2VyKTtcbiAgICAgICAgICAgICAgICBpZiAoISh1c2VyLmNoYWxsZW5nZU5hbWUgPT09IENoYWxsZW5nZU5hbWUuU01TTUZBIHx8IHVzZXIuY2hhbGxlbmdlTmFtZSA9PT0gQ2hhbGxlbmdlTmFtZS5Tb2Z0d2FyZVRva2VuTUZBKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdjb25maXJtIHVzZXIgd2l0aCAnICsgdXNlci5jaGFsbGVuZ2VOYW1lKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLkNvbmZpcm1TaWduSW4sIHVzZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmICghKHVzZXIuY2hhbGxlbmdlTmFtZSA9PT0gQ2hhbGxlbmdlTmFtZS5OZXdQYXNzd29yZFJlcXVpcmVkKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdyZXF1aXJlIG5ldyBwYXNzd29yZCcsIHVzZXIuY2hhbGxlbmdlUGFyYW0pO1xuICAgICAgICAgICAgICAgIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuUmVzZXRQYXNzd29yZCwgdXNlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaWYgKCEodXNlci5jaGFsbGVuZ2VOYW1lID09PSBDaGFsbGVuZ2VOYW1lLk1GQVNldHVwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdUT1RQIHNldHVwJywgdXNlci5jaGFsbGVuZ2VQYXJhbSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5UT1RQU2V0dXAsIHVzZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGlmICghKHVzZXIuY2hhbGxlbmdlTmFtZSA9PT0gQ2hhbGxlbmdlTmFtZS5DdXN0b21DaGFsbGVuZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgdXNlci5jaGFsbGVuZ2VQYXJhbSAmJlxuICAgICAgICAgICAgICAgICAgICB1c2VyLmNoYWxsZW5nZVBhcmFtLnRyaWdnZXIgPT09ICd0cnVlJykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnY3VzdG9tIGNoYWxsZW5nZScsIHVzZXIuY2hhbGxlbmdlUGFyYW0pO1xuICAgICAgICAgICAgICAgIGhhbmRsZUF1dGhTdGF0ZUNoYW5nZShBdXRoU3RhdGUuQ3VzdG9tQ29uZmlybVNpZ25JbiwgdXNlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNoZWNrQ29udGFjdCh1c2VyLCBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UpXTtcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSA4O1xuICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzMgLypicmVhayovLCAxMF07XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgZXJyb3JfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaFRvYXN0SHViRXZlbnQoZXJyb3JfMik7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yXzIuY29kZSA9PT0gJ1VzZXJOb3RDb25maXJtZWRFeGNlcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygndGhlIHVzZXIgaXMgbm90IGNvbmZpcm1lZCcpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVBdXRoU3RhdGVDaGFuZ2UoQXV0aFN0YXRlLkNvbmZpcm1TaWduVXAsIHsgdXNlcm5hbWU6IHVzZXJuYW1lIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnJvcl8yLmNvZGUgPT09ICdQYXNzd29yZFJlc2V0UmVxdWlyZWRFeGNlcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygndGhlIHVzZXIgcmVxdWlyZXMgYSBuZXcgcGFzc3dvcmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXV0aFN0YXRlQ2hhbmdlKEF1dGhTdGF0ZS5Gb3Jnb3RQYXNzd29yZCwgeyB1c2VybmFtZTogdXNlcm5hbWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcbiAgICAgICAgICAgIGNhc2UgMTA6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG5leHBvcnQgeyBjaGVja0NvbnRhY3QgYXMgYywgaGFuZGxlU2lnbkluIGFzIGggfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=