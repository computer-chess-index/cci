# Engine: Coco

Author: 

Home: https://github.com/NotKaede-11/Coco-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-09-27 | 2182<sub>(-51) | 2669<sub>(-12) | 2812<sub>(+13) |  |
| 1.5.0 | 2026-09-14 | 2233 | 2681 | 2799 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-09-27 | 2236<sub>(+15) | 2643<sub>(+6) | 2774<sub>(-3) |  |
| 1.5.0 | 2026-09-14 | 2221 | 2637 | 2777 |  |
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

Generated: 2026-11-13 05:37:33

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.0", "1.5.1"]
  y-axis "Elo Rating" 2100 --> 2900
  line "E1: STC (8.0+0.08s)" [2233, 2182]
  line "E1: LTC (60.0+0.60s)" [2681, 2669]
  line "E1: VLTC (2m24s+1.12s)" [2799, 2812]
  line "P1: STC (8.0+0.08s)" [2221, 2236]
  line "P1: LTC (60.0+0.60s)" [2637, 2643]
  line "P1: VLTC (2m24s+1.12s)" [2777, 2774]
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
| 1.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2812 | 31 | 342 | 49% | 2826 | 33% |
|  |  | T1 | 2811 | 41 | 190 | 49% | 2816 | 31% |
|  |  | P1 | 2774 | 34 | 290 | 47% | 2777 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2669 | 35 | 268 | 53% | 2645 | 31% |
|  |  | T1 | 2697 | 41 | 194 | 50% | 2699 | 34% |
|  |  | P1 | 2643 | 39 | 216 | 50% | 2647 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2384 | 36 | 280 | 45% | 2435 | 24% |
|  |  | P1 | 2236 | 38 | 240 | 54% | 2201 | 20% |
|  |  | E1 | 2182 | 32 | 348 | 47% | 2211 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2832 | 37 | 238 | 50% | 2824 | 30% |
|  |  | P1 | 2777 | 40 | 192 | 47% | 2807 | 39% |
|  |  | E1 | 2799 | 32 | 334 | 46% | 2838 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2728 | 35 | 260 | 50% | 2726 | 33% |
|  |  | P1 | 2637 | 37 | 244 | 47% | 2677 | 27% |
|  |  | E1 | 2681 | 34 | 300 | 46% | 2707 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2365 | 35 | 280 | 50% | 2361 | 25% |
|  |  | P1 | 2221 | 41 | 228 | 45% | 2276 | 18% |
|  |  | E1 | 2233 | 34 | 316 | 43% | 2331 | 22% |