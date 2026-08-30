# Engine: Ursus

Author: Zander Chown

Home: https://github.com/zchown/Ursus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3121<sub>(+54) | 3366<sub>(+95) | 3401<sub>(+53) |  |
| 1.0.1 | 2026-07-27 | 3067<sub>(+1) | 3271<sub>(-23) | 3348<sub>(+4) |  |
| 1.0.0 | 2026-06-30 | 3066 | 3294 | 3344 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ursus+<version>&body=###%20Engine%20name%0AUrsus%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-30 15:54:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "" [3066, 3067, 3121]
  line "STC (8.0+0.08s)" [3066, 3067, 3121]
  line "LTC (60.0+0.60s)" [3294, 3271, 3366]
  line "" [3344, 3348, 3401]
  line "VLTC (2m24s+1.12s)" [3344, 3348, 3401]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3401 | 39 | 160 | 51% | 3391 | 74% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3366 | 41 | 148 | 50% | 3367 | 70% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 3121 | 47 | 128 | 49% | 3127 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3348 | 37 | 184 | 48% | 3359 | 68% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3271 | 37 | 184 | 49% | 3275 | 66% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 3067 | 46 | 132 | 52% | 3055 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3344 | 40 | 160 | 55% | 3298 | 71% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3294 | 40 | 166 | 55% | 3243 | 62% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 3066 | 49 | 120 | 55% | 3013 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |