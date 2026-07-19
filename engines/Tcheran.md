# Engine: Tcheran

Author: Jonathan Gilchrist

Home: https://github.com/tcheran-chess/tcheran

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 13.0 | 2026-07-17 | 3293<sub>(+23) | 3461<sub>(+48) | 3515<sub>(+67) |  |
| 12.0 | 2026-05-08 | 3270<sub>(+43) | 3413<sub>(+10) | 3448<sub>(+19) |  |
| 11.0 | 2026-02-13 | 3227<sub>(+100) | 3403<sub>(+93) | 3429<sub>(+57) |  |
| 10.0 | 2025-12-28 | 3127<sub>(+118) | 3310<sub>(+131) | 3372<sub>(+140) |  |
| 9.0 | 2025-12-08 | 3009<sub>(+78) | 3179<sub>(+50) | 3232<sub>(+53) |  |
| 8.0 | 2025-11-27 | 2931<sub>(+178) | 3129<sub>(+148) | 3179<sub>(+125) |  |
| 7.0 | 2025-11-07 | 2753<sub>(+new) | 2981<sub>(+new) | 3054<sub>(+new) |  |
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

Generated: 2026-07-19 06:29:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0", "12.0", "13.0"]
  y-axis "Elo Rating" 2700 --> 3600
  line "STC (8.0+0.08s)" [2753, 2931, 3009, 3127, 3227, 3270, 3293]
  line "STC (8.0+0.08s)" [2753, 2931, 3009, 3127, 3227, 3270, 3293]
  line "LTC (60.0+0.60s)" [2981, 3129, 3179, 3310, 3403, 3413, 3461]
  line "VLTC (2m24s+1.12s)" [3054, 3179, 3232, 3372, 3429, 3448, 3515]
  line "VLTC (2m24s+1.12s)" [3054, 3179, 3232, 3372, 3429, 3448, 3515]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3515 | 41 | 140 | 50% | 3518 | 82% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3461 | 41 | 138 | 52% | 3449 | 82% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3293 | 49 | 100 | 50% | 3297 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3448 | 24 | 404 | 50% | 3452 | 84% |
| 12.0 | LTC <sub>(60.0+0.60s)</sub> | 3413 | 25 | 380 | 51% | 3410 | 81% |
| 12.0 | STC <sub>(8.0+0.08s)</sub> | 3270 | 25 | 418 | 52% | 3254 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3429 | 23 | 434 | 51% | 3426 | 80% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3403 | 24 | 424 | 51% | 3394 | 79% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3227 | 25 | 448 | 51% | 3222 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3372 | 27 | 336 | 49% | 3380 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3310 | 30 | 268 | 49% | 3320 | 75% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3127 | 31 | 286 | 52% | 3114 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3232 | 38 | 180 | 50% | 3231 | 66% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3179 | 39 | 168 | 52% | 3166 | 65% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3009 | 37 | 212 | 47% | 3038 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3179 | 44 | 132 | 50% | 3178 | 64% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3129 | 37 | 204 | 57% | 3074 | 58% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2931 | 42 | 164 | 47% | 2952 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3054 | 51 | 116 | 47% | 3078 | 44% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2981 | 49 | 130 | 50% | 2962 | 42% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2753 | 54 | 116 | 56% | 2676 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |