# Engine: Ember

Author: Daniel Krețu

Home: https://github.com/ExxDreamerCode/Ember

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-10-15 | 2886<sub>(+339) | 3189<sub>(+268) | 3279<sub>(+213) |  |
| 1.3.0 | 2026-08-28 | 2547 | 2921 | 3066 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-10-15 | 2893<sub>(+285) | 3150<sub>(+220) | 3263<sub>(+281) |  |
| 1.3.0 | 2026-08-28 | 2608 | 2930 | 2982 |  |
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

Generated: 2026-11-17 05:38:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.4.0"]
  y-axis "Elo Rating" 2500 --> 3300
  line "E1: STC (8.0+0.08s)" [2547, 2886]
  line "E1: LTC (60.0+0.60s)" [2921, 3189]
  line "E1: VLTC (2m24s+1.12s)" [3066, 3279]
  line "P1: STC (8.0+0.08s)" [2608, 2893]
  line "P1: LTC (60.0+0.60s)" [2930, 3150]
  line "P1: VLTC (2m24s+1.12s)" [2982, 3263]
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
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3263 | 33 | 236 | 49% | 3270 | 63% |
|  |  | E1 | 3279 | 28 | 326 | 50% | 3275 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3150 | 32 | 264 | 49% | 3155 | 63% |
|  |  | E1 | 3189 | 27 | 386 | 51% | 3177 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2886 | 28 | 396 | 49% | 2889 | 42% |
|  |  | P1 | 2893 | 38 | 218 | 50% | 2892 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3249 | 62 | 68 | 51% | 3235 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3179 | 50 | 112 | 54% | 3143 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2842 | 56 | 96 | 54% | 2807 | 42% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3066 | 32 | 284 | 47% | 3089 | 49% |
|  |  | T1 | 3050 | 33 | 256 | 51% | 3042 | 53% |
|  |  | P1 | 2982 | 35 | 242 | 48% | 2994 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2921 | 30 | 334 | 47% | 2951 | 40% |
|  |  | T1 | 2973 | 32 | 296 | 53% | 2946 | 45% |
|  |  | P1 | 2930 | 36 | 228 | 52% | 2909 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2547 | 32 | 332 | 44% | 2610 | 31% |
|  |  | T1 | 2635 | 35 | 264 | 52% | 2619 | 33% |
|  |  | P1 | 2608 | 33 | 302 | 48% | 2643 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2873 | 31 | 330 | 50% | 2867 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2796 | 31 | 332 | 51% | 2773 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2354 | 33 | 316 | 49% | 2358 | 25% |