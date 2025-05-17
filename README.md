# kawakudari for MSX with ASM80

- kawakudari for MSX with [ASM80](https://www.asm80.com/) ([asm80-core](https://github.com/asm80/asm80-core/))
- [run on MIX](https://github.com/ichigojam/MIX) (see also [openMSX ver](https://github.com/IchigoJam/kawakudari_sdcc_msx/tree/openMSX))

## compile & run

```sh
deno --allow-read --allow-import run80.js kawakudari.asm | sh
```

## compile

```sh
deno --allow-read --allow-import --allow-write asm80.js kawakudari.asm kawakudari.rom
```

## setup

### Deno

- [Deno](https://deno.com/)

## related

- [kawakudari original](https://ichigojam.net/IchigoJam-firstgame.pdf)
- [kawakudari z88dk MSX](https://github.com/ichigojam/kawakudari_z88dk_msx)
- [kawakudari SDCC MSX](https://github.com/ichigojam/kawakudari_sdcc_msx)
