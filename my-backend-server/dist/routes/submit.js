"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitRouter = void 0;
const express_1 = require("express");
const submitController_1 = require("../controllers/submitController");
exports.submitRouter = (0, express_1.Router)();
exports.submitRouter.post('/', submitController_1.submitController);
