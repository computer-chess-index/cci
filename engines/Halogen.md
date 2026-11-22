# Engine: Halogen

Author: Kieren Pearson

Home: https://github.com/KierenP/Halogen

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3347<sub>(+42) | 3591<sub>(+62) | 3634<sub>(+93) |  |
| 15.0.0 | 2025-09-01 | 3305 | 3529 | 3541 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3341<sub>(+85) | 3530<sub>(+48) | 3561<sub>(+90) |  |
| 15.0.0 | 2025-09-01 | 3256 | 3482 | 3471 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3374<sub>(+76) | 3536<sub>(+53) | 3563<sub>(+25) |  |
| 15.0.0 | 2025-09-01 | 3298 | 3483 | 3538 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Halogen+<version>&body=###%20Engine%20name%0AHalogen%0A%0A###%20Version%0A16.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:38:47

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["15.0.0", "16.0.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3305, 3347]
  line "E1: LTC (60.0+0.60s)" [3529, 3591]
  line "E1: VLTC (2m24s+1.12s)" [3541, 3634]
  line "P1: STC (8.0+0.08s)" [3256, 3341]
  line "P1: LTC (60.0+0.60s)" [3482, 3530]
  line "P1: VLTC (2m24s+1.12s)" [3471, 3561]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["15.0.0", "16.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3298, 3374]
  line "T1: LTC (60.0+0.60s)" [3483, 3536]
  line "T1: VLTC (2m24s+1.12s)" [3538, 3563]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 16.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3563 | 21 | 538 | 50% | 3563 | 87% |
|  |  | P1 | 3561 | 32 | 260 | 61% | 3411 | 73% |
|  |  | E1 | 3634 | 27 | 360 | 59% | 3511 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3536 | 20 | 556 | 50% | 3537 | 86% |
|  |  | P1 | 3530 | 38 | 172 | 56% | 3434 | 77% |
|  |  | E1 | 3591 | 30 | 298 | 56% | 3482 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3374 | 20 | 642 | 50% | 3376 | 75% |
|  |  | P1 | 3341 | 31 | 252 | 49% | 3347 | 74% |
|  |  | E1 | 3347 | 25 | 420 | 47% | 3371 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 15.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3538 | 27 | 324 | 52% | 3521 | 83% |
|  |  | P1 | 3471 | 93 | 34 | 68% | 3279 | 59% |
|  |  | E1 | 3541 | 68 | 57 | 61% | 3441 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3482 | 86 | 44 | 73% | 3186 | 50% |
|  |  | E1 | 3529 | 57 | 88 | 63% | 3249 | 61% |
|  |  | T1 | 3483 | 30 | 276 | 52% | 3464 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3256 | 73 | 52 | 53% | 3209 | 56% |
|  |  | E1 | 3305 | 58 | 96 | 57% | 3136 | 46% |
|  |  | T1 | 3298 | 32 | 256 | 54% | 3259 | 64% |