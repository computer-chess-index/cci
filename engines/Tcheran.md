# Engine: Tcheran

Author: Jonathan Gilchrist

Home: https://github.com/tcheran-chess/tcheran

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 13.0 | 2026-07-17 | 3313<sub>(+42) | 3471<sub>(+55) | 3511<sub>(+62) |  |
| 12.0 | 2026-05-08 | 3271<sub>(+43) | 3416<sub>(+10) | 3449<sub>(+17) |  |
| 11.0 | 2026-02-13 | 3228<sub>(+101) | 3406<sub>(+94) | 3432<sub>(+58) |  |
| 10.0 | 2025-12-28 | 3127<sub>(+118) | 3312<sub>(+131) | 3374<sub>(+141) |  |
| 9.0 | 2025-12-08 | 3009<sub>(+78) | 3181<sub>(+52) | 3233<sub>(+52) |  |
| 8.0 | 2025-11-27 | 2931<sub>(+178) | 3129<sub>(+147) | 3181<sub>(+126) |  |
| 7.0 | 2025-11-07 | 2753 | 2982 | 3055 |  |
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

Generated: 2026-08-12 08:17:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0", "12.0", "13.0"]
  y-axis "Elo Rating" 2700 --> 3600
  line "STC (8.0+0.08s)" [2753, 2931, 3009, 3127, 3228, 3271, 3313]
  line "STC (8.0+0.08s)" [2753, 2931, 3009, 3127, 3228, 3271, 3313]
  line "LTC (60.0+0.60s)" [2982, 3129, 3181, 3312, 3406, 3416, 3471]
  line "VLTC (2m24s+1.12s)" [3055, 3181, 3233, 3374, 3432, 3449, 3511]
  line "VLTC (2m24s+1.12s)" [3055, 3181, 3233, 3374, 3432, 3449, 3511]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3511 | 27 | 322 | 50% | 3515 | 85% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3471 | 28 | 294 | 51% | 3463 | 84% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3313 | 31 | 268 | 51% | 3309 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3449 | 24 | 404 | 50% | 3453 | 84% |
| 12.0 | LTC <sub>(60.0+0.60s)</sub> | 3416 | 25 | 380 | 51% | 3411 | 81% |
| 12.0 | STC <sub>(8.0+0.08s)</sub> | 3271 | 25 | 418 | 52% | 3255 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3432 | 23 | 434 | 51% | 3428 | 80% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3406 | 24 | 424 | 51% | 3397 | 79% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3228 | 25 | 448 | 51% | 3224 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3374 | 27 | 336 | 49% | 3382 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3312 | 30 | 268 | 49% | 3322 | 75% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3127 | 31 | 286 | 52% | 3114 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3233 | 38 | 180 | 50% | 3232 | 66% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3181 | 39 | 168 | 52% | 3167 | 65% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3009 | 37 | 212 | 47% | 3039 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3181 | 44 | 132 | 50% | 3179 | 64% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3129 | 37 | 204 | 57% | 3074 | 58% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2931 | 42 | 164 | 47% | 2954 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3055 | 51 | 116 | 47% | 3079 | 44% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2982 | 49 | 130 | 50% | 2962 | 42% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2753 | 54 | 116 | 56% | 2676 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |