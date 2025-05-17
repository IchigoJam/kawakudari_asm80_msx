  .org 0x4000
  .dw 0x4241
  .dw 0x4010 ; init
  .dw 0
  .dw 0
  .dw 0
  .dw 0
  .dw 0
  .dw 0

  ld a, "M"
  call 0x00A2
  ld a, "I"
  call 0x00A2
  ld a, "X"
  call 0x00A2

Loop:
  jr Loop
