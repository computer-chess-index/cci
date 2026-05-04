# Engine: Tcheran

Author: Jonathan Gilchrist

Home: https://github.com/tcheran-chess/tcheran

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.0 | 2026-02-13 | 3287<sub>(+101) | 3463<sub>(+95) | 3488<sub>(+58) |  |
| 10.0 | 2025-12-28 | 3186<sub>(+117) | 3368<sub>(+129) | 3430<sub>(+140) |  |
| 9.0 | 2025-12-08 | 3069<sub>(+79) | 3239<sub>(+49) | 3290<sub>(+50) |  |
| 8.0 | 2025-11-27 | 2990<sub>(+177) | 3190<sub>(+148) | 3240<sub>(+126) |  |
| 7.0 | 2025-11-07 | 2813<sub>(+new) | 3042<sub>(+new) | 3114<sub>(+new) |  |
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

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tcheran+<version>&body=###%20Engine%20name%0ATcheran%0A%0A###%20Version%0A11.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-04 06:28:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0"]
  y-axis "Elo Rating" 2800 --> 3500
  line "STC (8.0+0.08s)" [2813, 2990, 3069, 3186, 3287]
  line "STC (8.0+0.08s)" [2813, 2990, 3069, 3186, 3287]
  line "LTC (60.0+0.60s)" [3042, 3190, 3239, 3368, 3463]
  line "VLTC (2m24s+1.12s)" [3114, 3240, 3290, 3430, 3488]
  line "VLTC (2m24s+1.12s)" [3114, 3240, 3290, 3430, 3488]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3488 | 23 | 434 | 51% | 3484 | 80% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3463 | 24 | 424 | 51% | 3453 | 79% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3287 | 25 | 432 | 51% | 3282 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3430 | 27 | 336 | 49% | 3438 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3368 | 30 | 268 | 49% | 3379 | 75% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3186 | 31 | 286 | 52% | 3174 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3290 | 38 | 180 | 50% | 3289 | 66% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3239 | 39 | 168 | 52% | 3225 | 65% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3069 | 37 | 212 | 47% | 3098 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3240 | 44 | 132 | 50% | 3237 | 64% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3190 | 37 | 204 | 57% | 3133 | 58% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2990 | 42 | 164 | 47% | 3012 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3114 | 51 | 116 | 47% | 3139 | 44% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3042 | 49 | 130 | 50% | 3023 | 42% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2813 | 54 | 116 | 56% | 2736 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |