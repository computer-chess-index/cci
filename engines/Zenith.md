# Engine: Zenith

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/zenith

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-10-30 | 3056<sub>(+8) | 3357<sub>(-22) | 3433<sub>(-47) |  |
| 2.0.0 | 2026-10-15 | 3048<sub>(+174) | 3379<sub>(+212) | 3480<sub>(+148) |  |
| 1.2.198 | 2026-08-01 | 2874 | 3167 | 3332 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-10-30 | 3210<sub>(+48) | 3476<sub>(-27) | 3537<sub>(-30) |  |
| 2.0.0 | 2026-10-15 | 3162<sub>(+231) | 3503<sub>(+164) | 3567<sub>(+81) |  |
| 1.2.198 | 2026-08-01 | 2931 | 3339 | 3486 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.198 | 2026-08-01 | 3067 | 3339 | 3387 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zenith+<version>&body=###%20Engine%20name%0AZenith%0A%0A###%20Version%0A1.2.198" target="_blank">Submit new version</a>

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

Generated: 2026-11-07 05:44:05

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.198", "2.0.0", "3.0.0"]
  y-axis "Elo Rating" 2800 --> 3600
  line "E1: STC (8.0+0.08s)" [2874, 3048, 3056]
  line "E1: LTC (60.0+0.60s)" [3167, 3379, 3357]
  line "E1: VLTC (2m24s+1.12s)" [3332, 3480, 3433]
  line "P1: STC (8.0+0.08s)" [2931, 3162, 3210]
  line "P1: LTC (60.0+0.60s)" [3339, 3503, 3476]
  line "P1: VLTC (2m24s+1.12s)" [3486, 3567, 3537]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3537 | 38 | 168 | 51% | 3526 | 77% |
|  |  | E1 | 3433 | 31 | 264 | 51% | 3425 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3476 | 37 | 192 | 52% | 3457 | 62% |
|  |  | E1 | 3357 | 28 | 324 | 54% | 3330 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3210 | 42 | 148 | 48% | 3225 | 60% |
|  |  | E1 | 3056 | 37 | 214 | 50% | 3054 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3567 | 34 | 224 | 51% | 3557 | 70% |
|  |  | E1 | 3480 | 29 | 300 | 49% | 3486 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3503 | 39 | 174 | 53% | 3480 | 66% |
|  |  | E1 | 3379 | 32 | 266 | 52% | 3362 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3162 | 40 | 192 | 53% | 3131 | 44% |
|  |  | E1 | 3048 | 38 | 208 | 53% | 3017 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.198 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3332 | 29 | 326 | 41% | 3403 | 62% |
|  |  | T1 | 3387 | 31 | 272 | 51% | 3363 | 69% |
|  |  | P1 | 3486 | 33 | 252 | 44% | 3526 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3339 | 34 | 236 | 54% | 3266 | 64% |
|  |  | P1 | 3339 | 32 | 288 | 39% | 3424 | 55% |
|  |  | E1 | 3167 | 28 | 370 | 39% | 3259 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3067 | 26 | 424 | 47% | 3067 | 54% |
|  |  | P1 | 2931 | 45 | 180 | 59% | 2839 | 26% |
|  |  | E1 | 2874 | 34 | 308 | 64% | 2745 | 29% |