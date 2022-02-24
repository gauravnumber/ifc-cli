#! /usr/bin/env node
import Ifc from "../index";
import { program } from "commander";

program.option("-s", "testing");
program.parse(process.argv);

const options = program.opts();

if (options.s) {
  console.log("-s testing");
}

const ifc = new Ifc();

console.log(ifc.now());
