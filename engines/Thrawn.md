# Engine: Thrawn

Author: Feiyu Lin

Home: https://github.com/feftywacky/Thrawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-09-04 | 2979<sub>(+179) | 3359<sub>(+130) | 3417<sub>(+115) |  |
| 3.1 | 2026-07-07 | 2800 | 3229 | 3302 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-09-04 | 3079<sub>(+230) | 3355<sub>(+176) | 3417<sub>(+155) |  |
| 3.1 | 2026-07-07 | 2849 | 3179 | 3262 |  |
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

Generated: 2026-11-28 05:43:57

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.1", "3.2"]
  y-axis "Elo Rating" 2800 --> 3500
  line "E1: STC (8.0+0.08s)" [2800, 2979]
  line "E1: LTC (60.0+0.60s)" [3229, 3359]
  line "E1: VLTC (2m24s+1.12s)" [3302, 3417]
  line "P1: STC (8.0+0.08s)" [2849, 3079]
  line "P1: LTC (60.0+0.60s)" [3179, 3355]
  line "P1: VLTC (2m24s+1.12s)" [3262, 3417]
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
|  |  | P1 | 3417 | 31 | 254 | 51% | 3414 | 78% |
|  |  | E1 | 3417 | 24 | 418 | 48% | 3430 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3351 | 32 | 240 | 51% | 3345 | 71% |
|  |  | P1 | 3355 | 27 | 352 | 48% | 3368 | 72% |
|  |  | E1 | 3359 | 23 | 464 | 50% | 3360 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3079 | 30 | 320 | 52% | 3063 | 50% |
|  |  | E1 | 2979 | 25 | 472 | 49% | 2988 | 44% |
|  |  | T1 | 3040 | 31 | 308 | 53% | 3016 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3302 | 51 | 112 | 45% | 3318 | 54% |
|  |  | T1 | 3279 | 27 | 350 | 53% | 3249 | 67% |
|  |  | P1 | 3262 | 67 | 64 | 54% | 3201 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3202 | 27 | 360 | 53% | 3177 | 62% |
|  |  | P1 | 3179 | 60 | 74 | 55% | 3132 | 64% |
|  |  | E1 | 3229 | 43 | 148 | 49% | 3240 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2896 | 29 | 364 | 50% | 2893 | 46% |
|  |  | P1 | 2849 | 60 | 96 | 49% | 2813 | 35% |
|  |  | E1 | 2800 | 47 | 138 | 54% | 2772 | 53% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2807 | 44 | 162 | 47% | 2831 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2647 | 45 | 156 | 49% | 2655 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2236 | 52 | 124 | 48% | 2257 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2909 | 24 | 510 | 47% | 2936 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2839 | 27 | 434 | 50% | 2840 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2476 | 25 | 540 | 48% | 2498 | 29% |