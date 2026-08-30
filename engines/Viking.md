# Engine: Viking

Author: Dario Pendic

Home: https://github.com/nbqofficial/viking

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1917<sub>(+568) | 2178<sub>(+347) | 2342<sub>(+224) |  |
| R4 | 2026-04-22 | 1349<sub>(+new) | 1831<sub>(+new) | 2118<sub>(+new) |  |
| R3 | 2026-04-22 |  |  |  |  |
| R2 | 2025-09-25 |  |  |  |  |
| R1 | 2025-09-24 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Viking+<version>&body=###%20Engine%20name%0AViking%0A%0A###%20Version%0AR5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-30 06:33:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1300 --> 2400
  line "" [1349, 1917]
  line "STC (8.0+0.08s)" [1349, 1917]
  line "LTC (60.0+0.60s)" [1831, 2178]
  line "" [2118, 2342]
  line "VLTC (2m24s+1.12s)" [2118, 2342]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R5 | VLTC <sub>(2m24s+1.12s)</sub> | 2342 | 27 | 462 | 48% | 2361 | 33% |
| R5 | LTC <sub>(60.0+0.60s)</sub> | 2178 | 28 | 438 | 51% | 2167 | 29% |
| R5 | STC <sub>(8.0+0.08s)</sub> | 1917 | 27 | 522 | 49% | 1929 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R4 | VLTC <sub>(2m24s+1.12s)</sub> | 2118 | 31 | 372 | 41% | 2229 | 28% |
| R4 | LTC <sub>(60.0+0.60s)</sub> | 1831 | 36 | 298 | 46% | 1899 | 23% |
| R4 | STC <sub>(8.0+0.08s)</sub> | 1349 | 38 | 288 | 47% | 1412 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |