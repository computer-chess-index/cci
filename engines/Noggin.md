# Engine: Noggin

Author: Jeremy Lim

Home: https://github.com/jeremyylimmm/noggin

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2560<sub>(+41) | 2892<sub>(+38) | 2967<sub>(+46) |  |
| 2.0 | 2026-06-14 | 2519 | 2854 | 2921 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2554<sub>(+94) | 2849<sub>(+88) | 2957<sub>(+104) |  |
| 2.0 | 2026-06-14 | 2460 | 2761 | 2853 |  |
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

Generated: 2026-11-23 05:40:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2400 --> 3000
  line "E1: STC (8.0+0.08s)" [2519, 2560]
  line "E1: LTC (60.0+0.60s)" [2854, 2892]
  line "E1: VLTC (2m24s+1.12s)" [2921, 2967]
  line "P1: STC (8.0+0.08s)" [2460, 2554]
  line "P1: LTC (60.0+0.60s)" [2761, 2849]
  line "P1: VLTC (2m24s+1.12s)" [2853, 2957]
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
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2957 | 47 | 136 | 49% | 2967 | 41% |
|  |  | E1 | 2967 | 33 | 308 | 55% | 2851 | 35% |
|  |  | T1 | 2948 | 34 | 260 | 52% | 2935 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2892 | 33 | 324 | 57% | 2749 | 35% |
|  |  | T1 | 2893 | 37 | 224 | 52% | 2878 | 43% |
|  |  | P1 | 2849 | 44 | 158 | 49% | 2859 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2560 | 38 | 252 | 48% | 2565 | 29% |
|  |  | T1 | 2642 | 39 | 220 | 48% | 2658 | 30% |
|  |  | P1 | 2554 | 49 | 148 | 49% | 2568 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2942 | 49 | 128 | 56% | 2894 | 41% |
|  |  | P1 | 2853 | 86 | 48 | 39% | 2948 | 31% |
|  |  | E1 | 2921 | 83 | 48 | 51% | 2858 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2838 | 56 | 92 | 51% | 2826 | 46% |
|  |  | P1 | 2761 | 96 | 42 | 56% | 2714 | 17% |
|  |  | E1 | 2854 | 80 | 54 | 50% | 2831 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2606 | 52 | 124 | 44% | 2661 | 31% |
|  |  | P1 | 2460 | 79 | 60 | 43% | 2508 | 25% |
|  |  | E1 | 2519 | 71 | 72 | 42% | 2651 | 32% |