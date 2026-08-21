# Engine: Potential

Author: Eren Araz

Home: https://github.com/ProgramciDusunur/Potential

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2747<sub>(+532) | 3090<sub>(+618) | 3137<sub>(+541) |  |
| 1.1.0 | 2026-05-16 | 2215<sub>(-316) | 2472<sub>(-379) | 2596<sub>(-343) |  |
| 3.0.0 | 2025-08-28 | 2531 | 2851 | 2939 |  |
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

Generated: 2026-08-21 06:28:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "1.1.0", "unlocked"]
  y-axis "Elo Rating" 2200 --> 3200
  line "STC (8.0+0.08s)" [2531, 2215, 2747]
  line "STC (8.0+0.08s)" [2531, 2215, 2747]
  line "LTC (60.0+0.60s)" [2851, 2472, 3090]
  line "VLTC (2m24s+1.12s)" [2939, 2596, 3137]
  line "VLTC (2m24s+1.12s)" [2939, 2596, 3137]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| unlocked | VLTC <sub>(2m24s+1.12s)</sub> | 3137 | 31 | 286 | 51% | 3127 | 57% |
| unlocked | LTC <sub>(60.0+0.60s)</sub> | 3090 | 29 | 364 | 53% | 3062 | 45% |
| unlocked | STC <sub>(8.0+0.08s)</sub> | 2747 | 31 | 324 | 52% | 2727 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2596 | 29 | 416 | 48% | 2614 | 27% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2472 | 28 | 416 | 50% | 2472 | 32% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2215 | 31 | 352 | 49% | 2213 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2939 | 28 | 404 | 49% | 2948 | 34% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2851 | 29 | 380 | 49% | 2861 | 34% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2531 | 27 | 452 | 49% | 2535 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |