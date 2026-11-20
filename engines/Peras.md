# Engine: Peras

Author: Jesse Sissala

Home: https://github.com/FirePlank/Peras

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3260<sub>(-26) | 3544<sub>(+25) | 3609<sub>(+27) |  |
| 3.0.0 | 2026-09-13 | 3286 | 3519 | 3582 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3249<sub>(-17) | 3484<sub>(-6) | 3551<sub>(+46) |  |
| 3.0.0 | 2026-09-13 | 3266 | 3490 | 3505 |  |
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

Generated: 2026-11-20 05:41:01

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "3.6.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3286, 3260]
  line "E1: LTC (60.0+0.60s)" [3519, 3544]
  line "E1: VLTC (2m24s+1.12s)" [3582, 3609]
  line "P1: STC (8.0+0.08s)" [3266, 3249]
  line "P1: LTC (60.0+0.60s)" [3490, 3484]
  line "P1: VLTC (2m24s+1.12s)" [3505, 3551]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3551 | 41 | 138 | 53% | 3534 | 85% |
|  |  | E1 | 3609 | 35 | 196 | 51% | 3607 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3484 | 46 | 108 | 51% | 3478 | 85% |
|  |  | E1 | 3544 | 27 | 320 | 48% | 3559 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3249 | 30 | 276 | 45% | 3283 | 68% |
|  |  | E1 | 3260 | 28 | 340 | 49% | 3270 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3582 | 31 | 244 | 48% | 3596 | 82% |
|  |  | T1 | 3521 | 30 | 272 | 52% | 3498 | 79% |
|  |  | P1 | 3505 | 36 | 184 | 48% | 3517 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3519 | 30 | 264 | 48% | 3534 | 79% |
|  |  | T1 | 3488 | 34 | 216 | 52% | 3464 | 78% |
|  |  | P1 | 3490 | 36 | 188 | 48% | 3499 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3283 | 33 | 240 | 52% | 3259 | 62% |
|  |  | P1 | 3266 | 35 | 220 | 48% | 3278 | 57% |
|  |  | E1 | 3286 | 29 | 316 | 48% | 3299 | 60% |