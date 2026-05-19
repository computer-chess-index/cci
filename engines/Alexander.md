# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3151<sub>(-4) | 3393<sub>(+30) | 3434<sub>(+16) |  |
| 8.2 | 2026-03-23 | 3155<sub>(-24) | 3363<sub>(-7) | 3418<sub>(-12) |  |
| 8.1 | 2026-03-16 | 3179<sub>(+38) | 3370<sub>(-12) | 3430<sub>(+12) |  |
| 8.0 | 2026-03-10 | 3141<sub>(+new) | 3382<sub>(+new) | 3418<sub>(+new) |  |
| 7.0 | 2025-10-20 |  |  |  |  |
| 6.1 | 2025-10-07 |  |  |  |  |
| 6.0 | 2025-09-20 |  |  |  |  |
| 5.0 | 2025-02-14 |  |  |  |  |
| 4.1 | 2025-02-07 |  |  |  |  |
| 4.0 | 2025-01-17 |  |  |  |  |
| 3.1 | 2024-11-11 |  |  |  |  |
| 3.0 | 2024-10-24 |  |  |  |  |
| Santiago | 2024-10-17 |  |  |  |  |
| 2.0 | 2024-09-19 |  |  |  |  |
| 1.3 | 2024-05-03 |  |  |  |  |
| 1.2 | 2024-04-19 |  |  |  |  |
| 1.1 | 2024-04-11 |  |  |  |  |
| 1.0 | 2024-03-30 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Alexander+<version>&body=###%20Engine%20name%0AAlexander%0A%0A###%20Version%0A8.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:22:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3141, 3179, 3155, 3151]
  line "STC (8.0+0.08s)" [3141, 3179, 3155, 3151]
  line "LTC (60.0+0.60s)" [3382, 3370, 3363, 3393]
  line "VLTC (2m24s+1.12s)" [3418, 3430, 3418, 3434]
  line "VLTC (2m24s+1.12s)" [3418, 3430, 3418, 3434]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3434 | 25 | 398 | 49% | 3438 | 70% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3393 | 27 | 358 | 49% | 3402 | 65% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3151 | 28 | 368 | 51% | 3144 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3418 | 26 | 380 | 49% | 3425 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3363 | 31 | 284 | 50% | 3362 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3155 | 27 | 396 | 48% | 3168 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3430 | 28 | 324 | 49% | 3436 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3370 | 30 | 290 | 51% | 3364 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3179 | 31 | 302 | 49% | 3187 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3418 | 28 | 308 | 50% | 3416 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3382 | 28 | 332 | 50% | 3380 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3141 | 31 | 300 | 49% | 3147 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |