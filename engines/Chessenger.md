# Engine: Chessenger

Author: Dariusz Domagała

Home: https://github.com/chessengeriadoteu/chessenger

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2 | 2026-11-12 | 3140<sub>(+90) | 3461<sub>(+41) | 3541<sub>(+59) |  |
| 3.6 | 2026-11-01 | 3050<sub>(+161) | 3420<sub>(+145) | 3482<sub>(+115) |  |
| 3.1 | 2026-10-21 | 2889<sub>(+72) | 3275<sub>(+7) | 3367<sub>(-5) |  |
| 3.0 | 2026-10-17 | 2817<sub>(+249) | 3268<sub>(+155) | 3372<sub>(+204) |  |
| 2.9.5 | 2026-10-15 | 2568<sub>(+193) | 3113<sub>(+183) | 3168<sub>(+163) |  |
| 1.6 | 2026-10-07 | 2375 | 2930 | 3005 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2 | 2026-11-12 | 3175<sub>(+43) | 3471<sub>(+55) | 3528<sub>(+57) |  |
| 3.6 | 2026-11-01 | 3132<sub>(+229) | 3416<sub>(+122) | 3471<sub>(+103) |  |
| 3.1 | 2026-10-21 | 2903<sub>(+13) | 3294<sub>(+43) | 3368<sub>(+15) |  |
| 3.0 | 2026-10-17 | 2890<sub>(+194) | 3251<sub>(+153) | 3353<sub>(+160) |  |
| 2.9.5 | 2026-10-15 | 2696<sub>(+315) | 3098<sub>(+208) | 3193<sub>(+205) |  |
| 1.6 | 2026-10-07 | 2381 | 2890 | 2988 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-10-07 | 2381 | 2890 | 2988 |  |
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

Generated: 2026-11-28 05:37:26

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.9.5", "3.0", "3.1", "3.6", "4.2"]
  y-axis "Elo Rating" 2300 --> 3600
  line "E1: STC (8.0+0.08s)" [2375, 2568, 2817, 2889, 3050, 3140]
  line "E1: LTC (60.0+0.60s)" [2930, 3113, 3268, 3275, 3420, 3461]
  line "E1: VLTC (2m24s+1.12s)" [3005, 3168, 3372, 3367, 3482, 3541]
  line "P1: STC (8.0+0.08s)" [2381, 2696, 2890, 2903, 3132, 3175]
  line "P1: LTC (60.0+0.60s)" [2890, 3098, 3251, 3294, 3416, 3471]
  line "P1: VLTC (2m24s+1.12s)" [2988, 3193, 3353, 3368, 3471, 3528]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3528 | 53 | 84 | 51% | 3519 | 81% |
|  |  | E1 | 3541 | 35 | 194 | 51% | 3534 | 80% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3471 | 40 | 148 | 53% | 3448 | 81% |
|  |  | E1 | 3461 | 37 | 180 | 50% | 3463 | 77% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3175 | 41 | 164 | 50% | 3174 | 57% |
|  |  | E1 | 3140 | 34 | 244 | 51% | 3131 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3471 | 36 | 184 | 52% | 3453 | 77% |
|  |  | E1 | 3482 | 29 | 284 | 53% | 3463 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3416 | 36 | 184 | 52% | 3405 | 75% |
|  |  | E1 | 3420 | 26 | 354 | 52% | 3409 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3132 | 37 | 200 | 51% | 3120 | 55% |
|  |  | E1 | 3050 | 31 | 302 | 51% | 3039 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3368 | 29 | 300 | 54% | 3341 | 68% |
|  |  | E1 | 3367 | 29 | 306 | 52% | 3349 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3294 | 34 | 232 | 50% | 3297 | 62% |
|  |  | E1 | 3275 | 34 | 224 | 50% | 3279 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2903 | 50 | 116 | 47% | 2931 | 47% |
|  |  | E1 | 2889 | 33 | 284 | 49% | 2894 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3353 | 46 | 122 | 50% | 3355 | 68% |
|  |  | E1 | 3372 | 31 | 270 | 50% | 3371 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3251 | 49 | 106 | 56% | 3205 | 69% |
|  |  | E1 | 3268 | 31 | 274 | 49% | 3279 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2890 | 52 | 116 | 57% | 2832 | 38% |
|  |  | E1 | 2817 | 41 | 174 | 53% | 2789 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3193 | 37 | 196 | 52% | 3179 | 61% |
|  |  | E1 | 3168 | 34 | 244 | 50% | 3171 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3098 | 50 | 118 | 54% | 3066 | 45% |
|  |  | E1 | 3113 | 41 | 168 | 51% | 3102 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2696 | 41 | 196 | 53% | 2666 | 34% |
|  |  | E1 | 2568 | 37 | 254 | 55% | 2522 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2988 | 50 | 130 | 55% | 2923 | 40% |
|  |  | E1 | 3005 | 43 | 168 | 55% | 2936 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2890 | 57 | 116 | 63% | 2622 | 33% |
|  |  | E1 | 2930 | 40 | 218 | 57% | 2784 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2381 | 62 | 90 | 43% | 2445 | 24% |
|  |  | E1 | 2375 | 46 | 184 | 57% | 2253 | 23% |