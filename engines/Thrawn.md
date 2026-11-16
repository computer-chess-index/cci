# Engine: Thrawn

Author: Feiyu Lin

Home: https://github.com/feftywacky/Thrawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-09-04 | 2971<sub>(+201) | 3368<sub>(+123) | 3429<sub>(+93) |  |
| 3.1 | 2026-07-07 | 2770 | 3245 | 3336 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-09-04 | 3033<sub>(+216) | 3325<sub>(+209) | 3387<sub>(+204) |  |
| 3.1 | 2026-07-07 | 2817 | 3116 | 3183 |  |
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

Generated: 2026-11-16 05:43:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.1", "3.2"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2770, 2971]
  line "E1: LTC (60.0+0.60s)" [3245, 3368]
  line "E1: VLTC (2m24s+1.12s)" [3336, 3429]
  line "P1: STC (8.0+0.08s)" [2817, 3033]
  line "P1: LTC (60.0+0.60s)" [3116, 3325]
  line "P1: VLTC (2m24s+1.12s)" [3183, 3387]
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
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3429 | 25 | 402 | 48% | 3441 | 73% |
|  |  | T1 | 3407 | 33 | 222 | 50% | 3403 | 80% |
|  |  | P1 | 3387 | 32 | 230 | 51% | 3383 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3368 | 25 | 400 | 50% | 3367 | 73% |
|  |  | T1 | 3351 | 32 | 240 | 51% | 3345 | 71% |
|  |  | P1 | 3325 | 28 | 324 | 48% | 3337 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3040 | 31 | 308 | 53% | 3016 | 47% |
|  |  | P1 | 3033 | 32 | 286 | 52% | 3015 | 50% |
|  |  | E1 | 2971 | 27 | 412 | 47% | 2996 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3279 | 27 | 350 | 53% | 3249 | 67% |
|  |  | P1 | 3183 | 107 | 28 | 57% | 3054 | 43% |
|  |  | E1 | 3336 | 69 | 64 | 45% | 3336 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3202 | 27 | 360 | 53% | 3177 | 62% |
|  |  | P1 | 3116 | 81 | 40 | 58% | 3040 | 65% |
|  |  | E1 | 3245 | 61 | 72 | 51% | 3245 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2896 | 29 | 364 | 50% | 2893 | 46% |
|  |  | P1 | 2817 | 79 | 60 | 49% | 2762 | 32% |
|  |  | E1 | 2770 | 58 | 94 | 51% | 2768 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2807 | 44 | 162 | 47% | 2831 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2647 | 45 | 156 | 49% | 2655 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2236 | 52 | 124 | 48% | 2257 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2909 | 24 | 510 | 47% | 2936 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2839 | 27 | 434 | 50% | 2840 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2476 | 25 | 540 | 48% | 2498 | 29% |