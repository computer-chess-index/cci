# Engine: Tofiks

Author: Arturs Priede

Home: https://github.com/likeawizard/tofiks

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-04-23 | 2255<sub>(+168) | 2472<sub>(+103) | 2546<sub>(+98) |  |
| 1.4.1 | 2026-04-11 | 2087<sub>(-42) | 2369<sub>(+29) | 2448<sub>(+14) |  |
| 1.4.0 | 2026-04-09 | 2129<sub>(+new) | 2340<sub>(+new) | 2434<sub>(+new) |  |
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

Generated: 2026-05-18 06:28:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4.0", "1.4.1", "1.5.0"]
  y-axis "Elo Rating" 2000 --> 2600
  line "STC (8.0+0.08s)" [2129, 2087, 2255]
  line "STC (8.0+0.08s)" [2129, 2087, 2255]
  line "LTC (60.0+0.60s)" [2340, 2369, 2472]
  line "VLTC (2m24s+1.12s)" [2434, 2448, 2546]
  line "VLTC (2m24s+1.12s)" [2434, 2448, 2546]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2546 | 30 | 348 | 50% | 2541 | 34% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2472 | 30 | 368 | 49% | 2479 | 33% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2255 | 31 | 376 | 47% | 2282 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2448 | 33 | 292 | 50% | 2444 | 33% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2369 | 34 | 296 | 50% | 2368 | 29% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2087 | 34 | 302 | 51% | 2075 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2434 | 40 | 216 | 47% | 2462 | 29% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2340 | 39 | 226 | 53% | 2315 | 29% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2129 | 43 | 184 | 50% | 2125 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |