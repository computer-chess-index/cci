# Engine: Simplechess

Author: Sam Moore

Home: https://github.com/LinkLikesLattes/SimpleChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3210<sub>(+85) | 3476<sub>(+81) | 3515<sub>(+37) |  |
| 3.6.0 | 2026-10-19 | 3125 | 3395 | 3478 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3209<sub>(+55) | 3402<sub>(+20) | 3455<sub>(+22) |  |
| 3.6.0 | 2026-10-19 | 3154 | 3382 | 3433 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2026-10-19 | 3154 | 3382 | 3433 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Simplechess+<version>&body=###%20Engine%20name%0ASimplechess%0A%0A###%20Version%0A3.7.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-19 05:43:17

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3125, 3210]
  line "E1: LTC (60.0+0.60s)" [3395, 3476]
  line "E1: VLTC (2m24s+1.12s)" [3478, 3515]
  line "P1: STC (8.0+0.08s)" [3154, 3209]
  line "P1: LTC (60.0+0.60s)" [3382, 3402]
  line "P1: VLTC (2m24s+1.12s)" [3433, 3455]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3515 | 34 | 208 | 50% | 3511 | 73% |
|  |  | P1 | 3455 | 44 | 124 | 50% | 3455 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3476 | 31 | 272 | 51% | 3472 | 69% |
|  |  | P1 | 3402 | 38 | 172 | 47% | 3425 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3209 | 34 | 218 | 48% | 3227 | 66% |
|  |  | E1 | 3210 | 27 | 368 | 51% | 3200 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3433 | 39 | 176 | 59% | 3320 | 68% |
|  |  | E1 | 3478 | 31 | 292 | 54% | 3402 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3382 | 37 | 204 | 57% | 3245 | 62% |
|  |  | E1 | 3395 | 28 | 362 | 52% | 3324 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3154 | 37 | 248 | 57% | 2950 | 42% |
|  |  | E1 | 3125 | 31 | 340 | 56% | 2943 | 43% |