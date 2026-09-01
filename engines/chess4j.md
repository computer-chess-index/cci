# Engine: chess4j

Author: James Swafford

Home: https://github.com/jswaff/chess4j

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1867<sub>(+12) | 2187<sub>(-22) | 2298<sub>(+2) |  |
| 6.2 | 2025-09-16 | 1855 | 2209 | 2296 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+chess4j+<version>&body=###%20Engine%20name%0Achess4j%0A%0A###%20Version%0A6.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-01 04:33:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.2", "6.3"]
  y-axis "Elo Rating" 1800 --> 2300
  line "" [1855, 1867]
  line "STC (8.0+0.08s)" [1855, 1867]
  line "LTC (60.0+0.60s)" [2209, 2187]
  line "" [2296, 2298]
  line "VLTC (2m24s+1.12s)" [2296, 2298]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2298 | 31 | 356 | 50% | 2299 | 30% |
| 6.3 | LTC <sub>(60.0+0.60s)</sub> | 2187 | 33 | 326 | 51% | 2174 | 23% |
| 6.3 | STC <sub>(8.0+0.08s)</sub> | 1867 | 30 | 402 | 49% | 1881 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2296 | 27 | 468 | 49% | 2306 | 30% |
| 6.2 | LTC <sub>(60.0+0.60s)</sub> | 2209 | 27 | 452 | 50% | 2202 | 28% |
| 6.2 | STC <sub>(8.0+0.08s)</sub> | 1855 | 25 | 584 | 51% | 1843 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |