(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[14],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-chatbot.entry.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-chatbot.entry.js ***!
  \***************************************************************************************/
/*! exports provided: amplify_chatbot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_chatbot", function() { return AmplifyChatbot; });
/* harmony import */ var _index_39969785_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-39969785.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-39969785.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translations-392acb9b.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-392acb9b.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-amplify/interactions */ "./node_modules/@aws-amplify/interactions/lib-esm/index.js");
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






// AudioRecorder settings
var RECORDER_EXPORT_MIME_TYPE = 'application/octet-stream';
var DEFAULT_EXPORT_SAMPLE_RATE = 16000;
var FFT_SIZE = 2048; // window size in samples for Fast Fourier Transform (FFT)
var FFT_MAX_DECIBELS = -10; // maximum power value in the scaling range for the FFT analysis data
var FFT_MIN_DECIBELS = -90; // minimum power value in the scaling range for the FFT analysis data
var FFT_SMOOTHING_TIME_CONSTANT = 0.85; // averaging constant with the last analysis frame
/**
 * Merges multiple buffers into one.
 */
var mergeBuffers = function (bufferArray, recLength) {
    var result = new Float32Array(recLength);
    var offset = 0;
    for (var i = 0; i < bufferArray.length; i++) {
        result.set(bufferArray[i], offset);
        offset += bufferArray[i].length;
    }
    return result;
};
/**
 * Downsamples audio to desired export sample rate.
 */
var downsampleBuffer = function (buffer, recordSampleRate, exportSampleRate) {
    if (exportSampleRate === recordSampleRate) {
        return buffer;
    }
    var sampleRateRatio = recordSampleRate / exportSampleRate;
    var newLength = Math.round(buffer.length / sampleRateRatio);
    var result = new Float32Array(newLength);
    var offsetResult = 0;
    var offsetBuffer = 0;
    while (offsetResult < result.length) {
        var nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
        var accum = 0, count = 0;
        for (var i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
            accum += buffer[i];
            count++;
        }
        result[offsetResult] = accum / count;
        offsetResult++;
        offsetBuffer = nextOffsetBuffer;
    }
    return result;
};
/**
 * converts raw audio values to 16 bit pcm.
 */
