# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-03-30 | 2546<sub>(+374) | 2870<sub>(+383) | 2973<sub>(+400) |  |
| 1.2.0 | 2026-01-24 | 2172<sub>(+171) | 2487<sub>(+123) | 2573<sub>(+117) |  |
| 1.1.0 | 2026-01-09 | 2001<sub>(+new) | 2364<sub>(+new) | 2456<sub>(+new) |  |
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

Generated: 2026-05-15 06:24:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 2000 --> 3000
  line "STC (8.0+0.08s)" [2001, 2172, 2546]
  line "STC (8.0+0.08s)" [2001, 2172, 2546]
  line "LTC (60.0+0.60s)" [2364, 2487, 2870]
  line "VLTC (2m24s+1.12s)" [2456, 2573, 2973]
  line "VLTC (2m24s+1.12s)" [2456, 2573, 2973]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2973 | 26 | 476 | 47% | 2994 | 38% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2870 | 30 | 354 | 50% | 2862 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2546 | 25 | 552 | 42% | 2615 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2573 | 33 | 312 | 52% | 2552 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2487 | 35 | 274 | 51% | 2475 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2172 | 33 | 328 | 52% | 2153 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2456 | 45 | 172 | 49% | 2469 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2364 | 43 | 208 | 50% | 2364 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2001 | 49 | 148 | 49% | 2017 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |