# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2377<sub>(+210) | 2619<sub>(+223) | 2753<sub>(+246) |  |
| 1.5 | 2026-05-26 | 2167<sub>(+162) | 2396<sub>(+104) | 2507<sub>(+155) |  |
| 1.4 | 2026-04-25 | 2005<sub>(+490) | 2292<sub>(+434) | 2352<sub>(+380) |  |
| 1.3 | 2026-04-11 | 1515<sub>(+new) | 1858<sub>(+new) | 1972<sub>(+new) |  |
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

Generated: 2026-09-15 04:38:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "" [1515, 2005, 2167, 2377]
  line "STC (8.0+0.08s)" [1515, 2005, 2167, 2377]
  line "LTC (60.0+0.60s)" [1858, 2292, 2396, 2619]
  line "" [1972, 2352, 2507, 2753]
  line "VLTC (2m24s+1.12s)" [1972, 2352, 2507, 2753]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2753 | 32 | 314 | 46% | 2780 | 37% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2619 | 34 | 280 | 51% | 2604 | 35% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2377 | 36 | 256 | 53% | 2350 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2507 | 32 | 330 | 50% | 2506 | 26% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2396 | 36 | 254 | 51% | 2392 | 34% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2167 | 31 | 366 | 53% | 2140 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2352 | 29 | 420 | 51% | 2340 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2292 | 31 | 380 | 53% | 2260 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2005 | 30 | 406 | 51% | 1986 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1972 | 34 | 324 | 48% | 1989 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1858 | 32 | 364 | 50% | 1854 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1515 | 31 | 378 | 50% | 1509 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |