# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-08-02 |  |  |  |  |
| 1.4.0 | 2026-06-05 | 2685<sub>(+201) | 3021<sub>(+210) | 3112<sub>(+199) |  |
| 1.3.0 | 2026-03-30 | 2484<sub>(+364) | 2811<sub>(+382) | 2913<sub>(+399) |  |
| 1.2.0 | 2026-01-24 | 2120<sub>(+162) | 2429<sub>(+122) | 2514<sub>(+118) |  |
| 1.1.0 | 2026-01-09 | 1958<sub>(+new) | 2307<sub>(+new) | 2396<sub>(+new) |  |
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

Generated: 2026-08-18 06:25:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0", "1.4.0"]
  y-axis "Elo Rating" 1900 --> 3200
  line "STC (8.0+0.08s)" [1958, 2120, 2484, 2685]
  line "STC (8.0+0.08s)" [1958, 2120, 2484, 2685]
  line "LTC (60.0+0.60s)" [2307, 2429, 2811, 3021]
  line "VLTC (2m24s+1.12s)" [2396, 2514, 2913, 3112]
  line "VLTC (2m24s+1.12s)" [2396, 2514, 2913, 3112]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3112 | 30 | 336 | 50% | 3108 | 47% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3021 | 31 | 320 | 51% | 3013 | 44% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2685 | 31 | 348 | 49% | 2692 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2913 | 25 | 492 | 47% | 2936 | 39% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2811 | 30 | 358 | 50% | 2804 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2484 | 25 | 576 | 43% | 2543 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2514 | 33 | 312 | 52% | 2492 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2429 | 35 | 274 | 51% | 2417 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2120 | 33 | 328 | 52% | 2102 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2396 | 45 | 172 | 49% | 2411 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2307 | 43 | 208 | 50% | 2307 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1958 | 49 | 148 | 49% | 1972 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |