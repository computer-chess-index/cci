# Engine: Motor

Author: Martin Novák

Home: https://github.com/martinnovaak/motor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3341<sub>(+13) | 3502<sub>(+19) | 3538<sub>(+23) |  |
| 0.8.0 | 2024-10-28 | 3328<sub>(+115) | 3483<sub>(+67) | 3515<sub>(+71) |  |
| 0.60 | 2024-06-30 | 3213 | 3416 | 3444 |  |
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

Generated: 2026-09-13 04:39:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.60", "0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3213, 3328, 3341]
  line "STC (8.0+0.08s)" [3213, 3328, 3341]
  line "LTC (60.0+0.60s)" [3416, 3483, 3502]
  line "" [3444, 3515, 3538]
  line "VLTC (2m24s+1.12s)" [3444, 3515, 3538]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3538 | 21 | 514 | 49% | 3542 | 89% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3502 | 22 | 488 | 50% | 3502 | 83% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3341 | 20 | 640 | 50% | 3341 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 13 | 1468 | 51% | 3511 | 86% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3483 | 13 | 1484 | 50% | 3482 | 83% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3328 | 13 | 1460 | 49% | 3333 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.60 | VLTC <sub>(2m24s+1.12s)</sub> | 3444 | 28 | 304 | 50% | 3445 | 80% |
| 0.60 | LTC <sub>(60.0+0.60s)</sub> | 3416 | 28 | 316 | 52% | 3399 | 74% |
| 0.60 | STC <sub>(8.0+0.08s)</sub> | 3213 | 29 | 352 | 56% | 3079 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |