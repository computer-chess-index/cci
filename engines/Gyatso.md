# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-03-30 | 2543<sub>(+374) | 2866<sub>(+381) | 2970<sub>(+398) |  |
| 1.2.0 | 2026-01-24 | 2169<sub>(+170) | 2485<sub>(+122) | 2572<sub>(+118) |  |
| 1.1.0 | 2026-01-09 | 1999<sub>(+new) | 2363<sub>(+new) | 2454<sub>(+new) |  |
| 1.0.0 | 2025-12-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gyatso+<version>&body=###%20Engine%20name%0AGyatso%0A%0A###%20Version%0A1.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-05 06:24:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1900 --> 3000
  line "STC (8.0+0.08s)" [1999, 2169, 2543]
  line "STC (8.0+0.08s)" [1999, 2169, 2543]
  line "LTC (60.0+0.60s)" [2363, 2485, 2866]
  line "VLTC (2m24s+1.12s)" [2454, 2572, 2970]
  line "VLTC (2m24s+1.12s)" [2454, 2572, 2970]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2970 | 26 | 460 | 47% | 2992 | 38% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2866 | 30 | 350 | 50% | 2858 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2543 | 26 | 536 | 42% | 2616 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2572 | 33 | 312 | 52% | 2550 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2485 | 35 | 274 | 51% | 2473 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2169 | 33 | 328 | 52% | 2152 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2454 | 45 | 172 | 49% | 2468 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2363 | 43 | 208 | 50% | 2363 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1999 | 49 | 148 | 49% | 2016 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |