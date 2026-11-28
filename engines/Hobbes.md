# Engine: Hobbes

Author: Dan Kelsey

Home: https://github.com/kelseyde/hobbes-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-11-13 | 3429<sub>(+7) | 3659<sub>(+29) | 3676<sub>(0) |  |
| 3.0 | 2026-07-22 | 3422<sub>(+35) | 3630<sub>(+86) | 3676<sub>(-24) |  |
| 2.1 | 2026-05-26 | 3387 | 3544 | 3700 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-11-13 | 3443<sub>(+23) | 3591<sub>(-4) | 3605<sub>(+2) |  |
| 3.0 | 2026-07-22 | 3420<sub>(+88) | 3595<sub>(+197) | 3603<sub>(+158) |  |
| 2.1 | 2026-05-26 | 3332 | 3398 | 3445 |  |
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

Generated: 2026-11-28 05:39:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "4.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3387, 3422, 3429]
  line "E1: LTC (60.0+0.60s)" [3544, 3630, 3659]
  line "E1: VLTC (2m24s+1.12s)" [3700, 3676, 3676]
  line "P1: STC (8.0+0.08s)" [3332, 3420, 3443]
  line "P1: LTC (60.0+0.60s)" [3398, 3595, 3591]
  line "P1: VLTC (2m24s+1.12s)" [3445, 3603, 3605]
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
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3676 | 28 | 284 | 48% | 3691 | 88% |
|  |  | P1 | 3605 | 83 | 30 | 50% | 3605 | 100% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3659 | 39 | 148 | 51% | 3653 | 86% |
|  |  | P1 | 3591 | 54 | 76 | 51% | 3587 | 88% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3443 | 43 | 132 | 52% | 3425 | 77% |
|  |  | E1 | 3429 | 33 | 224 | 48% | 3447 | 74% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3587 | 29 | 278 | 51% | 3576 | 88% |
|  |  | P1 | 3603 | 41 | 132 | 49% | 3611 | 96% |
|  |  | E1 | 3676 | 27 | 298 | 50% | 3673 | 96% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3563 | 25 | 350 | 51% | 3557 | 90% |
|  |  | P1 | 3595 | 39 | 142 | 51% | 3588 | 96% |
|  |  | E1 | 3630 | 31 | 234 | 50% | 3632 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3426 | 26 | 350 | 49% | 3432 | 76% |
|  |  | P1 | 3420 | 35 | 196 | 50% | 3418 | 83% |
|  |  | E1 | 3422 | 28 | 310 | 48% | 3436 | 78% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3445 | 146 | 28 | 88% | 2727 | 25% |
|  |  | E1 | 3700 | 169 | 32 | 92% | 2704 | 9% |
|  |  | T1 | 3555 | 31 | 232 | 51% | 3549 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3398 | 305 | 20 | 100% | 2473 | 0% |
|  |  | E1 | 3544 | 120 | 32 | 80% | 2935 | 34% |
|  |  | T1 | 3544 | 30 | 260 | 52% | 3530 | 88% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3332 | 330 | 10 | 100% | 2601 | 0% |
|  |  | E1 | 3387 | 96 | 36 | 63% | 3108 | 47% |
|  |  | T1 | 3413 | 28 | 296 | 52% | 3401 | 80% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3530 | 25 | 378 | 51% | 3521 | 90% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3517 | 26 | 350 | 51% | 3506 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3383 | 23 | 484 | 53% | 3353 | 73% |