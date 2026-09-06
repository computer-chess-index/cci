# Engine: Crystal

Author: Joseph Ellis

Home: https://github.com/jhellis3/Stockfish

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9 | 2025-05-09 | 3430<sub>(+50) | 3568<sub>(+44) | 3592<sub>(+47) |  |
| 5 | 2022-11-05 | 3380 | 3524 | 3545 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Crystal+<version>&body=###%20Engine%20name%0ACrystal%0A%0A###%20Version%0A9" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:23:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5", "9"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3380, 3430]
  line "STC (8.0+0.08s)" [3380, 3430]
  line "LTC (60.0+0.60s)" [3524, 3568]
  line "" [3545, 3592]
  line "VLTC (2m24s+1.12s)" [3545, 3592]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | 3592 | 32 | 220 | 53% | 3575 | 89% |
| 9 | LTC <sub>(60.0+0.60s)</sub> | 3568 | 21 | 538 | 51% | 3563 | 87% |
| 9 | STC <sub>(8.0+0.08s)</sub> | 3430 | 18 | 734 | 51% | 3425 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 27 | 320 | 55% | 3501 | 85% |
| 5 | LTC <sub>(60.0+0.60s)</sub> | 3524 | 12 | 1640 | 50% | 3525 | 86% |
| 5 | STC <sub>(8.0+0.08s)</sub> | 3380 | 12 | 1796 | 52% | 3370 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |