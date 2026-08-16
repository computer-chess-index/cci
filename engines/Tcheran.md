# Engine: Tcheran

Author: Jonathan Gilchrist

Home: https://github.com/tcheran-chess/tcheran

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 13.0 | 2026-07-17 | 3314<sub>(+42) | 3472<sub>(+55) | 3513<sub>(+62) |  |
| 12.0 | 2026-05-08 | 3272<sub>(+43) | 3417<sub>(+10) | 3451<sub>(+18) |  |
| 11.0 | 2026-02-13 | 3229<sub>(+101) | 3407<sub>(+94) | 3433<sub>(+58) |  |
| 10.0 | 2025-12-28 | 3128<sub>(+117) | 3313<sub>(+131) | 3375<sub>(+140) |  |
| 9.0 | 2025-12-08 | 3011<sub>(+79) | 3182<sub>(+51) | 3235<sub>(+53) |  |
| 8.0 | 2025-11-27 | 2932<sub>(+178) | 3131<sub>(+147) | 3182<sub>(+126) |  |
| 7.0 | 2025-11-07 | 2754 | 2984 | 3056 |  |
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

Generated: 2026-08-16 06:29:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0", "12.0", "13.0"]
  y-axis "Elo Rating" 2700 --> 3600
  line "STC (8.0+0.08s)" [2754, 2932, 3011, 3128, 3229, 3272, 3314]
  line "STC (8.0+0.08s)" [2754, 2932, 3011, 3128, 3229, 3272, 3314]
  line "LTC (60.0+0.60s)" [2984, 3131, 3182, 3313, 3407, 3417, 3472]
  line "VLTC (2m24s+1.12s)" [3056, 3182, 3235, 3375, 3433, 3451, 3513]
  line "VLTC (2m24s+1.12s)" [3056, 3182, 3235, 3375, 3433, 3451, 3513]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 27 | 322 | 50% | 3517 | 85% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3472 | 28 | 298 | 51% | 3464 | 84% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3314 | 31 | 268 | 51% | 3309 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3451 | 24 | 404 | 50% | 3455 | 84% |
| 12.0 | LTC <sub>(60.0+0.60s)</sub> | 3417 | 25 | 380 | 51% | 3413 | 81% |
| 12.0 | STC <sub>(8.0+0.08s)</sub> | 3272 | 25 | 418 | 52% | 3256 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3433 | 23 | 434 | 51% | 3429 | 80% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3407 | 24 | 424 | 51% | 3398 | 79% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3229 | 25 | 448 | 51% | 3225 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3375 | 27 | 336 | 49% | 3383 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3313 | 30 | 268 | 49% | 3324 | 75% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3128 | 31 | 286 | 52% | 3116 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3235 | 38 | 180 | 50% | 3233 | 66% |
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