# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-08-02 |  |  |  |  |
| 1.4.0 | 2026-06-05 | 2681<sub>(+201) | 3017<sub>(+210) | 3106<sub>(+197) |  |
| 1.3.0 | 2026-03-30 | 2480<sub>(+365) | 2807<sub>(+384) | 2909<sub>(+399) |  |
| 1.2.0 | 2026-01-24 | 2115<sub>(+162) | 2423<sub>(+120) | 2510<sub>(+119) |  |
| 1.1.0 | 2026-01-09 | 1953<sub>(+new) | 2303<sub>(+new) | 2391<sub>(+new) |  |
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

Generated: 2026-08-15 06:25:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0", "1.4.0"]
  y-axis "Elo Rating" 1900 --> 3200
  line "STC (8.0+0.08s)" [1953, 2115, 2480, 2681]
  line "STC (8.0+0.08s)" [1953, 2115, 2480, 2681]
  line "LTC (60.0+0.60s)" [2303, 2423, 2807, 3017]
  line "VLTC (2m24s+1.12s)" [2391, 2510, 2909, 3106]
  line "VLTC (2m24s+1.12s)" [2391, 2510, 2909, 3106]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3106 | 30 | 332 | 50% | 3102 | 46% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3017 | 31 | 320 | 51% | 3009 | 44% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2681 | 31 | 348 | 49% | 2688 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2909 | 25 | 492 | 47% | 2932 | 39% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2807 | 30 | 358 | 50% | 2800 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2480 | 25 | 576 | 43% | 2539 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2510 | 33 | 312 | 52% | 2488 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2423 | 35 | 274 | 51% | 2411 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2115 | 33 | 328 | 52% | 2098 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2391 | 45 | 172 | 49% | 2406 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2303 | 43 | 208 | 50% | 2303 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1953 | 49 | 148 | 49% | 1968 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |