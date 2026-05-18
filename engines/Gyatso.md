# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-03-30 | 2537<sub>(+366) | 2866<sub>(+381) | 2969<sub>(+399) |  |
| 1.2.0 | 2026-01-24 | 2171<sub>(+170) | 2485<sub>(+121) | 2570<sub>(+116) |  |
| 1.1.0 | 2026-01-09 | 2001<sub>(+new) | 2364<sub>(+new) | 2454<sub>(+new) |  |
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

Generated: 2026-05-18 06:24:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 2000 --> 3000
  line "STC (8.0+0.08s)" [2001, 2171, 2537]
  line "STC (8.0+0.08s)" [2001, 2171, 2537]
  line "LTC (60.0+0.60s)" [2364, 2485, 2866]
  line "VLTC (2m24s+1.12s)" [2454, 2570, 2969]
  line "VLTC (2m24s+1.12s)" [2454, 2570, 2969]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2969 | 25 | 484 | 47% | 2990 | 38% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2866 | 30 | 354 | 50% | 2858 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2537 | 25 | 568 | 42% | 2607 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2570 | 33 | 312 | 52% | 2550 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2485 | 35 | 274 | 51% | 2473 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2171 | 33 | 328 | 52% | 2153 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2454 | 45 | 172 | 49% | 2468 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2364 | 43 | 208 | 50% | 2364 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2001 | 49 | 148 | 49% | 2016 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |