# Engine: Crystal

Author: Joseph Ellis

Home: https://github.com/jhellis3/Stockfish

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3433<sub>(+92) | 3632<sub>(+48) | 3671<sub>(+25) |  |
| 5 | 2022-11-05 | 3341 | 3584 | 3646 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3433<sub>(+61) | 3598<sub>(+10) | 3638<sub>(+93) |  |
| 5 | 2022-11-05 | 3372 | 3588 | 3545 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3440<sub>(+50) | 3576<sub>(+43) | 3602<sub>(+47) |  |
| 5 | 2022-11-05 | 3390 | 3533 | 3555 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Crystal+<version>&body=###%20Engine%20name%0ACrystal%0A%0A###%20Version%0A9" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:37:52

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5", "9"]
  y-axis "Elo Rating" 3300 --> 3700
  line "E1: STC (8.0+0.08s)" [3341, 3433]
  line "E1: LTC (60.0+0.60s)" [3584, 3632]
  line "E1: VLTC (2m24s+1.12s)" [3646, 3671]
  line "P1: STC (8.0+0.08s)" [3372, 3433]
  line "P1: LTC (60.0+0.60s)" [3588, 3598]
  line "P1: VLTC (2m24s+1.12s)" [3545, 3638]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5", "9"]
  y-axis "Elo Rating" 3300 --> 3700
  line "T1: STC (8.0+0.08s)" [3390, 3440]
  line "T1: LTC (60.0+0.60s)" [3533, 3576]
  line "T1: VLTC (2m24s+1.12s)" [3555, 3602]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3671 | 27 | 314 | 50% | 3671 | 91% |
|  |  | P1 | 3638 | 38 | 150 | 51% | 3629 | 93% |
|  |  | T1 | 3602 | 31 | 236 | 53% | 3584 | 89% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3632 | 27 | 326 | 50% | 3632 | 83% |
|  |  | P1 | 3598 | 37 | 164 | 49% | 3600 | 85% |
|  |  | T1 | 3576 | 20 | 566 | 51% | 3572 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3433 | 23 | 466 | 48% | 3443 | 68% |
|  |  | P1 | 3433 | 31 | 262 | 50% | 3436 | 75% |
|  |  | T1 | 3440 | 18 | 770 | 51% | 3434 | 76% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3555 | 27 | 320 | 55% | 3510 | 85% |
|  |  | E1 | 3646 | 61 | 68 | 58% | 3568 | 72% |
|  |  | P1 | 3545 | 90 | 36 | 71% | 3348 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3588 | 94 | 32 | 67% | 3422 | 59% |
|  |  | T1 | 3533 | 12 | 1640 | 50% | 3534 | 86% |
|  |  | E1 | 3584 | 55 | 80 | 56% | 3524 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3372 | 71 | 60 | 66% | 3063 | 55% |
|  |  | T1 | 3390 | 12 | 1796 | 52% | 3378 | 73% |
|  |  | E1 | 3341 | 41 | 164 | 53% | 3306 | 59% |