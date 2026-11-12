# Engine: StockDory

Author: Shaheryar Sohail

Home: https://github.com/TheBlackPlague/StockDory

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3260<sub>(+125) | 3463<sub>(+42) | 3548<sub>(+80) |  |
| 0.3 | 2026-10-06 | 3135<sub>(+61) | 3421<sub>(+72) | 3468<sub>(+98) |  |
| 0.2 | 2026-09-15 | 3074 | 3349 | 3370 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3411<sub>(+148) | 3606<sub>(+74) | 3633<sub>(+31) |  |
| 0.3 | 2026-10-06 | 3263<sub>(+61) | 3532<sub>(+138) | 3602<sub>(+135) |  |
| 0.2 | 2026-09-15 | 3202 | 3394 | 3467 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2 | 2026-09-15 | 3202 | 3394 | 3467 |  |
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

Generated: 2026-11-12 05:42:53

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3", "0.4"]
  y-axis "Elo Rating" 3000 --> 3700
  line "E1: STC (8.0+0.08s)" [3074, 3135, 3260]
  line "E1: LTC (60.0+0.60s)" [3349, 3421, 3463]
  line "E1: VLTC (2m24s+1.12s)" [3370, 3468, 3548]
  line "P1: STC (8.0+0.08s)" [3202, 3263, 3411]
  line "P1: LTC (60.0+0.60s)" [3394, 3532, 3606]
  line "P1: VLTC (2m24s+1.12s)" [3467, 3602, 3633]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3633 | 37 | 182 | 49% | 3638 | 73% |
|  |  | E1 | 3548 | 32 | 230 | 51% | 3541 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3606 | 44 | 124 | 51% | 3600 | 79% |
|  |  | E1 | 3463 | 31 | 260 | 51% | 3456 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3411 | 32 | 244 | 51% | 3405 | 68% |
|  |  | E1 | 3260 | 31 | 258 | 53% | 3240 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3602 | 35 | 216 | 53% | 3517 | 69% |
|  |  | E1 | 3468 | 29 | 327 | 57% | 3378 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3421 | 29 | 328 | 56% | 3348 | 61% |
|  |  | P1 | 3532 | 32 | 264 | 54% | 3472 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3135 | 30 | 330 | 55% | 3073 | 52% |
|  |  | P1 | 3263 | 42 | 170 | 56% | 3152 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3370 | 40 | 158 | 53% | 3352 | 67% |
|  |  | P1 | 3467 | 69 | 56 | 43% | 3521 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3394 | 60 | 72 | 42% | 3451 | 68% |
|  |  | E1 | 3349 | 44 | 134 | 43% | 3398 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3202 | 91 | 36 | 47% | 3229 | 39% |
|  |  | E1 | 3074 | 45 | 146 | 54% | 3036 | 46% |