"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissionsController = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dbFilePath = path_1.default.resolve(__dirname, '../../db.json');
const submissionsController = (req, res) => {
    if (!fs_1.default.existsSync(dbFilePath)) {
        return res.status(404).json({ error: 'No submissions found' });
    }
    const data = fs_1.default.readFileSync(dbFilePath, 'utf8');
    const submissions = JSON.parse(data);
    res.json(submissions);
};
exports.submissionsController = submissionsController;
