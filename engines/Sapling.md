# Engine: Sapling

Author: Timothy Jones

Home: https://github.com/Timmoth/Sapling

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3067<sub>(+29) | 3313<sub>(-1) | 3403<sub>(+14) |  |
| 2.0.0 | 2026-10-21 | 3038 | 3314 | 3389 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3055<sub>(+59) | 3254<sub>(-32) | 3347<sub>(+15) |  |
| 2.0.0 | 2026-10-21 | 2996 | 3286 | 3332 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-21 | 2996 | 3286 | 3332 |  |
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

Generated: 2026-11-18 05:43:11

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "E1: STC (8.0+0.08s)" [3038, 3067]
  line "E1: LTC (60.0+0.60s)" [3314, 3313]
  line "E1: VLTC (2m24s+1.12s)" [3389, 3403]
  line "P1: STC (8.0+0.08s)" [2996, 3055]
  line "P1: LTC (60.0+0.60s)" [3286, 3254]
  line "P1: VLTC (2m24s+1.12s)" [3332, 3347]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3347 | 39 | 160 | 49% | 3356 | 74% |
|  |  | E1 | 3403 | 28 | 304 | 50% | 3407 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3254 | 34 | 232 | 51% | 3248 | 60% |
|  |  | E1 | 3313 | 27 | 342 | 48% | 3326 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3055 | 40 | 170 | 53% | 3036 | 58% |
|  |  | E1 | 3067 | 32 | 276 | 51% | 3056 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3332 | 38 | 254 | 67% | 2701 | 47% |
|  |  | E1 | 3389 | 31 | 340 | 62% | 2997 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3286 | 40 | 230 | 69% | 2630 | 46% |
|  |  | E1 | 3314 | 27 | 412 | 61% | 3002 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2996 | 41 | 232 | 67% | 2448 | 39% |
|  |  | E1 | 3038 | 34 | 294 | 57% | 2754 | 43% |