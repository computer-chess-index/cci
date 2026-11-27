# Engine: Ember

Author: Daniel Krețu

Home: https://github.com/ExxDreamerCode/Ember

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-10-15 | 2882<sub>(+129) | 3177<sub>(+48) | 3272<sub>(+71) |  |
| 1.3.1 | 2026-09-18 | 2753<sub>(+208) | 3129<sub>(+217) | 3201<sub>(+145) |  |
| 1.3.0 | 2026-08-28 | 2545 | 2912 | 3056 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-10-15 | 2944<sub>(+90) | 3186<sub>(+72) | 3290<sub>(+31) |  |
| 1.3.1 | 2026-09-18 | 2854<sub>(+212) | 3114<sub>(+148) | 3259<sub>(+240) |  |
| 1.3.0 | 2026-08-28 | 2642 | 2966 | 3019 |  |
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

Generated: 2026-11-27 05:38:14

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.3.1", "1.4.0"]
  y-axis "Elo Rating" 2500 --> 3300
  line "E1: STC (8.0+0.08s)" [2545, 2753, 2882]
  line "E1: LTC (60.0+0.60s)" [2912, 3129, 3177]
  line "E1: VLTC (2m24s+1.12s)" [3056, 3201, 3272]
  line "P1: STC (8.0+0.08s)" [2642, 2854, 2944]
  line "P1: LTC (60.0+0.60s)" [2966, 3114, 3186]
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
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3272 | 28 | 334 | 50% | 3268 | 68% |
|  |  | P1 | 3290 | 32 | 260 | 48% | 3302 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3186 | 31 | 276 | 49% | 3189 | 62% |
|  |  | E1 | 3177 | 25 | 422 | 50% | 3171 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2944 | 34 | 266 | 51% | 2931 | 40% |
|  |  | E1 | 2882 | 27 | 420 | 50% | 2882 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3249 | 62 | 68 | 51% | 3235 | 62% |
|  |  | P1 | 3259 | 52 | 96 | 51% | 3249 | 65% |
|  |  | E1 | 3201 | 32 | 280 | 51% | 3191 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3179 | 50 | 112 | 54% | 3143 | 52% |
|  |  | P1 | 3114 | 45 | 140 | 48% | 3133 | 52% |
|  |  | E1 | 3129 | 34 | 232 | 48% | 3141 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2842 | 56 | 96 | 54% | 2807 | 42% |
|  |  | P1 | 2854 | 36 | 232 | 52% | 2840 | 43% |
|  |  | E1 | 2753 | 36 | 236 | 48% | 2769 | 42% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3019 | 34 | 246 | 48% | 3031 | 50% |
|  |  | E1 | 3056 | 32 | 284 | 47% | 3079 | 49% |
|  |  | T1 | 3050 | 33 | 256 | 51% | 3042 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2966 | 36 | 232 | 52% | 2946 | 46% |
|  |  | E1 | 2912 | 30 | 334 | 47% | 2942 | 40% |
|  |  | T1 | 2973 | 32 | 296 | 53% | 2946 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2545 | 32 | 332 | 44% | 2607 | 31% |
|  |  | T1 | 2635 | 35 | 264 | 52% | 2619 | 33% |
|  |  | P1 | 2642 | 32 | 318 | 48% | 2674 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2873 | 31 | 330 | 50% | 2867 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2796 | 31 | 332 | 51% | 2773 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2354 | 33 | 316 | 49% | 2358 | 25% |