var floatTo16BitPCM = function (output, offset, input) {
    var byteOffset = offset;
    for (var i = 0; i < input.length; i++, byteOffset += 2) {
        var s = Math.max(-1, Math.min(1, input[i]));
        output.setInt16(byteOffset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
};
/**
 * Write given strings in big-endian order.
 */
var writeString = function (view, offset, string) {
    for (var i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }
};
/**
 * Encodes raw pcm audio into a wav file.
 */
var encodeWAV = function (samples, exportSampleRate) {
    /**
     * WAV file consists of three parts: RIFF header, WAVE subchunk, and data subchunk. We precompute the size of them.
     */
    var audioSize = samples.length * 2; // We use 16-bit samples, so we have (2 * sampleLength) bytes.
    var fmtSize = 24; // Byte size of the fmt subchunk: 24 bytes that the audio information that we'll set below.
    var dataSize = 8 + audioSize; // Byte size of the data subchunk: raw sound data plus 8 bytes for the subchunk descriptions.
    var totalByteSize = 12 + fmtSize + dataSize; // Byte size of the whole file, including the chunk header / descriptor.
    // create DataView object to write byte values into
    var buffer = new ArrayBuffer(totalByteSize); // buffer to write the chunk values in.
    var view = new DataView(buffer);
    /**
     * Start writing the .wav file. We write top to bottom, so byte offset (first numeric argument) increases strictly.
     */
    // RIFF header
    writeString(view, 0, 'RIFF'); // At offset 0, write the letters "RIFF"
    view.setUint32(4, fmtSize + dataSize, true); // At offset 4, write the size of fmt and data chunk size combined.
    writeString(view, 8, 'WAVE'); // At offset 8, write the format type "WAVE"
    // fmt subchunk
    writeString(view, 12, 'fmt '); //chunkdId 'fmt '
    view.setUint32(16, fmtSize - 8, true); // fmt subchunk size below this value. We set 8 bytes already, so subtract 8 bytes from fmtSize.
    view.setUint16(20, 1, true); // Audiio format code, which is 1 for PCM.
    view.setUint16(22, 1, true); // Number of audio channels. We use mono, ie 1.
    view.setUint32(24, exportSampleRate, true); // Sample rate of the audio file.
    view.setUint32(28, exportSampleRate * 2, true); // Data rate, or # of data bytes per second. Since each sample is 2 bytes, this is 2 * sampleRate.
    view.setUint16(32, 2, true); // block align, # of bytes per sample including all channels, ie. 2 bytes.
    view.setUint16(34, 16, true); // bits per sample, ie. 16 bits
    // data subchunk
    writeString(view, 36, 'data'); // write the chunkId 'data'
    view.setUint32(40, audioSize, true); // Audio byte size
    floatTo16BitPCM(view, 44, samples); // raw pcm values then go here.
    return view;
};
/**
 * Given arrays of raw pcm audio, downsamples the audio to desired sample rate and encodes it to a wav audio file.
 *
 * @param recBuffer {Float32Array[]} - 2d float array containing the recorded raw audio
 * @param recLength {number} - total length of recorded audio
 * @param recordSampleRate {number} - sample rate of the recorded audio
 * @param exportSampleRate {number} - desired sample rate of the exported file
 */
var exportBuffer = function (recBuffer, recLength, recordSampleRate, exportSampleRate) {
    var mergedBuffers = mergeBuffers(recBuffer, recLength);
    var downsampledBuffer = downsampleBuffer(mergedBuffers, recordSampleRate, exportSampleRate);
    var encodedWav = encodeWAV(downsampledBuffer, exportSampleRate);
    var audioBlob = new Blob([encodedWav], {
        type: RECORDER_EXPORT_MIME_TYPE,
    });
    return audioBlob;
};
var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('AudioRecorder');
var AudioRecorder = /** @class */ (function () {
    function AudioRecorder(options) {
        // input mic stream is stored in a buffer
        this.streamBuffer = [];
        this.streamBufferLength = 0;
        this.recording = false;
        this.options = options;
    }
    /**
     * This must be called first to enable audio context and request microphone access.
     * Once access granted, it connects all the necessary audio nodes to the context so that it can begin recording or playing.
     */
    AudioRecorder.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["browserOrNode"])().isBrowser) return [3 /*break*/, 2];
                        window.AudioContext = window.AudioContext || window.webkitAudioContext;
                        this.audioContext = new AudioContext();
                        return [4 /*yield*/, navigator.mediaDevices
                                .getUserMedia({ audio: true })
                                .then(function (stream) {
                                _this.audioSupported = true;
                                _this.setupAudioNodes(stream);
                            })
                                .catch(function () {
                                _this.audioSupported = false;
                                return Promise.reject('Audio is not supported');
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.audioSupported = false;
                        return [2 /*return*/, Promise.reject('Audio is not supported')];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Setup audio nodes after successful `init`.
     */
    AudioRecorder.prototype.setupAudioNodes = function (stream) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1, sourceNode, processorNode, analyserNode;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.audioContext.resume()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        logger.error(err_1);
                        return [3 /*break*/, 3];
                    case 3:
                        sourceNode = this.audioContext.createMediaStreamSource(stream);
                        processorNode = this.audioContext.createScriptProcessor(4096, 1, 1);
                        processorNode.onaudioprocess = function (audioProcessingEvent) {
                            if (!_this.recording)
                                return;
                            var stream = audioProcessingEvent.inputBuffer.getChannelData(0);
                            _this.streamBuffer.push(new Float32Array(stream)); // set to a copy of the stream
                            _this.streamBufferLength += stream.length;
                            _this.analyse();
                        };
                        analyserNode = this.audioContext.createAnalyser();
                        analyserNode.minDecibels = FFT_MIN_DECIBELS;
                        analyserNode.maxDecibels = FFT_MAX_DECIBELS;
                        analyserNode.smoothingTimeConstant = FFT_SMOOTHING_TIME_CONSTANT;
                        sourceNode.connect(analyserNode);
                        analyserNode.connect(processorNode);
                        processorNode.connect(sourceNode.context.destination);
                        this.analyserNode = analyserNode;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Start recording audio and listen for silence.
     *
     * @param onSilence {SilenceHandler} - called whenever silence is detected
     * @param visualizer {Visualizer} - called with audio data on each audio process to be used for visualization.
     */
    AudioRecorder.prototype.startRecording = function (onSilence, visualizer) {
        return __awaiter(this, void 0, void 0, function () {
            var context, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.recording || !this.audioSupported)
                            return [2 /*return*/];
                        this.onSilence = onSilence || function () { };
                        this.visualizer = visualizer || function () { };
                        context = this.audioContext;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, context.resume()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        logger.error(err_2);
                        return [3 /*break*/, 4];
                    case 4:
                        this.start = Date.now();
                        this.recording = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Pause recording
     */
    AudioRecorder.prototype.stopRecording = function () {
        if (!this.audioSupported)
            return;
        this.recording = false;
    };
    /**
     * Pause recording and clear audio buffer
     */
    AudioRecorder.prototype.clear = function () {
        this.stopRecording();
        this.streamBufferLength = 0;
        this.streamBuffer = [];
    };
    /**
     * Plays given audioStream with audioContext
     *
     * @param buffer {Uint8Array} - audioStream to be played
     */
    AudioRecorder.prototype.play = function (buffer) {
        var _this = this;
        if (!buffer || !this.audioSupported)
            return;
        var myBlob = new Blob([buffer]);
        return new Promise(function (res, rej) {
            var fileReader = new FileReader();
            fileReader.onload = function () {
                if (_this.playbackSource)
                    _this.playbackSource.disconnect(); // disconnect previous playback source
                _this.playbackSource = _this.audioContext.createBufferSource();
                var successCallback = function (buf) {
                    _this.playbackSource.buffer = buf;
                    _this.playbackSource.connect(_this.audioContext.destination);
                    _this.playbackSource.onended = function () {
                        return res();
                    };
                    _this.playbackSource.start(0);
                };
                var errorCallback = function (err) {
                    return rej(err);
                };
                _this.audioContext.decodeAudioData(fileReader.result, successCallback, errorCallback);
            };
            fileReader.onerror = function () { return rej(); };
            fileReader.readAsArrayBuffer(myBlob);
        });
    };
    /**
     * Stops playing audio if there's a playback source connected.
     */
    AudioRecorder.prototype.stop = function () {
        if (this.playbackSource) {
            this.playbackSource.stop();
        }
    };
    /**
     * Called after each audioProcess. Check for silence and give fft time domain data to visualizer.
     */
    AudioRecorder.prototype.analyse = function () {
        if (!this.audioSupported)
            return;
        var analyser = this.analyserNode;
        analyser.fftSize = FFT_SIZE;
        var bufferLength = analyser.fftSize;
        var dataArray = new Uint8Array(bufferLength);
        var amplitude = this.options.amplitude;
        var time = this.options.time;
        analyser.getByteTimeDomainData(dataArray);
        this.visualizer(dataArray, bufferLength);
        for (var i = 0; i < bufferLength; i++) {
            // Normalize between -1 and 1.
            var curr_value_time = dataArray[i] / 128 - 1.0;
            if (curr_value_time > amplitude || curr_value_time < -1 * amplitude) {
                this.start = Date.now();
            }
        }
        var newtime = Date.now();
        var elapsedTime = newtime - this.start;
        if (elapsedTime > time) {
            this.onSilence();
        }
    };
    /**
     * Encodes recorded buffer to a wav file and exports it to a blob.
     *
     * @param exportSampleRate {number} - desired sample rate of the exported buffer
     */
    AudioRecorder.prototype.exportWAV = function (exportSampleRate) {
        if (exportSampleRate === void 0) { exportSampleRate = DEFAULT_EXPORT_SAMPLE_RATE; }
        return __awaiter(this, void 0, void 0, function () {
            var recordSampleRate, blob;
            return __generator(this, function (_a) {
                if (!this.audioSupported)
                    return [2 /*return*/];
                recordSampleRate = this.audioContext.sampleRate;
                blob = exportBuffer(this.streamBuffer, this.streamBufferLength, recordSampleRate, exportSampleRate);
                this.clear();
                return [2 /*return*/, blob];
            });
        });
    };
    return AudioRecorder;
}());
var visualize = function (dataArray, bufferLength, canvas) {
    if (!canvas)
        return;
    if (!Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["browserOrNode"])().isBrowser)
        throw new Error('Visualization is not supported on non-browsers.');
    var _a = canvas.getBoundingClientRect(), width = _a.width, height = _a.height;
    // need to update the default canvas width and height
    canvas.width = width;
    canvas.height = height;
    var canvasCtx = canvas.getContext('2d');
    canvasCtx.fillStyle = 'white';
    canvasCtx.clearRect(0, 0, width, height);
    var draw = function () {
        canvasCtx.fillRect(0, 0, width, height);
        canvasCtx.lineWidth = 1;
        var color = getComputedStyle(document.documentElement).getPropertyValue('--amplify-primary-color');
        canvasCtx.strokeStyle = !color || color === '' ? '#ff9900' : color; // TODO: try separate css variable
        canvasCtx.beginPath();
        var sliceWidth = (width * 1.0) / bufferLength;
        var x = 0;
        for (var i = 0; i < bufferLength || i % 3 === 0; i++) {
            var value = dataArray[i] / 128.0;
            var y = (value * height) / 2;
            if (i === 0) {
                canvasCtx.moveTo(x, y);
            }
            else {
                canvasCtx.lineTo(x, y);
            }
            x += sliceWidth;
        }
        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();
    };
    // Register our draw function with requestAnimationFrame.
    requestAnimationFrame(draw);
};
var amplifyChatbotCss = ".bot .dot{background-color:var(--bot-dot-color)}.user .dot{background-color:var(--user-dot-color)}.dot-flashing{width:2.625rem}.dot-flashing .dot{display:inline-block;width:0.625rem;height:0.625rem;border-radius:10rem;opacity:0.65}.dot-flashing .left{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:0s;animation-delay:0s}.dot-flashing .middle{margin-left:0.375rem;margin-right:0.375rem;-webkit-animation:dot-flashing 1s infinite linear alternate;animation:dot-flashing 1s infinite linear alternate;-webkit-animation-delay:0.5s;animation-delay:0.5s}.dot-flashing .right{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}@keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}:host{--width:28.75rem;--height:37.5rem;--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--bot-background-color:rgb(230, 230, 230);--bot-text-color:black;--bot-dot-color:var(--bot-text-color);--user-background-color:var(--amplify-blue);--user-text-color:var(--amplify-white);--user-dot-color:var(--user-text-color)}.amplify-chatbot{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--background-color);border-radius:0.375rem;-webkit-box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--amplify-font-family);margin-bottom:1rem;width:100%;height:var(--height);max-width:var(--width)}@media (min-width: 672px){.amplify-chatbot{width:var(--width)}}.header{padding:1.25rem 0.375rem 1.25rem 0.375rem;color:var(--header-color);font-size:var(--header-size);font-weight:bold;text-align:center;word-wrap:break-word}.body{border-top:0.0625rem solid rgba(0, 0, 0, 0.05);padding:1.5rem 1rem 0 1rem;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column;overflow:auto}.bubble{max-width:100%;padding:0.8em 1.4em;text-align:left;word-wrap:break-word;margin-bottom:0.625rem}.bot{margin-right:auto;background-color:var(--bot-background-color);color:var(--bot-text-color);border-radius:1.5rem 1.5rem 1.5rem 0}.user{margin-left:auto;background-color:var(--user-background-color);color:var(--user-text-color);border-radius:1.5rem 1.5rem 0 1.5rem}.footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:0.062rem solid rgba(0, 0, 0, 0.05);padding-right:0.625rem;min-height:3.125rem}.footer amplify-input{--border:none;--margin:0;-ms-flex-positive:1;flex-grow:1}canvas{margin-left:0.625rem;margin-right:0.625rem;-ms-flex-positive:1;flex-grow:1;height:3.125rem}.icon-button{--icon-height:1.25rem;--icon-fill:var(--amplify-primary-color);--padding:0.625rem;--width:auto}";
// enum for possible bot states
var ChatState;
(function (ChatState) {
    ChatState[ChatState["Initial"] = 0] = "Initial";
    ChatState[ChatState["Listening"] = 1] = "Listening";
    ChatState[ChatState["SendingText"] = 2] = "SendingText";
    ChatState[ChatState["SendingVoice"] = 3] = "SendingVoice";
    ChatState[ChatState["Error"] = 4] = "Error";
})(ChatState || (ChatState = {}));
// Message types
var MessageFrom;
(function (MessageFrom) {
    MessageFrom["Bot"] = "bot";
    MessageFrom["User"] = "user";
})(MessageFrom || (MessageFrom = {}));
// Error types
var ChatErrorType;
(function (ChatErrorType) {
    ChatErrorType[ChatErrorType["Recoverable"] = 0] = "Recoverable";
    ChatErrorType[ChatErrorType["Unrecoverable"] = 1] = "Unrecoverable";
})(ChatErrorType || (ChatErrorType = {}));
var AmplifyChatbot = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Clear messages when conversation finishes */
        this.clearOnComplete = false;
        /** Continue listening to users after they send the message */
        this.conversationModeOn = false;
        /** Text placed in the top header */
        this.botTitle = _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_3__["T"].CHATBOT_TITLE;
        /** Whether voice chat is enabled */
        this.voiceEnabled = false;
        /** Whether text chat is enabled */
        this.textEnabled = true;
        /** Amount of silence (in ms) to wait for */
        this.silenceTime = 1500;
        /** Noise threshold between -1 and 1. Anything below is considered a silence. */
        this.silenceThreshold = 0.2;
        /** Messages in current session */
        this.messages = [];
        /** Text input box value  */
        this.text = '';
        /** Current app state */
        this.chatState = ChatState.Initial;
        /**
         * Rendering methods
         */
        this.messageJSX = function (messages) {
            var messageList = messages.map(function (message) { return Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bubble " + message.from }, message.content); });
            if (_this.chatState === ChatState.SendingText || _this.chatState === ChatState.SendingVoice) {
                // if waiting for voice message, show animation on user side because app is waiting for transcript. Else put it on bot side.
                var client = _this.chatState === ChatState.SendingText ? MessageFrom.Bot : MessageFrom.User;
                messageList.push(Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bubble " + client }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "dot-flashing " + client }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "dot left" }), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "dot middle" }), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "dot right" }))));
            }
            return messageList;
        };
        this.chatCompleted = Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "chatCompleted", 7);
    }
    // Occurs when user presses enter in input box
    class_1.prototype.submitHandler = function (_event) {
        this.sendTextMessage();
    };
    /**
     * Lifecycle functions
     */
    class_1.prototype.componentWillLoad = function () {
        if (!_aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__["Interactions"] || typeof _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__["Interactions"].onComplete !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__["d"]);
        }
        this.validateProps();
    };
    class_1.prototype.componentDidRender = function () {
        // scroll to the bottom if necessary
        var body = this.element.shadowRoot.querySelector('.body');
        body.scrollTop = body.scrollHeight;
    };
    class_1.prototype.validateProps = function () {
        var _this = this;
        if (!this.voiceEnabled && !this.textEnabled) {
            this.setError(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_3__["T"].CHAT_DISABLED_ERROR, ChatErrorType.Unrecoverable);
            return;
        }
        else if (!this.botName) {
            this.setError(_Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_3__["T"].NO_BOT_NAME_ERROR, ChatErrorType.Unrecoverable);
            return;
        }
        if (this.welcomeMessage)
            this.appendToChat(this.welcomeMessage, MessageFrom.Bot);
        // Initialize AudioRecorder if voice is enabled
        if (this.voiceEnabled) {
            this.audioRecorder = new AudioRecorder({
                time: this.silenceTime,
                amplitude: this.silenceThreshold,
            });
            this.audioRecorder.init().catch(function (err) {
                _this.setError(err, ChatErrorType.Recoverable);
            });
        }
        // Callback function to be called after chat is completed
        var onComplete = function (err, data) {
            _this.chatCompleted.emit({
                data: data,
                err: err,
            });
            if (_this.clearOnComplete) {
                _this.reset();
            }
            else {
                _this.chatState = ChatState.Initial;
            }
        };
        try {
            _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__["Interactions"].onComplete(this.botName, onComplete);
        }
        catch (err) {
            this.setError(err, ChatErrorType.Unrecoverable);
        }
    };
    /**
     * Handlers
     */
    class_1.prototype.handleMicButton = function () {
        var _this = this;
        if (this.chatState !== ChatState.Initial)
            return;
        this.audioRecorder.stop();
        this.chatState = ChatState.Listening;
        this.audioRecorder.startRecording(function () { return _this.handleSilence(); }, function (data, length) { return _this.visualizer(data, length); });
    };
    class_1.prototype.handleSilence = function () {
        var _this = this;
        this.chatState = ChatState.SendingVoice;
        this.audioRecorder.stopRecording();
        this.audioRecorder.exportWAV().then(function (blob) {
            _this.sendVoiceMessage(blob);
        });
    };
    class_1.prototype.handleTextChange = function (event) {
        var target = event.target;
        this.text = target.value;
    };
    class_1.prototype.handleCancelButton = function () {
        this.audioRecorder.clear();
        this.chatState = ChatState.Initial;
    };
    class_1.prototype.handleToastClose = function (errorType) {
        this.error = undefined; // clear error
        // if error is recoverable, reset the app state to initial
        if (errorType === ChatErrorType.Recoverable) {
            this.chatState = ChatState.Initial;
        }
    };
    /**
     * Visualization
     */
    class_1.prototype.visualizer = function (dataArray, bufferLength) {
        var canvas = this.element.shadowRoot.querySelector('canvas');
        visualize(dataArray, bufferLength, canvas);
    };
    /**
     * Interactions helpers
     */
    class_1.prototype.sendTextMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var text, response, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.text.length === 0 || this.chatState !== ChatState.Initial)
                            return [2 /*return*/];
                        text = this.text;
                        this.text = '';
                        this.appendToChat(text, MessageFrom.User);
                        this.chatState = ChatState.SendingText;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__["Interactions"].send(this.botName, text)];
                    case 2:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        this.setError(err_3, ChatErrorType.Recoverable);
                        return [2 /*return*/];
                    case 4:
                        if (response.message) {
                            this.appendToChat(response.message, MessageFrom.Bot);
                        }
                        this.chatState = ChatState.Initial;
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.sendVoiceMessage = function (audioInput) {
        return __awaiter(this, void 0, void 0, function () {
            var interactionsMessage, response, err_4, dialogState;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        interactionsMessage = {
                            content: audioInput,
                            options: {
                                messageType: 'voice',
                            },
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__["Interactions"].send(this.botName, interactionsMessage)];
                    case 2:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _a.sent();
                        this.setError(err_4, ChatErrorType.Recoverable);
                        return [2 /*return*/];
                    case 4:
                        this.chatState = ChatState.Initial;
                        dialogState = response.dialogState;
                        if (response.inputTranscript)
                            this.appendToChat(response.inputTranscript, MessageFrom.User);
                        this.appendToChat(response.message, MessageFrom.Bot);
                        return [4 /*yield*/, this.audioRecorder
                                .play(response.audioStream)
                                .then(function () {
                                // if conversationMode is on, chat is incomplete, and mic button isn't pressed yet, resume listening.
                                if (_this.conversationModeOn &&
                                    dialogState !== 'Fulfilled' &&
                                    dialogState !== 'Failed' &&
                                    _this.chatState === ChatState.Initial) {
                                    _this.handleMicButton();
                                }
                            })
                                .catch(function (err) { return _this.setError(err, ChatErrorType.Recoverable); })];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.appendToChat = function (content, from) {
        this.messages = __spreadArrays(this.messages, [
            {
                content: content,
                from: from,
            },
        ]);
    };
    /**
     * State control methods
     */
    class_1.prototype.setError = function (error, errorType) {
        var message = typeof error === 'string' ? error : error.message;
        this.chatState = ChatState.Error;
        this.error = { message: message, errorType: errorType };
    };
    class_1.prototype.reset = function () {
        this.chatState = ChatState.Initial;
        this.text = '';
        this.error = undefined;
        this.messages = [];
        if (this.welcomeMessage)
            this.appendToChat(this.welcomeMessage, MessageFrom.Bot);
        this.audioRecorder && this.audioRecorder.clear();
    };
    class_1.prototype.listeningFooterJSX = function () {
        var _this = this;
        var visualization = Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("canvas", { height: "50" });
        var cancelButton = (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { "data-test": "chatbot-cancel-button", handleButtonClick: function () { return _this.handleCancelButton(); }, class: "icon-button", variant: "icon", icon: "ban" }));
        return [visualization, cancelButton];
    };
    class_1.prototype.footerJSX = function () {
        var _this = this;
        if (this.chatState === ChatState.Listening)
            return this.listeningFooterJSX();
        var inputPlaceholder = this.textEnabled
            ? _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_3__["T"].TEXT_INPUT_PLACEHOLDER
            : _Translations_392acb9b_js__WEBPACK_IMPORTED_MODULE_3__["T"].VOICE_INPUT_PLACEHOLDER;
        var textInput = (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-input", { placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(inputPlaceholder), description: "text", handleInputChange: function (evt) { return _this.handleTextChange(evt); }, value: this.text, disabled: this.chatState === ChatState.Error || !this.textEnabled }));
        var micButton = this.voiceEnabled && (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { "data-test": "chatbot-mic-button", handleButtonClick: function () { return _this.handleMicButton(); }, class: "icon-button", variant: "icon", icon: "microphone", disabled: this.chatState === ChatState.Error || this.chatState !== ChatState.Initial }));
        var sendButton = this.textEnabled && (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { "data-test": "chatbot-send-button", class: "icon-button", variant: "icon", icon: "send", handleButtonClick: function () { return _this.sendTextMessage(); }, disabled: this.chatState === ChatState.Error || this.chatState !== ChatState.Initial }));
        return [textInput, micButton, sendButton];
    };
    class_1.prototype.errorToast = function () {
        var _this = this;
        if (!this.error)
            return;
        var _a = this.error, message = _a.message, errorType = _a.errorType;
        return Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-toast", { message: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(message), handleClose: function () { return _this.handleToastClose(errorType); } });
    };
    class_1.prototype.render = function () {
        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "amplify-chatbot" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "header" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header", "data-test": "chatbot-header" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.botTitle))), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "body", "data-test": "chatbot-body" }, this.messageJSX(this.messages)), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer", "data-test": "chatbot-footer" }, this.footerJSX()), this.errorToast())));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
AmplifyChatbot.style = amplifyChatbotCss;



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWNoYXRib3QuZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBLHNCQUFzQixTQUFJLElBQUksU0FBSTtBQUNsQyxpREFBaUQsUUFBUTtBQUN6RCx3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QUFnRixvQ0FBb0MsRUFBRSx1RkFBdUY7QUFDNVEsOENBQThDLDREQUFDLG9CQUFvQixvRUFBb0UsZ0NBQWdDLEVBQUUsbUpBQW1KO0FBQzVULDhDQUE4Qyw0REFBQyxvQkFBb0IsMEhBQTBILGdDQUFnQyxFQUFFLHdGQUF3RjtBQUN2VDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNERBQUMsbUJBQW1CLFVBQVUsc0RBQUkseUNBQXlDLDBDQUEwQyxFQUFFLEVBQUU7QUFDeEk7QUFDQTtBQUNBLGdCQUFnQiw0REFBQyxDQUFDLG9EQUFJLFFBQVEsNERBQUMsU0FBUywyQkFBMkIsRUFBRSw0REFBQyxVQUFVLGlCQUFpQixFQUFFLDREQUFDLFNBQVMsaURBQWlELEVBQUUsc0RBQUksdUJBQXVCLDREQUFDLFNBQVMsNkNBQTZDLG1DQUFtQyw0REFBQyxTQUFTLGlEQUFpRDtBQUNoVjtBQUNBO0FBQ0EsMEJBQTBCLFFBQVEsNERBQVUsT0FBTyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDNkMiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xNC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCwgYyBhcyBjcmVhdGVFdmVudCwgSCBhcyBIb3N0LCBnIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTM5OTY5Nzg1LmpzJztcbmltcG9ydCB7IExvZ2dlciwgYnJvd3Nlck9yTm9kZSwgSTE4biB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9jb3JlJztcbmltcG9ydCAnQGF3cy1hbXBsaWZ5L2F1dGgnO1xuaW1wb3J0IHsgVCBhcyBUcmFuc2xhdGlvbnMgfSBmcm9tICcuL1RyYW5zbGF0aW9ucy0zOTJhY2I5Yi5qcyc7XG5pbXBvcnQgeyBkIGFzIE5PX0lOVEVSQUNUSU9OU19NT0RVTEVfRk9VTkQgfSBmcm9tICcuL2NvbnN0YW50cy1kMWFiZTdkZS5qcyc7XG5pbXBvcnQgeyBJbnRlcmFjdGlvbnMgfSBmcm9tICdAYXdzLWFtcGxpZnkvaW50ZXJhY3Rpb25zJztcbi8vIEF1ZGlvUmVjb3JkZXIgc2V0dGluZ3NcbnZhciBSRUNPUkRFUl9FWFBPUlRfTUlNRV9UWVBFID0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG52YXIgREVGQVVMVF9FWFBPUlRfU0FNUExFX1JBVEUgPSAxNjAwMDtcbnZhciBGRlRfU0laRSA9IDIwNDg7IC8vIHdpbmRvdyBzaXplIGluIHNhbXBsZXMgZm9yIEZhc3QgRm91cmllciBUcmFuc2Zvcm0gKEZGVClcbnZhciBGRlRfTUFYX0RFQ0lCRUxTID0gLTEwOyAvLyBtYXhpbXVtIHBvd2VyIHZhbHVlIGluIHRoZSBzY2FsaW5nIHJhbmdlIGZvciB0aGUgRkZUIGFuYWx5c2lzIGRhdGFcbnZhciBGRlRfTUlOX0RFQ0lCRUxTID0gLTkwOyAvLyBtaW5pbXVtIHBvd2VyIHZhbHVlIGluIHRoZSBzY2FsaW5nIHJhbmdlIGZvciB0aGUgRkZUIGFuYWx5c2lzIGRhdGFcbnZhciBGRlRfU01PT1RISU5HX1RJTUVfQ09OU1RBTlQgPSAwLjg1OyAvLyBhdmVyYWdpbmcgY29uc3RhbnQgd2l0aCB0aGUgbGFzdCBhbmFseXNpcyBmcmFtZVxuLyoqXG4gKiBNZXJnZXMgbXVsdGlwbGUgYnVmZmVycyBpbnRvIG9uZS5cbiAqL1xudmFyIG1lcmdlQnVmZmVycyA9IGZ1bmN0aW9uIChidWZmZXJBcnJheSwgcmVjTGVuZ3RoKSB7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBGbG9hdDMyQXJyYXkocmVjTGVuZ3RoKTtcbiAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1ZmZlckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5zZXQoYnVmZmVyQXJyYXlbaV0sIG9mZnNldCk7XG4gICAgICAgIG9mZnNldCArPSBidWZmZXJBcnJheVtpXS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuLyoqXG4gKiBEb3duc2FtcGxlcyBhdWRpbyB0byBkZXNpcmVkIGV4cG9ydCBzYW1wbGUgcmF0ZS5cbiAqL1xudmFyIGRvd25zYW1wbGVCdWZmZXIgPSBmdW5jdGlvbiAoYnVmZmVyLCByZWNvcmRTYW1wbGVSYXRlLCBleHBvcnRTYW1wbGVSYXRlKSB7XG4gICAgaWYgKGV4cG9ydFNhbXBsZVJhdGUgPT09IHJlY29yZFNhbXBsZVJhdGUpIHtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICB9XG4gICAgdmFyIHNhbXBsZVJhdGVSYXRpbyA9IHJlY29yZFNhbXBsZVJhdGUgLyBleHBvcnRTYW1wbGVSYXRlO1xuICAgIHZhciBuZXdMZW5ndGggPSBNYXRoLnJvdW5kKGJ1ZmZlci5sZW5ndGggLyBzYW1wbGVSYXRlUmF0aW8pO1xuICAgIHZhciByZXN1bHQgPSBuZXcgRmxvYXQzMkFycmF5KG5ld0xlbmd0aCk7XG4gICAgdmFyIG9mZnNldFJlc3VsdCA9IDA7XG4gICAgdmFyIG9mZnNldEJ1ZmZlciA9IDA7XG4gICAgd2hpbGUgKG9mZnNldFJlc3VsdCA8IHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIG5leHRPZmZzZXRCdWZmZXIgPSBNYXRoLnJvdW5kKChvZmZzZXRSZXN1bHQgKyAxKSAqIHNhbXBsZVJhdGVSYXRpbyk7XG4gICAgICAgIHZhciBhY2N1bSA9IDAsIGNvdW50ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IG9mZnNldEJ1ZmZlcjsgaSA8IG5leHRPZmZzZXRCdWZmZXIgJiYgaSA8IGJ1ZmZlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYWNjdW0gKz0gYnVmZmVyW2ldO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRbb2Zmc2V0UmVzdWx0XSA9IGFjY3VtIC8gY291bnQ7XG4gICAgICAgIG9mZnNldFJlc3VsdCsrO1xuICAgICAgICBvZmZzZXRCdWZmZXIgPSBuZXh0T2Zmc2V0QnVmZmVyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbi8qKlxuICogY29udmVydHMgcmF3IGF1ZGlvIHZhbHVlcyB0byAxNiBiaXQgcGNtLlxuICovXG52YXIgZmxvYXRUbzE2Qml0UENNID0gZnVuY3Rpb24gKG91dHB1dCwgb2Zmc2V0LCBpbnB1dCkge1xuICAgIHZhciBieXRlT2Zmc2V0ID0gb2Zmc2V0O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyssIGJ5dGVPZmZzZXQgKz0gMikge1xuICAgICAgICB2YXIgcyA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBpbnB1dFtpXSkpO1xuICAgICAgICBvdXRwdXQuc2V0SW50MTYoYnl0ZU9mZnNldCwgcyA8IDAgPyBzICogMHg4MDAwIDogcyAqIDB4N2ZmZiwgdHJ1ZSk7XG4gICAgfVxufTtcbi8qKlxuICogV3JpdGUgZ2l2ZW4gc3RyaW5ncyBpbiBiaWctZW5kaWFuIG9yZGVyLlxuICovXG52YXIgd3JpdGVTdHJpbmcgPSBmdW5jdGlvbiAodmlldywgb2Zmc2V0LCBzdHJpbmcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCArIGksIHN0cmluZy5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG59O1xuLyoqXG4gKiBFbmNvZGVzIHJhdyBwY20gYXVkaW8gaW50byBhIHdhdiBmaWxlLlxuICovXG52YXIgZW5jb2RlV0FWID0gZnVuY3Rpb24gKHNhbXBsZXMsIGV4cG9ydFNhbXBsZVJhdGUpIHtcbiAgICAvKipcbiAgICAgKiBXQVYgZmlsZSBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0czogUklGRiBoZWFkZXIsIFdBVkUgc3ViY2h1bmssIGFuZCBkYXRhIHN1YmNodW5rLiBXZSBwcmVjb21wdXRlIHRoZSBzaXplIG9mIHRoZW0uXG4gICAgICovXG4gICAgdmFyIGF1ZGlvU2l6ZSA9IHNhbXBsZXMubGVuZ3RoICogMjsgLy8gV2UgdXNlIDE2LWJpdCBzYW1wbGVzLCBzbyB3ZSBoYXZlICgyICogc2FtcGxlTGVuZ3RoKSBieXRlcy5cbiAgICB2YXIgZm10U2l6ZSA9IDI0OyAvLyBCeXRlIHNpemUgb2YgdGhlIGZtdCBzdWJjaHVuazogMjQgYnl0ZXMgdGhhdCB0aGUgYXVkaW8gaW5mb3JtYXRpb24gdGhhdCB3ZSdsbCBzZXQgYmVsb3cuXG4gICAgdmFyIGRhdGFTaXplID0gOCArIGF1ZGlvU2l6ZTsgLy8gQnl0ZSBzaXplIG9mIHRoZSBkYXRhIHN1YmNodW5rOiByYXcgc291bmQgZGF0YSBwbHVzIDggYnl0ZXMgZm9yIHRoZSBzdWJjaHVuayBkZXNjcmlwdGlvbnMuXG4gICAgdmFyIHRvdGFsQnl0ZVNpemUgPSAxMiArIGZtdFNpemUgKyBkYXRhU2l6ZTsgLy8gQnl0ZSBzaXplIG9mIHRoZSB3aG9sZSBmaWxlLCBpbmNsdWRpbmcgdGhlIGNodW5rIGhlYWRlciAvIGRlc2NyaXB0b3IuXG4gICAgLy8gY3JlYXRlIERhdGFWaWV3IG9iamVjdCB0byB3cml0ZSBieXRlIHZhbHVlcyBpbnRvXG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih0b3RhbEJ5dGVTaXplKTsgLy8gYnVmZmVyIHRvIHdyaXRlIHRoZSBjaHVuayB2YWx1ZXMgaW4uXG4gICAgdmFyIHZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcbiAgICAvKipcbiAgICAgKiBTdGFydCB3cml0aW5nIHRoZSAud2F2IGZpbGUuIFdlIHdyaXRlIHRvcCB0byBib3R0b20sIHNvIGJ5dGUgb2Zmc2V0IChmaXJzdCBudW1lcmljIGFyZ3VtZW50KSBpbmNyZWFzZXMgc3RyaWN0bHkuXG4gICAgICovXG4gICAgLy8gUklGRiBoZWFkZXJcbiAgICB3cml0ZVN0cmluZyh2aWV3LCAwLCAnUklGRicpOyAvLyBBdCBvZmZzZXQgMCwgd3JpdGUgdGhlIGxldHRlcnMgXCJSSUZGXCJcbiAgICB2aWV3LnNldFVpbnQzMig0LCBmbXRTaXplICsgZGF0YVNpemUsIHRydWUpOyAvLyBBdCBvZmZzZXQgNCwgd3JpdGUgdGhlIHNpemUgb2YgZm10IGFuZCBkYXRhIGNodW5rIHNpemUgY29tYmluZWQuXG4gICAgd3JpdGVTdHJpbmcodmlldywgOCwgJ1dBVkUnKTsgLy8gQXQgb2Zmc2V0IDgsIHdyaXRlIHRoZSBmb3JtYXQgdHlwZSBcIldBVkVcIlxuICAgIC8vIGZtdCBzdWJjaHVua1xuICAgIHdyaXRlU3RyaW5nKHZpZXcsIDEyLCAnZm10ICcpOyAvL2NodW5rZElkICdmbXQgJ1xuICAgIHZpZXcuc2V0VWludDMyKDE2LCBmbXRTaXplIC0gOCwgdHJ1ZSk7IC8vIGZtdCBzdWJjaHVuayBzaXplIGJlbG93IHRoaXMgdmFsdWUuIFdlIHNldCA4IGJ5dGVzIGFscmVhZHksIHNvIHN1YnRyYWN0IDggYnl0ZXMgZnJvbSBmbXRTaXplLlxuICAgIHZpZXcuc2V0VWludDE2KDIwLCAxLCB0cnVlKTsgLy8gQXVkaWlvIGZvcm1hdCBjb2RlLCB3aGljaCBpcyAxIGZvciBQQ00uXG4gICAgdmlldy5zZXRVaW50MTYoMjIsIDEsIHRydWUpOyAvLyBOdW1iZXIgb2YgYXVkaW8gY2hhbm5lbHMuIFdlIHVzZSBtb25vLCBpZSAxLlxuICAgIHZpZXcuc2V0VWludDMyKDI0LCBleHBvcnRTYW1wbGVSYXRlLCB0cnVlKTsgLy8gU2FtcGxlIHJhdGUgb2YgdGhlIGF1ZGlvIGZpbGUuXG4gICAgdmlldy5zZXRVaW50MzIoMjgsIGV4cG9ydFNhbXBsZVJhdGUgKiAyLCB0cnVlKTsgLy8gRGF0YSByYXRlLCBvciAjIG9mIGRhdGEgYnl0ZXMgcGVyIHNlY29uZC4gU2luY2UgZWFjaCBzYW1wbGUgaXMgMiBieXRlcywgdGhpcyBpcyAyICogc2FtcGxlUmF0ZS5cbiAgICB2aWV3LnNldFVpbnQxNigzMiwgMiwgdHJ1ZSk7IC8vIGJsb2NrIGFsaWduLCAjIG9mIGJ5dGVzIHBlciBzYW1wbGUgaW5jbHVkaW5nIGFsbCBjaGFubmVscywgaWUuIDIgYnl0ZXMuXG4gICAgdmlldy5zZXRVaW50MTYoMzQsIDE2LCB0cnVlKTsgLy8gYml0cyBwZXIgc2FtcGxlLCBpZS4gMTYgYml0c1xuICAgIC8vIGRhdGEgc3ViY2h1bmtcbiAgICB3cml0ZVN0cmluZyh2aWV3LCAzNiwgJ2RhdGEnKTsgLy8gd3JpdGUgdGhlIGNodW5rSWQgJ2RhdGEnXG4gICAgdmlldy5zZXRVaW50MzIoNDAsIGF1ZGlvU2l6ZSwgdHJ1ZSk7IC8vIEF1ZGlvIGJ5dGUgc2l6ZVxuICAgIGZsb2F0VG8xNkJpdFBDTSh2aWV3LCA0NCwgc2FtcGxlcyk7IC8vIHJhdyBwY20gdmFsdWVzIHRoZW4gZ28gaGVyZS5cbiAgICByZXR1cm4gdmlldztcbn07XG4vKipcbiAqIEdpdmVuIGFycmF5cyBvZiByYXcgcGNtIGF1ZGlvLCBkb3duc2FtcGxlcyB0aGUgYXVkaW8gdG8gZGVzaXJlZCBzYW1wbGUgcmF0ZSBhbmQgZW5jb2RlcyBpdCB0byBhIHdhdiBhdWRpbyBmaWxlLlxuICpcbiAqIEBwYXJhbSByZWNCdWZmZXIge0Zsb2F0MzJBcnJheVtdfSAtIDJkIGZsb2F0IGFycmF5IGNvbnRhaW5pbmcgdGhlIHJlY29yZGVkIHJhdyBhdWRpb1xuICogQHBhcmFtIHJlY0xlbmd0aCB7bnVtYmVyfSAtIHRvdGFsIGxlbmd0aCBvZiByZWNvcmRlZCBhdWRpb1xuICogQHBhcmFtIHJlY29yZFNhbXBsZVJhdGUge251bWJlcn0gLSBzYW1wbGUgcmF0ZSBvZiB0aGUgcmVjb3JkZWQgYXVkaW9cbiAqIEBwYXJhbSBleHBvcnRTYW1wbGVSYXRlIHtudW1iZXJ9IC0gZGVzaXJlZCBzYW1wbGUgcmF0ZSBvZiB0aGUgZXhwb3J0ZWQgZmlsZVxuICovXG52YXIgZXhwb3J0QnVmZmVyID0gZnVuY3Rpb24gKHJlY0J1ZmZlciwgcmVjTGVuZ3RoLCByZWNvcmRTYW1wbGVSYXRlLCBleHBvcnRTYW1wbGVSYXRlKSB7XG4gICAgdmFyIG1lcmdlZEJ1ZmZlcnMgPSBtZXJnZUJ1ZmZlcnMocmVjQnVmZmVyLCByZWNMZW5ndGgpO1xuICAgIHZhciBkb3duc2FtcGxlZEJ1ZmZlciA9IGRvd25zYW1wbGVCdWZmZXIobWVyZ2VkQnVmZmVycywgcmVjb3JkU2FtcGxlUmF0ZSwgZXhwb3J0U2FtcGxlUmF0ZSk7XG4gICAgdmFyIGVuY29kZWRXYXYgPSBlbmNvZGVXQVYoZG93bnNhbXBsZWRCdWZmZXIsIGV4cG9ydFNhbXBsZVJhdGUpO1xuICAgIHZhciBhdWRpb0Jsb2IgPSBuZXcgQmxvYihbZW5jb2RlZFdhdl0sIHtcbiAgICAgICAgdHlwZTogUkVDT1JERVJfRVhQT1JUX01JTUVfVFlQRSxcbiAgICB9KTtcbiAgICByZXR1cm4gYXVkaW9CbG9iO1xufTtcbnZhciBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdBdWRpb1JlY29yZGVyJyk7XG52YXIgQXVkaW9SZWNvcmRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBdWRpb1JlY29yZGVyKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gaW5wdXQgbWljIHN0cmVhbSBpcyBzdG9yZWQgaW4gYSBidWZmZXJcbiAgICAgICAgdGhpcy5zdHJlYW1CdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zdHJlYW1CdWZmZXJMZW5ndGggPSAwO1xuICAgICAgICB0aGlzLnJlY29yZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG11c3QgYmUgY2FsbGVkIGZpcnN0IHRvIGVuYWJsZSBhdWRpbyBjb250ZXh0IGFuZCByZXF1ZXN0IG1pY3JvcGhvbmUgYWNjZXNzLlxuICAgICAqIE9uY2UgYWNjZXNzIGdyYW50ZWQsIGl0IGNvbm5lY3RzIGFsbCB0aGUgbmVjZXNzYXJ5IGF1ZGlvIG5vZGVzIHRvIHRoZSBjb250ZXh0IHNvIHRoYXQgaXQgY2FuIGJlZ2luIHJlY29yZGluZyBvciBwbGF5aW5nLlxuICAgICAqL1xuICAgIEF1ZGlvUmVjb3JkZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJyb3dzZXJPck5vZGUoKS5pc0Jyb3dzZXIpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LkF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHN0cmVhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hdWRpb1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldHVwQXVkaW9Ob2RlcyhzdHJlYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmF1ZGlvU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnQXVkaW8gaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9TdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLnJlamVjdCgnQXVkaW8gaXMgbm90IHN1cHBvcnRlZCcpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0dXAgYXVkaW8gbm9kZXMgYWZ0ZXIgc3VjY2Vzc2Z1bCBgaW5pdGAuXG4gICAgICovXG4gICAgQXVkaW9SZWNvcmRlci5wcm90b3R5cGUuc2V0dXBBdWRpb05vZGVzID0gZnVuY3Rpb24gKHN0cmVhbSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZXJyXzEsIHNvdXJjZU5vZGUsIHByb2Nlc3Nvck5vZGUsIGFuYWx5c2VyTm9kZTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5hdWRpb0NvbnRleHQucmVzdW1lKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZU5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShzdHJlYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc29yTm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3Nvcig0MDk2LCAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3Nvck5vZGUub25hdWRpb3Byb2Nlc3MgPSBmdW5jdGlvbiAoYXVkaW9Qcm9jZXNzaW5nRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLnJlY29yZGluZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHJlYW0gPSBhdWRpb1Byb2Nlc3NpbmdFdmVudC5pbnB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdHJlYW1CdWZmZXIucHVzaChuZXcgRmxvYXQzMkFycmF5KHN0cmVhbSkpOyAvLyBzZXQgdG8gYSBjb3B5IG9mIHRoZSBzdHJlYW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdHJlYW1CdWZmZXJMZW5ndGggKz0gc3RyZWFtLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hbmFseXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5hbHlzZXJOb2RlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuYWx5c2VyTm9kZS5taW5EZWNpYmVscyA9IEZGVF9NSU5fREVDSUJFTFM7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmFseXNlck5vZGUubWF4RGVjaWJlbHMgPSBGRlRfTUFYX0RFQ0lCRUxTO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5hbHlzZXJOb2RlLnNtb290aGluZ1RpbWVDb25zdGFudCA9IEZGVF9TTU9PVEhJTkdfVElNRV9DT05TVEFOVDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZU5vZGUuY29ubmVjdChhbmFseXNlck5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5hbHlzZXJOb2RlLmNvbm5lY3QocHJvY2Vzc29yTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzb3JOb2RlLmNvbm5lY3Qoc291cmNlTm9kZS5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZXJOb2RlID0gYW5hbHlzZXJOb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN0YXJ0IHJlY29yZGluZyBhdWRpbyBhbmQgbGlzdGVuIGZvciBzaWxlbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIG9uU2lsZW5jZSB7U2lsZW5jZUhhbmRsZXJ9IC0gY2FsbGVkIHdoZW5ldmVyIHNpbGVuY2UgaXMgZGV0ZWN0ZWRcbiAgICAgKiBAcGFyYW0gdmlzdWFsaXplciB7VmlzdWFsaXplcn0gLSBjYWxsZWQgd2l0aCBhdWRpbyBkYXRhIG9uIGVhY2ggYXVkaW8gcHJvY2VzcyB0byBiZSB1c2VkIGZvciB2aXN1YWxpemF0aW9uLlxuICAgICAqL1xuICAgIEF1ZGlvUmVjb3JkZXIucHJvdG90eXBlLnN0YXJ0UmVjb3JkaW5nID0gZnVuY3Rpb24gKG9uU2lsZW5jZSwgdmlzdWFsaXplcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29udGV4dCwgZXJyXzI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWNvcmRpbmcgfHwgIXRoaXMuYXVkaW9TdXBwb3J0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNpbGVuY2UgPSBvblNpbGVuY2UgfHwgZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aXN1YWxpemVyID0gdmlzdWFsaXplciB8fCBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0ID0gdGhpcy5hdWRpb0NvbnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjb250ZXh0LnJlc3VtZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycl8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGVycl8yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQYXVzZSByZWNvcmRpbmdcbiAgICAgKi9cbiAgICBBdWRpb1JlY29yZGVyLnByb3RvdHlwZS5zdG9wUmVjb3JkaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuYXVkaW9TdXBwb3J0ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMucmVjb3JkaW5nID0gZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQYXVzZSByZWNvcmRpbmcgYW5kIGNsZWFyIGF1ZGlvIGJ1ZmZlclxuICAgICAqL1xuICAgIEF1ZGlvUmVjb3JkZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0b3BSZWNvcmRpbmcoKTtcbiAgICAgICAgdGhpcy5zdHJlYW1CdWZmZXJMZW5ndGggPSAwO1xuICAgICAgICB0aGlzLnN0cmVhbUJ1ZmZlciA9IFtdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUGxheXMgZ2l2ZW4gYXVkaW9TdHJlYW0gd2l0aCBhdWRpb0NvbnRleHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBidWZmZXIge1VpbnQ4QXJyYXl9IC0gYXVkaW9TdHJlYW0gdG8gYmUgcGxheWVkXG4gICAgICovXG4gICAgQXVkaW9SZWNvcmRlci5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFidWZmZXIgfHwgIXRoaXMuYXVkaW9TdXBwb3J0ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBteUJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzLCByZWopIHtcbiAgICAgICAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wbGF5YmFja1NvdXJjZSlcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucGxheWJhY2tTb3VyY2UuZGlzY29ubmVjdCgpOyAvLyBkaXNjb25uZWN0IHByZXZpb3VzIHBsYXliYWNrIHNvdXJjZVxuICAgICAgICAgICAgICAgIF90aGlzLnBsYXliYWNrU291cmNlID0gX3RoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICAgICAgICAgIHZhciBzdWNjZXNzQ2FsbGJhY2sgPSBmdW5jdGlvbiAoYnVmKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBsYXliYWNrU291cmNlLmJ1ZmZlciA9IGJ1ZjtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucGxheWJhY2tTb3VyY2UuY29ubmVjdChfdGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbGF5YmFja1NvdXJjZS5vbmVuZGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbGF5YmFja1NvdXJjZS5zdGFydCgwKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBlcnJvckNhbGxiYWNrID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqKGVycik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGZpbGVSZWFkZXIucmVzdWx0LCBzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZpbGVSZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlaigpOyB9O1xuICAgICAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihteUJsb2IpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN0b3BzIHBsYXlpbmcgYXVkaW8gaWYgdGhlcmUncyBhIHBsYXliYWNrIHNvdXJjZSBjb25uZWN0ZWQuXG4gICAgICovXG4gICAgQXVkaW9SZWNvcmRlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWJhY2tTb3VyY2UpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWJhY2tTb3VyY2Uuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgZWFjaCBhdWRpb1Byb2Nlc3MuIENoZWNrIGZvciBzaWxlbmNlIGFuZCBnaXZlIGZmdCB0aW1lIGRvbWFpbiBkYXRhIHRvIHZpc3VhbGl6ZXIuXG4gICAgICovXG4gICAgQXVkaW9SZWNvcmRlci5wcm90b3R5cGUuYW5hbHlzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmF1ZGlvU3VwcG9ydGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgYW5hbHlzZXIgPSB0aGlzLmFuYWx5c2VyTm9kZTtcbiAgICAgICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IEZGVF9TSVpFO1xuICAgICAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYW5hbHlzZXIuZmZ0U2l6ZTtcbiAgICAgICAgdmFyIGRhdGFBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlckxlbmd0aCk7XG4gICAgICAgIHZhciBhbXBsaXR1ZGUgPSB0aGlzLm9wdGlvbnMuYW1wbGl0dWRlO1xuICAgICAgICB2YXIgdGltZSA9IHRoaXMub3B0aW9ucy50aW1lO1xuICAgICAgICBhbmFseXNlci5nZXRCeXRlVGltZURvbWFpbkRhdGEoZGF0YUFycmF5KTtcbiAgICAgICAgdGhpcy52aXN1YWxpemVyKGRhdGFBcnJheSwgYnVmZmVyTGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidWZmZXJMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gTm9ybWFsaXplIGJldHdlZW4gLTEgYW5kIDEuXG4gICAgICAgICAgICB2YXIgY3Vycl92YWx1ZV90aW1lID0gZGF0YUFycmF5W2ldIC8gMTI4IC0gMS4wO1xuICAgICAgICAgICAgaWYgKGN1cnJfdmFsdWVfdGltZSA+IGFtcGxpdHVkZSB8fCBjdXJyX3ZhbHVlX3RpbWUgPCAtMSAqIGFtcGxpdHVkZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBuZXd0aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIGVsYXBzZWRUaW1lID0gbmV3dGltZSAtIHRoaXMuc3RhcnQ7XG4gICAgICAgIGlmIChlbGFwc2VkVGltZSA+IHRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMub25TaWxlbmNlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEVuY29kZXMgcmVjb3JkZWQgYnVmZmVyIHRvIGEgd2F2IGZpbGUgYW5kIGV4cG9ydHMgaXQgdG8gYSBibG9iLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV4cG9ydFNhbXBsZVJhdGUge251bWJlcn0gLSBkZXNpcmVkIHNhbXBsZSByYXRlIG9mIHRoZSBleHBvcnRlZCBidWZmZXJcbiAgICAgKi9cbiAgICBBdWRpb1JlY29yZGVyLnByb3RvdHlwZS5leHBvcnRXQVYgPSBmdW5jdGlvbiAoZXhwb3J0U2FtcGxlUmF0ZSkge1xuICAgICAgICBpZiAoZXhwb3J0U2FtcGxlUmF0ZSA9PT0gdm9pZCAwKSB7IGV4cG9ydFNhbXBsZVJhdGUgPSBERUZBVUxUX0VYUE9SVF9TQU1QTEVfUkFURTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVjb3JkU2FtcGxlUmF0ZSwgYmxvYjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXVkaW9TdXBwb3J0ZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICByZWNvcmRTYW1wbGVSYXRlID0gdGhpcy5hdWRpb0NvbnRleHQuc2FtcGxlUmF0ZTtcbiAgICAgICAgICAgICAgICBibG9iID0gZXhwb3J0QnVmZmVyKHRoaXMuc3RyZWFtQnVmZmVyLCB0aGlzLnN0cmVhbUJ1ZmZlckxlbmd0aCwgcmVjb3JkU2FtcGxlUmF0ZSwgZXhwb3J0U2FtcGxlUmF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBibG9iXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBBdWRpb1JlY29yZGVyO1xufSgpKTtcbnZhciB2aXN1YWxpemUgPSBmdW5jdGlvbiAoZGF0YUFycmF5LCBidWZmZXJMZW5ndGgsIGNhbnZhcykge1xuICAgIGlmICghY2FudmFzKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKCFicm93c2VyT3JOb2RlKCkuaXNCcm93c2VyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Zpc3VhbGl6YXRpb24gaXMgbm90IHN1cHBvcnRlZCBvbiBub24tYnJvd3NlcnMuJyk7XG4gICAgdmFyIF9hID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XG4gICAgLy8gbmVlZCB0byB1cGRhdGUgdGhlIGRlZmF1bHQgY2FudmFzIHdpZHRoIGFuZCBoZWlnaHRcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHZhciBjYW52YXNDdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjYW52YXNDdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBjYW52YXNDdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIHZhciBkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW52YXNDdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGNhbnZhc0N0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICB2YXIgY29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1hbXBsaWZ5LXByaW1hcnktY29sb3InKTtcbiAgICAgICAgY2FudmFzQ3R4LnN0cm9rZVN0eWxlID0gIWNvbG9yIHx8IGNvbG9yID09PSAnJyA/ICcjZmY5OTAwJyA6IGNvbG9yOyAvLyBUT0RPOiB0cnkgc2VwYXJhdGUgY3NzIHZhcmlhYmxlXG4gICAgICAgIGNhbnZhc0N0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdmFyIHNsaWNlV2lkdGggPSAod2lkdGggKiAxLjApIC8gYnVmZmVyTGVuZ3RoO1xuICAgICAgICB2YXIgeCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnVmZmVyTGVuZ3RoIHx8IGkgJSAzID09PSAwOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGFBcnJheVtpXSAvIDEyOC4wO1xuICAgICAgICAgICAgdmFyIHkgPSAodmFsdWUgKiBoZWlnaHQpIC8gMjtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2FudmFzQ3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbnZhc0N0eC5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4ICs9IHNsaWNlV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzQ3R4LmxpbmVUbyhjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgY2FudmFzQ3R4LnN0cm9rZSgpO1xuICAgIH07XG4gICAgLy8gUmVnaXN0ZXIgb3VyIGRyYXcgZnVuY3Rpb24gd2l0aCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xufTtcbnZhciBhbXBsaWZ5Q2hhdGJvdENzcyA9IFwiLmJvdCAuZG90e2JhY2tncm91bmQtY29sb3I6dmFyKC0tYm90LWRvdC1jb2xvcil9LnVzZXIgLmRvdHtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXVzZXItZG90LWNvbG9yKX0uZG90LWZsYXNoaW5ne3dpZHRoOjIuNjI1cmVtfS5kb3QtZmxhc2hpbmcgLmRvdHtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDowLjYyNXJlbTtoZWlnaHQ6MC42MjVyZW07Ym9yZGVyLXJhZGl1czoxMHJlbTtvcGFjaXR5OjAuNjV9LmRvdC1mbGFzaGluZyAubGVmdHstd2Via2l0LWFuaW1hdGlvbjpkb3QtZmxhc2hpbmcgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO2FuaW1hdGlvbjpkb3QtZmxhc2hpbmcgMXMgaW5maW5pdGUgYWx0ZXJuYXRlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjBzO2FuaW1hdGlvbi1kZWxheTowc30uZG90LWZsYXNoaW5nIC5taWRkbGV7bWFyZ2luLWxlZnQ6MC4zNzVyZW07bWFyZ2luLXJpZ2h0OjAuMzc1cmVtOy13ZWJraXQtYW5pbWF0aW9uOmRvdC1mbGFzaGluZyAxcyBpbmZpbml0ZSBsaW5lYXIgYWx0ZXJuYXRlO2FuaW1hdGlvbjpkb3QtZmxhc2hpbmcgMXMgaW5maW5pdGUgbGluZWFyIGFsdGVybmF0ZTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTowLjVzO2FuaW1hdGlvbi1kZWxheTowLjVzfS5kb3QtZmxhc2hpbmcgLnJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uOmRvdC1mbGFzaGluZyAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7YW5pbWF0aW9uOmRvdC1mbGFzaGluZyAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MXM7YW5pbWF0aW9uLWRlbGF5OjFzfUAtd2Via2l0LWtleWZyYW1lcyBkb3QtZmxhc2hpbmd7MCV7b3BhY2l0eTowLjY1fTUwJSwxMDAle29wYWNpdHk6MC4xfX1Aa2V5ZnJhbWVzIGRvdC1mbGFzaGluZ3swJXtvcGFjaXR5OjAuNjV9NTAlLDEwMCV7b3BhY2l0eTowLjF9fTpob3N0ey0td2lkdGg6MjguNzVyZW07LS1oZWlnaHQ6MzcuNXJlbTstLWhlYWRlci1jb2xvcjp2YXIoLS1hbXBsaWZ5LXNlY29uZGFyeS1jb2xvcik7LS1oZWFkZXItc2l6ZTp2YXIoLS1hbXBsaWZ5LXRleHQtbGcpOy0tYm90LWJhY2tncm91bmQtY29sb3I6cmdiKDIzMCwgMjMwLCAyMzApOy0tYm90LXRleHQtY29sb3I6YmxhY2s7LS1ib3QtZG90LWNvbG9yOnZhcigtLWJvdC10ZXh0LWNvbG9yKTstLXVzZXItYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hbXBsaWZ5LWJsdWUpOy0tdXNlci10ZXh0LWNvbG9yOnZhcigtLWFtcGxpZnktd2hpdGUpOy0tdXNlci1kb3QtY29sb3I6dmFyKC0tdXNlci10ZXh0LWNvbG9yKX0uYW1wbGlmeS1jaGF0Ym90e2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94O2Rpc3BsYXk6aW5saW5lLWZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtib3JkZXItcmFkaXVzOjAuMzc1cmVtOy13ZWJraXQtYm94LXNoYWRvdzowLjA2MjVyZW0gMHJlbSAwLjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtib3gtc2hhZG93OjAuMDYyNXJlbSAwcmVtIDAuMjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMTUpOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtmb250LWZhbWlseTp2YXIoLS1hbXBsaWZ5LWZvbnQtZmFtaWx5KTttYXJnaW4tYm90dG9tOjFyZW07d2lkdGg6MTAwJTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttYXgtd2lkdGg6dmFyKC0td2lkdGgpfUBtZWRpYSAobWluLXdpZHRoOiA2NzJweCl7LmFtcGxpZnktY2hhdGJvdHt3aWR0aDp2YXIoLS13aWR0aCl9fS5oZWFkZXJ7cGFkZGluZzoxLjI1cmVtIDAuMzc1cmVtIDEuMjVyZW0gMC4zNzVyZW07Y29sb3I6dmFyKC0taGVhZGVyLWNvbG9yKTtmb250LXNpemU6dmFyKC0taGVhZGVyLXNpemUpO2ZvbnQtd2VpZ2h0OmJvbGQ7dGV4dC1hbGlnbjpjZW50ZXI7d29yZC13cmFwOmJyZWFrLXdvcmR9LmJvZHl7Ym9yZGVyLXRvcDowLjA2MjVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtwYWRkaW5nOjEuNXJlbSAxcmVtIDAgMXJlbTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO292ZXJmbG93OmF1dG99LmJ1YmJsZXttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOjAuOGVtIDEuNGVtO3RleHQtYWxpZ246bGVmdDt3b3JkLXdyYXA6YnJlYWstd29yZDttYXJnaW4tYm90dG9tOjAuNjI1cmVtfS5ib3R7bWFyZ2luLXJpZ2h0OmF1dG87YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ib3QtYmFja2dyb3VuZC1jb2xvcik7Y29sb3I6dmFyKC0tYm90LXRleHQtY29sb3IpO2JvcmRlci1yYWRpdXM6MS41cmVtIDEuNXJlbSAxLjVyZW0gMH0udXNlcnttYXJnaW4tbGVmdDphdXRvO2JhY2tncm91bmQtY29sb3I6dmFyKC0tdXNlci1iYWNrZ3JvdW5kLWNvbG9yKTtjb2xvcjp2YXIoLS11c2VyLXRleHQtY29sb3IpO2JvcmRlci1yYWRpdXM6MS41cmVtIDEuNXJlbSAwIDEuNXJlbX0uZm9vdGVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Ym9yZGVyLXRvcDowLjA2MnJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO3BhZGRpbmctcmlnaHQ6MC42MjVyZW07bWluLWhlaWdodDozLjEyNXJlbX0uZm9vdGVyIGFtcGxpZnktaW5wdXR7LS1ib3JkZXI6bm9uZTstLW1hcmdpbjowOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjF9Y2FudmFze21hcmdpbi1sZWZ0OjAuNjI1cmVtO21hcmdpbi1yaWdodDowLjYyNXJlbTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxO2hlaWdodDozLjEyNXJlbX0uaWNvbi1idXR0b257LS1pY29uLWhlaWdodDoxLjI1cmVtOy0taWNvbi1maWxsOnZhcigtLWFtcGxpZnktcHJpbWFyeS1jb2xvcik7LS1wYWRkaW5nOjAuNjI1cmVtOy0td2lkdGg6YXV0b31cIjtcbi8vIGVudW0gZm9yIHBvc3NpYmxlIGJvdCBzdGF0ZXNcbnZhciBDaGF0U3RhdGU7XG4oZnVuY3Rpb24gKENoYXRTdGF0ZSkge1xuICAgIENoYXRTdGF0ZVtDaGF0U3RhdGVbXCJJbml0aWFsXCJdID0gMF0gPSBcIkluaXRpYWxcIjtcbiAgICBDaGF0U3RhdGVbQ2hhdFN0YXRlW1wiTGlzdGVuaW5nXCJdID0gMV0gPSBcIkxpc3RlbmluZ1wiO1xuICAgIENoYXRTdGF0ZVtDaGF0U3RhdGVbXCJTZW5kaW5nVGV4dFwiXSA9IDJdID0gXCJTZW5kaW5nVGV4dFwiO1xuICAgIENoYXRTdGF0ZVtDaGF0U3RhdGVbXCJTZW5kaW5nVm9pY2VcIl0gPSAzXSA9IFwiU2VuZGluZ1ZvaWNlXCI7XG4gICAgQ2hhdFN0YXRlW0NoYXRTdGF0ZVtcIkVycm9yXCJdID0gNF0gPSBcIkVycm9yXCI7XG59KShDaGF0U3RhdGUgfHwgKENoYXRTdGF0ZSA9IHt9KSk7XG4vLyBNZXNzYWdlIHR5cGVzXG52YXIgTWVzc2FnZUZyb207XG4oZnVuY3Rpb24gKE1lc3NhZ2VGcm9tKSB7XG4gICAgTWVzc2FnZUZyb21bXCJCb3RcIl0gPSBcImJvdFwiO1xuICAgIE1lc3NhZ2VGcm9tW1wiVXNlclwiXSA9IFwidXNlclwiO1xufSkoTWVzc2FnZUZyb20gfHwgKE1lc3NhZ2VGcm9tID0ge30pKTtcbi8vIEVycm9yIHR5cGVzXG52YXIgQ2hhdEVycm9yVHlwZTtcbihmdW5jdGlvbiAoQ2hhdEVycm9yVHlwZSkge1xuICAgIENoYXRFcnJvclR5cGVbQ2hhdEVycm9yVHlwZVtcIlJlY292ZXJhYmxlXCJdID0gMF0gPSBcIlJlY292ZXJhYmxlXCI7XG4gICAgQ2hhdEVycm9yVHlwZVtDaGF0RXJyb3JUeXBlW1wiVW5yZWNvdmVyYWJsZVwiXSA9IDFdID0gXCJVbnJlY292ZXJhYmxlXCI7XG59KShDaGF0RXJyb3JUeXBlIHx8IChDaGF0RXJyb3JUeXBlID0ge30pKTtcbnZhciBBbXBsaWZ5Q2hhdGJvdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKGhvc3RSZWYpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAgICAgLyoqIENsZWFyIG1lc3NhZ2VzIHdoZW4gY29udmVyc2F0aW9uIGZpbmlzaGVzICovXG4gICAgICAgIHRoaXMuY2xlYXJPbkNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIC8qKiBDb250aW51ZSBsaXN0ZW5pbmcgdG8gdXNlcnMgYWZ0ZXIgdGhleSBzZW5kIHRoZSBtZXNzYWdlICovXG4gICAgICAgIHRoaXMuY29udmVyc2F0aW9uTW9kZU9uID0gZmFsc2U7XG4gICAgICAgIC8qKiBUZXh0IHBsYWNlZCBpbiB0aGUgdG9wIGhlYWRlciAqL1xuICAgICAgICB0aGlzLmJvdFRpdGxlID0gVHJhbnNsYXRpb25zLkNIQVRCT1RfVElUTEU7XG4gICAgICAgIC8qKiBXaGV0aGVyIHZvaWNlIGNoYXQgaXMgZW5hYmxlZCAqL1xuICAgICAgICB0aGlzLnZvaWNlRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAvKiogV2hldGhlciB0ZXh0IGNoYXQgaXMgZW5hYmxlZCAqL1xuICAgICAgICB0aGlzLnRleHRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgLyoqIEFtb3VudCBvZiBzaWxlbmNlIChpbiBtcykgdG8gd2FpdCBmb3IgKi9cbiAgICAgICAgdGhpcy5zaWxlbmNlVGltZSA9IDE1MDA7XG4gICAgICAgIC8qKiBOb2lzZSB0aHJlc2hvbGQgYmV0d2VlbiAtMSBhbmQgMS4gQW55dGhpbmcgYmVsb3cgaXMgY29uc2lkZXJlZCBhIHNpbGVuY2UuICovXG4gICAgICAgIHRoaXMuc2lsZW5jZVRocmVzaG9sZCA9IDAuMjtcbiAgICAgICAgLyoqIE1lc3NhZ2VzIGluIGN1cnJlbnQgc2Vzc2lvbiAqL1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XG4gICAgICAgIC8qKiBUZXh0IGlucHV0IGJveCB2YWx1ZSAgKi9cbiAgICAgICAgdGhpcy50ZXh0ID0gJyc7XG4gICAgICAgIC8qKiBDdXJyZW50IGFwcCBzdGF0ZSAqL1xuICAgICAgICB0aGlzLmNoYXRTdGF0ZSA9IENoYXRTdGF0ZS5Jbml0aWFsO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVuZGVyaW5nIG1ldGhvZHNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubWVzc2FnZUpTWCA9IGZ1bmN0aW9uIChtZXNzYWdlcykge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2VMaXN0ID0gbWVzc2FnZXMubWFwKGZ1bmN0aW9uIChtZXNzYWdlKSB7IHJldHVybiBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYnViYmxlIFwiICsgbWVzc2FnZS5mcm9tIH0sIG1lc3NhZ2UuY29udGVudCk7IH0pO1xuICAgICAgICAgICAgaWYgKF90aGlzLmNoYXRTdGF0ZSA9PT0gQ2hhdFN0YXRlLlNlbmRpbmdUZXh0IHx8IF90aGlzLmNoYXRTdGF0ZSA9PT0gQ2hhdFN0YXRlLlNlbmRpbmdWb2ljZSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdhaXRpbmcgZm9yIHZvaWNlIG1lc3NhZ2UsIHNob3cgYW5pbWF0aW9uIG9uIHVzZXIgc2lkZSBiZWNhdXNlIGFwcCBpcyB3YWl0aW5nIGZvciB0cmFuc2NyaXB0LiBFbHNlIHB1dCBpdCBvbiBib3Qgc2lkZS5cbiAgICAgICAgICAgICAgICB2YXIgY2xpZW50ID0gX3RoaXMuY2hhdFN0YXRlID09PSBDaGF0U3RhdGUuU2VuZGluZ1RleHQgPyBNZXNzYWdlRnJvbS5Cb3QgOiBNZXNzYWdlRnJvbS5Vc2VyO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0LnB1c2goaChcImRpdlwiLCB7IGNsYXNzOiBcImJ1YmJsZSBcIiArIGNsaWVudCB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiZG90LWZsYXNoaW5nIFwiICsgY2xpZW50IH0sIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwiZG90IGxlZnRcIiB9KSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJkb3QgbWlkZGxlXCIgfSksIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwiZG90IHJpZ2h0XCIgfSkpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZUxpc3Q7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2hhdENvbXBsZXRlZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2hhdENvbXBsZXRlZFwiLCA3KTtcbiAgICB9XG4gICAgLy8gT2NjdXJzIHdoZW4gdXNlciBwcmVzc2VzIGVudGVyIGluIGlucHV0IGJveFxuICAgIGNsYXNzXzEucHJvdG90eXBlLnN1Ym1pdEhhbmRsZXIgPSBmdW5jdGlvbiAoX2V2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZFRleHRNZXNzYWdlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBMaWZlY3ljbGUgZnVuY3Rpb25zXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29tcG9uZW50V2lsbExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghSW50ZXJhY3Rpb25zIHx8IHR5cGVvZiBJbnRlcmFjdGlvbnMub25Db21wbGV0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE5PX0lOVEVSQUNUSU9OU19NT0RVTEVfRk9VTkQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsaWRhdGVQcm9wcygpO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuY29tcG9uZW50RGlkUmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBzY3JvbGwgdG8gdGhlIGJvdHRvbSBpZiBuZWNlc3NhcnlcbiAgICAgICAgdmFyIGJvZHkgPSB0aGlzLmVsZW1lbnQuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuYm9keScpO1xuICAgICAgICBib2R5LnNjcm9sbFRvcCA9IGJvZHkuc2Nyb2xsSGVpZ2h0O1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUudmFsaWRhdGVQcm9wcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLnZvaWNlRW5hYmxlZCAmJiAhdGhpcy50ZXh0RW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRFcnJvcihUcmFuc2xhdGlvbnMuQ0hBVF9ESVNBQkxFRF9FUlJPUiwgQ2hhdEVycm9yVHlwZS5VbnJlY292ZXJhYmxlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5ib3ROYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnNldEVycm9yKFRyYW5zbGF0aW9ucy5OT19CT1RfTkFNRV9FUlJPUiwgQ2hhdEVycm9yVHlwZS5VbnJlY292ZXJhYmxlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy53ZWxjb21lTWVzc2FnZSlcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kVG9DaGF0KHRoaXMud2VsY29tZU1lc3NhZ2UsIE1lc3NhZ2VGcm9tLkJvdCk7XG4gICAgICAgIC8vIEluaXRpYWxpemUgQXVkaW9SZWNvcmRlciBpZiB2b2ljZSBpcyBlbmFibGVkXG4gICAgICAgIGlmICh0aGlzLnZvaWNlRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5hdWRpb1JlY29yZGVyID0gbmV3IEF1ZGlvUmVjb3JkZXIoe1xuICAgICAgICAgICAgICAgIHRpbWU6IHRoaXMuc2lsZW5jZVRpbWUsXG4gICAgICAgICAgICAgICAgYW1wbGl0dWRlOiB0aGlzLnNpbGVuY2VUaHJlc2hvbGQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlci5pbml0KCkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldEVycm9yKGVyciwgQ2hhdEVycm9yVHlwZS5SZWNvdmVyYWJsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgY2hhdCBpcyBjb21wbGV0ZWRcbiAgICAgICAgdmFyIG9uQ29tcGxldGUgPSBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgICAgICBfdGhpcy5jaGF0Q29tcGxldGVkLmVtaXQoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5jbGVhck9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2hhdFN0YXRlID0gQ2hhdFN0YXRlLkluaXRpYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBJbnRlcmFjdGlvbnMub25Db21wbGV0ZSh0aGlzLmJvdE5hbWUsIG9uQ29tcGxldGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RXJyb3IoZXJyLCBDaGF0RXJyb3JUeXBlLlVucmVjb3ZlcmFibGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVyc1xuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmhhbmRsZU1pY0J1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuY2hhdFN0YXRlICE9PSBDaGF0U3RhdGUuSW5pdGlhbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5hdWRpb1JlY29yZGVyLnN0b3AoKTtcbiAgICAgICAgdGhpcy5jaGF0U3RhdGUgPSBDaGF0U3RhdGUuTGlzdGVuaW5nO1xuICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlU2lsZW5jZSgpOyB9LCBmdW5jdGlvbiAoZGF0YSwgbGVuZ3RoKSB7IHJldHVybiBfdGhpcy52aXN1YWxpemVyKGRhdGEsIGxlbmd0aCk7IH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuaGFuZGxlU2lsZW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jaGF0U3RhdGUgPSBDaGF0U3RhdGUuU2VuZGluZ1ZvaWNlO1xuICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIuc3RvcFJlY29yZGluZygpO1xuICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIuZXhwb3J0V0FWKCkudGhlbihmdW5jdGlvbiAoYmxvYikge1xuICAgICAgICAgICAgX3RoaXMuc2VuZFZvaWNlTWVzc2FnZShibG9iKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5oYW5kbGVUZXh0Q2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHRoaXMudGV4dCA9IHRhcmdldC52YWx1ZTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmhhbmRsZUNhbmNlbEJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hdWRpb1JlY29yZGVyLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuY2hhdFN0YXRlID0gQ2hhdFN0YXRlLkluaXRpYWw7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5oYW5kbGVUb2FzdENsb3NlID0gZnVuY3Rpb24gKGVycm9yVHlwZSkge1xuICAgICAgICB0aGlzLmVycm9yID0gdW5kZWZpbmVkOyAvLyBjbGVhciBlcnJvclxuICAgICAgICAvLyBpZiBlcnJvciBpcyByZWNvdmVyYWJsZSwgcmVzZXQgdGhlIGFwcCBzdGF0ZSB0byBpbml0aWFsXG4gICAgICAgIGlmIChlcnJvclR5cGUgPT09IENoYXRFcnJvclR5cGUuUmVjb3ZlcmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhdFN0YXRlID0gQ2hhdFN0YXRlLkluaXRpYWw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFZpc3VhbGl6YXRpb25cbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS52aXN1YWxpemVyID0gZnVuY3Rpb24gKGRhdGFBcnJheSwgYnVmZmVyTGVuZ3RoKSB7XG4gICAgICAgIHZhciBjYW52YXMgPSB0aGlzLmVsZW1lbnQuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbiAgICAgICAgdmlzdWFsaXplKGRhdGFBcnJheSwgYnVmZmVyTGVuZ3RoLCBjYW52YXMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW50ZXJhY3Rpb25zIGhlbHBlcnNcbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5zZW5kVGV4dE1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0LCByZXNwb25zZSwgZXJyXzM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXh0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmNoYXRTdGF0ZSAhPT0gQ2hhdFN0YXRlLkluaXRpYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHRoaXMudGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRUb0NoYXQodGV4dCwgTWVzc2FnZUZyb20uVXNlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXRTdGF0ZSA9IENoYXRTdGF0ZS5TZW5kaW5nVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEludGVyYWN0aW9ucy5zZW5kKHRoaXMuYm90TmFtZSwgdGV4dCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJfMyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3IoZXJyXzMsIENoYXRFcnJvclR5cGUuUmVjb3ZlcmFibGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kVG9DaGF0KHJlc3BvbnNlLm1lc3NhZ2UsIE1lc3NhZ2VGcm9tLkJvdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXRTdGF0ZSA9IENoYXRTdGF0ZS5Jbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNlbmRWb2ljZU1lc3NhZ2UgPSBmdW5jdGlvbiAoYXVkaW9JbnB1dCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW50ZXJhY3Rpb25zTWVzc2FnZSwgcmVzcG9uc2UsIGVycl80LCBkaWFsb2dTdGF0ZTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbnNNZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGF1ZGlvSW5wdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlVHlwZTogJ3ZvaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIEludGVyYWN0aW9ucy5zZW5kKHRoaXMuYm90TmFtZSwgaW50ZXJhY3Rpb25zTWVzc2FnZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJfNCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3IoZXJyXzQsIENoYXRFcnJvclR5cGUuUmVjb3ZlcmFibGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXRTdGF0ZSA9IENoYXRTdGF0ZS5Jbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nU3RhdGUgPSByZXNwb25zZS5kaWFsb2dTdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5pbnB1dFRyYW5zY3JpcHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRUb0NoYXQocmVzcG9uc2UuaW5wdXRUcmFuc2NyaXB0LCBNZXNzYWdlRnJvbS5Vc2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kVG9DaGF0KHJlc3BvbnNlLm1lc3NhZ2UsIE1lc3NhZ2VGcm9tLkJvdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmF1ZGlvUmVjb3JkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBsYXkocmVzcG9uc2UuYXVkaW9TdHJlYW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgY29udmVyc2F0aW9uTW9kZSBpcyBvbiwgY2hhdCBpcyBpbmNvbXBsZXRlLCBhbmQgbWljIGJ1dHRvbiBpc24ndCBwcmVzc2VkIHlldCwgcmVzdW1lIGxpc3RlbmluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmNvbnZlcnNhdGlvbk1vZGVPbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nU3RhdGUgIT09ICdGdWxmaWxsZWQnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dTdGF0ZSAhPT0gJ0ZhaWxlZCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNoYXRTdGF0ZSA9PT0gQ2hhdFN0YXRlLkluaXRpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZU1pY0J1dHRvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIF90aGlzLnNldEVycm9yKGVyciwgQ2hhdEVycm9yVHlwZS5SZWNvdmVyYWJsZSk7IH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmFwcGVuZFRvQ2hhdCA9IGZ1bmN0aW9uIChjb250ZW50LCBmcm9tKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBfX3NwcmVhZEFycmF5cyh0aGlzLm1lc3NhZ2VzLCBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICAgICAgICBmcm9tOiBmcm9tLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdGF0ZSBjb250cm9sIG1ldGhvZHNcbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5zZXRFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgZXJyb3JUeXBlKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gdHlwZW9mIGVycm9yID09PSAnc3RyaW5nJyA/IGVycm9yIDogZXJyb3IubWVzc2FnZTtcbiAgICAgICAgdGhpcy5jaGF0U3RhdGUgPSBDaGF0U3RhdGUuRXJyb3I7XG4gICAgICAgIHRoaXMuZXJyb3IgPSB7IG1lc3NhZ2U6IG1lc3NhZ2UsIGVycm9yVHlwZTogZXJyb3JUeXBlIH07XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGF0U3RhdGUgPSBDaGF0U3RhdGUuSW5pdGlhbDtcbiAgICAgICAgdGhpcy50ZXh0ID0gJyc7XG4gICAgICAgIHRoaXMuZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMud2VsY29tZU1lc3NhZ2UpXG4gICAgICAgICAgICB0aGlzLmFwcGVuZFRvQ2hhdCh0aGlzLndlbGNvbWVNZXNzYWdlLCBNZXNzYWdlRnJvbS5Cb3QpO1xuICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIgJiYgdGhpcy5hdWRpb1JlY29yZGVyLmNsZWFyKCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5saXN0ZW5pbmdGb290ZXJKU1ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB2aXN1YWxpemF0aW9uID0gaChcImNhbnZhc1wiLCB7IGhlaWdodDogXCI1MFwiIH0pO1xuICAgICAgICB2YXIgY2FuY2VsQnV0dG9uID0gKGgoXCJhbXBsaWZ5LWJ1dHRvblwiLCB7IFwiZGF0YS10ZXN0XCI6IFwiY2hhdGJvdC1jYW5jZWwtYnV0dG9uXCIsIGhhbmRsZUJ1dHRvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVDYW5jZWxCdXR0b24oKTsgfSwgY2xhc3M6IFwiaWNvbi1idXR0b25cIiwgdmFyaWFudDogXCJpY29uXCIsIGljb246IFwiYmFuXCIgfSkpO1xuICAgICAgICByZXR1cm4gW3Zpc3VhbGl6YXRpb24sIGNhbmNlbEJ1dHRvbl07XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5mb290ZXJKU1ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmNoYXRTdGF0ZSA9PT0gQ2hhdFN0YXRlLkxpc3RlbmluZylcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RlbmluZ0Zvb3RlckpTWCgpO1xuICAgICAgICB2YXIgaW5wdXRQbGFjZWhvbGRlciA9IHRoaXMudGV4dEVuYWJsZWRcbiAgICAgICAgICAgID8gVHJhbnNsYXRpb25zLlRFWFRfSU5QVVRfUExBQ0VIT0xERVJcbiAgICAgICAgICAgIDogVHJhbnNsYXRpb25zLlZPSUNFX0lOUFVUX1BMQUNFSE9MREVSO1xuICAgICAgICB2YXIgdGV4dElucHV0ID0gKGgoXCJhbXBsaWZ5LWlucHV0XCIsIHsgcGxhY2Vob2xkZXI6IEkxOG4uZ2V0KGlucHV0UGxhY2Vob2xkZXIpLCBkZXNjcmlwdGlvbjogXCJ0ZXh0XCIsIGhhbmRsZUlucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBfdGhpcy5oYW5kbGVUZXh0Q2hhbmdlKGV2dCk7IH0sIHZhbHVlOiB0aGlzLnRleHQsIGRpc2FibGVkOiB0aGlzLmNoYXRTdGF0ZSA9PT0gQ2hhdFN0YXRlLkVycm9yIHx8ICF0aGlzLnRleHRFbmFibGVkIH0pKTtcbiAgICAgICAgdmFyIG1pY0J1dHRvbiA9IHRoaXMudm9pY2VFbmFibGVkICYmIChoKFwiYW1wbGlmeS1idXR0b25cIiwgeyBcImRhdGEtdGVzdFwiOiBcImNoYXRib3QtbWljLWJ1dHRvblwiLCBoYW5kbGVCdXR0b25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlTWljQnV0dG9uKCk7IH0sIGNsYXNzOiBcImljb24tYnV0dG9uXCIsIHZhcmlhbnQ6IFwiaWNvblwiLCBpY29uOiBcIm1pY3JvcGhvbmVcIiwgZGlzYWJsZWQ6IHRoaXMuY2hhdFN0YXRlID09PSBDaGF0U3RhdGUuRXJyb3IgfHwgdGhpcy5jaGF0U3RhdGUgIT09IENoYXRTdGF0ZS5Jbml0aWFsIH0pKTtcbiAgICAgICAgdmFyIHNlbmRCdXR0b24gPSB0aGlzLnRleHRFbmFibGVkICYmIChoKFwiYW1wbGlmeS1idXR0b25cIiwgeyBcImRhdGEtdGVzdFwiOiBcImNoYXRib3Qtc2VuZC1idXR0b25cIiwgY2xhc3M6IFwiaWNvbi1idXR0b25cIiwgdmFyaWFudDogXCJpY29uXCIsIGljb246IFwic2VuZFwiLCBoYW5kbGVCdXR0b25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2VuZFRleHRNZXNzYWdlKCk7IH0sIGRpc2FibGVkOiB0aGlzLmNoYXRTdGF0ZSA9PT0gQ2hhdFN0YXRlLkVycm9yIHx8IHRoaXMuY2hhdFN0YXRlICE9PSBDaGF0U3RhdGUuSW5pdGlhbCB9KSk7XG4gICAgICAgIHJldHVybiBbdGV4dElucHV0LCBtaWNCdXR0b24sIHNlbmRCdXR0b25dO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZXJyb3JUb2FzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmVycm9yKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmVycm9yLCBtZXNzYWdlID0gX2EubWVzc2FnZSwgZXJyb3JUeXBlID0gX2EuZXJyb3JUeXBlO1xuICAgICAgICByZXR1cm4gaChcImFtcGxpZnktdG9hc3RcIiwgeyBtZXNzYWdlOiBJMThuLmdldChtZXNzYWdlKSwgaGFuZGxlQ2xvc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZVRvYXN0Q2xvc2UoZXJyb3JUeXBlKTsgfSB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbXBsaWZ5LWNoYXRib3RcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFwiaGVhZGVyXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImhlYWRlclwiLCBcImRhdGEtdGVzdFwiOiBcImNoYXRib3QtaGVhZGVyXCIgfSwgSTE4bi5nZXQodGhpcy5ib3RUaXRsZSkpKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImJvZHlcIiwgXCJkYXRhLXRlc3RcIjogXCJjaGF0Ym90LWJvZHlcIiB9LCB0aGlzLm1lc3NhZ2VKU1godGhpcy5tZXNzYWdlcykpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiZm9vdGVyXCIsIFwiZGF0YS10ZXN0XCI6IFwiY2hhdGJvdC1mb290ZXJcIiB9LCB0aGlzLmZvb3RlckpTWCgpKSwgdGhpcy5lcnJvclRvYXN0KCkpKSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwiZWxlbWVudFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKTtcbkFtcGxpZnlDaGF0Ym90LnN0eWxlID0gYW1wbGlmeUNoYXRib3RDc3M7XG5leHBvcnQgeyBBbXBsaWZ5Q2hhdGJvdCBhcyBhbXBsaWZ5X2NoYXRib3QgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=