# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3245<sub>(+201) | 3475<sub>(+119) | 3529<sub>(+95) |  |
| 1.9.1 | 2026-10-18 | 3044<sub>(+206) | 3356<sub>(+186) | 3434<sub>(+194) |  |
| 1.9.0 | 2026-10-16 | 2838 | 3170 | 3240 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3382<sub>(+173) | 3564<sub>(+76) | 3652<sub>(+120) |  |
| 1.9.1 | 2026-10-18 | 3209<sub>(+212) | 3488<sub>(+172) | 3532<sub>(+143) |  |
| 1.9.0 | 2026-10-16 | 2997 | 3316 | 3389 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 2997 | 3316 | 3389 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Superpawn+<version>&body=###%20Engine%20name%0ASuperpawn%0A%0A###%20Version%0A1.9.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:43:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1", "1.9.2"]
  y-axis "Elo Rating" 2800 --> 3700
  line "E1: STC (8.0+0.08s)" [2838, 3044, 3245]
  line "E1: LTC (60.0+0.60s)" [3170, 3356, 3475]
  line "E1: VLTC (2m24s+1.12s)" [3240, 3434, 3529]
  line "P1: STC (8.0+0.08s)" [2997, 3209, 3382]
  line "P1: LTC (60.0+0.60s)" [3316, 3488, 3564]
  line "P1: VLTC (2m24s+1.12s)" [3389, 3532, 3652]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3652 | 31 | 258 | 55% | 3619 | 76% |
|  |  | E1 | 3529 | 34 | 218 | 52% | 3518 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3564 | 42 | 136 | 51% | 3557 | 76% |
|  |  | E1 | 3475 | 28 | 330 | 53% | 3456 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3382 | 35 | 222 | 53% | 3357 | 60% |
|  |  | E1 | 3245 | 33 | 250 | 53% | 3222 | 58% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3532 | 35 | 210 | 52% | 3519 | 62% |
|  |  | E1 | 3434 | 29 | 314 | 52% | 3424 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3488 | 35 | 216 | 50% | 3487 | 58% |
|  |  | E1 | 3356 | 32 | 264 | 52% | 3341 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3209 | 42 | 160 | 51% | 3201 | 48% |
|  |  | E1 | 3044 | 30 | 344 | 54% | 3011 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3389 | 43 | 194 | 60% | 3136 | 39% |
|  |  | E1 | 3240 | 34 | 292 | 55% | 3083 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3316 | 50 | 150 | 62% | 2978 | 32% |
|  |  | E1 | 3170 | 42 | 214 | 62% | 2880 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2997 | 47 | 176 | 58% | 2765 | 26% |
|  |  | E1 | 2838 | 42 | 220 | 61% | 2585 | 26% |