"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pingRouter = void 0;
const express_1 = require("express");
const pingController_1 = require("../controllers/pingController");
exports.pingRouter = (0, express_1.Router)();
exports.pingRouter.get('/', pingController_1.pingController);
