# Engine: Tcheran

Author: Jonathan Gilchrist

Home: https://github.com/tcheran-chess/tcheran

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 13.0 | 2026-07-17 | 3312<sub>(+41) | 3471<sub>(+55) | 3513<sub>(+64) |  |
| 12.0 | 2026-05-08 | 3271<sub>(+43) | 3416<sub>(+10) | 3449<sub>(+17) |  |
| 11.0 | 2026-02-13 | 3228<sub>(+100) | 3406<sub>(+93) | 3432<sub>(+58) |  |
| 10.0 | 2025-12-28 | 3128<sub>(+117) | 3313<sub>(+131) | 3374<sub>(+141) |  |
| 9.0 | 2025-12-08 | 3011<sub>(+79) | 3182<sub>(+51) | 3233<sub>(+51) |  |
| 8.0 | 2025-11-27 | 2932<sub>(+178) | 3131<sub>(+147) | 3182<sub>(+126) |  |
| 7.0 | 2025-11-07 | 2754<sub>(+new) | 2984<sub>(+new) | 3056<sub>(+new) |  |
| 6.0 | 2025-10-21 |  |  |  |  |
| 5.1 | 2025-01-01 |  |  |  |  |
| 5.0 | 2024-12-05 |  |  |  |  |
| 4.1 | 2024-11-24 |  |  |  |  |
| 4.0 | 2024-10-18 |  |  |  |  |
| 3.0 | 2024-09-09 |  |  |  |  |
| 2.5 | 2024-07-25 |  |  |  |  |
| 2.4 | 2024-07-08 |  |  |  |  |
| 2.3 | 2024-05-09 |  |  |  |  |
| 2.2 | 2024-04-09 |  |  |  |  |
| 2.1 | 2024-01-25 |  |  |  |  |
| 2.0 | 2024-01-18 |  |  |  |  |
| 1.1 | 2024-01-08 |  |  |  |  |
| 1.0 | 2023-12-07 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tcheran+<version>&body=###%20Engine%20name%0ATcheran%0A%0A###%20Version%0A13.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-04 06:33:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0", "12.0", "13.0"]
  y-axis "Elo Rating" 2700 --> 3600
  line "STC (8.0+0.08s)" [2754, 2932, 3011, 3128, 3228, 3271, 3312]
  line "STC (8.0+0.08s)" [2754, 2932, 3011, 3128, 3228, 3271, 3312]
  line "LTC (60.0+0.60s)" [2984, 3131, 3182, 3313, 3406, 3416, 3471]
  line "VLTC (2m24s+1.12s)" [3056, 3182, 3233, 3374, 3432, 3449, 3513]
  line "VLTC (2m24s+1.12s)" [3056, 3182, 3233, 3374, 3432, 3449, 3513]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 28 | 306 | 50% | 3515 | 85% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3471 | 28 | 294 | 51% | 3464 | 84% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3312 | 32 | 244 | 50% | 3309 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3449 | 24 | 404 | 50% | 3453 | 84% |
| 12.0 | LTC <sub>(60.0+0.60s)</sub> | 3416 | 25 | 380 | 51% | 3413 | 81% |
| 12.0 | STC <sub>(8.0+0.08s)</sub> | 3271 | 25 | 418 | 52% | 3255 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3432 | 23 | 434 | 51% | 3428 | 80% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3406 | 24 | 424 | 51% | 3397 | 79% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3228 | 25 | 448 | 51% | 3225 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3374 | 27 | 336 | 49% | 3382 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3313 | 30 | 268 | 49% | 3322 | 75% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3128 | 31 | 286 | 52% | 3116 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3233 | 38 | 180 | 50% | 3232 | 66% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3182 | 39 | 168 | 52% | 3167 | 65% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3011 | 37 | 212 | 47% | 3040 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3182 | 44 | 132 | 50% | 3181 | 64% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3131 | 37 | 204 | 57% | 3075 | 58% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2932 | 42 | 164 | 47% | 2955 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3056 | 51 | 116 | 47% | 3081 | 44% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2984 | 49 | 130 | 50% | 2963 | 42% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2754 | 54 | 116 | 56% | 2677 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |