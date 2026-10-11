# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1.0 | 2026-10-04 | 3383<sub>(+34) | 3565<sub>(-14) | 3590<sub>(-12) |  |
| 9.0 | 2026-02-27 | 3349 | 3579 | 3602 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1.0 | 2026-10-04 | 3645<sub>(+67) | 3798<sub>(+56) | 3803<sub>(+54) |  |
| 9.0 | 2026-02-27 | 3578 | 3742 | 3749 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-02-27 | 3443<sub>(+3) | 3560<sub>(+3) | 3588<sub>(-3) |  |
| 8.1.12 | 2025-11-09 | 3440<sub>(+8) | 3557<sub>(-2) | 3591<sub>(+12) |  |
| 8.1 | 2025-08-16 | 3432<sub>(+30) | 3559<sub>(+26) | 3579<sub>(+10) |  |
| 8.0 | 2025-03-03 | 3402<sub>(+43) | 3533<sub>(+14) | 3569<sub>(+18) |  |
| 7.1 | 2024-10-26 | 3359<sub>(+12) | 3519<sub>(+17) | 3551<sub>(+6) |  |
| 7.0 | 2024-05-25 | 3347 | 3502 | 3545 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Alexandria+<version>&body=###%20Engine%20name%0AAlexandria%0A%0A###%20Version%0A9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-11 15:16:27

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["9.0", "9.1.0"]
  y-axis "Elo Rating" 3300 --> 3900
  line "E1: STC (8.0+0.08s)" [3349, 3383]
  line "E1: LTC (60.0+0.60s)" [3579, 3565]
  line "E1: VLTC (2m24s+1.12s)" [3602, 3590]
  line "P1: STC (8.0+0.08s)" [3578, 3645]
  line "P1: LTC (60.0+0.60s)" [3742, 3798]
  line "P1: VLTC (2m24s+1.12s)" [3749, 3803]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "7.1", "8.0", "8.1", "8.1.12", "9.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3347, 3359, 3402, 3432, 3440, 3443]
  line "T1: LTC (60.0+0.60s)" [3502, 3519, 3533, 3559, 3557, 3560]
  line "T1: VLTC (2m24s+1.12s)" [3545, 3551, 3569, 3579, 3591, 3588]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3803 | 116 | 16 | 56% | 3765 | 88% |
| 9.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3590 | 84 | 32 | 47% | 3611 | 81% |
| 9.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3798 | 106 | 20 | 55% | 3764 | 80% |
| 9.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3565 | 84 | 32 | 45% | 3595 | 84% |
| 9.1.0 | STC <sub>(8.0+0.08s)</sub> | 3645 | 98 | 24 | 56% | 3603 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.1.0 | STC <sub>(8.0+0.08s)</sub> | 3383 | 103 | 20 | 53% | 3368 | 95% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3749 | 54 | 76 | 50% | 3749 | 92% |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3602 | 45 | 112 | 50% | 3602 | 89% |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3588 | 26 | 342 | 51% | 3576 | 88% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3560 | 23 | 444 | 51% | 3555 | 90% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3579 | 46 | 108 | 50% | 3575 | 88% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3742 | 51 | 84 | 51% | 3738 | 92% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3349 | 30 | 268 | 46% | 3376 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3578 | 38 | 170 | 49% | 3583 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3443 | 19 | 642 | 51% | 3437 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | 3591 | 34 | 202 | 51% | 3583 | 87% |
| 8.1.12 | LTC <sub>(60.0+0.60s)</sub> | 3557 | 30 | 256 | 49% | 3564 | 89% |
| 8.1.12 | STC <sub>(8.0+0.08s)</sub> | 3440 | 26 | 360 | 50% | 3438 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3579 | 31 | 240 | 50% | 3578 | 90% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3559 | 27 | 304 | 50% | 3559 | 89% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3432 | 26 | 348 | 50% | 3430 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3569 | 26 | 348 | 51% | 3560 | 87% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3533 | 23 | 428 | 50% | 3536 | 86% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3402 | 24 | 440 | 50% | 3403 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 19 | 648 | 51% | 3544 | 87% |
| 7.1 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 16 | 868 | 50% | 3519 | 83% |
| 7.1 | STC <sub>(8.0+0.08s)</sub> | 3359 | 16 | 964 | 50% | 3362 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 30 | 268 | 56% | 3468 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3502 | 33 | 212 | 51% | 3495 | 83% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3347 | 32 | 244 | 52% | 3328 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |