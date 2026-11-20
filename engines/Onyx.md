# Engine: Onyx

Author: Dylan Hogarth

Home: https://github.com/dylan2554/onyx

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2834<sub>(+335) | 3148<sub>(+212) | 3221<sub>(+196) |  |
| 1.6 | 2026-06-13 | 2499 | 2936 | 3025 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2880<sub>(+234) | 3110<sub>(+195) | 3201<sub>(+169) |  |
| 1.6 | 2026-06-13 | 2646 | 2915 | 3032 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2897<sub>(+262) | 3166<sub>(+224) | 3233<sub>(+204) |  |
| 1.6 | 2026-06-13 | 2635 | 2942 | 3029 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Onyx+<version>&body=###%20Engine%20name%0AOnyx%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-20 05:40:45

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.0"]
  y-axis "Elo Rating" 2400 --> 3300
  line "E1: STC (8.0+0.08s)" [2499, 2834]
  line "E1: LTC (60.0+0.60s)" [2936, 3148]
  line "E1: VLTC (2m24s+1.12s)" [3025, 3221]
  line "P1: STC (8.0+0.08s)" [2646, 2880]
  line "P1: LTC (60.0+0.60s)" [2915, 3110]
  line "P1: VLTC (2m24s+1.12s)" [3032, 3201]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "T1: STC (8.0+0.08s)" [2635, 2897]
  line "T1: LTC (60.0+0.60s)" [2942, 3166]
  line "T1: VLTC (2m24s+1.12s)" [3029, 3233]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3233 | 28 | 342 | 50% | 3235 | 58% |
|  |  | P1 | 3201 | 31 | 286 | 50% | 3201 | 60% |
|  |  | E1 | 3221 | 25 | 456 | 47% | 3245 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3166 | 29 | 346 | 50% | 3164 | 51% |
|  |  | P1 | 3110 | 30 | 320 | 47% | 3136 | 48% |
|  |  | E1 | 3148 | 25 | 448 | 47% | 3173 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2880 | 31 | 320 | 48% | 2905 | 39% |
|  |  | E1 | 2834 | 25 | 484 | 46% | 2857 | 39% |
|  |  | T1 | 2897 | 29 | 370 | 49% | 2904 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3025 | 64 | 84 | 58% | 2861 | 33% |
|  |  | T1 | 3029 | 32 | 296 | 48% | 3044 | 40% |
|  |  | P1 | 3032 | 71 | 68 | 55% | 2892 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2936 | 65 | 78 | 46% | 2977 | 33% |
|  |  | T1 | 2942 | 34 | 264 | 46% | 2973 | 41% |
|  |  | P1 | 2915 | 73 | 68 | 59% | 2805 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2635 | 34 | 276 | 50% | 2641 | 33% |
|  |  | P1 | 2646 | 65 | 80 | 49% | 2682 | 35% |
|  |  | E1 | 2499 | 54 | 120 | 53% | 2461 | 22% |