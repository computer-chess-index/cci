# Engine: Coco

Author: 

Home: https://github.com/NotKaede-11/Coco-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-09-27 | 2190<sub>(-29) | 2692<sub>(-15) | 2816<sub>(-14) |  |
| 1.5.0 | 2026-09-14 | 2219 | 2707 | 2830 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-09-27 | 2300<sub>(-11) | 2751<sub>(+4) | 2924<sub>(+34) |  |
| 1.5.0 | 2026-09-14 | 2311 | 2747 | 2890 |  |
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

Generated: 2026-10-20 04:37:41

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.0", "1.5.1"]
  y-axis "Elo Rating" 2100 --> 3000
  line "E1: STC (8.0+0.08s)" [2219, 2190]
  line "E1: LTC (60.0+0.60s)" [2707, 2692]
  line "E1: VLTC (2m24s+1.12s)" [2830, 2816]
  line "P1: STC (8.0+0.08s)" [2311, 2300]
  line "P1: LTC (60.0+0.60s)" [2747, 2751]
  line "P1: VLTC (2m24s+1.12s)" [2890, 2924]
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
|  |  | P1 | 2924 | 49 | 128 | 47% | 2948 | 35% |
|  |  | E1 | 2816 | 44 | 168 | 46% | 2855 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2697 | 41 | 194 | 50% | 2699 | 34% |
|  |  | P1 | 2751 | 47 | 148 | 50% | 2751 | 30% |
|  |  | E1 | 2692 | 44 | 168 | 54% | 2660 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2384 | 36 | 280 | 45% | 2435 | 24% |
|  |  | P1 | 2300 | 48 | 148 | 54% | 2264 | 22% |
|  |  | E1 | 2190 | 44 | 188 | 46% | 2233 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2832 | 37 | 238 | 50% | 2824 | 30% |
|  |  | P1 | 2890 | 40 | 188 | 48% | 2909 | 40% |
|  |  | E1 | 2830 | 32 | 318 | 47% | 2854 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2728 | 35 | 260 | 50% | 2726 | 33% |
|  |  | P1 | 2747 | 38 | 236 | 47% | 2784 | 28% |
|  |  | E1 | 2707 | 34 | 284 | 47% | 2735 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2365 | 35 | 280 | 50% | 2361 | 25% |
|  |  | P1 | 2311 | 41 | 224 | 44% | 2367 | 18% |
|  |  | E1 | 2219 | 35 | 308 | 43% | 2319 | 22% |