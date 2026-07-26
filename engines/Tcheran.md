# Engine: Tcheran

Author: Jonathan Gilchrist

Home: https://github.com/tcheran-chess/tcheran

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 13.0 | 2026-07-17 | 3313<sub>(+41) | 3472<sub>(+55) | 3518<sub>(+67) |  |
| 12.0 | 2026-05-08 | 3272<sub>(+43) | 3417<sub>(+10) | 3451<sub>(+18) |  |
| 11.0 | 2026-02-13 | 3229<sub>(+98) | 3407<sub>(+93) | 3433<sub>(+58) |  |
| 10.0 | 2025-12-28 | 3131<sub>(+119) | 3314<sub>(+131) | 3375<sub>(+140) |  |
| 9.0 | 2025-12-08 | 3012<sub>(+78) | 3183<sub>(+50) | 3235<sub>(+52) |  |
| 8.0 | 2025-11-27 | 2934<sub>(+179) | 3133<sub>(+148) | 3183<sub>(+125) |  |
| 7.0 | 2025-11-07 | 2755<sub>(+new) | 2985<sub>(+new) | 3058<sub>(+new) |  |
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

Generated: 2026-07-26 06:29:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0", "12.0", "13.0"]
  y-axis "Elo Rating" 2700 --> 3600
  line "STC (8.0+0.08s)" [2755, 2934, 3012, 3131, 3229, 3272, 3313]
  line "STC (8.0+0.08s)" [2755, 2934, 3012, 3131, 3229, 3272, 3313]
  line "LTC (60.0+0.60s)" [2985, 3133, 3183, 3314, 3407, 3417, 3472]
  line "VLTC (2m24s+1.12s)" [3058, 3183, 3235, 3375, 3433, 3451, 3518]
  line "VLTC (2m24s+1.12s)" [3058, 3183, 3235, 3375, 3433, 3451, 3518]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3518 | 32 | 228 | 50% | 3518 | 83% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3472 | 32 | 230 | 52% | 3461 | 83% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3313 | 36 | 192 | 51% | 3308 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3451 | 24 | 404 | 50% | 3455 | 84% |
| 12.0 | LTC <sub>(60.0+0.60s)</sub> | 3417 | 25 | 380 | 51% | 3413 | 81% |
| 12.0 | STC <sub>(8.0+0.08s)</sub> | 3272 | 25 | 418 | 52% | 3258 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3433 | 23 | 434 | 51% | 3429 | 80% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3407 | 24 | 424 | 51% | 3398 | 79% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3229 | 25 | 448 | 51% | 3227 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3375 | 27 | 336 | 49% | 3383 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3314 | 30 | 268 | 49% | 3324 | 75% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3131 | 31 | 286 | 52% | 3117 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3235 | 38 | 180 | 50% | 3233 | 66% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3183 | 39 | 168 | 52% | 3168 | 65% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3012 | 37 | 212 | 47% | 3042 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3183 | 44 | 132 | 50% | 3182 | 64% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3133 | 37 | 204 | 57% | 3077 | 58% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2934 | 42 | 164 | 47% | 2957 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3058 | 51 | 116 | 47% | 3082 | 44% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2985 | 49 | 130 | 50% | 2966 | 42% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2755 | 54 | 116 | 56% | 2678 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |