# Engine: StockDory

Author: Shaheryar Sohail

Home: https://github.com/TheBlackPlague/StockDory

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3214<sub>(+121) | 3420<sub>(+45) | 3498<sub>(+80) |  |
| 0.3 | 2026-10-06 | 3093<sub>(+61) | 3375<sub>(+76) | 3418<sub>(+97) |  |
| 0.2 | 2026-09-15 | 3032 | 3299 | 3321 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3208<sub>(+134) | 3399<sub>(+78) | 3424<sub>(+31) |  |
| 0.3 | 2026-10-06 | 3074<sub>(+65) | 3321<sub>(+136) | 3393<sub>(+135) |  |
| 0.2 | 2026-09-15 | 3009 | 3185 | 3258 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2 | 2026-09-15 | 3009 | 3185 | 3258 |  |
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

Generated: 2026-11-20 05:43:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3", "0.4"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3032, 3093, 3214]
  line "E1: LTC (60.0+0.60s)" [3299, 3375, 3420]
  line "E1: VLTC (2m24s+1.12s)" [3321, 3418, 3498]
  line "P1: STC (8.0+0.08s)" [3009, 3074, 3208]
  line "P1: LTC (60.0+0.60s)" [3185, 3321, 3399]
  line "P1: VLTC (2m24s+1.12s)" [3258, 3393, 3424]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3424 | 37 | 182 | 49% | 3429 | 73% |
|  |  | E1 | 3498 | 31 | 248 | 51% | 3492 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3399 | 42 | 136 | 51% | 3391 | 80% |
|  |  | E1 | 3420 | 29 | 292 | 52% | 3407 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3208 | 30 | 282 | 52% | 3198 | 67% |
|  |  | E1 | 3214 | 31 | 266 | 53% | 3194 | 67% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3393 | 35 | 216 | 53% | 3314 | 69% |
|  |  | E1 | 3418 | 27 | 359 | 56% | 3337 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3321 | 32 | 264 | 54% | 3264 | 59% |
|  |  | E1 | 3375 | 28 | 348 | 55% | 3308 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3074 | 41 | 182 | 56% | 2974 | 50% |
|  |  | E1 | 3093 | 29 | 354 | 54% | 3038 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3258 | 69 | 56 | 43% | 3312 | 57% |
|  |  | E1 | 3321 | 40 | 158 | 53% | 3303 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3185 | 60 | 72 | 42% | 3241 | 68% |
|  |  | E1 | 3299 | 44 | 134 | 43% | 3349 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3009 | 91 | 36 | 47% | 3035 | 39% |
|  |  | E1 | 3032 | 45 | 146 | 54% | 2994 | 46% |