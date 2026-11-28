# Engine: Motor

Author: Martin Novák

Home: https://github.com/martinnovaak/motor

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3290<sub>(-35) | 3549<sub>(+19) | 3611<sub>(+86) |  |
| 0.8.0 | 2024-10-28 | 3325 | 3530 | 3525 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3347<sub>(+31) | 3540<sub>(+85) | 3556<sub>(+46) |  |
| 0.8.0 | 2024-10-28 | 3316 | 3455 | 3510 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3349<sub>(+14) | 3510<sub>(+20) | 3545<sub>(+23) |  |
| 0.8.0 | 2024-10-28 | 3335<sub>(+115) | 3490<sub>(+68) | 3522<sub>(+71) |  |
| 0.60 | 2024-06-30 | 3220 | 3422 | 3451 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Motor+<version>&body=###%20Engine%20name%0AMotor%0A%0A###%20Version%0A0.9.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:40:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3325, 3290]
  line "E1: LTC (60.0+0.60s)" [3530, 3549]
  line "E1: VLTC (2m24s+1.12s)" [3525, 3611]
  line "P1: STC (8.0+0.08s)" [3316, 3347]
  line "P1: LTC (60.0+0.60s)" [3455, 3540]
  line "P1: VLTC (2m24s+1.12s)" [3510, 3556]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.60", "0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3220, 3335, 3349]
  line "T1: LTC (60.0+0.60s)" [3422, 3490, 3510]
  line "T1: VLTC (2m24s+1.12s)" [3451, 3522, 3545]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3545 | 21 | 530 | 49% | 3549 | 89% |
|  |  | P1 | 3556 | 36 | 184 | 51% | 3546 | 78% |
|  |  | E1 | 3611 | 30 | 258 | 49% | 3615 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3510 | 22 | 500 | 50% | 3509 | 83% |
|  |  | P1 | 3540 | 35 | 196 | 51% | 3534 | 81% |
|  |  | E1 | 3549 | 27 | 328 | 46% | 3575 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3349 | 20 | 644 | 50% | 3347 | 72% |
|  |  | P1 | 3347 | 29 | 296 | 49% | 3356 | 78% |
|  |  | E1 | 3290 | 24 | 460 | 48% | 3308 | 67% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3510 | 94 | 36 | 71% | 3193 | 58% |
|  |  | E1 | 3525 | 58 | 98 | 68% | 3210 | 55% |
|  |  | T1 | 3522 | 13 | 1468 | 51% | 3518 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3530 | 46 | 136 | 61% | 3313 | 65% |
|  |  | T1 | 3490 | 13 | 1484 | 50% | 3488 | 83% |
|  |  | P1 | 3455 | 92 | 40 | 71% | 3164 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3325 | 43 | 144 | 47% | 3339 | 62% |
|  |  | T1 | 3335 | 13 | 1460 | 49% | 3340 | 71% |
|  |  | P1 | 3316 | 62 | 68 | 60% | 3227 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.60 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3451 | 28 | 304 | 50% | 3452 | 80% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3422 | 28 | 316 | 52% | 3406 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3220 | 29 | 352 | 56% | 3086 | 59% |