# Engine: Peras

Author: Jesse Sissala

Home: https://github.com/FirePlank/Peras

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3252<sub>(-33) | 3536<sub>(+27) | 3598<sub>(+26) |  |
| 3.0.0 | 2026-09-13 | 3285 | 3509 | 3572 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3262<sub>(-29) | 3505<sub>(-2) | 3571<sub>(+47) |  |
| 3.0.0 | 2026-09-13 | 3291 | 3507 | 3524 |  |
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

Generated: 2026-11-28 05:41:21

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "3.6.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "E1: STC (8.0+0.08s)" [3285, 3252]
  line "E1: LTC (60.0+0.60s)" [3509, 3536]
  line "E1: VLTC (2m24s+1.12s)" [3572, 3598]
  line "P1: STC (8.0+0.08s)" [3291, 3262]
  line "P1: LTC (60.0+0.60s)" [3507, 3505]
  line "P1: VLTC (2m24s+1.12s)" [3524, 3571]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3571 | 41 | 138 | 53% | 3555 | 85% |
|  |  | E1 | 3598 | 34 | 202 | 50% | 3598 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3505 | 45 | 112 | 51% | 3495 | 85% |
|  |  | E1 | 3536 | 26 | 340 | 48% | 3549 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3262 | 26 | 364 | 45% | 3298 | 68% |
|  |  | E1 | 3252 | 26 | 380 | 49% | 3263 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3521 | 30 | 272 | 52% | 3498 | 79% |
|  |  | P1 | 3524 | 35 | 188 | 48% | 3536 | 81% |
|  |  | E1 | 3572 | 31 | 244 | 48% | 3587 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3488 | 34 | 216 | 52% | 3464 | 78% |
|  |  | P1 | 3507 | 35 | 192 | 48% | 3517 | 79% |
|  |  | E1 | 3509 | 29 | 284 | 48% | 3525 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3283 | 33 | 240 | 52% | 3259 | 62% |
|  |  | P1 | 3291 | 33 | 240 | 49% | 3302 | 59% |
|  |  | E1 | 3285 | 29 | 332 | 49% | 3294 | 58% |