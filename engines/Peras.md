# Engine: Peras

Author: Jesse Sissala

Home: https://github.com/FirePlank/Peras

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3256<sub>(-25) | 3537<sub>(+23) | 3603<sub>(+27) |  |
| 3.0.0 | 2026-09-13 | 3281 | 3514 | 3576 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3247<sub>(-15) | 3482<sub>(-5) | 3549<sub>(+47) |  |
| 3.0.0 | 2026-09-13 | 3262 | 3487 | 3502 |  |
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

Generated: 2026-11-19 05:41:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "3.6.1"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3281, 3256]
  line "E1: LTC (60.0+0.60s)" [3514, 3537]
  line "E1: VLTC (2m24s+1.12s)" [3576, 3603]
  line "P1: STC (8.0+0.08s)" [3262, 3247]
  line "P1: LTC (60.0+0.60s)" [3487, 3482]
  line "P1: VLTC (2m24s+1.12s)" [3502, 3549]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3549 | 41 | 138 | 53% | 3533 | 85% |
|  |  | E1 | 3603 | 35 | 192 | 51% | 3602 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3482 | 46 | 108 | 51% | 3474 | 85% |
|  |  | E1 | 3537 | 27 | 316 | 47% | 3555 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3256 | 28 | 336 | 49% | 3264 | 63% |
|  |  | P1 | 3247 | 31 | 272 | 45% | 3279 | 69% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3521 | 30 | 272 | 52% | 3498 | 79% |
|  |  | P1 | 3502 | 36 | 184 | 48% | 3515 | 82% |
|  |  | E1 | 3576 | 31 | 244 | 48% | 3591 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3488 | 34 | 216 | 52% | 3464 | 78% |
|  |  | P1 | 3487 | 36 | 188 | 48% | 3497 | 79% |
|  |  | E1 | 3514 | 30 | 264 | 48% | 3529 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3283 | 33 | 240 | 52% | 3259 | 62% |
|  |  | P1 | 3262 | 35 | 220 | 48% | 3274 | 57% |
|  |  | E1 | 3281 | 29 | 316 | 48% | 3294 | 60% |