# Engine: Pawnstar

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/pawnstar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 2866<sub>(-22) | 3204<sub>(-44) | 3320<sub>(+44) |  |
| 1.0.0 | 2026-10-15 | 2888<sub>(+83) | 3248<sub>(+81) | 3276<sub>(+6) |  |
| 0.13.593 | 2026-06-30 | 2805 | 3167 | 3270 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3008<sub>(-34) | 3389<sub>(+19) | 3441<sub>(-19) |  |
| 1.0.0 | 2026-10-15 | 3042<sub>(+72) | 3370<sub>(-12) | 3460<sub>(+66) |  |
| 0.13.593 | 2026-06-30 | 2970 | 3382 | 3394 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.13.593 | 2026-06-30 | 2831 | 3125 | 3200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pawnstar+<version>&body=###%20Engine%20name%0APawnstar%0A%0A###%20Version%0A0.13.593" target="_blank">Submit new version</a>

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

Generated: 2026-11-06 05:40:28

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.13.593", "1.0.0", "2.1.0"]
  y-axis "Elo Rating" 2800 --> 3500
  line "E1: STC (8.0+0.08s)" [2805, 2888, 2866]
  line "E1: LTC (60.0+0.60s)" [3167, 3248, 3204]
  line "E1: VLTC (2m24s+1.12s)" [3270, 3276, 3320]
  line "P1: STC (8.0+0.08s)" [2970, 3042, 3008]
  line "P1: LTC (60.0+0.60s)" [3382, 3370, 3389]
  line "P1: VLTC (2m24s+1.12s)" [3394, 3460, 3441]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3441 | 35 | 216 | 47% | 3461 | 65% |
|  |  | E1 | 3320 | 28 | 336 | 53% | 3297 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3389 | 41 | 152 | 49% | 3395 | 63% |
|  |  | E1 | 3204 | 29 | 340 | 54% | 3174 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3008 | 38 | 212 | 45% | 3054 | 40% |
|  |  | E1 | 2866 | 37 | 228 | 49% | 2874 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3276 | 34 | 232 | 50% | 3275 | 62% |
|  |  | P1 | 3460 | 40 | 160 | 50% | 3463 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3248 | 32 | 276 | 51% | 3240 | 53% |
|  |  | P1 | 3370 | 39 | 180 | 50% | 3366 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3042 | 39 | 198 | 52% | 3024 | 45% |
|  |  | E1 | 2888 | 28 | 394 | 47% | 2912 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.13.593 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3200 | 26 | 432 | 50% | 3189 | 53% |
|  |  | P1 | 3394 | 35 | 220 | 46% | 3424 | 56% |
|  |  | E1 | 3270 | 30 | 312 | 47% | 3290 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3125 | 26 | 450 | 52% | 3089 | 48% |
|  |  | P1 | 3382 | 34 | 248 | 52% | 3363 | 49% |
|  |  | E1 | 3167 | 31 | 300 | 48% | 3186 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2831 | 28 | 436 | 49% | 2822 | 32% |
|  |  | P1 | 2970 | 41 | 192 | 46% | 3009 | 35% |
|  |  | E1 | 2805 | 30 | 382 | 46% | 2843 | 31% |