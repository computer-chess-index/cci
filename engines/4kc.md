# Engine: 4kc

Author: Gediminas Masaitis

Home: https://github.com/GediminasMasaitis/4k-dot-c

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-06 | 2529<sub>(-47) | 2846<sub>(+42) | 2951<sub>(+17) |  |
| 8.0 | 2026-03-10 | 2576<sub>(+new) | 2804<sub>(+new) | 2934<sub>(+new) |  |
| 6.0 | 2026-03-10 |  |  |  |  |
| 5.0 | 2025-10-30 | 2472<sub>(+new) | 2777<sub>(+new) | 2849<sub>(+new) |  |
| 4.41 | 2025-08-15 |  |  |  |  |
| 4.0 | 2025-08-15 |  |  |  |  |
| 3.0 | 2025-08-15 |  |  |  |  |
| 2.0 | 2025-08-15 |  |  |  |  |
| 1.0 | 2025-08-15 |  |  |  |  |
| 0.99 | 2025-02-09 |  |  |  |  |
| 0.69 | 2024-11-06 |  |  |  |  |
| 0.50 | 2024-10-15 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+4kc+<version>&body=###%20Engine%20name%0A4kc%0A%0A###%20Version%0A9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-06 06:22:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "8.0", "9.0"]
  y-axis "Elo Rating" 2400 --> 3000
  line "STC (8.0+0.08s)" [2472, 2576, 2529]
  line "STC (8.0+0.08s)" [2472, 2576, 2529]
  line "LTC (60.0+0.60s)" [2777, 2804, 2846]
  line "VLTC (2m24s+1.12s)" [2849, 2934, 2951]
  line "VLTC (2m24s+1.12s)" [2849, 2934, 2951]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2951 | 29 | 358 | 49% | 2963 | 40% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 2846 | 28 | 380 | 51% | 2840 | 42% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 2529 | 27 | 458 | 51% | 2518 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2934 | 28 | 402 | 52% | 2912 | 39% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2804 | 29 | 374 | 51% | 2796 | 40% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2576 | 27 | 456 | 50% | 2569 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2849 | 32 | 296 | 49% | 2861 | 39% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2777 | 31 | 324 | 48% | 2793 | 37% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2472 | 30 | 396 | 51% | 2465 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |