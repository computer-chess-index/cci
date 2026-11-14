# Engine: Peras

Author: Jesse Sissala

Home: https://github.com/FirePlank/Peras

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3252<sub>(-26) | 3538<sub>(+28) | 3599<sub>(+24) |  |
| 3.0.0 | 2026-09-13 | 3278 | 3510 | 3575 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.1 | 2026-10-13 | 3271<sub>(-1) | 3488<sub>(-4) | 3552<sub>(+43) |  |
| 3.0.0 | 2026-09-13 | 3272 | 3492 | 3509 |  |
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

Generated: 2026-11-14 05:40:43

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "3.6.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "E1: STC (8.0+0.08s)" [3278, 3252]
  line "E1: LTC (60.0+0.60s)" [3510, 3538]
  line "E1: VLTC (2m24s+1.12s)" [3575, 3599]
  line "P1: STC (8.0+0.08s)" [3272, 3271]
  line "P1: LTC (60.0+0.60s)" [3492, 3488]
  line "P1: VLTC (2m24s+1.12s)" [3509, 3552]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3599 | 35 | 188 | 50% | 3599 | 81% |
|  |  | P1 | 3552 | 42 | 130 | 52% | 3538 | 85% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3538 | 29 | 276 | 48% | 3548 | 82% |
|  |  | P1 | 3488 | 46 | 108 | 51% | 3480 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3252 | 29 | 324 | 49% | 3259 | 63% |
|  |  | P1 | 3271 | 33 | 228 | 47% | 3290 | 70% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3521 | 30 | 272 | 52% | 3498 | 79% |
|  |  | P1 | 3509 | 36 | 184 | 48% | 3521 | 82% |
|  |  | E1 | 3575 | 32 | 224 | 48% | 3588 | 81% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3492 | 36 | 188 | 48% | 3503 | 79% |
|  |  | E1 | 3510 | 31 | 252 | 47% | 3528 | 78% |
|  |  | T1 | 3488 | 34 | 216 | 52% | 3464 | 78% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3272 | 36 | 204 | 49% | 3283 | 59% |
|  |  | E1 | 3278 | 30 | 300 | 49% | 3286 | 60% |
|  |  | T1 | 3283 | 33 | 240 | 52% | 3259 | 62% |