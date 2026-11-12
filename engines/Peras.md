# Engine: Peras

Author: Jesse Sissala

Home: https://github.com/FirePlank/Peras

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3313<sub>(-26) | 3598<sub>(+29) | 3657<sub>(+24) |  |
| 3.0.0 | 2026-09-13 | 3339 | 3569 | 3633 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3479<sub>(-1) | 3694<sub>(-4) | 3757<sub>(+44) |  |
| 3.0.0 | 2026-09-13 | 3480 | 3698 | 3713 |  |
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

Generated: 2026-11-12 05:40:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "3.6.1"]
  y-axis "Elo Rating" 3300 --> 3800
  line "E1: STC (8.0+0.08s)" [3339, 3313]
  line "E1: LTC (60.0+0.60s)" [3569, 3598]
  line "E1: VLTC (2m24s+1.12s)" [3633, 3657]
  line "P1: STC (8.0+0.08s)" [3480, 3479]
  line "P1: LTC (60.0+0.60s)" [3698, 3694]
  line "P1: VLTC (2m24s+1.12s)" [3713, 3757]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3657 | 35 | 188 | 50% | 3657 | 81% |
|  |  | P1 | 3757 | 42 | 130 | 52% | 3742 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3598 | 29 | 276 | 48% | 3607 | 82% |
|  |  | P1 | 3694 | 46 | 108 | 51% | 3686 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3479 | 33 | 224 | 48% | 3495 | 70% |
|  |  | E1 | 3313 | 29 | 316 | 49% | 3317 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3713 | 36 | 184 | 48% | 3726 | 82% |
|  |  | E1 | 3633 | 32 | 224 | 48% | 3648 | 81% |
|  |  | T1 | 3521 | 30 | 272 | 52% | 3498 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3698 | 36 | 188 | 48% | 3708 | 79% |
|  |  | E1 | 3569 | 31 | 248 | 47% | 3588 | 78% |
|  |  | T1 | 3488 | 34 | 216 | 52% | 3464 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3480 | 37 | 196 | 49% | 3488 | 59% |
|  |  | E1 | 3339 | 31 | 288 | 49% | 3345 | 60% |
|  |  | T1 | 3283 | 33 | 240 | 52% | 3259 | 62% |