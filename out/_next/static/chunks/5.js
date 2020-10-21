(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[5],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-s3-album.entry.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-s3-album.entry.js ***!
  \****************************************************************************************/
/*! exports provided: amplify_s3_album */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_s3_album", function() { return AmplifyS3Album; });
/* harmony import */ var _index_39969785_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-39969785.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-39969785.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-types-f257c0f2.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/storage-types-f257c0f2.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-392acb9b.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-392acb9b.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-amplify/storage */ "./node_modules/@aws-amplify/storage/lib-esm/index.js");
/* harmony import */ var _storage_helpers_1c8a0f88_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage-helpers-1c8a0f88.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/storage-helpers-1c8a0f88.js");
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};








// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
    return getRandomValues(rnds8);
}
var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate(uuid) {
    return typeof uuid === 'string' && REGEX.test(uuid);
}
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).substr(1));
}
function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!validate(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for (var i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return stringify(rnds);
}
var amplifyS3AlbumCss = ":host{--overlay-bg-color:rgba(0, 0, 0, 0.15)}.album-container{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;margin:0 auto;padding:0 2rem}.grid-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-1rem -1rem;padding-bottom:3rem}.grid-item{position:relative;-ms-flex:1 0 22rem;flex:1 0 22rem;-ms-flex-positive:1;flex-grow:1;margin:1rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}amplify-s3-image{--width:22rem;--height:20rem;border-radius:5px;-o-object-fit:cover;object-fit:cover}.img-overlay{display:none;width:100%;height:21rem;position:absolute;top:0;left:0;background-color:var(--overlay-bg-color)}.grid-item:hover .img-overlay{display:block}";
var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('S3Album');
var AmplifyS3Album = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = 'binary/octet-stream';
        /** The access level of the files */
        this.level = _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__["A"].Public;
        /** Boolean to enable or disable picker */
        this.picker = true;
        /** Picker button text */
        this.pickerText = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_4__["T"].PICKER_TEXT;
        this.albumItems = [];
        this.imgArr = {};
        this.list = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, path, level, track, identityId, data, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this, _b = _a.path, path = _b === void 0 ? '' : _b, level = _a.level, track = _a.track, identityId = _a.identityId;
                        logger.debug('Album path: ' + path);
                        if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"].list !== 'function') {
                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["e"]);
                        }
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"].list(path, {
                                level: level,
                                track: track,
                                identityId: identityId,
                            })];
                    case 2:
                        data = _c.sent();
                        this.marshal(data);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        logger.warn(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.marshal = function (list) {
            list.forEach(function (item) {
                var name = item.key.toLowerCase();
                var ext = name.split('.')[1];
                if (_storage_helpers_1c8a0f88_js__WEBPACK_IMPORTED_MODULE_7__["i"].has(ext)) {
                    if (!item.contentType || (item.contentType && item.contentType === 'binary/octet-stream')) {
                        item.contentType = _this.getContentType(item);
                    }
                }
            });
            var filtered = list.filter(function (item) { return item.contentType && item.contentType.startsWith('image/'); });
            var items = _this.filter ? _this.filter(filtered) : filtered;
            items = _this.sort ? _this.sort(items) : items;
            _this.albumItems = items;
            logger.debug('album items', _this.albumItems);
            _this.constructImgArray(_this.albumItems);
        };
        this.constructImgArray = function (list) {
            list.map(function (item) {
                _this.imgArr["" + item['key']] = item['key'];
            });
        };
        this.handlePick = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var file, _a, _b, path, level, track, fileToKey, key, error_2, filtered;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        file = event.target.files[0];
                        _a = this, _b = _a.path, path = _b === void 0 ? '' : _b, level = _a.level, track = _a.track, fileToKey = _a.fileToKey;
                        key = path + Object(_storage_helpers_1c8a0f88_js__WEBPACK_IMPORTED_MODULE_7__["c"])(file, fileToKey);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Object(_storage_helpers_1c8a0f88_js__WEBPACK_IMPORTED_MODULE_7__["p"])(key, file, level, track, file['type'], logger)];
                    case 2:
                        _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _c.sent();
                        logger.error(error_2);
                        throw new Error(error_2);
                    case 4:
                        if (Object.keys(this.imgArr).includes(key)) {
                            this.albumItems = __spreadArrays(this.albumItems);
                            this.imgArr[key] = key + "-" + v4();
                        }
                        else {
                            filtered = __spreadArrays(this.albumItems, (this.filter ? this.filter([{ key: key }]) : [{ key: key }]));
                            this.albumItems = this.sort ? this.sort(filtered) : filtered;
                        }
                        return [2 /*return*/];
                }
            });
        }); };
    }
    class_1.prototype.getContentType = function (item) {
        return Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["filenameToContentType"])(item.key, 'image/*');
    };
    class_1.prototype.componentWillLoad = function () {
        this.list();
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "album-container" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "grid-row" }, this.albumItems.map(function (item) {
            return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "grid-item", key: "key-" + item.key }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-s3-image", { key: _this.imgArr[item.key], imgKey: item.key, level: _this.level, path: _this.path, identityId: _this.identityId, track: _this.track, handleOnError: _this.handleOnError, handleOnLoad: _this.handleOnLoad }), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "img-overlay" })));
        }))), this.picker && (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-picker", { pickerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.pickerText), inputHandler: function (e) { return _this.handlePick(e); }, acceptValue: "image/*" }))));
    };
    return class_1;
}());
AmplifyS3Album.style = amplifyS3AlbumCss;



/***/ }),

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/storage-helpers-1c8a0f88.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/storage-helpers-1c8a0f88.js ***!
  \******************************************************************************************/
