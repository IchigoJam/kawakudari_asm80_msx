import { compile } from "https://asm80.github.io/asm80-core/asm.js";

const fn = Deno.args[0];
const fnout = Deno.args[1];
if (!fn || !fnout) {
  console.log("asm80.js [fn asm] [fn bin]");
  Deno.exit(1);
}

const asm = await Deno.readTextFile(fn);

const fileSystem = {
};
const opts = {
  assembler: "z80",
};
// export const compile = async (source, fileSystem, opts = {assembler:null}, filename="noname") => {
const res = await compile(asm, fileSystem, opts);
//console.log(res);
//console.log(res.dump);
const bin = [];
res.dump.forEach(i => i.lens?.forEach(j => bin.push(j)));
const ubin = new Uint8Array(bin);

await Deno.writeFile(fnout, ubin);
