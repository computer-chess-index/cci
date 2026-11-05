# Engine: Zenith

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/zenith

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-10-30 | 3033<sub>(+6) | 3337<sub>(-22) | 3410<sub>(-50) |  |
| 2.0.0 | 2026-10-15 | 3027<sub>(+170) | 3359<sub>(+212) | 3460<sub>(+147) |  |
| 1.2.198 | 2026-08-01 | 2857 | 3147 | 3313 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-10-30 | 3224<sub>(+56) | 3482<sub>(-25) | 3542<sub>(-29) |  |
| 2.0.0 | 2026-10-15 | 3168<sub>(+232) | 3507<sub>(+163) | 3571<sub>(+80) |  |
| 1.2.198 | 2026-08-01 | 2936 | 3344 | 3491 |  |
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

Generated: 2026-11-05 05:44:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.198", "2.0.0", "3.0.0"]
  y-axis "Elo Rating" 2800 --> 3600
  line "E1: STC (8.0+0.08s)" [2857, 3027, 3033]
  line "E1: LTC (60.0+0.60s)" [3147, 3359, 3337]
  line "E1: VLTC (2m24s+1.12s)" [3313, 3460, 3410]
  line "P1: STC (8.0+0.08s)" [2936, 3168, 3224]
  line "P1: LTC (60.0+0.60s)" [3344, 3507, 3482]
  line "P1: VLTC (2m24s+1.12s)" [3491, 3571, 3542]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3542 | 39 | 160 | 52% | 3532 | 77% |
|  |  | E1 | 3410 | 31 | 256 | 51% | 3405 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3482 | 38 | 184 | 52% | 3460 | 63% |
|  |  | E1 | 3337 | 29 | 308 | 54% | 3308 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3224 | 44 | 136 | 49% | 3233 | 60% |
|  |  | E1 | 3033 | 38 | 202 | 50% | 3033 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3571 | 34 | 224 | 51% | 3561 | 70% |
|  |  | E1 | 3460 | 29 | 300 | 49% | 3465 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3507 | 39 | 174 | 53% | 3484 | 66% |
|  |  | E1 | 3359 | 32 | 266 | 52% | 3343 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3168 | 40 | 192 | 53% | 3136 | 44% |
|  |  | E1 | 3027 | 38 | 208 | 53% | 2997 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.198 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3313 | 29 | 326 | 41% | 3384 | 62% |
|  |  | T1 | 3387 | 31 | 272 | 51% | 3363 | 69% |
|  |  | P1 | 3491 | 33 | 252 | 44% | 3530 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3147 | 28 | 370 | 39% | 3240 | 51% |
|  |  | T1 | 3339 | 34 | 236 | 54% | 3266 | 64% |
|  |  | P1 | 3344 | 32 | 288 | 39% | 3429 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3067 | 26 | 424 | 47% | 3067 | 54% |
|  |  | P1 | 2936 | 45 | 180 | 59% | 2843 | 26% |
|  |  | E1 | 2857 | 34 | 308 | 64% | 2727 | 29% |