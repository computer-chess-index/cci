# Engine: StockDory

Author: Shaheryar Sohail

Home: https://github.com/TheBlackPlague/StockDory

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3217<sub>(+131) | 3416<sub>(+50) | 3488<sub>(+77) |  |
| 0.3 | 2026-10-06 | 3086<sub>(+80) | 3366<sub>(+112) | 3411<sub>(+79) |  |
| 0.2.1 | 2026-09-20 | 3006<sub>(-19) | 3254<sub>(-39) | 3332<sub>(+16) |  |
| 0.2 | 2026-09-15 | 3025 | 3293 | 3316 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3237<sub>(+136) | 3420<sub>(+77) | 3441<sub>(+30) |  |
| 0.3 | 2026-10-06 | 3101<sub>(+63) | 3343<sub>(+87) | 3411<sub>(+106) |  |
| 0.2.1 | 2026-09-20 | 3038<sub>(+3) | 3256<sub>(+46) | 3305<sub>(+24) |  |
| 0.2 | 2026-09-15 | 3035 | 3210 | 3281 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2 | 2026-09-15 | 3035 | 3210 | 3281 |  |
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

Generated: 2026-11-28 05:43:30

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.3", "0.4"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3025, 3006, 3086, 3217]
  line "E1: LTC (60.0+0.60s)" [3293, 3254, 3366, 3416]
  line "E1: VLTC (2m24s+1.12s)" [3316, 3332, 3411, 3488]
  line "P1: STC (8.0+0.08s)" [3035, 3038, 3101, 3237]
  line "P1: LTC (60.0+0.60s)" [3210, 3256, 3343, 3420]
  line "P1: VLTC (2m24s+1.12s)" [3281, 3305, 3411, 3441]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3441 | 37 | 182 | 49% | 3447 | 73% |
|  |  | E1 | 3488 | 31 | 248 | 51% | 3483 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3420 | 40 | 148 | 51% | 3413 | 80% |
|  |  | E1 | 3416 | 28 | 312 | 52% | 3401 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3237 | 30 | 286 | 52% | 3227 | 66% |
|  |  | E1 | 3217 | 29 | 306 | 53% | 3191 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3411 | 35 | 216 | 53% | 3333 | 69% |
|  |  | E1 | 3411 | 27 | 359 | 56% | 3330 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3366 | 28 | 348 | 55% | 3299 | 62% |
|  |  | P1 | 3343 | 32 | 264 | 54% | 3287 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3086 | 29 | 354 | 54% | 3032 | 52% |
|  |  | P1 | 3101 | 41 | 182 | 56% | 3000 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3305 | 39 | 168 | 54% | 3276 | 70% |
|  |  | E1 | 3332 | 34 | 224 | 46% | 3360 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3256 | 43 | 136 | 47% | 3279 | 74% |
|  |  | E1 | 3254 | 31 | 264 | 47% | 3275 | 67% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3038 | 37 | 204 | 45% | 3074 | 52% |
|  |  | E1 | 3006 | 35 | 230 | 49% | 3013 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3281 | 69 | 56 | 43% | 3335 | 57% |
|  |  | E1 | 3316 | 40 | 158 | 53% | 3298 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3210 | 60 | 72 | 42% | 3267 | 68% |
|  |  | E1 | 3293 | 44 | 134 | 43% | 3341 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3035 | 91 | 36 | 47% | 3062 | 39% |
|  |  | E1 | 3025 | 45 | 146 | 54% | 2988 | 46% |