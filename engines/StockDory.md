# Engine: StockDory

Author: Shaheryar Sohail

Home: https://github.com/TheBlackPlague/StockDory

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3272<sub>(+126) | 3474<sub>(+42) | 3560<sub>(+81) |  |
| 0.3 | 2026-10-06 | 3146<sub>(+61) | 3432<sub>(+72) | 3479<sub>(+99) |  |
| 0.2 | 2026-09-15 | 3085 | 3360 | 3380 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3403<sub>(+149) | 3595<sub>(+76) | 3626<sub>(+36) |  |
| 0.3 | 2026-10-06 | 3254<sub>(+63) | 3519<sub>(+139) | 3590<sub>(+135) |  |
| 0.2 | 2026-09-15 | 3191 | 3380 | 3455 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2 | 2026-09-15 | 3191 | 3380 | 3455 |  |
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

Generated: 2026-11-09 05:43:10

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3", "0.4"]
  y-axis "Elo Rating" 3000 --> 3700
  line "E1: STC (8.0+0.08s)" [3085, 3146, 3272]
  line "E1: LTC (60.0+0.60s)" [3360, 3432, 3474]
  line "E1: VLTC (2m24s+1.12s)" [3380, 3479, 3560]
  line "P1: STC (8.0+0.08s)" [3191, 3254, 3403]
  line "P1: LTC (60.0+0.60s)" [3380, 3519, 3595]
  line "P1: VLTC (2m24s+1.12s)" [3455, 3590, 3626]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3626 | 41 | 150 | 49% | 3632 | 72% |
|  |  | E1 | 3560 | 33 | 220 | 51% | 3552 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3595 | 44 | 124 | 51% | 3590 | 79% |
|  |  | E1 | 3474 | 32 | 244 | 51% | 3465 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3403 | 33 | 232 | 52% | 3391 | 67% |
|  |  | E1 | 3272 | 33 | 238 | 53% | 3251 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3590 | 35 | 216 | 53% | 3505 | 69% |
|  |  | E1 | 3479 | 29 | 327 | 57% | 3389 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3519 | 32 | 264 | 54% | 3460 | 59% |
|  |  | E1 | 3432 | 29 | 328 | 56% | 3359 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3146 | 30 | 330 | 55% | 3085 | 52% |
|  |  | P1 | 3254 | 42 | 170 | 56% | 3141 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3380 | 40 | 158 | 53% | 3363 | 67% |
|  |  | P1 | 3455 | 69 | 56 | 43% | 3510 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3360 | 44 | 134 | 43% | 3409 | 63% |
|  |  | P1 | 3380 | 60 | 72 | 42% | 3437 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3191 | 91 | 36 | 47% | 3220 | 39% |
|  |  | E1 | 3085 | 45 | 146 | 54% | 3047 | 46% |