# Engine: Crystal

Author: Joseph Ellis

Home: https://github.com/jhellis3/Stockfish

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3374 | 3572 | 3625 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3573 | 3741 | 3781 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-13 04:37:50

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

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3625 | 36 | 174 | 51% | 3618 | 91% |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3781 | 48 | 98 | 52% | 3768 | 90% |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3602 | 31 | 236 | 53% | 3584 | 89% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 3741 | 42 | 132 | 50% | 3744 | 86% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 3576 | 20 | 566 | 51% | 3572 | 87% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 3572 | 32 | 224 | 49% | 3582 | 85% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 3440 | 18 | 770 | 51% | 3434 | 76% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | STC <sub>(8.0+0.08s)</sub> | 3374 | 30 | 280 | 47% | 3394 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | STC <sub>(8.0+0.08s)</sub> | 3573 | 38 | 168 | 49% | 3580 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3555 | 27 | 320 | 55% | 3510 | 85% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3533 | 12 | 1640 | 50% | 3534 | 86% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 3390 | 12 | 1796 | 52% | 3378 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |