# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3360<sub>(+414) | 3603<sub>(+300) | 3645<sub>(+204) |  |
| 3.3.0 | 2026-10-09 | 2946<sub>(+411) | 3303<sub>(+319) | 3441<sub>(+324) |  |
| 2.0 | 2026-08-23 | 2535 | 2984 | 3117 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3389<sub>(+364) | 3599<sub>(+277) | 3600<sub>(+187) |  |
| 3.3.0 | 2026-10-09 | 3025<sub>(+359) | 3322<sub>(+260) | 3413<sub>(+204) |  |
| 2.0 | 2026-08-23 | 2666 | 3062 | 3209 |  |
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

Generated: 2026-11-25 05:42:11

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3700
  line "E1: STC (8.0+0.08s)" [2535, 2946, 3360]
  line "E1: LTC (60.0+0.60s)" [2984, 3303, 3603]
  line "E1: VLTC (2m24s+1.12s)" [3117, 3441, 3645]
  line "P1: STC (8.0+0.08s)" [2666, 3025, 3389]
  line "P1: LTC (60.0+0.60s)" [3062, 3322, 3599]
  line "P1: VLTC (2m24s+1.12s)" [3209, 3413, 3600]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3600 | 39 | 160 | 55% | 3567 | 81% |
|  |  | E1 | 3645 | 28 | 294 | 48% | 3659 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3599 | 38 | 164 | 47% | 3613 | 81% |
|  |  | E1 | 3603 | 31 | 246 | 53% | 3580 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3360 | 26 | 394 | 54% | 3325 | 61% |
|  |  | P1 | 3389 | 38 | 172 | 53% | 3359 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3413 | 41 | 150 | 53% | 3391 | 71% |
|  |  | E1 | 3441 | 32 | 244 | 50% | 3438 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3322 | 27 | 346 | 57% | 3275 | 68% |
|  |  | E1 | 3303 | 27 | 340 | 54% | 3272 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3025 | 34 | 256 | 50% | 3009 | 53% |
|  |  | E1 | 2946 | 33 | 274 | 52% | 2930 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3209 | 37 | 204 | 49% | 3221 | 54% |
|  |  | E1 | 3117 | 30 | 302 | 44% | 3167 | 56% |
|  |  | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3062 | 39 | 184 | 48% | 3075 | 52% |
|  |  | E1 | 2984 | 30 | 322 | 42% | 3047 | 56% |
|  |  | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2535 | 35 | 298 | 39% | 2655 | 26% |
|  |  | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2666 | 37 | 216 | 48% | 2677 | 43% |