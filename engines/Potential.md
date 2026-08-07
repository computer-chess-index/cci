# Engine: Potential

Author: Eren Araz

Home: https://github.com/ProgramciDusunur/Potential

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2743<sub>(+533) | 3085<sub>(+617) | 3128<sub>(+537) |  |
| 1.1.0 | 2026-05-16 | 2210<sub>(-317) | 2468<sub>(-378) | 2591<sub>(-343) |  |
| 3.0.0 | 2025-08-28 | 2527 | 2846 | 2934 |  |
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

Generated: 2026-08-07 08:49:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "1.1.0", "unlocked"]
  y-axis "Elo Rating" 2200 --> 3200
  line "STC (8.0+0.08s)" [2527, 2210, 2743]
  line "STC (8.0+0.08s)" [2527, 2210, 2743]
  line "LTC (60.0+0.60s)" [2846, 2468, 3085]
  line "VLTC (2m24s+1.12s)" [2934, 2591, 3128]
  line "VLTC (2m24s+1.12s)" [2934, 2591, 3128]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| unlocked | VLTC <sub>(2m24s+1.12s)</sub> | 3128 | 33 | 260 | 51% | 3117 | 55% |
| unlocked | LTC <sub>(60.0+0.60s)</sub> | 3085 | 30 | 340 | 54% | 3054 | 44% |
| unlocked | STC <sub>(8.0+0.08s)</sub> | 2743 | 32 | 304 | 52% | 2724 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2591 | 29 | 416 | 48% | 2608 | 27% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2468 | 28 | 416 | 50% | 2468 | 32% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2210 | 31 | 352 | 49% | 2207 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2934 | 28 | 404 | 49% | 2943 | 34% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2846 | 29 | 380 | 49% | 2855 | 34% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2527 | 27 | 452 | 49% | 2531 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |