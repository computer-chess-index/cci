# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2379<sub>(+214) | 2622<sub>(+223) | 2755<sub>(+245) |  |
| 1.5 | 2026-05-26 | 2165<sub>(+158) | 2399<sub>(+104) | 2510<sub>(+156) |  |
| 1.4 | 2026-04-25 | 2007<sub>(+488) | 2295<sub>(+436) | 2354<sub>(+379) |  |
| 1.3 | 2026-04-11 | 1519<sub>(+new) | 1859<sub>(+new) | 1975<sub>(+new) |  |
| 1.2 | 2026-03-24 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Facon+<version>&body=###%20Engine%20name%0AFacon%0A%0A###%20Version%0A1.6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-01 04:38:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "" [1519, 2007, 2165, 2379]
  line "STC (8.0+0.08s)" [1519, 2007, 2165, 2379]
  line "LTC (60.0+0.60s)" [1859, 2295, 2399, 2622]
  line "" [1975, 2354, 2510, 2755]
  line "VLTC (2m24s+1.12s)" [1975, 2354, 2510, 2755]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2755 | 32 | 314 | 46% | 2782 | 37% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2622 | 34 | 280 | 51% | 2607 | 35% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2379 | 36 | 256 | 53% | 2352 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2510 | 32 | 330 | 50% | 2508 | 26% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2399 | 35 | 258 | 51% | 2395 | 34% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2165 | 31 | 370 | 52% | 2144 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2354 | 29 | 420 | 51% | 2342 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2295 | 31 | 380 | 53% | 2263 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2007 | 30 | 406 | 51% | 1989 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1975 | 34 | 324 | 48% | 1991 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1859 | 32 | 364 | 50% | 1856 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1519 | 32 | 378 | 50% | 1512 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |