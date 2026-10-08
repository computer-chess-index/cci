# Engine: Motor

Author: Martin Novák

Home: https://github.com/martinnovaak/motor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3348<sub>(+15) | 3509<sub>(+21) | 3544<sub>(+23) |  |
| 0.8.0 | 2024-10-28 | 3333<sub>(+115) | 3488<sub>(+67) | 3521<sub>(+72) |  |
| 0.60 | 2024-06-30 | 3218 | 3421 | 3449 |  |
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

Generated: 2026-10-08 04:40:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.60", "0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3218, 3333, 3348]
  line "STC (8.0+0.08s)" [3218, 3333, 3348]
  line "LTC (60.0+0.60s)" [3421, 3488, 3509]
  line "" [3449, 3521, 3544]
  line "VLTC (2m24s+1.12s)" [3449, 3521, 3544]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3544 | 21 | 530 | 49% | 3548 | 89% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3509 | 22 | 500 | 50% | 3507 | 83% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3348 | 20 | 644 | 50% | 3345 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3521 | 13 | 1468 | 51% | 3517 | 86% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3488 | 13 | 1484 | 50% | 3487 | 83% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3333 | 13 | 1460 | 49% | 3339 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.60 | VLTC <sub>(2m24s+1.12s)</sub> | 3449 | 28 | 304 | 50% | 3451 | 80% |
| 0.60 | LTC <sub>(60.0+0.60s)</sub> | 3421 | 28 | 316 | 52% | 3405 | 74% |
| 0.60 | STC <sub>(8.0+0.08s)</sub> | 3218 | 29 | 352 | 56% | 3085 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |