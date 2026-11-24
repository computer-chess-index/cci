# Engine: Coco

Author: 

Home: https://github.com/NotKaede-11/Coco-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-09-27 | 2192<sub>(-25) | 2677<sub>(-23) | 2827<sub>(+8) |  |
| 1.5.0 | 2026-09-14 | 2217 | 2700 | 2819 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-09-27 | 2271<sub>(+22) | 2666<sub>(+1) | 2786<sub>(-17) |  |
| 1.5.0 | 2026-09-14 | 2249 | 2665 | 2803 |  |
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

Generated: 2026-11-24 05:37:37

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.0", "1.5.1"]
  y-axis "Elo Rating" 2100 --> 2900
  line "E1: STC (8.0+0.08s)" [2217, 2192]
  line "E1: LTC (60.0+0.60s)" [2700, 2677]
  line "E1: VLTC (2m24s+1.12s)" [2819, 2827]
  line "P1: STC (8.0+0.08s)" [2249, 2271]
  line "P1: LTC (60.0+0.60s)" [2665, 2666]
  line "P1: VLTC (2m24s+1.12s)" [2803, 2786]
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
|  |  | P1 | 2786 | 32 | 330 | 45% | 2808 | 32% |
|  |  | E1 | 2827 | 29 | 394 | 48% | 2853 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2666 | 36 | 260 | 49% | 2684 | 28% |
|  |  | E1 | 2677 | 32 | 312 | 52% | 2664 | 32% |
|  |  | T1 | 2697 | 41 | 194 | 50% | 2699 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2271 | 35 | 288 | 54% | 2232 | 20% |
|  |  | E1 | 2192 | 31 | 392 | 49% | 2205 | 20% |
|  |  | T1 | 2384 | 36 | 280 | 45% | 2435 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2819 | 30 | 366 | 46% | 2855 | 30% |
|  |  | T1 | 2832 | 37 | 238 | 50% | 2824 | 30% |
|  |  | P1 | 2803 | 38 | 212 | 47% | 2836 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2700 | 32 | 324 | 46% | 2727 | 30% |
|  |  | T1 | 2728 | 35 | 260 | 50% | 2726 | 33% |
|  |  | P1 | 2665 | 36 | 268 | 47% | 2704 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2217 | 33 | 348 | 42% | 2325 | 22% |
|  |  | T1 | 2365 | 35 | 280 | 50% | 2361 | 25% |
|  |  | P1 | 2249 | 38 | 262 | 46% | 2290 | 18% |