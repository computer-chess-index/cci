# Engine: Sturddle2

Author: Cristian Vlasceanu

Home: https://github.com/cristivlas/sturddle-2

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7.0 | 2026-10-04 | 2812<sub>(+124) | 3154<sub>(+89) | 3241<sub>(+51) |  |
| 2.6.0 | 2026-08-09 | 2688 | 3065 | 3190 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7.0 | 2026-10-04 | 2732<sub>(+35) | 3097<sub>(+24) | 3183<sub>(+46) |  |
| 2.6.0 | 2026-08-09 | 2697 | 3073 | 3137 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-08-09 | 2799<sub>(+95) | 3109<sub>(+76) | 3158<sub>(-16) |  |
| 2.5.0 | 2026-02-04 | 2704<sub>(+77) | 3033<sub>(+18) | 3174<sub>(+74) |  |
| 2.4.0 | 2025-12-06 | 2627 | 3015 | 3100 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sturddle2+<version>&body=###%20Engine%20name%0ASturddle2%0A%0A###%20Version%0A2.6.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:43:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.6.0", "2.7.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "E1: STC (8.0+0.08s)" [2688, 2812]
  line "E1: LTC (60.0+0.60s)" [3065, 3154]
  line "E1: VLTC (2m24s+1.12s)" [3190, 3241]
  line "P1: STC (8.0+0.08s)" [2697, 2732]
  line "P1: LTC (60.0+0.60s)" [3073, 3097]
  line "P1: VLTC (2m24s+1.12s)" [3137, 3183]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2600 --> 3200
  line "T1: STC (8.0+0.08s)" [2627, 2704, 2799]
  line "T1: LTC (60.0+0.60s)" [3015, 3033, 3109]
  line "T1: VLTC (2m24s+1.12s)" [3100, 3174, 3158]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3183 | 30 | 306 | 50% | 3185 | 54% |
|  |  | E1 | 3241 | 28 | 368 | 50% | 3241 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3097 | 32 | 270 | 49% | 3108 | 54% |
|  |  | E1 | 3154 | 26 | 408 | 50% | 3148 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2732 | 37 | 230 | 50% | 2726 | 35% |
|  |  | E1 | 2812 | 27 | 414 | 49% | 2823 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3137 | 38 | 194 | 48% | 3154 | 54% |
|  |  | E1 | 3190 | 28 | 352 | 50% | 3193 | 53% |
|  |  | T1 | 3158 | 30 | 296 | 50% | 3160 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3073 | 35 | 230 | 47% | 3105 | 51% |
|  |  | E1 | 3065 | 27 | 380 | 46% | 3096 | 52% |
|  |  | T1 | 3109 | 29 | 332 | 50% | 3110 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2688 | 30 | 358 | 45% | 2728 | 34% |
|  |  | T1 | 2799 | 32 | 312 | 51% | 2790 | 35% |
|  |  | P1 | 2697 | 35 | 272 | 48% | 2716 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3174 | 23 | 514 | 52% | 3155 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3033 | 25 | 478 | 49% | 3044 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2704 | 23 | 626 | 50% | 2700 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3100 | 34 | 236 | 49% | 3105 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3015 | 37 | 224 | 51% | 2996 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2627 | 36 | 248 | 50% | 2623 | 30% |