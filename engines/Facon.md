# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-10-04 | 2261<sub>(+248) | 2715<sub>(+421) | 2803<sub>(+420) |  |
| 1.5 | 2026-05-26 | 2013 | 2294 | 2383 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-10-04 | 2345<sub>(+170) | 2772<sub>(+297) | 2927<sub>(+436) |  |
| 1.5 | 2026-05-26 | 2175 | 2475 | 2491 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-06-11 | 2381<sub>(+216) | 2624<sub>(+220) | 2757<sub>(+246) |  |
| 1.5 | 2026-05-26 | 2165<sub>(+156) | 2404<sub>(+106) | 2511<sub>(+154) |  |
| 1.4 | 2026-04-25 | 2009<sub>(+489) | 2298<sub>(+436) | 2357<sub>(+381) |  |
| 1.3 | 2026-04-11 | 1520 | 1862 | 1976 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Facon+<version>&body=###%20Engine%20name%0AFacon%0A%0A###%20Version%0A1.6" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-13 04:38:35

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5", "1.7"]
  y-axis "Elo Rating" 2000 --> 3000
  line "E1: STC (8.0+0.08s)" [2013, 2261]
  line "E1: LTC (60.0+0.60s)" [2294, 2715]
  line "E1: VLTC (2m24s+1.12s)" [2383, 2803]
  line "P1: STC (8.0+0.08s)" [2175, 2345]
  line "P1: LTC (60.0+0.60s)" [2475, 2772]
  line "P1: VLTC (2m24s+1.12s)" [2491, 2927]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4", "1.5", "1.6"]
  y-axis "Elo Rating" 1500 --> 2800
  line "T1: STC (8.0+0.08s)" [1520, 2009, 2165, 2381]
  line "T1: LTC (60.0+0.60s)" [1862, 2298, 2404, 2624]
  line "T1: VLTC (2m24s+1.12s)" [1976, 2357, 2511, 2757]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2803 | 48 | 138 | 51% | 2789 | 34% |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2927 | 72 | 60 | 49% | 2915 | 38% |
| 1.7 | LTC <sub>(60.0+0.60s)</sub> | 2715 | 53 | 114 | 53% | 2681 | 32% |
| 1.7 | LTC <sub>(60.0+0.60s)</sub> | 2772 | 69 | 64 | 60% | 2682 | 42% |
| 1.7 | STC <sub>(8.0+0.08s)</sub> | 2261 | 51 | 130 | 55% | 2211 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.7 | STC <sub>(8.0+0.08s)</sub> | 2345 | 84 | 44 | 55% | 2309 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2757 | 32 | 314 | 46% | 2785 | 37% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2624 | 34 | 280 | 51% | 2610 | 35% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2381 | 36 | 256 | 53% | 2354 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2511 | 32 | 330 | 50% | 2510 | 26% |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2491 | 49 | 144 | 48% | 2518 | 24% |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2383 | 41 | 208 | 51% | 2379 | 25% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2404 | 35 | 262 | 51% | 2396 | 34% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2475 | 48 | 150 | 43% | 2564 | 31% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 2294 | 46 | 172 | 44% | 2384 | 23% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2165 | 31 | 374 | 52% | 2145 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2175 | 50 | 144 | 48% | 2196 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2013 | 35 | 286 | 49% | 2005 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2357 | 29 | 420 | 51% | 2345 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2298 | 31 | 380 | 53% | 2264 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2009 | 30 | 406 | 51% | 1991 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1976 | 34 | 324 | 48% | 1993 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1862 | 32 | 364 | 50% | 1859 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1520 | 32 | 378 | 50% | 1515 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |