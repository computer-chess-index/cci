# Engine: Chessenger

Author: Dariusz Domagała

Home: https://github.com/chessengeriadoteu/chessenger

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2 | 2026-11-12 | 3143<sub>(+76) | 3464<sub>(+30) | 3544<sub>(+52) |  |
| 3.6 | 2026-11-01 | 3067<sub>(+169) | 3434<sub>(+151) | 3492<sub>(+114) |  |
| 3.1 | 2026-10-21 | 2898<sub>(+74) | 3283<sub>(+5) | 3378<sub>(-5) |  |
| 3.0 | 2026-10-17 | 2824<sub>(+254) | 3278<sub>(+157) | 3383<sub>(+205) |  |
| 2.9.5 | 2026-10-15 | 2570<sub>(+194) | 3121<sub>(+185) | 3178<sub>(+165) |  |
| 1.6 | 2026-10-07 | 2376 | 2936 | 3013 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2 | 2026-11-12 | 3133<sub>(+39) | 3389<sub>(+3) | 3448<sub>(0) |  |
| 3.6 | 2026-11-01 | 3094<sub>(+231) | 3386<sub>(+124) | 3448<sub>(+109) |  |
| 3.1 | 2026-10-21 | 2863<sub>(+9) | 3262<sub>(+45) | 3339<sub>(+15) |  |
| 3.0 | 2026-10-17 | 2854<sub>(+192) | 3217<sub>(+157) | 3324<sub>(+166) |  |
| 2.9.5 | 2026-10-15 | 2662<sub>(+310) | 3060<sub>(+206) | 3158<sub>(+210) |  |
| 1.6 | 2026-10-07 | 2352 | 2854 | 2948 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-10-07 | 2352 | 2854 | 2948 |  |
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

Generated: 2026-11-17 05:37:22

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.9.5", "3.0", "3.1", "3.6", "4.2"]
  y-axis "Elo Rating" 2300 --> 3600
  line "E1: STC (8.0+0.08s)" [2376, 2570, 2824, 2898, 3067, 3143]
  line "E1: LTC (60.0+0.60s)" [2936, 3121, 3278, 3283, 3434, 3464]
  line "E1: VLTC (2m24s+1.12s)" [3013, 3178, 3383, 3378, 3492, 3544]
  line "P1: STC (8.0+0.08s)" [2352, 2662, 2854, 2863, 3094, 3133]
  line "P1: LTC (60.0+0.60s)" [2854, 3060, 3217, 3262, 3386, 3389]
  line "P1: VLTC (2m24s+1.12s)" [2948, 3158, 3324, 3339, 3448, 3448]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3544 | 72 | 44 | 51% | 3534 | 84% |
|  |  | P1 | 3448 | 208 | 4 | 50% | 3448 | 100% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3464 | 72 | 48 | 47% | 3486 | 69% |
|  |  | P1 | 3389 | 207 | 4 | 50% | 3389 | 100% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3143 | 75 | 48 | 52% | 3128 | 54% |
|  |  | P1 | 3133 | 98 | 28 | 46% | 3152 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3448 | 36 | 184 | 52% | 3430 | 77% |
|  |  | E1 | 3492 | 30 | 276 | 53% | 3474 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3386 | 38 | 172 | 51% | 3376 | 75% |
|  |  | E1 | 3434 | 27 | 330 | 52% | 3418 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3094 | 38 | 192 | 51% | 3081 | 54% |
|  |  | E1 | 3067 | 33 | 270 | 52% | 3047 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3339 | 29 | 300 | 54% | 3310 | 68% |
|  |  | E1 | 3378 | 29 | 306 | 52% | 3360 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3262 | 34 | 232 | 50% | 3264 | 62% |
|  |  | E1 | 3283 | 34 | 224 | 50% | 3289 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2898 | 33 | 284 | 49% | 2903 | 36% |
|  |  | P1 | 2863 | 50 | 116 | 47% | 2890 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3324 | 46 | 122 | 50% | 3325 | 68% |
|  |  | E1 | 3383 | 31 | 270 | 50% | 3382 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3217 | 49 | 106 | 56% | 3171 | 69% |
|  |  | E1 | 3278 | 31 | 274 | 49% | 3287 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2854 | 52 | 116 | 57% | 2796 | 38% |
|  |  | E1 | 2824 | 41 | 174 | 53% | 2795 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3158 | 37 | 196 | 52% | 3144 | 61% |
|  |  | E1 | 3178 | 34 | 244 | 50% | 3181 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3060 | 50 | 118 | 54% | 3028 | 45% |
|  |  | E1 | 3121 | 41 | 168 | 51% | 3110 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2662 | 41 | 196 | 53% | 2633 | 34% |
|  |  | E1 | 2570 | 37 | 254 | 55% | 2525 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2948 | 50 | 130 | 55% | 2884 | 40% |
|  |  | E1 | 3013 | 43 | 168 | 55% | 2944 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2854 | 57 | 116 | 63% | 2592 | 33% |
|  |  | E1 | 2936 | 40 | 218 | 57% | 2790 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2352 | 62 | 90 | 43% | 2414 | 24% |
|  |  | E1 | 2376 | 45 | 184 | 57% | 2256 | 23% |