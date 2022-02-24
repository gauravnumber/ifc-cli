#! /usr/bin/env node

import Ifc from "../index";
import { program } from "commander";

program.option(
  "-c <date>",
  "Convert Georgian calender to International Fixed Calender"
);
program.parse(process.argv);

const options = program.opts();

if (options.c) {
  let [day, month, year] = options.c.split("-");

  const ifc = new Ifc(new Date(year, month - 1, day));

  console.log(ifc.now());
} else {
  const ifc = new Ifc(new Date());

  console.log(ifc.now());
}
