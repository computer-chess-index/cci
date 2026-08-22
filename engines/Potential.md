# Engine: Potential

Author: Eren Araz

Home: https://github.com/ProgramciDusunur/Potential

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2749<sub>(+532) | 3089<sub>(+616) | 3137<sub>(+540) |  |
| 1.1.0 | 2026-05-16 | 2217<sub>(-316) | 2473<sub>(-380) | 2597<sub>(-343) |  |
| 3.0.0 | 2025-08-28 | 2533 | 2853 | 2940 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Potential+<version>&body=###%20Engine%20name%0APotential%0A%0A###%20Version%0Aunlocked" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-22 06:28:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "1.1.0", "unlocked"]
  y-axis "Elo Rating" 2200 --> 3200
  line "STC (8.0+0.08s)" [2533, 2217, 2749]
  line "STC (8.0+0.08s)" [2533, 2217, 2749]
  line "LTC (60.0+0.60s)" [2853, 2473, 3089]
  line "VLTC (2m24s+1.12s)" [2940, 2597, 3137]
  line "VLTC (2m24s+1.12s)" [2940, 2597, 3137]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| unlocked | VLTC <sub>(2m24s+1.12s)</sub> | 3137 | 31 | 288 | 51% | 3128 | 57% |
| unlocked | LTC <sub>(60.0+0.60s)</sub> | 3089 | 28 | 368 | 53% | 3065 | 45% |
| unlocked | STC <sub>(8.0+0.08s)</sub> | 2749 | 31 | 324 | 52% | 2728 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2597 | 29 | 416 | 48% | 2615 | 27% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2473 | 28 | 416 | 50% | 2473 | 32% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2217 | 31 | 352 | 49% | 2215 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2940 | 28 | 404 | 49% | 2950 | 34% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2853 | 29 | 380 | 49% | 2862 | 34% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2533 | 27 | 452 | 49% | 2537 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |