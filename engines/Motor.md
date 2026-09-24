# Engine: Motor

Author: Martin Novák

Home: https://github.com/martinnovaak/motor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3347<sub>(+15) | 3507<sub>(+20) | 3542<sub>(+23) |  |
| 0.8.0 | 2024-10-28 | 3332<sub>(+115) | 3487<sub>(+67) | 3519<sub>(+71) |  |
| 0.60 | 2024-06-30 | 3217 | 3420 | 3448 |  |
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

Generated: 2026-09-24 04:40:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.60", "0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3217, 3332, 3347]
  line "STC (8.0+0.08s)" [3217, 3332, 3347]
  line "LTC (60.0+0.60s)" [3420, 3487, 3507]
  line "" [3448, 3519, 3542]
  line "VLTC (2m24s+1.12s)" [3448, 3519, 3542]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3542 | 21 | 522 | 49% | 3546 | 89% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3507 | 22 | 496 | 50% | 3506 | 83% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3347 | 20 | 644 | 50% | 3344 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3519 | 13 | 1468 | 51% | 3515 | 86% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3487 | 13 | 1484 | 50% | 3486 | 83% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3332 | 13 | 1460 | 49% | 3337 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.60 | VLTC <sub>(2m24s+1.12s)</sub> | 3448 | 28 | 304 | 50% | 3449 | 80% |
| 0.60 | LTC <sub>(60.0+0.60s)</sub> | 3420 | 28 | 316 | 52% | 3403 | 74% |
| 0.60 | STC <sub>(8.0+0.08s)</sub> | 3217 | 29 | 352 | 56% | 3083 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |