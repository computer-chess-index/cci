# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3289<sub>(+98) | 3448<sub>(+82) | 3487<sub>(+96) |  |
| 6.1.1 | 2026-02-25 | 3191<sub>(+55) | 3366<sub>(+6) | 3391<sub>(-31) |  |
| 6.1 | 2026-02-10 | 3136<sub>(+1) | 3360<sub>(+17) | 3422<sub>(+27) |  |
| 6 | 2026-02-07 | 3135<sub>(+12) | 3343<sub>(+4) | 3395<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3123<sub>(+new) | 3339<sub>(+new) | 3380<sub>(+new) |  |
| 5.00.01 | 2025-09-23 |  |  |  |  |
| 5 | 2025-09-22 |  |  |  |  |
| 4.04.01 | 2025-08-31 |  |  |  |  |
| 4.04 | 2025-06-16 |  |  |  |  |
| 4.01 | 2025-05-17 |  |  |  |  |
| 3.04 | 2024-12-27 |  |  |  |  |
| 2.31.04 | 2024-12-08 |  |  |  |  |
| 2.31 | 2024-11-15 |  |  |  |  |
| 2.30 | 2024-08-25 |  |  |  |  |
| 2.29.01 | 2024-05-11 |  |  |  |  |
| 2.29 | 2024-05-07 |  |  |  |  |
| 2.27.08 | 2024-03-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zangdar+<version>&body=###%20Engine%20name%0AZangdar%0A%0A###%20Version%0A7" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-06 06:36:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3123, 3135, 3136, 3191, 3289]
  line "STC (8.0+0.08s)" [3123, 3135, 3136, 3191, 3289]
  line "LTC (60.0+0.60s)" [3339, 3343, 3360, 3366, 3448]
  line "VLTC (2m24s+1.12s)" [3380, 3395, 3422, 3391, 3487]
  line "VLTC (2m24s+1.12s)" [3380, 3395, 3422, 3391, 3487]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3487 | 42 | 136 | 49% | 3491 | 79% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3448 | 41 | 142 | 51% | 3445 | 80% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3289 | 30 | 276 | 49% | 3293 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3391 | 25 | 394 | 50% | 3389 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3366 | 26 | 364 | 51% | 3362 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3191 | 25 | 444 | 51% | 3186 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3422 | 31 | 256 | 50% | 3420 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3360 | 27 | 332 | 49% | 3364 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3136 | 32 | 276 | 51% | 3129 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3395 | 36 | 192 | 50% | 3395 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3343 | 33 | 228 | 52% | 3333 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3135 | 34 | 244 | 49% | 3140 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3380 | 27 | 356 | 54% | 3344 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3339 | 31 | 272 | 51% | 3317 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3123 | 32 | 280 | 55% | 3066 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |