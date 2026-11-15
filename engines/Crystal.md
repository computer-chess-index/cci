# Engine: Crystal

Author: Joseph Ellis

Home: https://github.com/jhellis3/Stockfish

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3433<sub>(+90) | 3633<sub>(+49) | 3675<sub>(+25) |  |
| 5 | 2022-11-05 | 3343 | 3584 | 3650 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3407<sub>(+207) | 3572<sub>(+69) | 3613<sub>(+204) |  |
| 5 | 2022-11-05 | 3200 | 3503 | 3409 |  |
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

Generated: 2026-11-15 05:37:41

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5", "9"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3343, 3433]
  line "E1: LTC (60.0+0.60s)" [3584, 3633]
  line "E1: VLTC (2m24s+1.12s)" [3650, 3675]
  line "P1: STC (8.0+0.08s)" [3200, 3407]
  line "P1: LTC (60.0+0.60s)" [3503, 3572]
  line "P1: VLTC (2m24s+1.12s)" [3409, 3613]
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
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3602 | 31 | 236 | 53% | 3584 | 89% |
|  |  | E1 | 3675 | 29 | 262 | 50% | 3676 | 91% |
|  |  | P1 | 3613 | 39 | 142 | 51% | 3603 | 93% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3633 | 28 | 286 | 49% | 3638 | 85% |
|  |  | P1 | 3572 | 39 | 148 | 49% | 3576 | 85% |
|  |  | T1 | 3576 | 20 | 566 | 51% | 3572 | 87% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3407 | 32 | 242 | 50% | 3411 | 76% |
|  |  | T1 | 3440 | 18 | 770 | 51% | 3434 | 76% |
|  |  | E1 | 3433 | 25 | 402 | 48% | 3444 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3650 | 102 | 28 | 70% | 3468 | 54% |
|  |  | P1 | 3409 | 112 | 24 | 75% | 3174 | 50% |
|  |  | T1 | 3555 | 27 | 320 | 55% | 3510 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3533 | 12 | 1640 | 50% | 3534 | 86% |
|  |  | E1 | 3584 | 103 | 28 | 70% | 3401 | 54% |
|  |  | P1 | 3503 | 138 | 16 | 78% | 3259 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3390 | 12 | 1796 | 52% | 3378 | 73% |
|  |  | E1 | 3343 | 73 | 52 | 60% | 3241 | 62% |
|  |  | P1 | 3200 | 148 | 20 | 80% | 2493 | 30% |