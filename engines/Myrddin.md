# Engine: Myrddin

Author: John Merlino

Home: https://github.com/JVMerlino/Myrddin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.96 | 2026-06-08 | 2749<sub>(+126) | 3056<sub>(+116) | 3114<sub>(+95) |  |
| 0.95 | 2026-04-23 | 2623<sub>(+32) | 2940<sub>(+13) | 3019<sub>(-36) |  |
| 0.94 | 2025-12-11 | 2591 | 2927 | 3055 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Myrddin+<version>&body=###%20Engine%20name%0AMyrddin%0A%0A###%20Version%0A0.96" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-23 06:26:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.94", "0.95", "0.96"]
  y-axis "Elo Rating" 2500 --> 3200
  line "STC (8.0+0.08s)" [2591, 2623, 2749]
  line "STC (8.0+0.08s)" [2591, 2623, 2749]
  line "LTC (60.0+0.60s)" [2927, 2940, 3056]
  line "VLTC (2m24s+1.12s)" [3055, 3019, 3114]
  line "VLTC (2m24s+1.12s)" [3055, 3019, 3114]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.96 | VLTC <sub>(2m24s+1.12s)</sub> | 3114 | 29 | 338 | 50% | 3116 | 53% |
| 0.96 | LTC <sub>(60.0+0.60s)</sub> | 3056 | 29 | 336 | 50% | 3054 | 48% |
| 0.96 | STC <sub>(8.0+0.08s)</sub> | 2749 | 29 | 388 | 49% | 2758 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.95 | VLTC <sub>(2m24s+1.12s)</sub> | 3019 | 29 | 370 | 51% | 3009 | 43% |
| 0.95 | LTC <sub>(60.0+0.60s)</sub> | 2940 | 29 | 366 | 49% | 2948 | 41% |
| 0.95 | STC <sub>(8.0+0.08s)</sub> | 2623 | 29 | 398 | 52% | 2603 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.94 | VLTC <sub>(2m24s+1.12s)</sub> | 3055 | 27 | 380 | 50% | 3052 | 52% |
| 0.94 | LTC <sub>(60.0+0.60s)</sub> | 2927 | 28 | 382 | 53% | 2894 | 41% |
| 0.94 | STC <sub>(8.0+0.08s)</sub> | 2591 | 27 | 476 | 50% | 2573 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |