# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2414<sub>(-28) | 2804<sub>(+39) | 2889<sub>(+9) |  |
| 1.28.0 | 2026-09-21 | 2442<sub>(+101) | 2765<sub>(+118) | 2880<sub>(+214) |  |
| 1.27.0timehotfix | 2026-05-28 | 2341 | 2647 | 2666 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2418<sub>(+41) | 2785<sub>(+30) | 2846<sub>(-13) |  |
| 1.28.0 | 2026-09-21 | 2377<sub>(+64) | 2755<sub>(+270) | 2859<sub>(+244) |  |
| 1.27.0timehotfix | 2026-05-28 | 2313 | 2485 | 2615 |  |
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

Generated: 2026-11-26 05:36:20

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "E1: STC (8.0+0.08s)" [2341, 2442, 2414]
  line "E1: LTC (60.0+0.60s)" [2647, 2765, 2804]
  line "E1: VLTC (2m24s+1.12s)" [2666, 2880, 2889]
  line "P1: STC (8.0+0.08s)" [2313, 2377, 2418]
  line "P1: LTC (60.0+0.60s)" [2485, 2755, 2785]
  line "P1: VLTC (2m24s+1.12s)" [2615, 2859, 2846]
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
| 1.28.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2846 | 36 | 230 | 49% | 2857 | 41% |
|  |  | E1 | 2889 | 31 | 316 | 50% | 2892 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2785 | 35 | 272 | 47% | 2820 | 31% |
|  |  | E1 | 2804 | 31 | 342 | 48% | 2819 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2418 | 41 | 204 | 48% | 2442 | 25% |
|  |  | E1 | 2414 | 33 | 312 | 51% | 2410 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  |  | P1 | 2859 | 41 | 172 | 48% | 2877 | 43% |
|  |  | E1 | 2880 | 30 | 354 | 53% | 2850 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  |  | P1 | 2755 | 36 | 246 | 54% | 2691 | 36% |
|  |  | E1 | 2765 | 34 | 268 | 49% | 2774 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
|  |  | P1 | 2377 | 42 | 212 | 45% | 2437 | 23% |
|  |  | E1 | 2442 | 40 | 228 | 50% | 2449 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2666 | 36 | 248 | 47% | 2699 | 33% |
|  |  | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  |  | P1 | 2615 | 33 | 296 | 44% | 2681 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2647 | 37 | 252 | 53% | 2581 | 31% |
|  |  | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  |  | P1 | 2485 | 42 | 206 | 53% | 2461 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |
|  |  | P1 | 2313 | 44 | 192 | 45% | 2376 | 24% |
|  |  | E1 | 2341 | 39 | 236 | 49% | 2348 | 20% |