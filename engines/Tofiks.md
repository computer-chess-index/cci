# Engine: Tofiks

Author: Arturs Priede

Home: https://github.com/likeawizard/tofiks

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-04-23 | 2272<sub>(+186) | 2479<sub>(+110) | 2552<sub>(+104) |  |
| 1.4.1 | 2026-04-11 | 2086<sub>(-42) | 2369<sub>(+31) | 2448<sub>(+14) |  |
| 1.4.0 | 2026-04-09 | 2128<sub>(+new) | 2338<sub>(+new) | 2434<sub>(+new) |  |
| 1.3.0 | 2023-10-22 |  |  |  |  |
| 1.2.0 | 2023-09-29 |  |  |  |  |
| 1.1.0 | 2023-08-17 |  |  |  |  |
| 1.0.0 | 2022-11-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tofiks+<version>&body=###%20Engine%20name%0ATofiks%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-05 06:28:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2000 --> 2600
  line "STC (8.0+0.08s)" [2128, 2086, 2272]
  line "STC (8.0+0.08s)" [2128, 2086, 2272]
  line "LTC (60.0+0.60s)" [2338, 2369, 2479]
  line "VLTC (2m24s+1.12s)" [2434, 2448, 2552]
  line "VLTC (2m24s+1.12s)" [2434, 2448, 2552]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2552 | 32 | 312 | 51% | 2538 | 34% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2479 | 31 | 340 | 50% | 2481 | 33% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2272 | 34 | 312 | 48% | 2291 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2448 | 33 | 292 | 50% | 2444 | 33% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2369 | 34 | 296 | 50% | 2368 | 29% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2086 | 34 | 302 | 51% | 2074 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2434 | 40 | 216 | 47% | 2462 | 29% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2338 | 39 | 226 | 53% | 2315 | 29% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2128 | 43 | 184 | 50% | 2124 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |