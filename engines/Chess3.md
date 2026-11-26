# Engine: Chess3

Author: Paul Sonkoly

Home: https://github.com/paulsonkoly/chess-3

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2527<sub>(+101) | 2815<sub>(+25) | 2901<sub>(+42) |  |
| 3.0 | 2026-01-17 | 2426 | 2790 | 2859 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2512<sub>(+156) | 2805<sub>(+70) | 2850<sub>(+43) |  |
| 3.0 | 2026-01-17 | 2356 | 2735 | 2807 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2511<sub>(+35) | 2807<sub>(+45) | 2894<sub>(+86) |  |
| 3.0 | 2026-01-17 | 2476 | 2762 | 2808 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chess3+<version>&body=###%20Engine%20name%0AChess3%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-26 05:37:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "E1: STC (8.0+0.08s)" [2426, 2527]
  line "E1: LTC (60.0+0.60s)" [2790, 2815]
  line "E1: VLTC (2m24s+1.12s)" [2859, 2901]
  line "P1: STC (8.0+0.08s)" [2356, 2512]
  line "P1: LTC (60.0+0.60s)" [2735, 2805]
  line "P1: VLTC (2m24s+1.12s)" [2807, 2850]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2400 --> 2900
  line "T1: STC (8.0+0.08s)" [2476, 2511]
  line "T1: LTC (60.0+0.60s)" [2762, 2807]
  line "T1: VLTC (2m24s+1.12s)" [2808, 2894]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2894 | 23 | 568 | 51% | 2882 | 40% |
|  |  | P1 | 2850 | 30 | 344 | 49% | 2858 | 36% |
|  |  | E1 | 2901 | 25 | 512 | 48% | 2904 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2807 | 23 | 586 | 49% | 2812 | 38% |
|  |  | P1 | 2805 | 30 | 378 | 57% | 2645 | 32% |
|  |  | E1 | 2815 | 26 | 496 | 50% | 2799 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2511 | 24 | 604 | 49% | 2520 | 29% |
|  |  | P1 | 2512 | 33 | 302 | 49% | 2522 | 33% |
|  |  | E1 | 2527 | 28 | 426 | 49% | 2530 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2859 | 54 | 116 | 53% | 2828 | 33% |
|  |  | T1 | 2808 | 32 | 316 | 49% | 2820 | 34% |
|  |  | P1 | 2807 | 63 | 88 | 51% | 2736 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2790 | 50 | 158 | 60% | 2646 | 28% |
|  |  | T1 | 2762 | 32 | 320 | 50% | 2758 | 35% |
|  |  | P1 | 2735 | 57 | 106 | 45% | 2768 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2426 | 46 | 168 | 49% | 2429 | 27% |
|  |  | T1 | 2476 | 27 | 440 | 49% | 2480 | 34% |
|  |  | P1 | 2356 | 59 | 118 | 53% | 2249 | 21% |