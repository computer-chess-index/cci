# Engine: Noggin

Author: Jeremy Lim

Home: https://github.com/jeremyylimmm/noggin

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2561<sub>(+43) | 2888<sub>(+88) | 2965<sub>(+42) |  |
| 2.0 | 2026-06-14 | 2518 | 2800 | 2923 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2581<sub>(+90) | 2877<sub>(+58) | 2973<sub>(+112) |  |
| 2.0 | 2026-06-14 | 2491 | 2819 | 2861 |  |
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

Generated: 2026-11-26 05:41:02

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2400 --> 3000
  line "E1: STC (8.0+0.08s)" [2518, 2561]
  line "E1: LTC (60.0+0.60s)" [2800, 2888]
  line "E1: VLTC (2m24s+1.12s)" [2923, 2965]
  line "P1: STC (8.0+0.08s)" [2491, 2581]
  line "P1: LTC (60.0+0.60s)" [2819, 2877]
  line "P1: VLTC (2m24s+1.12s)" [2861, 2973]
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
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2948 | 34 | 260 | 52% | 2935 | 45% |
|  |  | P1 | 2973 | 46 | 144 | 50% | 2977 | 42% |
|  |  | E1 | 2965 | 33 | 316 | 55% | 2853 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2893 | 37 | 224 | 52% | 2878 | 43% |
|  |  | P1 | 2877 | 40 | 190 | 51% | 2876 | 45% |
|  |  | E1 | 2888 | 32 | 336 | 56% | 2753 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2642 | 39 | 220 | 48% | 2658 | 30% |
|  |  | P1 | 2581 | 46 | 168 | 51% | 2576 | 25% |
|  |  | E1 | 2561 | 37 | 256 | 48% | 2568 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2923 | 77 | 56 | 51% | 2867 | 38% |
|  |  | T1 | 2942 | 49 | 128 | 56% | 2894 | 41% |
|  |  | P1 | 2861 | 86 | 48 | 39% | 2955 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2800 | 57 | 102 | 46% | 2831 | 32% |
|  |  | T1 | 2838 | 56 | 92 | 51% | 2826 | 46% |
|  |  | P1 | 2819 | 89 | 50 | 60% | 2727 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2606 | 52 | 124 | 44% | 2661 | 31% |
|  |  | P1 | 2491 | 70 | 72 | 46% | 2512 | 28% |
|  |  | E1 | 2518 | 68 | 80 | 43% | 2637 | 29% |