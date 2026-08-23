# Engine: Tcheran

Author: Jonathan Gilchrist

Home: https://github.com/tcheran-chess/tcheran

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 13.0 | 2026-07-17 | 3324<sub>(+43) | 3483<sub>(+58) | 3522<sub>(+63) |  |
| 12.0 | 2026-05-08 | 3281<sub>(+44) | 3425<sub>(+9) | 3459<sub>(+18) |  |
| 11.0 | 2026-02-13 | 3237<sub>(+101) | 3416<sub>(+94) | 3441<sub>(+58) |  |
| 10.0 | 2025-12-28 | 3136<sub>(+117) | 3322<sub>(+132) | 3383<sub>(+140) |  |
| 9.0 | 2025-12-08 | 3019<sub>(+79) | 3190<sub>(+51) | 3243<sub>(+53) |  |
| 8.0 | 2025-11-27 | 2940<sub>(+179) | 3139<sub>(+149) | 3190<sub>(+125) |  |
| 7.0 | 2025-11-07 | 2761 | 2990 | 3065 |  |
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

Generated: 2026-08-23 06:29:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0", "12.0", "13.0"]
  y-axis "Elo Rating" 2700 --> 3600
  line "STC (8.0+0.08s)" [2761, 2940, 3019, 3136, 3237, 3281, 3324]
  line "STC (8.0+0.08s)" [2761, 2940, 3019, 3136, 3237, 3281, 3324]
  line "LTC (60.0+0.60s)" [2990, 3139, 3190, 3322, 3416, 3425, 3483]
  line "VLTC (2m24s+1.12s)" [3065, 3190, 3243, 3383, 3441, 3459, 3522]
  line "VLTC (2m24s+1.12s)" [3065, 3190, 3243, 3383, 3441, 3459, 3522]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3522 | 26 | 334 | 50% | 3525 | 86% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3483 | 27 | 326 | 51% | 3475 | 84% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3324 | 30 | 272 | 51% | 3318 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3459 | 24 | 404 | 50% | 3463 | 84% |
| 12.0 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 25 | 380 | 51% | 3422 | 81% |
| 12.0 | STC <sub>(8.0+0.08s)</sub> | 3281 | 25 | 418 | 52% | 3264 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3441 | 23 | 434 | 51% | 3438 | 80% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3416 | 24 | 424 | 51% | 3406 | 79% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3237 | 25 | 448 | 51% | 3235 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3383 | 27 | 336 | 49% | 3393 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3322 | 30 | 268 | 49% | 3332 | 75% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3136 | 31 | 286 | 52% | 3124 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3243 | 38 | 180 | 50% | 3241 | 66% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3190 | 39 | 168 | 52% | 3177 | 65% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3019 | 37 | 212 | 47% | 3048 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3190 | 44 | 132 | 50% | 3189 | 64% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3139 | 37 | 204 | 57% | 3083 | 58% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2940 | 42 | 164 | 47% | 2963 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3065 | 51 | 116 | 47% | 3089 | 44% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2990 | 49 | 130 | 50% | 2971 | 42% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2761 | 54 | 116 | 56% | 2684 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |