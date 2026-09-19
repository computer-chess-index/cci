# Engine: Princhess

Author: Lana Samson

Home: https://github.com/princesslana/princhess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2873<sub>(+33) | 3101<sub>(+20) | 3170<sub>(+51) |  |
| 0.21.0 | 2025-10-13 | 2840 | 3081 | 3119 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Princhess+<version>&body=###%20Engine%20name%0APrinchess%0A%0A###%20Version%0A0.22.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-19 04:41:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.21.0", "0.22.0"]
  y-axis "Elo Rating" 2800 --> 3200
  line "" [2840, 2873]
  line "STC (8.0+0.08s)" [2840, 2873]
  line "LTC (60.0+0.60s)" [3081, 3101]
  line "" [3119, 3170]
  line "VLTC (2m24s+1.12s)" [3119, 3170]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.22.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3170 | 34 | 244 | 50% | 3166 | 55% |
| 0.22.0 | LTC <sub>(60.0+0.60s)</sub> | 3101 | 31 | 296 | 50% | 3101 | 55% |
| 0.22.0 | STC <sub>(8.0+0.08s)</sub> | 2873 | 33 | 284 | 49% | 2880 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.21.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3119 | 24 | 504 | 50% | 3119 | 51% |
| 0.21.0 | LTC <sub>(60.0+0.60s)</sub> | 3081 | 23 | 542 | 50% | 3077 | 50% |
| 0.21.0 | STC <sub>(8.0+0.08s)</sub> | 2840 | 21 | 728 | 51% | 2830 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |