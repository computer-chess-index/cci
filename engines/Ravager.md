# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3359<sub>(+413) | 3605<sub>(+308) | 3646<sub>(+208) |  |
| 3.3.0 | 2026-10-09 | 2946<sub>(+415) | 3297<sub>(+318) | 3438<sub>(+324) |  |
| 2.0 | 2026-08-23 | 2531 | 2979 | 3114 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3372<sub>(+360) | 3587<sub>(+278) | 3590<sub>(+188) |  |
| 3.3.0 | 2026-10-09 | 3012<sub>(+357) | 3309<sub>(+258) | 3402<sub>(+204) |  |
| 2.0 | 2026-08-23 | 2655 | 3051 | 3198 |  |
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

Generated: 2026-11-23 05:41:58

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3700
  line "E1: STC (8.0+0.08s)" [2531, 2946, 3359]
  line "E1: LTC (60.0+0.60s)" [2979, 3297, 3605]
  line "E1: VLTC (2m24s+1.12s)" [3114, 3438, 3646]
  line "P1: STC (8.0+0.08s)" [2655, 3012, 3372]
  line "P1: LTC (60.0+0.60s)" [3051, 3309, 3587]
  line "P1: VLTC (2m24s+1.12s)" [3198, 3402, 3590]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3590 | 39 | 160 | 55% | 3556 | 81% |
|  |  | E1 | 3646 | 28 | 290 | 48% | 3659 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3587 | 38 | 164 | 47% | 3602 | 81% |
|  |  | E1 | 3605 | 31 | 242 | 53% | 3580 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3372 | 39 | 164 | 53% | 3345 | 71% |
|  |  | E1 | 3359 | 27 | 370 | 55% | 3321 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3402 | 42 | 146 | 53% | 3380 | 71% |
|  |  | E1 | 3438 | 32 | 244 | 50% | 3437 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3297 | 29 | 312 | 54% | 3267 | 68% |
|  |  | P1 | 3309 | 28 | 338 | 57% | 3262 | 67% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2946 | 34 | 258 | 53% | 2924 | 49% |
|  |  | P1 | 3012 | 34 | 248 | 49% | 2998 | 54% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  |  | P1 | 3198 | 37 | 204 | 49% | 3209 | 54% |
|  |  | E1 | 3114 | 30 | 302 | 44% | 3164 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  |  | P1 | 3051 | 39 | 184 | 48% | 3065 | 52% |
|  |  | E1 | 2979 | 30 | 322 | 42% | 3043 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2655 | 37 | 216 | 48% | 2666 | 43% |
|  |  | E1 | 2531 | 35 | 298 | 39% | 2650 | 26% |