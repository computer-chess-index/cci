# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.35 | 2026-05-13 | 2674<sub>(+121) | 3021<sub>(+93) | 3067<sub>(+89) |  |
| 0.30 | 2026-05-01 | 2553<sub>(+16) | 2928<sub>(+120) | 2978<sub>(+92) |  |
| 0.25.1 | 2026-04-12 | 2537<sub>(+89) | 2808<sub>(+96) | 2886<sub>(+114) |  |
| 0.25 | 2026-04-06 | 2448<sub>(+534) | 2712<sub>(+602) | 2772<sub>(+567) |  |
| 0.08 | 2026-02-05 | 1914 | 2110 | 2205 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gecko+<version>&body=###%20Engine%20name%0AGecko%0A%0A###%20Version%0A0.35" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-16 06:24:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30", "0.35"]
  y-axis "Elo Rating" 1900 --> 3100
  line "STC (8.0+0.08s)" [1914, 2448, 2537, 2553, 2674]
  line "STC (8.0+0.08s)" [1914, 2448, 2537, 2553, 2674]
  line "LTC (60.0+0.60s)" [2110, 2712, 2808, 2928, 3021]
  line "VLTC (2m24s+1.12s)" [2205, 2772, 2886, 2978, 3067]
  line "VLTC (2m24s+1.12s)" [2205, 2772, 2886, 2978, 3067]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.35 | VLTC <sub>(2m24s+1.12s)</sub> | 3067 | 33 | 266 | 52% | 3054 | 44% |
| 0.35 | LTC <sub>(60.0+0.60s)</sub> | 3021 | 37 | 216 | 50% | 3023 | 49% |
| 0.35 | STC <sub>(8.0+0.08s)</sub> | 2674 | 36 | 252 | 51% | 2668 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2978 | 32 | 304 | 51% | 2970 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2928 | 30 | 336 | 49% | 2938 | 43% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2553 | 36 | 280 | 50% | 2549 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2886 | 31 | 328 | 51% | 2881 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2808 | 32 | 312 | 50% | 2809 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2537 | 31 | 356 | 51% | 2527 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2772 | 36 | 236 | 55% | 2720 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2712 | 36 | 228 | 57% | 2649 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2448 | 37 | 236 | 55% | 2402 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2205 | 28 | 392 | 46% | 2255 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2110 | 29 | 384 | 48% | 2137 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1914 | 31 | 356 | 48% | 1939 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |