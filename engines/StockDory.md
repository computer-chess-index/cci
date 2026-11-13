# Engine: StockDory

Author: Shaheryar Sohail

Home: https://github.com/TheBlackPlague/StockDory

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3190<sub>(+125) | 3393<sub>(+42) | 3478<sub>(+81) |  |
| 0.3 | 2026-10-06 | 3065<sub>(+60) | 3351<sub>(+73) | 3397<sub>(+98) |  |
| 0.2 | 2026-09-15 | 3005 | 3278 | 3299 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3244<sub>(+147) | 3438<sub>(+74) | 3464<sub>(+30) |  |
| 0.3 | 2026-10-06 | 3097<sub>(+61) | 3364<sub>(+137) | 3434<sub>(+135) |  |
| 0.2 | 2026-09-15 | 3036 | 3227 | 3299 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2 | 2026-09-15 | 3036 | 3227 | 3299 |  |
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

Generated: 2026-11-13 05:43:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3", "0.4"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3005, 3065, 3190]
  line "E1: LTC (60.0+0.60s)" [3278, 3351, 3393]
  line "E1: VLTC (2m24s+1.12s)" [3299, 3397, 3478]
  line "P1: STC (8.0+0.08s)" [3036, 3097, 3244]
  line "P1: LTC (60.0+0.60s)" [3227, 3364, 3438]
  line "P1: VLTC (2m24s+1.12s)" [3299, 3434, 3464]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3464 | 37 | 182 | 49% | 3471 | 73% |
|  |  | E1 | 3478 | 32 | 230 | 51% | 3470 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3438 | 44 | 124 | 51% | 3433 | 79% |
|  |  | E1 | 3393 | 31 | 260 | 51% | 3384 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3244 | 32 | 244 | 51% | 3237 | 68% |
|  |  | E1 | 3190 | 31 | 258 | 53% | 3170 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3397 | 28 | 331 | 57% | 3308 | 66% |
|  |  | P1 | 3434 | 35 | 216 | 53% | 3351 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3351 | 29 | 332 | 55% | 3282 | 61% |
|  |  | P1 | 3364 | 32 | 264 | 54% | 3305 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3097 | 42 | 170 | 56% | 2990 | 48% |
|  |  | E1 | 3065 | 29 | 342 | 54% | 3013 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3299 | 69 | 56 | 43% | 3353 | 57% |
|  |  | E1 | 3299 | 40 | 158 | 53% | 3281 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3227 | 60 | 72 | 42% | 3283 | 68% |
|  |  | E1 | 3278 | 44 | 134 | 43% | 3328 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3036 | 91 | 36 | 47% | 3065 | 39% |
|  |  | E1 | 3005 | 45 | 146 | 54% | 2967 | 46% |