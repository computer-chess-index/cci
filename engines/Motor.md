# Engine: Motor

Author: Martin Novák

Home: https://github.com/martinnovaak/motor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2025-06-02 | 3340<sub>(+14) | 3501<sub>(+21) | 3536<sub>(+23) |  |
| 0.8.0 | 2024-10-28 | 3326<sub>(+116) | 3480<sub>(+67) | 3513<sub>(+72) |  |
| 0.60 | 2024-06-30 | 3210 | 3413 | 3441 |  |
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

Generated: 2026-09-06 06:26:16

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.60", "0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "" [3210, 3326, 3340]
  line "STC (8.0+0.08s)" [3210, 3326, 3340]
  line "LTC (60.0+0.60s)" [3413, 3480, 3501]
  line "" [3441, 3513, 3536]
  line "VLTC (2m24s+1.12s)" [3441, 3513, 3536]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3536 | 21 | 510 | 49% | 3540 | 89% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3501 | 22 | 484 | 50% | 3499 | 83% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3340 | 20 | 632 | 50% | 3339 | 72% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 13 | 1468 | 51% | 3509 | 86% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3480 | 13 | 1484 | 50% | 3479 | 83% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3326 | 13 | 1460 | 49% | 3330 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.60 | VLTC <sub>(2m24s+1.12s)</sub> | 3441 | 28 | 304 | 50% | 3443 | 80% |
| 0.60 | LTC <sub>(60.0+0.60s)</sub> | 3413 | 28 | 316 | 52% | 3397 | 74% |
| 0.60 | STC <sub>(8.0+0.08s)</sub> | 3210 | 29 | 352 | 56% | 3077 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |