# Engine: Hobbes

Author: Dan Kelsey

Home: https://github.com/kelseyde/hobbes-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-11-13 | 3460<sub>(+27) | 3681<sub>(+36) | 3746<sub>(+55) |  |
| 3.0 | 2026-07-22 | 3433<sub>(+38) | 3645<sub>(+93) | 3691<sub>(-11) |  |
| 2.1 | 2026-05-26 | 3395 | 3552 | 3702 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-11-13 | 3391<sub>(-3) | 3576<sub>(+1) | 3587<sub>(+4) |  |
| 3.0 | 2026-07-22 | 3394<sub>(+101) | 3575<sub>(+220) | 3583<sub>(+189) |  |
| 2.1 | 2026-05-26 | 3293 | 3355 | 3394 |  |
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

Generated: 2026-11-17 05:39:01

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "4.0"]
  y-axis "Elo Rating" 3200 --> 3800
  line "E1: STC (8.0+0.08s)" [3395, 3433, 3460]
  line "E1: LTC (60.0+0.60s)" [3552, 3645, 3681]
  line "E1: VLTC (2m24s+1.12s)" [3702, 3691, 3746]
  line "P1: STC (8.0+0.08s)" [3293, 3394, 3391]
  line "P1: LTC (60.0+0.60s)" [3355, 3575, 3576]
  line "P1: VLTC (2m24s+1.12s)" [3394, 3583, 3587]
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
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3587 | 207 | 4 | 50% | 3587 | 100% |
|  |  | E1 | 3746 | 136 | 12 | 54% | 3718 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3576 | 207 | 4 | 50% | 3576 | 100% |
|  |  | E1 | 3681 | 79 | 36 | 53% | 3663 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3391 | 208 | 4 | 50% | 3391 | 100% |
|  |  | E1 | 3460 | 82 | 36 | 44% | 3498 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3691 | 28 | 286 | 50% | 3690 | 96% |
|  |  | T1 | 3587 | 29 | 278 | 51% | 3576 | 88% |
|  |  | P1 | 3583 | 41 | 128 | 49% | 3591 | 96% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3563 | 25 | 350 | 51% | 3557 | 90% |
|  |  | P1 | 3575 | 39 | 142 | 51% | 3568 | 96% |
|  |  | E1 | 3645 | 32 | 230 | 50% | 3648 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3426 | 26 | 350 | 49% | 3432 | 76% |
|  |  | P1 | 3394 | 35 | 194 | 50% | 3393 | 82% |
|  |  | E1 | 3433 | 29 | 294 | 48% | 3447 | 78% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3555 | 31 | 232 | 51% | 3549 | 90% |
|  |  | P1 | 3394 | 144 | 28 | 88% | 2693 | 25% |
|  |  | E1 | 3702 | 169 | 32 | 92% | 2708 | 9% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3544 | 30 | 260 | 52% | 3530 | 88% |
|  |  | P1 | 3355 | 301 | 20 | 100% | 2450 | 0% |
|  |  | E1 | 3552 | 119 | 32 | 80% | 2940 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3413 | 28 | 296 | 52% | 3401 | 80% |
|  |  | P1 | 3293 | 323 | 10 | 100% | 2583 | 0% |
|  |  | E1 | 3395 | 96 | 36 | 63% | 3120 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3530 | 25 | 378 | 51% | 3521 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3517 | 26 | 350 | 51% | 3506 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3383 | 23 | 484 | 53% | 3353 | 73% |