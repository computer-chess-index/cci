# Engine: Tcheran

Author: Jonathan Gilchrist

Home: https://github.com/tcheran-chess/tcheran

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 13.0 | 2026-07-17 | 3318<sub>(+42) | 3479<sub>(+58) | 3518<sub>(+63) |  |
| 12.0 | 2026-05-08 | 3276<sub>(+43) | 3421<sub>(+10) | 3455<sub>(+18) |  |
| 11.0 | 2026-02-13 | 3233<sub>(+100) | 3411<sub>(+93) | 3437<sub>(+58) |  |
| 10.0 | 2025-12-28 | 3133<sub>(+118) | 3318<sub>(+132) | 3379<sub>(+140) |  |
| 9.0 | 2025-12-08 | 3015<sub>(+79) | 3186<sub>(+50) | 3239<sub>(+52) |  |
| 8.0 | 2025-11-27 | 2936<sub>(+178) | 3136<sub>(+148) | 3187<sub>(+127) |  |
| 7.0 | 2025-11-07 | 2758 | 2988 | 3060 |  |
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

Generated: 2026-08-18 06:32:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0", "12.0", "13.0"]
  y-axis "Elo Rating" 2700 --> 3600
  line "STC (8.0+0.08s)" [2758, 2936, 3015, 3133, 3233, 3276, 3318]
  line "STC (8.0+0.08s)" [2758, 2936, 3015, 3133, 3233, 3276, 3318]
  line "LTC (60.0+0.60s)" [2988, 3136, 3186, 3318, 3411, 3421, 3479]
  line "VLTC (2m24s+1.12s)" [3060, 3187, 3239, 3379, 3437, 3455, 3518]
  line "VLTC (2m24s+1.12s)" [3060, 3187, 3239, 3379, 3437, 3455, 3518]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3518 | 27 | 326 | 50% | 3521 | 86% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 28 | 306 | 51% | 3468 | 83% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3318 | 31 | 268 | 51% | 3314 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3455 | 24 | 404 | 50% | 3459 | 84% |
| 12.0 | LTC <sub>(60.0+0.60s)</sub> | 3421 | 25 | 380 | 51% | 3418 | 81% |
| 12.0 | STC <sub>(8.0+0.08s)</sub> | 3276 | 25 | 418 | 52% | 3260 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3437 | 23 | 434 | 51% | 3434 | 80% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3411 | 24 | 424 | 51% | 3402 | 79% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3233 | 25 | 448 | 51% | 3231 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3379 | 27 | 336 | 49% | 3387 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3318 | 30 | 268 | 49% | 3328 | 75% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3133 | 31 | 286 | 52% | 3121 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3239 | 38 | 180 | 50% | 3237 | 66% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3186 | 39 | 168 | 52% | 3173 | 65% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3015 | 37 | 212 | 47% | 3044 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3187 | 44 | 132 | 50% | 3185 | 64% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3136 | 37 | 204 | 57% | 3079 | 58% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2936 | 42 | 164 | 47% | 2959 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3060 | 51 | 116 | 47% | 3085 | 44% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2988 | 49 | 130 | 50% | 2967 | 42% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2758 | 54 | 116 | 56% | 2681 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |