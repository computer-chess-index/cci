# Engine: Viking

Author: Dario Pendic

Home: https://github.com/nbqofficial/viking

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| R5 | 2026-04-27 | 1928<sub>(+577) | 2191<sub>(+356) | 2353<sub>(+231) |  |
| R4 | 2026-04-22 | 1351<sub>(+new) | 1835<sub>(+new) | 2122<sub>(+new) |  |
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

Generated: 2026-09-26 04:43:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["R4", "R5"]
  y-axis "Elo Rating" 1300 --> 2400
  line "" [1351, 1928]
  line "STC (8.0+0.08s)" [1351, 1928]
  line "LTC (60.0+0.60s)" [1835, 2191]
  line "" [2122, 2353]
  line "VLTC (2m24s+1.12s)" [2122, 2353]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R5 | VLTC <sub>(2m24s+1.12s)</sub> | 2353 | 26 | 478 | 49% | 2365 | 33% |
| R5 | LTC <sub>(60.0+0.60s)</sub> | 2191 | 28 | 450 | 51% | 2172 | 29% |
| R5 | STC <sub>(8.0+0.08s)</sub> | 1928 | 26 | 542 | 50% | 1933 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R4 | VLTC <sub>(2m24s+1.12s)</sub> | 2122 | 31 | 372 | 41% | 2234 | 28% |
| R4 | LTC <sub>(60.0+0.60s)</sub> | 1835 | 36 | 298 | 46% | 1904 | 23% |
| R4 | STC <sub>(8.0+0.08s)</sub> | 1351 | 38 | 288 | 47% | 1415 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |