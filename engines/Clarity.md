# Engine: Clarity

Author: Joseph Pasfield

Home: https://github.com/Vast342/Clarity

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2025-07-09 | 3249<sub>(-30) | 3453<sub>(+23) | 3455<sub>(-24) |  |
| 8.0.0 | 2025-07-09 | 3279 | 3430 | 3479 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Clarity+<version>&body=###%20Engine%20name%0AClarity%0A%0A###%20Version%0A8.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-24 04:37:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3500
  line "" [3249, 3279]
  line "STC (8.0+0.08s)" [3249, 3279]
  line "LTC (60.0+0.60s)" [3453, 3430]
  line "" [3455, 3479]
  line "VLTC (2m24s+1.12s)" [3455, 3479]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3455 | 85 | 32 | 48% | 3467 | 78% |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3479 | 25 | 388 | 51% | 3471 | 80% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3453 | 93 | 28 | 50% | 3456 | 71% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3430 | 25 | 372 | 51% | 3425 | 79% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3249 | 113 | 20 | 45% | 3285 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3279 | 26 | 380 | 50% | 3279 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |