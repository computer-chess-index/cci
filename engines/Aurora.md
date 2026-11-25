# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2412<sub>(-30) | 2811<sub>(+35) | 2894<sub>(+10) |  |
| 1.28.0 | 2026-09-21 | 2442<sub>(+102) | 2776<sub>(+126) | 2884<sub>(+214) |  |
| 1.27.0timehotfix | 2026-05-28 | 2340 | 2650 | 2670 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2421<sub>(+44) | 2786<sub>(+25) | 2846<sub>(-12) |  |
| 1.28.0 | 2026-09-21 | 2377<sub>(+66) | 2761<sub>(+276) | 2858<sub>(+243) |  |
| 1.27.0timehotfix | 2026-05-28 | 2311 | 2485 | 2615 |  |
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

Generated: 2026-11-25 05:36:19

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "E1: STC (8.0+0.08s)" [2340, 2442, 2412]
  line "E1: LTC (60.0+0.60s)" [2650, 2776, 2811]
  line "E1: VLTC (2m24s+1.12s)" [2670, 2884, 2894]
  line "P1: STC (8.0+0.08s)" [2311, 2377, 2421]
  line "P1: LTC (60.0+0.60s)" [2485, 2761, 2786]
  line "P1: VLTC (2m24s+1.12s)" [2615, 2858, 2846]
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
| 1.28.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2846 | 37 | 226 | 49% | 2857 | 41% |
|  |  | E1 | 2894 | 31 | 312 | 50% | 2898 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2786 | 35 | 268 | 47% | 2820 | 31% |
|  |  | E1 | 2811 | 31 | 338 | 48% | 2824 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2421 | 41 | 200 | 48% | 2442 | 26% |
|  |  | E1 | 2412 | 34 | 308 | 51% | 2408 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2884 | 30 | 354 | 53% | 2855 | 34% |
|  |  | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  |  | P1 | 2858 | 41 | 172 | 48% | 2877 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  |  | P1 | 2761 | 37 | 240 | 55% | 2689 | 37% |
|  |  | E1 | 2776 | 35 | 260 | 50% | 2778 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
|  |  | P1 | 2377 | 42 | 212 | 45% | 2437 | 23% |
|  |  | E1 | 2442 | 40 | 228 | 50% | 2448 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  |  | P1 | 2615 | 33 | 296 | 44% | 2681 | 36% |
|  |  | E1 | 2670 | 36 | 248 | 47% | 2701 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  |  | P1 | 2485 | 42 | 206 | 53% | 2461 | 24% |
|  |  | E1 | 2650 | 37 | 252 | 53% | 2584 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |
|  |  | P1 | 2311 | 44 | 192 | 45% | 2376 | 24% |
|  |  | E1 | 2340 | 39 | 236 | 49% | 2346 | 20% |