# Engine: StockDory

Author: Shaheryar Sohail

Home: https://github.com/TheBlackPlague/StockDory

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3204<sub>(+123) | 3402<sub>(+39) | 3487<sub>(+81) |  |
| 0.3 | 2026-10-06 | 3081<sub>(+57) | 3363<sub>(+74) | 3406<sub>(+96) |  |
| 0.2 | 2026-09-15 | 3024 | 3289 | 3310 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3206<sub>(+147) | 3401<sub>(+75) | 3428<sub>(+31) |  |
| 0.3 | 2026-10-06 | 3059<sub>(+58) | 3326<sub>(+137) | 3397<sub>(+135) |  |
| 0.2 | 2026-09-15 | 3001 | 3189 | 3262 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2 | 2026-09-15 | 3001 | 3189 | 3262 |  |
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

Generated: 2026-11-14 05:42:50

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3", "0.4"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3024, 3081, 3204]
  line "E1: LTC (60.0+0.60s)" [3289, 3363, 3402]
  line "E1: VLTC (2m24s+1.12s)" [3310, 3406, 3487]
  line "P1: STC (8.0+0.08s)" [3001, 3059, 3206]
  line "P1: LTC (60.0+0.60s)" [3189, 3326, 3401]
  line "P1: VLTC (2m24s+1.12s)" [3262, 3397, 3428]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3428 | 37 | 182 | 49% | 3433 | 73% |
|  |  | E1 | 3487 | 32 | 230 | 51% | 3480 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3401 | 44 | 124 | 51% | 3395 | 79% |
|  |  | E1 | 3402 | 31 | 264 | 51% | 3394 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3206 | 32 | 244 | 51% | 3198 | 68% |
|  |  | E1 | 3204 | 31 | 258 | 53% | 3183 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3397 | 35 | 216 | 53% | 3316 | 69% |
|  |  | E1 | 3406 | 28 | 335 | 57% | 3320 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3326 | 32 | 264 | 54% | 3268 | 59% |
|  |  | E1 | 3363 | 29 | 336 | 55% | 3294 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3081 | 29 | 342 | 54% | 3029 | 52% |
|  |  | P1 | 3059 | 42 | 170 | 56% | 2955 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3310 | 40 | 158 | 53% | 3293 | 67% |
|  |  | P1 | 3262 | 69 | 56 | 43% | 3316 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3289 | 44 | 134 | 43% | 3339 | 63% |
|  |  | P1 | 3189 | 60 | 72 | 42% | 3245 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3001 | 91 | 36 | 47% | 3028 | 39% |
|  |  | E1 | 3024 | 45 | 146 | 54% | 2985 | 46% |