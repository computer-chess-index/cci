# Engine: Ember

Author: Daniel Krețu

Home: https://github.com/ExxDreamerCode/Ember

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-10-15 | 2889<sub>(+134) | 3182<sub>(+50) | 3278<sub>(+73) |  |
| 1.3.1 | 2026-09-18 | 2755<sub>(+208) | 3132<sub>(+215) | 3205<sub>(+143) |  |
| 1.3.0 | 2026-08-28 | 2547 | 2917 | 3062 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-10-15 | 2943<sub>(+103) | 3187<sub>(+59) | 3290<sub>(+31) |  |
| 1.3.1 | 2026-09-18 | 2840<sub>(+198) | 3128<sub>(+163) | 3259<sub>(+240) |  |
| 1.3.0 | 2026-08-28 | 2642 | 2965 | 3019 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-09-18 | 2842<sub>(+207) | 3179<sub>(+206) | 3249<sub>(+199) |  |
| 1.3.0 | 2026-08-28 | 2635<sub>(+281) | 2973<sub>(+177) | 3050<sub>(+177) |  |
| 1.1.2 | 2026-07-08 | 2354 | 2796 | 2873 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ember+<version>&body=###%20Engine%20name%0AEmber%0A%0A###%20Version%0A1.3.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-25 05:38:15

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.3.1", "1.4.0"]
  y-axis "Elo Rating" 2500 --> 3300
  line "E1: STC (8.0+0.08s)" [2547, 2755, 2889]
  line "E1: LTC (60.0+0.60s)" [2917, 3132, 3182]
  line "E1: VLTC (2m24s+1.12s)" [3062, 3205, 3278]
  line "P1: STC (8.0+0.08s)" [2642, 2840, 2943]
  line "P1: LTC (60.0+0.60s)" [2965, 3128, 3187]
  line "P1: VLTC (2m24s+1.12s)" [3019, 3259, 3290]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.2", "1.3.0", "1.3.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "T1: STC (8.0+0.08s)" [2354, 2635, 2842]
  line "T1: LTC (60.0+0.60s)" [2796, 2973, 3179]
  line "T1: VLTC (2m24s+1.12s)" [2873, 3050, 3249]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3290 | 32 | 260 | 48% | 3302 | 64% |
|  |  | E1 | 3278 | 28 | 334 | 50% | 3274 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3182 | 26 | 414 | 51% | 3175 | 57% |
|  |  | P1 | 3187 | 31 | 276 | 49% | 3190 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2889 | 27 | 416 | 50% | 2886 | 41% |
|  |  | P1 | 2943 | 34 | 266 | 51% | 2931 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3249 | 62 | 68 | 51% | 3235 | 62% |
|  |  | P1 | 3259 | 52 | 96 | 51% | 3251 | 65% |
|  |  | E1 | 3205 | 32 | 276 | 51% | 3195 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3179 | 50 | 112 | 54% | 3143 | 52% |
|  |  | P1 | 3128 | 46 | 128 | 49% | 3132 | 55% |
|  |  | E1 | 3132 | 36 | 208 | 48% | 3146 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2842 | 56 | 96 | 54% | 2807 | 42% |
|  |  | P1 | 2840 | 50 | 120 | 51% | 2830 | 41% |
|  |  | E1 | 2755 | 42 | 164 | 47% | 2782 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3050 | 33 | 256 | 51% | 3042 | 53% |
|  |  | P1 | 3019 | 34 | 246 | 48% | 3029 | 50% |
|  |  | E1 | 3062 | 32 | 284 | 47% | 3085 | 49% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2973 | 32 | 296 | 53% | 2946 | 45% |
|  |  | P1 | 2965 | 36 | 232 | 52% | 2944 | 46% |
|  |  | E1 | 2917 | 30 | 334 | 47% | 2947 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2642 | 32 | 318 | 48% | 2674 | 35% |
|  |  | E1 | 2547 | 32 | 332 | 44% | 2608 | 31% |
|  |  | T1 | 2635 | 35 | 264 | 52% | 2619 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2873 | 31 | 330 | 50% | 2867 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2796 | 31 | 332 | 51% | 2773 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2354 | 33 | 316 | 49% | 2358 | 25% |