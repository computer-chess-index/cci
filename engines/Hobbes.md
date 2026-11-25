# Engine: Hobbes

Author: Dan Kelsey

Home: https://github.com/kelseyde/hobbes-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-11-13 | 3437<sub>(+8) | 3664<sub>(+26) | 3686<sub>(+2) |  |
| 3.0 | 2026-07-22 | 3429<sub>(+35) | 3638<sub>(+89) | 3684<sub>(-18) |  |
| 2.1 | 2026-05-26 | 3394 | 3549 | 3702 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-11-13 | 3447<sub>(+26) | 3594<sub>(0) | 3606<sub>(+3) |  |
| 3.0 | 2026-07-22 | 3421<sub>(+93) | 3594<sub>(+196) | 3603<sub>(+158) |  |
| 2.1 | 2026-05-26 | 3328 | 3398 | 3445 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-07-22 | 3426<sub>(+13) | 3563<sub>(+19) | 3587<sub>(+32) |  |
| 2.1 | 2026-05-26 | 3413<sub>(+30) | 3544<sub>(+27) | 3555<sub>(+25) |  |
| 1.0 | 2026-03-05 | 3383 | 3517 | 3530 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Hobbes+<version>&body=###%20Engine%20name%0AHobbes%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-25 05:39:04

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "4.0"]
  y-axis "Elo Rating" 3300 --> 3800
  line "E1: STC (8.0+0.08s)" [3394, 3429, 3437]
  line "E1: LTC (60.0+0.60s)" [3549, 3638, 3664]
  line "E1: VLTC (2m24s+1.12s)" [3702, 3684, 3686]
  line "P1: STC (8.0+0.08s)" [3328, 3421, 3447]
  line "P1: LTC (60.0+0.60s)" [3398, 3594, 3594]
  line "P1: VLTC (2m24s+1.12s)" [3445, 3603, 3606]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.1", "3.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3383, 3413, 3426]
  line "T1: LTC (60.0+0.60s)" [3517, 3544, 3563]
  line "T1: VLTC (2m24s+1.12s)" [3530, 3555, 3587]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3686 | 29 | 280 | 48% | 3699 | 88% |
|  |  | P1 | 3606 | 83 | 30 | 50% | 3606 | 100% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3664 | 40 | 144 | 50% | 3661 | 87% |
|  |  | P1 | 3594 | 59 | 64 | 52% | 3583 | 88% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3447 | 46 | 116 | 53% | 3422 | 76% |
|  |  | E1 | 3437 | 36 | 192 | 47% | 3455 | 73% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3587 | 29 | 278 | 51% | 3576 | 88% |
|  |  | P1 | 3603 | 41 | 132 | 49% | 3610 | 96% |
|  |  | E1 | 3684 | 28 | 290 | 50% | 3681 | 96% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3563 | 25 | 350 | 51% | 3557 | 90% |
|  |  | P1 | 3594 | 39 | 142 | 51% | 3587 | 96% |
|  |  | E1 | 3638 | 31 | 234 | 50% | 3640 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3426 | 26 | 350 | 49% | 3432 | 76% |
|  |  | P1 | 3421 | 35 | 196 | 50% | 3420 | 83% |
|  |  | E1 | 3429 | 28 | 298 | 48% | 3443 | 78% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3445 | 146 | 28 | 88% | 2728 | 25% |
|  |  | E1 | 3702 | 169 | 32 | 92% | 2705 | 9% |
|  |  | T1 | 3555 | 31 | 232 | 51% | 3549 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3398 | 305 | 20 | 100% | 2472 | 0% |
|  |  | E1 | 3549 | 120 | 32 | 80% | 2938 | 34% |
|  |  | T1 | 3544 | 30 | 260 | 52% | 3530 | 88% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3328 | 329 | 10 | 100% | 2596 | 0% |
|  |  | E1 | 3394 | 96 | 36 | 63% | 3113 | 47% |
|  |  | T1 | 3413 | 28 | 296 | 52% | 3401 | 80% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3530 | 25 | 378 | 51% | 3521 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3517 | 26 | 350 | 51% | 3506 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3383 | 23 | 484 | 53% | 3353 | 73% |