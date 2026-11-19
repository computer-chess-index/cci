# Engine: Sapling

Author: Timothy Jones

Home: https://github.com/Timmoth/Sapling

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3066<sub>(+30) | 3312<sub>(0) | 3402<sub>(+15) |  |
| 2.0.0 | 2026-10-21 | 3036 | 3312 | 3387 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3052<sub>(+58) | 3249<sub>(-34) | 3343<sub>(+15) |  |
| 2.0.0 | 2026-10-21 | 2994 | 3283 | 3328 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-21 | 2994 | 3283 | 3328 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sapling+<version>&body=###%20Engine%20name%0ASapling%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-19 05:43:03

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "E1: STC (8.0+0.08s)" [3036, 3066]
  line "E1: LTC (60.0+0.60s)" [3312, 3312]
  line "E1: VLTC (2m24s+1.12s)" [3387, 3402]
  line "P1: STC (8.0+0.08s)" [2994, 3052]
  line "P1: LTC (60.0+0.60s)" [3283, 3249]
  line "P1: VLTC (2m24s+1.12s)" [3328, 3343]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3402 | 28 | 304 | 50% | 3406 | 73% |
|  |  | P1 | 3343 | 39 | 160 | 49% | 3352 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3312 | 27 | 342 | 48% | 3325 | 68% |
|  |  | P1 | 3249 | 33 | 236 | 51% | 3245 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3052 | 40 | 170 | 53% | 3033 | 58% |
|  |  | E1 | 3066 | 32 | 280 | 51% | 3055 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3328 | 38 | 254 | 67% | 2699 | 47% |
|  |  | E1 | 3387 | 31 | 340 | 62% | 2996 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3283 | 40 | 230 | 69% | 2628 | 46% |
|  |  | E1 | 3312 | 27 | 412 | 61% | 3001 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2994 | 41 | 232 | 67% | 2448 | 39% |
|  |  | E1 | 3036 | 34 | 294 | 57% | 2753 | 43% |