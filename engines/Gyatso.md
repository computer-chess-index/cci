# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-08-02 |  |  |  |  |
| 1.4.0 | 2026-06-05 | 2691<sub>(+204) | 3027<sub>(+214) | 3110<sub>(+193) |  |
| 1.3.0 | 2026-03-30 | 2487<sub>(+363) | 2813<sub>(+382) | 2917<sub>(+401) |  |
| 1.2.0 | 2026-01-24 | 2124<sub>(+164) | 2431<sub>(+120) | 2516<sub>(+117) |  |
| 1.1.0 | 2026-01-09 | 1960<sub>(+new) | 2311<sub>(+new) | 2399<sub>(+new) |  |
| 1.0.0 | 2025-12-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gyatso+<version>&body=###%20Engine%20name%0AGyatso%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-24 06:25:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0", "1.4.0"]
  y-axis "Elo Rating" 1900 --> 3200
  line "STC (8.0+0.08s)" [1960, 2124, 2487, 2691]
  line "STC (8.0+0.08s)" [1960, 2124, 2487, 2691]
  line "LTC (60.0+0.60s)" [2311, 2431, 2813, 3027]
  line "VLTC (2m24s+1.12s)" [2399, 2516, 2917, 3110]
  line "VLTC (2m24s+1.12s)" [2399, 2516, 2917, 3110]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3110 | 29 | 356 | 50% | 3112 | 46% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3027 | 30 | 334 | 51% | 3019 | 44% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2691 | 30 | 352 | 50% | 2695 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2917 | 25 | 492 | 47% | 2940 | 39% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2813 | 30 | 358 | 50% | 2808 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2487 | 25 | 576 | 43% | 2547 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2516 | 33 | 312 | 52% | 2496 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2431 | 35 | 274 | 51% | 2419 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2124 | 33 | 328 | 52% | 2105 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2399 | 45 | 172 | 49% | 2414 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2311 | 43 | 208 | 50% | 2311 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1960 | 49 | 148 | 49% | 1975 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |