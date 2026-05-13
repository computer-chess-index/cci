# Engine: Tcheran

Author: Jonathan Gilchrist

Home: https://github.com/tcheran-chess/tcheran

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 12.0 | 2026-05-08 | 3289<sub>(0) | 3468<sub>(+3) | 3499<sub>(+8) |  |
| 11.0 | 2026-02-13 | 3289<sub>(+99) | 3465<sub>(+93) | 3491<sub>(+58) |  |
| 10.0 | 2025-12-28 | 3190<sub>(+119) | 3372<sub>(+129) | 3433<sub>(+140) |  |
| 9.0 | 2025-12-08 | 3071<sub>(+78) | 3243<sub>(+50) | 3293<sub>(+50) |  |
| 8.0 | 2025-11-27 | 2993<sub>(+178) | 3193<sub>(+149) | 3243<sub>(+126) |  |
| 7.0 | 2025-11-07 | 2815<sub>(+new) | 3044<sub>(+new) | 3117<sub>(+new) |  |
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

Generated: 2026-05-13 06:30:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0", "12.0"]
  y-axis "Elo Rating" 2800 --> 3500
  line "STC (8.0+0.08s)" [2815, 2993, 3071, 3190, 3289, 3289]
  line "STC (8.0+0.08s)" [2815, 2993, 3071, 3190, 3289, 3289]
  line "LTC (60.0+0.60s)" [3044, 3193, 3243, 3372, 3465, 3468]
  line "VLTC (2m24s+1.12s)" [3117, 3243, 3293, 3433, 3491, 3499]
  line "VLTC (2m24s+1.12s)" [3117, 3243, 3293, 3433, 3491, 3499]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3499 | 41 | 134 | 50% | 3497 | 86% |
| 12.0 | LTC <sub>(60.0+0.60s)</sub> | 3468 | 43 | 128 | 50% | 3465 | 80% |
| 12.0 | STC <sub>(8.0+0.08s)</sub> | 3289 | 50 | 100 | 51% | 3287 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3491 | 23 | 434 | 51% | 3487 | 80% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3465 | 24 | 424 | 51% | 3456 | 79% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3289 | 25 | 448 | 51% | 3285 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3433 | 27 | 336 | 49% | 3441 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3372 | 30 | 268 | 49% | 3382 | 75% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3190 | 31 | 286 | 52% | 3177 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3293 | 38 | 180 | 50% | 3293 | 66% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3243 | 39 | 168 | 52% | 3228 | 65% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3071 | 37 | 212 | 47% | 3101 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3243 | 44 | 132 | 50% | 3241 | 64% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3193 | 37 | 204 | 57% | 3136 | 58% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2993 | 42 | 164 | 47% | 3015 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3117 | 51 | 116 | 47% | 3141 | 44% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3044 | 49 | 130 | 50% | 3025 | 42% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2815 | 54 | 116 | 56% | 2738 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |