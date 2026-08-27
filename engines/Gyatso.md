# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-08-02 |  |  |  |  |
| 1.4.0 | 2026-06-05 | 2691<sub>(+202) | 3029<sub>(+213) | 3113<sub>(+193) |  |
| 1.3.0 | 2026-03-30 | 2489<sub>(+364) | 2816<sub>(+382) | 2920<sub>(+401) |  |
| 1.2.0 | 2026-01-24 | 2125<sub>(+163) | 2434<sub>(+121) | 2519<sub>(+117) |  |
| 1.1.0 | 2026-01-09 | 1962<sub>(+new) | 2313<sub>(+new) | 2402<sub>(+new) |  |
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

Generated: 2026-08-27 06:25:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0", "1.4.0"]
  y-axis "Elo Rating" 1900 --> 3200
  line "STC (8.0+0.08s)" [1962, 2125, 2489, 2691]
  line "STC (8.0+0.08s)" [1962, 2125, 2489, 2691]
  line "LTC (60.0+0.60s)" [2313, 2434, 2816, 3029]
  line "VLTC (2m24s+1.12s)" [2402, 2519, 2920, 3113]
  line "VLTC (2m24s+1.12s)" [2402, 2519, 2920, 3113]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3113 | 29 | 356 | 50% | 3113 | 46% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3029 | 29 | 348 | 51% | 3021 | 45% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2691 | 30 | 372 | 49% | 2700 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2920 | 25 | 492 | 47% | 2943 | 39% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2816 | 30 | 358 | 50% | 2809 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2489 | 25 | 576 | 43% | 2549 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2519 | 33 | 312 | 52% | 2499 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2434 | 35 | 274 | 51% | 2422 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2125 | 33 | 328 | 52% | 2107 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2402 | 45 | 172 | 49% | 2417 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2313 | 43 | 208 | 50% | 2313 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1962 | 49 | 148 | 49% | 1976 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |