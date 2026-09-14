# Engine: Tcheran

Author: Jonathan Gilchrist

Home: https://github.com/tcheran-chess/tcheran

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 13.0 | 2026-07-17 | 3332<sub>(+45) | 3497<sub>(+64) | 3529<sub>(+62) |  |
| 12.0 | 2026-05-08 | 3287<sub>(+43) | 3433<sub>(+9) | 3467<sub>(+18) |  |
| 11.0 | 2026-02-13 | 3244<sub>(+101) | 3424<sub>(+95) | 3449<sub>(+58) |  |
| 10.0 | 2025-12-28 | 3143<sub>(+118) | 3329<sub>(+132) | 3391<sub>(+142) |  |
| 9.0 | 2025-12-08 | 3025<sub>(+78) | 3197<sub>(+51) | 3249<sub>(+52) |  |
| 8.0 | 2025-11-27 | 2947<sub>(+179) | 3146<sub>(+148) | 3197<sub>(+126) |  |
| 7.0 | 2025-11-07 | 2768 | 2998 | 3071 |  |
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

Generated: 2026-09-14 04:42:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0", "12.0", "13.0"]
  y-axis "Elo Rating" 2700 --> 3600
  line "" [2768, 2947, 3025, 3143, 3244, 3287, 3332]
  line "STC (8.0+0.08s)" [2768, 2947, 3025, 3143, 3244, 3287, 3332]
  line "LTC (60.0+0.60s)" [2998, 3146, 3197, 3329, 3424, 3433, 3497]
  line "" [3071, 3197, 3249, 3391, 3449, 3467, 3529]
  line "VLTC (2m24s+1.12s)" [3071, 3197, 3249, 3391, 3449, 3467, 3529]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3529 | 24 | 400 | 50% | 3533 | 86% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3497 | 25 | 378 | 52% | 3486 | 83% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3332 | 28 | 312 | 51% | 3325 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3467 | 24 | 404 | 50% | 3471 | 84% |
| 12.0 | LTC <sub>(60.0+0.60s)</sub> | 3433 | 25 | 380 | 51% | 3430 | 81% |
| 12.0 | STC <sub>(8.0+0.08s)</sub> | 3287 | 25 | 418 | 52% | 3271 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3449 | 23 | 434 | 51% | 3445 | 80% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3424 | 24 | 424 | 51% | 3414 | 79% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3244 | 25 | 448 | 51% | 3241 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3391 | 27 | 336 | 49% | 3399 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3329 | 30 | 268 | 49% | 3340 | 75% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3143 | 31 | 286 | 52% | 3131 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3249 | 38 | 180 | 50% | 3248 | 66% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3197 | 39 | 168 | 52% | 3182 | 65% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3025 | 37 | 212 | 47% | 3054 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3197 | 44 | 132 | 50% | 3195 | 64% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3146 | 37 | 204 | 57% | 3090 | 58% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2947 | 42 | 164 | 47% | 2970 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3071 | 51 | 116 | 47% | 3096 | 44% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2998 | 49 | 130 | 50% | 2978 | 42% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2768 | 54 | 116 | 56% | 2691 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |