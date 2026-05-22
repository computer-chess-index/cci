# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-03-30 | 2485<sub>(+364) | 2809<sub>(+379) | 2911<sub>(+396) |  |
| 1.2.0 | 2026-01-24 | 2121<sub>(+162) | 2430<sub>(+120) | 2515<sub>(+116) |  |
| 1.1.0 | 2026-01-09 | 1959<sub>(+new) | 2310<sub>(+new) | 2399<sub>(+new) |  |
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

Generated: 2026-05-22 14:59:04

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1900 --> 3000
  line "STC (8.0+0.08s)" [1959, 2121, 2485]
  line "STC (8.0+0.08s)" [1959, 2121, 2485]
  line "LTC (60.0+0.60s)" [2310, 2430, 2809]
  line "VLTC (2m24s+1.12s)" [2399, 2515, 2911]
  line "VLTC (2m24s+1.12s)" [2399, 2515, 2911]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2911 | 25 | 492 | 47% | 2934 | 39% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2809 | 30 | 354 | 50% | 2801 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2485 | 25 | 576 | 43% | 2545 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2515 | 33 | 312 | 52% | 2495 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2430 | 35 | 274 | 51% | 2418 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2121 | 33 | 328 | 52% | 2102 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2399 | 45 | 172 | 49% | 2414 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2310 | 43 | 208 | 50% | 2310 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1959 | 49 | 148 | 49% | 1974 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |