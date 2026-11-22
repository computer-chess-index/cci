# Engine: Sturddle2

Author: Cristian Vlasceanu

Home: https://github.com/cristivlas/sturddle-2

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7.0 | 2026-10-04 | 2812<sub>(+120) | 3156<sub>(+82) | 3244<sub>(+49) |  |
| 2.6.0 | 2026-08-09 | 2692 | 3074 | 3195 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.7.0 | 2026-10-04 | 2719<sub>(+39) | 3079<sub>(+27) | 3166<sub>(+45) |  |
| 2.6.0 | 2026-08-09 | 2680 | 3052 | 3121 |  |
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

Generated: 2026-11-22 05:43:23

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.6.0", "2.7.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "E1: STC (8.0+0.08s)" [2692, 2812]
  line "E1: LTC (60.0+0.60s)" [3074, 3156]
  line "E1: VLTC (2m24s+1.12s)" [3195, 3244]
  line "P1: STC (8.0+0.08s)" [2680, 2719]
  line "P1: LTC (60.0+0.60s)" [3052, 3079]
  line "P1: VLTC (2m24s+1.12s)" [3121, 3166]
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
| 2.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3166 | 31 | 298 | 50% | 3166 | 55% |
|  |  | E1 | 3244 | 28 | 364 | 50% | 3247 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3079 | 34 | 242 | 50% | 3087 | 54% |
|  |  | E1 | 3156 | 26 | 396 | 50% | 3151 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2719 | 38 | 222 | 50% | 2711 | 35% |
|  |  | E1 | 2812 | 28 | 386 | 48% | 2824 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3195 | 29 | 344 | 50% | 3197 | 53% |
|  |  | T1 | 3158 | 30 | 296 | 50% | 3160 | 56% |
|  |  | P1 | 3121 | 39 | 186 | 48% | 3133 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3074 | 29 | 340 | 46% | 3105 | 51% |
|  |  | T1 | 3109 | 29 | 332 | 50% | 3110 | 52% |
|  |  | P1 | 3052 | 37 | 214 | 46% | 3086 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2692 | 31 | 350 | 45% | 2732 | 33% |
|  |  | T1 | 2799 | 32 | 312 | 51% | 2790 | 35% |
|  |  | P1 | 2680 | 36 | 260 | 48% | 2700 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3174 | 23 | 514 | 52% | 3155 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3033 | 25 | 478 | 49% | 3044 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2704 | 23 | 626 | 50% | 2700 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3100 | 34 | 236 | 49% | 3105 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3015 | 37 | 224 | 51% | 2996 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2627 | 36 | 248 | 50% | 2623 | 30% |