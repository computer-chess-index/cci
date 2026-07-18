# Engine: Zangdar

Author: Carbecq

Home: https://github.com/Carbecq/Zangdar

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7 | 2026-07-13 | 3297<sub>(+108) | 3449<sub>(+86) | 3491<sub>(+104) |  |
| 6.1.1 | 2026-02-25 | 3189<sub>(+56) | 3363<sub>(+6) | 3387<sub>(-31) |  |
| 6.1 | 2026-02-10 | 3133<sub>(+1) | 3357<sub>(+17) | 3418<sub>(+25) |  |
| 6 | 2026-02-07 | 3132<sub>(+11) | 3340<sub>(+5) | 3393<sub>(+15) |  |
| 5.00.02 | 2025-09-24 | 3121<sub>(+new) | 3335<sub>(+new) | 3378<sub>(+new) |  |
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

Generated: 2026-07-18 08:22:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.00.02", "6", "6.1", "6.1.1", "7"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3121, 3132, 3133, 3189, 3297]
  line "STC (8.0+0.08s)" [3121, 3132, 3133, 3189, 3297]
  line "LTC (60.0+0.60s)" [3335, 3340, 3357, 3363, 3449]
  line "VLTC (2m24s+1.12s)" [3378, 3393, 3418, 3387, 3491]
  line "VLTC (2m24s+1.12s)" [3378, 3393, 3418, 3387, 3491]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | VLTC <sub>(2m24s+1.12s)</sub> | 3491 | 50 | 96 | 49% | 3494 | 78% |
| 7 | LTC <sub>(60.0+0.60s)</sub> | 3449 | 46 | 110 | 51% | 3441 | 81% |
| 7 | STC <sub>(8.0+0.08s)</sub> | 3297 | 42 | 144 | 50% | 3297 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3387 | 25 | 394 | 50% | 3386 | 75% |
| 6.1.1 | LTC <sub>(60.0+0.60s)</sub> | 3363 | 26 | 364 | 51% | 3359 | 70% |
| 6.1.1 | STC <sub>(8.0+0.08s)</sub> | 3189 | 25 | 444 | 51% | 3183 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3418 | 31 | 256 | 50% | 3417 | 77% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3357 | 27 | 332 | 49% | 3360 | 75% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3133 | 32 | 276 | 51% | 3128 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 | VLTC <sub>(2m24s+1.12s)</sub> | 3393 | 36 | 192 | 50% | 3393 | 76% |
| 6 | LTC <sub>(60.0+0.60s)</sub> | 3340 | 33 | 228 | 52% | 3330 | 71% |
| 6 | STC <sub>(8.0+0.08s)</sub> | 3132 | 34 | 244 | 49% | 3137 | 52% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.00.02 | VLTC <sub>(2m24s+1.12s)</sub> | 3378 | 27 | 356 | 54% | 3340 | 74% |
| 5.00.02 | LTC <sub>(60.0+0.60s)</sub> | 3335 | 31 | 272 | 51% | 3313 | 71% |
| 5.00.02 | STC <sub>(8.0+0.08s)</sub> | 3121 | 32 | 280 | 55% | 3065 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |