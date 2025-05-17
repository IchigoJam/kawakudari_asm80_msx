# kawakudari for MSX with ASM80

- kawakudari for MSX with [ASM80](https://www.asm80.com/) ([asm80-core](https://github.com/asm80/asm80-core/))
- [run on MIX](https://github.com/ichigojam/MIX)

## tutorial

make mix.asm
```asm
  .org 0x4000
  .dw 0x4241, 0x4010, 0, 0, 0, 0, 0, 0

  ld a, 'M'
  call 0x00A2
  ld a, 'I'
  call 0x00A2
  ld a, 'X'
  call 0x00A2

loop:
  jr loop
```
compile and run
```sh
deno --allow-read --allow-import https://ichigojam.github.io/kawakudari_asm80_msx/run80.js mix.asm | sh
```

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
