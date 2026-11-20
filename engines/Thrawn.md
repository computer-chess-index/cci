# Engine: Thrawn

Author: Feiyu Lin

Home: https://github.com/feftywacky/Thrawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-09-04 | 2970<sub>(+180) | 3366<sub>(+110) | 3428<sub>(+95) |  |
| 3.1 | 2026-07-07 | 2790 | 3256 | 3333 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-09-04 | 3050<sub>(+215) | 3332<sub>(+197) | 3394<sub>(+159) |  |
| 3.1 | 2026-07-07 | 2835 | 3135 | 3235 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-09-04 | 3040<sub>(+144) | 3351<sub>(+149) | 3407<sub>(+128) |  |
| 3.1 | 2026-07-07 | 2896<sub>(+660) | 3202<sub>(+555) | 3279<sub>(+472) |  |
| 3.0 | 2026-05-25 | 2236<sub>(-240) | 2647<sub>(-192) | 2807<sub>(-102) |  |
| 2.2 | 2025-10-08 | 2476 | 2839 | 2909 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Thrawn+<version>&body=###%20Engine%20name%0AThrawn%0A%0A###%20Version%0A3.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-20 05:43:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2790, 2970]
  line "E1: LTC (60.0+0.60s)" [3256, 3366]
  line "E1: VLTC (2m24s+1.12s)" [3333, 3428]
  line "P1: STC (8.0+0.08s)" [2835, 3050]
  line "P1: LTC (60.0+0.60s)" [3135, 3332]
  line "P1: VLTC (2m24s+1.12s)" [3235, 3394]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2200 --> 3500
  line "T1: STC (8.0+0.08s)" [2476, 2236, 2896, 3040]
  line "T1: LTC (60.0+0.60s)" [2839, 2647, 3202, 3351]
  line "T1: VLTC (2m24s+1.12s)" [2909, 2807, 3279, 3407]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3407 | 33 | 222 | 50% | 3403 | 80% |
|  |  | P1 | 3394 | 32 | 238 | 50% | 3391 | 78% |
|  |  | E1 | 3428 | 25 | 406 | 49% | 3438 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3351 | 32 | 240 | 51% | 3345 | 71% |
|  |  | P1 | 3332 | 28 | 332 | 48% | 3345 | 71% |
|  |  | E1 | 3366 | 25 | 412 | 50% | 3367 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3040 | 31 | 308 | 53% | 3016 | 47% |
|  |  | P1 | 3050 | 31 | 298 | 52% | 3031 | 50% |
|  |  | E1 | 2970 | 27 | 416 | 47% | 2996 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3279 | 27 | 350 | 53% | 3249 | 67% |
|  |  | P1 | 3235 | 82 | 44 | 57% | 3136 | 50% |
|  |  | E1 | 3333 | 61 | 80 | 46% | 3330 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3202 | 27 | 360 | 53% | 3177 | 62% |
|  |  | P1 | 3135 | 75 | 48 | 56% | 3071 | 63% |
|  |  | E1 | 3256 | 56 | 88 | 52% | 3244 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2835 | 68 | 80 | 50% | 2777 | 30% |
|  |  | E1 | 2790 | 55 | 106 | 53% | 2768 | 50% |
|  |  | T1 | 2896 | 29 | 364 | 50% | 2893 | 46% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2807 | 44 | 162 | 47% | 2831 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2647 | 45 | 156 | 49% | 2655 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2236 | 52 | 124 | 48% | 2257 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2909 | 24 | 510 | 47% | 2936 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2839 | 27 | 434 | 50% | 2840 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2476 | 25 | 540 | 48% | 2498 | 29% |