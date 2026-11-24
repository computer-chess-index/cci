# Engine: Ember

Author: Daniel Krețu

Home: https://github.com/ExxDreamerCode/Ember

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-10-15 | 2884<sub>(+123) | 3182<sub>(+53) | 3275<sub>(+70) |  |
| 1.3.1 | 2026-09-18 | 2761<sub>(+216) | 3129<sub>(+216) | 3205<sub>(+146) |  |
| 1.3.0 | 2026-08-28 | 2545 | 2913 | 3059 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-10-15 | 2930<sub>(+126) | 3177<sub>(+56) | 3285<sub>(+36) |  |
| 1.3.1 | 2026-09-18 | 2804<sub>(+169) | 3121<sub>(+164) | 3249<sub>(+241) |  |
| 1.3.0 | 2026-08-28 | 2635 | 2957 | 3008 |  |
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

Generated: 2026-11-24 05:38:13

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.3.1", "1.4.0"]
  y-axis "Elo Rating" 2500 --> 3300
  line "E1: STC (8.0+0.08s)" [2545, 2761, 2884]
  line "E1: LTC (60.0+0.60s)" [2913, 3129, 3182]
  line "E1: VLTC (2m24s+1.12s)" [3059, 3205, 3275]
  line "P1: STC (8.0+0.08s)" [2635, 2804, 2930]
  line "P1: LTC (60.0+0.60s)" [2957, 3121, 3177]
  line "P1: VLTC (2m24s+1.12s)" [3008, 3249, 3285]
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
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3285 | 32 | 252 | 48% | 3294 | 64% |
|  |  | E1 | 3275 | 28 | 334 | 50% | 3271 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3177 | 31 | 268 | 49% | 3181 | 62% |
|  |  | E1 | 3182 | 26 | 406 | 51% | 3173 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2930 | 34 | 258 | 51% | 2921 | 40% |
|  |  | E1 | 2884 | 27 | 412 | 50% | 2882 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3205 | 32 | 272 | 51% | 3193 | 52% |
|  |  | T1 | 3249 | 62 | 68 | 51% | 3235 | 62% |
|  |  | P1 | 3249 | 52 | 96 | 51% | 3241 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3129 | 37 | 204 | 48% | 3141 | 56% |
|  |  | T1 | 3179 | 50 | 112 | 54% | 3143 | 52% |
|  |  | P1 | 3121 | 48 | 120 | 50% | 3124 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2842 | 56 | 96 | 54% | 2807 | 42% |
|  |  | P1 | 2804 | 60 | 84 | 48% | 2824 | 40% |
|  |  | E1 | 2761 | 45 | 148 | 48% | 2780 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3050 | 33 | 256 | 51% | 3042 | 53% |
|  |  | P1 | 3008 | 34 | 246 | 48% | 3020 | 50% |
|  |  | E1 | 3059 | 32 | 284 | 47% | 3082 | 49% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2973 | 32 | 296 | 53% | 2946 | 45% |
|  |  | P1 | 2957 | 36 | 232 | 52% | 2936 | 46% |
|  |  | E1 | 2913 | 30 | 334 | 47% | 2944 | 40% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2635 | 35 | 264 | 52% | 2619 | 33% |
|  |  | P1 | 2635 | 32 | 318 | 48% | 2666 | 35% |
|  |  | E1 | 2545 | 32 | 332 | 44% | 2607 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2873 | 31 | 330 | 50% | 2867 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2796 | 31 | 332 | 51% | 2773 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2354 | 33 | 316 | 49% | 2358 | 25% |