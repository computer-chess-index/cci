# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-06-05 | 2715<sub>(+234) | 3016<sub>(+212) | 3075<sub>(+168) |  |
| 1.3.0 | 2026-03-30 | 2481<sub>(+364) | 2804<sub>(+377) | 2907<sub>(+396) |  |
| 1.2.0 | 2026-01-24 | 2117<sub>(+162) | 2427<sub>(+121) | 2511<sub>(+116) |  |
| 1.1.0 | 2026-01-09 | 1955<sub>(+new) | 2306<sub>(+new) | 2395<sub>(+new) |  |
| 1.0.0 | 2025-12-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gyatso+<version>&body=###%20Engine%20name%0AGyatso%0A%0A###%20Version%0A1.4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-08 06:24:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0", "1.4.0"]
  y-axis "Elo Rating" 1900 --> 3100
  line "STC (8.0+0.08s)" [1955, 2117, 2481, 2715]
  line "STC (8.0+0.08s)" [1955, 2117, 2481, 2715]
  line "LTC (60.0+0.60s)" [2306, 2427, 2804, 3016]
  line "VLTC (2m24s+1.12s)" [2395, 2511, 2907, 3075]
  line "VLTC (2m24s+1.12s)" [2395, 2511, 2907, 3075]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3075 | 68 | 66 | 50% | 3075 | 39% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3016 | 61 | 88 | 55% | 2979 | 32% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2715 | 69 | 68 | 53% | 2684 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2907 | 25 | 492 | 47% | 2930 | 39% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2804 | 30 | 358 | 50% | 2797 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2481 | 25 | 576 | 43% | 2541 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2511 | 33 | 312 | 52% | 2491 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2427 | 35 | 274 | 51% | 2415 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2117 | 33 | 328 | 52% | 2099 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2395 | 45 | 172 | 49% | 2410 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2306 | 43 | 208 | 50% | 2306 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1955 | 49 | 148 | 49% | 1970 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |