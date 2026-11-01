# Engine: Peras

Author: Jesse Sissala

Home: https://github.com/FirePlank/Peras

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3339<sub>(-16) | 3614<sub>(+26) | 3676<sub>(+23) |  |
| 3.0.0 | 2026-09-13 | 3355 | 3588 | 3653 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3472<sub>(+2) | 3683<sub>(-8) | 3746<sub>(+40) |  |
| 3.0.0 | 2026-09-13 | 3470 | 3691 | 3706 |  |
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

Generated: 2026-11-01 05:41:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "3.6.1"]
  y-axis "Elo Rating" 3300 --> 3800
  line "E1: STC (8.0+0.08s)" [3355, 3339]
  line "E1: LTC (60.0+0.60s)" [3588, 3614]
  line "E1: VLTC (2m24s+1.12s)" [3653, 3676]
  line "P1: STC (8.0+0.08s)" [3470, 3472]
  line "P1: LTC (60.0+0.60s)" [3691, 3683]
  line "P1: VLTC (2m24s+1.12s)" [3706, 3746]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3746 | 45 | 112 | 52% | 3731 | 87% |
|  |  | E1 | 3676 | 37 | 168 | 51% | 3673 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3614 | 31 | 248 | 48% | 3626 | 81% |
|  |  | P1 | 3683 | 50 | 92 | 51% | 3677 | 84% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3339 | 35 | 212 | 50% | 3341 | 63% |
|  |  | P1 | 3472 | 36 | 192 | 48% | 3482 | 71% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3521 | 30 | 272 | 52% | 3498 | 79% |
|  |  | P1 | 3706 | 36 | 184 | 48% | 3718 | 82% |
|  |  | E1 | 3653 | 33 | 220 | 48% | 3667 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3488 | 34 | 216 | 52% | 3464 | 78% |
|  |  | P1 | 3691 | 36 | 188 | 48% | 3700 | 79% |
|  |  | E1 | 3588 | 31 | 248 | 47% | 3607 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3470 | 37 | 196 | 49% | 3478 | 59% |
|  |  | E1 | 3355 | 31 | 288 | 49% | 3362 | 60% |
|  |  | T1 | 3283 | 33 | 240 | 52% | 3259 | 62% |