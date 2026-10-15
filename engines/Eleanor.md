# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3039 | 3378 | 3395 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3260 | 3538 | 3565 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3177<sub>(+45) | 3403<sub>(+19) | 3434<sub>(+25) |  |
| 4.0 | 2026-04-18 | 3132<sub>(+94) | 3384<sub>(+120) | 3409<sub>(+74) |  |
| 3.0 | 2025-12-05 | 3038 | 3264 | 3335 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Eleanor+<version>&body=###%20Engine%20name%0AEleanor%0A%0A###%20Version%0A4.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-15 04:38:26

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "T1: STC (8.0+0.08s)" [3038, 3132, 3177]
  line "T1: LTC (60.0+0.60s)" [3264, 3384, 3403]
  line "T1: VLTC (2m24s+1.12s)" [3335, 3409, 3434]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3395 | 34 | 246 | 58% | 3263 | 60% |
|  |  | T1 | 3434 | 22 | 468 | 49% | 3438 | 82% |
|  |  | P1 | 3565 | 34 | 240 | 60% | 3406 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3378 | 39 | 200 | 61% | 3198 | 56% |
|  |  | T1 | 3403 | 24 | 414 | 50% | 3406 | 77% |
|  |  | P1 | 3538 | 41 | 160 | 53% | 3491 | 65% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3177 | 25 | 440 | 51% | 3166 | 60% |
|  |  | P1 | 3260 | 35 | 224 | 46% | 3289 | 59% |
|  |  | E1 | 3039 | 31 | 296 | 44% | 3086 | 54% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3409 | 29 | 284 | 50% | 3409 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3384 | 30 | 280 | 50% | 3382 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3132 | 32 | 264 | 50% | 3129 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3335 | 26 | 368 | 50% | 3336 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3264 | 27 | 358 | 52% | 3236 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3038 | 24 | 496 | 52% | 3008 | 50% |