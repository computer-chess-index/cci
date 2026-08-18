# Engine: Potential

Author: Eren Araz

Home: https://github.com/ProgramciDusunur/Potential

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| unlocked | 2026-07-27 | 2743<sub>(+529) | 3087<sub>(+616) | 3132<sub>(+537) |  |
| 1.1.0 | 2026-05-16 | 2214<sub>(-316) | 2471<sub>(-379) | 2595<sub>(-343) |  |
| 3.0.0 | 2025-08-28 | 2530 | 2850 | 2938 |  |
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

Generated: 2026-08-18 06:27:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "1.1.0", "unlocked"]
  y-axis "Elo Rating" 2200 --> 3200
  line "STC (8.0+0.08s)" [2530, 2214, 2743]
  line "STC (8.0+0.08s)" [2530, 2214, 2743]
  line "LTC (60.0+0.60s)" [2850, 2471, 3087]
  line "VLTC (2m24s+1.12s)" [2938, 2595, 3132]
  line "VLTC (2m24s+1.12s)" [2938, 2595, 3132]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| unlocked | VLTC <sub>(2m24s+1.12s)</sub> | 3132 | 31 | 280 | 51% | 3124 | 57% |
| unlocked | LTC <sub>(60.0+0.60s)</sub> | 3087 | 29 | 364 | 53% | 3060 | 45% |
| unlocked | STC <sub>(8.0+0.08s)</sub> | 2743 | 31 | 320 | 52% | 2728 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2595 | 29 | 416 | 48% | 2612 | 27% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2471 | 28 | 416 | 50% | 2471 | 32% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2214 | 31 | 352 | 49% | 2211 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2938 | 28 | 404 | 49% | 2947 | 34% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2850 | 29 | 380 | 49% | 2858 | 34% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2530 | 27 | 452 | 49% | 2535 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |