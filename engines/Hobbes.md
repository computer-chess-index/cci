# Engine: Hobbes

Author: Dan Kelsey

Home: https://github.com/kelseyde/hobbes-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-11-13 | 3443<sub>(+14) | 3664<sub>(+24) | 3691<sub>(+5) |  |
| 3.0 | 2026-07-22 | 3429<sub>(+35) | 3640<sub>(+91) | 3686<sub>(-13) |  |
| 2.1 | 2026-05-26 | 3394 | 3549 | 3699 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-11-13 | 3398<sub>(-3) | 3571<sub>(-5) | 3587<sub>(+3) |  |
| 3.0 | 2026-07-22 | 3401<sub>(+103) | 3576<sub>(+202) | 3584<sub>(+182) |  |
| 2.1 | 2026-05-26 | 3298 | 3374 | 3402 |  |
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

Generated: 2026-11-20 05:38:52

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "4.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3394, 3429, 3443]
  line "E1: LTC (60.0+0.60s)" [3549, 3640, 3664]
  line "E1: VLTC (2m24s+1.12s)" [3699, 3686, 3691]
  line "P1: STC (8.0+0.08s)" [3298, 3401, 3398]
  line "P1: LTC (60.0+0.60s)" [3374, 3576, 3571]
  line "P1: VLTC (2m24s+1.12s)" [3402, 3584, 3587]
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
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3587 | 83 | 30 | 50% | 3587 | 100% |
|  |  | E1 | 3691 | 34 | 194 | 48% | 3704 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3571 | 66 | 52 | 51% | 3564 | 87% |
|  |  | E1 | 3664 | 45 | 112 | 50% | 3663 | 84% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3398 | 64 | 60 | 52% | 3384 | 70% |
|  |  | E1 | 3443 | 40 | 156 | 48% | 3459 | 74% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3686 | 28 | 286 | 50% | 3684 | 96% |
|  |  | T1 | 3587 | 29 | 278 | 51% | 3576 | 88% |
|  |  | P1 | 3584 | 41 | 128 | 49% | 3592 | 96% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3640 | 32 | 230 | 50% | 3641 | 87% |
|  |  | T1 | 3563 | 25 | 350 | 51% | 3557 | 90% |
|  |  | P1 | 3576 | 39 | 142 | 51% | 3569 | 96% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3429 | 29 | 294 | 48% | 3444 | 78% |
|  |  | T1 | 3426 | 26 | 350 | 49% | 3432 | 76% |
|  |  | P1 | 3401 | 35 | 194 | 50% | 3399 | 82% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3555 | 31 | 232 | 51% | 3549 | 90% |
|  |  | P1 | 3402 | 145 | 28 | 88% | 2699 | 25% |
|  |  | E1 | 3699 | 169 | 32 | 92% | 2704 | 9% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3544 | 30 | 260 | 52% | 3530 | 88% |
|  |  | P1 | 3374 | 303 | 20 | 100% | 2460 | 0% |
|  |  | E1 | 3549 | 119 | 32 | 80% | 2938 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3413 | 28 | 296 | 52% | 3401 | 80% |
|  |  | P1 | 3298 | 325 | 10 | 100% | 2581 | 0% |
|  |  | E1 | 3394 | 96 | 36 | 63% | 3116 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3530 | 25 | 378 | 51% | 3521 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3517 | 26 | 350 | 51% | 3506 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3383 | 23 | 484 | 53% | 3353 | 73% |