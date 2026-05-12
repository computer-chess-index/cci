# Engine: Obsidian

Author: Gabriele Lombardo

Home: https://github.com/gab8192/Obsidian

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0 | 2025-05-21 | 3486<sub>(+30) | 3605<sub>(+25) | 3630<sub>(+27) |  |
| 15.0 | 2025-01-31 | 3456<sub>(-7) | 3580<sub>(-6) | 3603<sub>(-3) |  |
| 14.0 | 2024-10-22 | 3463<sub>(+23) | 3586<sub>(+27) | 3606<sub>(+8) |  |
| 13.0 | 2024-07-01 | 3440<sub>(+new) | 3559<sub>(+new) | 3598<sub>(+new) |  |
| 12.0 | 2024-04-11 |  |  |  |  |
| 11.0 | 2024-03-02 |  |  |  |  |
| 10.0 | 2024-01-16 |  |  |  |  |
| 9.0 | 2023-12-17 |  |  |  |  |
| 8.0 | 2023-11-30 |  |  |  |  |
| 7.0 | 2023-11-07 |  |  |  |  |
| 6.0 | 2023-10-21 |  |  |  |  |
| 5.0 | 2023-10-01 |  |  |  |  |
| 4.0 | 2023-09-23 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Obsidian+<version>&body=###%20Engine%20name%0AObsidian%0A%0A###%20Version%0A16.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-12 06:27:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["13.0", "14.0", "15.0", "16.0"]
  y-axis "Elo Rating" 3400 --> 3700
  line "STC (8.0+0.08s)" [3440, 3463, 3456, 3486]
  line "STC (8.0+0.08s)" [3440, 3463, 3456, 3486]
  line "LTC (60.0+0.60s)" [3559, 3586, 3580, 3605]
  line "VLTC (2m24s+1.12s)" [3598, 3606, 3603, 3630]
  line "VLTC (2m24s+1.12s)" [3598, 3606, 3603, 3630]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 16.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3630 | 22 | 476 | 53% | 3611 | 92% |
| 16.0 | LTC <sub>(60.0+0.60s)</sub> | 3605 | 18 | 692 | 51% | 3598 | 88% |
| 16.0 | STC <sub>(8.0+0.08s)</sub> | 3486 | 15 | 1016 | 50% | 3487 | 77% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 15.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3603 | 31 | 236 | 51% | 3598 | 89% |
| 15.0 | LTC <sub>(60.0+0.60s)</sub> | 3580 | 29 | 280 | 50% | 3578 | 84% |
| 15.0 | STC <sub>(8.0+0.08s)</sub> | 3456 | 27 | 320 | 51% | 3448 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 14.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3606 | 22 | 492 | 52% | 3594 | 89% |
| 14.0 | LTC <sub>(60.0+0.60s)</sub> | 3586 | 19 | 644 | 51% | 3578 | 86% |
| 14.0 | STC <sub>(8.0+0.08s)</sub> | 3463 | 16 | 944 | 50% | 3460 | 78% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 13.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3598 | 38 | 160 | 52% | 3579 | 82% |
| 13.0 | LTC <sub>(60.0+0.60s)</sub> | 3559 | 34 | 200 | 49% | 3568 | 83% |
| 13.0 | STC <sub>(8.0+0.08s)</sub> | 3440 | 28 | 332 | 52% | 3428 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |