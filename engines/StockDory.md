# Engine: StockDory

Author: Shaheryar Sohail

Home: https://github.com/TheBlackPlague/StockDory

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3210<sub>(+121) | 3416<sub>(+45) | 3494<sub>(+78) |  |
| 0.3 | 2026-10-06 | 3089<sub>(+61) | 3371<sub>(+74) | 3416<sub>(+98) |  |
| 0.2 | 2026-09-15 | 3028 | 3297 | 3318 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3216<sub>(+137) | 3402<sub>(+78) | 3425<sub>(+30) |  |
| 0.3 | 2026-10-06 | 3079<sub>(+64) | 3324<sub>(+134) | 3395<sub>(+135) |  |
| 0.2 | 2026-09-15 | 3015 | 3190 | 3260 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2 | 2026-09-15 | 3015 | 3190 | 3260 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+StockDory+<version>&body=###%20Engine%20name%0AStockDory%0A%0A###%20Version%0A0.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-21 05:43:05

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3", "0.4"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3028, 3089, 3210]
  line "E1: LTC (60.0+0.60s)" [3297, 3371, 3416]
  line "E1: VLTC (2m24s+1.12s)" [3318, 3416, 3494]
  line "P1: STC (8.0+0.08s)" [3015, 3079, 3216]
  line "P1: LTC (60.0+0.60s)" [3190, 3324, 3402]
  line "P1: VLTC (2m24s+1.12s)" [3260, 3395, 3425]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3425 | 37 | 182 | 49% | 3432 | 73% |
|  |  | E1 | 3494 | 31 | 248 | 51% | 3488 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3402 | 42 | 136 | 51% | 3394 | 80% |
|  |  | E1 | 3416 | 29 | 292 | 52% | 3403 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3216 | 30 | 282 | 52% | 3206 | 67% |
|  |  | E1 | 3210 | 31 | 266 | 53% | 3190 | 67% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3395 | 35 | 216 | 53% | 3317 | 69% |
|  |  | E1 | 3416 | 27 | 359 | 56% | 3335 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3324 | 32 | 264 | 54% | 3268 | 59% |
|  |  | E1 | 3371 | 28 | 348 | 55% | 3305 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3079 | 41 | 182 | 56% | 2979 | 50% |
|  |  | E1 | 3089 | 29 | 354 | 54% | 3033 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3260 | 69 | 56 | 43% | 3314 | 57% |
|  |  | E1 | 3318 | 40 | 158 | 53% | 3299 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3190 | 60 | 72 | 42% | 3247 | 68% |
|  |  | E1 | 3297 | 44 | 134 | 43% | 3345 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3015 | 91 | 36 | 47% | 3042 | 39% |
|  |  | E1 | 3028 | 45 | 146 | 54% | 2990 | 46% |