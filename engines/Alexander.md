# Engine: Alexander

Author: Andrea Manzo

Home: https://github.com/amchess/Alexander

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.3 | 2026-04-01 | 3193<sub>(-4) | 3437<sub>(+32) | 3476<sub>(+16) |  |
| 8.2 | 2026-03-23 | 3197<sub>(-25) | 3405<sub>(-8) | 3460<sub>(-14) |  |
| 8.1 | 2026-03-16 | 3222<sub>(+37) | 3413<sub>(-11) | 3474<sub>(+13) |  |
| 8.0 | 2026-03-10 | 3185<sub>(+new) | 3424<sub>(+new) | 3461<sub>(+new) |  |
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

Generated: 2026-05-04 06:22:14

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "8.1", "8.2", "8.3"]
  y-axis "Elo Rating" 3100 --> 3500
  line "STC (8.0+0.08s)" [3185, 3222, 3197, 3193]
  line "STC (8.0+0.08s)" [3185, 3222, 3197, 3193]
  line "LTC (60.0+0.60s)" [3424, 3413, 3405, 3437]
  line "VLTC (2m24s+1.12s)" [3461, 3474, 3460, 3476]
  line "VLTC (2m24s+1.12s)" [3461, 3474, 3460, 3476]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3476 | 26 | 382 | 49% | 3482 | 70% |
| 8.3 | LTC <sub>(60.0+0.60s)</sub> | 3437 | 28 | 342 | 49% | 3445 | 65% |
| 8.3 | STC <sub>(8.0+0.08s)</sub> | 3193 | 29 | 360 | 51% | 3187 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3460 | 26 | 380 | 49% | 3468 | 70% |
| 8.2 | LTC <sub>(60.0+0.60s)</sub> | 3405 | 31 | 284 | 50% | 3403 | 62% |
| 8.2 | STC <sub>(8.0+0.08s)</sub> | 3197 | 27 | 396 | 48% | 3210 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3474 | 28 | 324 | 49% | 3478 | 64% |
| 8.1 | LTC <sub>(60.0+0.60s)</sub> | 3413 | 30 | 290 | 51% | 3407 | 66% |
| 8.1 | STC <sub>(8.0+0.08s)</sub> | 3222 | 31 | 302 | 49% | 3231 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3461 | 28 | 308 | 50% | 3459 | 72% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3424 | 28 | 332 | 50% | 3422 | 63% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3185 | 31 | 300 | 49% | 3190 | 47% |
| --- | --- | --- | --- | --- | --- | --- | --- |