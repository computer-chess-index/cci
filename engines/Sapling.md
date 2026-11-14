# Engine: Sapling

Author: Timothy Jones

Home: https://github.com/Timmoth/Sapling

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3062<sub>(+37) | 3305<sub>(-5) | 3395<sub>(+17) |  |
| 2.0.0 | 2026-10-21 | 3025 | 3310 | 3378 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3043<sub>(+65) | 3260<sub>(-27) | 3355<sub>(+18) |  |
| 2.0.0 | 2026-10-21 | 2978 | 3287 | 3337 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-21 | 2978 | 3287 | 3337 |  |
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

Generated: 2026-11-14 05:42:17

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 2900 --> 3400
  line "E1: STC (8.0+0.08s)" [3025, 3062]
  line "E1: LTC (60.0+0.60s)" [3310, 3305]
  line "E1: VLTC (2m24s+1.12s)" [3378, 3395]
  line "P1: STC (8.0+0.08s)" [2978, 3043]
  line "P1: LTC (60.0+0.60s)" [3287, 3260]
  line "P1: VLTC (2m24s+1.12s)" [3337, 3355]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3355 | 40 | 156 | 49% | 3357 | 74% |
|  |  | E1 | 3395 | 29 | 296 | 50% | 3398 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3260 | 35 | 220 | 51% | 3255 | 61% |
|  |  | E1 | 3305 | 28 | 334 | 48% | 3318 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3043 | 40 | 166 | 53% | 3023 | 58% |
|  |  | E1 | 3062 | 33 | 268 | 51% | 3050 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3337 | 38 | 254 | 67% | 2704 | 47% |
|  |  | E1 | 3378 | 32 | 324 | 62% | 2974 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3287 | 42 | 218 | 69% | 2596 | 44% |
|  |  | E1 | 3310 | 29 | 384 | 62% | 2975 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2978 | 42 | 224 | 68% | 2415 | 39% |
|  |  | E1 | 3025 | 35 | 282 | 57% | 2741 | 43% |