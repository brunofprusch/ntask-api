import express from "express";
import consign from "consign";
import { join } from "path";

const app = express();

consign()
    .include("libs/config.js")
    .then("dao/db.js")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app)