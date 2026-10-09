# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-10-04 |  |  |  |  |
| 1.6 | 2026-06-11 | 2381<sub>(+216) | 2624<sub>(+220) | 2757<sub>(+246) |  |
| 1.5 | 2026-05-26 | 2165<sub>(+156) | 2404<sub>(+106) | 2511<sub>(+154) |  |
| 1.4 | 2026-04-25 | 2009<sub>(+489) | 2298<sub>(+436) | 2357<sub>(+381) |  |
| 1.3 | 2026-04-11 | 1520<sub>(+new) | 1862<sub>(+new) | 1976<sub>(+new) |  |
| 1.2 | 2026-03-24 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Facon+<version>&body=###%20Engine%20name%0AFacon%0A%0A###%20Version%0A1.7" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-09 04:38:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "" [1520, 2009, 2165, 2381]
  line "STC (8.0+0.08s)" [1520, 2009, 2165, 2381]
  line "LTC (60.0+0.60s)" [1862, 2298, 2404, 2624]
  line "" [1976, 2357, 2511, 2757]
  line "VLTC (2m24s+1.12s)" [1976, 2357, 2511, 2757]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2757 | 32 | 314 | 46% | 2785 | 37% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2624 | 34 | 280 | 51% | 2610 | 35% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2381 | 36 | 256 | 53% | 2354 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2511 | 32 | 330 | 50% | 2510 | 26% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2404 | 35 | 262 | 51% | 2396 | 34% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2165 | 31 | 374 | 52% | 2145 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2357 | 29 | 420 | 51% | 2345 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2298 | 31 | 380 | 53% | 2264 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2009 | 30 | 406 | 51% | 1991 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1976 | 34 | 324 | 48% | 1993 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1862 | 32 | 364 | 50% | 1859 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1520 | 32 | 378 | 50% | 1515 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |