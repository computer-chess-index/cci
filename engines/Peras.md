# Engine: Peras

Author: Jesse Sissala

Home: https://github.com/FirePlank/Peras

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3329<sub>(-18) | 3603<sub>(+25) | 3663<sub>(+22) |  |
| 3.0.0 | 2026-09-13 | 3347 | 3578 | 3641 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3451<sub>(0) | 3664<sub>(-8) | 3727<sub>(+40) |  |
| 3.0.0 | 2026-09-13 | 3451 | 3672 | 3687 |  |
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

Generated: 2026-11-02 05:41:14

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "3.6.1"]
  y-axis "Elo Rating" 3300 --> 3800
  line "E1: STC (8.0+0.08s)" [3347, 3329]
  line "E1: LTC (60.0+0.60s)" [3578, 3603]
  line "E1: VLTC (2m24s+1.12s)" [3641, 3663]
  line "P1: STC (8.0+0.08s)" [3451, 3451]
  line "P1: LTC (60.0+0.60s)" [3672, 3664]
  line "P1: VLTC (2m24s+1.12s)" [3687, 3727]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3663 | 37 | 176 | 50% | 3664 | 81% |
|  |  | P1 | 3727 | 45 | 112 | 52% | 3714 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3603 | 31 | 252 | 48% | 3615 | 81% |
|  |  | P1 | 3664 | 49 | 96 | 51% | 3659 | 84% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3451 | 35 | 200 | 48% | 3463 | 71% |
|  |  | E1 | 3329 | 35 | 212 | 50% | 3333 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3687 | 36 | 184 | 48% | 3699 | 82% |
|  |  | E1 | 3641 | 33 | 220 | 48% | 3654 | 81% |
|  |  | T1 | 3521 | 30 | 272 | 52% | 3498 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3672 | 36 | 188 | 48% | 3683 | 79% |
|  |  | E1 | 3578 | 31 | 248 | 47% | 3596 | 78% |
|  |  | T1 | 3488 | 34 | 216 | 52% | 3464 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3451 | 37 | 196 | 49% | 3459 | 59% |
|  |  | E1 | 3347 | 31 | 288 | 49% | 3353 | 60% |
|  |  | T1 | 3283 | 33 | 240 | 52% | 3259 | 62% |