# Engine: Viking

Author: Dario Pendic

Home: https://github.com/nbqofficial/viking

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1918<sub>(+569) | 2183<sub>(+352) | 2344<sub>(+224) |  |
| R4 | 2026-04-22 | 1349<sub>(+new) | 1831<sub>(+new) | 2120<sub>(+new) |  |
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

Generated: 2026-09-06 06:29:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1300 --> 2400
  line "" [1349, 1918]
  line "STC (8.0+0.08s)" [1349, 1918]
  line "LTC (60.0+0.60s)" [1831, 2183]
  line "" [2120, 2344]
  line "VLTC (2m24s+1.12s)" [2120, 2344]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R5 | VLTC <sub>(2m24s+1.12s)</sub> | 2344 | 26 | 470 | 48% | 2363 | 33% |
| R5 | LTC <sub>(60.0+0.60s)</sub> | 2183 | 28 | 446 | 51% | 2168 | 29% |
| R5 | STC <sub>(8.0+0.08s)</sub> | 1918 | 26 | 534 | 49% | 1931 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R4 | VLTC <sub>(2m24s+1.12s)</sub> | 2120 | 31 | 372 | 41% | 2230 | 28% |
| R4 | LTC <sub>(60.0+0.60s)</sub> | 1831 | 36 | 298 | 46% | 1899 | 23% |
| R4 | STC <sub>(8.0+0.08s)</sub> | 1349 | 38 | 288 | 47% | 1412 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |