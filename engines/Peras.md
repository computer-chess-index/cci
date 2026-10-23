# Engine: Peras

Author: Jesse Sissala

Home: https://github.com/FirePlank/Peras

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3297<sub>(-19) | 3573<sub>(+24) | 3636<sub>(+22) |  |
| 3.0.0 | 2026-09-13 | 3316 | 3549 | 3614 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3417<sub>(+4) | 3619<sub>(-13) | 3681<sub>(+33) |  |
| 3.0.0 | 2026-09-13 | 3413 | 3632 | 3648 |  |
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

Generated: 2026-10-23 04:41:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "3.6.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3316, 3297]
  line "E1: LTC (60.0+0.60s)" [3549, 3573]
  line "E1: VLTC (2m24s+1.12s)" [3614, 3636]
  line "P1: STC (8.0+0.08s)" [3413, 3417]
  line "P1: LTC (60.0+0.60s)" [3632, 3619]
  line "P1: VLTC (2m24s+1.12s)" [3648, 3681]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3681 | 53 | 80 | 52% | 3671 | 86% |
|  |  | E1 | 3636 | 39 | 152 | 50% | 3633 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3619 | 51 | 88 | 50% | 3618 | 84% |
|  |  | E1 | 3573 | 32 | 232 | 48% | 3588 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3417 | 37 | 184 | 49% | 3425 | 71% |
|  |  | E1 | 3297 | 36 | 200 | 50% | 3301 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3614 | 33 | 220 | 48% | 3626 | 81% |
|  |  | T1 | 3521 | 30 | 272 | 52% | 3498 | 79% |
|  |  | P1 | 3648 | 36 | 184 | 48% | 3661 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3549 | 31 | 248 | 47% | 3568 | 78% |
|  |  | T1 | 3488 | 34 | 216 | 52% | 3464 | 78% |
|  |  | P1 | 3632 | 36 | 188 | 48% | 3642 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3316 | 31 | 288 | 49% | 3321 | 60% |
|  |  | T1 | 3283 | 33 | 240 | 52% | 3259 | 62% |
|  |  | P1 | 3413 | 37 | 196 | 49% | 3421 | 59% |