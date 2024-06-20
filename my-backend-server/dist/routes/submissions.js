"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissionsRouter = void 0;
const express_1 = require("express");
const submissionsController_1 = require("../controllers/submissionsController");
exports.submissionsRouter = (0, express_1.Router)();
exports.submissionsRouter.get('/', submissionsController_1.submissionsController);
