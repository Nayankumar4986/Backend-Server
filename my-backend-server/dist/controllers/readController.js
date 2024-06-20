"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readController = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dbFilePath = path_1.default.resolve(__dirname, '../../db.json');
const readController = (req, res) => {
    const index = parseInt(req.query.index, 10);
    if (isNaN(index)) {
        return res.status(400).json({ error: 'Invalid index' });
    }
    if (!fs_1.default.existsSync(dbFilePath)) {
        return res.status(404).json({ error: 'No submissions found' });
    }
    const data = fs_1.default.readFileSync(dbFilePath, 'utf8');
    const submissions = JSON.parse(data);
    if (index < 0 || index >= submissions.length) {
        return res.status(404).json({ error: 'Submission not found' });
    }
    res.json(submissions[index]);
};
exports.readController = readController;
