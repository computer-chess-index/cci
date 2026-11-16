# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2406<sub>(-47) | 2811<sub>(+37) | 2894<sub>(+10) |  |
| 1.28.0 | 2026-09-21 | 2453<sub>(+112) | 2774<sub>(+125) | 2884<sub>(+215) |  |
| 1.27.0timehotfix | 2026-05-28 | 2341 | 2649 | 2669 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2392<sub>(+47) | 2743<sub>(+23) | 2809<sub>(-7) |  |
| 1.28.0 | 2026-09-21 | 2345<sub>(+61) | 2720<sub>(+268) | 2816<sub>(+240) |  |
| 1.27.0timehotfix | 2026-05-28 | 2284 | 2452 | 2576 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.0 | 2026-09-21 | 2438<sub>(+70) | 2789<sub>(+188) | 2865<sub>(+238) |  |
| 1.27.0timehotfix | 2026-05-28 | 2368 | 2601 | 2627 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Aurora+<version>&body=###%20Engine%20name%0AAurora%0A%0A###%20Version%0A1.28.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-16 05:36:15

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2341, 2453, 2406]
  line "E1: LTC (60.0+0.60s)" [2649, 2774, 2811]
  line "E1: VLTC (2m24s+1.12s)" [2669, 2884, 2894]
  line "P1: STC (8.0+0.08s)" [2284, 2345, 2392]
  line "P1: LTC (60.0+0.60s)" [2452, 2720, 2743]
  line "P1: VLTC (2m24s+1.12s)" [2576, 2816, 2809]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0"]
  y-axis "Elo Rating" 2300 --> 2900
  line "T1: STC (8.0+0.08s)" [2368, 2438]
  line "T1: LTC (60.0+0.60s)" [2601, 2789]
  line "T1: VLTC (2m24s+1.12s)" [2627, 2865]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2894 | 34 | 260 | 50% | 2898 | 43% |
|  |  | P1 | 2809 | 39 | 202 | 50% | 2816 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2811 | 32 | 308 | 48% | 2826 | 35% |
|  |  | P1 | 2743 | 38 | 240 | 46% | 2784 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2392 | 45 | 172 | 48% | 2412 | 24% |
|  |  | E1 | 2406 | 37 | 254 | 50% | 2406 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  |  | P1 | 2816 | 42 | 166 | 48% | 2832 | 42% |
|  |  | E1 | 2884 | 31 | 338 | 53% | 2854 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  |  | P1 | 2720 | 41 | 192 | 55% | 2639 | 35% |
|  |  | E1 | 2774 | 36 | 244 | 50% | 2778 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
|  |  | P1 | 2345 | 43 | 196 | 45% | 2403 | 21% |
|  |  | E1 | 2453 | 42 | 204 | 50% | 2449 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2576 | 33 | 296 | 44% | 2642 | 36% |
|  |  | E1 | 2669 | 36 | 248 | 47% | 2700 | 33% |
|  |  | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2649 | 37 | 252 | 53% | 2583 | 31% |
|  |  | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  |  | P1 | 2452 | 42 | 206 | 53% | 2429 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2341 | 39 | 236 | 49% | 2348 | 20% |
|  |  | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |
|  |  | P1 | 2284 | 43 | 192 | 45% | 2346 | 24% |