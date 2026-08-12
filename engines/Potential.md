# Engine: Potential

Author: Eren Araz

Home: https://github.com/ProgramciDusunur/Potential

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2743<sub>(+534) | 3083<sub>(+618) | 3128<sub>(+539) |  |
| 1.1.0 | 2026-05-16 | 2209<sub>(-316) | 2465<sub>(-379) | 2589<sub>(-343) |  |
| 3.0.0 | 2025-08-28 | 2525 | 2844 | 2932 |  |
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

Generated: 2026-08-12 08:06:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "1.1.0", "unlocked"]
  y-axis "Elo Rating" 2200 --> 3200
  line "STC (8.0+0.08s)" [2525, 2209, 2743]
  line "STC (8.0+0.08s)" [2525, 2209, 2743]
  line "LTC (60.0+0.60s)" [2844, 2465, 3083]
  line "VLTC (2m24s+1.12s)" [2932, 2589, 3128]
  line "VLTC (2m24s+1.12s)" [2932, 2589, 3128]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| unlocked | VLTC <sub>(2m24s+1.12s)</sub> | 3128 | 32 | 272 | 51% | 3117 | 57% |
| unlocked | LTC <sub>(60.0+0.60s)</sub> | 3083 | 29 | 356 | 53% | 3054 | 45% |
| unlocked | STC <sub>(8.0+0.08s)</sub> | 2743 | 32 | 308 | 52% | 2723 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2589 | 29 | 416 | 48% | 2607 | 27% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2465 | 28 | 416 | 50% | 2465 | 32% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2209 | 31 | 352 | 49% | 2206 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2932 | 28 | 404 | 49% | 2942 | 34% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2844 | 29 | 380 | 49% | 2854 | 34% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2525 | 27 | 452 | 49% | 2530 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |