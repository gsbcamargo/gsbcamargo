#!/usr/bin/env node

"use strict";
const { readFile } = require("fs");
const { join } = require("path");

readFile(join(__dirname, "gabInfo.json"), "utf8", (err, content) => {
  if (err) throw err;
  console.log(content);
});
