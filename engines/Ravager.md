# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3362<sub>(+418) | 3610<sub>(+309) | 3656<sub>(+215) |  |
| 3.3.0 | 2026-10-09 | 2944<sub>(+409) | 3301<sub>(+316) | 3441<sub>(+321) |  |
| 2.0 | 2026-08-23 | 2535 | 2985 | 3120 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3353<sub>(+367) | 3579<sub>(+290) | 3578<sub>(+192) |  |
| 3.3.0 | 2026-10-09 | 2986<sub>(+359) | 3289<sub>(+268) | 3386<sub>(+212) |  |
| 2.0 | 2026-08-23 | 2627 | 3021 | 3174 |  |
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

Generated: 2026-11-16 05:41:49

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3700
  line "E1: STC (8.0+0.08s)" [2535, 2944, 3362]
  line "E1: LTC (60.0+0.60s)" [2985, 3301, 3610]
  line "E1: VLTC (2m24s+1.12s)" [3120, 3441, 3656]
  line "P1: STC (8.0+0.08s)" [2627, 2986, 3353]
  line "P1: LTC (60.0+0.60s)" [3021, 3289, 3579]
  line "P1: VLTC (2m24s+1.12s)" [3174, 3386, 3578]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3578 | 39 | 160 | 55% | 3544 | 81% |
|  |  | E1 | 3656 | 30 | 262 | 48% | 3667 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3579 | 39 | 152 | 48% | 3590 | 81% |
|  |  | E1 | 3610 | 33 | 222 | 54% | 3582 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3362 | 28 | 352 | 55% | 3321 | 62% |
|  |  | P1 | 3353 | 41 | 152 | 53% | 3325 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3386 | 43 | 138 | 53% | 3363 | 70% |
|  |  | E1 | 3441 | 32 | 236 | 49% | 3440 | 77% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3289 | 28 | 330 | 57% | 3240 | 68% |
|  |  | E1 | 3301 | 29 | 304 | 54% | 3270 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2986 | 35 | 240 | 50% | 2969 | 55% |
|  |  | E1 | 2944 | 34 | 250 | 52% | 2927 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3174 | 37 | 204 | 49% | 3185 | 54% |
|  |  | E1 | 3120 | 30 | 302 | 44% | 3170 | 56% |
|  |  | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3021 | 39 | 184 | 48% | 3035 | 52% |
|  |  | E1 | 2985 | 30 | 322 | 42% | 3047 | 56% |
|  |  | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2535 | 35 | 298 | 39% | 2654 | 26% |
|  |  | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2627 | 37 | 216 | 48% | 2638 | 43% |