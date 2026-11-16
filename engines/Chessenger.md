# Engine: Chessenger

Author: Dariusz Domagała

Home: https://github.com/chessengeriadoteu/chessenger

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2 | 2026-11-12 | 3141<sub>(+75) | 3475<sub>(+43) | 3541<sub>(+50) |  |
| 3.6 | 2026-11-01 | 3066<sub>(+169) | 3432<sub>(+150) | 3491<sub>(+116) |  |
| 3.1 | 2026-10-21 | 2897<sub>(+74) | 3282<sub>(+7) | 3375<sub>(-5) |  |
| 3.0 | 2026-10-17 | 2823<sub>(+253) | 3275<sub>(+155) | 3380<sub>(+203) |  |
| 2.9.5 | 2026-10-15 | 2570<sub>(+194) | 3120<sub>(+185) | 3177<sub>(+165) |  |
| 1.6 | 2026-10-07 | 2376 | 2935 | 3012 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2 | 2026-11-12 | 3128<sub>(+41) | 3387<sub>(+1) | 3447<sub>(0) |  |
| 3.6 | 2026-11-01 | 3087<sub>(+230) | 3386<sub>(+123) | 3447<sub>(+108) |  |
| 3.1 | 2026-10-21 | 2857<sub>(+8) | 3263<sub>(+47) | 3339<sub>(+15) |  |
| 3.0 | 2026-10-17 | 2849<sub>(+191) | 3216<sub>(+160) | 3324<sub>(+169) |  |
| 2.9.5 | 2026-10-15 | 2658<sub>(+310) | 3056<sub>(+207) | 3155<sub>(+213) |  |
| 1.6 | 2026-10-07 | 2348 | 2849 | 2942 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-10-07 | 2348 | 2849 | 2942 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chessenger+<version>&body=###%20Engine%20name%0AChessenger%0A%0A###%20Version%0A4.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-16 05:37:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.9.5", "3.0", "3.1", "3.6", "4.2"]
  y-axis "Elo Rating" 2300 --> 3600
  line "E1: STC (8.0+0.08s)" [2376, 2570, 2823, 2897, 3066, 3141]
  line "E1: LTC (60.0+0.60s)" [2935, 3120, 3275, 3282, 3432, 3475]
  line "E1: VLTC (2m24s+1.12s)" [3012, 3177, 3380, 3375, 3491, 3541]
  line "P1: STC (8.0+0.08s)" [2348, 2658, 2849, 2857, 3087, 3128]
  line "P1: LTC (60.0+0.60s)" [2849, 3056, 3216, 3263, 3386, 3387]
  line "P1: VLTC (2m24s+1.12s)" [2942, 3155, 3324, 3339, 3447, 3447]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3541 | 79 | 36 | 53% | 3521 | 83% |
|  |  | P1 | 3447 | 208 | 4 | 50% | 3447 | 100% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3475 | 79 | 40 | 49% | 3483 | 68% |
|  |  | P1 | 3387 | 207 | 4 | 50% | 3387 | 100% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3128 | 116 | 20 | 45% | 3155 | 50% |
|  |  | E1 | 3141 | 89 | 36 | 53% | 3121 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3447 | 36 | 184 | 52% | 3429 | 77% |
|  |  | E1 | 3491 | 30 | 276 | 53% | 3472 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3386 | 38 | 172 | 51% | 3376 | 75% |
|  |  | E1 | 3432 | 28 | 326 | 52% | 3417 | 74% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3087 | 38 | 188 | 51% | 3078 | 54% |
|  |  | E1 | 3066 | 33 | 266 | 52% | 3046 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3339 | 29 | 300 | 54% | 3312 | 68% |
|  |  | E1 | 3375 | 29 | 306 | 52% | 3357 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3282 | 34 | 224 | 50% | 3286 | 60% |
|  |  | P1 | 3263 | 34 | 232 | 50% | 3266 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2897 | 33 | 284 | 49% | 2901 | 36% |
|  |  | P1 | 2857 | 50 | 116 | 47% | 2884 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3324 | 46 | 122 | 50% | 3325 | 68% |
|  |  | E1 | 3380 | 31 | 270 | 50% | 3379 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3216 | 49 | 106 | 56% | 3170 | 69% |
|  |  | E1 | 3275 | 31 | 274 | 49% | 3286 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2849 | 52 | 116 | 57% | 2790 | 38% |
|  |  | E1 | 2823 | 41 | 174 | 53% | 2793 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3155 | 37 | 196 | 52% | 3141 | 61% |
|  |  | E1 | 3177 | 34 | 244 | 50% | 3179 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3056 | 50 | 118 | 54% | 3024 | 45% |
|  |  | E1 | 3120 | 41 | 168 | 51% | 3109 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2658 | 41 | 196 | 53% | 2628 | 34% |
|  |  | E1 | 2570 | 36 | 254 | 55% | 2525 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2942 | 50 | 130 | 55% | 2877 | 40% |
|  |  | E1 | 3012 | 43 | 168 | 55% | 2943 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2849 | 57 | 116 | 63% | 2587 | 33% |
|  |  | E1 | 2935 | 40 | 218 | 57% | 2789 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2348 | 62 | 90 | 43% | 2411 | 24% |
|  |  | E1 | 2376 | 45 | 184 | 57% | 2256 | 23% |