# Engine: Tcheran

Author: Jonathan Gilchrist

Home: https://github.com/tcheran-chess/tcheran

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 13.0 | 2026-07-17 | 3324<sub>(+43) | 3482<sub>(+57) | 3524<sub>(+64) |  |
| 12.0 | 2026-05-08 | 3281<sub>(+44) | 3425<sub>(+9) | 3460<sub>(+17) |  |
| 11.0 | 2026-02-13 | 3237<sub>(+100) | 3416<sub>(+94) | 3443<sub>(+59) |  |
| 10.0 | 2025-12-28 | 3137<sub>(+118) | 3322<sub>(+131) | 3384<sub>(+140) |  |
| 9.0 | 2025-12-08 | 3019<sub>(+79) | 3191<sub>(+51) | 3244<sub>(+53) |  |
| 8.0 | 2025-11-27 | 2940<sub>(+178) | 3140<sub>(+148) | 3191<sub>(+126) |  |
| 7.0 | 2025-11-07 | 2762 | 2992 | 3065 |  |
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

Generated: 2026-08-25 06:37:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0", "12.0", "13.0"]
  y-axis "Elo Rating" 2700 --> 3600
  line "STC (8.0+0.08s)" [2762, 2940, 3019, 3137, 3237, 3281, 3324]
  line "STC (8.0+0.08s)" [2762, 2940, 3019, 3137, 3237, 3281, 3324]
  line "LTC (60.0+0.60s)" [2992, 3140, 3191, 3322, 3416, 3425, 3482]
  line "VLTC (2m24s+1.12s)" [3065, 3191, 3244, 3384, 3443, 3460, 3524]
  line "VLTC (2m24s+1.12s)" [3065, 3191, 3244, 3384, 3443, 3460, 3524]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3524 | 26 | 342 | 50% | 3525 | 86% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3482 | 27 | 330 | 51% | 3475 | 84% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3324 | 30 | 272 | 51% | 3318 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3460 | 24 | 404 | 50% | 3464 | 84% |
| 12.0 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 25 | 380 | 51% | 3422 | 81% |
| 12.0 | STC <sub>(8.0+0.08s)</sub> | 3281 | 25 | 418 | 52% | 3266 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3443 | 23 | 434 | 51% | 3438 | 80% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3416 | 24 | 424 | 51% | 3407 | 79% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3237 | 25 | 448 | 51% | 3235 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3384 | 27 | 336 | 49% | 3393 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3322 | 30 | 268 | 49% | 3333 | 75% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3137 | 31 | 286 | 52% | 3125 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3244 | 38 | 180 | 50% | 3243 | 66% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3191 | 39 | 168 | 52% | 3177 | 65% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3019 | 37 | 212 | 47% | 3048 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3191 | 44 | 132 | 50% | 3190 | 64% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3140 | 37 | 204 | 57% | 3083 | 58% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2940 | 42 | 164 | 47% | 2963 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3065 | 51 | 116 | 47% | 3089 | 44% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2992 | 49 | 130 | 50% | 2971 | 42% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2762 | 54 | 116 | 56% | 2685 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |