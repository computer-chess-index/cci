# Engine: PlentyChess

Author: Patrick Leonhardt

Home: https://github.com/Yoshie2000/PlentyChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.0 | 2025-09-25 | 3421<sub>(+new) | 3549<sub>(+new) | 3545<sub>(+4) |  |
| 6.0.2 | 2025-06-06 |  |  | 3541<sub>(+1) |  |
| 5.0.0 | 2025-03-23 | 3352<sub>(+5) | 3517<sub>(+new) | 3540<sub>(+23) |  |
| 4.0.1 | 2025-01-18 | 3347<sub>(+new) |  | 3517<sub>(+new) |  |
| 4.0.0 | 2025-01-18 |  |  |  |  |
| 3.0.2 | 2024-11-26 |  |  |  |  |
| 3.0.1 | 2024-11-22 | 3281<sub>(+new) | 3422<sub>(+new) | 3511<sub>(+new) |  |
| 3.0.0 | 2024-11-21 |  |  |  |  |
| 2.1.0 | 2024-07-02 | 3313<sub>(+new) | 3455<sub>(+new) | 3490<sub>(+new) |  |
| 2.0.0 | 2024-06-12 |  |  |  |  |
| 1.0.0 | 2024-04-01 |  |  |  |  |
| 0.3.0 | 2024-02-04 |  |  |  |  |
| 0.2.1 | 2024-01-21 |  |  |  |  |
| 0.2.0 | 2024-01-20 |  |  |  |  |
| 0.1.0 | 2024-01-12 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PlentyChess+<version>&body=###%20Engine%20name%0APlentyChess%0A%0A###%20Version%0A7.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-07 06:26:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "3.0.1", "5.0.0", "7.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3313, 3281, 3352, 3421]
  line "STC (8.0+0.08s)" [3313, 3281, 3352, 3421]
  line "LTC (60.0+0.60s)" [3455, 3422, 3517, 3549]
  line "VLTC (2m24s+1.12s)" [3490, 3511, 3540, 3545]
  line "VLTC (2m24s+1.12s)" [3490, 3511, 3540, 3545]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3545 | 24 | 384 | 51% | 3541 | 92% |
| 7.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3549 | 45 | 110 | 50% | 3548 | 89% |
| 7.0.0 | STC <sub>(8.0+0.08s)</sub> | 3421 | 35 | 200 | 49% | 3424 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 34 | 192 | 51% | 3537 | 92% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3540 | 26 | 332 | 51% | 3532 | 87% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3517 | 68 | 48 | 48% | 3529 | 92% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3352 | 208 | 4 | 50% | 3352 | 100% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3517 | 20 | 600 | 50% | 3515 | 88% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3347 | 59 | 72 | 52% | 3329 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3511 | 21 | 544 | 50% | 3510 | 86% |
| 3.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3422 | 36 | 208 | 50% | 3416 | 59% |
| 3.0.1 | STC <sub>(8.0+0.08s)</sub> | 3281 | 33 | 248 | 47% | 3298 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3490 | 23 | 460 | 52% | 3475 | 85% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3455 | 63 | 64 | 63% | 3352 | 67% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 3313 | 98 | 92 | 92% | 2516 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |