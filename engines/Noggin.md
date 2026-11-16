# Engine: Noggin

Author: Jeremy Lim

Home: https://github.com/jeremyylimmm/noggin

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2560<sub>(-9) | 2898<sub>(+21) | 2974<sub>(+49) |  |
| 2.0 | 2026-06-14 | 2569 | 2877 | 2925 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2520<sub>(+18) | 2817<sub>(+124) | 2920<sub>(-7) |  |
| 2.0 | 2026-06-14 | 2502 | 2693 | 2927 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2642<sub>(+36) | 2893<sub>(+55) | 2948<sub>(+6) |  |
| 2.0 | 2026-06-14 | 2606 | 2838 | 2942 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Noggin+<version>&body=###%20Engine%20name%0ANoggin%0A%0A###%20Version%0A2.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-16 05:40:35

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2500 --> 3000
  line "E1: STC (8.0+0.08s)" [2569, 2560]
  line "E1: LTC (60.0+0.60s)" [2877, 2898]
  line "E1: VLTC (2m24s+1.12s)" [2925, 2974]
  line "P1: STC (8.0+0.08s)" [2502, 2520]
  line "P1: LTC (60.0+0.60s)" [2693, 2817]
  line "P1: VLTC (2m24s+1.12s)" [2927, 2920]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2600 --> 3000
  line "T1: STC (8.0+0.08s)" [2606, 2642]
  line "T1: LTC (60.0+0.60s)" [2838, 2893]
  line "T1: VLTC (2m24s+1.12s)" [2942, 2948]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2920 | 48 | 132 | 48% | 2938 | 41% |
|  |  | E1 | 2974 | 34 | 284 | 57% | 2836 | 36% |
|  |  | T1 | 2948 | 34 | 260 | 52% | 2935 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2817 | 48 | 134 | 49% | 2834 | 45% |
|  |  | E1 | 2898 | 34 | 296 | 58% | 2739 | 36% |
|  |  | T1 | 2893 | 37 | 224 | 52% | 2878 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2560 | 42 | 204 | 49% | 2547 | 29% |
|  |  | T1 | 2642 | 39 | 220 | 48% | 2658 | 30% |
|  |  | P1 | 2520 | 53 | 128 | 48% | 2541 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2942 | 49 | 128 | 56% | 2894 | 41% |
|  |  | P1 | 2927 | 113 | 28 | 45% | 2938 | 32% |
|  |  | E1 | 2925 | 83 | 48 | 51% | 2865 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2838 | 56 | 92 | 51% | 2826 | 46% |
|  |  | P1 | 2693 | 124 | 26 | 54% | 2677 | 15% |
|  |  | E1 | 2877 | 89 | 44 | 52% | 2832 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2606 | 52 | 124 | 44% | 2661 | 31% |
|  |  | P1 | 2502 | 101 | 36 | 47% | 2488 | 28% |
|  |  | E1 | 2569 | 81 | 56 | 45% | 2695 | 32% |