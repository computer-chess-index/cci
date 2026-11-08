# Engine: StockDory

Author: Shaheryar Sohail

Home: https://github.com/TheBlackPlague/StockDory

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3274<sub>(+126) | 3475<sub>(+39) | 3564<sub>(+82) |  |
| 0.3 | 2026-10-06 | 3148<sub>(+59) | 3436<sub>(+72) | 3482<sub>(+98) |  |
| 0.2 | 2026-09-15 | 3089 | 3364 | 3384 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3403<sub>(+151) | 3592<sub>(+75) | 3627<sub>(+39) |  |
| 0.3 | 2026-10-06 | 3252<sub>(+62) | 3517<sub>(+138) | 3588<sub>(+135) |  |
| 0.2 | 2026-09-15 | 3190 | 3379 | 3453 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2 | 2026-09-15 | 3190 | 3379 | 3453 |  |
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

Generated: 2026-11-08 05:42:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3", "0.4"]
  y-axis "Elo Rating" 3000 --> 3700
  line "E1: STC (8.0+0.08s)" [3089, 3148, 3274]
  line "E1: LTC (60.0+0.60s)" [3364, 3436, 3475]
  line "E1: VLTC (2m24s+1.12s)" [3384, 3482, 3564]
  line "P1: STC (8.0+0.08s)" [3190, 3252, 3403]
  line "P1: LTC (60.0+0.60s)" [3379, 3517, 3592]
  line "P1: VLTC (2m24s+1.12s)" [3453, 3588, 3627]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3627 | 42 | 144 | 49% | 3632 | 71% |
|  |  | E1 | 3564 | 34 | 212 | 52% | 3555 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3592 | 44 | 124 | 51% | 3587 | 79% |
|  |  | E1 | 3475 | 32 | 236 | 51% | 3468 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3403 | 34 | 220 | 52% | 3391 | 65% |
|  |  | E1 | 3274 | 33 | 234 | 53% | 3254 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3482 | 29 | 327 | 57% | 3391 | 66% |
|  |  | P1 | 3588 | 35 | 216 | 53% | 3503 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3517 | 32 | 264 | 54% | 3457 | 59% |
|  |  | E1 | 3436 | 29 | 328 | 56% | 3363 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3252 | 42 | 170 | 56% | 3140 | 48% |
|  |  | E1 | 3148 | 30 | 330 | 55% | 3087 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3453 | 69 | 56 | 43% | 3507 | 57% |
|  |  | E1 | 3384 | 40 | 158 | 53% | 3367 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3379 | 60 | 72 | 42% | 3436 | 68% |
|  |  | E1 | 3364 | 44 | 134 | 43% | 3413 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3190 | 91 | 36 | 47% | 3217 | 39% |
|  |  | E1 | 3089 | 45 | 146 | 54% | 3051 | 46% |