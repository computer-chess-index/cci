# Engine: Sapling

Author: Timothy Jones

Home: https://github.com/Timmoth/Sapling

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3129<sub>(+37) | 3390<sub>(+7) | 3476<sub>(+25) |  |
| 2.0.0 | 2026-10-21 | 3092 | 3383 | 3451 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3254<sub>(+63) | 3478<sub>(-25) | 3568<sub>(+19) |  |
| 2.0.0 | 2026-10-21 | 3191 | 3503 | 3549 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-21 | 3191 | 3503 | 3549 |  |
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

Generated: 2026-11-04 05:42:47

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 3000 --> 3600
  line "E1: STC (8.0+0.08s)" [3092, 3129]
  line "E1: LTC (60.0+0.60s)" [3383, 3390]
  line "E1: VLTC (2m24s+1.12s)" [3451, 3476]
  line "P1: STC (8.0+0.08s)" [3191, 3254]
  line "P1: LTC (60.0+0.60s)" [3503, 3478]
  line "P1: VLTC (2m24s+1.12s)" [3549, 3568]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3568 | 43 | 136 | 50% | 3571 | 73% |
|  |  | E1 | 3476 | 32 | 236 | 51% | 3471 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3478 | 38 | 180 | 52% | 3463 | 61% |
|  |  | E1 | 3390 | 31 | 258 | 49% | 3399 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3254 | 43 | 142 | 54% | 3228 | 59% |
|  |  | E1 | 3129 | 37 | 208 | 52% | 3116 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3549 | 38 | 254 | 67% | 2871 | 47% |
|  |  | E1 | 3451 | 32 | 320 | 62% | 3033 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3503 | 43 | 214 | 70% | 2739 | 44% |
|  |  | E1 | 3383 | 29 | 380 | 62% | 3036 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3092 | 35 | 272 | 57% | 2788 | 42% |
|  |  | P1 | 3191 | 43 | 220 | 68% | 2564 | 39% |