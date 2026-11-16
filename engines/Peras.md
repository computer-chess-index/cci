# Engine: Peras

Author: Jesse Sissala

Home: https://github.com/FirePlank/Peras

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3264<sub>(-25) | 3549<sub>(+27) | 3613<sub>(+27) |  |
| 3.0.0 | 2026-09-13 | 3289 | 3522 | 3586 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3254<sub>(-5) | 3478<sub>(-5) | 3545<sub>(+46) |  |
| 3.0.0 | 2026-09-13 | 3259 | 3483 | 3499 |  |
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

Generated: 2026-11-16 05:40:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "3.6.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3289, 3264]
  line "E1: LTC (60.0+0.60s)" [3522, 3549]
  line "E1: VLTC (2m24s+1.12s)" [3586, 3613]
  line "P1: STC (8.0+0.08s)" [3259, 3254]
  line "P1: LTC (60.0+0.60s)" [3483, 3478]
  line "P1: VLTC (2m24s+1.12s)" [3499, 3545]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3545 | 41 | 138 | 53% | 3529 | 85% |
|  |  | E1 | 3613 | 35 | 192 | 51% | 3610 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3478 | 46 | 108 | 51% | 3471 | 85% |
|  |  | E1 | 3549 | 28 | 296 | 48% | 3560 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3254 | 33 | 236 | 46% | 3279 | 69% |
|  |  | E1 | 3264 | 29 | 324 | 49% | 3270 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3521 | 30 | 272 | 52% | 3498 | 79% |
|  |  | P1 | 3499 | 36 | 184 | 48% | 3511 | 82% |
|  |  | E1 | 3586 | 31 | 240 | 48% | 3599 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3488 | 34 | 216 | 52% | 3464 | 78% |
|  |  | P1 | 3483 | 36 | 188 | 48% | 3494 | 79% |
|  |  | E1 | 3522 | 30 | 264 | 48% | 3537 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3283 | 33 | 240 | 52% | 3259 | 62% |
|  |  | P1 | 3259 | 36 | 204 | 49% | 3270 | 59% |
|  |  | E1 | 3289 | 29 | 312 | 49% | 3299 | 60% |