# Engine: Icarus

Author: 

Home: https://github.com/Sp00ph/icarus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.1 | 2026-07-17 | 3325<sub>(-15) | 3499<sub>(+4) | 3524<sub>(-12) |  |
| 1.1 | 2026-06-05 | 3340<sub>(+24) | 3495<sub>(+35) | 3536<sub>(+30) |  |
| 1.0 | 2026-04-26 | 3316 | 3460 | 3506 |  |
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

Generated: 2026-09-06 06:25:12

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.1.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3316, 3340, 3325]
  line "STC (8.0+0.08s)" [3316, 3340, 3325]
  line "LTC (60.0+0.60s)" [3460, 3495, 3499]
  line "" [3506, 3536, 3524]
  line "VLTC (2m24s+1.12s)" [3506, 3536, 3524]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3524 | 26 | 352 | 50% | 3522 | 86% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3499 | 28 | 296 | 50% | 3499 | 84% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 3325 | 30 | 276 | 49% | 3333 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3536 | 28 | 300 | 50% | 3534 | 86% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3495 | 24 | 404 | 52% | 3482 | 81% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3340 | 28 | 324 | 51% | 3336 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3506 | 27 | 334 | 50% | 3502 | 83% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3460 | 26 | 338 | 51% | 3455 | 83% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3316 | 27 | 348 | 51% | 3309 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |