# Engine: StockDory

Author: Shaheryar Sohail

Home: https://github.com/TheBlackPlague/StockDory

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3216<sub>(+120) | 3422<sub>(+46) | 3501<sub>(+79) |  |
| 0.3 | 2026-10-06 | 3096<sub>(+61) | 3376<sub>(+73) | 3422<sub>(+97) |  |
| 0.2 | 2026-09-15 | 3035 | 3303 | 3325 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3197<sub>(+132) | 3389<sub>(+77) | 3417<sub>(+33) |  |
| 0.3 | 2026-10-06 | 3065<sub>(+61) | 3312<sub>(+135) | 3384<sub>(+136) |  |
| 0.2 | 2026-09-15 | 3004 | 3177 | 3248 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2 | 2026-09-15 | 3004 | 3177 | 3248 |  |
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

Generated: 2026-11-17 05:43:27

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3", "0.4"]
  y-axis "Elo Rating" 3000 --> 3600
  line "E1: STC (8.0+0.08s)" [3035, 3096, 3216]
  line "E1: LTC (60.0+0.60s)" [3303, 3376, 3422]
  line "E1: VLTC (2m24s+1.12s)" [3325, 3422, 3501]
  line "P1: STC (8.0+0.08s)" [3004, 3065, 3197]
  line "P1: LTC (60.0+0.60s)" [3177, 3312, 3389]
  line "P1: VLTC (2m24s+1.12s)" [3248, 3384, 3417]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3417 | 37 | 182 | 49% | 3422 | 73% |
|  |  | E1 | 3501 | 31 | 242 | 51% | 3495 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3389 | 43 | 128 | 51% | 3383 | 80% |
|  |  | E1 | 3422 | 30 | 284 | 52% | 3410 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3216 | 31 | 258 | 53% | 3195 | 68% |
|  |  | P1 | 3197 | 31 | 268 | 51% | 3189 | 67% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3384 | 35 | 216 | 53% | 3308 | 69% |
|  |  | E1 | 3422 | 27 | 355 | 56% | 3340 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3312 | 32 | 264 | 54% | 3256 | 59% |
|  |  | E1 | 3376 | 28 | 348 | 55% | 3310 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3065 | 41 | 182 | 56% | 2965 | 50% |
|  |  | E1 | 3096 | 29 | 354 | 54% | 3040 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3248 | 69 | 56 | 43% | 3302 | 57% |
|  |  | E1 | 3325 | 40 | 158 | 53% | 3306 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3177 | 60 | 72 | 42% | 3233 | 68% |
|  |  | E1 | 3303 | 44 | 134 | 43% | 3352 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3004 | 91 | 36 | 47% | 3031 | 39% |
|  |  | E1 | 3035 | 45 | 146 | 54% | 2997 | 46% |