/*! exports provided: a, c, g, i, p */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTextSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return calcKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getStorageObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return imageFileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return putStorageObject; });
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/storage */ "./node_modules/@aws-amplify/storage/lib-esm/index.js");
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


var imageFileType = new Set([
    'apng',
    'bmp',
    'gif',
    'ico',
    'cur',
    'jpg',
    'jpeg',
    'jfif',
    'pjpeg',
    'pjp',
    'png',
    'svg',
    'tif',
    'tiff',
    'webp',
]);
var calcKey = function (file, fileToKey) {
    var name = file.name, size = file.size, type = file.type;
    var key = encodeURI(name);
    if (fileToKey) {
        if (typeof fileToKey === 'string') {
            key = fileToKey;
        }
        else if (typeof fileToKey === 'function') {
            key = fileToKey({ name: name, size: size, type: type });
        }
        else {
            key = encodeURI(JSON.stringify(fileToKey));
        }
        if (!key) {
            key = 'empty_key';
        }
    }
    return key.replace(/\s/g, '_');
};
var getStorageObject = function (key, level, track, identityId, logger) { return __awaiter(void 0, void 0, void 0, function () {
    var src, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].get !== 'function') {
                    throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_0__["e"]);
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].get(key, { level: level, track: track, identityId: identityId })];
            case 2:
                src = _a.sent();
                logger.debug('Storage image get', src);
                return [2 /*return*/, src];
            case 3:
                error_1 = _a.sent();
                throw new Error(error_1);
            case 4: return [2 /*return*/];
        }
    });
}); };
var readFileAsync = function (blob) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () {
            resolve(reader.result);
        };
        reader.onerror = function () {
            reject('Failed to read file!');
            reader.abort();
        };
        reader.readAsText(blob);
    });
};
var getTextSource = function (key, level, track, identityId, logger) { return __awaiter(void 0, void 0, void 0, function () {
    var textSrc, text, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].get !== 'function') {
                    throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_0__["e"]);
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].get(key, {
                        download: true,
                        level: level,
                        track: track,
                        identityId: identityId,
                    })];
            case 2:
                textSrc = _a.sent();
                logger.debug(textSrc);
                return [4 /*yield*/, readFileAsync(textSrc['Body'])];
            case 3:
                text = (_a.sent());
                return [2 /*return*/, text];
            case 4:
                error_2 = _a.sent();
                throw new Error(error_2);
            case 5: return [2 /*return*/];
        }
    });
}); };
var putStorageObject = function (key, body, level, track, contentType, logger) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].put !== 'function') {
                    throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_0__["e"]);
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].put(key, body, {
                        contentType: contentType,
                        level: level,
                        track: track,
                    })];
            case 2:
                data = _a.sent();
                logger.debug('Upload data', data);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                throw new Error(error_3);
            case 4: return [2 /*return*/];
        }
    });
}); };



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LXMzLWFsYnVtLmVudHJ5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGF3cy1hbXBsaWZ5L3VpLWNvbXBvbmVudHMvZGlzdC9lc20tZXM1L3N0b3JhZ2UtaGVscGVycy0xYzhhMGY4OC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMs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YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCB9IGZyb20gJy4vaW5kZXgtMzk5Njk3ODUuanMnO1xuaW1wb3J0IHsgTG9nZ2VyLCBmaWxlbmFtZVRvQ29udGVudFR5cGUsIEkxOG4gfSBmcm9tICdAYXdzLWFtcGxpZnkvY29yZSc7XG5pbXBvcnQgeyBBIGFzIEFjY2Vzc0xldmVsIH0gZnJvbSAnLi9zdG9yYWdlLXR5cGVzLWYyNTdjMGYyLmpzJztcbmltcG9ydCAnQGF3cy1hbXBsaWZ5L2F1dGgnO1xuaW1wb3J0IHsgVCBhcyBUcmFuc2xhdGlvbnMgfSBmcm9tICcuL1RyYW5zbGF0aW9ucy0zOTJhY2I5Yi5qcyc7XG5pbXBvcnQgeyBlIGFzIE5PX1NUT1JBR0VfTU9EVUxFX0ZPVU5EIH0gZnJvbSAnLi9jb25zdGFudHMtZDFhYmU3ZGUuanMnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9zdG9yYWdlJztcbmltcG9ydCB7IGkgYXMgaW1hZ2VGaWxlVHlwZSwgYyBhcyBjYWxjS2V5LCBwIGFzIHB1dFN0b3JhZ2VPYmplY3QgfSBmcm9tICcuL3N0b3JhZ2UtaGVscGVycy0xYzhhMGY4OC5qcyc7XG4vLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbi8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZnVuY3Rpb24gcm5nKCkge1xuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59XG52YXIgUkVHRVggPSAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7XG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gICAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAgIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICAgIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gICAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAgIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcbiAgICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICAgIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICAgIGlmIChidWYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxudmFyIGFtcGxpZnlTM0FsYnVtQ3NzID0gXCI6aG9zdHstLW92ZXJsYXktYmctY29sb3I6cmdiYSgwLCAwLCAwLCAwLjE1KX0uYWxidW0tY29udGFpbmVyey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXgtd2lkdGg6MTAwJTttYXJnaW46MCBhdXRvO3BhZGRpbmc6MCAycmVtfS5ncmlkLXJvd3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7bWFyZ2luOi0xcmVtIC0xcmVtO3BhZGRpbmctYm90dG9tOjNyZW19LmdyaWQtaXRlbXtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxIDAgMjJyZW07ZmxleDoxIDAgMjJyZW07LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTttYXJnaW46MXJlbTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfWFtcGxpZnktczMtaW1hZ2V7LS13aWR0aDoyMnJlbTstLWhlaWdodDoyMHJlbTtib3JkZXItcmFkaXVzOjVweDstby1vYmplY3QtZml0OmNvdmVyO29iamVjdC1maXQ6Y292ZXJ9LmltZy1vdmVybGF5e2Rpc3BsYXk6bm9uZTt3aWR0aDoxMDAlO2hlaWdodDoyMXJlbTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1vdmVybGF5LWJnLWNvbG9yKX0uZ3JpZC1pdGVtOmhvdmVyIC5pbWctb3ZlcmxheXtkaXNwbGF5OmJsb2NrfVwiO1xudmFyIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ1MzQWxidW0nKTtcbnZhciBBbXBsaWZ5UzNBbGJ1bSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIFRoZSBjb250ZW50IHR5cGUgaGVhZGVyIHVzZWQgd2hlbiB1cGxvYWRpbmcgdG8gUzMgKi9cbiAgICAgICAgdGhpcy5jb250ZW50VHlwZSA9ICdiaW5hcnkvb2N0ZXQtc3RyZWFtJztcbiAgICAgICAgLyoqIFRoZSBhY2Nlc3MgbGV2ZWwgb2YgdGhlIGZpbGVzICovXG4gICAgICAgIHRoaXMubGV2ZWwgPSBBY2Nlc3NMZXZlbC5QdWJsaWM7XG4gICAgICAgIC8qKiBCb29sZWFuIHRvIGVuYWJsZSBvciBkaXNhYmxlIHBpY2tlciAqL1xuICAgICAgICB0aGlzLnBpY2tlciA9IHRydWU7XG4gICAgICAgIC8qKiBQaWNrZXIgYnV0dG9uIHRleHQgKi9cbiAgICAgICAgdGhpcy5waWNrZXJUZXh0ID0gVHJhbnNsYXRpb25zLlBJQ0tFUl9URVhUO1xuICAgICAgICB0aGlzLmFsYnVtSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5pbWdBcnIgPSB7fTtcbiAgICAgICAgdGhpcy5saXN0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgcGF0aCwgbGV2ZWwsIHRyYWNrLCBpZGVudGl0eUlkLCBkYXRhLCBlcnJvcl8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzLCBfYiA9IF9hLnBhdGgsIHBhdGggPSBfYiA9PT0gdm9pZCAwID8gJycgOiBfYiwgbGV2ZWwgPSBfYS5sZXZlbCwgdHJhY2sgPSBfYS50cmFjaywgaWRlbnRpdHlJZCA9IF9hLmlkZW50aXR5SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ0FsYnVtIHBhdGg6ICcgKyBwYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghU3RvcmFnZSB8fCB0eXBlb2YgU3RvcmFnZS5saXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX1NUT1JBR0VfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFN0b3JhZ2UubGlzdChwYXRoLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGVudGl0eUlkOiBpZGVudGl0eUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFyc2hhbChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oZXJyb3JfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9O1xuICAgICAgICB0aGlzLm1hcnNoYWwgPSBmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBpdGVtLmtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHZhciBleHQgPSBuYW1lLnNwbGl0KCcuJylbMV07XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlRmlsZVR5cGUuaGFzKGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtLmNvbnRlbnRUeXBlIHx8IChpdGVtLmNvbnRlbnRUeXBlICYmIGl0ZW0uY29udGVudFR5cGUgPT09ICdiaW5hcnkvb2N0ZXQtc3RyZWFtJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY29udGVudFR5cGUgPSBfdGhpcy5nZXRDb250ZW50VHlwZShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGZpbHRlcmVkID0gbGlzdC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uY29udGVudFR5cGUgJiYgaXRlbS5jb250ZW50VHlwZS5zdGFydHNXaXRoKCdpbWFnZS8nKTsgfSk7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBfdGhpcy5maWx0ZXIgPyBfdGhpcy5maWx0ZXIoZmlsdGVyZWQpIDogZmlsdGVyZWQ7XG4gICAgICAgICAgICBpdGVtcyA9IF90aGlzLnNvcnQgPyBfdGhpcy5zb3J0KGl0ZW1zKSA6IGl0ZW1zO1xuICAgICAgICAgICAgX3RoaXMuYWxidW1JdGVtcyA9IGl0ZW1zO1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdhbGJ1bSBpdGVtcycsIF90aGlzLmFsYnVtSXRlbXMpO1xuICAgICAgICAgICAgX3RoaXMuY29uc3RydWN0SW1nQXJyYXkoX3RoaXMuYWxidW1JdGVtcyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29uc3RydWN0SW1nQXJyYXkgPSBmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICAgICAgbGlzdC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5pbWdBcnJbXCJcIiArIGl0ZW1bJ2tleSddXSA9IGl0ZW1bJ2tleSddO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlUGljayA9IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZpbGUsIF9hLCBfYiwgcGF0aCwgbGV2ZWwsIHRyYWNrLCBmaWxlVG9LZXksIGtleSwgZXJyb3JfMiwgZmlsdGVyZWQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzLCBfYiA9IF9hLnBhdGgsIHBhdGggPSBfYiA9PT0gdm9pZCAwID8gJycgOiBfYiwgbGV2ZWwgPSBfYS5sZXZlbCwgdHJhY2sgPSBfYS50cmFjaywgZmlsZVRvS2V5ID0gX2EuZmlsZVRvS2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gcGF0aCArIGNhbGNLZXkoZmlsZSwgZmlsZVRvS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHB1dFN0b3JhZ2VPYmplY3Qoa2V5LCBmaWxlLCBsZXZlbCwgdHJhY2ssIGZpbGVbJ3R5cGUnXSwgbG9nZ2VyKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8yID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGVycm9yXzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yXzIpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5pbWdBcnIpLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsYnVtSXRlbXMgPSBfX3NwcmVhZEFycmF5cyh0aGlzLmFsYnVtSXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1nQXJyW2tleV0gPSBrZXkgKyBcIi1cIiArIHY0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZCA9IF9fc3ByZWFkQXJyYXlzKHRoaXMuYWxidW1JdGVtcywgKHRoaXMuZmlsdGVyID8gdGhpcy5maWx0ZXIoW3sga2V5OiBrZXkgfV0pIDogW3sga2V5OiBrZXkgfV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsYnVtSXRlbXMgPSB0aGlzLnNvcnQgPyB0aGlzLnNvcnQoZmlsdGVyZWQpIDogZmlsdGVyZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9O1xuICAgIH1cbiAgICBjbGFzc18xLnByb3RvdHlwZS5nZXRDb250ZW50VHlwZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBmaWxlbmFtZVRvQ29udGVudFR5cGUoaXRlbS5rZXksICdpbWFnZS8qJyk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5saXN0KCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoaChcImRpdlwiLCBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxidW0tY29udGFpbmVyXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImdyaWQtcm93XCIgfSwgdGhpcy5hbGJ1bUl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiZ3JpZC1pdGVtXCIsIGtleTogXCJrZXktXCIgKyBpdGVtLmtleSB9LCBoKFwiYW1wbGlmeS1zMy1pbWFnZVwiLCB7IGtleTogX3RoaXMuaW1nQXJyW2l0ZW0ua2V5XSwgaW1nS2V5OiBpdGVtLmtleSwgbGV2ZWw6IF90aGlzLmxldmVsLCBwYXRoOiBfdGhpcy5wYXRoLCBpZGVudGl0eUlkOiBfdGhpcy5pZGVudGl0eUlkLCB0cmFjazogX3RoaXMudHJhY2ssIGhhbmRsZU9uRXJyb3I6IF90aGlzLmhhbmRsZU9uRXJyb3IsIGhhbmRsZU9uTG9hZDogX3RoaXMuaGFuZGxlT25Mb2FkIH0pLCBoKFwic3BhblwiLCB7IGNsYXNzOiBcImltZy1vdmVybGF5XCIgfSkpKTtcbiAgICAgICAgfSkpKSwgdGhpcy5waWNrZXIgJiYgKGgoXCJhbXBsaWZ5LXBpY2tlclwiLCB7IHBpY2tlclRleHQ6IEkxOG4uZ2V0KHRoaXMucGlja2VyVGV4dCksIGlucHV0SGFuZGxlcjogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLmhhbmRsZVBpY2soZSk7IH0sIGFjY2VwdFZhbHVlOiBcImltYWdlLypcIiB9KSkpKTtcbiAgICB9O1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbkFtcGxpZnlTM0FsYnVtLnN0eWxlID0gYW1wbGlmeVMzQWxidW1Dc3M7XG5leHBvcnQgeyBBbXBsaWZ5UzNBbGJ1bSBhcyBhbXBsaWZ5X3MzX2FsYnVtIH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgZSBhcyBOT19TVE9SQUdFX01PRFVMRV9GT1VORCB9IGZyb20gJy4vY29uc3RhbnRzLWQxYWJlN2RlLmpzJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAYXdzLWFtcGxpZnkvc3RvcmFnZSc7XG52YXIgaW1hZ2VGaWxlVHlwZSA9IG5ldyBTZXQoW1xuICAgICdhcG5nJyxcbiAgICAnYm1wJyxcbiAgICAnZ2lmJyxcbiAgICAnaWNvJyxcbiAgICAnY3VyJyxcbiAgICAnanBnJyxcbiAgICAnanBlZycsXG4gICAgJ2pmaWYnLFxuICAgICdwanBlZycsXG4gICAgJ3BqcCcsXG4gICAgJ3BuZycsXG4gICAgJ3N2ZycsXG4gICAgJ3RpZicsXG4gICAgJ3RpZmYnLFxuICAgICd3ZWJwJyxcbl0pO1xudmFyIGNhbGNLZXkgPSBmdW5jdGlvbiAoZmlsZSwgZmlsZVRvS2V5KSB7XG4gICAgdmFyIG5hbWUgPSBmaWxlLm5hbWUsIHNpemUgPSBmaWxlLnNpemUsIHR5cGUgPSBmaWxlLnR5cGU7XG4gICAgdmFyIGtleSA9IGVuY29kZVVSSShuYW1lKTtcbiAgICBpZiAoZmlsZVRvS2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsZVRvS2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAga2V5ID0gZmlsZVRvS2V5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBmaWxlVG9LZXkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGtleSA9IGZpbGVUb0tleSh7IG5hbWU6IG5hbWUsIHNpemU6IHNpemUsIHR5cGU6IHR5cGUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBrZXkgPSBlbmNvZGVVUkkoSlNPTi5zdHJpbmdpZnkoZmlsZVRvS2V5KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIGtleSA9ICdlbXB0eV9rZXknO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXkucmVwbGFjZSgvXFxzL2csICdfJyk7XG59O1xudmFyIGdldFN0b3JhZ2VPYmplY3QgPSBmdW5jdGlvbiAoa2V5LCBsZXZlbCwgdHJhY2ssIGlkZW50aXR5SWQsIGxvZ2dlcikgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3JjLCBlcnJvcl8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmICghU3RvcmFnZSB8fCB0eXBlb2YgU3RvcmFnZS5nZXQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX1NUT1JBR0VfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgU3RvcmFnZS5nZXQoa2V5LCB7IGxldmVsOiBsZXZlbCwgdHJhY2s6IHRyYWNrLCBpZGVudGl0eUlkOiBpZGVudGl0eUlkIH0pXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBzcmMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdTdG9yYWdlIGltYWdlIGdldCcsIHNyYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHNyY107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JfMSk7XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG52YXIgcmVhZEZpbGVBc3luYyA9IGZ1bmN0aW9uIChibG9iKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlamVjdCgnRmFpbGVkIHRvIHJlYWQgZmlsZSEnKTtcbiAgICAgICAgICAgIHJlYWRlci5hYm9ydCgpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKTtcbiAgICB9KTtcbn07XG52YXIgZ2V0VGV4dFNvdXJjZSA9IGZ1bmN0aW9uIChrZXksIGxldmVsLCB0cmFjaywgaWRlbnRpdHlJZCwgbG9nZ2VyKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ZXh0U3JjLCB0ZXh0LCBlcnJvcl8yO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmICghU3RvcmFnZSB8fCB0eXBlb2YgU3RvcmFnZS5nZXQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX1NUT1JBR0VfTU9EVUxFX0ZPVU5EKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgNCwgLCA1XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgU3RvcmFnZS5nZXQoa2V5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrOiB0cmFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkZW50aXR5SWQ6IGlkZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0ZXh0U3JjID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1Zyh0ZXh0U3JjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZWFkRmlsZUFzeW5jKHRleHRTcmNbJ0JvZHknXSldO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRleHQgPSAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGV4dF07XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgZXJyb3JfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JfMik7XG4gICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG52YXIgcHV0U3RvcmFnZU9iamVjdCA9IGZ1bmN0aW9uIChrZXksIGJvZHksIGxldmVsLCB0cmFjaywgY29udGVudFR5cGUsIGxvZ2dlcikgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGF0YSwgZXJyb3JfMztcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoIVN0b3JhZ2UgfHwgdHlwZW9mIFN0b3JhZ2UucHV0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihOT19TVE9SQUdFX01PRFVMRV9GT1VORCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFN0b3JhZ2UucHV0KGtleSwgYm9keSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGNvbnRlbnRUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ1VwbG9hZCBkYXRhJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfMyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JfMyk7XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG5leHBvcnQgeyBnZXRUZXh0U291cmNlIGFzIGEsIGNhbGNLZXkgYXMgYywgZ2V0U3RvcmFnZU9iamVjdCBhcyBnLCBpbWFnZUZpbGVUeXBlIGFzIGksIHB1dFN0b3JhZ2VPYmplY3QgYXMgcCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==