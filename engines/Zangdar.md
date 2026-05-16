# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.1 | 2026-02-25 | 3251<sub>(+53) | 3425<sub>(+4) | 3449<sub>(-34) |  |
| 6.1 | 2026-02-10 | 3198<sub>(+1) | 3421<sub>(+18) | 3483<sub>(+27) |  |
| 6 | 2026-02-07 | 3197<sub>(+11) | 3403<sub>(+5) | 3456<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3186<sub>(+new) | 3398<sub>(+new) | 3441<sub>(+new) |  |
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

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zangdar+<version>&body=###%20Engine%20name%0AZangdar%0A%0A###%20Version%0A6.1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-16 06:29:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3186, 3197, 3198, 3251]
  line "STC (8.0+0.08s)" [3186, 3197, 3198, 3251]
  line "LTC (60.0+0.60s)" [3398, 3403, 3421, 3425]
  line "VLTC (2m24s+1.12s)" [3441, 3456, 3483, 3449]
  line "VLTC (2m24s+1.12s)" [3441, 3456, 3483, 3449]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3449 | 26 | 358 | 50% | 3451 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3425 | 27 | 356 | 50% | 3422 | 71% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3251 | 27 | 384 | 51% | 3245 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3483 | 31 | 256 | 50% | 3480 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3421 | 27 | 332 | 49% | 3425 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3198 | 32 | 276 | 51% | 3193 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3456 | 36 | 192 | 50% | 3456 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3403 | 33 | 228 | 52% | 3394 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3197 | 34 | 244 | 49% | 3204 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3441 | 27 | 356 | 54% | 3405 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3398 | 31 | 272 | 51% | 3378 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3186 | 32 | 280 | 55% | 3128 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |