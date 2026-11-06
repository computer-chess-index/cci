# Engine: Coco

Author: 

Home: https://github.com/NotKaede-11/Coco-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-09-27 | 2233<sub>(-49) | 2755<sub>(-19) | 2897<sub>(-1) |  |
| 1.5.0 | 2026-09-14 | 2282 | 2774 | 2898 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-09-27 | 2399<sub>(+9) | 2832<sub>(-2) | 2978<sub>(-6) |  |
| 1.5.0 | 2026-09-14 | 2390 | 2834 | 2984 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-09-27 | 2384<sub>(+19) | 2697<sub>(-31) | 2811<sub>(-21) |  |
| 1.5.0 | 2026-09-14 | 2365 | 2728 | 2832 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Coco+<version>&body=###%20Engine%20name%0ACoco%0A%0A###%20Version%0A1.5.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-06 05:37:22

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.0", "1.5.1"]
  y-axis "Elo Rating" 2200 --> 3000
  line "E1: STC (8.0+0.08s)" [2282, 2233]
  line "E1: LTC (60.0+0.60s)" [2774, 2755]
  line "E1: VLTC (2m24s+1.12s)" [2898, 2897]
  line "P1: STC (8.0+0.08s)" [2390, 2399]
  line "P1: LTC (60.0+0.60s)" [2834, 2832]
  line "P1: VLTC (2m24s+1.12s)" [2984, 2978]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.0", "1.5.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "T1: STC (8.0+0.08s)" [2365, 2384]
  line "T1: LTC (60.0+0.60s)" [2728, 2697]
  line "T1: VLTC (2m24s+1.12s)" [2832, 2811]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2811 | 41 | 190 | 49% | 2816 | 31% |
|  |  | P1 | 2978 | 37 | 244 | 45% | 2982 | 31% |
|  |  | E1 | 2897 | 33 | 298 | 48% | 2916 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2697 | 41 | 194 | 50% | 2699 | 34% |
|  |  | P1 | 2832 | 40 | 212 | 49% | 2844 | 29% |
|  |  | E1 | 2755 | 37 | 240 | 53% | 2732 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2384 | 36 | 280 | 45% | 2435 | 24% |
|  |  | P1 | 2399 | 39 | 236 | 54% | 2363 | 20% |
|  |  | E1 | 2233 | 34 | 304 | 47% | 2264 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2984 | 40 | 188 | 48% | 3002 | 40% |
|  |  | E1 | 2898 | 32 | 318 | 47% | 2923 | 30% |
|  |  | T1 | 2832 | 37 | 238 | 50% | 2824 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2834 | 38 | 236 | 47% | 2870 | 28% |
|  |  | E1 | 2774 | 34 | 284 | 47% | 2803 | 30% |
|  |  | T1 | 2728 | 35 | 260 | 50% | 2726 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2390 | 41 | 224 | 44% | 2445 | 18% |
|  |  | E1 | 2282 | 35 | 308 | 43% | 2383 | 22% |
|  |  | T1 | 2365 | 35 | 280 | 50% | 2361 | 25% |