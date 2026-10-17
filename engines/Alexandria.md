# Engine: Alexandria

Author: PGG106

Home: https://github.com/PGG106/Alexandria

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1.0 | 2026-10-04 | 3411<sub>(+41) | 3595<sub>(-10) | 3646<sub>(+19) |  |
| 9.0 | 2026-02-27 | 3370 | 3605 | 3627 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.1.0 | 2026-10-04 | 3626<sub>(+65) | 3787<sub>(+60) | 3780<sub>(+45) |  |
| 9.0 | 2026-02-27 | 3561 | 3727 | 3735 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

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

Generated: 2026-10-17 04:35:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["9.0", "9.1.0"]
  y-axis "Elo Rating" 3300 --> 3800
  line "E1: STC (8.0+0.08s)" [3370, 3411]
  line "E1: LTC (60.0+0.60s)" [3605, 3595]
  line "E1: VLTC (2m24s+1.12s)" [3627, 3646]
  line "P1: STC (8.0+0.08s)" [3561, 3626]
  line "P1: LTC (60.0+0.60s)" [3727, 3787]
  line "P1: VLTC (2m24s+1.12s)" [3735, 3780]
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

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 9.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3646 | 43 | 122 | 52% | 3630 | 85% |
|  |  | P1 | 3780 | 70 | 44 | 51% | 3773 | 93% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3595 | 49 | 92 | 49% | 3602 | 91% |
|  |  | P1 | 3787 | 85 | 32 | 53% | 3765 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3411 | 44 | 126 | 50% | 3409 | 74% |
|  |  | P1 | 3626 | 51 | 92 | 53% | 3609 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3588 | 26 | 342 | 51% | 3576 | 88% |
|  |  | P1 | 3735 | 52 | 80 | 50% | 3734 | 93% |
|  |  | E1 | 3627 | 44 | 116 | 50% | 3626 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3727 | 51 | 84 | 51% | 3725 | 92% |
|  |  | T1 | 3560 | 23 | 444 | 51% | 3555 | 90% |
|  |  | E1 | 3605 | 43 | 120 | 50% | 3602 | 88% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3561 | 38 | 174 | 49% | 3567 | 75% |
|  |  | T1 | 3443 | 19 | 642 | 51% | 3437 | 77% |
|  |  | E1 | 3370 | 30 | 274 | 46% | 3397 | 73% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.1.12 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3591 | 34 | 202 | 51% | 3583 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3557 | 30 | 256 | 49% | 3564 | 89% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3440 | 26 | 360 | 50% | 3438 | 77% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3579 | 31 | 240 | 50% | 3578 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3559 | 27 | 304 | 50% | 3559 | 89% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3432 | 26 | 348 | 50% | 3430 | 76% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3569 | 26 | 348 | 51% | 3560 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3533 | 23 | 428 | 50% | 3536 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3402 | 24 | 440 | 50% | 3403 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3551 | 19 | 648 | 51% | 3544 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3519 | 16 | 868 | 50% | 3519 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3359 | 16 | 964 | 50% | 3362 | 73% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3545 | 30 | 268 | 56% | 3468 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3502 | 33 | 212 | 51% | 3495 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3347 | 32 | 244 | 52% | 3328 | 68% |