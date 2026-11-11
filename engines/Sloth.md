# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2984<sub>(+261) | 3302<sub>(+227) | 3430<sub>(+240) |  |
| 2.4 | 2026-10-09 | 2723<sub>(+273) | 3075<sub>(+186) | 3190<sub>(+177) |  |
| 2.2 | 2026-08-28 | 2450 | 2889 | 3013 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 3123<sub>(+337) | 3393<sub>(+265) | 3464<sub>(+300) |  |
| 2.4 | 2026-10-09 | 2786<sub>(+180) | 3128<sub>(+136) | 3164<sub>(+110) |  |
| 2.2 | 2026-08-28 | 2606 | 2992 | 3054 |  |
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

Generated: 2026-11-11 05:42:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.4", "2.5"]
  y-axis "Elo Rating" 2400 --> 3500
  line "E1: STC (8.0+0.08s)" [2450, 2723, 2984]
  line "E1: LTC (60.0+0.60s)" [2889, 3075, 3302]
  line "E1: VLTC (2m24s+1.12s)" [3013, 3190, 3430]
  line "P1: STC (8.0+0.08s)" [2606, 2786, 3123]
  line "P1: LTC (60.0+0.60s)" [2992, 3128, 3393]
  line "P1: VLTC (2m24s+1.12s)" [3054, 3164, 3464]
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
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3464 | 39 | 168 | 52% | 3447 | 65% |
|  |  | E1 | 3430 | 32 | 268 | 50% | 3424 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3393 | 39 | 176 | 53% | 3368 | 61% |
|  |  | E1 | 3302 | 30 | 312 | 52% | 3286 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3123 | 39 | 190 | 54% | 3090 | 48% |
|  |  | E1 | 2984 | 37 | 236 | 54% | 2940 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3190 | 32 | 276 | 51% | 3185 | 50% |
|  |  | P1 | 3164 | 41 | 162 | 49% | 3171 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3075 | 33 | 274 | 51% | 3067 | 42% |
|  |  | P1 | 3128 | 39 | 188 | 51% | 3125 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2723 | 34 | 286 | 52% | 2699 | 34% |
|  |  | P1 | 2786 | 37 | 224 | 54% | 2755 | 42% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3021 | 36 | 218 | 51% | 3011 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2962 | 37 | 210 | 51% | 2958 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2579 | 42 | 190 | 48% | 2596 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2982 | 33 | 280 | 51% | 2965 | 43% |
|  |  | P1 | 3054 | 38 | 208 | 47% | 3069 | 47% |
|  |  | E1 | 3013 | 33 | 282 | 47% | 3036 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2992 | 39 | 194 | 49% | 2997 | 46% |
|  |  | E1 | 2889 | 34 | 274 | 46% | 2913 | 39% |
|  |  | T1 | 2881 | 35 | 246 | 53% | 2853 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2606 | 44 | 180 | 50% | 2603 | 26% |
|  |  | E1 | 2450 | 35 | 280 | 41% | 2538 | 29% |
|  |  | T1 | 2543 | 33 | 304 | 48% | 2560 | 31% |