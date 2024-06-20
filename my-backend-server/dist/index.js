"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const ping_1 = require("./routes/ping");
const submit_1 = require("./routes/submit");
const read_1 = require("./routes/read");
const submissions_1 = require("./routes/submissions");
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.use('/ping', ping_1.pingRouter);
app.use('/submit', submit_1.submitRouter);
app.use('/read', read_1.readRouter);
app.use('/submissions', submissions_1.submissionsRouter);
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
