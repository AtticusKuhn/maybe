"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Maybe {
    constructor(value) {
        this.value = value;
    }
    force(message = "Tried to force a maybe") {
        if (this.value)
            return this.value;
        throw new Error(message);
    }
}
exports.default = Maybe;
//# sourceMappingURL=index.js.map