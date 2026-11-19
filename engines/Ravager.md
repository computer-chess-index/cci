# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3357<sub>(+413) | 3600<sub>(+305) | 3648<sub>(+212) |  |
| 3.3.0 | 2026-10-09 | 2944<sub>(+414) | 3295<sub>(+317) | 3436<sub>(+323) |  |
| 2.0 | 2026-08-23 | 2530 | 2978 | 3113 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3356<sub>(+359) | 3582<sub>(+289) | 3582<sub>(+193) |  |
| 3.3.0 | 2026-10-09 | 2997<sub>(+358) | 3293<sub>(+261) | 3389<sub>(+210) |  |
| 2.0 | 2026-08-23 | 2639 | 3032 | 3179 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-08-23 | 2757 | 3109 | 3220 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ravager+<version>&body=###%20Engine%20name%0ARavager%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-19 05:42:11

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3700
  line "E1: STC (8.0+0.08s)" [2530, 2944, 3357]
  line "E1: LTC (60.0+0.60s)" [2978, 3295, 3600]
  line "E1: VLTC (2m24s+1.12s)" [3113, 3436, 3648]
  line "P1: STC (8.0+0.08s)" [2639, 2997, 3356]
  line "P1: LTC (60.0+0.60s)" [3032, 3293, 3582]
  line "P1: VLTC (2m24s+1.12s)" [3179, 3389, 3582]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3582 | 39 | 160 | 55% | 3548 | 81% |
|  |  | E1 | 3648 | 30 | 262 | 48% | 3657 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3582 | 38 | 160 | 48% | 3595 | 81% |
|  |  | E1 | 3600 | 32 | 230 | 53% | 3573 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3356 | 41 | 152 | 53% | 3328 | 72% |
|  |  | E1 | 3357 | 27 | 362 | 55% | 3317 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3389 | 43 | 138 | 53% | 3366 | 70% |
|  |  | E1 | 3436 | 32 | 244 | 50% | 3434 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3293 | 28 | 334 | 57% | 3244 | 68% |
|  |  | E1 | 3295 | 29 | 312 | 54% | 3264 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2997 | 35 | 240 | 50% | 2978 | 55% |
|  |  | E1 | 2944 | 34 | 258 | 53% | 2923 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3179 | 37 | 204 | 49% | 3191 | 54% |
|  |  | E1 | 3113 | 30 | 302 | 44% | 3163 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  |  | P1 | 3032 | 39 | 184 | 48% | 3046 | 52% |
|  |  | E1 | 2978 | 30 | 322 | 42% | 3042 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2639 | 37 | 216 | 48% | 2650 | 43% |
|  |  | E1 | 2530 | 35 | 298 | 39% | 2649 | 26% |