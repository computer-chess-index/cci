# Engine: Chessenger

Author: Dariusz Domagała

Home: https://github.com/chessengeriadoteu/chessenger

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2 | 2026-11-12 | 3141<sub>(+89) | 3463<sub>(+41) | 3542<sub>(+59) |  |
| 3.6 | 2026-11-01 | 3052<sub>(+160) | 3422<sub>(+146) | 3483<sub>(+115) |  |
| 3.1 | 2026-10-21 | 2892<sub>(+73) | 3276<sub>(+6) | 3368<sub>(-6) |  |
| 3.0 | 2026-10-17 | 2819<sub>(+251) | 3270<sub>(+158) | 3374<sub>(+204) |  |
| 2.9.5 | 2026-10-15 | 2568<sub>(+193) | 3112<sub>(+181) | 3170<sub>(+165) |  |
| 1.6 | 2026-10-07 | 2375 | 2931 | 3005 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2 | 2026-11-12 | 3181<sub>(+50) | 3470<sub>(+54) | 3528<sub>(+57) |  |
| 3.6 | 2026-11-01 | 3131<sub>(+228) | 3416<sub>(+122) | 3471<sub>(+103) |  |
| 3.1 | 2026-10-21 | 2903<sub>(+13) | 3294<sub>(+45) | 3368<sub>(+15) |  |
| 3.0 | 2026-10-17 | 2890<sub>(+195) | 3249<sub>(+152) | 3353<sub>(+162) |  |
| 2.9.5 | 2026-10-15 | 2695<sub>(+315) | 3097<sub>(+207) | 3191<sub>(+205) |  |
| 1.6 | 2026-10-07 | 2380 | 2890 | 2986 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-10-07 | 2380 | 2890 | 2986 |  |
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

Generated: 2026-11-27 05:37:22

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.9.5", "3.0", "3.1", "3.6", "4.2"]
  y-axis "Elo Rating" 2300 --> 3600
  line "E1: STC (8.0+0.08s)" [2375, 2568, 2819, 2892, 3052, 3141]
  line "E1: LTC (60.0+0.60s)" [2931, 3112, 3270, 3276, 3422, 3463]
  line "E1: VLTC (2m24s+1.12s)" [3005, 3170, 3374, 3368, 3483, 3542]
  line "P1: STC (8.0+0.08s)" [2380, 2695, 2890, 2903, 3131, 3181]
  line "P1: LTC (60.0+0.60s)" [2890, 3097, 3249, 3294, 3416, 3470]
  line "P1: VLTC (2m24s+1.12s)" [2986, 3191, 3353, 3368, 3471, 3528]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3528 | 53 | 84 | 51% | 3519 | 81% |
|  |  | E1 | 3542 | 35 | 194 | 51% | 3536 | 80% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3470 | 40 | 148 | 53% | 3448 | 81% |
|  |  | E1 | 3463 | 37 | 180 | 50% | 3464 | 77% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3141 | 34 | 244 | 51% | 3131 | 52% |
|  |  | P1 | 3181 | 43 | 148 | 51% | 3173 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3471 | 36 | 184 | 52% | 3453 | 77% |
|  |  | E1 | 3483 | 29 | 284 | 53% | 3464 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3416 | 36 | 184 | 52% | 3403 | 75% |
|  |  | E1 | 3422 | 27 | 350 | 52% | 3410 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3131 | 37 | 200 | 51% | 3119 | 55% |
|  |  | E1 | 3052 | 31 | 302 | 51% | 3040 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3368 | 29 | 300 | 54% | 3341 | 68% |
|  |  | E1 | 3368 | 29 | 306 | 52% | 3351 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3294 | 34 | 232 | 50% | 3295 | 62% |
|  |  | E1 | 3276 | 34 | 224 | 50% | 3281 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2903 | 50 | 116 | 47% | 2930 | 47% |
|  |  | E1 | 2892 | 33 | 284 | 49% | 2896 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3374 | 31 | 270 | 50% | 3372 | 64% |
|  |  | P1 | 3353 | 46 | 122 | 50% | 3355 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3270 | 31 | 274 | 49% | 3281 | 64% |
|  |  | P1 | 3249 | 49 | 106 | 56% | 3204 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2890 | 52 | 116 | 57% | 2832 | 38% |
|  |  | E1 | 2819 | 41 | 174 | 53% | 2790 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3191 | 37 | 196 | 52% | 3179 | 61% |
|  |  | E1 | 3170 | 34 | 244 | 50% | 3173 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3097 | 50 | 118 | 54% | 3065 | 45% |
|  |  | E1 | 3112 | 41 | 168 | 51% | 3102 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2695 | 41 | 196 | 53% | 2665 | 34% |
|  |  | E1 | 2568 | 37 | 254 | 55% | 2522 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2986 | 50 | 130 | 55% | 2921 | 40% |
|  |  | E1 | 3005 | 43 | 168 | 55% | 2938 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2890 | 57 | 116 | 63% | 2622 | 33% |
|  |  | E1 | 2931 | 40 | 218 | 57% | 2784 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2380 | 62 | 90 | 43% | 2444 | 24% |
|  |  | E1 | 2375 | 46 | 184 | 57% | 2255 | 23% |