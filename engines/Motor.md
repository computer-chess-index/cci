# Engine: Motor

Author: Martin Novák

Home: https://github.com/martinnovaak/motor

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3291<sub>(-69) | 3568<sub>(+27) | 3626<sub>(+108) |  |
| 0.8.0 | 2024-10-28 | 3360 | 3541 | 3518 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3320<sub>(+83) | 3513<sub>(+116) | 3530<sub>(+79) |  |
| 0.8.0 | 2024-10-28 | 3237 | 3397 | 3451 |  |
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

Generated: 2026-11-16 05:40:22

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3360, 3291]
  line "E1: LTC (60.0+0.60s)" [3541, 3568]
  line "E1: VLTC (2m24s+1.12s)" [3518, 3626]
  line "P1: STC (8.0+0.08s)" [3237, 3320]
  line "P1: LTC (60.0+0.60s)" [3397, 3513]
  line "P1: VLTC (2m24s+1.12s)" [3451, 3530]
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
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3530 | 37 | 180 | 51% | 3521 | 77% |
|  |  | E1 | 3626 | 32 | 230 | 50% | 3629 | 84% |
|  |  | T1 | 3545 | 21 | 530 | 49% | 3549 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3513 | 35 | 192 | 51% | 3510 | 81% |
|  |  | E1 | 3568 | 28 | 300 | 47% | 3588 | 78% |
|  |  | T1 | 3510 | 22 | 500 | 50% | 3509 | 83% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3291 | 25 | 424 | 47% | 3316 | 67% |
|  |  | T1 | 3349 | 20 | 644 | 50% | 3347 | 72% |
|  |  | P1 | 3320 | 30 | 272 | 49% | 3328 | 77% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3522 | 13 | 1468 | 51% | 3518 | 86% |
|  |  | P1 | 3451 | 112 | 28 | 75% | 3065 | 50% |
|  |  | E1 | 3518 | 76 | 68 | 75% | 3079 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3490 | 13 | 1484 | 50% | 3488 | 83% |
|  |  | P1 | 3397 | 106 | 32 | 75% | 3054 | 44% |
|  |  | E1 | 3541 | 66 | 80 | 70% | 3163 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3335 | 13 | 1460 | 49% | 3340 | 71% |
|  |  | P1 | 3237 | 88 | 36 | 65% | 3097 | 64% |
|  |  | E1 | 3360 | 68 | 64 | 47% | 3359 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.60 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3451 | 28 | 304 | 50% | 3452 | 80% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3422 | 28 | 316 | 52% | 3406 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3220 | 29 | 352 | 56% | 3086 | 59% |