# Engine: Pawnocchio

Author: Jonathan Hallström

Home: https://github.com/JonathanHallstrom/pawnocchio

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-01-15 | 3363<sub>(+11) | 3525<sub>(+7) | 3536<sub>(+10) |  |
| 1.9.1 | 2026-01-12 | 3352<sub>(-11) | 3518<sub>(+17) | 3526<sub>(-11) |  |
| 1.9 | 2026-01-03 | 3363<sub>(+new) | 3501<sub>(+new) | 3537<sub>(+new) |  |
| 1.8.1 | 2025-07-25 |  |  |  |  |
| 1.8 | 2025-07-22 |  |  |  |  |
| 1.7.2 | 2025-06-15 |  |  |  |  |
| 1.7.1 | 2025-06-02 |  |  |  |  |
| 1.7 | 2025-05-31 |  |  |  |  |
| 1.6.1 | 2025-05-15 |  |  |  |  |
| 1.6 | 2025-04-27 |  |  |  |  |
| 1.5 | 2025-04-18 |  |  |  |  |
| 1.4.1 | 2025-04-05 |  |  |  |  |
| 1.3.1415 | 2025-03-14 |  |  |  |  |
| 1.3 | 2025-03-07 |  |  |  |  |
| 1.2 | 2025-02-21 |  |  |  |  |
| 1.1 | 2025-01-24 |  |  |  |  |
| 1.0 | 2025-01-20 |  |  |  |  |
| 0.9 | 2025-01-12 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pawnocchio+<version>&body=###%20Engine%20name%0APawnocchio%0A%0A###%20Version%0A1.9.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-22 06:26:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9", "1.9.1", "1.9.2"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3363, 3352, 3363]
  line "STC (8.0+0.08s)" [3363, 3352, 3363]
  line "LTC (60.0+0.60s)" [3501, 3518, 3525]
  line "VLTC (2m24s+1.12s)" [3537, 3526, 3536]
  line "VLTC (2m24s+1.12s)" [3537, 3526, 3536]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3536 | 25 | 364 | 51% | 3533 | 87% |
| 1.9.2 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 25 | 360 | 51% | 3522 | 87% |
| 1.9.2 | STC <sub>(8.0+0.08s)</sub> | 3363 | 22 | 482 | 49% | 3366 | 79% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3526 | 35 | 188 | 49% | 3536 | 91% |
| 1.9.1 | LTC <sub>(60.0+0.60s)</sub> | 3518 | 35 | 186 | 51% | 3510 | 86% |
| 1.9.1 | STC <sub>(8.0+0.08s)</sub> | 3352 | 35 | 208 | 51% | 3340 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.9 | VLTC <sub>(2m24s+1.12s)</sub> | 3537 | 35 | 192 | 53% | 3506 | 81% |
| 1.9 | LTC <sub>(60.0+0.60s)</sub> | 3501 | 33 | 224 | 53% | 3461 | 81% |
| 1.9 | STC <sub>(8.0+0.08s)</sub> | 3363 | 34 | 224 | 54% | 3317 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |