# Engine: Peras

Author: Jesse Sissala

Home: https://github.com/FirePlank/Peras

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3326<sub>(-27) | 3613<sub>(+29) | 3672<sub>(+24) |  |
| 3.0.0 | 2026-09-13 | 3353 | 3584 | 3648 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3467<sub>(+2) | 3680<sub>(-7) | 3744<sub>(+42) |  |
| 3.0.0 | 2026-09-13 | 3465 | 3687 | 3702 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-09-13 | 3283 | 3488 | 3521 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Peras+<version>&body=###%20Engine%20name%0APeras%0A%0A###%20Version%0A3.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-08 05:40:32

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "3.6.1"]
  y-axis "Elo Rating" 3300 --> 3800
  line "E1: STC (8.0+0.08s)" [3353, 3326]
  line "E1: LTC (60.0+0.60s)" [3584, 3613]
  line "E1: VLTC (2m24s+1.12s)" [3648, 3672]
  line "P1: STC (8.0+0.08s)" [3465, 3467]
  line "P1: LTC (60.0+0.60s)" [3687, 3680]
  line "P1: VLTC (2m24s+1.12s)" [3702, 3744]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3744 | 43 | 122 | 52% | 3730 | 84% |
|  |  | E1 | 3672 | 36 | 184 | 50% | 3671 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3680 | 47 | 104 | 51% | 3673 | 85% |
|  |  | E1 | 3613 | 30 | 264 | 48% | 3622 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3467 | 35 | 208 | 48% | 3479 | 71% |
|  |  | E1 | 3326 | 32 | 264 | 48% | 3337 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3648 | 33 | 220 | 48% | 3661 | 81% |
|  |  | T1 | 3521 | 30 | 272 | 52% | 3498 | 79% |
|  |  | P1 | 3702 | 36 | 184 | 48% | 3714 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3584 | 31 | 248 | 47% | 3603 | 78% |
|  |  | T1 | 3488 | 34 | 216 | 52% | 3464 | 78% |
|  |  | P1 | 3687 | 36 | 188 | 48% | 3696 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3353 | 31 | 288 | 49% | 3360 | 60% |
|  |  | T1 | 3283 | 33 | 240 | 52% | 3259 | 62% |
|  |  | P1 | 3465 | 37 | 196 | 49% | 3474 | 59% |