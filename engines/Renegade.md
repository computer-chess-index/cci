# Engine: Renegade

Author: Krisztián Peőcz

Home: https://github.com/pkrisz99/Renegade

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3248 | 3501 | 3565 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3501 | 3671 | 3710 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-07-14 | 3359<sub>(+4) | 3524<sub>(-1) | 3549<sub>(-2) |  |
| 1.3.0 | 2026-06-17 | 3355 | 3525 | 3551 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Renegade+<version>&body=###%20Engine%20name%0ARenegade%0A%0A###%20Version%0A1.3.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-13 04:42:32

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.3.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "T1: STC (8.0+0.08s)" [3355, 3359]
  line "T1: LTC (60.0+0.60s)" [3525, 3524]
  line "T1: VLTC (2m24s+1.12s)" [3551, 3549]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3710 | 44 | 130 | 57% | 3615 | 75% |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3565 | 39 | 172 | 55% | 3418 | 72% |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3549 | 33 | 206 | 50% | 3553 | 88% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3671 | 41 | 156 | 58% | 3569 | 72% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3501 | 36 | 208 | 58% | 3380 | 73% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3524 | 31 | 244 | 49% | 3530 | 86% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 3248 | 30 | 292 | 45% | 3286 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 3359 | 26 | 380 | 52% | 3347 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 3501 | 36 | 188 | 49% | 3505 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 33 | 226 | 54% | 3511 | 81% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 31 | 260 | 53% | 3474 | 77% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 3355 | 35 | 218 | 53% | 3297 | 66% |
| --- | --- | --- | --- | --- | --- | --- | --- |