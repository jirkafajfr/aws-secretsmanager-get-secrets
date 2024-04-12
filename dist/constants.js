"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameTransformation = exports.CLEANUP_NAME = exports.LIST_SECRETS_MAX_RESULTS = void 0;
exports.LIST_SECRETS_MAX_RESULTS = 100;
exports.CLEANUP_NAME = 'SECRETS_LIST_CLEAN_UP';
var NameTransformation;
(function (NameTransformation) {
    NameTransformation["None"] = "none";
    NameTransformation["Uppercase"] = "uppercase";
    NameTransformation["Lowercase"] = "lowercase";
})(NameTransformation || (exports.NameTransformation = NameTransformation = {}));
