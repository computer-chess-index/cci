# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.1 | 2026-02-25 | 3245<sub>(+52) | 3421<sub>(+5) | 3445<sub>(-33) |  |
| 6.1 | 2026-02-10 | 3193<sub>(0) | 3416<sub>(+17) | 3478<sub>(+26) |  |
| 6 | 2026-02-07 | 3193<sub>(+12) | 3399<sub>(+5) | 3452<sub>(+16) |  |
| 5.00.02 | 2025-09-24 | 3181<sub>(+new) | 3394<sub>(+new) | 3436<sub>(+new) |  |
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

Generated: 2026-05-04 06:29:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3181, 3193, 3193, 3245]
  line "STC (8.0+0.08s)" [3181, 3193, 3193, 3245]
  line "LTC (60.0+0.60s)" [3394, 3399, 3416, 3421]
  line "VLTC (2m24s+1.12s)" [3436, 3452, 3478, 3445]
  line "VLTC (2m24s+1.12s)" [3436, 3452, 3478, 3445]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3445 | 26 | 358 | 50% | 3445 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3421 | 27 | 356 | 50% | 3417 | 71% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3245 | 27 | 372 | 51% | 3240 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3478 | 31 | 256 | 50% | 3475 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3416 | 27 | 332 | 49% | 3420 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3193 | 32 | 276 | 51% | 3187 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3452 | 36 | 192 | 50% | 3451 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3399 | 33 | 228 | 52% | 3389 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3193 | 34 | 244 | 49% | 3198 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3436 | 27 | 356 | 54% | 3399 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3394 | 31 | 272 | 51% | 3372 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3181 | 32 | 280 | 55% | 3124 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |