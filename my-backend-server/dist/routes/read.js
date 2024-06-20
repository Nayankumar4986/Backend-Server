"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readRouter = void 0;
const express_1 = require("express");
const readController_1 = require("../controllers/readController");
exports.readRouter = (0, express_1.Router)();
exports.readRouter.get('/', readController_1.readController);
