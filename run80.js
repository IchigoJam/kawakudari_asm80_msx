import { compile } from "https://asm80.github.io/asm80-core/asm.js";
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

const fn = Deno.args[0];
if (!fn) {
  console.log("run80.js [fn asm] | sh");
  Deno.exit(1);
}

const asm = await Deno.readTextFile(fn);

const fileSystem = {
};
const opts = {
  assembler: "z80",
};
const res = await compile(asm, fileSystem, opts);
const bin = [];
res.dump.forEach(i => i.lens?.forEach(j => bin.push(j)));
const ubin = new Uint8Array(bin);

// from rom2sh
const hex = Base16.encode(ubin);
//const baseurl = "http://[::]:8000/MIX.html";
const baseurl = "https://ichigojam.github.io/MIX/";
const url = baseurl + "?rom=" + hex;
const sh = `open "${url}"`;
console.log(sh);
