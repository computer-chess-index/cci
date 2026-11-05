# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.1 | 2026-10-18 | 3059<sub>(+206) | 3372<sub>(+186) | 3451<sub>(+196) |  |
| 1.9.0 | 2026-10-16 | 2853 | 3186 | 3255 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.1 | 2026-10-18 | 3251<sub>(+211) | 3526<sub>(+169) | 3571<sub>(+142) |  |
| 1.9.0 | 2026-10-16 | 3040 | 3357 | 3429 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 3040 | 3357 | 3429 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Superpawn+<version>&body=###%20Engine%20name%0ASuperpawn%0A%0A###%20Version%0A1.9.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-05 05:43:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1"]
  y-axis "Elo Rating" 2800 --> 3600
  line "E1: STC (8.0+0.08s)" [2853, 3059]
  line "E1: LTC (60.0+0.60s)" [3186, 3372]
  line "E1: VLTC (2m24s+1.12s)" [3255, 3451]
  line "P1: STC (8.0+0.08s)" [3040, 3251]
  line "P1: LTC (60.0+0.60s)" [3357, 3526]
  line "P1: VLTC (2m24s+1.12s)" [3429, 3571]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3571 | 35 | 210 | 52% | 3560 | 62% |
|  |  | E1 | 3451 | 30 | 294 | 52% | 3437 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3526 | 36 | 212 | 50% | 3525 | 57% |
|  |  | E1 | 3372 | 33 | 252 | 52% | 3357 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3251 | 43 | 156 | 50% | 3245 | 47% |
|  |  | E1 | 3059 | 32 | 308 | 54% | 3020 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3429 | 43 | 194 | 60% | 3178 | 39% |
|  |  | E1 | 3255 | 34 | 292 | 55% | 3098 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3357 | 50 | 150 | 62% | 3020 | 32% |
|  |  | E1 | 3186 | 42 | 214 | 62% | 2894 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2853 | 42 | 224 | 61% | 2600 | 26% |
|  |  | P1 | 3040 | 47 | 176 | 58% | 2808 | 26% |