# Engine: Aconcagua

Author: Tarifa Gabriel

Home: https://github.com/gabtar/aconcagua

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2.0 | 2026-05-31 | 2279<sub>(+124) | 2622<sub>(+215) | 2726<sub>(+212) |  |
| 5.1.0 | 2026-03-01 | 2155 | 2407 | 2514 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2.0 | 2026-05-31 | 2229<sub>(+80) | 2634<sub>(+203) | 2700<sub>(+235) |  |
| 5.1.0 | 2026-03-01 | 2149 | 2431 | 2465 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2.0 | 2026-05-31 | 2340<sub>(+144) | 2608<sub>(+151) | 2718<sub>(+142) |  |
| 5.1.0 | 2026-03-01 | 2196<sub>(+31) | 2457<sub>(+3) | 2576<sub>(+118) |  |
| 5.0.0 | 2026-01-25 | 2165<sub>(+198) | 2454<sub>(+187) | 2458<sub>(+87) |  |
| 4.1.0 | 2025-12-14 | 1967<sub>(+51) | 2267<sub>(+79) | 2371<sub>(+57) |  |
| 4.0.0 | 2025-11-09 | 1916 | 2188 | 2314 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Aconcagua+<version>&body=###%20Engine%20name%0AAconcagua%0A%0A###%20Version%0A5.2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-27 05:35:19

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1.0", "5.2.0"]
  y-axis "Elo Rating" 2100 --> 2800
  line "E1: STC (8.0+0.08s)" [2155, 2279]
  line "E1: LTC (60.0+0.60s)" [2407, 2622]
  line "E1: VLTC (2m24s+1.12s)" [2514, 2726]
  line "P1: STC (8.0+0.08s)" [2149, 2229]
  line "P1: LTC (60.0+0.60s)" [2431, 2634]
  line "P1: VLTC (2m24s+1.12s)" [2465, 2700]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0", "5.2.0"]
  y-axis "Elo Rating" 1900 --> 2800
  line "T1: STC (8.0+0.08s)" [1916, 1967, 2165, 2196, 2340]
  line "T1: LTC (60.0+0.60s)" [2188, 2267, 2454, 2457, 2608]
  line "T1: VLTC (2m24s+1.12s)" [2314, 2371, 2458, 2576, 2718]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2718 | 29 | 366 | 53% | 2692 | 37% |
|  |  | P1 | 2700 | 31 | 342 | 54% | 2672 | 38% |
|  |  | E1 | 2726 | 28 | 414 | 51% | 2719 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2608 | 26 | 482 | 53% | 2583 | 33% |
|  |  | P1 | 2634 | 31 | 360 | 53% | 2596 | 31% |
|  |  | E1 | 2622 | 32 | 334 | 52% | 2604 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2340 | 29 | 414 | 48% | 2364 | 27% |
|  |  | P1 | 2229 | 34 | 296 | 47% | 2276 | 29% |
|  |  | E1 | 2279 | 30 | 384 | 50% | 2283 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2576 | 27 | 428 | 50% | 2580 | 38% |
|  |  | P1 | 2465 | 61 | 90 | 52% | 2437 | 27% |
|  |  | E1 | 2514 | 58 | 104 | 47% | 2534 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2457 | 29 | 376 | 51% | 2445 | 34% |
|  |  | P1 | 2431 | 58 | 100 | 39% | 2580 | 38% |
|  |  | E1 | 2407 | 50 | 136 | 45% | 2458 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2196 | 27 | 468 | 49% | 2198 | 27% |
|  |  | P1 | 2149 | 51 | 138 | 51% | 2126 | 23% |
|  |  | E1 | 2155 | 44 | 196 | 54% | 2087 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2458 | 42 | 196 | 51% | 2450 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2454 | 37 | 246 | 49% | 2460 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2165 | 34 | 290 | 50% | 2168 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2371 | 40 | 214 | 50% | 2376 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2267 | 40 | 222 | 51% | 2249 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1967 | 33 | 312 | 47% | 1993 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2314 | 46 | 172 | 41% | 2422 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2188 | 55 | 116 | 47% | 2217 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1916 | 62 | 92 | 47% | 1941 | 21% |