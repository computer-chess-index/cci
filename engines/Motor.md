# Engine: Motor

Author: Martin Novák

Home: https://github.com/martinnovaak/motor

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3293<sub>(-36) | 3563<sub>(+19) | 3623<sub>(+102) |  |
| 0.8.0 | 2024-10-28 | 3329 | 3544 | 3521 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3326<sub>(+31) | 3519<sub>(+85) | 3537<sub>(+46) |  |
| 0.8.0 | 2024-10-28 | 3295 | 3434 | 3491 |  |
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

Generated: 2026-11-22 05:40:28

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3329, 3293]
  line "E1: LTC (60.0+0.60s)" [3544, 3563]
  line "E1: VLTC (2m24s+1.12s)" [3521, 3623]
  line "P1: STC (8.0+0.08s)" [3295, 3326]
  line "P1: LTC (60.0+0.60s)" [3434, 3519]
  line "P1: VLTC (2m24s+1.12s)" [3491, 3537]
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
|  |  | P1 | 3537 | 36 | 184 | 51% | 3529 | 78% |
|  |  | E1 | 3623 | 30 | 250 | 50% | 3626 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3519 | 35 | 192 | 51% | 3517 | 81% |
|  |  | E1 | 3563 | 28 | 308 | 47% | 3586 | 78% |
|  |  | T1 | 3510 | 22 | 500 | 50% | 3509 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3326 | 29 | 280 | 48% | 3337 | 77% |
|  |  | E1 | 3293 | 24 | 432 | 47% | 3314 | 66% |
|  |  | T1 | 3349 | 20 | 644 | 50% | 3347 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3521 | 68 | 78 | 72% | 3136 | 49% |
|  |  | T1 | 3522 | 13 | 1468 | 51% | 3518 | 86% |
|  |  | P1 | 3491 | 94 | 36 | 71% | 3173 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3544 | 61 | 88 | 68% | 3197 | 57% |
|  |  | T1 | 3490 | 13 | 1484 | 50% | 3488 | 83% |
|  |  | P1 | 3434 | 98 | 36 | 74% | 3113 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3335 | 13 | 1460 | 49% | 3340 | 71% |
|  |  | P1 | 3295 | 66 | 60 | 61% | 3194 | 72% |
|  |  | E1 | 3329 | 60 | 80 | 44% | 3353 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.60 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3451 | 28 | 304 | 50% | 3452 | 80% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3422 | 28 | 316 | 52% | 3406 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3220 | 29 | 352 | 56% | 3086 | 59% |