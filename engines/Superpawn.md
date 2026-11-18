# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3198<sub>(+196) | 3425<sub>(+109) | 3478<sub>(+95) |  |
| 1.9.1 | 2026-10-18 | 3002<sub>(+209) | 3316<sub>(+193) | 3383<sub>(+194) |  |
| 1.9.0 | 2026-10-16 | 2793 | 3123 | 3189 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3171<sub>(+155) | 3349<sub>(+77) | 3444<sub>(+124) |  |
| 1.9.1 | 2026-10-18 | 3016<sub>(+185) | 3272<sub>(+158) | 3320<sub>(+139) |  |
| 1.9.0 | 2026-10-16 | 2831 | 3114 | 3181 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 2831 | 3114 | 3181 |  |
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

Generated: 2026-11-18 05:43:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1", "1.9.2"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2793, 3002, 3198]
  line "E1: LTC (60.0+0.60s)" [3123, 3316, 3425]
  line "E1: VLTC (2m24s+1.12s)" [3189, 3383, 3478]
  line "P1: STC (8.0+0.08s)" [2831, 3016, 3171]
  line "P1: LTC (60.0+0.60s)" [3114, 3272, 3349]
  line "P1: VLTC (2m24s+1.12s)" [3181, 3320, 3444]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3478 | 32 | 238 | 51% | 3470 | 72% |
|  |  | P1 | 3444 | 30 | 262 | 54% | 3413 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3349 | 42 | 140 | 51% | 3345 | 76% |
|  |  | E1 | 3425 | 27 | 338 | 53% | 3405 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3171 | 34 | 238 | 52% | 3151 | 59% |
|  |  | E1 | 3198 | 32 | 274 | 53% | 3179 | 58% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3320 | 35 | 210 | 52% | 3308 | 62% |
|  |  | E1 | 3383 | 28 | 342 | 51% | 3374 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3272 | 34 | 236 | 49% | 3279 | 58% |
|  |  | E1 | 3316 | 30 | 302 | 53% | 3293 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3016 | 41 | 172 | 50% | 3017 | 46% |
|  |  | E1 | 3002 | 28 | 388 | 53% | 2978 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3181 | 42 | 194 | 60% | 2951 | 39% |
|  |  | E1 | 3189 | 34 | 292 | 55% | 3033 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3114 | 50 | 150 | 62% | 2804 | 32% |
|  |  | E1 | 3123 | 42 | 214 | 62% | 2832 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2831 | 47 | 176 | 58% | 2616 | 26% |
|  |  | E1 | 2793 | 42 | 220 | 61% | 2542 | 26% |