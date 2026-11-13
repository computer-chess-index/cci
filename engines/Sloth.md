# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2905<sub>(+271) | 3198<sub>(+228) | 3326<sub>(+241) |  |
| 2.4 | 2026-10-09 | 2634<sub>(+261) | 2970<sub>(+181) | 3085<sub>(+174) |  |
| 2.2 | 2026-08-28 | 2373 | 2789 | 2911 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2962<sub>(+331) | 3236<sub>(+265) | 3308<sub>(+297) |  |
| 2.4 | 2026-10-09 | 2631<sub>(+167) | 2971<sub>(+137) | 3011<sub>(+114) |  |
| 2.2 | 2026-08-28 | 2464 | 2834 | 2897 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3 | 2026-09-22 | 2579<sub>(+36) | 2962<sub>(+81) | 3021<sub>(+39) |  |
| 2.2 | 2026-08-28 | 2543 | 2881 | 2982 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sloth+<version>&body=###%20Engine%20name%0ASloth%0A%0A###%20Version%0A2.3" target="_blank">Submit new version</a>

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

Generated: 2026-11-13 05:43:02

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.4", "2.5"]
  y-axis "Elo Rating" 2300 --> 3400
  line "E1: STC (8.0+0.08s)" [2373, 2634, 2905]
  line "E1: LTC (60.0+0.60s)" [2789, 2970, 3198]
  line "E1: VLTC (2m24s+1.12s)" [2911, 3085, 3326]
  line "P1: STC (8.0+0.08s)" [2464, 2631, 2962]
  line "P1: LTC (60.0+0.60s)" [2834, 2971, 3236]
  line "P1: VLTC (2m24s+1.12s)" [2897, 3011, 3308]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.3"]
  y-axis "Elo Rating" 2500 --> 3100
  line "T1: STC (8.0+0.08s)" [2543, 2579]
  line "T1: LTC (60.0+0.60s)" [2881, 2962]
  line "T1: VLTC (2m24s+1.12s)" [2982, 3021]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3308 | 39 | 168 | 52% | 3290 | 65% |
|  |  | E1 | 3326 | 31 | 272 | 51% | 3318 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3236 | 39 | 176 | 53% | 3212 | 61% |
|  |  | E1 | 3198 | 30 | 312 | 52% | 3182 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2962 | 39 | 194 | 53% | 2935 | 48% |
|  |  | E1 | 2905 | 35 | 266 | 56% | 2850 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3011 | 40 | 170 | 49% | 3016 | 56% |
|  |  | E1 | 3085 | 32 | 276 | 51% | 3081 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2971 | 39 | 188 | 51% | 2969 | 45% |
|  |  | E1 | 2970 | 33 | 286 | 51% | 2955 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2631 | 36 | 236 | 51% | 2620 | 40% |
|  |  | E1 | 2634 | 34 | 286 | 52% | 2610 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3021 | 36 | 218 | 51% | 3011 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2962 | 37 | 210 | 51% | 2958 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2579 | 42 | 190 | 48% | 2596 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2897 | 38 | 208 | 47% | 2912 | 47% |
|  |  | E1 | 2911 | 33 | 282 | 47% | 2935 | 43% |
|  |  | T1 | 2982 | 33 | 280 | 51% | 2965 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2789 | 34 | 274 | 46% | 2815 | 39% |
|  |  | T1 | 2881 | 35 | 246 | 53% | 2853 | 46% |
|  |  | P1 | 2834 | 39 | 194 | 49% | 2839 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2373 | 35 | 280 | 41% | 2461 | 29% |
|  |  | T1 | 2543 | 33 | 304 | 48% | 2560 | 31% |
|  |  | P1 | 2464 | 44 | 180 | 50% | 2465 | 26% |