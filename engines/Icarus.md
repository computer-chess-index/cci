# Engine: Icarus

Author: 

Home: https://github.com/Sp00ph/icarus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3328<sub>(-12) | 3498<sub>(+3) | 3525<sub>(-11) |  |
| 1.1 | 2026-06-05 | 3340<sub>(+24) | 3495<sub>(+36) | 3536<sub>(+31) |  |
| 1.0 | 2026-04-26 | 3316 | 3459 | 3505 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Icarus+<version>&body=###%20Engine%20name%0AIcarus%0A%0A###%20Version%0A1.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-05 04:35:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.1.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3316, 3340, 3328]
  line "STC (8.0+0.08s)" [3316, 3340, 3328]
  line "LTC (60.0+0.60s)" [3459, 3495, 3498]
  line "" [3505, 3536, 3525]
  line "VLTC (2m24s+1.12s)" [3505, 3536, 3525]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3525 | 26 | 344 | 50% | 3522 | 86% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3498 | 28 | 292 | 50% | 3498 | 84% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 3328 | 30 | 272 | 49% | 3332 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3536 | 28 | 300 | 50% | 3534 | 86% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3495 | 24 | 404 | 52% | 3480 | 81% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3340 | 28 | 324 | 51% | 3335 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3505 | 27 | 334 | 50% | 3501 | 83% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3459 | 26 | 338 | 51% | 3453 | 83% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3316 | 27 | 348 | 51% | 3309 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |