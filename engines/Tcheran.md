# Engine: Tcheran

Author: Jonathan Gilchrist

Home: https://github.com/tcheran-chess/tcheran

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 12.0 | 2026-05-08 | 3325<sub>(+35) | 3474<sub>(+9) | 3511<sub>(+19) |  |
| 11.0 | 2026-02-13 | 3290<sub>(+100) | 3465<sub>(+93) | 3492<sub>(+58) |  |
| 10.0 | 2025-12-28 | 3190<sub>(+117) | 3372<sub>(+129) | 3434<sub>(+140) |  |
| 9.0 | 2025-12-08 | 3073<sub>(+79) | 3243<sub>(+49) | 3294<sub>(+50) |  |
| 8.0 | 2025-11-27 | 2994<sub>(+178) | 3194<sub>(+148) | 3244<sub>(+125) |  |
| 7.0 | 2025-11-07 | 2816<sub>(+new) | 3046<sub>(+new) | 3119<sub>(+new) |  |
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

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tcheran+<version>&body=###%20Engine%20name%0ATcheran%0A%0A###%20Version%0A12.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-15 06:28:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0", "12.0"]
  y-axis "Elo Rating" 2800 --> 3600
  line "STC (8.0+0.08s)" [2816, 2994, 3073, 3190, 3290, 3325]
  line "STC (8.0+0.08s)" [2816, 2994, 3073, 3190, 3290, 3325]
  line "LTC (60.0+0.60s)" [3046, 3194, 3243, 3372, 3465, 3474]
  line "VLTC (2m24s+1.12s)" [3119, 3244, 3294, 3434, 3492, 3511]
  line "VLTC (2m24s+1.12s)" [3119, 3244, 3294, 3434, 3492, 3511]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3511 | 31 | 238 | 51% | 3507 | 84% |
| 12.0 | LTC <sub>(60.0+0.60s)</sub> | 3474 | 32 | 240 | 51% | 3471 | 79% |
| 12.0 | STC <sub>(8.0+0.08s)</sub> | 3325 | 29 | 312 | 52% | 3310 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3492 | 23 | 434 | 51% | 3488 | 80% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3465 | 24 | 424 | 51% | 3457 | 79% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3290 | 25 | 448 | 51% | 3286 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3434 | 27 | 336 | 49% | 3443 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3372 | 30 | 268 | 49% | 3383 | 75% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3190 | 31 | 286 | 52% | 3178 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3294 | 38 | 180 | 50% | 3293 | 66% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3243 | 39 | 168 | 52% | 3229 | 65% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3073 | 37 | 212 | 47% | 3102 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3244 | 44 | 132 | 50% | 3241 | 64% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3194 | 37 | 204 | 57% | 3137 | 58% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2994 | 42 | 164 | 47% | 3016 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3119 | 51 | 116 | 47% | 3143 | 44% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3046 | 49 | 130 | 50% | 3027 | 42% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2816 | 54 | 116 | 56% | 2739 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |