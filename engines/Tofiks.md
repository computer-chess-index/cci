# Engine: Tofiks

Author: Arturs Priede

Home: https://github.com/likeawizard/tofiks

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-04-23 | 2195<sub>(+146) | 2439<sub>(+114) | 2483<sub>(+80) |  |
| 1.4.1 | 2026-04-11 | 2049<sub>(-41) | 2325<sub>(+29) | 2403<sub>(+15) |  |
| 1.4.0 | 2026-04-09 | 2090 | 2296 | 2388 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tofiks+<version>&body=###%20Engine%20name%0ATofiks%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-26 04:43:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2000 --> 2500
  line "" [2090, 2049, 2195]
  line "STC (8.0+0.08s)" [2090, 2049, 2195]
  line "LTC (60.0+0.60s)" [2296, 2325, 2439]
  line "" [2388, 2403, 2483]
  line "VLTC (2m24s+1.12s)" [2388, 2403, 2483]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2483 | 25 | 510 | 49% | 2488 | 35% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2439 | 25 | 512 | 51% | 2430 | 34% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2195 | 25 | 568 | 48% | 2209 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2403 | 33 | 292 | 50% | 2399 | 33% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2325 | 34 | 296 | 50% | 2323 | 29% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2049 | 34 | 302 | 51% | 2037 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2388 | 40 | 216 | 47% | 2417 | 29% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2296 | 39 | 226 | 53% | 2272 | 29% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2090 | 43 | 184 | 50% | 2084 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |