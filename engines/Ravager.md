# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3364<sub>(+414) | 3611<sub>(+308) | 3657<sub>(+212) |  |
| 3.3.0 | 2026-10-09 | 2950<sub>(+415) | 3303<sub>(+318) | 3445<sub>(+324) |  |
| 2.0 | 2026-08-23 | 2535 | 2985 | 3121 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3353<sub>(+361) | 3582<sub>(+293) | 3579<sub>(+193) |  |
| 3.3.0 | 2026-10-09 | 2992<sub>(+361) | 3289<sub>(+262) | 3386<sub>(+211) |  |
| 2.0 | 2026-08-23 | 2631 | 3027 | 3175 |  |
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

Generated: 2026-11-17 05:42:00

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3700
  line "E1: STC (8.0+0.08s)" [2535, 2950, 3364]
  line "E1: LTC (60.0+0.60s)" [2985, 3303, 3611]
  line "E1: VLTC (2m24s+1.12s)" [3121, 3445, 3657]
  line "P1: STC (8.0+0.08s)" [2631, 2992, 3353]
  line "P1: LTC (60.0+0.60s)" [3027, 3289, 3582]
  line "P1: VLTC (2m24s+1.12s)" [3175, 3386, 3579]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3579 | 39 | 160 | 55% | 3545 | 81% |
|  |  | E1 | 3657 | 30 | 262 | 48% | 3668 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3582 | 39 | 152 | 48% | 3592 | 81% |
|  |  | E1 | 3611 | 33 | 226 | 54% | 3583 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3353 | 41 | 152 | 53% | 3325 | 72% |
|  |  | E1 | 3364 | 27 | 358 | 55% | 3324 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3386 | 43 | 138 | 53% | 3363 | 70% |
|  |  | E1 | 3445 | 32 | 240 | 50% | 3443 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3289 | 28 | 334 | 57% | 3240 | 68% |
|  |  | E1 | 3303 | 29 | 312 | 54% | 3272 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2992 | 35 | 240 | 50% | 2974 | 55% |
|  |  | E1 | 2950 | 34 | 258 | 53% | 2928 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3175 | 37 | 204 | 49% | 3187 | 54% |
|  |  | E1 | 3121 | 30 | 302 | 44% | 3171 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  |  | P1 | 3027 | 39 | 184 | 48% | 3040 | 52% |
|  |  | E1 | 2985 | 30 | 322 | 42% | 3048 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2631 | 37 | 216 | 48% | 2643 | 43% |
|  |  | E1 | 2535 | 35 | 298 | 39% | 2655 | 26% |