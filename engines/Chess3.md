# Engine: Chess3

Author: Paul Sonkoly

Home: https://github.com/paulsonkoly/chess-3

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2526<sub>(+111) | 2813<sub>(+36) | 2898<sub>(+24) |  |
| 3.0 | 2026-01-17 | 2415 | 2777 | 2874 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-04-02 | 2515<sub>(+157) | 2805<sub>(+69) | 2851<sub>(+44) |  |
| 3.0 | 2026-01-17 | 2358 | 2736 | 2807 |  |
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

Generated: 2026-11-28 05:37:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0"]
  y-axis "Elo Rating" 2300 --> 2900
  line "E1: STC (8.0+0.08s)" [2415, 2526]
  line "E1: LTC (60.0+0.60s)" [2777, 2813]
  line "E1: VLTC (2m24s+1.12s)" [2874, 2898]
  line "P1: STC (8.0+0.08s)" [2358, 2515]
  line "P1: LTC (60.0+0.60s)" [2736, 2805]
  line "P1: VLTC (2m24s+1.12s)" [2807, 2851]
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
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2898 | 25 | 524 | 48% | 2903 | 39% |
|  |  | T1 | 2894 | 23 | 568 | 51% | 2882 | 40% |
|  |  | P1 | 2851 | 30 | 344 | 49% | 2859 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2813 | 26 | 500 | 50% | 2797 | 33% |
|  |  | T1 | 2807 | 23 | 586 | 49% | 2812 | 38% |
|  |  | P1 | 2805 | 30 | 378 | 57% | 2645 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2511 | 24 | 604 | 49% | 2520 | 29% |
|  |  | P1 | 2515 | 33 | 302 | 49% | 2525 | 33% |
|  |  | E1 | 2526 | 28 | 426 | 49% | 2530 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2808 | 32 | 316 | 49% | 2820 | 34% |
|  |  | P1 | 2807 | 63 | 88 | 51% | 2736 | 36% |
|  |  | E1 | 2874 | 50 | 132 | 54% | 2832 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2762 | 32 | 320 | 50% | 2758 | 35% |
|  |  | P1 | 2736 | 57 | 106 | 45% | 2768 | 32% |
|  |  | E1 | 2777 | 46 | 182 | 58% | 2664 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2476 | 27 | 440 | 49% | 2480 | 34% |
|  |  | P1 | 2358 | 59 | 118 | 53% | 2250 | 21% |
|  |  | E1 | 2415 | 43 | 192 | 48% | 2427 | 26% |