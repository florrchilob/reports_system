"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var connectDB_1 = require("./config/connectDB");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
(0, connectDB_1.default)();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(process.env.PORT, function () {
    console.log("Server is running on port ".concat(process.env.PORT));
});
