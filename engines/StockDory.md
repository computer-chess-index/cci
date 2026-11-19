# Engine: StockDory

Author: Shaheryar Sohail

Home: https://github.com/TheBlackPlague/StockDory

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3210<sub>(+123) | 3414<sub>(+44) | 3491<sub>(+77) |  |
| 0.3 | 2026-10-06 | 3087<sub>(+60) | 3370<sub>(+75) | 3414<sub>(+97) |  |
| 0.2 | 2026-09-15 | 3027 | 3295 | 3317 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3204<sub>(+135) | 3395<sub>(+79) | 3420<sub>(+31) |  |
| 0.3 | 2026-10-06 | 3069<sub>(+64) | 3316<sub>(+135) | 3389<sub>(+137) |  |
| 0.2 | 2026-09-15 | 3005 | 3181 | 3252 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2 | 2026-09-15 | 3005 | 3181 | 3252 |  |
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

Generated: 2026-11-19 05:43:40

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3", "0.4"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3027, 3087, 3210]
  line "E1: LTC (60.0+0.60s)" [3295, 3370, 3414]
  line "E1: VLTC (2m24s+1.12s)" [3317, 3414, 3491]
  line "P1: STC (8.0+0.08s)" [3005, 3069, 3204]
  line "P1: LTC (60.0+0.60s)" [3181, 3316, 3395]
  line "P1: VLTC (2m24s+1.12s)" [3252, 3389, 3420]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3420 | 37 | 182 | 49% | 3426 | 73% |
|  |  | E1 | 3491 | 31 | 246 | 51% | 3487 | 80% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3395 | 42 | 136 | 51% | 3387 | 80% |
|  |  | E1 | 3414 | 30 | 284 | 52% | 3402 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3204 | 30 | 282 | 52% | 3193 | 67% |
|  |  | E1 | 3210 | 31 | 266 | 53% | 3190 | 67% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3389 | 35 | 216 | 53% | 3310 | 69% |
|  |  | E1 | 3414 | 27 | 359 | 56% | 3333 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3316 | 32 | 264 | 54% | 3260 | 59% |
|  |  | E1 | 3370 | 28 | 348 | 55% | 3302 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3069 | 41 | 182 | 56% | 2970 | 50% |
|  |  | E1 | 3087 | 29 | 354 | 54% | 3033 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3252 | 69 | 56 | 43% | 3306 | 57% |
|  |  | E1 | 3317 | 40 | 158 | 53% | 3298 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3295 | 44 | 134 | 43% | 3344 | 63% |
|  |  | P1 | 3181 | 60 | 72 | 42% | 3237 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3027 | 45 | 146 | 54% | 2989 | 46% |
|  |  | P1 | 3005 | 91 | 36 | 47% | 3031 | 39% |