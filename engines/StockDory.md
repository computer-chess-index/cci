# Engine: StockDory

Author: Shaheryar Sohail

Home: https://github.com/TheBlackPlague/StockDory

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3278<sub>(+126) | 3479<sub>(+41) | 3567<sub>(+83) |  |
| 0.3 | 2026-10-06 | 3152<sub>(+60) | 3438<sub>(+71) | 3484<sub>(+95) |  |
| 0.2 | 2026-09-15 | 3092 | 3367 | 3389 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3402<sub>(+150) | 3594<sub>(+75) | 3619<sub>(+29) |  |
| 0.3 | 2026-10-06 | 3252<sub>(+61) | 3519<sub>(+137) | 3590<sub>(+135) |  |
| 0.2 | 2026-09-15 | 3191 | 3382 | 3455 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2 | 2026-09-15 | 3191 | 3382 | 3455 |  |
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

Generated: 2026-11-10 05:42:57

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3", "0.4"]
  y-axis "Elo Rating" 3000 --> 3700
  line "E1: STC (8.0+0.08s)" [3092, 3152, 3278]
  line "E1: LTC (60.0+0.60s)" [3367, 3438, 3479]
  line "E1: VLTC (2m24s+1.12s)" [3389, 3484, 3567]
  line "P1: STC (8.0+0.08s)" [3191, 3252, 3402]
  line "P1: LTC (60.0+0.60s)" [3382, 3519, 3594]
  line "P1: VLTC (2m24s+1.12s)" [3455, 3590, 3619]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3619 | 37 | 178 | 49% | 3626 | 72% |
|  |  | E1 | 3567 | 33 | 220 | 51% | 3559 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3594 | 44 | 124 | 51% | 3588 | 79% |
|  |  | E1 | 3479 | 31 | 256 | 51% | 3474 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3402 | 33 | 236 | 52% | 3391 | 67% |
|  |  | E1 | 3278 | 32 | 250 | 53% | 3258 | 68% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3590 | 35 | 216 | 53% | 3505 | 69% |
|  |  | E1 | 3484 | 29 | 327 | 57% | 3394 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3519 | 32 | 264 | 54% | 3460 | 59% |
|  |  | E1 | 3438 | 29 | 328 | 56% | 3366 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3252 | 42 | 170 | 56% | 3141 | 48% |
|  |  | E1 | 3152 | 30 | 330 | 55% | 3090 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3389 | 40 | 158 | 53% | 3370 | 67% |
|  |  | P1 | 3455 | 69 | 56 | 43% | 3510 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3367 | 44 | 134 | 43% | 3416 | 63% |
|  |  | P1 | 3382 | 60 | 72 | 42% | 3438 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3092 | 45 | 146 | 54% | 3052 | 46% |
|  |  | P1 | 3191 | 91 | 36 | 47% | 3218 | 39% |