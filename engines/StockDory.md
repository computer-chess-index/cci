# Engine: StockDory

Author: Shaheryar Sohail

Home: https://github.com/TheBlackPlague/StockDory

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3218<sub>(+131) | 3417<sub>(+50) | 3490<sub>(+77) |  |
| 0.3 | 2026-10-06 | 3087<sub>(+81) | 3367<sub>(+113) | 3413<sub>(+80) |  |
| 0.2.1 | 2026-09-20 | 3006<sub>(-19) | 3254<sub>(-40) | 3333<sub>(+16) |  |
| 0.2 | 2026-09-15 | 3025 | 3294 | 3317 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3236<sub>(+138) | 3420<sub>(+77) | 3441<sub>(+30) |  |
| 0.3 | 2026-10-06 | 3098<sub>(+62) | 3343<sub>(+88) | 3411<sub>(+109) |  |
| 0.2.1 | 2026-09-20 | 3036<sub>(+3) | 3255<sub>(+46) | 3302<sub>(+21) |  |
| 0.2 | 2026-09-15 | 3033 | 3209 | 3281 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2 | 2026-09-15 | 3033 | 3209 | 3281 |  |
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

Generated: 2026-11-27 05:43:45

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.2.1", "0.3", "0.4"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3025, 3006, 3087, 3218]
  line "E1: LTC (60.0+0.60s)" [3294, 3254, 3367, 3417]
  line "E1: VLTC (2m24s+1.12s)" [3317, 3333, 3413, 3490]
  line "P1: STC (8.0+0.08s)" [3033, 3036, 3098, 3236]
  line "P1: LTC (60.0+0.60s)" [3209, 3255, 3343, 3420]
  line "P1: VLTC (2m24s+1.12s)" [3281, 3302, 3411, 3441]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3490 | 31 | 248 | 51% | 3484 | 79% |
|  |  | P1 | 3441 | 37 | 182 | 49% | 3447 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3417 | 28 | 308 | 52% | 3402 | 73% |
|  |  | P1 | 3420 | 40 | 148 | 51% | 3413 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3236 | 30 | 286 | 52% | 3225 | 66% |
|  |  | E1 | 3218 | 29 | 302 | 53% | 3193 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3411 | 35 | 216 | 53% | 3333 | 69% |
|  |  | E1 | 3413 | 27 | 359 | 56% | 3332 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3343 | 32 | 264 | 54% | 3287 | 59% |
|  |  | E1 | 3367 | 28 | 348 | 55% | 3301 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3098 | 41 | 182 | 56% | 2998 | 50% |
|  |  | E1 | 3087 | 29 | 354 | 54% | 3032 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3302 | 40 | 152 | 54% | 3272 | 72% |
|  |  | E1 | 3333 | 34 | 224 | 46% | 3362 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3254 | 32 | 252 | 47% | 3278 | 67% |
|  |  | P1 | 3255 | 43 | 136 | 47% | 3279 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3006 | 35 | 230 | 49% | 3013 | 52% |
|  |  | P1 | 3036 | 37 | 204 | 45% | 3073 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3281 | 69 | 56 | 43% | 3335 | 57% |
|  |  | E1 | 3317 | 40 | 158 | 53% | 3298 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3209 | 60 | 72 | 42% | 3266 | 68% |
|  |  | E1 | 3294 | 44 | 134 | 43% | 3343 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3033 | 91 | 36 | 47% | 3060 | 39% |
|  |  | E1 | 3025 | 45 | 146 | 54% | 2988 | 46% |