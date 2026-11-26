# Engine: Motor

Author: Martin Novák

Home: https://github.com/martinnovaak/motor

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3289<sub>(-33) | 3552<sub>(+18) | 3614<sub>(+92) |  |
| 0.8.0 | 2024-10-28 | 3322 | 3534 | 3522 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3345<sub>(+31) | 3536<sub>(+83) | 3556<sub>(+46) |  |
| 0.8.0 | 2024-10-28 | 3314 | 3453 | 3510 |  |
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

Generated: 2026-11-26 05:40:49

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3322, 3289]
  line "E1: LTC (60.0+0.60s)" [3534, 3552]
  line "E1: VLTC (2m24s+1.12s)" [3522, 3614]
  line "P1: STC (8.0+0.08s)" [3314, 3345]
  line "P1: LTC (60.0+0.60s)" [3453, 3536]
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
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3614 | 30 | 254 | 49% | 3618 | 85% |
|  |  | T1 | 3545 | 21 | 530 | 49% | 3549 | 89% |
|  |  | P1 | 3556 | 36 | 184 | 51% | 3546 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3552 | 27 | 328 | 46% | 3579 | 78% |
|  |  | T1 | 3510 | 22 | 500 | 50% | 3509 | 83% |
|  |  | P1 | 3536 | 35 | 192 | 51% | 3534 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3289 | 24 | 448 | 47% | 3309 | 67% |
|  |  | T1 | 3349 | 20 | 644 | 50% | 3347 | 72% |
|  |  | P1 | 3345 | 29 | 292 | 49% | 3355 | 77% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3522 | 13 | 1468 | 51% | 3518 | 86% |
|  |  | P1 | 3510 | 94 | 36 | 71% | 3191 | 58% |
|  |  | E1 | 3522 | 61 | 90 | 69% | 3185 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3490 | 13 | 1484 | 50% | 3488 | 83% |
|  |  | P1 | 3453 | 92 | 40 | 71% | 3164 | 48% |
|  |  | E1 | 3534 | 47 | 132 | 61% | 3310 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3335 | 13 | 1460 | 49% | 3340 | 71% |
|  |  | P1 | 3314 | 62 | 68 | 60% | 3225 | 72% |
|  |  | E1 | 3322 | 48 | 120 | 46% | 3341 | 58% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.60 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3451 | 28 | 304 | 50% | 3452 | 80% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3422 | 28 | 316 | 52% | 3406 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3220 | 29 | 352 | 56% | 3086 | 59% |