# Engine: Motor

Author: Martin Novák

Home: https://github.com/martinnovaak/motor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3336<sub>(+12) | 3499<sub>(+20) | 3534<sub>(+23) |  |
| 0.8.0 | 2024-10-28 | 3324<sub>(+115) | 3479<sub>(+68) | 3511<sub>(+71) |  |
| 0.60 | 2024-06-30 | 3209 | 3411 | 3440 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Motor+<version>&body=###%20Engine%20name%0AMotor%0A%0A###%20Version%0A0.9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-30 13:10:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.60", "0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3209, 3324, 3336]
  line "STC (8.0+0.08s)" [3209, 3324, 3336]
  line "LTC (60.0+0.60s)" [3411, 3479, 3499]
  line "" [3440, 3511, 3534]
  line "VLTC (2m24s+1.12s)" [3440, 3511, 3534]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3534 | 21 | 510 | 49% | 3538 | 89% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3499 | 22 | 476 | 50% | 3497 | 83% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3336 | 20 | 616 | 50% | 3337 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3511 | 13 | 1468 | 51% | 3507 | 86% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 13 | 1484 | 50% | 3478 | 83% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3324 | 13 | 1460 | 49% | 3329 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.60 | VLTC <sub>(2m24s+1.12s)</sub> | 3440 | 28 | 304 | 50% | 3441 | 80% |
| 0.60 | LTC <sub>(60.0+0.60s)</sub> | 3411 | 28 | 316 | 52% | 3395 | 74% |
| 0.60 | STC <sub>(8.0+0.08s)</sub> | 3209 | 29 | 352 | 56% | 3075 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |